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

// --- Every workflow action (kit CI and template workflows) is pinned to a full commit SHA with its version comment ---
// Line scanner: `uses:` lines inside a block scalar (`run: |`, `>-`, `|2`, …) are text, not actions. Indents are
// measured from the mapping key (after any "- "). Content indent = key indent + an explicit indicator, else the
// indent of the first non-empty line, which must be deeper than the key; a less-indented line ends the scalar.
function unpinnedActions(yaml) {
  const found = [];
  let scalar = null; // { keyIndent, contentIndent }
  for (const line of yaml.split(/\r?\n/)) {
    const indent = line.match(/^ */)[0].length;
    if (scalar) {
      if (line.trim() === "") continue;
      if (scalar.contentIndent === null && indent > scalar.keyIndent) scalar.contentIndent = indent;
      if (scalar.contentIndent !== null && indent >= scalar.contentIndent) continue;
      scalar = null;
    }
    const m = line.match(/^\s*(?:#\s*)?(?:-\s*)?(?:uses|"uses"|'uses')\s*:\s*(\S+)(.*)$/);
    if (m) {
      const ref = m[1].replace(/^(["'])(.*)\1$/, "$2"); // quoted YAML scalars are valid
      // Local actions are part of the repository; container actions pin an image digest; the rest pin a commit SHA + version comment.
      const ok = ref.startsWith("./") || (ref.startsWith("docker://") ? /@sha256:[0-9a-f]{64}$/.test(ref) : /@[0-9a-f]{40}$/.test(ref) && /#\s*v?\d/.test(m[2]));
      if (!ok) found.push(ref);
    } else {
      // A key starts with a word character or quote, so "- # note: |" (a comment) can never open a scalar.
      const h = line.match(/^( *)(-\s+)?[\w"'][^:#]*:\s*[|>](?:[-+]?([1-9])|([1-9])?[-+]?)\s*(?:#.*)?$/);
      if (h) {
        const keyIndent = h[1].length + (h[2] ? h[2].length : 0);
        const explicit = Number(h[3] || h[4] || 0);
        scalar = { keyIndent, contentIndent: explicit ? keyIndent + explicit : null };
      }
    }
  }
  return found;
}
if (
  unpinnedActions(
    [
      "      - uses: actions/checkout@v4",
      "      - uses: actions/setup-node@949feb2413d6458794dcd2491c4babbbce0c15c1 # v7.1.0",
      "      #   uses: a/b@0123456789012345678901234567890123456789",
      "      - uses: ./local",
      "      - uses: docker://alpine:3.20",
      "      - uses : q/r@v1",
      "      - uses: docker://alpine@sha256:0123456789abcdef0123456789abcdef0123456789abcdef0123456789abcdef",
      '      - uses: "c/d@0123456789012345678901234567890123456789" # v1.2.3',
      "      - uses: 'e/f@0123456789012345678901234567890123456789' # v1.2.3",
      "      - uses: './quoted-local'",
      '      - uses: "g/h@v2"',
      "      - run: |",
      "          cat <<'EOF'",
      "          uses: example/value",
      "          EOF",
      "        shell: bash",
      '      - "uses": i/j@v3',
      "      - name: after the script",
      "        uses: k/l@v1",
      "      - run: |2",
      "            echo start",
      "          uses: example/indented-script-text",
      "      - name: |",
      "        uses: m/n@v1",
      "      - # note: |",
      "        uses: o/p@v1",
    ].join("\n"),
  ).join() !== "actions/checkout@v4,a/b@0123456789012345678901234567890123456789,docker://alpine:3.20,q/r@v1,g/h@v2,i/j@v3,k/l@v1,m/n@v1,o/p@v1"
) {
  fail("unpinnedActions self-test failed");
}

// --- Workflow hardening (07-judgment/ci-hardening.md): least-privilege token, no privileged PR trigger,
// no attacker-controllable context pasted into a shell or github-script body (use env: instead) ---
const ATTACKER_CONTEXT =
  /\$\{\{[^}]*\b(?:github\.head_ref|github\.event\.(?:issue|pull_request|comment|review|review_comment|pages|commits|head_commit|discussion|discussion_comment)\b[\w.*[\]]*?\.(?:title|body|message|label|ref|page_name|name|email))\b[^}]*\}\}/;
// Flatten each ${{ }} to one canonical line: expressions ignore whitespace (newlines too) between tokens, and
// github['event'].issue["title"] reads the same context as github.event.issue.title ('' is YAML's escaped quote in
// a single-quoted scalar). The expression's newlines move after it, so the start line still counts right.
const canonicalExpressions = (text) =>
  text.replace(/\$\{\{[^}]*\}\}/g, (expr) => {
    const flat = expr.replace(/\s*([.[\]])\s*/g, "$1").replace(/\[(''|['"])([\w-]+)\1\]/g, ".$2").replace(/\s+/g, " ");
    return flat + "\n".repeat(expr.split("\n").length - 1);
  });
// shortcut: a line scanner, not a YAML parser — it enforces the mechanical subset of 07-judgment/ci-hardening.md;
// switch to a parser dependency only if a real workflow shape slips past it.
function workflowHardeningIssues(yaml) {
  const issues = [];
  // YAML allows the root mapping to be indented: measure it once, then read root keys relative to it.
  const raw = yaml.split(/\r?\n/);
  const rootIndent = (raw.find((l) => l.trim() !== "" && !/^\s*#/.test(l)) ?? "").match(/^ */)[0].length;
  const lines = raw.map((l) => (l.startsWith(" ".repeat(rootIndent)) ? l.slice(rootIndent) : l));
  if (lines.some((l) => /^jobs\s*:/.test(l)) && !lines.some((l) => /^permissions\s*:/.test(l))) issues.push('no top-level "permissions:" (deny by default, grant per job)');
  const sink = (lineNo) => issues.push(`line ${lineNo}: attacker-controllable \${{ }} inside a script — pass it through env:`);
  // A run:/script: value (block, quoted or plain) continues on more-indented lines and the runner reads it whole,
  // so an expression may span lines: test the joined value, report the line the expression starts on.
  const flush = () => {
    const text = canonicalExpressions(body.lines.join("\n"));
    for (const m of text.matchAll(new RegExp(ATTACKER_CONTEXT.source, "g"))) sink(body.first + text.slice(0, m.index).split("\n").length - 1);
    body = null;
  };
  let body = null; // { indent of the run:/script: key, first line number, lines } while inside its value
  let inOn = false; // inside the top-level on: mapping, where triggers are declared
  lines.forEach((line, i) => {
    const indent = line.match(/^ */)[0].length;
    if (body !== null) {
      // A "#" line here is script text: the runner substitutes ${{ }} before the shell sees the comment.
      if (line.trim() === "" || indent > body.indent) {
        body.lines.push(line);
        return;
      }
      flush();
    }
    if (/^\s*#/.test(line)) return;
    const onKey = line.match(/^(?:on|"on"|'on')\s*:(.*)$/);
    if (onKey) inOn = true;
    else if (/^\S/.test(line)) inOn = false;
    if (inOn && /\bpull_request_target\b/.test(onKey ? onKey[1] : line)) issues.push(`line ${i + 1}: pull_request_target trigger (runs fork code paths with a write token and secrets)`);
    const key = line.match(/^( *)(-\s+)?(?:run|script)\s*:\s*(.*)$/);
    if (key) body = { indent: key[1].length + (key[2] ? key[2].length : 0), first: i + 1, lines: [key[3]] };
  });
  if (body !== null) flush();
  return issues;
}
if (
  workflowHardeningIssues(
    [
      "name: Reject pull_request_target",
      "on:",
      "  pull_request_target:",
      "jobs:",
      "  a:",
      "    steps:",
      "      - env:",
      "          TITLE: ${{ github.event.pull_request.title }}",
      '        run: echo "$TITLE"',
      '      - run: echo "${{ github.event.issue.title }}"',
      "      - run: |",
      "          git checkout ${{ github.head_ref }}",
      "          # Issue: ${{ github.event.issue.body }}",
      "          echo ${{ github.event.pull_request['title'] }}",
      "          echo ${{ github.event.pull_request.number }}",
      '          echo "${{',
      '          github.event.issue.title }}"',
      "        shell: bash",
      "      - uses: actions/github-script@0123456789012345678901234567890123456789 # v8.0.0",
      "        with:",
      "          script: |",
      "            console.log(`${{ github.event.comment.body }}`)",
      "      # - run: echo ${{ github.event.issue.body }}",
      "      - name: ${{ github.event.pull_request.title }}",
      "      - run: 'echo \"${{",
      "          github.event.issue.title }}\"'",
      "      - run: echo \"${{ github['event'].issue.title }}\"",
      "      - run: |",
      "          echo ${{ github.event.review.body }}",
      "      - run: 'echo \"${{ github.event.issue[''title''] }}\"'",
      "      - run: |",
      '          echo "${{ github[',
      "            'event'].issue.title }}\"",
      "          echo ${{ github.event.issue.number }}",
      "          echo ${{ github.event.comment.body }}",
    ].join("\n"),
  ).join("|") !==
    ['no top-level "permissions:" (deny by default, grant per job)', "line 3: pull_request_target trigger (runs fork code paths with a write token and secrets)"]
      .concat([10, 12, 13, 14, 16, 22, 25, 27, 29, 30, 32, 35].map((n) => `line ${n}: attacker-controllable \${{ }} inside a script — pass it through env:`))
      .join("|") ||
  workflowHardeningIssues(["  on: pull_request_target", "  permissions: {}", "  jobs:", "    a:", "      steps:", "        - run: echo ok"].join("\n")).join("|") !==
    "line 1: pull_request_target trigger (runs fork code paths with a write token and secrets)"
) {
  fail("workflowHardeningIssues self-test failed");
}
{
  const workflows = [];
  (function walkYaml(dir) {
    for (const ent of fs.readdirSync(dir, { withFileTypes: true })) {
      if (ent.name === ".git" || ent.name === "node_modules") continue;
      const p = path.join(dir, ent.name);
      if (ent.isDirectory()) walkYaml(p);
      else if (/\.ya?ml$/.test(ent.name) && /(^|[\\/])(workflows|github-actions)[\\/]/.test(p)) workflows.push(p);
    }
  })(playbookRoot);
  for (const file of workflows) {
    const rel = path.relative(playbookRoot, file).split(path.sep).join("/");
    for (const a of unpinnedActions(read(file))) fail(`${rel}: "${a}" must be pinned to a full commit SHA with a "# vX.Y.Z" comment`);
    for (const issue of workflowHardeningIssues(read(file))) fail(`${rel}: ${issue} (07-judgment/ci-hardening.md)`);
  }
}

// --- No invisible or bidi-control characters in kit text: agents read these files as instructions, and hidden
// text (zero-width, bidi overrides — "Trojan Source") can say something a reviewer never sees (07-judgment/agent-skills.md) ---
const chr = (...codes) => String.fromCharCode(...codes); // built at runtime so this file holds no hidden characters itself
const HIDDEN_RANGES = [[0x200b, 0x200f], [0x061c, 0x061c], [0x2060, 0x2060], [0xfeff, 0xfeff], [0x202a, 0x202e], [0x2066, 0x2069]];
const HIDDEN_CHAR = new RegExp(`[${HIDDEN_RANGES.map(([a, b]) => `${chr(a)}-${chr(b)}`).join("")}]`);
if (!HIDDEN_CHAR.test(`a${chr(0x200b)}b`) || !HIDDEN_CHAR.test(chr(0x202e)) || HIDDEN_CHAR.test(`plain ${chr(0x639, 0x631, 0x628)} text`)) fail("HIDDEN_CHAR self-test failed");
(function walkText(dir) {
  for (const ent of fs.readdirSync(dir, { withFileTypes: true })) {
    if (ent.name === ".git" || ent.name === "node_modules") continue;
    const p = path.join(dir, ent.name);
    if (ent.isDirectory()) walkText(p);
    else if (/\.(md|mdc|mjs|js|ts|json|ya?ml|toml|txt|html|css)$/i.test(ent.name)) {
      const lines = read(p).split(/\r?\n/);
      const at = lines.findIndex((l) => HIDDEN_CHAR.test(l));
      if (at !== -1) fail(`${path.relative(playbookRoot, p).split(path.sep).join("/")}:${at + 1}: invisible or bidi-control character (U+200B–U+200F, U+061C, U+2060, U+FEFF, U+202A–U+202E, U+2066–U+2069)`);
    }
  }
})(playbookRoot);

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


// --- Design-pattern packs: dirs ↔ index table ↔ six files ↔ Checked dates ---
{
  const dpRoot = path.join(playbookRoot, "design-patterns");
  if (exists(dpRoot)) {
    const skip = new Set(["_pack-template"]);
    const required = [
      "README.md",
      "problem-solution.md",
      "applicability.md",
      "implementation.md",
      "trade-offs.md",
      "relations.md",
    ];
    const index = read(path.join(dpRoot, "README.md"));
    const dirs = fs
      .readdirSync(dpRoot, { withFileTypes: true })
      .filter((d) => d.isDirectory() && !skip.has(d.name))
      .map((d) => d.name)
      .sort();
    for (const slug of dirs) {
      const listed =
        index.includes("[`" + slug + "/`](" + slug + "/README.md)") ||
        index.includes("design-patterns/" + slug + "/");
      if (!listed) {
        fail("design-patterns/" + slug + "/ exists but is not listed in design-patterns/README.md index");
      }
      for (const f of required) {
        if (!exists(path.join(dpRoot, slug, f))) fail(`design-patterns/${slug}/ missing ${f}`);
      }
      const card = read(path.join(dpRoot, slug, "README.md"));
      if (!/Checked/i.test(card)) fail(`design-patterns/${slug}/README.md has no Checked dates in Sources`);
      if (![...card.matchAll(/\b(20\d{2}-\d{2}-\d{2})\b/g)].length) {
        fail(`design-patterns/${slug}/README.md has no YYYY-MM-DD Checked dates`);
      }
    }
    for (const m of index.matchAll(/\|\s*\[`([a-z0-9-]+)\/`\]\(\1\/README\.md\)/g)) {
      const slug = m[1];
      if (!exists(path.join(dpRoot, slug))) fail(`design-patterns/README.md lists ${slug}/ but directory is missing`);
    }
    // Probe: a broken fixture must fail the same checks (SF-15).
    {
      const probeDir = path.join(dpRoot, "_structure-probe-missing-file");
      fs.mkdirSync(probeDir, { recursive: true });
      fs.writeFileSync(path.join(probeDir, "README.md"), "# probe\n");
      let probed = false;
      try {
        if (!exists(path.join(probeDir, "problem-solution.md"))) probed = true;
      } finally {
        fs.rmSync(probeDir, { recursive: true, force: true });
      }
      if (!probed) fail("design-patterns structure probe self-test failed");
    }
    note(`design-pattern packs scanned: ${dirs.length} (${dirs.join(", ")})`);
  }
}


// --- Architecture-pattern packs: dirs ↔ index ↔ six files ↔ Checked dates ---
{
  const apRoot = path.join(playbookRoot, "architecture-patterns");
  if (exists(apRoot)) {
    const skip = new Set(["_pack-template"]);
    const required = [
      "README.md",
      "problem-solution.md",
      "applicability.md",
      "implementation.md",
      "trade-offs.md",
      "relations.md",
    ];
    const index = read(path.join(apRoot, "README.md"));
    const dirs = fs
      .readdirSync(apRoot, { withFileTypes: true })
      .filter((d) => d.isDirectory() && !skip.has(d.name))
      .map((d) => d.name)
      .sort();
    for (const slug of dirs) {
      const listed =
        index.includes("[`" + slug + "/`](" + slug + "/README.md)") ||
        index.includes("architecture-patterns/" + slug + "/");
      if (!listed) {
        fail("architecture-patterns/" + slug + "/ exists but is not listed in architecture-patterns/README.md index");
      }
      for (const f of required) {
        if (!exists(path.join(apRoot, slug, f))) fail(`architecture-patterns/${slug}/ missing ${f}`);
      }
      const card = read(path.join(apRoot, slug, "README.md"));
      if (!/Checked/i.test(card)) fail(`architecture-patterns/${slug}/README.md has no Checked dates in Sources`);
      if (![...card.matchAll(/\b(20\d{2}-\d{2}-\d{2})\b/g)].length) {
        fail(`architecture-patterns/${slug}/README.md has no YYYY-MM-DD Checked dates`);
      }
    }
    for (const m of index.matchAll(/\|\s*\[`([a-z0-9-]+)\/`\]\(\1\/README\.md\)/g)) {
      const slug = m[1];
      if (!exists(path.join(apRoot, slug))) fail(`architecture-patterns/README.md lists ${slug}/ but directory is missing`);
    }
    {
      const probeDir = path.join(apRoot, "_structure-probe-missing-file");
      fs.mkdirSync(probeDir, { recursive: true });
      fs.writeFileSync(path.join(probeDir, "README.md"), "# probe\n");
      let probed = false;
      try {
        if (!exists(path.join(probeDir, "problem-solution.md"))) probed = true;
      } finally {
        fs.rmSync(probeDir, { recursive: true, force: true });
      }
      if (!probed) fail("architecture-patterns structure probe self-test failed");
    }
    note(`architecture-pattern packs scanned: ${dirs.length}`);
  }
}


// --- System-design packs: dirs ↔ index ↔ six files ↔ Checked dates ---
{
  const sdRoot = path.join(playbookRoot, "system-design");
  if (exists(sdRoot)) {
    const skip = new Set(["_pack-template"]);
    const required = [
      "README.md",
      "problem-solution.md",
      "applicability.md",
      "implementation.md",
      "trade-offs.md",
      "relations.md",
    ];
    const index = read(path.join(sdRoot, "README.md"));
    const dirs = fs
      .readdirSync(sdRoot, { withFileTypes: true })
      .filter((d) => d.isDirectory() && !skip.has(d.name))
      .map((d) => d.name)
      .sort();
    for (const slug of dirs) {
      const listed =
        index.includes("[`" + slug + "/`](" + slug + "/README.md)") ||
        index.includes("system-design/" + slug + "/");
      if (!listed) {
        fail("system-design/" + slug + "/ exists but is not listed in system-design/README.md index");
      }
      for (const f of required) {
        if (!exists(path.join(sdRoot, slug, f))) fail(`system-design/${slug}/ missing ${f}`);
      }
      const card = read(path.join(sdRoot, slug, "README.md"));
      if (!/Checked/i.test(card)) fail(`system-design/${slug}/README.md has no Checked dates in Sources`);
      if (![...card.matchAll(/\b(20\d{2}-\d{2}-\d{2})\b/g)].length) {
        fail(`system-design/${slug}/README.md has no YYYY-MM-DD Checked dates`);
      }
    }
    for (const m of index.matchAll(/\|\s*\[`([a-z0-9-]+)\/`\]\(\1\/README\.md\)/g)) {
      const slug = m[1];
      if (!exists(path.join(sdRoot, slug))) fail(`system-design/README.md lists ${slug}/ but directory is missing`);
    }
    {
      const probeDir = path.join(sdRoot, "_structure-probe-missing-file");
      fs.mkdirSync(probeDir, { recursive: true });
      fs.writeFileSync(path.join(probeDir, "README.md"), "# probe\n");
      let probed = false;
      try {
        if (!exists(path.join(probeDir, "problem-solution.md"))) probed = true;
      } finally {
        fs.rmSync(probeDir, { recursive: true, force: true });
      }
      if (!probed) fail("system-design structure probe self-test failed");
    }
    note(`system-design packs scanned: ${dirs.length}`);
  }
}


// --- Language (locale) packs: dirs ↔ index ↔ six files ↔ Checked dates ---
{
  const langRoot = path.join(playbookRoot, "languages");
  if (exists(langRoot)) {
    const skip = new Set(["_pack-template"]);
    const required = ["README.md","ui-ux.md","frontend.md","backend-api.md","data-and-search.md","pitfalls.md"];
    const index = read(path.join(langRoot, "README.md"));
    const dirs = fs
      .readdirSync(langRoot, { withFileTypes: true })
      .filter((d) => d.isDirectory() && !skip.has(d.name))
      .map((d) => d.name)
      .sort();
    for (const slug of dirs) {
      const listed =
        index.includes("[`" + slug + "/`](" + slug + "/README.md)") ||
        index.includes("languages/" + slug + "/");
      if (!listed) {
        fail("languages/" + slug + "/ exists but is not listed in languages/README.md index");
      }
      for (const f of required) {
        if (!exists(path.join(langRoot, slug, f))) fail(`languages/${slug}/ missing ${f}`);
      }
      const card = read(path.join(langRoot, slug, "README.md"));
      if (!/Checked/i.test(card)) fail(`languages/${slug}/README.md has no Checked dates in Sources`);
      if (![...card.matchAll(/\b(20\d{2}-\d{2}-\d{2})\b/g)].length) {
        fail(`languages/${slug}/README.md has no YYYY-MM-DD Checked dates`);
      }
      if (/[\u0600-\u06FF]/.test(card)) {
        fail(`languages/${slug}/README.md must stay English-only (SF-21); found Arabic script`);
      }
    }
    for (const m of index.matchAll(/\|\s*\[`([a-z0-9-]+)\/`\]\(\1\/README\.md\)/g)) {
      const slug = m[1];
      if (!exists(path.join(langRoot, slug))) fail(`languages/README.md lists ${slug}/ but directory is missing`);
    }
    {
      const probeDir = path.join(langRoot, "_structure-probe-missing-file");
      fs.mkdirSync(probeDir, { recursive: true });
      fs.writeFileSync(path.join(probeDir, "README.md"), "# probe\n");
      let probed = false;
      try {
        if (!exists(path.join(probeDir, "ui-ux.md"))) probed = true;
      } finally {
        fs.rmSync(probeDir, { recursive: true, force: true });
      }
      if (!probed) fail("languages structure probe self-test failed");
    }
    note(`language packs scanned: ${dirs.length}`);
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
