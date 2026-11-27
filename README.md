# Software Factory All-in-One

**Open-source software factory for AI coding agents** — requirements in → production-ready plan out · forever generic · MIT

One planning kit that turns a short requirements file into a complete product plan (docs, prototype rails, agent rules, CI, day loops, stack judgment) so agents ship **fast and professional** — not vibes.

<p align="center">
  <a href="https://github.com/Galhoom22/software-factory-all-in-one/releases/latest"><img alt="Latest release" src="https://img.shields.io/github/v/release/Galhoom22/software-factory-all-in-one?style=flat-square" /></a>
  <a href="LICENSE"><img alt="MIT" src="https://img.shields.io/badge/license-MIT-22c55e?style=flat-square" /></a>
  <a href="coverage/README.md"><img alt="Craft coverage" src="https://img.shields.io/badge/craft_coverage-~89%25-38bdf8?style=flat-square" /></a>
  <a href="technologies/README.md"><img alt="Technology packs" src="https://img.shields.io/badge/technology_packs-17-f59e0b?style=flat-square" /></a>
  <a href="agents/README.md"><img alt="Agent harnesses" src="https://img.shields.io/badge/agent_harnesses-12-a78bfa?style=flat-square" /></a>
  <a href="07-judgment/"><img alt="Judgment guides" src="https://img.shields.io/badge/judgment_guides-27-94a3b8?style=flat-square" /></a>
  <a href="https://github.com/Galhoom22/software-factory-all-in-one"><img alt="Public template" src="https://img.shields.io/badge/GitHub-Template-38bdf8?style=flat-square" /></a>
</p>

---

## Why this exists (the value)

AI agents are fast. Without rails, they are also inconsistent: missing screens, weak security, “Done” without evidence, stack drift, and half-finished actors.

This factory gives the agent a **complete operating system for planning and delivery**:

| You get | What it means in practice |
|--------|---------------------------|
| **One activation signal** | Drop `my-project-requirements.md` → the agent runs the factory. No template shopping. |
| **Full planning spine** | Requirements → BRD/PRD/SRS-shaped docs → prototype → FEATURE_SDLC → day pipeline → CI/CD phases |
| **Actor-loop delivery** | Finish one actor to production quality — **no MVP mode** that leaves screens stubbed |
| **Judgment, not vibes** | 27 guides (payments, booking, verification, AI engineering, review bar, …) |
| **Stack craft on demand** | 17 technology packs (Laravel, Next.js, PHP, React, …) with use/stop/mistakes |
| **Harness drive-craft** | 12 agent/IDE packs (Cursor, Codex, Claude, Gemini, …) under one `AGENTS.md` rulebook |
| **Honest coverage atlas** | ~**89%** craft-home coverage tracked in [`coverage/`](coverage/README.md) — deepen, don’t duplicate |
| **Outcome metrics over token vanity** | Cycle time, cost/merged PR, MTTR when you measure — not “tokens used” ([`07-judgment/software-factory.md`](07-judgment/software-factory.md)) |
| **Forever generic** | 100% reusable for any product; CI blocks private leakage |

**North star:** maximum agent speed × maximum professionalism. Details: [`EXCELLENCE.md`](EXCELLENCE.md).

---

## How it works (60 seconds)

```text
1. Seed a new PRIVATE planning repo:  node scripts/seed.mjs ../acme-planning
2. Write root my-project-requirements.md  (your product in plain language)
3. Open your AI coding agent — it detects the file and runs 00-USAGE → 01-STEPS
4. You review decisions; the agent fills templates/, prototype rails, CI, and agent rules
5. When planning for an actor is solid, implement in separate FE/BE repos using 08 + 09
```

**One principle:** you provide requirements; the agent owns the planning factory. No manual “pick which template.”

Full walkthrough: [`00-USAGE.md`](00-USAGE.md) · ordered steps: [`01-STEPS.md`](01-STEPS.md).

---

## By the numbers

| Metric | Value | Where |
|--------|------:|-------|
| Method docs (delivery order) | **9** (`00`–`09`; `07` is the judgment folder) | repo root |
| Judgment guides | **27** | [`07-judgment/`](07-judgment/) |
| Technology packs | **17** | [`technologies/`](technologies/README.md) |
| AI agent harness packs | **12** | [`agents/`](agents/README.md) |
| Craft-home coverage (domains 01–06) | **~89%** | [`coverage/`](coverage/README.md) |
| Studio-default harness strength | **~92%** | Cursor + Codex + Claude |
| License | **MIT** | [`LICENSE`](LICENSE) |
| Forever-generic gate | **CI enforced** | `scripts/check-forever-generic.mjs` |
| Content-integrity gate | **CI enforced** | `scripts/check-content-integrity.mjs` |

Industry-surface breadth (mobile/desktop/games/…) is tracked separately (~25%) — we do not pretend equal depth everywhere. See [`coverage/07-software-surfaces.md`](coverage/07-software-surfaces.md).

---

<p align="center">
  <img src="assets/software-factory-hero.svg" alt="Software Factory All-in-One — forge preview: intake lights the rails, day line stamps Build→Ship, coverage ratchet climbs" width="720" />
</p>

<p align="center"><sub>Method preview · Intake → Day line → Coverage ratchet · forever generic</sub></p>

---

## Quick start

1. **Seed a private planning repo** — either clone the [latest release](https://github.com/Galhoom22/software-factory-all-in-one/releases/latest) of this kit (`main` may carry unreleased changes) and run `node scripts/seed.mjs ../erp-planning`, or click **Use this template** (private), clone your new repo and run `node scripts/seed.mjs --in-place`.
2. You get the kit vendored read-only in `software-factory-all-in-one/` and [`templates/`](templates/) instantiated at the root (`AGENTS.md`, `docs/`, `.cursor/rules/`, `.codex/`, CI, …). The seed never overwrites existing files, and its CI is green before you write any requirements (proven on every change by `scripts/check-seed.mjs`).
3. Add **root** `my-project-requirements.md` (start from [`examples/my-project-requirements.example.md`](examples/my-project-requirements.example.md)).
4. Open Cursor / Codex / Claude Code / your agent and say you want planning started from that file.
5. Follow agent output; replace `{{PLACEHOLDERS}}` with your product facts in *your* private repo only.
6. Later, refresh the vendored kit from a newer clone with `node scripts/seed.mjs --update ../erp-planning` (product files are never touched).

Detailed seed steps and placeholder table: [`00-USAGE.md`](00-USAGE.md) and the section below.

### Placeholders (private product repo only)

| Placeholder | Example fill-in |
|-------------|-----------------|
| `{{PRODUCT_NAME}}` | Northwind Ops |
| `{{ONE_LINE}}` | A bilingual planning workspace for product teams |
| `{{FRONTEND}}` | Next.js 16 + Tailwind CSS |
| `{{BACKEND}}` | Laravel 13 + PostgreSQL |
| `{{NODE_LTS}}` | 26 (re-verify on nodejs.org) |
| `{{REPLY_LANGUAGE}}` | English |
| `{{DOCS_LANGUAGE}}` | English |
| `{{UI_LANGUAGES}}` | English and Spanish |
| `{{ICON_LIBRARY}}` | Lucide |

Never put real product names, people, or tracker keys **back into this public kit**.

---

## What’s inside (map)

```text
00-USAGE.md               Start here (requirements-driven)
01-STEPS.md               Idea → complete plan
02-DELIVERY.md            Actor loop (no MVP mode)
03-PROTOTYPE.md           Production-faithful prototype / API explorer
04-FEATURE_SDLC.md        Feature depth for implementation repos
05-PROMPTS.md             Ready agent prompts + audits
06-LESSONS.md             Transferable planning lessons
07-judgment/              27 judgment guides (payments, AI, review, …)
08-IMPLEMENTATION-DAY.md  Owner↔agent day pipeline + closeout
09-CI-CD.md               CI/CD phases for honest Done
EXCELLENCE.md             North star + upgrade ratchet
ARCHITECTURE.md           Task routes (load only what you need), which instruction wins, owners
DECISIONS.md              Why the kit is shaped this way (SF-01 … SF-16)
CHANGELOG.md              What changed, and how to update a vendored copy
AGENTS.md · CLAUDE.md     Rules for agents working on the kit itself
coverage/                 Honest ✅/% atlas (craft · surfaces · agents)
agents/                   Per-harness packs
technologies/             Per-stack packs
templates/                Skeleton of a new planning repository
examples/                 Sample requirements entry file
scripts/                  Self-checks (activation, freshness, forever-generic)
```

| Need | Open |
|------|------|
| Which documents to load for a task | [`ARCHITECTURE.md`](ARCHITECTURE.md) § 1 |
| Why a rule exists | [`DECISIONS.md`](DECISIONS.md) |
| What changed / how to update a vendored copy | [`CHANGELOG.md`](CHANGELOG.md) |
| Day closeout (PR → CI → review → merge → CD) | [`08-IMPLEMENTATION-DAY.md`](08-IMPLEMENTATION-DAY.md) + [`09-CI-CD.md`](09-CI-CD.md) |
| Stack professionalism | [`technologies/`](technologies/README.md) |
| Agent harness tips | [`agents/`](agents/README.md) |
| “Do we already cover X?” | [`coverage/README.md`](coverage/README.md) |
| Payments / booking / AI paths | [`07-judgment/`](07-judgment/) |

---

## Forever generic (hard rule)

This repository must stay **100% reusable** for any team and any product.

- **Allowed:** practices, patterns, generic examples, stack craft, judgment.
- **Forbidden here:** product names, people, tracker keys, day-page URLs, secrets, real personal data.

**Enforced:** CI runs `node scripts/check-forever-generic.mjs`. Planning sync also refuses private product/person leakage before publish. See [`CONTRIBUTING.md`](CONTRIBUTING.md).

---

## Community

| File | Purpose |
|------|---------|
| [`CONTRIBUTING.md`](CONTRIBUTING.md) | How to propose changes · forever-generic rules |
| [`CODE_OF_CONDUCT.md`](CODE_OF_CONDUCT.md) | Contributor Covenant 2.1 |
| [`SECURITY.md`](SECURITY.md) | Private vulnerability reporting |
| [Issue forms](.github/ISSUE_TEMPLATE/) | Bug · idea · question |
| [PR template](.github/pull_request_template.md) | Checklist for every pull request |

Open a **bug**, **idea**, or **question** from the Issues tab — blank issues are disabled so reports stay structured. Security reports go through [private advisories](https://github.com/Galhoom22/software-factory-all-in-one/security/advisories/new), not public issues.

## Contributing

Improvements that **raise professionalism** are welcome. [`CONTRIBUTING.md`](CONTRIBUTING.md) has the procedure (atlas first, the excellence ratchet, the five gates CI runs) and how to propose a change from a product repository that vendors the kit.

---

## License

[MIT](LICENSE) · Canonical home: [Galhoom22/software-factory-all-in-one](https://github.com/Galhoom22/software-factory-all-in-one)
