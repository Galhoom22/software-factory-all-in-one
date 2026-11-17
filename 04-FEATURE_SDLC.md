04-FEATURE_SDLC.md [360L]
# Feature-Level SDLC — Adaptive Delivery for Implementation
How to turn an approved planning repository into small, independently verifiable features in the **implementation** repositories. Depth adapts to risk; mandatory security and privacy never do.
> **Planning vs implementation.** Decomposition and feature files live where code is built. This planning repository stays the single source of truth for product requirements (`requirements.md`, PRD, SRS, API contract, COMPLIANCE, SECURITY). Do not copy those documents into feature files. Do not dump a full external Adaptive Feature-Level SDLC template into the planning repo — keep this condensed guide, and put `docs/features/` only in the implementation repositories.
... [lean-ctx: omitted 2 lines]
**Actor sequencing ([`02-DELIVERY.md`](02-DELIVERY.md)):** **There is no MVP delivery mode.** When planning and prototype work is underway, finish one actor to production-ready completeness (millimetre-accurate screens), implement that actor, then return to planning for the next. Deferred lists are sequencing only — never an incomplete current actor.
## When to Use This
- Once, after planning is ready and before (or as) implementation repositories start: run the **Project Decomposition** section.
... [lean-ctx: omitted 1 lines]
- Together with Spec Kit (or equivalent) when that is the team's chosen implementation method: Spec Kit holds intent and convergence checks; this guide sets depth, evidence, and completion semantics.
- On each **implementation calendar day** that touches a mapped feature: update that feature file’s evidence the same day ([`08-IMPLEMENTATION-DAY.md`](08-IMPLEMENTATION-DAY.md)).
## Operating Rules
1. **Feature-level SDLC.** Apply the lifecycle to each independently deliverable change, not to the whole product as one blob.
... [lean-ctx: omitted 3 lines]
5. **Evidence over checklists.** A checked box is not completion. Link to tests, CI runs, reviews, or releases that actually happened. **Never mark Done solely because the feature file was filled in.**
... [lean-ctx: omitted 3 lines]
9. **Explicit N/A.** Mark an activity `N/A` only when it genuinely does not apply, with one short reason.
... [lean-ctx: omitted 1 lines]
11. **Separate milestones.** Definition of Done, production release, and business-outcome validation are tracked separately. Done does not imply Released; Released does not imply Outcome Achieved.
12. **Continuous feedback.** Revisit requirements and design when new information appears. Stages may overlap; every applicable quality gate still must pass before that completion decision.
13. **Profile ≠ security level.** Lightweight / Standard / Comprehensive set *engineering depth*. They do **not** assign ASVS L1/L2/L3. The product’s assurance target and SECURITY / COMPLIANCE baseline apply at every profile; add feature-specific controls on top.
**Lifecycle:** Discovery → Requirements → Design → Implementation → Verification → Integration → Release → Monitoring & Feedback (iterative; quality gates still must pass before the matching completion decision).
... [lean-ctx: omitted 1 lines]
## Project Decomposition (once per project or major SRS revision)
**Goal:** map every SRS requirement to coherent, independently verifiable features without inventing scope.
### Inputs
SRS (authoritative), PRD / BRD, architecture docs, SECURITY / COMPLIANCE, engineering standards, and the existing codebase when it exists.
### Checklist
- [ ] Every SRS requirement has a stable ID.
- [ ] Requirements are tagged functional, nonfunctional, constraint, or cross-cutting.
... [lean-ctx: omitted 2 lines]
- [ ] Cross-cutting rules are assigned to shared standards **and** to the features they affect.
- [ ] Every requirement maps to at least one feature or an explicit shared responsibility; gaps and conflicts are flagged, not papered over.
... [lean-ctx: omitted 1 lines]
### Quality gate
| Check | Pass when |
... [lean-ctx: omitted 1 lines]
| Completeness | Every SRS requirement is mapped or explicitly unresolved |
... [lean-ctx: omitted 3 lines]
| Consistency | Feature requirements do not contradict the SRS |
| No duplication | Shared standards are referenced, not copied |
| Readiness | Blocking open questions are listed |
### Recommended layout (implementation repositories)
```text
docs/
├── features/
│   ├── README.md
│   ├── requirements-map.md    # owns SRS → feature mapping
│   └── <epic>/
│       └── <feature>.md       # owns that feature's lifecycle evidence
└── … (architecture, ADRs as needed)
```
... [lean-ctx: omitted 2 lines]
## Adaptive Profile Selection
Assess each factor as Low / Medium / High: scope & complexity, dependencies, security & privacy, data integrity, reliability, performance, deployment & recovery, technical uncertainty.
... [lean-ctx: omitted 3 lines]
| **Standard** (default) | Ordinary feature work across a few components, meaningful logic, or moderate risk | Documented approach; unit / integration / contract tests as needed; relevant failure analysis; normal review |
| **Comprehensive** | Material High risk in security, privacy, integrity, reliability, architecture, or deployment | Trade-off analysis; explicit mitigations; expanded verification and specialist review when needed; rollout and recovery plan |
**Selection rules:** any material High risk → Comprehensive; Lightweight only when remaining risks are bounded and existing controls suffice; risk **impact** matters more than how many Mediums appear; reassess when scope or risk changes; mandatory product security and compliance still apply at every profile. **Money / first-time checkout / webhook entitlement:** treat as material High for data integrity and security — default **Comprehensive** (or Standard only with explicit WH mitigations and tests); never Lightweight for the first payments slice.
... [lean-ctx: omitted 2 lines]
## Feature Lifecycle (per feature)
Keep each feature file short. Activate only the sections the risk needs (see Conditional Modules). Prefer links to Spec Kit specs, PRs, CI runs, and planning doc IDs over pasted text.
### 1. Overview
Feature ID, name, parent epic, change type (Feature / Bug fix / Refactor / Security / Infra / Migration / Experiment), SRS / PRD references, goal, problem, value, success metric, in / out of scope, dependencies, constraints, owner.
### 2. Profile
Selected profile, justification, critical risks, required safeguards, reassessment trigger.
### 3. Requirements & acceptance
User story or technical objective; testable acceptance criteria (Given / When / Then), including failure and boundary cases; measurable NFRs with a verification method.
... [lean-ctx: omitted 3 lines]
- [ ] Dependencies and blockers identified
- [ ] Material assumptions and risks recorded
... [lean-ctx: omitted 2 lines]
### 4. Design
Time-box spikes; record the decision when the box ends. Approach, affected components, data flow, API / contract changes, data changes, concurrency / idempotency, alternatives and trade-offs. UX only when the feature has UI: flows, loading / empty / success / error, validation, accessibility, responsive behavior, design reference.
... [lean-ctx: omitted 2 lines]
- [ ] Respects existing architecture and conventions
... [lean-ctx: omitted 1 lines]
- [ ] Relevant security, performance, and reliability concerns addressed
... [lean-ctx: omitted 2 lines]
### 5. Implementation
Tasks traced to acceptance criteria; follow project standards; prefer framework-native features; no new pattern or package without a short justification (evaluate existing deps, license, advisories, transitive cost). Keep changes focused and independently verifiable. Link PRs as evidence (task → PR / commit).
When introducing a consequential pattern, package, or architecture choice: record problem → selected solution → rejected alternative → trade-off (one row). Pattern judgment: [`07-judgment/design-patterns.md`](07-judgment/design-patterns.md).
### 6. Security, privacy & reliability
Identify applicable SECURITY / COMPLIANCE controls and feature-specific threats. Product **security baseline** (standard name + assurance target) is set once for the app — cite it; do not invent a per-feature ASVS level from the engineering profile.
... [lean-ctx: omitted 4 lines]
- [ ] Critical risks have mitigations and verification evidence
... [lean-ctx: omitted 1 lines]
- [ ] Authorization and integrity guarantees verified where they apply
- [ ] No unresolved release-blocking vulnerability
### 7. Verification
Choose test types that the risk justifies (unit, integration, contract, E2E, regression, security, performance, accessibility, migration / recovery). One **requirements traceability** matrix is authoritative: requirement or risk → scenario → method → evidence link → result. Coverage percentages support evidence; they do not replace requirement coverage. Product-specific ownership and mandatory safety nets live in the planning repo’s `docs/frontend/TESTING.md` and `docs/backend/TESTING.md` (keep them split by owner).
... [lean-ctx: omitted 1 lines]
- [ ] Every applicable acceptance criterion has a recorded result and evidence
- [ ] Every critical risk and required NFR has verification evidence
... [lean-ctx: omitted 4 lines]
### 8. Review & CI
Build, lint, tests, security / dependency checks, secret scanning, required review, integration. Solo work may use documented self-review when project policy allows; higher-risk changes may require an independent review. Day closeout still runs the product’s CI + CodeRabbit gates ([`08-IMPLEMENTATION-DAY.md`](08-IMPLEMENTATION-DAY.md), [`09-CI-CD.md`](09-CI-CD.md)).
... [lean-ctx: omitted 3 lines]
- [ ] Change integrates with existing functionality
... [lean-ctx: omitted 1 lines]
- [ ] No unresolved release-blocking regressions
### 9. Release & operations
Reference the shared release process; do not duplicate deployment docs. Record release unit, method, dependencies, feature flag (with owner and removal condition if temporary), recovery strategy, post-release checks, monitoring. Cleanup of temporary flags is tracked after release; it does not keep the feature "open" forever.
... [lean-ctx: omitted 1 lines]
- [ ] Deployment prerequisites verified
... [lean-ctx: omitted 1 lines]
- [ ] Viable recovery strategy documented
... [lean-ctx: omitted 3 lines]
Post-release signals (when Released): expected vs observed operational metric and/or business outcome — Pending / Passed / Failed / N/A.
### 10. Definition of Done & status
DoD (adapt to the product's frontend / backend DoD): applicable acceptance criteria pass with evidence; required security and quality controls satisfied; CI and review gates pass; change is integrated and usable; no release-blocking issue; necessary docs current.
Authoritative status row: Requirements / Design / Implementation / Verification / Integration / Definition of Done / Release / Post-Release Validation / Business Outcome — each with status and evidence link.
... [lean-ctx: omitted 5 lines]
| **Released** | Deployed to the intended production environment |
| **Outcome Achieved** | Enough evidence that the intended business or technical outcome happened |
... [lean-ctx: omitted 1 lines]
### 11. Conditional modules (activate only when triggered)
| Module | Activate when |
... [lean-ctx: omitted 4 lines]
| Threat modeling | Material security or privacy risk — name trust boundaries and one abuse case before controls; quick STRIDE lens when helpful |
... [lean-ctx: omitted 1 lines]
| Architecture decision record | Significant architectural trade-off — write/supersede `DECISIONS.md` with options + consequences; update FE/BE C4 views if boundaries change |
... [lean-ctx: omitted 1 lines]
| Design pattern evaluation | Consequential new abstraction — name the **problem**, the **naive** approach, and why this blueprint (or framework-native stand-in) wins; prefer composition; forbid pattern-for-show; judgment: [`07-judgment/design-patterns.md`](07-judgment/design-patterns.md) |
... [lean-ctx: omitted 3 lines]
| Feature-flag management | Temporary or long-lived flag |
... [lean-ctx: omitted 1 lines]
| AI path evaluation | New or changed model, prompt, retrieval, or AI job — require fictional golden-set pass; pin model IDs; if RAG: relevance + groundedness + answer relevance; privacy strip before provider; injection/agency threat row |
| Payments / billing | Checkout, subscriptions, credits, refunds, or provider webhooks — activate WH threat rows; signature + idempotency tests; entitlement never from success URL alone; sandbox/fake isolation; go-live key rotation checklist |
For each activated module, record: Module · Reason · Artifact / evidence link · Status. Link out to the project's existing templates; do not paste large module bodies into every feature file. Judgment for AI patterns: [`07-judgment/ai-system-design.md`](07-judgment/ai-system-design.md). Judgment for payments: [`07-judgment/payments.md`](07-judgment/payments.md). Judgment for design patterns: [`07-judgment/design-patterns.md`](07-judgment/design-patterns.md).
### 12. Retrospective (optional)
What worked, what caused friction, what escaped, what to change, what to automate — then concrete follow-ups.
---
## Feature File Skeleton
Copy into the implementation repository's `docs/features/<epic>/<feature>.md` and fill only what the profile and activated modules require.
```markdown
# FEAT-xxx — <Name>

| Field | Value |
|-------|-------|
| Epic | |
| Change type | Feature / Bug fix / Refactor / Security / Infra / Migration / Experiment |
| SRS / PRD | |
| Profile | Lightweight / Standard / Comprehensive |
| Critical risks | |
| Reassessment trigger | |
| Owner | FE / BE / Both |

## Goal
## In scope / Out of scope

## Definition of Ready
- [ ] Clear enough to build · criteria testable · blockers known · assumptions recorded

## Acceptance criteria
- [ ] AC-001: Given … when … then …

## Design (link or short paragraph)
## Activated modules
| Module | Reason | Evidence | Status |
|--------|--------|----------|--------|

## Security baseline (product refs)
## Security & reliability controls
## Verification matrix
| Requirement / risk | Method | Evidence | Result |
|--------------------|--------|----------|--------|
| AC-001 | | | Pending |

## Implementation evidence
| Task | PR / commit | Status |
|------|-------------|--------|

## CI / review evidence
## Release reference
## Post-release signals
| Signal | Expected | Observed | Status |
|--------|----------|----------|--------|

## Lifecycle status
| Milestone | Status | Evidence |
|-----------|--------|----------|
| Requirements | Pending / Complete | |
| Design | Pending / Complete / N/A | |
| Implementation | Pending / Complete | |
| Verification | Pending / Passed / Failed | |
| Integration | Pending / Passed / Failed | |
| Definition of Done | Not met / Met | |
| Release | Not released / Released | |
| Post-release validation | Pending / Passed / N/A | |
| Business outcome | Pending / Achieved / N/A | |

## Completion decision
| Field | Value |
|-------|-------|
| Decision | Done / Not Done |
| Owner | |
| Date | |
| Follow-ups | |

## Follow-ups
```
... [lean-ctx: omitted 1 lines]
## Engineering principles (scan)
1. Understand the problem before implementing the solution.
2. Decompose into meaningful, independently verifiable features.
... [lean-ctx: omitted 4 lines]
7. Introduce abstractions and dependencies only when justified.
... [lean-ctx: omitted 3 lines]
11. Monitor real behavior and validate intended outcomes.
12. Continuously remove unnecessary engineering and process complexity.
... [lean-ctx: omitted 1 lines]
## How This Fits the Planning Playbook
| Planning artifact | Role in this SDLC |
... [lean-ctx: omitted 1 lines]
| `requirements.md`, PRD, SRS | Source of requirements and traceability IDs |
... [lean-ctx: omitted 4 lines]
| Spec Kit (implementation repos) | Day-to-day specify → plan → implement → analyze → converge loop; cite constitution rules by planning-doc ID |
| [`08-IMPLEMENTATION-DAY.md`](08-IMPLEMENTATION-DAY.md) | Calendar-day run-through and closeout; feature evidence updated same day |
... [lean-ctx: omitted 1 lines]
After a major SRS change, re-run Project Decomposition and update `requirements-map.md` before cutting more features.
## References (verify current publication status when standards matter)
- [Scrum Guide (2020)](https://scrumguides.org/scrum-guide.html) — incremental delivery and Definition of Done
- [Agile Manifesto principles](https://agilemanifesto.org/principles) — simplicity and feedback
... [lean-ctx: omitted 1 lines]
- [OWASP ASVS](https://owasp.org/www-project-application-security-verification-standard/) — application security verification (product baseline, not per-feature level assignment)
... [lean-ctx: omitted 1 lines]
- [Google SRE Workbook — Monitoring](https://sre.google/workbook/monitoring/) — operational feedback

