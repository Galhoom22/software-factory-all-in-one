# Changelog

Notable changes to Software Factory All-in-One. Format: [Keep a Changelog](https://keepachangelog.com/en/1.1.0/); versions follow [Semantic Versioning](https://semver.org/) as defined for this kit in [`CONTRIBUTING.md`](CONTRIBUTING.md) § Releasing. If you vendor the kit, read this file before and after `seed.mjs --update`.

## [Unreleased]

## [1.4.0] - 2026-11-28

Security depth: threat modeling, CI workflow hardening, incident response and vet-before-install for outside agent skills, with a structure gate that enforces the mechanical parts on the kit's own workflows and text. Plus the Kotlin 2.4 pack. Seeded repositories that were green stay green.

### Added

- `technologies/kotlin/` — Kotlin 2.4 pack (K2-only compiler; 2.4 Stable features, deprecations and removals from the 2.4 compatibility guide; Gradle/AGP support range) from [kotlinlang.org/docs](https://kotlinlang.org/docs/home.html).
- `07-judgment/threat-modeling.md` — four questions per changed trust boundary, STRIDE only where plausible, one abuse-case test per kept threat, depth by risk; wired into the FEATURE_SDLC threat-modeling module.
- `07-judgment/ci-hardening.md` — GitHub Actions threat model: trigger trust matrix, `${{ }}` script injection and the `env:` fix, least-privilege `permissions:`, lockfile or SHA pins, `persist-credentials`, secrets, OIDC, checksum-verified tool downloads, self-hosted runners, severity scale; checked against GitHub's current secure-use reference.
- `07-judgment/incident-response.md` — mitigate first, evidence timeline, postmortem triggers, blameless fishbone → 5 whys, typed Detect / Mitigate / Prevent actions, postmortem skeleton for implementation repositories.
- `07-judgment/agent-skills.md` § Vetting before you install — hidden directives, invisible or bidi text, excessive agency, tool shadowing, silent exfiltration, unpinned fetches, encoded payloads (OWASP LLM Top 10 mapping).
- `08-IMPLEMENTATION-DAY.md` gate 12 (security boundary: threat model + workflow edits); one-line lessons in `06-LESSONS.md`; three prompts in `05-PROMPTS.md`; router rows and an adopt/forbid row for community agent collections in `07-judgment/README.md` and `templates/docs/JUDGMENT.md`.
- `scripts/check-structure.mjs` — every kit and template workflow that defines jobs declares a top-level `permissions:`, never uses `pull_request_target`, and never interpolates an attacker-controllable context (issue/PR/comment/review text, `head_ref`, commit messages) inside a `run:` or `script:` body (dot or `['index']` access, comment lines included); kit text files (`.md`, `.mdc`, scripts, YAML, JSON, …) contain none of U+200B–U+200F, U+061C, U+2060, U+FEFF, U+202A–U+202E, U+2066–U+2069. Both checks are self-tested.

### Changed

- Kit CI and the backend/frontend workflow skeletons check out with `persist-credentials: false` (none of those jobs push). Implementation repositories that copied the skeletons can add the same two lines.
- `09-CI-CD.md` principle 5 names GitHub's workflow-dependency lockfile as the stronger option where adopted, and links the hardening checklist.
- `templates/docs/DEPLOYMENT.md` § Rollback and Recovery links the incident-response guide.

### Migration (vendored copies)

1. From a fresh clone of the v1.4.0 release: `node scripts/seed.mjs --update <your-planning-repo>`.
2. No product-file edits are required for green CI. Optional: add `persist-credentials: false` to the checkout step of implementation workflows that never push, and run the `ci-hardening.md` checklist over your own `.github/workflows/`.

## [1.3.0] - 2026-11-28

On-demand craft libraries and English-only kit docs: architecture patterns, system design, human-language locale packs, TypeScript 7.0, API-client templates, and public discoverability. Seeded repositories that were green stay green.

### Added

- `technologies/typescript/` — TypeScript 7.0 pack (Handbook + TSConfig + 6.0/7.0 defaults; side-by-side TS 6 for API tools) from [typescriptlang.org/docs](https://www.typescriptlang.org/docs/).
- `languages/` — on-demand locale craft library (Arabic, English, German, French, Spanish) with `07-judgment/languages.md` selector (SF-23); English-only instruction prose.
- `scripts/check-structure.mjs` — language-pack gate (six files, Sources dates, index ↔ folders, no Arabic script in pack README).
- `system-design/` — on-demand large-scale system design library (24 packs; primer topic–inspired; original English prose) with `07-judgment/system-design.md` selector (SF-22).
- `scripts/check-structure.mjs` — system-design pack gate (six files, Sources Checked dates, index ↔ folders).
- `architecture-patterns/` — on-demand cloud/distributed architecture library (44 packs; Azure Architecture Center catalog–inspired; original prose) with `07-judgment/architecture-patterns.md` selector (SF-20).
- `scripts/check-structure.mjs` — architecture-pattern pack gate (six files, Sources Checked dates, index ↔ folders) parallel to design-patterns.
- **SF-21 English-only kit documentation:** remove non-English SEO aliases; README / `llms.txt` / standing state that all factory instructions stay English (including future language/i18n craft folders).
- Public kit discoverability (SF-19): README direct answer + English aliases (software-factory / software-factory-all-in-one), who-for table, FAQ for search/AI prompts; optional root [`llms.txt`](llms.txt) (explicitly not a Google Search requirement). Judgment cross-link in [`07-judgment/seo-geo.md`](07-judgment/seo-geo.md).
- Always-current API clients: OpenAPI 3.1 as machine hub ([openapis.org](https://www.openapis.org/) / [Swagger](https://swagger.io/)), regenerate from day one, CI drift + optional framework route parity, day gate in `08-IMPLEMENTATION-DAY.md` (SF-17).
- Judgment + templates for HTTP API client packs: Postman Collection v2.1, Insomnia export, and Apidog-via-OpenAPI under `templates/docs/api-clients/`, with guide [`07-judgment/api-clients.md`](07-judgment/api-clients.md) (SF-17). One inventory → many clients; contract stays SoT.

### Changed

- `languages/arabic/` — deeper Arabic text craft: display-vs-index normalization (alef/yeh/teh-marbuta, tatweel, tashkeel), digits policy, no Latin transliteration in product storage, when to use a verified Arabic NLP package; judgment selector rows updated. Distilled from CAMeL Lab / CAMeL Tools concepts (not vendored).

### Migration (vendored copies)

1. From a fresh clone of the v1.3.0 release: `node scripts/seed.mjs --update <your-planning-repo>`.
2. No product-file edits are required for green CI. Open new on-demand libraries only through their judgment selectors (`architecture-patterns`, `system-design`, `languages`) when a change earns them.
3. If the product uses TypeScript, open `technologies/typescript/` and keep the product `typescript` pin under SRS/ADR (do not silent-bump).
## [1.2.0] - 2026-11-27

Supply-chain pinning is now enforced: every action in the kit's CI and in the workflow templates is pinned to a commit SHA (container actions to an image digest), and the structure gate fails on any that is not. Seeded repositories that were green stay green.

### Added

- `scripts/check-structure.mjs` fails when a workflow under `.github/workflows/` or `templates/**/github-actions/` uses an action that is not pinned to a full commit SHA with a version comment (commented-out steps included); container actions (`docker://`) must pin an image digest (`@sha256:…`); only local `./` actions are exempt.

### Fixed

- The implementation workflow skeletons (`templates/implementation/github-actions/backend-ci.yml`, `frontend-ci.yml`) used `@v4` / `@v2` tags although their README and the kit CI require SHA pins. They now pin the releases verified on 2026-11-27: `actions/checkout` v7.0.1, `actions/setup-node` v7.1.0, `actions/upload-artifact` v7.0.2, `shivammathur/setup-php` 2.40.0. Implementation repositories that copied the old skeletons: pin your own workflows the same way; the new majors need a current runner (fine on GitHub-hosted runners; update self-hosted ones first).
- The pin check reads `uses:` only where it is a key: text inside a block scalar (a `run: |` script or heredoc) is ignored, quoted keys (`"uses":`) and quoted values are understood.

## [1.1.1] - 2026-11-27

Review rules are consistent: an AI pull request reviewer is optional, and every review slot still needs a reviewer other than the builder. Seeded repositories that were green stay green; the entry below ends with a manual wording update for existing repositories.

### Changed

- An AI pull request reviewer is optional everywhere, as 1.0.0 decided: the closeout order, review checklists, lessons and seat tables in `01`, `04`, `05`, `06`, `08`, `09`, seven judgment guides (`human-code-review`, `verification-engineering`, `agent-skills`, `studio-company`, `software-factory`, `delegation`, `api-readiness`), the atlas and the `OWNER_STANDING` / `STUDIO_ORG` templates say "AI PR reviewer if used" instead of making CodeRabbit a fixed step. CodeRabbit stays the worked example and its templates are unchanged. Wherever a review slot named CodeRabbit, it now requires a reviewer other than the builder (a human, a separate agent session or an AI PR reviewer), so CI alone never counts as independent review (SF-12). Every existing repository, including those that use CodeRabbit (its Free plan may post no GitHub review, so the old "CI + CodeRabbit" wording can leave CI alone), should edit the closeout and "independent review" lines of their `docs/OWNER_STANDING.md` and the reviewer rows of `docs/STUDIO_ORG.md` by hand to match the templates, because `seed.mjs --update` never touches product files.

## [1.1.0] - 2026-11-27

The structure gate now computes the facts that had drifted by hand (the decision range, the atlas breadth rollups, every gate list), and generic text no longer carries one product's choices. Seeded repositories that were green stay green.

### Added

- `templates/AGENTS.template.md` § Git Safety: never paste or write back a tool's compressed or elided view of a file, and check the staged line counts for deletions you did not intend. The kit's own `AGENTS.md` already had this rule; seeded repositories now get it too. Existing repositories: add the bullet to your `AGENTS.md`, because `seed.mjs --update` never overwrites it.
- `scripts/check-structure.mjs` checks every range that describes the whole decision log (it starts at `SF-01`; separators `…`, `...`, `..`, `–`, `—`, `-`, `to`, `through`) against the newest decision in `DECISIONS.md`. Sub-ranges such as `SF-03 to SF-05` are not checked; released `CHANGELOG.md` entries keep the range they shipped with.
- `scripts/check-structure.mjs` also requires the pull request template to name every gate.
- `scripts/check-structure.mjs` recomputes the equal-weight breadth rollups in `coverage/07-software-surfaces.md` and `coverage/08-ai-agents.md` from their rows (a scorecard % that is not a bold whole number fails, and the surfaces file must state how many rows it scores) and checks each copy it lists: the rollup line in that file, two lines in `coverage/README.md` and the surfaces figure in `README.md`. Other atlas text points at the rollup instead of repeating the number.

### Changed

- Forever generic: method docs (`01`, `03`, `05`, `08`) say "every interface language" (and "every text direction in scope") instead of assuming two, and the prompts no longer fix the reply language or name a preferred harness; technology packs (Alpine.js, Livewire, the PHP compositions map) no longer state one product's frontend as fact; `07-judgment/dsa-performance.md` no longer points at a person's study set; a non-English example was removed from `technologies/README.md`. No version facts changed, so no pack's Checked dates moved.
- The language switch (and the UI guard rule for it) is required only when a product has more than one interface language: `03-PROTOTYPE.md`, and the templates `requirements.md`, `docs/SRS.md` NFR-04, `cursor-rules/project-ui-design.mdc`, the Copilot `project-ui` instructions and the PR template (`AGENTS.template.md` already said so). Existing repositories with several languages need no change.

### Fixed

- `README.md` named the decision log `SF-01 … SF-15` after `SF-16` was added.
- The pull request template listed four of the five gates (no `check-seed.mjs`) and made two of them conditional; it now lists all five, as `CONTRIBUTING.md` requires.
- Atlas arithmetic: industry-surface breadth is ~25% (the 21 rows average 25.4; the scorecard said ~27% while the same file said ~25%) and AI-agent harness breadth is ~53% (the 16 rows average 53.3; it said ~58%). No row was re-scored.
- Small corrections: `09-CI-CD.md` "Two layers" heads a three-layer table; `06-LESSONS.md`, `05-PROMPTS.md`, `03-PROTOTYPE.md` and `01-STEPS.md` named `PROTOTYPE.md`, `PROMPTS.md` and `STEPS.md` without their numbers (now `03-`, `05-`, `01-`); a typo in `08-IMPLEMENTATION-DAY.md`; a stray character at the end of `coverage/07-software-surfaces.md`; two gate scripts still called the kit "the playbook" in their comments; `technologies/php-laravel-compositions.md` listed the Next.js pack as a gap although it exists.

### Known limitations (still open from 1.0.0)

- Product entry files (`templates/AGENTS.template.md`, `templates/docs/AGENT_START.md`, `llms.txt`) do not yet point agents at the task routes in `ARCHITECTURE.md` § 1.
- Hub documents (`08`, `04`, `01`) link guides directly as well as through the judgment router.
- There is no written bug-fix procedure yet, and a few script names in `03-PROTOTYPE.md` refer to files a product creates itself.

### Migration (vendored copies)

1. From a fresh clone of the v1.1.0 release: `node scripts/seed.mjs --update <your-planning-repo>`.
2. Add the elided-view bullet to your `AGENTS.md` § Git Safety by hand (`seed.mjs --update` never touches product files).
3. Only if your product has a single interface language: take the conditional language-switch wording into your `requirements.md`, `docs/SRS.md` (NFR-04), `.cursor/rules/project-ui-design.mdc`, `.github/instructions/project-ui.instructions.md` and `.github/pull_request_template.md` from the matching files under `software-factory-all-in-one/templates/`.

## [1.0.0] - 2026-11-26

First stable release: the structure, paths, template mapping and gates below are what MINOR and PATCH releases keep working for vendored copies.

### Added

- `scripts/seed.mjs` — seed a planning repository from a clone, `--in-place` after "Use this template", or `--update` a vendored copy; never overwrites existing files.
- `scripts/check-seed.mjs` — smoke test: fresh, activated, in-place and updated seeds pass their own gates.
- `scripts/check-content-integrity.mjs` — no tool artifacts written back, tables GitHub can render, links and anchors that resolve (`--product`, `--artifacts-only`).
- `scripts/check-structure.mjs` — renamed from `check-playbook-freshness.mjs` (the old name remains as a deprecated alias until 2.0.0); adds router ↔ guides, computed README facts, cited-decision and `KIT_TOP` checks.
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

### Deprecated

- `scripts/check-playbook-freshness.mjs` — use `scripts/check-structure.mjs`; the old name is removed in 2.0.0.

### Known limitations (planned for 1.1.0)

- Product entry files (`templates/AGENTS.template.md`, `templates/docs/AGENT_START.md`, `llms.txt`) do not yet point agents at the task routes in `ARCHITECTURE.md` § 1.
- Hub documents (`08`, `04`, `01`) link guides directly as well as through the judgment router.
- There is no written bug-fix procedure yet, and a few script names in `03-PROTOTYPE.md` refer to files a product creates itself.

### Migration (vendored copies)

1. From a fresh clone of the kit: `node scripts/seed.mjs --update <your-planning-repo>`.
2. In your CI, call `software-factory-all-in-one/scripts/check-structure.mjs` (the old `check-playbook-freshness.mjs` name keeps working until 2.0.0).
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

[Unreleased]: https://github.com/Galhoom22/software-factory-all-in-one/compare/v1.4.0...HEAD
[1.4.0]: https://github.com/Galhoom22/software-factory-all-in-one/releases/tag/v1.4.0
[1.3.0]: https://github.com/Galhoom22/software-factory-all-in-one/releases/tag/v1.3.0
[1.2.0]: https://github.com/Galhoom22/software-factory-all-in-one/releases/tag/v1.2.0
[1.1.1]: https://github.com/Galhoom22/software-factory-all-in-one/releases/tag/v1.1.1
[1.1.0]: https://github.com/Galhoom22/software-factory-all-in-one/releases/tag/v1.1.0
[1.0.0]: https://github.com/Galhoom22/software-factory-all-in-one/releases/tag/v1.0.0
