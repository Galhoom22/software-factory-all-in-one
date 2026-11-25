#!/usr/bin/env node
/**
 * Fails CI if someone adds real application-stack markers outside project-ui/.
 * This planning repo may only contain the UI prototype under project-ui/.
 */
import { existsSync, readdirSync, statSync } from "node:fs";
import { join, dirname, relative } from "node:path";
import { fileURLToPath } from "node:url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const fail = (msg) => {
  console.error(`check-scope: ${msg}`);
  process.exit(1);
};

/** Paths relative to repo root that must never appear (implementation apps). */
const bannedExact = [
  "composer.json",
  "artisan",
  "Cargo.toml",
  "go.mod",
  "Gemfile",
  "pom.xml",
  "build.gradle",
  "build.gradle.kts",
];

/** Directory names that signal a second app tree at the repo root. */
const bannedRootDirs = ["app/Http", "app/Models", "database/migrations", "resources/views"];

for (const rel of bannedExact) {
  if (existsSync(join(root, rel))) {
    fail(`forbidden implementation marker at repo root: ${rel} (keep apps out of this planning repo)`);
  }
}

for (const rel of bannedRootDirs) {
  if (existsSync(join(root, rel))) {
    fail(`forbidden backend tree at repo root: ${rel}/`);
  }
}

/** Only project-ui/ may have a package.json (plus none at root). */
if (existsSync(join(root, "package.json"))) {
  fail("package.json at repo root is forbidden; the only Node app is project-ui/");
}

const walkBannedNames = (dir, depth = 0) => {
  if (depth > 4) return;
  let entries;
  try {
    entries = readdirSync(dir);
  } catch {
    return;
  }
  for (const name of entries) {
    if (name === "node_modules" || name === ".git" || name === "project-ui" || name === "software-factory-all-in-one" || name === "vendor") {
      continue;
    }
    const full = join(dir, name);
    let st;
    try {
      st = statSync(full);
    } catch {
      continue;
    }
    if (st.isDirectory()) {
      walkBannedNames(full, depth + 1);
      continue;
    }
    if (bannedExact.includes(name) && !full.includes(`${join(root, "project-ui")}`)) {
      fail(`forbidden file outside project-ui/: ${relative(root, full)}`);
    }
  }
};

walkBannedNames(root);

if (!existsSync(join(root, "project-ui", "package.json"))) {
  fail("project-ui/package.json missing — prototype is the only allowed app tree");
}

console.log("check-scope: ok");
