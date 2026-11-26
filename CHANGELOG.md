# Changelog

Notable changes to Software Factory All-in-One. Format: [Keep a Changelog](https://keepachangelog.com/en/1.1.0/); releases follow [Semantic Versioning](https://semver.org/) once tagged. If you vendor the kit, read this file before and after `seed.mjs --update`.

## [Unreleased]

### Added

- `scripts/seed.mjs` — seed a planning repository from a clone, `--in-place` after "Use this template", or `--update` a vendored copy; never overwrites existing files.
- `scripts/check-seed.mjs` — smoke test: fresh, activated, in-place and updated seeds pass their own gates.
- `scripts/check-content-integrity.mjs` — no tool artifacts written back, tables GitHub can render, links and anchors that resolve (`--product`, `--artifacts-only`).
- `scripts/check-structure.mjs` — renamed from `check-playbook-freshness.mjs`; adds router ↔ guides, computed README facts, cited-decision and `KIT_TOP` checks.
- `ARCHITECTURE.md` (task routes, which instruction wins, owners), `DECISIONS.md` (SF-01 … SF-15), kit `AGENTS.md` and `CLAUDE.md`, `.gitignore`, `.gitattributes`, this changelog.

### Changed

- Templates use `{{UI_LANGUAGES}}`, `{{ICON_LIBRARY}}`, `{{REPLY_LANGUAGE}}` and `{{DOCS_LANGUAGE}}` instead of one product's choices; template links are written in product coordinates.
- A vendored copy is read-only; improvements go upstream as pull requests.
- README counts are computed from the tree; percentages live only in the coverage atlas.
- Kit decisions are cited as `SF-NN` (defined in `DECISIONS.md`) instead of private decision IDs.
- `07-judgment/README.md` is a trigger → guide → slot router and the only list of guides; hub documents link slots instead of every guide.
- `08-IMPLEMENTATION-DAY.md` has one tool-agnostic review section; an AI PR reviewer is optional and configured per product.
- `CONTRIBUTING.md` owns the change procedure (ratchet, gates, contributing from a product, maintainer publishing); `EXCELLENCE.md` keeps the dimensions.
- Agent harness packs are one `README.md` each (98 files became 14); the shared quality bar and session habits live once in `agents/README.md`.
- The kit calls itself the factory (or the kit) everywhere; "playbook" wording is retired. File names stay stable — `07-judgment/playbook-freshness.md` keeps its path.

### Fixed

- The product CODEOWNERS template protects `/software-factory-all-in-one/` (it pointed at a stale `/playbook/` path).
- Content damaged by tool write-back restored (coverage atlas, `04-FEATURE_SDLC.md`, `EXCELLENCE.md`, judgment tables).
- A freshly seeded repository passes its own CI before the prototype exists; `check-planning-entry.mjs` no longer depends on the checkout folder name; `check-agents.mjs` no longer requires replies in English.

### Removed

- The kit-root copy of `check-planning-entry.mjs` (seeded repositories run their own `scripts/check-planning-entry.mjs`).

### Migration (vendored copies)

1. From a fresh clone of the kit: `node scripts/seed.mjs --update <your-planning-repo>`.
2. In your CI, call `software-factory-all-in-one/scripts/check-structure.mjs` (the old `check-playbook-freshness.mjs` name still works for one release).
3. Compare the fixed `templates/scripts/check-scope.mjs`, `check-planning-entry.mjs` and `check-agents.mjs` with your `scripts/` copies and merge the fixes (keep any checks your product added), then fill the new language and icon placeholders.

## Before versioning — atlas history

Kept verbatim from the coverage atlas, newest first.

| Date (UTC) | Change |
|------------|--------|
| 2026-11-26 | `scripts/seed.mjs` (clone / `--in-place` / `--update`) + `scripts/check-seed.mjs` smoke test; templates green on day one; template links in product coordinates; planning-entry gate no longer depends on the folder name. |
| 2026-11-26 | Structure gate `check-structure.mjs` (renamed from `check-playbook-freshness.mjs`; shim kept one release): judgment index and README counts/percentages are computed and checked. |
| 2026-11-26 | Content-integrity gate (`check-content-integrity.mjs`); restored coverage files and FEATURE_SDLC/EXCELLENCE/judgment tables damaged by tool write-back. |
| 2026-11-25 | Factory.com Software Factory absorb (routing, outcome metrics, trust/control) into `07-judgment/software-factory.md`; coverage ~93%. |
| 2026-11-23 | SF-11: AI agent harness atlas (`08-ai-agents`) + `agents/` packs (US + China + Antigravity). |
| 2026-11-23 | SF-11: Always-Current playbook freshness closeout + `check-playbook-freshness.mjs` CI gate. |
| 2026-11-23 | SF-05: Rust 1.100 + edition 2024 technologies pack from doc.rust-lang.org/stable. |
| 2026-11-23 | SF-11: software industry surfaces atlas (`07-software-surfaces`) — % per surface + language map; two-numbers rule vs 01–06 professionalism. |
| 2026-11-21 | SF-12: Software Factory + multi-agent line paired with studio seats.
| 2026-11-23 | SF-10: integration engineering judgment (any partner boundary) in day workflow. |
| 2026-11-23 | SF-10: AI engineering judgment (det/prob seam, evals, admission) in day workflow. |
| 2026-11-23 | SF-10: agent delegation judgment (brief → review → land; implementer never commits). |
| 2026-11-23 | SF-05: C# 14 (.NET 10) technologies pack from learn.microsoft.com/dotnet/csharp. |
| 2026-11-23 | SF-05: .NET 10 LTS technologies pack from learn.microsoft.com/dotnet. |
| 2026-11-23 | SF-05: Next.js 16 technologies pack from nextjs.org/docs; npm 16.4.x. |
| 2026-11-23 | SF-05: React 19 technologies pack from react.dev; npm 19.3.x. |
| 2026-11-23 | SF-10: verification engineering judgment (criteria→evidence; author≠judge) in day workflow. |
| 2026-11-23 | SF-05: Context7 / current-docs day gate (pinned-line freshness; day evidence). |
| 2026-11-23 | SF-10: human code-review bar (readability, modern syntax, best practices) in day workflow; CodeRabbit assists. |
| 2026-11-23 | SF-09: Pareto 20% file-anchored (paths, structure, connections) for ChatGPT code-reading growth. |
| 2026-11-23 | SF-10: enterprise system-design judgment (six questions, practice levels, verification-dominant) absorbed; course tree not vendored. |
| 2026-11-23 | SF-11: playbook purpose explicit — single reference for agent speed×quality (vibe + professional products). |
| 2026-11-23 | SF-10: API design judgment (consumer-first REST craft) absorbed from course; design bar in API readiness gate. |
| 2026-11-23 | SF-10: cross-surface compatibility day gate (sibling read / owned-seat write; monorepo+split+services). |
| 2026-11-21 | SF-13: competitor recon / clean-room parity (replica-skill judgment).
| 2026-11-21 | SF-12: studio-as-company (Paperclip judgment) + STUDIO_ORG + optional CLI.
| 2026-11-21 | SF-11: EXCELLENCE.md north star + ratchet for every future playbook upgrade.
| 2026-11-21 | SF-09: context-window hygiene (memory pointers, handoff, mid-day checkpoint ≠ owner go). |
| 2026-11-21 | SF-08: proportional day pipeline (flexible rigor; always-on core). |
| 2026-11-21 | SF-10: booking/reservations judgment + day gate. |
| 2026-11-21 | SF-07: compliance/ethics/risk judgment + candor safer-scenario; day check. |
| 2026-11-21 | SF-07 candor: refuse/advise when an add would lower professionalism. |
| 2026-11-21 | SF-10: SEO + GEO judgment + templates + day gate; dual sync. |
| 2026-11-21 | Symfony 8 pack (SF-05) from symfony.com/doc. |
| 2026-11-21 | Vue 3 pack (SF-05) from vuejs.org/guide/introduction. |
| 2026-11-21 | Inertia.js 3 pack (SF-05) from inertiajs.com/docs/v3/getting-started. |
| 2026-11-21 | CSS Snapshot 2026 pack (SF-05) from MDN Web/CSS. |
| 2026-11-21 | HTML Living Standard pack (SF-05) from MDN Web/HTML. |
| 2026-11-21 | JavaScript / ES2026 pack (SF-05) from MDN Web/JavaScript. |
| 2026-11-21 | Laravel 13 pack (SF-05). |
| 2026-11-21 | Technologies library + PHP 8.6 pack (SF-05). |
| 2026-11-21 | API readiness gate absorbed (SF-10); workflows ~91%. |
| 2026-11-21 | Created coverage atlas; first full inventory + scoring; wired into playbook README / prompts / lessons / OWNER_STANDING template. |
