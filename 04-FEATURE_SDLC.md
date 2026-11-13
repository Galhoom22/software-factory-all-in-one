# Feature-Level SDLC — Adaptive Delivery for Implementation

How to turn an approved planning repository into small, independently verifiable features in the **implementation** repositories. Depth adapts to risk; mandatory security and privacy never do.

> **Planning vs implementation.** Decomposition and feature files live where code is built. This planning repository stays the single source of truth for product requirements (`requirements.md`, PRD, SRS, API contract, COMPLIANCE, SECURITY). Do not copy those documents into feature files. Do not dump a full external Adaptive Feature-Level SDLC template into the planning repo — keep this condensed guide, and put `docs/features/` only in the implementation repositories.

**Issue tracker handoff:** a planning repo may ship a **Jira/CSV import pack** (Epics → stories → tasks) for sprint planning. That pack must cite PRD/SRS IDs and must not become a second requirements source. MasarHub’s pack lives under `docs/jira/<actor>/` (job seeker first: `docs/jira/job-seeker/`, D-46).

**Principle:** Maximum justified quality. Minimum unnecessary complexity. Evidence-based completion.

**Actor sequencing ([`02-DELIVERY.md`](02-DELIVERY.md)):** **There is no MVP delivery mode.** When planning and prototype work is underway, finish one actor to production-ready completeness (millimetre-accurate screens), implement that actor, then return to planning for the next. Deferred lists are sequencing only — never an incomplete current actor.

## When to Use This

- Once, after planning is ready and before (or as) implementation repositories start: run the **Project Decomposition** section.
- Once per independently deliverable feature or technical change: run the **Feature Lifecycle** with a chosen engineering profile.
- Together with Spec Kit (or equivalent) when that is the team's chosen implementation method: Spec Kit holds intent and convergence checks; this guide sets depth, evidence, and completion semantics.

## Operating Rules

1. **Feature-level SDLC.** Apply the lifecycle to each independently deliverable change, not to the whole product as one blob.
2. **Single source of truth.** Derive work from the approved SRS (and PRD stories). Reference project docs; do not invent unsupported requirements.
3. **Adaptive rigor.** Choose Lightweight, Standard, or Comprehensive from actual risk (below). Standard is the default.
4. **Security by default.** Never weaken SECURITY or COMPLIANCE red lines because a feature is small. Engineering profile and security assurance are separate decisions.
5. **Evidence over checklists.** A checked box is not completion. Link to tests, CI runs, reviews, or releases that actually happened.
6. **No fabricated results.** Never claim implementation, tests, reviews, or deployment succeeded without verification.
7. **Simplicity first.** No patterns, packages, docs, or process steps without a demonstrated need.
8. **No duplication.** Link shared standards and decisions; do not paste the SRS or SECURITY into every feature file.
9. **Explicit N/A.** Mark an activity `N/A` only when it genuinely does not apply, with one short reason.
10. **No silent assumptions.** Record ambiguity and ask before an unsupported assumption would change the design or API.
11. **Separate milestones.** Definition of Done, production release, and business-outcome validation are tracked separately. Done does not imply Released; Released does not imply Outcome Achieved.
12. **Continuous feedback.** Revisit requirements and design when new information appears.

**Lifecycle:** Discovery → Requirements → Design → Implementation → Verification → Integration → Release → Monitoring & Feedback (iterative; quality gates still must pass before the matching completion decision).

---

## Project Decomposition (once per project or major SRS revision)

**Goal:** map every SRS requirement to coherent, independently verifiable features without inventing scope.

### Inputs

SRS (authoritative), PRD / BRD, architecture docs, SECURITY / COMPLIANCE, engineering standards, and the existing codebase when it exists.

### Checklist

- [ ] Every SRS requirement has a stable ID.
- [ ] Requirements are tagged functional, nonfunctional, constraint, or cross-cutting.
- [ ] Related requirements are grouped into epics, then sliced into features by **behavior**, not by code layer.
- [ ] Dependencies and a sensible build order are written down.
- [ ] Cross-cutting rules are assigned to shared standards **and** to the features they affect.
- [ ] Every requirement maps to at least one feature or an explicit shared responsibility; gaps and conflicts are flagged, not papered over.
- [ ] Each feature gets its own Markdown file (in the implementation repository) using the skeleton below.

### Quality gate

| Check | Pass when |
|-------|-----------|
| Completeness | Every SRS requirement is mapped or explicitly unresolved |
| Traceability | Every feature cites its originating requirements |
| Scope | Each feature has one coherent, testable outcome |
| Dependencies | Prerequisites are documented |
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

`requirements-map.md` owns the mapping. Each feature file owns execution evidence and status. Neither duplicates the planning SRS.

---

## Adaptive Profile Selection

Assess each factor as Low / Medium / High: scope & complexity, dependencies, security & privacy, data integrity, reliability, performance, deployment & recovery, technical uncertainty.

| Profile | When | Depth |
|---------|------|--------|
| **Lightweight** | Limited, well understood, easy to verify, no material elevated risk | Short requirements and design; targeted tests; existing CI and security controls; minimal docs |
| **Standard** (default) | Ordinary feature work across a few components, meaningful logic, or moderate risk | Documented approach; unit / integration / contract tests as needed; relevant failure analysis; normal review |
| **Comprehensive** | Material High risk in security, privacy, integrity, reliability, architecture, or deployment | Trade-off analysis; explicit mitigations; expanded verification and specialist review when needed; rollout and recovery plan |

**Selection rules:** any material High risk → Comprehensive; Lightweight only when remaining risks are bounded and existing controls suffice; risk **impact** matters more than how many Mediums appear; reassess when scope or risk changes; mandatory product security and compliance still apply at every profile.

---

## Feature Lifecycle (per feature)

Keep each feature file short. Activate only the sections the risk needs (see Conditional Modules). Prefer links to Spec Kit specs, PRs, CI runs, and planning doc IDs over pasted text.

### 1. Overview

Feature ID, name, parent epic, change type, SRS / PRD references, goal, problem, value, success metric, in / out of scope, dependencies, constraints, owner.

### 2. Profile

Selected profile, justification, critical risks, required safeguards, reassessment trigger.

### 3. Requirements & acceptance

User story or technical objective; testable acceptance criteria (Given / When / Then), including failure and boundary cases; measurable NFRs with a verification method. Definition of Ready: clear enough to build, criteria testable, blockers known, material assumptions recorded, open questions owned. Discovery may continue during implementation; Ready is not a freeze.

### 4. Design

Time-box spikes; record the decision when the box ends. Approach, affected components, data flow, API / contract changes, data changes, concurrency / idempotency, alternatives and trade-offs. UX only when the feature has UI: flows, loading / empty / success / error, validation, accessibility, responsive behavior, design reference. Gate: satisfies requirements, respects architecture, addresses relevant risks, avoids unjustified complexity.

### 5. Implementation

Tasks traced to acceptance criteria; follow project standards; prefer framework-native features; no new pattern or package without a short justification (evaluate existing deps, license, advisories, transitive cost). Keep changes focused and independently verifiable. Link PRs as evidence.

### 6. Security, privacy & reliability

Identify applicable SECURITY / COMPLIANCE controls and feature-specific threats. Table: risk or failure mode → control → verification → status. Residual risk: mitigate / accept / block with an owner. Do not map Lightweight/Standard/Comprehensive onto ASVS levels; the application's assurance target is set once for the product.

### 7. Verification

Choose test types that the risk justifies (unit, integration, contract, E2E, regression, security, performance, accessibility, migration / recovery). One **requirements traceability** matrix is authoritative: requirement or risk → scenario → method → evidence link → result. Coverage percentages support evidence; they do not replace requirement coverage. Product-specific ownership and mandatory safety nets live in the planning repo’s `docs/frontend/TESTING.md` and `docs/backend/TESTING.md` (keep them split by owner).

### 8. Review & CI

Build, lint, tests, security / dependency checks, secret scanning, required review, integration. Solo work may use documented self-review when project policy allows; higher-risk changes may require an independent review.

### 9. Release & operations

Reference the shared release process; do not duplicate deployment docs. Record release unit, method, dependencies, feature flag (with owner and removal condition if temporary), recovery strategy, post-release checks, monitoring. Cleanup of temporary flags is tracked after release; it does not keep the feature "open" forever.

### 10. Definition of Done & status

DoD (adapt to the product's frontend / backend DoD): applicable acceptance criteria pass with evidence; required security and quality controls satisfied; CI and review gates pass; change is integrated and usable; no release-blocking issue; necessary docs current.

Authoritative status row: Requirements / Design / Implementation / Verification / Integration / Definition of Done / Release / Post-Release Validation / Business Outcome — each with status and evidence link.

**Completion semantics**

| Milestone | Means |
|-----------|--------|
| **Done** | Meets the established Definition of Done |
| **Released** | Deployed to the intended production environment |
| **Outcome Achieved** | Enough evidence that the intended business or technical outcome happened |

These are independent unless an explicit product policy ties them together.

### 11. Conditional modules (activate only when triggered)

| Module | Activate when |
|--------|----------------|
| Detailed API design | New or changed external contracts |
| Database & migration design | Schema changes or data-integrity risk |
| Concurrency & idempotency | Parallel work, retries, or duplicate events |
| Threat modeling | Material security or privacy risk |
| Detailed UX / accessibility | Complex interaction or accessibility-critical UI |
| Architecture decision record | Significant architectural trade-off |
| Dependency evaluation | New third-party dependency |
| Design pattern evaluation | Consequential new abstraction |
| Performance engineering | Significant latency, throughput, or scale needs |
| Resilience & recovery | High-impact operational failure modes |
| Compliance review | Contractual or regulatory obligations for this change |
| Feature-flag management | Temporary or long-lived flag |
| Data migration verification | Migration, backfill, or destructive data change |

Link out to the project's existing templates; do not paste large module bodies into every feature file.

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
| Change type | Feature / Bug fix / Refactor / Security / Infra / Migration |
| SRS / PRD | |
| Profile | Lightweight / Standard / Comprehensive |
| Owner | FE / BE / Both |

## Goal
## In scope / Out of scope
## Acceptance criteria
- [ ] AC-001: Given … when … then …
## Design (link or short paragraph)
## Security & reliability controls
## Verification matrix
| Requirement / risk | Method | Evidence | Result |
|--------------------|--------|----------|--------|
| AC-001 | | | Pending |
## CI / review evidence
## Release reference
## Lifecycle status
| Milestone | Status | Evidence |
|-----------|--------|----------|
| Definition of Done | Not met / Met | |
| Release | Not released / Released | |
| Business outcome | Pending / Achieved / N/A | |
## Follow-ups
```

---

## How This Fits the Planning Playbook

| Planning artifact | Role in this SDLC |
|-------------------|-------------------|
| `requirements.md`, PRD, SRS | Source of requirements and traceability IDs |
| API contract | Interface changes and compatibility |
| COMPLIANCE / SECURITY | Non-negotiable controls for every profile |
| DECISIONS.md | Lasting trade-offs; new ADRs in implementation when needed |
| Frontend / backend Definition of Done | Product-specific DoD checklist the feature must still satisfy |
| Spec Kit (implementation repos) | Day-to-day specify → plan → implement → analyze → converge loop; cite constitution rules by planning-doc ID |
| This file | Decomposition, adaptive depth, evidence, and completion semantics |

After a major SRS change, re-run Project Decomposition and update `requirements-map.md` before cutting more features.

## References (verify current publication status when standards matter)

- [Scrum Guide (2020)](https://scrumguides.org/scrum-guide.html) — incremental delivery and Definition of Done
- [Agile Manifesto principles](https://agilemanifesto.org/principles) — simplicity and feedback
- [NIST SSDF 1.1](https://csrc.nist.gov/pubs/sp/800/218/final) — secure development practices
- [OWASP ASVS](https://owasp.org/www-project-application-security-verification-standard/) — application security verification (product baseline, not per-feature level assignment)
- [DORA](https://dora.dev/guides/dora-metrics/) — delivery performance signals
- [Google SRE Workbook — Monitoring](https://sre.google/workbook/monitoring/) — operational feedback
