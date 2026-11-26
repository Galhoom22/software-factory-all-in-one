#!/usr/bin/env node
/**
 * Content-integrity gate (zero dependencies, check-only — it never rewrites files).
 *
 * Catches the failure modes that have damaged this kit before:
 *   1. Tool-output artifacts written back into files (elided / compressed / redacted views).
 *   2. Markdown tables GitHub cannot render: a blank line inside a table, pipe rows without a
 *      delimiter row, a delimiter row narrower or wider than its header, body rows with more
 *      cells than the header (GitHub silently drops the extra cells).
 *   3. Broken relative links or anchors, and links that escape the checked root (also via symlink).
 * Warning only: Markdown files that look double-spaced (more than 45% blank lines), symlinks skipped.
 *
 * Usage:
 *   node scripts/check-content-integrity.mjs                     kit coordinates (templates/ links are
 *                                                                skipped: they are written in product
 *                                                                coordinates and checked after seeding)
 *   node scripts/check-content-integrity.mjs --root <dir> --product
 *                                                                product coordinates (a seeded repository;
 *                                                                the vendored kit folder is skipped)
 * Exit 0 = clean, 1 = findings, 2 = usage error.
 */
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const HERE = path.dirname(fileURLToPath(import.meta.url));
const SELF = path.resolve(fileURLToPath(import.meta.url));
const KIT_DIR = "software-factory-all-in-one";
const args = process.argv.slice(2);

function usage(msg) {
  console.error(`check-content-integrity: ${msg}`);
  process.exit(2);
}
function optionValue(name) {
  const i = args.indexOf(name);
  if (i < 0) return null;
  const v = args[i + 1];
  if (!v || v.startsWith("--")) usage(`${name} needs a directory operand`);
  return v;
}
const rootArg = optionValue("--root");
const PRODUCT = args.includes("--product");
if (PRODUCT && !rootArg) usage("--product requires --root <dir>");
const ROOT = path.resolve(rootArg || path.join(HERE, ".."));
if (!fs.existsSync(ROOT) || !fs.statSync(ROOT).isDirectory()) usage(`root is not a directory: ${ROOT}`);
const ROOT_REAL = fs.realpathSync(ROOT);

const SKIP_DIRS = new Set([".git", "node_modules", ".next", "dist", "vendor"]);
const BINARY = /\.(png|jpe?g|gif|webp|ico|woff2?|ttf|otf|pdf|zip|gz|tgz|7z|exe|dll|so|dylib|bin)$/i;
const DOC = /\.(md|mdc)$/i;
const EOL = /\r?\n/;
const escapes = (rel) => rel === ".." || rel.startsWith(`..${path.sep}`) || path.isAbsolute(rel);

function selfTest(name, ok) {
  if (!ok) {
    console.error(`check-content-integrity: self-test failed — ${name}`);
    process.exit(1);
  }
}

// --- 1. Tool-output artifacts (each rule must match its probe and must not match its near-miss) ---
const ARTIFACTS = [
  { id: "elided-view-marker", re: /\[lean-ctx:[^\]\n]*\]/, probe: "... [lean-" + "ctx: omitted 3 lines]", near: "[lean context](lean.md)" },
  { id: "archive-marker", re: /\[(?:Archived:[^\]\s]+|Firewalled [^\]\n]+)\]/, probe: "[Arch" + "ived:abc123]", near: "[Archived](archive.md)" },
  { id: "untrusted-wrapper", re: /\[(?:end )?untrusted input\b[^\]\n]*\]/i, probe: "[untrusted" + " input: tool_output]", near: "[untrusted inputs](inputs.md)" },
  { id: "redaction-marker", re: /\[REDACTED:[^\]\n]*\]/, probe: "token=[REDACT" + "ED:API key]", near: "[REDACTED](policy.md)" },
  { id: "truncation-marker", re: /\[(?:…|\.\.\.)\s*truncated\b[^\]\n]*\]/i, probe: "[… trunc" + "ated at ~4030 of 4677 tokens]", near: "[truncated output](out.md)" },
  { id: "view-header-line", re: /^[\w./-]+\.(?:md|mdc) \[\d+L\]$/m, probe: "README.md [21" + "0L]", near: "README.md [see below]" },
];
for (const r of ARTIFACTS) selfTest(`artifact rule ${r.id}`, r.re.test(r.probe) && !r.re.test(r.near));

// --- Code mask (CommonMark): fenced blocks (same fence char, closing run at least as long, no info
// string) and indented blocks (4+ spaces after a blank line, outside lists — list continuation stays live).
const isListItem = (l) => /^ {0,3}([-*+]|\d+[.)])(\s|$)/.test(l);
function codeMask(lines) {
  const mask = new Array(lines.length).fill(false);
  let open = null;
  let inList = false;
  let indented = false;
  lines.forEach((l, i) => {
    const m = l.match(/^ {0,3}(`{3,}|~{3,})(.*)$/);
    if (open) {
      mask[i] = true;
      if (m && m[1][0] === open.ch && m[1].length >= open.len && m[2].trim() === "") open = null;
      return;
    }
    const blank = l.trim() === "";
    const deep = /^( {4}|\t)/.test(l);
    if (indented && (deep || blank)) {
      mask[i] = true;
      return;
    }
    indented = false;
    if (m && !(m[1][0] === "`" && m[2].includes("`"))) {
      open = { ch: m[1][0], len: m[1].length };
      mask[i] = true;
      return;
    }
    if (blank) return;
    if (isListItem(l)) inList = true;
    else if (!/^\s/.test(l)) inList = false;
    if (deep && !inList && i > 0 && lines[i - 1].trim() === "") {
      indented = true;
      mask[i] = true;
    }
  });
  return mask;
}

// --- 2. GitHub-flavored Markdown tables ---------------------------------------------------------
const hasPipe = (l) => /(?<!\\)\|/.test(l);
const isDelimiterRow = (l) => hasPipe(l) && /^ {0,3}\|?\s*:?-+:?\s*(\|\s*:?-+:?\s*)*\|?\s*$/.test(l);
const cellCount = (l) => {
  let s = l.trim();
  if (s.startsWith("|")) s = s.slice(1);
  if (s.endsWith("|") && !s.endsWith("\\|")) s = s.slice(0, -1);
  return s.split(/(?<!\\)\|/).length;
};

// A table ends at a blank line or where another block begins (heading, quote, fence, list, break, HTML).
const HTML_BLOCK =
  /^ {0,3}<(?:script|pre|style|textarea|!--|\?|![A-Za-z]|!\[CDATA\[|\/?(?:address|article|aside|base|basefont|blockquote|body|caption|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe|legend|li|link|main|menu|menuitem|nav|noframes|ol|optgroup|option|p|param|search|section|source|summary|table|tbody|td|tfoot|th|thead|title|tr|track|ul)(?:\s|\/?>|$))/i;
const startsBlock = (l) => /^ {0,3}(#{1,6}(\s|$)|>|`{3}|~{3}|([-*_])(\s*\3){2,}\s*$|[-*+]\s|\d+[.)]\s)/.test(l) || HTML_BLOCK.test(l);

// Lines of a GFM type-6 HTML block (start tag through the next blank line) are raw HTML, not table rows.
function htmlBlockMask(lines, mask) {
  const html = new Array(lines.length).fill(false);
  let open = false;
  lines.forEach((l, i) => {
    if (mask[i]) return;
    if (open && l.trim() === "") open = false;
    else if (open || HTML_BLOCK.test(l)) open = html[i] = true;
  });
  return html;
}

function tableFindings(lines, mask = codeMask(lines)) {
  const out = [];
  const inTable = new Array(lines.length).fill(false);
  const html = htmlBlockMask(lines, mask);
  for (let i = 1; i < lines.length; i++) {
    if (mask[i] || mask[i - 1] || !isDelimiterRow(lines[i])) continue;
    const header = lines[i - 1];
    if (header.trim() === "" || !hasPipe(header) || isDelimiterRow(header)) {
      if (/^\s*\|/.test(lines[i])) out.push({ line: i + 1, issue: "table delimiter row without a header row directly above it" });
      continue;
    }
    const width = cellCount(header);
    const delimiterWidth = cellCount(lines[i]);
    inTable[i - 1] = inTable[i] = true;
    if (delimiterWidth !== width) {
      out.push({ line: i + 1, issue: `delimiter row has ${delimiterWidth} cells but header has ${width} — GitHub renders the block as plain text` });
    }
    let j = i + 1;
    for (; j < lines.length && !mask[j] && lines[j].trim() !== "" && hasPipe(lines[j]) && !startsBlock(lines[j]); j++) {
      inTable[j] = true;
      const c = cellCount(lines[j]);
      if (c > width) out.push({ line: j + 1, issue: `row has ${c} cells but header has ${width} — GitHub drops the extra cells` });
    }
    i = j - 1;
  }
  const orphan = (i) => !mask[i] && !html[i] && !inTable[i] && /^\s*\|/.test(lines[i]);
  lines.forEach((_, i) => {
    if (orphan(i) && !(i > 0 && orphan(i - 1))) {
      out.push({ line: i + 1, issue: "pipe rows that GitHub renders as plain text (missing delimiter row, or a blank line inside a table)" });
    }
  });
  return out;
}

selfTest("blank line inside table", tableFindings(["| a | b |", "", "|---|---|", "| 1 | 2 |"]).length > 0);
selfTest("row wider than header", tableFindings(["| a | b |", "|---|---|", "| 1 | 2 | 3 |"]).length > 0);
selfTest("delimiter narrower than header", tableFindings(["| a | b |", "| --- |", "| 1 | 2 |"]).length > 0);
selfTest("table without leading pipes", tableFindings(["A | B", "--- | ---", "1 | 2 | 3"]).length > 0);
selfTest("table ends where a heading begins", tableFindings(["A | B", "--- | ---", "# One | Two | Three"]).length === 0);
selfTest("inline HTML stays inside a table row", tableFindings(["A | B", "--- | ---", "<kbd>x</kbd> | y | dropped"]).length > 0);
selfTest("HTML block ends a table", tableFindings(["A | B", "--- | ---", "<div>one | two | three</div>"]).length === 0);
selfTest("type-6 <source> ends a table", tableFindings(["A | B", "--- | ---", '<source srcset="a|b|c">']).length === 0);
selfTest("pipe line inside an HTML block is raw HTML", tableFindings(["<details>", "| raw | html |", "</details>"]).length === 0);
selfTest(
  "valid tables and nested fences",
  tableFindings(["| a | b |", "|---|:---:|", "| 1 | 2 |", "| x \\| y | z |", "", "````md", "```", "| not | a table", "```", "````"]).length === 0,
);

// --- 3. Links and anchors ---------------------------------------------------------------------
const slugBase = (text) =>
  text
    .replace(/<[^>]+>/g, "")
    .replace(/\[([^\]]*)\]\([^)]*\)/g, "$1")
    .replace(/[`*]/g, "")
    .trim()
    .toLowerCase()
    .replace(/[^\p{L}\p{M}\p{N}\p{Pc} -]/gu, "")
    .replace(/ /g, "-");

function anchorsOf(lines, mask = codeMask(lines)) {
  const seen = new Map();
  const set = new Set();
  const add = (text) => {
    const base = slugBase(text);
    const n = seen.get(base) ?? 0;
    seen.set(base, n + 1);
    set.add(n ? `${base}-${n}` : base);
  };
  lines.forEach((l, i) => {
    if (mask[i]) return;
    const atx = l.match(/^ {0,3}#{1,6}\s+(.*?)\s*#*\s*$/);
    if (atx) add(atx[1]);
    else if (
      l.trim() !== "" &&
      i + 1 < lines.length &&
      !mask[i + 1] &&
      /^ {0,3}(=+|-+)\s*$/.test(lines[i + 1]) &&
      !/^\s*([-*+]|\d+[.)])\s/.test(l) &&
      !hasPipe(l)
    ) {
      add(l.trim()); // Setext heading
    }
    for (const m of l.matchAll(/<a\s[^>]*\b(?:id|name)=["']([^"']+)["']/gi)) set.add(m[1].toLowerCase());
  });
  return set;
}
selfTest(
  "anchors (ATX, duplicate, Setext, explicit)",
  (() => {
    const a = anchorsOf(["# Hello `World`!", "## Hello World", "Setup", "-----", '<a id="custom-spot"></a>']);
    return a.has("hello-world") && a.has("hello-world-1") && a.has("setup") && a.has("custom-spot");
  })(),
);

function linkTargets(lines, mask = codeMask(lines)) {
  const out = [];
  lines.forEach((l, i) => {
    if (mask[i]) return;
    const text = l.replace(/(`+)(?:(?!\1)[\s\S])*?\1/g, "");
    const def = text.match(/^ {0,3}\[[^\]]+\]:\s*(<[^>\n]*>|\S+)/);
    if (def) {
      out.push({ raw: def[1], line: i + 1 });
      return;
    }
    for (const m of text.matchAll(/\]\(\s*(<[^>\n]*>|[^)\s]+)(?:\s+(?:"[^"]*"|'[^']*'|\([^)]*\)))?\s*\)/g)) out.push({ raw: m[1], line: i + 1 });
    for (const m of text.matchAll(/\b(?:href|src)="([^"]+)"/g)) out.push({ raw: m[1], line: i + 1 });
  });
  return out.map((t) => ({ ...t, raw: t.raw.startsWith("<") && t.raw.endsWith(">") ? t.raw.slice(1, -1) : t.raw }));
}
selfTest(
  "link extraction",
  JSON.stringify(linkTargets(["[a](<b c.md>) and `[x](y.md)`", "[r]: ref.md", '<img src="z.svg">', "[t](u.md \"title\")"]).map((t) => t.raw)) ===
    JSON.stringify(["b c.md", "ref.md", "z.svg", "u.md"]),
);
selfTest("indented code is not a link", linkTargets(["Intro", "", "    [example](missing.md)"]).length === 0);
selfTest("list continuation stays a link", linkTargets(["1. Step", "", "    [live](live.md)"]).length === 1);

// --- Walk --------------------------------------------------------------------------------------
const findings = [];
const warnings = [];
const all = [];
function walk(dir) {
  for (const ent of fs.readdirSync(dir, { withFileTypes: true })) {
    if (SKIP_DIRS.has(ent.name)) continue;
    const p = path.join(dir, ent.name);
    if (ent.isSymbolicLink()) {
      warnings.push({ file: path.relative(ROOT, p), rule: "symlink-skipped", sample: "symbolic links are not followed" });
      continue;
    }
    if (ent.isDirectory()) walk(p);
    else if (ent.isFile()) all.push(p);
  }
}
walk(ROOT);

const rel = (p) => path.relative(ROOT, p).split(path.sep).join("/");
const inScope = (r) => (PRODUCT ? !r.startsWith(`${KIT_DIR}/`) : true);
const linkScope = (r) => (PRODUCT ? !r.startsWith(`${KIT_DIR}/`) : !r.startsWith("templates/"));
const decode = (s) => {
  try {
    return decodeURIComponent(s);
  } catch {
    return s;
  }
};
const docCache = new Map();
function docInfo(abs) {
  if (!docCache.has(abs)) {
    const lines = fs.readFileSync(abs, "utf8").split(EOL);
    const mask = codeMask(lines);
    docCache.set(abs, { lines, mask, anchors: anchorsOf(lines, mask) });
  }
  return docCache.get(abs);
}

let scanned = 0;
for (const abs of all) {
  const r = rel(abs);
  if (!inScope(r) || BINARY.test(abs) || path.resolve(abs) === SELF) continue;
  let body;
  try {
    body = fs.readFileSync(abs, "utf8");
  } catch (err) {
    findings.push({ file: r, line: 0, rule: "unreadable-file", sample: err.code || String(err) });
    continue;
  }
  if (body.includes("\u0000")) continue;
  scanned++;

  for (const rule of ARTIFACTS) {
    const m = body.match(rule.re);
    if (m) findings.push({ file: r, line: body.slice(0, m.index).split(EOL).length, rule: rule.id, sample: m[0].slice(0, 80) });
  }
  if (!DOC.test(abs)) continue;

  const { lines, mask, anchors } = docInfo(abs);
  for (const t of tableFindings(lines, mask)) findings.push({ file: r, line: t.line, rule: "table-shape", sample: t.issue });

  const blank = lines.filter((l) => l.trim() === "").length;
  if (lines.length > 40 && blank / lines.length > 0.45) {
    warnings.push({ file: r, rule: "double-spaced", sample: `${blank}/${lines.length} blank lines` });
  }

  if (!linkScope(r)) continue;
  for (const { raw, line } of linkTargets(lines, mask)) {
    if (/^(https?:|mailto:|tel:|data:)/i.test(raw)) continue;
    const hashAt = raw.indexOf("#");
    const p = hashAt < 0 ? raw : raw.slice(0, hashAt);
    const hash = hashAt < 0 ? "" : raw.slice(hashAt + 1);
    if (!p) {
      if (hash && !anchors.has(decode(hash).toLowerCase())) findings.push({ file: r, line, rule: "broken-anchor", sample: raw });
      continue;
    }
    const target = path.resolve(path.dirname(abs), decode(p));
    if (escapes(path.relative(ROOT, target))) {
      findings.push({ file: r, line, rule: "link-escapes-root", sample: raw });
      continue;
    }
    if (!fs.existsSync(target)) {
      findings.push({ file: r, line, rule: "broken-link", sample: raw });
      continue;
    }
    if (escapes(path.relative(ROOT_REAL, fs.realpathSync(target)))) {
      findings.push({ file: r, line, rule: "link-escapes-root", sample: `${raw} (via symlink)` });
      continue;
    }
    if (hash && DOC.test(target) && fs.statSync(target).isFile() && !docInfo(target).anchors.has(decode(hash).toLowerCase())) {
      findings.push({ file: r, line, rule: "broken-anchor", sample: raw });
    }
  }
}

for (const w of warnings) console.warn(`warning: ${w.file} — ${w.rule} (${w.sample})`);

if (findings.length) {
  console.error(`check-content-integrity: FAIL (${PRODUCT ? "product" : "kit"} coordinates, root ${ROOT})`);
  console.error(JSON.stringify({ finding_count: findings.length, findings }, null, 2));
  console.error(
    "Fix the content itself. Never paste or write back a tool's compressed/elided view of a file; edit with exact replacements and review net deletions.",
  );
  process.exit(1);
}

console.log(
  JSON.stringify(
    { ok: true, coordinates: PRODUCT ? "product" : "kit", files_scanned: scanned, artifact_rules: ARTIFACTS.length, warnings: warnings.length },
    null,
    2,
  ),
);
