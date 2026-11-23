# Playbook — Planning Repository Template

A reusable **project-planning engine**: one **planning repository** that holds requirements, derived documents, AI agent rules, CI, and a **prototype** — before real implementation repos exist.

**How to use (start here):** [`00-USAGE.md`](00-USAGE.md)

**One principle:** the user provides root `my-project-requirements.md`. The AI Agent detects that file and runs the playbook. No manual template picking.

This folder is **generic** and must **stay** generic forever. Keep product names, people, org paths, tracker keys, and day-page URLs out of method docs and out of `templates/` — those belong in each product’s own `docs/OWNER_STANDING.md` after copy. Placeholder **examples** in the table below are sample fill-ins only; replace them for each product. Never reverse this rule when adding CI/CD, day-loop, or other practices.

## Why this playbook exists

**Purpose:** one living place that holds the craft needed to build **any** software (and AI/software-backed products) so AI agents work at **maximum speed with maximum quality**. Agents bring speed; this playbook brings the rails, judgment, stacks, day loops, and lessons that make quality repeatable — for hands-off agent coding **and** for professional revenue products. Grow it over time (languages, packs, lessons). Full north star: [`EXCELLENCE.md`](EXCELLENCE.md) § Why this playbook exists.



## Numbered layout

Method files are **prefixed so they sort in delivery order**. Keep this numbering when you add a new method doc.

```text
playbook/
  README.md                 Entry (this file)
  00-USAGE.md               How a new user starts (requirements-driven)
  01-STEPS.md               Ordered steps idea → complete plan
  02-DELIVERY.md            Actor-loop delivery (no MVP mode)
  03-PROTOTYPE.md           Prototype / API-explorer guide
  04-FEATURE_SDLC.md        Feature depth for implementation repos
  05-PROMPTS.md             Ready agent prompts + audits
  06-LESSONS.md             Planning-process lessons
  07-judgment/              Judgment-only absorb of outside methods
  08-IMPLEMENTATION-DAY.md  Owner↔agent day pipeline
  09-CI-CD.md               CI/CD progressive phases for day closeout
  EXCELLENCE.md             North star + ratchet for every future upgrade
  coverage/                 Inventory + ✅/% of what the template already covers
  technologies/             Per-stack packs (PHP, Laravel, Next.js, …)
  examples/                 Copyable samples (e.g. my-project-requirements)
  scripts/                  Playbook self-checks (activation wiring)
  templates/                Skeleton of a new planning repository
```

Product repos still use flat paths such as `docs/BRD.md` after copying `templates/` — numbering here is for the **playbook method**, not a forced BRD/PRD folder tree.

## When to Use It

Use it at the very start of a new product (an ERP, a booking app, a backend-only service, anything), before any implementation repository exists. It answers "what do I set up, in what order, and what does done look like?" so nothing is forgotten.

## What Is Inside

| File | Purpose |
|------|---------|
| [`00-USAGE.md`](00-USAGE.md) | **Start here.** Empty planning repo → `my-project-requirements.md` → agent runs the playbook. |
| [`01-STEPS.md`](01-STEPS.md) | The steps in order, each with why it matters and what "done" means. Follow it top to bottom (agent adapts with 80/20). |
| [`02-DELIVERY.md`](02-DELIVERY.md) | **Mandatory:** actor-loop delivery; there is no MVP mode. Wire CI and AGENTS so agents cannot forget. |
| [`03-PROTOTYPE.md`](03-PROTOTYPE.md) | How to build the prototype: a clickable UI in the exact production frontend stack, or an API explorer with mock responses for a backend-only product. |
| [`04-FEATURE_SDLC.md`](04-FEATURE_SDLC.md) | Adaptive feature-level delivery for the **implementation** repositories: decompose the SRS once, match engineering depth to risk, require evidence for completion. |
| [`05-PROMPTS.md`](05-PROMPTS.md) | Ready prompts for the agent at each step, audits, planning handoffs, implementation day, and requirements-driven activation. |
| [`06-LESSONS.md`](06-LESSONS.md) | Mistakes already made and how to avoid them. |
  07-judgment/              Judgment-only absorb of outside methods
| [`08-IMPLEMENTATION-DAY.md`](08-IMPLEMENTATION-DAY.md) | Fixed day pipeline for FE/BE implementation chats: day run-through → closeout (PR → **CI green** → CodeRabbit → merge → verify → **CD when configured**) → Pareto 20% + new-chat handoff. |
| [`EXCELLENCE.md`](EXCELLENCE.md) | North star + **ratchet**: every edit must raise professionalism toward the best reusable method — trajectory, not a one-prompt finish. |
| [`07-judgment/studio-company.md`](07-judgment/studio-company.md) + [`templates/docs/STUDIO_ORG.md`](templates/docs/STUDIO_ORG.md) | Studio-as-company seats, goals, atomic checkout (Paperclip patterns as judgment). |
| [`07-judgment/human-code-review.md`](07-judgment/human-code-review.md) | Senior/tech-lead bar: human readability, modern syntax, best practices. |
| [`07-judgment/context7-docs.md`](07-judgment/context7-docs.md) | Context7 / current library docs for pinned lines (this-session freshness). |
| [`07-judgment/verification-engineering.md`](07-judgment/verification-engineering.md) | Prove AI-written changes: criteria→evidence; author≠judge; risk-matched layers. |
| [`07-judgment/enterprise-system-design.md`](07-judgment/enterprise-system-design.md) | Boundary/verification craft: six questions, AI practice levels, output admission. |
| [`07-judgment/api-design.md`](07-judgment/api-design.md) | Consumer-first REST craft (design bar inside API readiness). |
| [`07-judgment/cross-surface-compatibility.md`](07-judgment/cross-surface-compatibility.md) | FE↔BE↔services compatibility gate: read sibling, write owned seat, contract-first. |
| [`07-judgment/software-factory.md`](07-judgment/software-factory.md) | Software Factory + multi-agent line (Mastra/Vercel/Warp patterns as judgment) paired with seats. |
| [`coverage/`](coverage/README.md) | Living atlas: what the playbook/template already covers, with ✅ / ⚠️ / ❌ and a **%** per capability. Agents consult it before adding or duplicating a practice. |
| [`technologies/`](technologies/README.md) | Per-technology packs (official-docs distillations): best practices, use/stop lists, common mistakes. Start with `php/php-8.6`. |
| [`09-CI-CD.md`](09-CI-CD.md) | CI/CD with **progressive phases** (A = CI only by default; B/C when host hooks exist). |
| [`examples/`](examples/) | Copyable samples, including `my-project-requirements.example.md`. |
| [`scripts/check-requirements-activation.mjs`](scripts/check-requirements-activation.mjs) | Verifies activation wiring is present (run after playbook edits). |
| [`scripts/check-planning-entry.mjs`](scripts/check-planning-entry.mjs) | CI entry gate: enforce activation when `my-project-requirements.md` exists; skip otherwise. |
| [`templates/`](templates/) | Fill-in skeleton files laid out exactly like a new planning repository (includes `implementation/github-actions/` for FE/BE). |

**Optional reference:** if your studio already has one finished planning repo with a solid `project-ui/`, copy its starter kit, `scripts/check-ui.mjs`, `scripts/crawl.mjs`, and tests — then adapt names and routes. Do not bake that product’s name into this playbook.

## Start a New Product

**Preferred path (requirements-driven):** follow [`00-USAGE.md`](00-USAGE.md) — seed the repo from this playbook, add root `my-project-requirements.md`, open the AI agent. The agent detects the file and runs planning.

**Manual seed checklist** (what the agent also does when bootstrapping):

1. Create an empty **private** repository for the product's planning (for example `erp-planning`). If you use a studio org copy of this playbook, start from that private mirror’s `templates/` instead of inventing a new layout.
2. Copy everything inside [`templates/`](templates/) to the new repository's root, including the hidden `.github/`, `.editorconfig`, `.gitattributes`, and `.gitignore`.
3. Rename the files that carry a different name here so they do not affect this repository:
   - `AGENTS.template.md` → `AGENTS.md`
   - `docs/` (including `AGENT_START.md`, `OWNER_STANDING.md`, `DELIVERY.md`, SEO, Docker, FE/BE guides, `REFERENCES.md`, `SCOPE_REJECTIONS.md`, `JUDGMENT.md`, `actors/`, `decision-logs/`, `learning-from-mistakes/`) → `docs/`
   - `scripts/` → `scripts/` (delivery, agents, scope, and Codex verify checks)
   - `agent-discovery/` root pointers (`CLAUDE.md`, `GEMINI.md`, `llms.txt`, `.gemini/`, `.github/…`, `.windsurf/…`) → matching paths at the new repo root
   - `cursor-rules/` → `.cursor/rules/`
   - `codex/` → `.codex/` (OpenAI Codex project config + hooks)
   - `LICENSE.template` → `LICENSE`
4. Copy this whole `playbook/` folder into the new repository too, so it keeps improving there.
5. Add root **`my-project-requirements.md`** (from [`examples/my-project-requirements.example.md`](examples/my-project-requirements.example.md)). That file is the activation signal.
6. Replace every `{{PLACEHOLDER}}` in seeded templates as the agent fills them from the requirements file. Delete any section marked *Optional* that the product does not need (for example `docs/AI.md` when the product has no AI).
7. The agent follows [`01-STEPS.md`](01-STEPS.md) from Phase 0 with 80/20 depth.

### Placeholders

| Placeholder | Example |
|-------------|---------|
| `{{PRODUCT}}` | Acme Planner |
| `{{ONE_LINE}}` | A bilingual planning workspace for product teams |
| `{{FRONTEND}}` | Next.js 16 + Tailwind CSS 4.3 |
| `{{BACKEND}}` | Laravel 13 |
| `{{DATABASE}}` | PostgreSQL 18 + pgvector |
| `{{OWNER}}` | The repository owner's GitHub handle, without `@` |
| `{{MARKETS}}` | Primary markets for this product |
| `{{UI_LANGUAGES}}` | Language A (RTL if needed) and Language B |
| `{{REPLY_LANGUAGE}}` | English |
| `{{CURRENT_ACTOR}}` | Primary end user |
| `{{NODE_LTS}}` | 26 (Active LTS at planning time — re-verify on nodejs.org) |
| `{{YEAR}}` | 2026 |
| `{{COMPONENT_LIBRARY}}`, `{{ICON_LIBRARY}}`, `{{FONTS}}` | shadcn/ui (Radix base, RTL mode); Phosphor; Geist for Latin and IBM Plex Sans Arabic |

Every other `{{...}}` is a local fill-in named for what it holds (for example `{{RISK}}` in a risks table).

## Keeping It Current

**North star:** [`EXCELLENCE.md`](EXCELLENCE.md) — aspiration is the best human+AI planning→implementation playbook; progress is a **ratchet** (each change raises at least one excellence dimension). One session never “finishes” that dream.

This playbook is a living document. Whenever work in a planning repository creates a practice worth repeating (a new document, a CI check, a test, a rule, a lesson learned), update the matching playbook file in the same commit. `AGENTS.md` makes this mandatory for AI agents. Keep it generic: write the practice, not the product details.

Also keep agent **skills**, CLI pins (for example `impeccable@x.y.z` in CI), and MCP registrations current against **today’s** stable releases — not tomorrow’s RCs. Re-verify on the official pages when the planning stack or tooling moves.

### Before adding a practice
1. Read [`EXCELLENCE.md`](EXCELLENCE.md) ratchet (dimension up, none down).
2. Consult [`coverage/`](coverage/README.md). If the capability is already ✅ at high %, deepen that home instead of inventing a parallel file.
3. When you add or deepen something, update the matching coverage row and % in the same change, then sync the studio playbook mirror.
