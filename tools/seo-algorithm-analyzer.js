#!/usr/bin/env node
/**
 * SEO Algorithm Analyzer — Zeus Garage Doors
 *
 * Reverse-engineers Google's top 10 results for a keyword and produces
 * a structured Markdown + JSON report of what the algorithm currently favors.
 *
 * Usage:
 *   node tools/seo-algorithm-analyzer.js "garage door spring repair Kirkland"
 *   node tools/seo-algorithm-analyzer.js "garage door spring repair Kirkland" --json
 *   node tools/seo-algorithm-analyzer.js "garage door spring repair Kirkland" --out ./report.md
 */

import { load as cheerioLoad } from "cheerio";
import { writeFileSync } from "fs";
import { join, dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));

// ─────────────────────────────────────────────────────────────────────────────
// CONFIG
// ─────────────────────────────────────────────────────────────────────────────

const TAVILY_API_KEY = process.env.TAVILY_API_KEY;
const KEYWORD = process.argv[2];
const JSON_MODE = process.argv.includes("--json");
const OUT_FLAG_IDX = process.argv.indexOf("--out");
const OUT_FILE = OUT_FLAG_IDX !== -1 ? process.argv[OUT_FLAG_IDX + 1] : null;
const MAX_RESULTS = 10;
const FETCH_TIMEOUT_MS = 12_000;

// Schema types we look for
const SCHEMA_TYPES = [
  "LocalBusiness",
  "FAQPage",
  "Service",
  "Organization",
  "WebPage",
  "BreadcrumbList",
  "Article",
  "HowTo",
  "Review",
  "AggregateRating",
];

// ─────────────────────────────────────────────────────────────────────────────
// VALIDATION
// ─────────────────────────────────────────────────────────────────────────────

if (!TAVILY_API_KEY) {
  console.error("❌  TAVILY_API_KEY not set. Run: export TAVILY_API_KEY=tvly-...");
  process.exit(1);
}
if (!KEYWORD) {
  console.error("❌  Provide a keyword: node tools/seo-algorithm-analyzer.js \"your keyword\"");
  process.exit(1);
}

// ─────────────────────────────────────────────────────────────────────────────
// STEP 1 — TAVILY SERP FETCH
// ─────────────────────────────────────────────────────────────────────────────

async function fetchTopUrls(keyword) {
  process.stderr.write(`\n🔍  Fetching SERP for: "${keyword}"\n`);

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

  if (!res.ok) throw new Error(`Tavily error ${res.status}: ${await res.text()}`);
  const data = await res.json();
  return data.results.map((r, i) => ({ rank: i + 1, url: r.url, title: r.title, snippet: r.content }));
}

// ─────────────────────────────────────────────────────────────────────────────
// STEP 2 — PAGE FETCH WITH TIMEOUT + USER-AGENT
// ─────────────────────────────────────────────────────────────────────────────

async function fetchPage(url) {
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), FETCH_TIMEOUT_MS);

  try {
    const res = await fetch(url, {
      signal: controller.signal,
      headers: {
        "User-Agent":
          "Mozilla/5.0 (compatible; ZeusGarageDoorsBot/1.0; +https://zeusgaragedoorswa.com/bot)",
        Accept: "text/html,application/xhtml+xml",
        "Accept-Language": "en-US,en;q=0.9",
      },
      redirect: "follow",
    });

    if (!res.ok) return { ok: false, status: res.status, html: null };
    const html = await res.text();
    return { ok: true, status: res.status, html };
  } catch (err) {
    return { ok: false, status: 0, error: err.message, html: null };
  } finally {
    clearTimeout(timer);
  }
}

// ─────────────────────────────────────────────────────────────────────────────
// STEP 3 — HTML ANALYSIS
// ─────────────────────────────────────────────────────────────────────────────

function extractText($) {
  // Remove script, style, nav, footer, header noise
  $("script, style, noscript, nav, footer, header, aside, [role='banner'], [role='navigation']").remove();
  return $("body").text().replace(/\s+/g, " ").trim();
}

function countWords(text) {
  return text.split(/\s+/).filter(Boolean).length;
}

function extractHeadings($) {
  const headings = { h1: [], h2: [], h3: [] };
  ["h1", "h2", "h3"].forEach((tag) => {
    $(tag).each((_, el) => {
      const text = $(el).text().replace(/\s+/g, " ").trim();
      if (text) headings[tag].push(text);
    });
  });
  return headings;
}

function extractSchema($) {
  const found = [];
  $('script[type="application/ld+json"]').each((_, el) => {
    try {
      const raw = $(el).html();
      if (!raw) return;
      const parsed = JSON.parse(raw);

      const flatten = (obj) => {
        if (!obj) return;
        const type = obj["@type"];
        if (Array.isArray(type)) {
          type.forEach((t) => { if (SCHEMA_TYPES.includes(t)) found.push(t); });
        } else if (type && SCHEMA_TYPES.includes(type)) {
          found.push(type);
        }
        // Recurse into @graph
        if (obj["@graph"]) obj["@graph"].forEach(flatten);
      };

      flatten(parsed);
    } catch {
      // Malformed JSON-LD — skip
    }
  });
  return [...new Set(found)];
}

function computeKeywordFrequency(text, keyword) {
  const tokens = text.toLowerCase().split(/\s+/);
  const totalWords = tokens.length;
  const kwTokens = keyword.toLowerCase().split(/\s+/);

  // Count exact phrase matches
  let exactMatches = 0;
  for (let i = 0; i <= tokens.length - kwTokens.length; i++) {
    if (kwTokens.every((t, j) => tokens[i + j] === t)) exactMatches++;
  }

  // Count individual keyword tokens
  const tokenFreq = {};
  kwTokens.forEach((kwToken) => {
    let count = 0;
    tokens.forEach((t) => { if (t === kwToken) count++; });
    tokenFreq[kwToken] = { count, density: totalWords > 0 ? (count / totalWords) * 100 : 0 };
  });

  return { exactPhraseCount: exactMatches, tokenFrequency: tokenFreq, totalWords };
}

function keywordInHeading(headings, keyword) {
  const kw = keyword.toLowerCase();
  const kwWords = kw.split(/\s+/);

  const check = (text) => {
    const lower = text.toLowerCase();
    // Exact phrase
    if (lower.includes(kw)) return "exact";
    // Partial (2+ keyword words present)
    const matchCount = kwWords.filter((w) => lower.includes(w)).length;
    if (matchCount >= Math.ceil(kwWords.length * 0.6)) return "partial";
    return null;
  };

  return {
    h1: headings.h1.map(check).filter(Boolean),
    h2: headings.h2.map(check).filter(Boolean),
    h3: headings.h3.map(check).filter(Boolean),
  };
}

function extractMetaDescription($) {
  return (
    $('meta[name="description"]').attr("content") ||
    $('meta[property="og:description"]').attr("content") ||
    null
  );
}

function hasMobileViewport($) {
  return $('meta[name="viewport"]').length > 0;
}

// ─────────────────────────────────────────────────────────────────────────────
// STEP 4 — ANALYZE ONE URL
// ─────────────────────────────────────────────────────────────────────────────

async function analyzeUrl(rank, url, keyword) {
  process.stderr.write(`  [${rank}/10] Analyzing: ${url.slice(0, 70)}...\n`);
  const { ok, status, html, error } = await fetchPage(url);

  if (!ok || !html) {
    return { rank, url, fetchable: false, status, error: error || `HTTP ${status}` };
  }

  const $ = cheerioLoad(html);
  const bodyText = extractText($);
  const headings = extractHeadings($);
  const schemaTypes = extractSchema($);
  const kwFreq = computeKeywordFrequency(bodyText, keyword);
  const kwInHeadings = keywordInHeading(headings, keyword);
  const metaDesc = extractMetaDescription($);
  const title = $("title").text().trim() || null;

  return {
    rank,
    url,
    fetchable: true,
    status,
    title,
    metaDescription: metaDesc,
    mobileReady: hasMobileViewport($),
    wordCount: countWords(bodyText),
    headings: {
      h1Count: headings.h1.length,
      h2Count: headings.h2.length,
      h3Count: headings.h3.length,
      h1Texts: headings.h1,
      h2Texts: headings.h2.slice(0, 8),
      h3Texts: headings.h3.slice(0, 8),
    },
    keywordInHeadings: kwInHeadings,
    keywordFrequency: kwFreq,
    schemaTypes,
    hasLocalBusiness: schemaTypes.includes("LocalBusiness"),
    hasFAQPage: schemaTypes.includes("FAQPage"),
    hasService: schemaTypes.includes("Service"),
    hasBreadcrumb: schemaTypes.includes("BreadcrumbList"),
  };
}

// ─────────────────────────────────────────────────────────────────────────────
// STEP 5 — SYNTHESIS & PATTERN RECOGNITION
// ─────────────────────────────────────────────────────────────────────────────

function synthesize(keyword, results) {
  const fetchable = results.filter((r) => r.fetchable);
  const n = fetchable.length;
  if (n === 0) return { error: "No pages could be fetched." };

  // Word count stats
  const wordCounts = fetchable.map((r) => r.wordCount).sort((a, b) => a - b);
  const avgWords = Math.round(wordCounts.reduce((s, v) => s + v, 0) / n);
  const medianWords = wordCounts[Math.floor(n / 2)];
  const minWords = wordCounts[0];
  const maxWords = wordCounts[n - 1];

  // Schema prevalence
  const pctLocalBusiness = Math.round((fetchable.filter((r) => r.hasLocalBusiness).length / n) * 100);
  const pctFAQ = Math.round((fetchable.filter((r) => r.hasFAQPage).length / n) * 100);
  const pctService = Math.round((fetchable.filter((r) => r.hasService).length / n) * 100);
  const pctBreadcrumb = Math.round((fetchable.filter((r) => r.hasBreadcrumb).length / n) * 100);

  // H1 keyword presence
  const h1ExactCount = fetchable.filter((r) => r.keywordInHeadings.h1.includes("exact")).length;
  const h1PartialCount = fetchable.filter((r) => r.keywordInHeadings.h1.includes("partial")).length;

  // H2/H3 keyword presence
  const h2KwCount = fetchable.filter((r) => r.keywordInHeadings.h2.length > 0).length;
  const h3KwCount = fetchable.filter((r) => r.keywordInHeadings.h3.length > 0).length;

  // Average H2/H3 counts
  const avgH2 = Math.round(fetchable.reduce((s, r) => s + r.headings.h2Count, 0) / n);
  const avgH3 = Math.round(fetchable.reduce((s, r) => s + r.headings.h3Count, 0) / n);

  // Keyword density averages
  const kwTokens = keyword.toLowerCase().split(/\s+/);
  const avgDensities = {};
  kwTokens.forEach((token) => {
    const densities = fetchable
      .map((r) => r.keywordFrequency.tokenFrequency[token]?.density || 0)
      .filter((d) => d > 0);
    avgDensities[token] = densities.length
      ? parseFloat((densities.reduce((s, v) => s + v, 0) / densities.length).toFixed(2))
      : 0;
  });

  // Most common H2 topics (frequency across all pages)
  const allH2s = fetchable.flatMap((r) => r.headings.h2Texts.map((t) => t.toLowerCase()));
  const h2Topics = {};
  allH2s.forEach((h) => {
    // Extract meaningful 2–3 word phrases
    const words = h.split(/\s+/).filter((w) => w.length > 3);
    words.forEach((w) => {
      h2Topics[w] = (h2Topics[w] || 0) + 1;
    });
  });
  const topH2Topics = Object.entries(h2Topics)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 15)
    .map(([word, count]) => ({ word, count, pct: Math.round((count / n) * 100) }));

  // Algorithmic recommendations
  const recommendations = [];

  if (pctFAQ >= 50)
    recommendations.push(`✅ FAQ Schema is used by ${pctFAQ}% of top pages — REQUIRED for this keyword.`);
  else
    recommendations.push(`⚠️  FAQ Schema only present in ${pctFAQ}% — low bar, add it for competitive edge.`);

  if (pctLocalBusiness >= 60)
    recommendations.push(`✅ LocalBusiness Schema in ${pctLocalBusiness}% of results — already in your build.`);

  if (h1ExactCount >= Math.ceil(n * 0.5))
    recommendations.push(
      `✅ Exact-match keyword in H1: ${h1ExactCount}/${n} pages — H1 must contain "${keyword}".`
    );
  else if (h1PartialCount >= Math.ceil(n * 0.5))
    recommendations.push(
      `🔶 Partial keyword in H1: ${h1PartialCount}/${n} pages — H1 should include major keyword terms.`
    );

  if (avgWords >= 1000)
    recommendations.push(
      `📝 Avg word count: ${avgWords} words. Target ${Math.round(avgWords * 1.1)}+ to outpace competition.`
    );
  else
    recommendations.push(`📝 Avg word count only ${avgWords} — thin content opportunity. Target 1,000+ words.`);

  if (avgH2 >= 5)
    recommendations.push(`📐 Avg ${avgH2} H2 subheadings. Use at least ${avgH2} H2s with topically relevant variations.`);

  if (h2KwCount >= Math.ceil(n * 0.5))
    recommendations.push(`🔑 Keyword appears in H2 in ${h2KwCount}/${n} pages — include keyword in at least 1 H2.`);

  recommendations.push(
    `🗝️  Target keyword densities: ${Object.entries(avgDensities).map(([t, d]) => `"${t}": ${d}%`).join(", ")}`
  );

  return {
    keyword,
    analyzedPages: n,
    totalAttempted: results.length,
    wordCountStats: { avg: avgWords, median: medianWords, min: minWords, max: maxWords },
    schemaPrevalence: {
      localBusiness: `${pctLocalBusiness}%`,
      faqPage: `${pctFAQ}%`,
      service: `${pctService}%`,
      breadcrumb: `${pctBreadcrumb}%`,
    },
    headingPatterns: {
      avgH2Subheadings: avgH2,
      avgH3Subheadings: avgH3,
      h1ExactKeyword: `${h1ExactCount}/${n}`,
      h1PartialKeyword: `${h1PartialCount}/${n}`,
      h2ContainsKeyword: `${h2KwCount}/${n}`,
      h3ContainsKeyword: `${h3KwCount}/${n}`,
    },
    keywordDensityAverages: avgDensities,
    topH2Topics,
    algorithmicRecommendations: recommendations,
  };
}

// ─────────────────────────────────────────────────────────────────────────────
// STEP 6 — MARKDOWN REPORT
// ─────────────────────────────────────────────────────────────────────────────

function buildMarkdownReport(synthesis, results) {
  const ts = new Date().toISOString().split("T")[0];
  const lines = [];

  lines.push(`# SEO Algorithm Analysis Report`);
  lines.push(`**Keyword:** \`${synthesis.keyword}\``);
  lines.push(`**Date:** ${ts}  |  **Pages analyzed:** ${synthesis.analyzedPages}/${synthesis.totalAttempted}`);
  lines.push("");

  lines.push(`## Algorithmic Recommendations`);
  lines.push("*What the algorithm currently favors for this keyword:*");
  lines.push("");
  synthesis.algorithmicRecommendations.forEach((r) => lines.push(`- ${r}`));
  lines.push("");

  lines.push(`## Content Length`);
  lines.push(`| Metric | Value |`);
  lines.push(`|--------|-------|`);
  lines.push(`| Average word count | **${synthesis.wordCountStats.avg}** |`);
  lines.push(`| Median word count  | ${synthesis.wordCountStats.median} |`);
  lines.push(`| Minimum            | ${synthesis.wordCountStats.min} |`);
  lines.push(`| Maximum            | ${synthesis.wordCountStats.max} |`);
  lines.push("");

  lines.push(`## Schema Prevalence (Top ${synthesis.analyzedPages} Results)`);
  lines.push(`| Schema Type | Pages Using It |`);
  lines.push(`|-------------|----------------|`);
  Object.entries(synthesis.schemaPrevalence).forEach(([type, pct]) => {
    const label = { localBusiness: "LocalBusiness", faqPage: "FAQPage", service: "Service", breadcrumb: "BreadcrumbList" }[type] || type;
    lines.push(`| ${label} | **${pct}** |`);
  });
  lines.push("");

  lines.push(`## Heading Structure Patterns`);
  lines.push(`| Signal | Value |`);
  lines.push(`|--------|-------|`);
  const hp = synthesis.headingPatterns;
  lines.push(`| Avg H2 subheadings | **${hp.avgH2Subheadings}** |`);
  lines.push(`| Avg H3 subheadings | ${hp.avgH3Subheadings} |`);
  lines.push(`| H1 contains exact keyword | **${hp.h1ExactKeyword}** pages |`);
  lines.push(`| H1 contains partial keyword | ${hp.h1PartialKeyword} pages |`);
  lines.push(`| H2 contains keyword | **${hp.h2ContainsKeyword}** pages |`);
  lines.push(`| H3 contains keyword | ${hp.h3ContainsKeyword} pages |`);
  lines.push("");

  lines.push(`## Keyword Density Averages`);
  lines.push(`| Token | Avg Density |`);
  lines.push(`|-------|-------------|`);
  Object.entries(synthesis.keywordDensityAverages).forEach(([token, density]) => {
    lines.push(`| \`${token}\` | ${density}% |`);
  });
  lines.push("");

  lines.push(`## Top H2 Topics (Semantic Cluster)`);
  lines.push("*Words appearing most frequently across competitor H2 headings:*");
  lines.push("");
  lines.push(`| Topic Word | Count | % of Pages |`);
  lines.push(`|------------|-------|------------|`);
  synthesis.topH2Topics.slice(0, 10).forEach(({ word, count, pct }) => {
    lines.push(`| ${word} | ${count} | ${pct}% |`);
  });
  lines.push("");

  lines.push(`## Per-Page Breakdown`);
  lines.push("");
  results.forEach((r) => {
    if (!r.fetchable) {
      lines.push(`### #${r.rank} — ⚠️ Could Not Fetch`);
      lines.push(`**URL:** ${r.url}`);
      lines.push(`**Error:** ${r.error || `HTTP ${r.status}`}`);
      lines.push("");
      return;
    }
    lines.push(`### #${r.rank} — ${r.title || "(no title)"}`);
    lines.push(`**URL:** ${r.url}`);
    lines.push(`**Words:** ${r.wordCount}  |  **H1:** ${r.headings.h1Count}  |  **H2:** ${r.headings.h2Count}  |  **H3:** ${r.headings.h3Count}`);
    lines.push(`**Schema:** ${r.schemaTypes.length > 0 ? r.schemaTypes.join(", ") : "_none detected_"}`);
    if (r.headings.h1Texts.length > 0) {
      lines.push(`**H1:** "${r.headings.h1Texts[0]}"`);
    }
    const kwH1 = r.keywordInHeadings.h1;
    if (kwH1.length > 0) lines.push(`**Keyword in H1:** ${kwH1[0]}`);
    lines.push("");
  });

  return lines.join("\n");
}

// ─────────────────────────────────────────────────────────────────────────────
// MAIN
// ─────────────────────────────────────────────────────────────────────────────

async function main() {
  // 1. Get top URLs from Tavily
  const serpResults = await fetchTopUrls(KEYWORD);
  process.stderr.write(`\n📋  Found ${serpResults.length} URLs. Fetching pages...\n\n`);

  // 2. Analyze each URL (with concurrency limit of 3 to be respectful)
  const analyzed = [];
  for (let i = 0; i < serpResults.length; i += 3) {
    const batch = serpResults.slice(i, i + 3);
    const results = await Promise.all(
      batch.map((s) => analyzeUrl(s.rank, s.url, KEYWORD))
    );
    analyzed.push(...results);
  }

  // 3. Synthesize patterns
  const synthesis = synthesize(KEYWORD, analyzed);

  // 4. Output
  if (JSON_MODE) {
    const output = JSON.stringify({ synthesis, pages: analyzed }, null, 2);
    if (OUT_FILE) {
      writeFileSync(OUT_FILE, output);
      process.stderr.write(`\n✅  JSON report saved to: ${OUT_FILE}\n`);
    } else {
      process.stdout.write(output);
    }
  } else {
    const report = buildMarkdownReport(synthesis, analyzed);
    if (OUT_FILE) {
      writeFileSync(OUT_FILE, report);
      process.stderr.write(`\n✅  Markdown report saved to: ${OUT_FILE}\n`);
    } else {
      process.stdout.write(report + "\n");
    }
  }
}

main().catch((err) => {
  console.error("Fatal:", err.message);
  process.exit(1);
});
