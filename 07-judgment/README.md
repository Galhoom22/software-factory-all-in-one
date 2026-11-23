# 07 — Judgment only (absorb outside methods)

When a useful external method appears (Spec Kit, enterprise design courses, engineering-agent kits, design-skill packs), **do not** install it as a second source of truth inside the planning repository.

## Rule

1. **Map** the useful ideas onto documents you already keep (`requirements.md`, BRD/PRD/SRS, `docs/API_CONTRACT.md`, ADRs / `DECISIONS.md`, actor UI packs, CI).
2. **Write** a short judgment note (this folder or `docs/JUDGMENT.md` in the product repo) that names what was adopted and what is forbidden.
3. **Converge** at the end of a slice: fix drift in the canonical file; do not add a parallel `specs/` or `constitution.md` tree.
4. Upstream material stays **human reading only** unless the owner explicitly names that tool as the process for a **new implementation** repository.

## Adopt vs forbid (default)

| Adopt | Forbid |
|-------|--------|
| Explore cheaply before expensive build | Vendoring a full course or agent kit as AGENTS |
| Clarify only load-bearing unknowns in one batch | `specify init` / second constitution in planning |
| Verify before claiming done (observation > hope) | Design-system generators that override `DESIGN.md` |
| Six boundary questions on consequential writes | Microservices / cloud labs that fight the chosen architecture |
| Converge checklist after a docs/UI pass | Installing competing UI “taste” packs as always-on authority |
| AI production patterns (injection architecture, golden-set eval, pin models, RAG triad) | Dumping interview banks / price tables / LangChain trees into the repo |
| SAD/ADR craft (options, consequences, optional impacts, C4 progressive views) | Standalone SAD that duplicates BRD/PRD/SRS; microservices examples forced onto a modular monolith |
| Agent lifecycle skills (assumptions, vertical slices, five-axis review, threat boundaries) | Vendoring a full skills pack as AGENTS / always-on override of product rules |
| Payment-provider agent guidance (hosted checkout, webhook entitlement, sandboxes, modern Intent APIs) | Dumping full Connect/Issuing/Tax catalogs or making agentic commerce required scope |
| Playwright E2E (user-facing locators, web-first asserts, mocked PR CI, axe, traces on retry) | Exhaustive E2E of every screen on every PR; live backend required for CI; trace-on-every-test |
| GoF-style design patterns (problem → naive → blueprint; composition; shared language) | Pattern encyclopedia in-repo; Factory/Observer on three-line fixes; Singleton as default global |
| DSA / Big-O / algorithmic performance (Pareto study habits) | Day + FEATURE Performance module: name `n`, Time/Space class, structure, edges | Dumping LeetCode catalogs/solutions into product repos; interview grind as merge gate |
| API readiness across environments (contract + local + CI + staging/prod smoke) | Day API gate + BACKEND TESTING + DEPLOYMENT smoke | Second OpenAPI/Postman SoT; Done on local-only green; live prod checks with real PII |
| API design (consumer-first REST craft) | Design bar inside API readiness; resource naming; method semantics; docs=agreement | Course PDF as AGENTS; mandatory HATEOAS; Digest auth; dual OpenAPI SoT |
| Requirements-driven stack selection (advise → specify → ADR) | Options + recommendation from **this** product’s requirements; pin in SRS + DECISIONS; architecture/patterns follow | One-size-fits-all stack; locking TALL/MERN/Next by fashion; packs that replace product constitution |
| Owner names a stack → pack freshness | Search official/Context7; update `technologies/<slug>/` if stale (same session) | Waiting for “update the pack”; advising from memory while the pack drifts |
| Packages over reinvention (when earned) | Prefer a verified package for non-trivial work; skip packages for trivial helpers | DIY complexity by habit; dependency for every micro-task |
| SEO + GEO (public pages) | Dual technical + citeable craft on indexable marketing/legal; Google foundations over vendor hacks | Ranking/citation vanity as Done; fake authority; AI-only markup theater |
| Compliance / ethics / risk | Laws + IEEE ethics + identify/assess/treat/monitor; refuse unlawful or unethical asks with safer alternative | Checklist theater; fake certifications; silent High-risk acceptance |
| Booking / reservations | Holds, recheck-before-commit, idempotency, inventory, cancel snapshots; AI/MCP sandbox | Confirm from search cache; skip recheck; double-book on retry |
| Context window hygiene | Memory pointers, truth outside chat, fresh-chat handoff, mid-day checkpoint ≠ owner “go” | Paste-bomb logs/dumps; polluted chat as SoT; slice-approval theater |
| Studio as a company | Org seats, goal ancestry, atomic checkout, board approvals; optional Paperclip CLI | Vendor Paperclip as AGENTS; 20 unsupervised agent tabs; dual checkout |
| Competitor recon / clean-room parity | Screen/flow/feature matrix; evidence-linked gaps; must-have parity; brand sweep | Clone pack as AGENTS; copy peer assets; invent reviews; vibe “parity” |
| Cross-surface compatibility (FE↔BE↔services) | Day gate + `SIBLING.md`; read sibling, write only owned seat; contract-first | Edit sibling seat; Done without consumer parity; ship breaking shapes silently |
| Software Factory + multi-agent line | Intake→triage→plan→build→independent review→Done; seats + convergence owner | Vendor Mastra/Warp as AGENTS; builder self-approve; dual checkout |

Product templates: [`templates/docs/JUDGMENT.md`](../templates/docs/JUDGMENT.md).

AI system design judgment: [`ai-system-design.md`](ai-system-design.md).

SAD / ADR judgment: [`sad-adr.md`](sad-adr.md).

Agent engineering skills judgment: [`agent-skills.md`](agent-skills.md).

Payments / billing judgment: [`payments.md`](payments.md).
Booking / reservations: [`booking.md`](booking.md).

Playwright E2E judgment: [`playwright-e2e.md`](playwright-e2e.md).

Design patterns judgment: [`design-patterns.md`](design-patterns.md).

DSA / algorithmic performance judgment: [`dsa-performance.md`](dsa-performance.md).

API readiness across environments: [`api-readiness.md`](api-readiness.md).

API design (consumer-first): [`api-design.md`](api-design.md).

Requirements-driven stack selection: [`stack-selection.md`](stack-selection.md).

Packages over reinvention: [`packages.md`](packages.md).
SEO + GEO: [`seo-geo.md`](seo-geo.md).
Compliance / ethics / risk: [`compliance-ethics-risk.md`](compliance-ethics-risk.md).
Context window hygiene: [`context-window.md`](context-window.md).
Studio as a company: [`studio-company.md`](studio-company.md).
Competitor recon / clean-room: [`competitor-recon.md`](competitor-recon.md).
Software Factory + multi-agent line: [`software-factory.md`](software-factory.md).

Cross-surface compatibility: [`cross-surface-compatibility.md`](cross-surface-compatibility.md).

Prototype craft checklists distilled from external skills (checklist only): `project-ui/PRE-DELIVERY-UX.md`, `project-ui/ANTI-SLOP.md`.

