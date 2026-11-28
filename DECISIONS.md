# Decisions — Software Factory All-in-One

Why the kit is shaped the way it is. Lightweight ADRs in the same format the kit asks products to use ([`templates/docs/DECISIONS.md`](templates/docs/DECISIONS.md)). Cite them as `SF-NN`; the structure gate fails on any cited ID that is not defined here. Never edit an accepted decision — add a new one that supersedes it.

Product repositories keep their own log (`docs/DECISIONS.md`, IDs `D-NN`); kit decisions never use that prefix.

## Index

| ID | Decision | Status |
|----|----------|--------|
| SF-01 | Planning lives in its own repository; implementation repositories are separate | Accepted |
| SF-02 | No MVP delivery mode — one actor at a time, to production quality | Accepted |
| SF-03 | One rulebook: `AGENTS.md`; harness files are thin pointers | Accepted |
| SF-04 | Outside methods are absorbed as judgment, never as a second constitution | Accepted |
| SF-05 | Stack follows the product's requirements; technology packs stay current | Accepted |
| SF-06 | Framework-native first; packages only when they earn their cost | Accepted |
| SF-07 | Candor: refuse what lowers professionalism or breaks law, ethics or risk limits | Accepted |
| SF-08 | Proportional rigor: the always-on core stays, depth scales with risk | Accepted |
| SF-09 | Truth lives in files, not chat: context hygiene and file-anchored teaching | Accepted |
| SF-10 | Specialist concerns are judgment gates that plug into the day pipeline | Accepted |
| SF-11 | Excellence ratchet with an honest coverage atlas | Accepted |
| SF-12 | Studio seats and a software-factory line with independent review | Accepted |
| SF-13 | Competitor recon is clean-room | Accepted |
| SF-14 | Forever generic, public, contributions upstream; vendored copies are read-only | Accepted |
| SF-15 | Gates are zero-dependency, check-only and probe-tested | Accepted |
| SF-16 | Releases follow SemVer from a vendored copy's point of view; tags never move | Accepted |

## Decisions

### SF-01 Planning lives in its own repository

- **Status:** Accepted
- **Context:** Mixing plans, prototypes and production code in one repository blurs what is decided versus built.
- **Decision:** A product's planning repository holds requirements, specs, contracts, standards and a mock-only prototype; frontend, backend and other implementation code live in their own repositories ([`00-USAGE.md`](00-USAGE.md)).
- **Consequences:** ✅ Clear source of truth for requirements. ❌ Two or more repositories to keep in step (the API contract is the only shared interface).

### SF-02 No MVP delivery mode

- **Status:** Accepted
- **Context:** "MVP first" became a standing excuse to ship stubbed screens and weakened rules.
- **Decision:** Work one actor at a time; design, prototype and implement that actor to production quality, then move to the next. Deferring other actors is sequencing, not permission to half-finish ([`02-DELIVERY.md`](02-DELIVERY.md)). Product CI enforces it with `scripts/check-delivery.mjs`.
- **Consequences:** ✅ Nothing ships half-done. ❌ The first actor takes longer to reach users.

### SF-03 One rulebook

- **Status:** Accepted
- **Context:** Every agent harness wants its own instruction file; parallel rulebooks drift and contradict.
- **Decision:** The product's `AGENTS.md` (with `docs/AGENT_START.md`) is the only full rulebook. `CLAUDE.md`, `GEMINI.md`, Copilot, Windsurf, Cursor and Codex files are thin pointers to it; product CI checks them (`scripts/check-agents.mjs`). Harness packs in [`agents/`](agents/README.md) teach how to drive a harness, never new rules.
- **Consequences:** ✅ One place to change a rule. ❌ Harness-specific tricks must be written as craft, not policy.

### SF-04 Outside methods are absorbed as judgment

- **Status:** Accepted
- **Context:** Courses, agent kits and design-skill packs each arrive with their own "constitution".
- **Decision:** Map useful ideas onto existing documents and record what was adopted and forbidden in a short judgment guide ([`07-judgment/README.md`](07-judgment/README.md)); never install a second source of truth.
- **Consequences:** ✅ The kit stays coherent as it grows. ❌ Absorbing a method takes editorial work.

### SF-05 Stack follows the product; packs stay current

- **Status:** Accepted
- **Context:** Agents default to fashionable stacks and to stale API knowledge from training data.
- **Decision:** There is no universal stack: advise from each product's requirements and pin the choice in its DECISIONS and SRS ([`07-judgment/stack-selection.md`](07-judgment/stack-selection.md)). [`technologies/`](technologies/README.md) packs teach craft after the pin; before non-trivial code agents re-check official docs or Context7 for the pinned line ([`07-judgment/context7-docs.md`](07-judgment/context7-docs.md)), and when the owner names a stack the matching pack is refreshed the same session. A pack never upgrades a product's pin silently.
- **Consequences:** ✅ Modern, verified craft. ❌ Packs need regular re-verification ([`07-judgment/playbook-freshness.md`](07-judgment/playbook-freshness.md)).

### SF-06 Framework-native first; packages when they earn it

- **Status:** Accepted
- **Context:** Reinventing non-trivial capabilities is costly; adding a dependency for a few lines is worse.
- **Decision:** Prefer what the platform or framework already provides, then a verified package for non-trivial work, never a package for a trivial helper ([`07-judgment/packages.md`](07-judgment/packages.md)).
- **Consequences:** ✅ Less custom code, fewer surprises. ❌ Every package choice needs a short verification.

### SF-07 Candor

- **Status:** Accepted
- **Context:** Agents tend to comply with any request, including ones that weaken security, compliance or professionalism.
- **Decision:** When a request would lower professionalism, weaken a working workflow, break law or ethics, or create unmanaged High risk, say no, explain why and offer a safer alternative or a skip ([`07-judgment/compliance-ethics-risk.md`](07-judgment/compliance-ethics-risk.md)).
- **Consequences:** ✅ Rails hold under pressure. ❌ Some requests take an extra round of discussion.

### SF-08 Proportional rigor

- **Status:** Accepted
- **Context:** Full ceremony on a small internal tool wastes time; light process on a payments flow is dangerous.
- **Decision:** The day pipeline keeps an always-on core (scope, evidence, security, closeout) and scales the other gates with product size and risk ([`08-IMPLEMENTATION-DAY.md`](08-IMPLEMENTATION-DAY.md) § Proportional day pipeline).
- **Consequences:** ✅ Rigor where it matters. ❌ Agents must state which depth applies and why.

### SF-09 Truth lives in files, not chat

- **Status:** Accepted
- **Context:** Long sessions lose decisions to context limits; chat memory is not evidence.
- **Decision:** Keep decisions, progress and handoffs in repository files with memory pointers; start fresh chats from a written handoff; teach by pointing at paths, structure and connections ([`07-judgment/context-window.md`](07-judgment/context-window.md)).
- **Consequences:** ✅ Work survives context resets. ❌ Writing handoffs takes discipline.

### SF-10 Specialist concerns are judgment gates

- **Status:** Accepted
- **Context:** API readiness, API design, verification, code review, integrations, AI paths, delegation, booking, payments, SEO and cross-surface compatibility each need specialist depth — but only when they apply.
- **Decision:** Each lives in one judgment guide with an explicit trigger and plugs into a named slot of the day pipeline or feature SDLC. Agents open a guide only when its trigger applies ([`07-judgment/README.md`](07-judgment/README.md)). Testing stays risk-matched and split by owner.
- **Consequences:** ✅ Depth on demand without bloating every task. ❌ Triggers must be kept accurate.

### SF-11 Excellence ratchet and honest atlas

- **Status:** Accepted
- **Context:** A growing kit tends towards duplicate homes, vanity numbers and stale claims.
- **Decision:** Every change to the kit must raise at least one excellence dimension without lowering another ([`EXCELLENCE.md`](EXCELLENCE.md)), consult the coverage atlas first, deepen an existing home rather than add a parallel one, and update the atlas in the same change ([`coverage/README.md`](coverage/README.md)). Percentages are self-assessment, owned only by the atlas.
- **Consequences:** ✅ Growth without sprawl. ❌ Every change carries a small bookkeeping cost.

### SF-12 Studio seats and the factory line

- **Status:** Accepted
- **Context:** Several humans and agents working at once need clear ownership and an independent check.
- **Decision:** Model the team as seats with one owner each and atomic checkout; move work through intake → triage → plan → build → independent review → done with evidence; a builder never approves its own work ([`07-judgment/studio-company.md`](07-judgment/studio-company.md), [`07-judgment/software-factory.md`](07-judgment/software-factory.md)).
- **Consequences:** ✅ No silent self-approval. ❌ Small teams must still name a reviewer.

### SF-13 Clean-room competitor recon

- **Status:** Accepted
- **Context:** Matching competitors invites copying their assets, text or reviews.
- **Decision:** Recon produces an evidence-linked screen/flow/feature matrix and must-have parity list; never copy assets, text or reviews ([`07-judgment/competitor-recon.md`](07-judgment/competitor-recon.md)).
- **Consequences:** ✅ Parity without infringement. ❌ Recon takes longer than cloning.

### SF-14 Forever generic, public, contributions upstream

- **Status:** Accepted
- **Context:** The kit is public and reused by any team; product details, people, tracker keys or private URLs would leak, and product-shaped defaults would mislead other teams.
- **Decision:** The kit is generic at three layers: identifiers (CI gate `scripts/check-forever-generic.mjs`), defaults (placeholders such as `{{UI_LANGUAGES}}`, never one product's choices) and history (no private names in commits). A vendored copy inside a product repository is read-only; improvements go upstream as a pull request ([`CONTRIBUTING.md`](CONTRIBUTING.md)).
- **Consequences:** ✅ Safe to use as a public template. ❌ Product-specific lessons need rewriting before they can land here.

### SF-15 Gates are zero-dependency, check-only and probe-tested

- **Status:** Accepted
- **Context:** Tool output written back into files once replaced real content with elision markers; numbers drifted; templates broke only after instantiation.
- **Decision:** Kit gates are plain Node scripts without dependencies that never rewrite files and carry self-tests (probes): content integrity, structure (facts computed from the tree), forever-generic, requirements activation and the seed smoke test ([`ARCHITECTURE.md`](ARCHITECTURE.md) § Gates).
- **Consequences:** ✅ Regressions fail CI before they merge. ❌ New conventions need a matching check.

### SF-16 Releases and immutable tags

- **Status:** Accepted
- **Context:** Products vendor the kit and need a stable version to pin, read and upgrade from; `main` can carry unreleased changes.
- **Decision:** Releases are GitHub releases tagged `vX.Y.Z`, with notes taken from `CHANGELOG.md`. MAJOR when a seeded repository that was green can turn red or a referenced path moves; MINOR for additions that keep seeded repositories green; PATCH for fixes. Tags are never moved or deleted ([`CONTRIBUTING.md`](CONTRIBUTING.md) § Releasing).
- **Consequences:** ✅ Products pin a release and upgrade deliberately with `seed.mjs --update` from a release checkout. ❌ Removing a deprecated path waits for the next MAJOR.

### SF-17 API client import packs derived from the contract

- **Status:** Accepted
- **Context:** Teams need Postman, Insomnia, or Apidog to verify APIs by hand, but three hand-edited collections drift from the contract and can hide secrets.
- **Decision:** Ship `docs/api-clients/` with one inventory → **OpenAPI 3.1 hub** (JSON+YAML) derived from `API_CONTRACT`, then generate Postman v2.1, Insomnia export, and Apidog-ready OpenAPI. Bootstrap on the **first** API Story; regenerate in the **same** change as every route edit; CI drift + route-parity gate so packs stay always-current mid-build (not only at ship). Judgment: [`07-judgment/api-clients.md`](07-judgment/api-clients.md); templates: [`templates/docs/api-clients/`](templates/docs/api-clients/README.md). Collections complement Feature tests; they never replace them or become a second SoT.
- **Consequences:** ✅ One-click human verify. ✅ Same regenerate path for every tool. ❌ Inventory must stay matched to the contract on every API change.

### SF-18 On-demand GoF design-pattern library

- **Date:** 2026-11-28
- **Status:** Accepted
- **Context:** The judgment guide told agents not to dump a pattern encyclopedia into the repo, which left no shared, forever-generic reference when a consequential abstraction needed a named shape — and made “no pattern” harder to argue with evidence.
- **Decision:** Ship `design-patterns/` as an **on-demand** library (one folder per classic GoF pattern in the 22-pattern catalog). Agents open it **only** through [`07-judgment/design-patterns.md`](07-judgment/design-patterns.md) (selector first, then 1–3 candidate folders). Pattern-for-show stays forbidden; the no-pattern baseline is mandatory in every Pattern Decision Record. The library is never pasted into products.
- **Consequences:** ✅ Shared language and refuse-with-evidence. ❌ Maintain 22 packs + structure gate; risk of agents opening the whole tree if the selector is skipped.
- **Related:** SF-14, SF-15, [`design-patterns/README.md`](design-patterns/README.md), [`07-judgment/design-patterns.md`](07-judgment/design-patterns.md).

### SF-19 Public kit discoverability (SEO + GEO craft on the OSS home)

- **Date:** 2026-11-28
- **Status:** Accepted
- **Context:** The public GitHub home must be findable for queries like software-factory, software-factory-all-in-one, and مصنع برمجيات, and citeable by AI answer surfaces — without keyword spam, fake authority, or treating `llms.txt` as a Google Search requirement.
- **Decision:** Maintain the kit README with a direct answer, honest aliases, who-for/not-for, and FAQ; ship optional root [`llms.txt`](llms.txt) for systems that read it; keep GitHub description/topics aligned; follow [`07-judgment/seo-geo.md`](07-judgment/seo-geo.md) and Google Search Central (SEO starter + AI optimization guides). Ranking and citation counts are not Done gates.
- **Consequences:** ✅ Clear identity for search and AI grounding. ❌ Maintain FAQ/aliases when the kit name or spine changes.
- **Related:** SF-10, [`README.md`](README.md), [`llms.txt`](llms.txt), [`07-judgment/seo-geo.md`](07-judgment/seo-geo.md).

### SF-20 On-demand software architecture patterns library

- **Date:** 2026-11-28
- **Status:** Accepted
- **Context:** GoF `design-patterns/` covers in-process shapes. Distributed/cloud topology still had no forever-generic, selector-gated reference — agents either invented ad-hoc names or cargo-culted vendor samples.
- **Decision:** Ship `architecture-patterns/` as an **on-demand** library (one folder per Azure Architecture Center cloud design pattern in the current catalog). Agents open it **only** through [`07-judgment/architecture-patterns.md`](07-judgment/architecture-patterns.md) (selector first, then 1–3 candidate folders). **Chosen: none (baseline)** remains mandatory. Prose is original and cloud-agnostic; Microsoft Learn is the catalog source of truth for names/slugs, not copy-paste content. The library is never pasted into products.
- **Consequences:** ✅ Shared distributed vocabulary and refuse-with-evidence. ❌ Maintain ~44 packs + structure gate; risk of opening the whole tree if the selector is skipped.
- **Related:** SF-18, SF-15, [`architecture-patterns/README.md`](architecture-patterns/README.md), [`07-judgment/architecture-patterns.md`](07-judgment/architecture-patterns.md).

