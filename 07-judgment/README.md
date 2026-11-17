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

Product templates: [`templates/docs/JUDGMENT.md`](../templates/docs/JUDGMENT.md).

AI system design judgment: [`ai-system-design.md`](ai-system-design.md).

SAD / ADR judgment: [`sad-adr.md`](sad-adr.md).

Agent engineering skills judgment: [`agent-skills.md`](agent-skills.md).

Payments / billing judgment: [`payments.md`](payments.md).

Playwright E2E judgment: [`playwright-e2e.md`](playwright-e2e.md).

Design patterns judgment: [`design-patterns.md`](design-patterns.md).

Prototype craft checklists distilled from external skills (checklist only): `project-ui/PRE-DELIVERY-UX.md`, `project-ui/ANTI-SLOP.md`.

