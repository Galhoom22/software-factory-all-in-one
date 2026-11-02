# Playbook — Planning Repository Template

A reusable method for starting any new product the way MasarHub was started: one **planning repository** that holds the requirements, the derived documents, the rules for AI agents, CI, and a **prototype** that shows every screen (or every API call) before real implementation begins.

This repository is the **Code Hunters Studio** canonical copy of the playbook (private). The content stays generic — nothing here is specific to one product; MasarHub is only the example it was learned from.

## When to Use It

Use it at the very start of a new product (an ERP, a booking app, a backend-only service, anything), before any implementation repository exists. It answers "what do I set up, in what order, and what does done look like?" so nothing is forgotten.

## What Is Inside

| File | Purpose |
|------|---------|
| [`STEPS.md`](STEPS.md) | The steps in order, each with why it matters and what "done" means. Follow it top to bottom. |
| [`DELIVERY.md`](DELIVERY.md) | **Mandatory:** actor-loop delivery; there is no MVP mode. Wire CI and AGENTS so agents cannot forget. |
| [`PROTOTYPE.md`](PROTOTYPE.md) | How to build the prototype: a clickable UI in the exact production frontend stack, or an API explorer with mock responses for a backend-only product. |
| [`FEATURE_SDLC.md`](FEATURE_SDLC.md) | Adaptive feature-level delivery for the **implementation** repositories: decompose the SRS once, match engineering depth to risk, require evidence for completion. |
| [`LESSONS.md`](LESSONS.md) | Mistakes already made and how to avoid them. |
| [`PROMPTS.md`](PROMPTS.md) | Ready prompts for the agent at each step, the regular audits, and the handoff before a new chat. |
| [`templates/`](templates/) | Fill-in skeleton files laid out exactly like a new planning repository. |

**Reference implementation:** a completed Code Hunters Studio product planning repository (e.g. MasarHub planning) once it lives under this org — until then, use the working planning repo that produced this playbook. When the playbook says "copy" a prototype piece (the starter kit, `scripts/check-ui.mjs`, `scripts/crawl.mjs`, the tests), take it from MasarHub's `project-ui/` and adapt names and routes.

## Start a New Product

1. Create an empty **private** repository for the product's planning (for example `erp-planning`). If you use a studio org copy of this playbook, start from that private mirror’s `templates/` instead of inventing a new layout.
2. Copy everything inside [`templates/`](templates/) to the new repository's root, including the hidden `.github/`, `.editorconfig`, `.gitattributes`, and `.gitignore`.
3. Rename the files that carry a different name here so they do not affect this repository:
   - `AGENTS.template.md` → `AGENTS.md`
   - `docs/` (including `AGENT_START.md`, `OWNER_STANDING.md`, `DELIVERY.md`, SEO, Docker, FE/BE guides) → `docs/`
   - `scripts/` → `scripts/` (delivery, agents, scope, and Codex verify checks)
   - `agent-discovery/` root pointers (`CLAUDE.md`, `GEMINI.md`, `llms.txt`, `.gemini/`, `.github/…`, `.windsurf/…`) → matching paths at the new repo root
   - `cursor-rules/` → `.cursor/rules/`
   - `codex/` → `.codex/` (OpenAI Codex project config + hooks)
   - `LICENSE.template` → `LICENSE`
4. Copy this whole `playbook/` folder into the new repository too, so it keeps improving there.
5. Replace every `{{PLACEHOLDER}}` (search for `{{`). Delete any section marked *Optional* that the product does not need (for example `docs/AI.md` when the product has no AI).
6. Follow [`STEPS.md`](STEPS.md) from Phase 0.

### Placeholders

| Placeholder | Example |
|-------------|---------|
| `{{PRODUCT}}` | MasarHub |
| `{{ONE_LINE}}` | An AI platform that tailors a master resume to each job |
| `{{FRONTEND}}` | Next.js 16 + Tailwind CSS 4.3 |
| `{{BACKEND}}` | Laravel 13 |
| `{{DATABASE}}` | PostgreSQL 18 + pgvector |
| `{{OWNER}}` | The repository owner's GitHub handle, without `@` |
| `{{MARKETS}}` | Egypt, the Gulf, worldwide |
| `{{UI_LANGUAGES}}` | Modern Standard Arabic (RTL) and English |
| `{{REPLY_LANGUAGE}}` | English |
| `{{CURRENT_ACTOR}}` | Job seeker / User |
| `{{NODE_LTS}}` | 26 (Active LTS at planning time — re-verify on nodejs.org) |
| `{{YEAR}}` | 2026 |
| `{{COMPONENT_LIBRARY}}`, `{{ICON_LIBRARY}}`, `{{FONTS}}` | shadcn/ui (Radix base, RTL mode); Phosphor; Geist for Latin and IBM Plex Sans Arabic |

Every other `{{...}}` is a local fill-in named for what it holds (for example `{{RISK}}` in a risks table).

## Keeping It Current

This playbook is a living document. Whenever work in a planning repository creates a practice worth repeating (a new document, a CI check, a test, a rule, a lesson learned), update the matching playbook file in the same commit. `AGENTS.md` makes this mandatory for AI agents. Keep it generic: write the practice, not the product details.

Also keep agent **skills**, CLI pins (for example `impeccable@x.y.z` in CI), and MCP registrations current against **today’s** stable releases — not tomorrow’s RCs. Re-verify on the official pages when the planning stack or tooling moves.
