#!/usr/bin/env node
/**
 * Verifies this repo is ready for OpenAI Codex CLI (also covers extension/app
 * sharing the same .codex/ layer). Exit 0 = ready enough to start `codex`.
 *
 * Usage:
 *   node scripts/verify-codex-cli.mjs          # includes ~/.codex trust check
 *   node scripts/verify-codex-cli.mjs --ci     # repo files only (for GitHub Actions)
 */
import { spawnSync } from "node:child_process";
import { existsSync, readFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import { homedir } from "node:os";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const ci = process.argv.includes("--ci");
const fail = (msg) => {
  console.error(`verify-codex-cli: FAIL — ${msg}`);
  process.exit(1);
};
const warn = (msg) => console.warn(`verify-codex-cli: WARN — ${msg}`);
const ok = (msg) => console.log(`verify-codex-cli: ok — ${msg}`);

const required = [
  "AGENTS.md",
  "docs/AGENT_START.md",
  "docs/DELIVERY.md",
  ".codex/config.toml",
  ".codex/hooks.json",
  ".codex/CLI.md",
  ".codex/README.md",
  ".codex/scripts/session-start.mjs",
  ".codex/scripts/stop-check.mjs",
];

for (const rel of required) {
  if (!existsSync(join(root, ...rel.split("/")))) fail(`missing ${rel}`);
}

const config = readFileSync(join(root, ".codex", "config.toml"), "utf8");
for (const phrase of [
  "There is no MVP delivery mode",
  "AGENTS.md",
  "docs/AGENT_START.md",
  "project-ui",
  "[features]",
  "hooks = true",
]) {
  if (!config.includes(phrase)) fail(`.codex/config.toml must contain: ${phrase}`);
}

const hooks = readFileSync(join(root, ".codex", "hooks.json"), "utf8");
if (!hooks.includes("SessionStart") || !hooks.includes("session-start.mjs")) {
  fail(".codex/hooks.json must wire SessionStart → session-start.mjs");
}
if (!hooks.includes("Stop") || !hooks.includes("stop-check.mjs")) {
  fail(".codex/hooks.json must wire Stop → stop-check.mjs");
}

const runNode = (rel) => {
  const result = spawnSync(process.execPath, [join(root, ...rel.split("/"))], {
    cwd: root,
    encoding: "utf8",
  });
  if (result.status !== 0) {
    fail(`${rel} exited ${result.status}: ${(result.stderr || result.stdout || "").trim()}`);
  }
};

runNode(".codex/scripts/session-start.mjs");
// Prefer direct gates over stop-check alone: stop-check always exits 0 and only
// injects notes. check-agents does not call this script (no recursion).
runNode("scripts/check-delivery.mjs");
runNode("scripts/check-agents.mjs");
runNode("scripts/check-scope.mjs");
runNode(".codex/scripts/stop-check.mjs");

ok("repo .codex/ + AGENTS.md + delivery/agents/scope checks");

if (!ci) {
  const userConfig = join(homedir(), ".codex", "config.toml");
  if (!existsSync(userConfig)) {
    warn(`no ${userConfig} — start \`codex\` once and trust this project`);
  } else {
    const text = readFileSync(userConfig, "utf8");
    const norm = (s) => s.replace(/\\/g, "/").toLowerCase();
    const rootNorm = norm(root);
    const trusted = [...text.matchAll(/\[projects\.'([^']+)'\]\s*\ntrust_level\s*=\s*"trusted"/g)].some(
      (m) => {
        const key = norm(m[1].replace(/^\?\?/, "").replace(/^\\\\\?\\/, ""));
        return key === rootNorm || key.endsWith(rootNorm) || rootNorm.endsWith(key);
      },
    );
    // Also accept looser contains match for Windows case / \\?\ prefixes
    const folderName = rootNorm.split("/").filter(Boolean).pop() || "";
    const loose =
      Boolean(folderName) &&
      text.toLowerCase().includes(folderName) &&
      /trust_level\s*=\s*"trusted"/i.test(text);
    if (trusted || loose) {
      ok("project appears trusted in ~/.codex/config.toml");
    } else {
      warn(
        "project trust not found in ~/.codex/config.toml — run `codex` from this root and trust the project so AGENTS.md + .codex/ load",
      );
    }
    if (!/\[features\][\s\S]*hooks\s*=\s*true/m.test(text) && !config.includes("hooks = true")) {
      warn("hooks may be off in user config — project config sets hooks = true when trusted");
    }
  }

  const which = spawnSync(
    process.platform === "win32" ? "where" : "which",
    ["codex"],
    { encoding: "utf8", shell: true },
  );
  if ((which.status ?? 1) !== 0) {
    warn("`codex` not on PATH — install with: npm install -g @openai/codex");
  } else {
    ok(`codex on PATH`);
  }

  console.log("");
  console.log("Next (CLI):");
  console.log("  1. cd to repo root");
  console.log("  2. codex");
  console.log("  3. /hooks  → trust project SessionStart + Stop hooks");
  console.log("  4. Read docs/AGENT_START.md then AGENTS.md");
}

ok("Codex CLI wiring ready");
