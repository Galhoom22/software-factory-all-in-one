#!/usr/bin/env node
/**
 * Structural Always-Current gate for playbook/.
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

// --- Agent harness packs (same structural bar as technologies) ---
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
    for (const req of ["README.md", "official-refs.md", "best-practices.md", "quality.md"]) {
      if (!exists(path.join(packDir, req))) fail("agents/" + slug + "/ missing " + req);
    }
    const refs = read(path.join(packDir, "official-refs.md"));
    if (!/Checked/i.test(refs) || ![...refs.matchAll(/\b(20\d{2}-\d{2}-\d{2})\b/g)].length) {
      fail("agents/" + slug + "/official-refs.md needs YYYY-MM-DD Checked dates");
    }
    const slices = fs
      .readdirSync(packDir, { withFileTypes: true })
      .filter((d) => d.isDirectory());
    if (!slices.length) fail("agents/" + slug + "/ has no version-slice directory");
    for (const slice of slices) {
      for (const f of ["use-these.md", "stop-using.md", "common-mistakes.md"]) {
        if (!exists(path.join(packDir, slice.name, f))) {
          fail("agents/" + slug + "/" + slice.name + "/ missing " + f);
        }
      }
    }
  }
  for (const m of agentsReadme.matchAll(/\|\s*\[`([a-z0-9-]+)\/`\]\(\1\/README\.md\)/g)) {
    const slug = m[1];
    if (!exists(path.join(agentsRoot, slug))) {
      fail("agents/README.md lists " + slug + "/ but directory is missing");
    }
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
