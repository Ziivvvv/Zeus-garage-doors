#!/usr/bin/env node
/**
 * Technical SEO Audit — Zeus Garage Doors
 * Uses Playwright to audit our own local build for SEO/schema issues.
 * Usage: node tools/seo-audit.js [url]
 * Default URL: http://localhost:8080
 */

import { chromium } from "@playwright/test";

const TARGET_URL = process.argv[2] || "http://localhost:8080";

async function auditPage(browser, url) {
  const page = await browser.newPage();
  await page.goto(url, { waitUntil: "networkidle" });

  const result = {
    url,
    title: await page.title(),
    meta: {},
    headings: {},
    schema: [],
    links: { internal: 0, external: 0, broken: [] },
    images: { total: 0, missingAlt: 0 },
    performance: {},
  };

  // Meta tags
  result.meta = await page.evaluate(() => ({
    description: document.querySelector('meta[name="description"]')?.content ?? "MISSING",
    canonical: document.querySelector('link[rel="canonical"]')?.href ?? "MISSING",
    ogTitle: document.querySelector('meta[property="og:title"]')?.content ?? "MISSING",
    ogDescription: document.querySelector('meta[property="og:description"]')?.content ?? "MISSING",
    robots: document.querySelector('meta[name="robots"]')?.content ?? "not set",
  }));

  // Headings structure
  result.headings = await page.evaluate(() => {
    const counts = {};
    ["h1", "h2", "h3", "h4"].forEach((tag) => {
      const els = document.querySelectorAll(tag);
      counts[tag] = { count: els.length, texts: [...els].map((el) => el.textContent.trim().slice(0, 80)) };
    });
    return counts;
  });

  // JSON-LD Schema
  result.schema = await page.evaluate(() =>
    [...document.querySelectorAll('script[type="application/ld+json"]')].map((el) => {
      try { return JSON.parse(el.textContent); } catch { return "PARSE_ERROR"; }
    })
  );

  // Images
  result.images = await page.evaluate(() => {
    const imgs = document.querySelectorAll("img");
    return {
      total: imgs.length,
      missingAlt: [...imgs].filter((img) => !img.alt).length,
    };
  });

  await page.close();
  return result;
}

function printReport(audit) {
  console.log("\n" + "═".repeat(60));
  console.log(`SEO AUDIT REPORT — ${audit.url}`);
  console.log("═".repeat(60));
  console.log(`\n📄 Title: ${audit.title || "⚠️  MISSING"}`);

  console.log("\n🏷️  Meta Tags:");
  for (const [k, v] of Object.entries(audit.meta)) {
    const icon = v === "MISSING" ? "❌" : "✅";
    console.log(`  ${icon} ${k}: ${v}`);
  }

  console.log("\n📐 Heading Structure:");
  for (const [tag, data] of Object.entries(audit.headings)) {
    const icon = tag === "h1" && data.count !== 1 ? "⚠️ " : "✅";
    console.log(`  ${icon} ${tag.toUpperCase()}: ${data.count} found`);
    data.texts.slice(0, 3).forEach((t) => console.log(`       → "${t}"`));
  }

  console.log("\n🔧 JSON-LD Schema:");
  if (audit.schema.length === 0) {
    console.log("  ❌ No schema found — add LocalBusiness + FAQPage schema");
  } else {
    audit.schema.forEach((s) => console.log(`  ✅ @type: ${s["@type"] ?? "unknown"}`));
  }

  console.log("\n🖼️  Images:");
  console.log(`  Total: ${audit.images.total} | Missing alt: ${audit.images.missingAlt === 0 ? "✅ 0" : "❌ " + audit.images.missingAlt}`);

  console.log("\n" + "═".repeat(60) + "\n");
}

(async () => {
  console.log(`\n🚀 Starting SEO audit for: ${TARGET_URL}`);
  const browser = await chromium.launch();
  try {
    const audit = await auditPage(browser, TARGET_URL);
    printReport(audit);
  } finally {
    await browser.close();
  }
})().catch(console.error);
