# Playbook — Planning Repository Template

A reusable method for starting any new product: one **planning repository** that holds the requirements, the derived documents, the rules for AI agents, CI, and a **prototype** that shows every screen (or every API call) before real implementation begins.

This folder is **generic**. Keep product names, people, org paths, tracker keys, and day-page URLs out of method docs and out of `templates/` — those belong in each product’s own `docs/OWNER_STANDING.md` after copy. Placeholder **examples** in the table below are sample fill-ins only; replace them for each product.

## Numbered layout

Method files are **prefixed so they sort in delivery order**. Keep this numbering when you add a new method doc.

```text
playbook/
  README.md                 Entry (this file)
  01-STEPS.md               Ordered steps idea → complete plan
  02-DELIVERY.md            Actor-loop delivery (no MVP mode)
  03-PROTOTYPE.md           Prototype / API-explorer guide
  04-FEATURE_SDLC.md        Feature depth for implementation repos
  05-PROMPTS.md             Ready agent prompts + audits
  06-LESSONS.md             Planning-process lessons
  07-judgment/              Absorb outside methods as judgment only
  08-IMPLEMENTATION-DAY.md  Owner↔agent day pipeline (run-through → closeout → Pareto + handoff)
  09-CI-CD.md               CI/CD gates (GitHub Actions + staging/prod delivery) for day closeout
  templates/                Skeleton of a new planning repository
```

Product repos still use flat paths such as `docs/BRD.md` after copying `templates/` — numbering here is for the **playbook method**, not a forced BRD/PRD folder tree.

## When to Use It

Use it at the very start of a new product (an ERP, a booking app, a backend-only service, anything), before any implementation repository exists. It answers "what do I set up, in what order, and what does done look like?" so nothing is forgotten.

## What Is Inside

| File | Purpose |
|------|---------|
| [`01-STEPS.md`](01-STEPS.md) | The steps in order, each with why it matters and what "done" means. Follow it top to bottom. |
| [`02-DELIVERY.md`](02-DELIVERY.md) | **Mandatory:** actor-loop delivery; there is no MVP mode. Wire CI and AGENTS so agents cannot forget. |
| [`03-PROTOTYPE.md`](03-PROTOTYPE.md) | How to build the prototype: a clickable UI in the exact production frontend stack, or an API explorer with mock responses for a backend-only product. |
| [`04-FEATURE_SDLC.md`](04-FEATURE_SDLC.md) | Adaptive feature-level delivery for the **implementation** repositories: decompose the SRS once, match engineering depth to risk, require evidence for completion. |
| [`05-PROMPTS.md`](05-PROMPTS.md) | Ready prompts for the agent at each step, the regular audits, planning handoffs, and **implementation day** start/end prompts. |
| [`06-LESSONS.md`](06-LESSONS.md) | Mistakes already made and how to avoid them. |
| [`07-judgment/`](07-judgment/README.md) | How to borrow Spec Kit / ESD / ATLAS-style methods as **judgment only** — map onto existing docs; never install a second constitution. |
| [`08-IMPLEMENTATION-DAY.md`](08-IMPLEMENTATION-DAY.md) | Fixed day pipeline for FE/BE implementation chats: day run-through → closeout (PR → **CI green** → CodeRabbit → merge → verify → **CD when configured**) → Pareto 20% + new-chat handoff; standing ↔ playbook mirror. |
| [`09-CI-CD.md`](09-CI-CD.md) | Continuous integration and delivery: planning CI, FE/BE GitHub Actions, staging auto-deploy / production approval, how CI/CD sits in the day closeout. |
| [`templates/`](templates/) | Fill-in skeleton files laid out exactly like a new planning repository (includes `implementation/github-actions/` for FE/BE). |

**Optional reference:** if your studio already has one finished planning repo with a solid `project-ui/`, copy its starter kit, `scripts/check-ui.mjs`, `scripts/crawl.mjs`, and tests — then adapt names and routes. Do not bake that product’s name into this playbook.

## Start a New Product

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
5. Replace every `{{PLACEHOLDER}}` (search for `{{`). Delete any section marked *Optional* that the product does not need (for example `docs/AI.md` when the product has no AI).
6. Follow [`01-STEPS.md`](01-STEPS.md) from Phase 0.

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

This playbook is a living document. Whenever work in a planning repository creates a practice worth repeating (a new document, a CI check, a test, a rule, a lesson learned), update the matching playbook file in the same commit. `AGENTS.md` makes this mandatory for AI agents. Keep it generic: write the practice, not the product details.

Also keep agent **skills**, CLI pins (for example `impeccable@x.y.z` in CI), and MCP registrations current against **today’s** stable releases — not tomorrow’s RCs. Re-verify on the official pages when the planning stack or tooling moves.
