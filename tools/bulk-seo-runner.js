#!/usr/bin/env node
/**
 * bulk-seo-runner.js — Zeus Garage Doors
 *
 * Runs seo-algorithm-analyzer logic across every keyword in a list,
 * compiles findings into tools/reports/master_seo_report.csv.
 *
 * Key features:
 *   - Checkpoint/resume: interrupted runs pick up where they left off
 *   - Configurable delay between requests (default 7s)
 *   - Live progress bar with ETA
 *   - Per-keyword errors are logged and skipped — run never dies
 *   - CSV output compatible with Excel, Google Sheets, Numbers
 *
 * Usage:
 *   node tools/bulk-seo-runner.js
 *   node tools/bulk-seo-runner.js --keywords tools/my-keywords.txt
 *   node tools/bulk-seo-runner.js --delay 10
 *   node tools/bulk-seo-runner.js --limit 20          # test with first 20
 *   node tools/bulk-seo-runner.js --resume            # skip already-done keywords
 *
 * Background (overnight):
 *   nohup node tools/bulk-seo-runner.js > tools/reports/run.log 2>&1 &
 *   echo $! > tools/reports/run.pid
 */

import { load as cheerioLoad } from "cheerio";
import { readFileSync, writeFileSync, existsSync, appendFileSync, mkdirSync } from "fs";
import { join, dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));

// ─────────────────────────────────────────────────────────────────────────────
// CLI FLAGS
// ─────────────────────────────────────────────────────────────────────────────

const args = process.argv.slice(2);
const flag = (name) => {
  const i = args.indexOf(name);
  return i !== -1 ? (args[i + 1] ?? true) : null;
};

const KEYWORDS_FILE  = flag("--keywords") || join(__dirname, "keywords.txt");
const DELAY_SEC      = parseInt(flag("--delay") || "7", 10);
const LIMIT          = parseInt(flag("--limit") || "0", 10); // 0 = all
const RESUME_MODE    = args.includes("--resume");
const REPORTS_DIR    = join(__dirname, "reports");
const CSV_FILE       = join(REPORTS_DIR, "master_seo_report.csv");
const CHECKPOINT_FILE = join(REPORTS_DIR, ".checkpoint.json");
const ERROR_LOG      = join(REPORTS_DIR, "errors.log");

const TAVILY_API_KEY = process.env.TAVILY_API_KEY;
const FETCH_TIMEOUT  = 12_000;
const MAX_RESULTS    = 10;

const SCHEMA_TYPES = [
  "LocalBusiness", "FAQPage", "Service", "Organization",
  "WebPage", "BreadcrumbList", "Article", "HowTo",
  "Review", "AggregateRating",
];

// ─────────────────────────────────────────────────────────────────────────────
// VALIDATION
// ─────────────────────────────────────────────────────────────────────────────

if (!TAVILY_API_KEY) {
  console.error("❌  TAVILY_API_KEY not set.\n   Run: export TAVILY_API_KEY=tvly-...");
  process.exit(1);
}
if (!existsSync(KEYWORDS_FILE)) {
  console.error(`❌  Keywords file not found: ${KEYWORDS_FILE}`);
  process.exit(1);
}

mkdirSync(REPORTS_DIR, { recursive: true });

// ─────────────────────────────────────────────────────────────────────────────
// UTILITIES
// ─────────────────────────────────────────────────────────────────────────────

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

function formatDuration(seconds) {
  if (seconds < 60) return `${Math.round(seconds)}s`;
  const m = Math.floor(seconds / 60);
  const s = Math.round(seconds % 60);
  if (m < 60) return `${m}m ${s}s`;
  const h = Math.floor(m / 60);
  const rm = m % 60;
  return `${h}h ${rm}m`;
}

function csvEscape(val) {
  if (val === null || val === undefined) return "";
  const str = String(val).replace(/"/g, '""');
  return str.includes(",") || str.includes('"') || str.includes("\n")
    ? `"${str}"`
    : str;
}

function renderProgress(done, total, startTime, keyword) {
  const pct = Math.round((done / total) * 100);
  const elapsed = (Date.now() - startTime) / 1000;
  const rate = done > 0 ? elapsed / done : 0;
  const remaining = rate * (total - done);
  const bar = "█".repeat(Math.floor(pct / 5)) + "░".repeat(20 - Math.floor(pct / 5));
  const eta = done > 0 ? `ETA ${formatDuration(remaining)}` : "ETA --";
  const kw = keyword.length > 45 ? keyword.slice(0, 42) + "..." : keyword.padEnd(45);
  process.stdout.write(
    `\r[${bar}] ${String(done).padStart(3)}/${total} (${pct}%) ${eta}  ${kw}`
  );
}

function logError(keyword, message) {
  const line = `[${new Date().toISOString()}] "${keyword}" — ${message}\n`;
  appendFileSync(ERROR_LOG, line);
}

// ─────────────────────────────────────────────────────────────────────────────
// CHECKPOINT
// ─────────────────────────────────────────────────────────────────────────────

function loadCheckpoint() {
  if (!existsSync(CHECKPOINT_FILE)) return new Set();
  try {
    const data = JSON.parse(readFileSync(CHECKPOINT_FILE, "utf-8"));
    return new Set(data.completed || []);
  } catch {
    return new Set();
  }
}

function saveCheckpoint(completed) {
  writeFileSync(CHECKPOINT_FILE, JSON.stringify({ completed: [...completed], updatedAt: new Date().toISOString() }, null, 2));
}

// ─────────────────────────────────────────────────────────────────────────────
// STEP 1 — TAVILY SERP
// ─────────────────────────────────────────────────────────────────────────────

async function fetchTopUrls(keyword) {
  const res = await fetch("https://api.tavily.com/search", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      api_key: TAVILY_API_KEY,
      query: keyword,
      search_depth: "advanced",
      max_results: MAX_RESULTS,
      include_raw_content: false,
    }),
  });
  if (!res.ok) throw new Error(`Tavily ${res.status}: ${await res.text()}`);
  const data = await res.json();
  return data.results.map((r, i) => ({ rank: i + 1, url: r.url }));
}

// ─────────────────────────────────────────────────────────────────────────────
// STEP 2 — PAGE FETCH
// ─────────────────────────────────────────────────────────────────────────────

async function fetchPage(url) {
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), FETCH_TIMEOUT);
  try {
    const res = await fetch(url, {
      signal: controller.signal,
      headers: {
        "User-Agent": "Mozilla/5.0 (compatible; ZeusGarageDoorsBot/1.0; +https://zeusgaragedoorswa.com/bot)",
        Accept: "text/html,application/xhtml+xml",
        "Accept-Language": "en-US,en;q=0.9",
      },
      redirect: "follow",
    });
    if (!res.ok) return { ok: false, html: null };
    const html = await res.text();
    return { ok: true, html };
  } catch {
    return { ok: false, html: null };
  } finally {
    clearTimeout(timer);
  }
}

// ─────────────────────────────────────────────────────────────────────────────
// STEP 3 — PARSE & ANALYZE ONE PAGE
// ─────────────────────────────────────────────────────────────────────────────

function analyzePage(html, keyword) {
  const $ = cheerioLoad(html);
  $("script, style, noscript, nav, footer, header, aside").remove();

  const bodyText = $("body").text().replace(/\s+/g, " ").trim();
  const wordCount = bodyText.split(/\s+/).filter(Boolean).length;

  // Headings
  const h1s = $("h1").map((_, el) => $(el).text().replace(/\s+/g, " ").trim()).get();
  const h2s = $("h2").map((_, el) => $(el).text().replace(/\s+/g, " ").trim()).get();

  // Schema
  const schemaFound = [];
  $('script[type="application/ld+json"]').each((_, el) => {
    try {
      const parsed = JSON.parse($(el).html() || "{}");
      const flatten = (obj) => {
        if (!obj) return;
        const t = obj["@type"];
        if (Array.isArray(t)) t.forEach((x) => { if (SCHEMA_TYPES.includes(x)) schemaFound.push(x); });
        else if (t && SCHEMA_TYPES.includes(t)) schemaFound.push(t);
        if (obj["@graph"]) obj["@graph"].forEach(flatten);
      };
      flatten(parsed);
    } catch { /* skip malformed */ }
  });
  const schemas = [...new Set(schemaFound)];

  // Keyword in H1
  const kw = keyword.toLowerCase();
  const kwWords = kw.split(/\s+/);
  const checkH1 = (text) => {
    const lower = text.toLowerCase();
    if (lower.includes(kw)) return "exact";
    const matchCount = kwWords.filter((w) => lower.includes(w)).length;
    return matchCount >= Math.ceil(kwWords.length * 0.6) ? "partial" : null;
  };
  const h1Matches = h1s.map(checkH1).filter(Boolean);

  return { wordCount, h1Count: h1s.length, h2Count: h2s.length, schemas, h1Match: h1Matches[0] || null, h2s };
}

// ─────────────────────────────────────────────────────────────────────────────
// STEP 4 — ANALYZE ONE KEYWORD (SERP + PAGES)
// ─────────────────────────────────────────────────────────────────────────────

async function analyzeKeyword(keyword) {
  const serpResults = await fetchTopUrls(keyword);

  const pageResults = [];
  for (let i = 0; i < serpResults.length; i += 3) {
    const batch = serpResults.slice(i, i + 3);
    const batchResults = await Promise.all(
      batch.map(async (s) => {
        const { ok, html } = await fetchPage(s.url);
        if (!ok || !html) return null;
        return analyzePage(html, keyword);
      })
    );
    pageResults.push(...batchResults.filter(Boolean));
  }

  if (pageResults.length === 0) throw new Error("No pages could be fetched");

  const n = pageResults.length;

  // Word count stats
  const wordCounts = pageResults.map((p) => p.wordCount).sort((a, b) => a - b);
  const avgWordCount = Math.round(wordCounts.reduce((s, v) => s + v, 0) / n);
  const medianWordCount = wordCounts[Math.floor(n / 2)];

  // Schema prevalence
  const pct = (key) => Math.round((pageResults.filter((p) => p.schemas.includes(key)).length / n) * 100);
  const faqPct           = pct("FAQPage");
  const localBizPct      = pct("LocalBusiness");
  const servicePct       = pct("Service");
  const breadcrumbPct    = pct("BreadcrumbList");

  // Missing schemas (opportunities where < 50% of competitors have it)
  const missedSchemas = [];
  if (faqPct < 50)       missedSchemas.push(`FAQPage(${faqPct}%)`);
  if (localBizPct < 50)  missedSchemas.push(`LocalBusiness(${localBizPct}%)`);
  if (servicePct < 50)   missedSchemas.push(`Service(${servicePct}%)`);
  if (breadcrumbPct < 50) missedSchemas.push(`BreadcrumbList(${breadcrumbPct}%)`);

  // H1 patterns
  const h1ExactCount   = pageResults.filter((p) => p.h1Match === "exact").length;
  const h1PartialCount = pageResults.filter((p) => p.h1Match === "partial").length;

  // Avg H2 count
  const avgH2Count = Math.round(pageResults.reduce((s, p) => s + p.h2Count, 0) / n);

  // Top H2 topic words
  const allH2Words = {};
  pageResults.flatMap((p) => p.h2s).forEach((h2) => {
    h2.toLowerCase().split(/\s+/).filter((w) => w.length > 4).forEach((w) => {
      allH2Words[w] = (allH2Words[w] || 0) + 1;
    });
  });
  const topH2Topics = Object.entries(allH2Words)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 5)
    .map(([w]) => w)
    .join(" | ");

  // Primary recommendation
  let topRec = "";
  if (h1ExactCount === 0 && h1PartialCount === 0)
    topRec = "Add exact keyword to H1";
  else if (faqPct === 0)
    topRec = "Add FAQPage schema — 0% competitors have it";
  else if (avgWordCount < 800)
    topRec = `Thin content gap — avg ${avgWordCount} words, add 800+`;
  else
    topRec = `Match avg ${avgWordCount} words, use ${avgH2Count}+ H2s`;

  return {
    keyword,
    analyzedPages: n,
    avgWordCount,
    medianWordCount,
    faqSchemaPct: faqPct,
    localBizSchemaPct: localBizPct,
    serviceSchemaPct: servicePct,
    breadcrumbSchemaPct: breadcrumbPct,
    missingSchemasOpportunity: missedSchemas.join("; ") || "none",
    h1ExactMatch: `${h1ExactCount}/${n}`,
    h1PartialMatch: `${h1PartialCount}/${n}`,
    avgH2Count,
    topH2Topics,
    topRecommendation: topRec,
  };
}

// ─────────────────────────────────────────────────────────────────────────────
// CSV HELPERS
// ─────────────────────────────────────────────────────────────────────────────

const CSV_HEADERS = [
  "Keyword",
  "Analyzed Pages",
  "Avg Word Count",
  "Median Word Count",
  "FAQ Schema % (competitors)",
  "LocalBusiness Schema %",
  "Service Schema %",
  "Breadcrumb Schema %",
  "Missing Schema Opportunities",
  "H1 Exact Match (n/10)",
  "H1 Partial Match (n/10)",
  "Avg H2 Count",
  "Top H2 Topics",
  "Top Recommendation",
  "Run Timestamp",
];

function rowToCsv(r, ts) {
  return [
    r.keyword,
    r.analyzedPages,
    r.avgWordCount,
    r.medianWordCount,
    r.faqSchemaPct,
    r.localBizSchemaPct,
    r.serviceSchemaPct,
    r.breadcrumbSchemaPct,
    r.missingSchemasOpportunity,
    r.h1ExactMatch,
    r.h1PartialMatch,
    r.avgH2Count,
    r.topH2Topics,
    r.topRecommendation,
    ts,
  ].map(csvEscape).join(",");
}

function initCsv() {
  // Only write header if file doesn't exist yet (resume mode keeps existing rows)
  if (!existsSync(CSV_FILE)) {
    writeFileSync(CSV_FILE, CSV_HEADERS.map(csvEscape).join(",") + "\n");
  }
}

function appendRow(row, ts) {
  appendFileSync(CSV_FILE, rowToCsv(row, ts) + "\n");
}

// ─────────────────────────────────────────────────────────────────────────────
// MAIN
// ─────────────────────────────────────────────────────────────────────────────

async function main() {
  // Load keywords
  const allKeywords = readFileSync(KEYWORDS_FILE, "utf-8")
    .split("\n")
    .map((line) => line.trim())
    .filter((line) => line.length > 0 && !line.startsWith("#"));

  const keywords = LIMIT > 0 ? allKeywords.slice(0, LIMIT) : allKeywords;
  const total = keywords.length;

  // Resume: load already-completed keywords
  const completed = RESUME_MODE ? loadCheckpoint() : new Set();
  const pending = keywords.filter((kw) => !completed.has(kw));

  console.log(`\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━`);
  console.log(`  Zeus Garage Doors — Bulk SEO Runner`);
  console.log(`━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━`);
  console.log(`  Total keywords : ${total}`);
  console.log(`  Already done   : ${completed.size}`);
  console.log(`  To process     : ${pending.length}`);
  console.log(`  Delay between  : ${DELAY_SEC}s`);
  console.log(`  Est. total time: ~${formatDuration(pending.length * (DELAY_SEC + 30))}`);
  console.log(`  Output CSV     : ${CSV_FILE}`);
  console.log(`  Checkpoint     : ${CHECKPOINT_FILE}`);
  console.log(`━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n`);

  if (pending.length === 0) {
    console.log("✅  All keywords already processed. Use without --resume to rerun.");
    return;
  }

  initCsv();

  const startTime = Date.now();
  let doneCount = completed.size;
  let successCount = 0;
  let errorCount = 0;

  for (let i = 0; i < pending.length; i++) {
    const keyword = pending[i];
    doneCount++;
    renderProgress(doneCount, total, startTime, keyword);

    try {
      const result = await analyzeKeyword(keyword);
      const ts = new Date().toISOString();
      appendRow(result, ts);
      completed.add(keyword);
      saveCheckpoint(completed);
      successCount++;
    } catch (err) {
      errorCount++;
      logError(keyword, err.message);
      // Write a placeholder row so CSV stays aligned
      appendFileSync(CSV_FILE,
        [csvEscape(keyword), "ERROR", "", "", "", "", "", "", csvEscape(err.message), "", "", "", "", "", new Date().toISOString()].join(",") + "\n"
      );
    }

    // Delay between keywords (skip after the last one)
    if (i < pending.length - 1) {
      // Jitter ±1s to avoid pattern detection
      const jitter = Math.random() * 2000;
      await sleep(DELAY_SEC * 1000 + jitter);
    }
  }

  const elapsed = (Date.now() - startTime) / 1000;

  process.stdout.write("\n");
  console.log(`\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━`);
  console.log(`  ✅  Run complete in ${formatDuration(elapsed)}`);
  console.log(`  ✓  Successful   : ${successCount}`);
  console.log(`  ✗  Errors       : ${errorCount}${errorCount > 0 ? ` (see ${ERROR_LOG})` : ""}`);
  console.log(`  📄 Report saved : ${CSV_FILE}`);
  console.log(`━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n`);
}

main().catch((err) => {
  console.error("\nFatal:", err.message);
  process.exit(1);
});
