# 07 — Judgment only (absorb outside methods)

When a useful external method appears (Spec Kit, enterprise design courses, engineering-agent kits, design-skill packs), **do not** install it as a second source of truth inside the planning repository.

## Router — open a guide only when its trigger applies

This table is the only list of judgment guides. Hub documents link the slot, not every guide. **Always on** guides apply to every change; open the others only when their trigger is true.

| Open when … | Guide | Plugs into |
|-------------|-------|------------|
| **Always on** — any change you are about to call done | [`verification-engineering.md`](verification-engineering.md) | 08 closeout · 04 § Verification |
| **Always on** — long sessions, large outputs, handoffs, a fresh chat | [`context-window.md`](context-window.md) | 08 context hygiene |
| **Always on** — an ask that could lower professionalism, break law or ethics, or add unmanaged High risk | [`compliance-ethics-risk.md`](compliance-ethics-risk.md) | Candor · product COMPLIANCE |
| Code was written or changed | [`human-code-review.md`](human-code-review.md) | 08 review |
| Non-trivial library or framework API on the pinned stack | [`context7-docs.md`](context7-docs.md) | 08 build · technology packs |
| Choosing or changing a stack | [`stack-selection.md`](stack-selection.md) | 00-USAGE step 3 · 01-STEPS |
| Studying competitors or claiming parity | [`competitor-recon.md`](competitor-recon.md) | 01-STEPS Phase 0 |
| Writing architecture docs or a lasting decision | [`sad-adr.md`](sad-adr.md) | Product DECISIONS · SRS |
| Planning an AI feature (RAG, agents, evals) | [`ai-system-design.md`](ai-system-design.md) | Product docs/AI.md · SRS |
| Setting up team seats, goals or task checkout | [`studio-company.md`](studio-company.md) | Product STUDIO_ORG · 08 seats |
| Moving work through intake → review → done with several agents | [`software-factory.md`](software-factory.md) | 08 pipeline · STUDIO_ORG |
| Absorbing an outside agent-skills pack or workflow | [`agent-skills.md`](agent-skills.md) | The rule below |
| Designing or changing an HTTP API | [`api-design.md`](api-design.md) | API_CONTRACT · 08 API gate |
| An API must work in CI, staging and production, not only locally | [`api-readiness.md`](api-readiness.md) | 08 API gate · 09-CI-CD |
| Humans need Postman / Insomnia / Apidog import packs for the HTTP API | [`api-clients.md`](api-clients.md) | API_CONTRACT · impl `docs/api-clients/` · 08 |
| Frontend ↔ backend ↔ service contracts change (fields, headers, events, auth) | [`cross-surface-compatibility.md`](cross-surface-compatibility.md) | 08 · product SIBLING |
| Connecting any external partner (payments, email, maps, webhooks, …) | [`integration-engineering.md`](integration-engineering.md) | 08 integration gate |
| Model, prompt, RAG, agent or eval code paths | [`ai-engineering.md`](ai-engineering.md) | 08 AI gate · product docs/AI.md |
| Money moves (checkout, billing, refunds, payment webhooks) | [`payments.md`](payments.md) | Product SECURITY · 08 |
| Scarce capacity is reserved (bookings, appointments, seats) | [`booking.md`](booking.md) | SRS · 08 |
| Consequential side effects, high-risk boundaries, retries after timeouts | [`enterprise-system-design.md`](enterprise-system-design.md) | 08 high-stakes · 04 risk |
| Hot paths: loops over growing data, search or ranking, batch jobs | [`dsa-performance.md`](dsa-performance.md) | 04 Performance module · 08 |
| Adding an abstraction or a named design pattern | [`design-patterns.md`](design-patterns.md) | 04 design · review |
| Choosing a distributed / cloud architecture pattern | [`architecture-patterns.md`](architecture-patterns.md) | ARCHITECTURE · ADR · day design |
| Building a non-trivial capability that a package might already provide | [`packages.md`](packages.md) | 04 design · product DECISIONS |
| Browser end-to-end tests in a frontend repository | [`playwright-e2e.md`](playwright-e2e.md) | Frontend TESTING · 09-CI-CD |
| Public marketing or legal pages (search and AI answers) | [`seo-geo.md`](seo-geo.md) | Product SEO docs · 08 SEO gate |
| Handing work to a separate implementer agent | [`delegation.md`](delegation.md) | 08 delegation gate |
| Changing the factory itself (packs, guides, atlas, templates) | [`playbook-freshness.md`](playbook-freshness.md) | CONTRIBUTING · structure gate |

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

Product templates: [`templates/docs/JUDGMENT.md`](../templates/docs/JUDGMENT.md).

Prototype craft checklists distilled from external skills (checklist only): `project-ui/PRE-DELIVERY-UX.md`, `project-ui/ANTI-SLOP.md`.

