#!/usr/bin/env node
/**
 * Seed a product planning repository from this kit (zero dependencies).
 *
 *   node scripts/seed.mjs <target-dir> [--dry-run]
 *       From a clone of this kit: creates <target-dir> (or fills an empty one) with the vendored kit in
 *       <target>/software-factory-all-in-one/ and templates/ instantiated at the product root.
 *   node scripts/seed.mjs --in-place [--dry-run]
 *       Inside a repository created with GitHub "Use this template": moves the kit into
 *       software-factory-all-in-one/ (.git and an existing my-project-requirements.md stay at the root)
 *       and instantiates templates/ at the root.
 *   node scripts/seed.mjs --update <target-dir> [--dry-run]
 *       Replaces <target>/software-factory-all-in-one/ with this kit version. Product files are never
 *       touched; compare software-factory-all-in-one/templates/ with your product files (see CHANGELOG.md).
 *
 * Never overwrites an existing product file: conflicts are listed and nothing is written.
 * Template mapping: AGENTS.template.md → AGENTS.md · LICENSE.template → LICENSE · cursor-rules/ → .cursor/rules/ ·
 * codex/ → .codex/ · agent-discovery/* → root (its README stays in the kit) · implementation/ stays in the kit
 * (copy those workflows into implementation repositories when you create them — see 09-CI-CD.md).
 */
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const KIT_DIR = "software-factory-all-in-one";
const KIT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const args = process.argv.slice(2);
const DRY = args.includes("--dry-run");
const positional = args.filter((a) => !a.startsWith("--"));
const mode = args.includes("--in-place") ? "in-place" : args.includes("--update") ? "update" : "seed";
const SKIP = new Set([".git", "node_modules"]);
const KEEP_AT_ROOT = new Set([".git", "my-project-requirements.md"]);
// The kit's own top-level entries — the only things --in-place moves. check-structure.mjs keeps this list exact.
const KIT_TOP = new Set([
  ".github", ".gitattributes", ".gitignore", "AGENTS.md", "CHANGELOG.md", "ARCHITECTURE.md", "CLAUDE.md", "DECISIONS.md", "00-USAGE.md", "01-STEPS.md", "02-DELIVERY.md", "03-PROTOTYPE.md", "04-FEATURE_SDLC.md",
  "05-PROMPTS.md", "06-LESSONS.md", "07-judgment", "08-IMPLEMENTATION-DAY.md", "09-CI-CD.md", "CODE_OF_CONDUCT.md",
  "CONTRIBUTING.md", "EXCELLENCE.md", "LICENSE", "README.md", "SECURITY.md", "agents", "assets", "coverage", "design-patterns",
  "examples", "scripts", "technologies", "templates",
]);

function die(msg) {
  console.error(`seed: ${msg}`);
  process.exit(1);
}
/** "v1.0.0", "v1.0.0+unreleased" (the copy carries changes after that release) or "unreleased". */
function kitVersion(dir) {
  let text;
  try {
    text = fs.readFileSync(path.join(dir, "CHANGELOG.md"), "utf8").replace(/\r\n/g, "\n");
  } catch {
    return "version unknown";
  }
  const released = text.match(/^## \[(\d+\.\d+\.\d+)\]/m);
  const pending = (text.split(/^## \[Unreleased\]\n/m)[1] || "").split(/^## /m)[0].trim();
  if (!released) return "unreleased";
  return `v${released[1]}${pending ? "+unreleased" : ""}`;
}
const real = (p) => {
  // Resolve symlinks for the deepest existing ancestor so aliases of the kit are recognised.
  let base = path.resolve(p);
  const rest = [];
  while (!fs.existsSync(base) && path.dirname(base) !== base) {
    rest.unshift(path.basename(base));
    base = path.dirname(base);
  }
  return path.join(fs.existsSync(base) ? fs.realpathSync(base) : base, ...rest);
};
const inside = (parent, child) => {
  const rel = path.relative(real(parent), real(child));
  return rel === "" || (!rel.startsWith("..") && !path.isAbsolute(rel));
};
/** A destination conflicts if it exists or if any ancestor under root exists as a non-directory. */
function conflictAt(root, rel) {
  const parts = rel.split("/");
  let cur = root;
  for (let i = 0; i < parts.length; i++) {
    cur = path.join(cur, parts[i]);
    let st;
    try {
      st = fs.lstatSync(cur); // lstat: dangling links count as present
    } catch {
      return null;
    }
    if (st.isSymbolicLink()) return `${parts.slice(0, i + 1).join("/")} (a symbolic link — the seed never writes through links)`;
    if (i < parts.length - 1 && !st.isDirectory()) return `${parts.slice(0, i + 1).join("/")} (a file where a folder is needed)`;
  }
  return rel;
}

function listFiles(dir, base = dir, out = []) {
  for (const ent of fs.readdirSync(dir, { withFileTypes: true })) {
    if (SKIP.has(ent.name)) continue;
    const p = path.join(dir, ent.name);
    if (ent.isDirectory()) listFiles(p, base, out);
    else if (ent.isFile()) out.push(path.relative(base, p).split(path.sep).join("/"));
  }
  return out;
}

/** Product-root path for a file inside templates/, or null when it stays in the vendored kit. */
function templateTarget(rel) {
  if (rel === "AGENTS.template.md") return "AGENTS.md";
  if (rel === "LICENSE.template") return "LICENSE";
  if (rel.startsWith("cursor-rules/")) return `.cursor/rules/${rel.slice("cursor-rules/".length)}`;
  if (rel.startsWith("codex/")) return `.codex/${rel.slice("codex/".length)}`;
  if (rel === "agent-discovery/README.md") return null;
  if (rel.startsWith("agent-discovery/")) return rel.slice("agent-discovery/".length);
  if (rel.startsWith("implementation/")) return null;
  return rel;
}

function planTemplates(kitRoot) {
  return listFiles(path.join(kitRoot, "templates"))
    .map((rel) => ({ from: path.join(kitRoot, "templates", rel), dest: templateTarget(rel) }))
    .filter((p) => p.dest);
}

function copy(from, to) {
  if (DRY) return;
  fs.mkdirSync(path.dirname(to), { recursive: true });
  fs.copyFileSync(from, to);
}

function report(lines) {
  console.log((DRY ? "[dry run] " : "") + lines.join("\n  "));
}

{
  if (mode === "seed") {
    if (!positional[0]) die("usage: node scripts/seed.mjs <target-dir> [--dry-run]");
    const target = path.resolve(positional[0]);
    if (inside(KIT, target)) die("the target must be outside this kit folder");
    const vendored = path.join(target, KIT_DIR);
    if (fs.existsSync(vendored)) die(`${vendored} already exists — use --update to replace the vendored kit`);
    const plan = planTemplates(KIT);
    const conflicts = [...new Set([...plan.map((p) => conflictAt(target, p.dest)), conflictAt(target, `${KIT_DIR}/README.md`)].filter(Boolean))];
    if (conflicts.length) die(`refusing to overwrite existing files in ${target}:\n  - ${conflicts.join("\n  - ")}`);
    const kitFiles = listFiles(KIT);
    for (const rel of kitFiles) copy(path.join(KIT, rel), path.join(vendored, rel));
    for (const p of plan) copy(p.from, path.join(target, p.dest));
    report([
      `seeded ${target}`,
      `vendored kit: ${KIT_DIR}/ (${kitVersion(KIT)}, ${kitFiles.length} files — read-only; improve it upstream with a pull request)`,
      `templates:    ${plan.length} files at the product root`,
      `next: replace {{PLACEHOLDERS}}, add my-project-requirements.md (see ${KIT_DIR}/examples/), commit, open your agent`,
    ]);
  } else if (mode === "in-place") {
    const root = KIT;
    if (!fs.existsSync(path.join(root, ".git"))) die("--in-place must run at the root of a git repository created from the template");
    const vendored = path.join(root, KIT_DIR);
    if (fs.existsSync(vendored)) die(`${KIT_DIR}/ already exists — this repository is already seeded`);
    const plan = planTemplates(root);
    const conflicts = plan.filter((p) => KEEP_AT_ROOT.has(p.dest.split("/")[0])).map((p) => p.dest);
    if (conflicts.length) die(`template files would overwrite kept root files: ${conflicts.join(", ")}`);
    const unknown = fs.readdirSync(root).filter((e) => !KEEP_AT_ROOT.has(e) && !KIT_TOP.has(e));
    if (unknown.length) {
      die(`not a fresh repository from the template — unexpected root entries: ${unknown.join(", ")}. Move them away, or seed a new directory: node scripts/seed.mjs <target-dir>`);
    }
    const entries = fs.readdirSync(root).filter((e) => KIT_TOP.has(e));
    if (!DRY) {
      fs.mkdirSync(vendored);
      for (const e of entries) fs.renameSync(path.join(root, e), path.join(vendored, e));
    }
    const moved = DRY ? plan : planTemplates(vendored);
    for (const p of moved) copy(p.from, path.join(root, p.dest));
    report([
      `seeded in place: ${root}`,
      `moved ${entries.length} kit entries (${kitVersion(DRY ? root : vendored)}) into ${KIT_DIR}/ (read-only; improve it upstream with a pull request)`,
      `templates: ${moved.length} files at the repository root`,
      `next: replace {{PLACEHOLDERS}}, add my-project-requirements.md, commit, open your agent`,
    ]);
  } else {
    if (!positional[0]) die("usage: node scripts/seed.mjs --update <product-repo> [--dry-run]");
    const vendored = path.join(path.resolve(positional[0]), KIT_DIR);
    if (!fs.existsSync(vendored)) die(`${vendored} not found — seed the repository first`);
    if (inside(vendored, KIT) || inside(KIT, vendored)) die("cannot update the kit from itself");
    const kitFiles = listFiles(KIT);
    const fromVersion = kitVersion(vendored);
    if (!DRY) {
      // Stage the new copy next to the old one, swap, and keep the old copy until the swap succeeded.
      const stamp = Date.now();
      const staged = `${vendored}.new-${stamp}`;
      const backup = `${vendored}.old-${stamp}`;
      try {
        for (const rel of kitFiles) copy(path.join(KIT, rel), path.join(staged, rel));
      } catch (err) {
        fs.rmSync(staged, { recursive: true, force: true });
        die(`could not stage the new kit (${err.message}); the installed kit is unchanged`);
      }
      fs.renameSync(vendored, backup);
      try {
        fs.renameSync(staged, vendored);
      } catch (err) {
        fs.renameSync(backup, vendored);
        fs.rmSync(staged, { recursive: true, force: true });
        die(`could not swap in the new kit (${err.message}); the installed kit was restored`);
      }
      fs.rmSync(backup, { recursive: true, force: true });
    }
    report([
      `updated ${vendored}: ${fromVersion} → ${kitVersion(KIT)} (${kitFiles.length} files)`,
      `product files untouched — compare ${KIT_DIR}/templates/ with your product files (see ${KIT_DIR}/CHANGELOG.md)`,
    ]);
  }
}
