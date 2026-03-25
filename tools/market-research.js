#!/usr/bin/env node
/**
 * Market Research Tool — Zeus Garage Doors
 * Uses Tavily Search API to fetch top-ranking pages for local queries.
 * Usage: node tools/market-research.js "garage door repair Kirkland WA"
 */

const TAVILY_API_KEY = process.env.TAVILY_API_KEY;

if (!TAVILY_API_KEY) {
  console.error("❌ Missing TAVILY_API_KEY. Get one free at https://tavily.com and set it:");
  console.error("   export TAVILY_API_KEY=tvly-xxxx");
  process.exit(1);
}

const query = process.argv[2] || "garage door repair near me";

async function searchTavily(searchQuery, options = {}) {
  const response = await fetch("https://api.tavily.com/search", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      api_key: TAVILY_API_KEY,
      query: searchQuery,
      search_depth: "advanced",
      include_raw_content: false,
      max_results: 10,
      include_domains: [],
      exclude_domains: [],
      ...options,
    }),
  });

  if (!response.ok) {
    throw new Error(`Tavily API error: ${response.status} ${await response.text()}`);
  }
  return response.json();
}

async function analyzeCompetitors(location = "Kirkland WA") {
  const queries = [
    `garage door repair ${location}`,
    `garage door installation ${location}`,
    `emergency garage door service ${location}`,
    `gate repair ${location}`,
  ];

  console.log(`\n🔍 Analyzing top competitors for: ${location}\n`);

  for (const q of queries) {
    console.log(`\n📌 Query: "${q}"`);
    console.log("─".repeat(60));
    const data = await searchTavily(q);

    data.results.forEach((r, i) => {
      console.log(`${i + 1}. ${r.title}`);
      console.log(`   URL: ${r.url}`);
      console.log(`   Score: ${r.score?.toFixed(3) ?? "N/A"}`);
      if (r.content) {
        const snippet = r.content.slice(0, 150).replace(/\n/g, " ");
        console.log(`   Snippet: ${snippet}...`);
      }
      console.log();
    });
  }
}

analyzeCompetitors().catch(console.error);
