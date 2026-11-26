#!/usr/bin/env node
/**
 * Print the CHANGELOG.md section of one release, for GitHub release notes (zero dependencies).
 *
 *   node scripts/release-notes.mjs 1.0.0 > notes.md
 *   gh release create v1.0.0 --target <main-sha> --title "v1.0.0" --notes-file notes.md
 *
 * Exit 0 = section printed, 1 = no such section or it is empty, 2 = usage error.
 */
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const version = (process.argv[2] || "").replace(/^v/, "");
if (!/^\d+\.\d+\.\d+$/.test(version)) {
  console.error("usage: node scripts/release-notes.mjs X.Y.Z");
  process.exit(2);
}
const file = path.join(path.dirname(fileURLToPath(import.meta.url)), "..", "CHANGELOG.md");
const lines = fs.readFileSync(file, "utf8").replace(/\r\n/g, "\n").split("\n");
const start = lines.findIndex((l) => l.startsWith(`## [${version}]`));
if (start < 0) {
  console.error(`release-notes: CHANGELOG.md has no section for ${version}`);
  process.exit(1);
}
let end = lines.findIndex((l, i) => i > start && /^## /.test(l));
if (end < 0) end = lines.length;
// The CHANGELOG footer ([Unreleased]: … and [X.Y.Z]: … references) is not release notes; other link definitions are kept.
const footer = /^\[(?:Unreleased|\d+\.\d+\.\d+)\]:\s*https?:\/\//;
const section = lines.slice(start + 1, end).filter((l) => !footer.test(l));
const body = section.join("\n").trim();
// A section that holds only link definitions has no visible notes.
const visible = section.filter((l) => !/^\[[^\]]+\]:\s*\S/.test(l)).join("\n").trim();
if (!visible) {
  console.error(`release-notes: the ${version} section of CHANGELOG.md is empty`);
  process.exit(1);
}
console.log(body);
