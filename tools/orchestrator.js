#!/usr/bin/env node
/**
 * SEO Orchestrator — Zeus Garage Doors
 * Spawns specialized sub-agents as child processes.
 * Usage: node tools/orchestrator.js [task]
 * Tasks: audit | research | full
 */

import { spawn } from "child_process";
import { fileURLToPath } from "url";
import { dirname, join } from "path";

const __dirname = dirname(fileURLToPath(import.meta.url));

const AGENTS = {
  "seo-auditor": {
    script: "seo-audit.js",
    description: "Technical SEO audit of our local build",
    args: [process.env.AUDIT_URL || "http://localhost:8080"],
  },
  "competitor-analyst": {
    script: "market-research.js",
    description: "Live SERP analysis for target keywords",
    args: [process.env.SEARCH_QUERY || "garage door repair Kirkland WA"],
  },
};

function runAgent(name, agent) {
  return new Promise((resolve, reject) => {
    console.log(`\n🤖 Spawning agent: ${name}`);
    console.log(`   Task: ${agent.description}`);

    const child = spawn("node", [join(__dirname, agent.script), ...agent.args], {
      stdio: "inherit",
      env: { ...process.env },
    });

    child.on("close", (code) => {
      if (code === 0) resolve(name);
      else reject(new Error(`Agent "${name}" exited with code ${code}`));
    });
  });
}

async function runTask(task) {
  const start = Date.now();

  switch (task) {
    case "audit":
      await runAgent("seo-auditor", AGENTS["seo-auditor"]);
      break;

    case "research":
      await runAgent("competitor-analyst", AGENTS["competitor-analyst"]);
      break;

    case "full":
      // Run audit first, then research
      await runAgent("seo-auditor", AGENTS["seo-auditor"]);
      await runAgent("competitor-analyst", AGENTS["competitor-analyst"]);
      break;

    default:
      console.log("Available tasks: audit | research | full");
      console.log("Example: node tools/orchestrator.js full");
      return;
  }

  const elapsed = ((Date.now() - start) / 1000).toFixed(1);
  console.log(`\n✅ Orchestration complete in ${elapsed}s`);
}

const task = process.argv[2] || "audit";
runTask(task).catch(console.error);
