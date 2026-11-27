#!/usr/bin/env node
/**
 * Structural Always-Current gate for the kit.
 * Does not hit the network — agents still must re-verify official docs/Context7
 * when they touch a pack (see 07-judgment/playbook-freshness.md).
 */
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const playbookRoot = path.resolve(__dirname, "..");
const techRoot = path.join(playbookRoot, "technologies");
const agentsRoot = path.join(playbookRoot, "agents");
const coverageRoot = path.join(playbookRoot, "coverage");

const errors = [];
const notes = [];

function exists(p) {
  return fs.existsSync(p);
}

function read(p) {
  return fs.readFileSync(p, "utf8");
}

function fail(msg) {
  errors.push(msg);
}

function note(msg) {
  notes.push(msg);
}

// --- Required judgment + atlas homes ---
for (const rel of [
  "07-judgment/playbook-freshness.md",
  "coverage/README.md",
  "coverage/07-software-surfaces.md",
  "EXCELLENCE.md",
  "technologies/README.md",
  "agents/README.md",
  "coverage/08-ai-agents.md",
]) {
  if (!exists(path.join(playbookRoot, rel))) {
    fail(`missing required home: ${rel}`);
  }
}

// --- Technology packs: dirs ↔ README table ↔ required files ---
const skipDirs = new Set(["_pack-template"]);
const packDirs = fs
  .readdirSync(techRoot, { withFileTypes: true })
  .filter((d) => d.isDirectory() && !skipDirs.has(d.name))
  .map((d) => d.name)
  .sort();

const techReadme = read(path.join(techRoot, "README.md"));
for (const slug of packDirs) {
  if (!techReadme.includes(`technologies/${slug}/`) && !techReadme.includes(`[\`${slug}/\`]`)) {
    fail(`technologies/${slug}/ exists but is not listed in technologies/README.md packs table`);
  }

  const packDir = path.join(techRoot, slug);
  for (const req of ["README.md", "official-refs.md", "best-practices.md", "quality.md"]) {
    if (!exists(path.join(packDir, req))) {
      fail(`technologies/${slug}/ missing ${req}`);
    }
  }

  const refs = read(path.join(packDir, "official-refs.md"));
  if (!/Checked/i.test(refs)) {
    fail(`technologies/${slug}/official-refs.md has no Checked column/dates`);
  }
  const dates = [...refs.matchAll(/\b(20\d{2}-\d{2}-\d{2})\b/g)].map((m) => m[1]);
  if (dates.length === 0) {
    fail(`technologies/${slug}/official-refs.md has no YYYY-MM-DD Checked dates`);
  }

  const slices = fs
    .readdirSync(packDir, { withFileTypes: true })
    .filter((d) => d.isDirectory() && d.name.startsWith(`${slug}-`));
  if (slices.length === 0) {
    // allow packs that use alternate slice naming (e.g. rust-1.100 under rust/)
    const anySlice = fs
      .readdirSync(packDir, { withFileTypes: true })
      .filter((d) => d.isDirectory() && d.name !== "node_modules");
    if (anySlice.length === 0) {
      fail(`technologies/${slug}/ has no version-slice directory`);
    } else {
      for (const slice of anySlice) {
        for (const f of ["use-these.md", "stop-using.md", "common-mistakes.md"]) {
          if (!exists(path.join(packDir, slice.name, f))) {
            fail(`technologies/${slug}/${slice.name}/ missing ${f}`);
          }
        }
      }
    }
  } else {
    for (const slice of slices) {
      for (const f of ["use-these.md", "stop-using.md", "common-mistakes.md"]) {
        if (!exists(path.join(packDir, slice.name, f))) {
          fail(`technologies/${slug}/${slice.name}/ missing ${f}`);
        }
      }
    }
  }
}

// README pack hub rows only: [`slug/`](slug/README.md)
for (const m of techReadme.matchAll(/\|\s*\[`([a-z0-9-]+)\/`\]\(\1\/README\.md\)/g)) {
  const slug = m[1];
  if (slug === "_pack-template") continue;
  if (!exists(path.join(techRoot, slug))) {
    fail(`technologies/README.md lists ${slug}/ but directory is missing`);
  }
}

// --- Coverage atlas must mention freshness + surfaces ---
const covReadme = read(path.join(coverageRoot, "README.md"));
if (!covReadme.includes("07-software-surfaces")) {
  fail("coverage/README.md must reference 07-software-surfaces");
}
if (!covReadme.includes("playbook-freshness") && !exists(path.join(playbookRoot, "07-judgment/playbook-freshness.md"))) {
  fail("playbook-freshness judgment missing");
}

const surfaces = read(path.join(coverageRoot, "07-software-surfaces.md"));
for (const slug of packDirs) {
  // language packs that map to surfaces — soft note only for unknown names
  if (["php", "javascript", "html", "css", "rust", "csharp", "dotnet"].includes(slug)) {
    const label =
      slug === "javascript"
        ? "JavaScript"
        : slug === "csharp"
          ? "C#"
          : slug === "dotnet"
            ? ".NET"
            : slug === "html"
              ? "HTML"
              : slug === "css"
                ? "CSS"
                : slug === "php"
                  ? "PHP"
                  : "Rust";
    if (slug === "rust" && !surfaces.includes("**Rust**")) {
      fail("coverage/07-software-surfaces.md missing Rust language row");
    }
    if (slug === "csharp" && !surfaces.includes("**C#**") && !surfaces.includes("C# / .NET")) {
      note(`surfaces file should mention ${label} when pack exists`);
    }
  }
}

// --- Agent harness packs: one README per harness; a pack that grew into a folder keeps the slice shape ---
// Every row of the "## Official references" table must carry its own Checked date.
function officialRefsDated(text) {
  const section = (text.split("## Official references")[1] || "").split(/\n## /)[0];
  const table = section.split("\n").filter((l) => /^\|/.test(l) && !/^\|[\s:|-]+\|\s*$/.test(l));
  const cells = (l) => l.trim().replace(/^\||\|$/g, "").split("|").map((c) => c.trim());
  const col = table.length ? cells(table[0]).findIndex((c) => /^checked$/i.test(c)) : -1;
  const rows = table.slice(1);
  return col >= 0 && rows.length > 0 && rows.every((r) => /^20\d{2}-\d{2}-\d{2}$/.test(cells(r)[col] || ""));
}
if (
  officialRefsDated("Pinned (checked 2026-01-01)\n## Official references\n| Topic | URL | Checked |\n|---|---|---|\n| Docs | https://example.org | |\n") ||
  officialRefsDated("## Official references\n| Topic | URL | Checked |\n|---|---|---|\n| Docs | https://example.org/2026-01-01/docs | |\n") ||
  !officialRefsDated("## Official references\n| Topic | URL | Checked |\n|---|---|---|\n| Docs | https://example.org | 2026-01-01 |\n")
) {
  fail("officialRefsDated self-test failed");
}
if (exists(agentsRoot)) {
  const skipAgentDirs = new Set(["_pack-template"]);
  const agentDirs = fs
    .readdirSync(agentsRoot, { withFileTypes: true })
    .filter((d) => d.isDirectory() && !skipAgentDirs.has(d.name))
    .map((d) => d.name)
    .sort();
  const agentsReadme = read(path.join(agentsRoot, "README.md"));
  for (const slug of agentDirs) {
    if (!agentsReadme.includes("[`" + slug + "/`]")) {
      fail("agents/" + slug + "/ exists but is not listed in agents/README.md packs table");
    }
    const packDir = path.join(agentsRoot, slug);
    const readmePath = path.join(packDir, "README.md");
    if (!exists(readmePath)) {
      fail("agents/" + slug + "/README.md missing");
      continue;
    }
    const pack = read(readmePath);
    for (const h of ["## Official references", "## Use these", "## Stop using", "## Common mistakes"]) {
      if (!pack.includes(h)) fail("agents/" + slug + "/README.md is missing the \"" + h + "\" section");
    }
    if (!officialRefsDated(pack)) {
      fail("agents/" + slug + "/README.md: every official-reference row needs a YYYY-MM-DD Checked date");
    }
    for (const slice of fs.readdirSync(packDir, { withFileTypes: true }).filter((d) => d.isDirectory())) {
      for (const f of ["use-these.md", "stop-using.md", "common-mistakes.md"]) {
        if (!exists(path.join(packDir, slice.name, f))) fail("agents/" + slug + "/" + slice.name + "/ missing " + f);
      }
    }
  }
  for (const m of agentsReadme.matchAll(/\|\s*\[`([a-z0-9-]+)\/`\]\(\1\/README\.md\)/g)) {
    if (!exists(path.join(agentsRoot, m[1]))) fail("agents/README.md lists " + m[1] + "/ but directory is missing");
  }
  note("agents packs scanned: " + agentDirs.length + " (" + agentDirs.join(", ") + ")");
} else {
  fail("software-factory-all-in-one/agents/ missing");
}

const aiAgentsCov = path.join(coverageRoot, "08-ai-agents.md");
if (!exists(aiAgentsCov)) fail("coverage/08-ai-agents.md missing");
if (!covReadme.includes("08-ai-agents")) {
  fail("coverage/README.md must reference 08-ai-agents");
}

// --- Judgment guides ↔ index (the index is the only list of guides) ---
const judgmentRoot = path.join(playbookRoot, "07-judgment");
const guides = fs.readdirSync(judgmentRoot).filter((f) => f.endsWith(".md") && f !== "README.md").sort();
const judgmentIndex = read(path.join(judgmentRoot, "README.md"));
for (const g of guides) {
  if (!judgmentIndex.includes(`](${g})`)) fail(`07-judgment/${g} is not linked from 07-judgment/README.md`);
}
for (const m of judgmentIndex.matchAll(/\]\(([a-z0-9-]+\.md)\)/g)) {
  if (!exists(path.join(judgmentRoot, m[1]))) fail(`07-judgment/README.md links a missing guide: ${m[1]}`);
}

// --- README facts are computed from the tree, never typed from memory ---
const readmeText = read(path.join(playbookRoot, "README.md"));
const agentPackCount = exists(agentsRoot)
  ? fs.readdirSync(agentsRoot, { withFileTypes: true }).filter((d) => d.isDirectory() && d.name !== "_pack-template").length
  : 0;
const methodDocCount = fs.readdirSync(playbookRoot).filter((f) => /^0\d-.+\.md$/.test(f)).length;
const facts = [
  { what: "judgment guides", n: guides.length, res: [/judgment_guides-(\d+)/g, /\b(\d+) (?:judgment )?guides\b/gi, /\|\s*Judgment guides\s*\|\s*\*\*(\d+)\*\*/g] },
  { what: "technology packs", n: packDirs.length, res: [/technology_packs-(\d+)/g, /\b(\d+) technology packs\b/gi, /\|\s*Technology packs\s*\|\s*\*\*(\d+)\*\*/g] },
  { what: "agent harness packs", n: agentPackCount, res: [/agent_harnesses-(\d+)/g, /\b(\d+) agent\/IDE packs\b/gi, /\|\s*AI agent harness packs\s*\|\s*\*\*(\d+)\*\*/g] },
  { what: "method docs", n: methodDocCount, res: [/\|\s*Method docs[^|]*\|\s*\*\*(\d+)\*\*/g] },
];
for (const f of facts) {
  let seen = 0;
  for (const re of f.res) {
    for (const m of readmeText.matchAll(re)) {
      seen++;
      if (Number(m[1]) !== f.n) fail(`README.md says ${m[1]} ${f.what} ("${m[0]}") but the kit has ${f.n}`);
    }
  }
  if (!seen) fail(`README.md must state the number of ${f.what} (computed: ${f.n})`);
}

// --- Percentages: coverage/README.md is the single owner; README may only cite them ---
const overall = covReadme.match(/Weighted overall coverage[^|]*\|\s*\*\*~?(\d+)%\*\*/);
if (!overall) fail("coverage/README.md must state the weighted overall coverage");
const badge = readmeText.match(/craft_coverage-~?(\d+)%25/);
if (overall && badge && badge[1] !== overall[1]) {
  fail(`README badge says ~${badge[1]}% but coverage/README.md says ~${overall[1]}%`);
}
const percentsIn = (text) => new Set([...text.matchAll(/(?<!\d)(\d{1,3})%/g)].map((m) => m[1]));
{
  const probe = percentsIn("covers 85% and ~7%");
  if (!probe.has("85") || !probe.has("7") || probe.has("5")) fail("percentage extraction self-test failed");
}
const atlasPercents = percentsIn(covReadme);
for (const m of readmeText.matchAll(/~\s*(?:\*\*)?(\d{1,3})%/g)) {
  if (!atlasPercents.has(m[1])) fail(`README.md cites ~${m[1]}% which does not appear in coverage/README.md`);
}

// --- Atlas rollups labelled "equal weight" are the rounded mean of their rows (the row %s stay judgment) ---
/** Column `col` of the table body rows between two headings: bold "**N**" values, plus any cell that is not one. */
function rowPercents(text, from, to, col) {
  const start = text.indexOf(from);
  if (start < 0) return { values: [], bad: [] };
  const end = text.indexOf(to, start + from.length);
  const isDelimiter = (l) => /^\|[\s:|-]+\|\s*$/.test(l);
  const lines = text.slice(start, end < 0 ? text.length : end).split("\n");
  // Body rows only: a header is the table row directly above a delimiter row.
  const cells = lines
    .filter((l, i) => /^\|/.test(l) && !isDelimiter(l) && !isDelimiter(lines[i + 1] || ""))
    .map((l) => (l.split("|")[col] || "").trim());
  const values = cells.map((c) => c.match(/^\*\*(\d+)\*\*$/)).filter(Boolean).map((m) => Number(m[1]));
  return { values, bad: cells.filter((c) => !/^\*\*\d+\*\*$/.test(c)) };
}
const roundedMean = (a) => Math.round(a.reduce((s, x) => s + x, 0) / a.length);
{
  const probe = rowPercents("## A\n| X | % |\n|---|---|\n| a | **10** |\n| b | **21** |\n| c | **~5** |\n| e | % |\n## B\n| d | **99** |", "## A", "## B", 2);
  if (roundedMean(probe.values) !== 16 || probe.bad.join() !== "**~5**,%") fail("atlas rollup self-test failed");
}
{
  // Each rollup is stated in its own file and copied only into the lines listed here; other text links instead.
  const covText = covReadme.replace(/\r\n/g, "\n");
  const kitReadme = readmeText.replace(/\r\n/g, "\n");
  const rollups = [
    {
      file: "07-software-surfaces.md", what: "industry-surface breadth", from: "## Scorecard by surface", to: "### Industry-surface rollup", col: 3,
      own: /\*\*Weighted readiness\*\*[^|]*\|\s*\*\*~(\d+)%\*\*/, count: /\*\*Surfaces listed\*\*\s*\|\s*(\d+)\s*\|/,
      copies: [["coverage/README.md", /\*\*Industry-surface breadth\*\*[^|]*\|\s*\*\*~(\d+)%\*\*/], ["coverage/README.md", /07-software-surfaces\.md\)[^\n]*\*\*~(\d+)%\*\* breadth/], ["README.md", /Industry-surface breadth[^\n]*\(~(\d+)%\)/]],
    },
    {
      file: "08-ai-agents.md", what: "AI-agent harness breadth", from: "### Global / US-led", to: "### Cross-cutting", col: 3,
      own: /\*\*Weighted harness readiness\*\*[^|]*\|\s*\*\*~(\d+)%\*\*/,
      copies: [["coverage/README.md", /\*\*AI-agent harness breadth\*\*[^|]*\|\s*\*\*~(\d+)%\*\*/], ["coverage/README.md", /08-ai-agents\.md\)[^\n]*\*\*~(\d+)%\*\* breadth/]],
    },
  ];
  const sources = { "coverage/README.md": covText, "README.md": kitReadme };
  for (const r of rollups) {
    const text = read(path.join(coverageRoot, r.file)).replace(/\r\n/g, "\n");
    const { values, bad } = rowPercents(text, r.from, r.to, r.col);
    if (!values.length) {
      fail(`coverage/${r.file}: no scorecard rows found for the ${r.what} rollup`);
      continue;
    }
    for (const c of bad) fail(`coverage/${r.file}: scorecard % cell "${c}" must be a bold whole number (**N**) so the ${r.what} rollup counts it`);
    const n = roundedMean(values);
    if (r.count) {
      const c = text.match(r.count);
      if (!c || Number(c[1]) !== values.length) fail(`coverage/${r.file} must state the number of scored rows (${values.length})`);
    }
    for (const [where, re] of [[`coverage/${r.file}`, r.own], ...r.copies]) {
      const m = (where.startsWith("coverage/0") ? text : sources[where]).match(re);
      if (!m) fail(`${where} must state the ${r.what} rollup`);
      else if (Number(m[1]) !== n) fail(`${where} says ~${m[1]}% ${r.what} but its ${values.length} rows average ${n}%`);
    }
  }
}

// --- Decision IDs: every SF-NN cited resolves in DECISIONS.md; D-NN only in the product-log template ---
{
  const decisionsPath = path.join(playbookRoot, "DECISIONS.md");
  if (!exists(decisionsPath)) fail("DECISIONS.md (the kit decision log) is missing");
  else {
    const defined = new Set([...read(decisionsPath).matchAll(/^### (SF-\d{2})\b/gm)].map((m) => m[1]));
    // A range that starts at SF-01 describes the whole log, so it must end at the newest decision.
    // Ranges that start later ("SF-03 to SF-05") name a subset and are not checked.
    const ids = [...defined].sort();
    const staleRanges = (text, newest) =>
      [...text.matchAll(/\bSF-01\s*(?:…|\.\.\.?|–|—|-|to|through)\s*(?:SF-)?(\d{2})\b/g)]
        .filter((m) => `SF-${m[1]}` !== newest)
        .map((m) => m[0]);
    {
      const probe = "log (SF-01 … SF-15), SF-01 — SF-16, SF-01-15, SF-01..SF-12, SF-01 through SF-16, subset SF-03 to SF-05";
      if (staleRanges(probe, "SF-16").join("|") !== "SF-01 … SF-15|SF-01-15|SF-01..SF-12") fail("decision-range self-test failed");
    }
    const textFiles = [];
    (function walkText(dir) {
      for (const ent of fs.readdirSync(dir, { withFileTypes: true })) {
        if (ent.name === ".git" || ent.name === "node_modules") continue;
        const p = path.join(dir, ent.name);
        if (ent.isDirectory()) walkText(p);
        else if (/\.(md|mdc|mjs|toml|json|ya?ml|txt|template)$/.test(ent.name)) textFiles.push(p);
      }
    })(playbookRoot);
    for (const file of textFiles) {
      const rel = path.relative(playbookRoot, file).split(path.sep).join("/");
      if (rel === "scripts/check-structure.mjs") continue;
      const text = read(file);
      for (const m of text.matchAll(/\bSF-(\d{2})\b/g)) {
        if (!defined.has(`SF-${m[1]}`)) fail(`${rel} cites SF-${m[1]}, which DECISIONS.md does not define`);
      }
      // CHANGELOG.md is history: a released entry keeps the range it had when it shipped.
      if (rel !== "CHANGELOG.md") {
        for (const r of staleRanges(text, ids.at(-1))) fail(`${rel} states "${r}" but DECISIONS.md runs ${ids[0]} … ${ids.at(-1)}`);
      }
      const productLog = rel === "templates/docs/DECISIONS.md" || rel.startsWith("templates/docs/decision-logs/");
      if (!productLog) {
        for (const m of text.matchAll(/\bD-(\d{2,3})\b/g)) {
          fail(`${rel} cites D-${m[1]} — kit text cites kit decisions (SF-NN); product IDs belong in a product's own log`);
        }
      }
    }
  }
}

// --- Every gate is wired into CI and named where contributors and agents look (no drift between lists) ---
// In CI the gate must be an executed step ("run: node scripts/<gate>"), not just a mention or a comment.
function runsGate(yaml, gate) {
  const escaped = gate.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  // a single-line `run: node …` step, or a `node …` line inside a multi-line `run: |` block (comments never count)
  return new RegExp(`^\\s*(?:-\\s*)?(?:run:\\s*)?node\\s+scripts/${escaped}(?:\\s|$)`, "m").test(yaml);
}
if (
  !runsGate("      - run: node scripts/check-x.mjs", "check-x.mjs") ||
  !runsGate("        run: |\n          node scripts/check-x.mjs --flag", "check-x.mjs") ||
  runsGate("      # run: node scripts/check-x.mjs", "check-x.mjs") ||
  runsGate("      - name: node scripts/check-x.mjs", "check-x.mjs")
) {
  fail("runsGate self-test failed");
}
{
  const gates = fs.readdirSync(path.join(playbookRoot, "scripts")).filter((f) => /^check-.+\.mjs$/.test(f) && f !== "check-playbook-freshness.mjs");
  for (const [rel, label] of [[".github/workflows/ci.yml", "kit CI"], ["CONTRIBUTING.md", "CONTRIBUTING"], ["AGENTS.md", "AGENTS.md"], ["ARCHITECTURE.md", "ARCHITECTURE"], [".github/pull_request_template.md", "PR template"]]) {
    if (!exists(path.join(playbookRoot, rel))) {
      fail(`${rel} is missing`);
      continue;
    }
    const text = read(path.join(playbookRoot, rel));
    for (const g of gates) {
      const wired = rel.endsWith(".yml") ? runsGate(text, g) : text.includes(g);
      if (!wired) fail(`${label} (${rel}) does not ${rel.endsWith(".yml") ? "run" : "name"} the gate scripts/${g}`);
    }
  }
}

// --- CHANGELOG: [Unreleased] first; releases "## [X.Y.Z] - YYYY-MM-DD", newest first, non-empty, with link references ---
{
  const cl = read(path.join(playbookRoot, "CHANGELOG.md")).replace(/\r\n/g, "\n");
  const heads = [...cl.matchAll(/^## \[([^\]]+)\](.*)$/gm)].map((m) => ({ name: m[1], rest: m[2].trim(), index: m.index }));
  if (!heads.length || heads[0].name !== "Unreleased") fail("CHANGELOG.md must start its entries with ## [Unreleased]");
  const versions = heads.slice(1);
  const newer = (a, b) => {
    const x = a.split(".").map(Number);
    const y = b.split(".").map(Number);
    for (let i = 0; i < 3; i++) if (x[i] !== y[i]) return x[i] > y[i];
    return false;
  };
  versions.forEach((v, i) => {
    if (!/^\d+\.\d+\.\d+$/.test(v.name) || !/^- \d{4}-\d{2}-\d{2}$/.test(v.rest)) {
      fail(`CHANGELOG.md heading "## [${v.name}] ${v.rest}" must read "## [X.Y.Z] - YYYY-MM-DD"`);
    }
    if (i > 0 && !newer(versions[i - 1].name, v.name)) fail(`CHANGELOG.md versions must be newest first (${versions[i - 1].name} before ${v.name})`);
    const after = cl.slice(v.index).split("\n").slice(1);
    const next = after.findIndex((l) => /^## /.test(l));
    // link definitions (the footer or a section's own) are not visible release content
    const content = after.slice(0, next < 0 ? after.length : next).filter((l) => !/^\[[^\]]+\]:\s*\S/.test(l));
    if (!content.join("\n").trim()) fail(`CHANGELOG.md section ${v.name} is empty`);
  });
  if (versions.length && !new RegExp(`^\\[Unreleased\\]: https://\\S+/compare/v${versions[0].name.replace(/\./g, "\\.")}\\.\\.\\.HEAD$`, "m").test(cl)) {
    fail(`CHANGELOG.md [Unreleased] must compare from the newest release: …/compare/v${versions[0].name}...HEAD`);
  }
  for (const h of heads) {
    const ref = new RegExp(`^\\[${h.name.replace(/\./g, "\\.")}\\]: https://`, "m");
    if (!ref.test(cl)) fail(`CHANGELOG.md is missing the link reference for [${h.name}]`);
  }
}

// --- seed.mjs KIT_TOP must list exactly the kit's top-level entries (what --in-place moves) ---
{
  const seedSrc = read(path.join(playbookRoot, "scripts", "seed.mjs"));
  const block = seedSrc.match(/const KIT_TOP = new Set\(\[([\s\S]*?)\]\)/);
  if (!block) fail("scripts/seed.mjs must declare KIT_TOP");
  else {
    const declared = new Set([...block[1].matchAll(/"([^"]+)"/g)].map((m) => m[1]));
    const actual = fs.readdirSync(playbookRoot).filter((e) => e !== ".git" && e !== "node_modules");
    for (const e of actual) if (!declared.has(e)) fail(`scripts/seed.mjs KIT_TOP is missing top-level entry "${e}"`);
    for (const e of declared) if (!actual.includes(e)) fail(`scripts/seed.mjs KIT_TOP lists "${e}" which does not exist`);
  }
}

note(`packs scanned: ${packDirs.length} (${packDirs.join(", ")})`);

if (errors.length) {
  console.error("check-structure: FAIL");
  for (const e of errors) console.error(`  - ${e}`);
  for (const n of notes) console.error(`  note: ${n}`);
  console.error(
    "Method: software-factory-all-in-one/07-judgment/playbook-freshness.md — fix in the same change; re-verify official docs when touching packs.",
  );
  process.exit(1);
}

console.log("check-structure: ok");
for (const n of notes) console.log(`  note: ${n}`);
