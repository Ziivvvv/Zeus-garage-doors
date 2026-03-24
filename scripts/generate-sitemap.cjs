/**
 * generate-sitemap.js — Zeus Garage Doors
 * Run: node scripts/generate-sitemap.js
 * Outputs: public/sitemap.xml
 *
 * Submit to Google Search Console immediately after deployment.
 * Re-run whenever new pages or blog posts are added.
 */

const fs = require("fs");
const path = require("path");

const BASE_URL = "https://zeusgaragedoorswa.com";
const TODAY = new Date().toISOString().split("T")[0]; // YYYY-MM-DD

// ─────────────────────────────────────────────
// ALL PAGES — update this list as pages are added
// ─────────────────────────────────────────────

const PAGES = [
  // ── Core (highest priority)
  { url: "/",                           changefreq: "weekly",  priority: "1.0" },
  { url: "/about",                      changefreq: "monthly", priority: "0.7" },
  { url: "/contact",                    changefreq: "monthly", priority: "0.8" },
  { url: "/privacy",                    changefreq: "yearly",  priority: "0.3" },
  { url: "/terms",                      changefreq: "yearly",  priority: "0.3" },
  { url: "/blog",                       changefreq: "weekly",  priority: "0.7" },
  { url: "/safety-checklist",            changefreq: "monthly", priority: "0.8" },

  // ── Service pages
  { url: "/services/spring-replacement",  changefreq: "monthly", priority: "0.9" },
  { url: "/services/opener-repair",       changefreq: "monthly", priority: "0.9" },
  { url: "/services/off-track-repair",    changefreq: "monthly", priority: "0.9" },
  { url: "/services/cable-replacement",   changefreq: "monthly", priority: "0.8" },
  { url: "/services/panel-replacement",   changefreq: "monthly", priority: "0.8" },
  { url: "/services/new-installation",    changefreq: "monthly", priority: "0.8" },
  { url: "/services/gate-repair",         changefreq: "monthly", priority: "0.7" },

  // ── Location pages
  { url: "/locations/kirkland-wa",      changefreq: "monthly", priority: "0.9" },
  { url: "/locations/bellevue-wa",      changefreq: "monthly", priority: "0.9" },
  { url: "/locations/redmond-wa",       changefreq: "monthly", priority: "0.8" },
  { url: "/locations/mercer-island-wa", changefreq: "monthly", priority: "0.8" },
  { url: "/locations/lynnwood-wa",      changefreq: "monthly", priority: "0.8" },
  { url: "/locations/bothell-wa",       changefreq: "monthly", priority: "0.8" },
  { url: "/locations/woodinville-wa",   changefreq: "monthly", priority: "0.8" },

  // ── Blog posts (add new posts here)
  { url: "/blog/seattle-rain-garage-door-springs",     changefreq: "yearly", priority: "0.7", lastmod: "2025-01-15" },
  { url: "/blog/choose-garage-door-company-kirkland",  changefreq: "yearly", priority: "0.7", lastmod: "2025-01-22" },
  { url: "/blog/liftmaster-vs-genie-pnw",              changefreq: "yearly", priority: "0.7", lastmod: "2025-01-29" },
  { url: "/blog/garage-door-wont-open-what-to-do",     changefreq: "yearly", priority: "0.7", lastmod: "2025-02-05" },
  { url: "/blog/garage-door-repair-cost-kirkland-wa",  changefreq: "yearly", priority: "0.7", lastmod: "2025-02-12" },
  { url: "/blog/garage-door-opens-by-itself",          changefreq: "yearly", priority: "0.7", lastmod: "2026-03-23" },
  { url: "/blog/spring-replacement-cost-factors",      changefreq: "yearly", priority: "0.7", lastmod: "2026-03-24" },
  { url: "/blog/best-garage-door-opener-pnw",          changefreq: "yearly", priority: "0.7", lastmod: "2026-03-25" },
];

// ─────────────────────────────────────────────
// GENERATE XML
// ─────────────────────────────────────────────

function generateSitemap(pages) {
  const urlEntries = pages
    .map(
      ({ url, changefreq, priority, lastmod }) => `
  <url>
    <loc>${BASE_URL}${url}</loc>
    <lastmod>${lastmod || TODAY}</lastmod>
    <changefreq>${changefreq}</changefreq>
    <priority>${priority}</priority>
  </url>`
    )
    .join("");

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">
${urlEntries}
</urlset>`;
}

// ─────────────────────────────────────────────
// WRITE FILE
// ─────────────────────────────────────────────

const outputDir = path.join(__dirname, "..", "public");
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

const xml = generateSitemap(PAGES);
const outputPath = path.join(outputDir, "sitemap.xml");
fs.writeFileSync(outputPath, xml, "utf-8");

console.log(`✅ Sitemap written to: ${outputPath}`);
console.log(`📄 ${PAGES.length} URLs indexed`);
console.log(`\nNext steps:`);
console.log(`  1. Deploy the site`);
console.log(`  2. Go to Google Search Console → Sitemaps`);
console.log(`  3. Submit: ${BASE_URL}/sitemap.xml`);
