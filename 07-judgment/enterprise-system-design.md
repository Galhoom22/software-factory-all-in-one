# Judgment — enterprise system design (boundary / verification craft)

Absorb **enterprise distributed-system and AI-control** craft as **judgment only**. Map it onto FEATURE Design/Security/Verification, `DECISIONS.md`, SECURITY/COMPLIANCE, AI.md, and the day pipeline — never vendor a cloud-vendor course tree, HPC networking encyclopedia, or a second architecture constitution beside BRD/PRD/SRS/ARCHITECTURE.

**Upstream (human reading only, optional):** [DrHazemAli/enterprise-system-design](https://github.com/DrHazemAli/enterprise-system-design) — principles + foundation. Re-verify claims on primary sources before locking a product ADR.

**When this applies:** consequential boundaries (auth, money, PII, AI tools, irreversible writes, multi-tenant isolation), architecture reviews, High-risk FEATURE profiles, or days that change authority/promotion paths. Ordinary UI copy or low-risk CRUD: mark **N/A**.

## Problem this prevents

Diagrams that look complete while **representation → authority → consequence** promotions stay unspecified; AI output treated as “done” because generation stopped; retries that duplicate business effects after timeouts; release of high-impact changes with only local happy-path tests; and dumping Azure/InfiniBand lesson trees into the product repo as if that were design.

## The six questions (any architecture / boundary review)

Ask in order. A missing answer = an **unspecified boundary** (not automatically unsafe — but not yet defensible):

1. **Object** — What exact object exists here (bytes, JSON shape, token IDs, tool proposal, committed row)?
2. **Contract** — Which schema, parser, model revision, protocol, or policy gives it meaning?
3. **Authority** — What can it influence now? Did authority **increase** at this step (promotion)?
4. **Scope** — User, tenant, task, environment, time window, data classification?
5. **Evidence** — What record proves the transformation/decision **without** keeping unnecessary sensitive content?
6. **Recovery** — If wrong: stop, contain, reverse, learn — how?

Pairs with FEATURE Design / Security modules and day “doubt before Done” on high-stakes paths.

## Practice levels (AI / agent side effects)

The model’s confidence does **not** pick the level — **consequence and reversibility** do:

| Level | Meaning | Minimum evidence |
|-------|---------|------------------|
| **Advisory** | Informs a human; no direct side effect | I/O identity, citations, model/prompt version |
| **Assisted** | Proposes a bounded op for confirmation | Advisory + exact diff/target + policy + approver |
| **Delegated** | Runtime does reversible, low-impact actions | Capability scope, idempotency, limits, trace, rollback/kill switch |
| **Consequential** | Money, access, safety, production, regulated data | Independent verifier, fail-closed admission, audit, tested containment, named owner |

Map onto product AI consent, tool allowlists, and FEATURE risk profiles. Escalating a feature’s side effects without escalating this level is a design defect.

## Boundary classes (name them on consequential paths)

| Class | Ask |
|-------|-----|
| **Representation** | Does downstream bind to the operational identity it consumes (not only the human-visible string)? |
| **Authority** | Can passive content become instruction, tool call, or commit **only** because a model selected it? Forbid silent promotion. |
| **Isolation** | Does the receiving side validate/enforce — or trust the producer? |
| **Consequence** | What commits externally (payment, email, delete, deploy)? Idempotency, approval, rollback? |

**Promotion gates** (policy before effect) must sit **outside** the object being judged — a prompt alone is not an enforcement boundary for prompt-derived writes.

## Verification-dominant changes

Estimate work by **proof load**, not line count. Classify changes:

| Class | Expectation |
|-------|-------------|
| Local behavioral | Unit/property tests, edges |
| Contractual | Compatibility, malformed input, version skew |
| Concurrent / distributed | Races, retries, partial failure |
| Consequential | Independent verifier, staged release, rollback proof, named owner |

AI is a **producer under contract**: the engineer stays accountable; generated checks need tests that attempt the **forbidden** transition. Happy-path-only tests are weak evidence for a boundary claim.

## Ambiguous outcomes

Timeouts and lost responses are **unknown**, not automatic failure. Blind retry after unknown can duplicate money/messages/deletes. Prefer intent identity + idempotency + reconciliation (already required for payments/booking/API design). Treat `unknown` as a first-class state with an owner and deadline.

## AI: termination ≠ admission

Generation **stop reason** explains why decoding stopped — **not** whether output is safe to publish or act on. **Output admission** is a separate fail-closed step for consequential workflows (schema, policy, task completeness, product rules such as no fabrication). Low-consequence advisory may warn-and-show; high-consequence must block.

Deepens [`ai-system-design.md`](ai-system-design.md). Day craft: [`ai-engineering.md`](ai-engineering.md).

## Workload review lens (Well-Architected — cloud-agnostic use)

When reviewing a whole deployable, score trade-offs across: **Reliability**, **Security**, **Cost**, **Operational excellence**, **Performance**. Prefer the product’s pinned cloud docs; do not paste a vendor checklist into the playbook. Record lasting trade-offs in `DECISIONS.md` ([`sad-adr.md`](sad-adr.md)).

## Adopt (map onto existing docs)

| Practice | Where |
|----------|--------|
| Six questions on consequential writes | FEATURE Design/Security · day high-stakes doubt |
| Practice levels for AI/tools | `docs/AI.md` · SECURITY tool/egress rules · FEATURE risk |
| Boundary map before coding High-risk paths | FEATURE Design note · ARCHITECTURE |
| Verification class + evidence artifacts | FEATURE Verification · CI · CodeRabbit |
| Idempotency / unknown outcomes | API contract · payments · booking |
| Output admission after model stop | AI.md · AI feature tests |
| WAF-style pillar trade-offs | ADR when architecture shifts |

## Forbid

| Forbid | Why |
|--------|-----|
| Vendoring this course (or Azure ARM / RDMA / LoRA lesson trees) into `software-factory-all-in-one/` or AGENTS | Forever-generic; rot; second constitution |
| Requiring enterprise HPC/edge patterns on a modular monolith SPA↔API product | Fashion ≠ fit ([`stack-selection.md`](stack-selection.md)) |
| Treating audit logs as proof when high-impact branches can bypass them | False evidence |
| Letting model confidence raise practice level | Consequence picks the level |
| Equating “generation finished” with “safe to commit” | Missing admission |
| Surveillance-grade logging “for evidence” | Evidence without unnecessary PII ([`compliance-ethics-risk.md`](compliance-ethics-risk.md)) |

## Day workflow hook

When must-finish touches High-risk boundaries, AI tools/side effects, or architecture authority:

1. Open this file + [`ai-system-design.md`](ai-system-design.md) / [`ai-engineering.md`](ai-engineering.md) / [`sad-adr.md`](sad-adr.md) / SECURITY as needed.
2. Answer the **six questions** (or N/A with reason).
3. Name **practice level** if AI/agents can cause effects.
4. Cite evidence class in the day summary.

Closeout: architecture/AI consequential days mention boundary review (or **N/A**).

## Related homes

- [`agent-skills.md`](agent-skills.md) · [`ai-system-design.md`](ai-system-design.md) · [`ai-engineering.md`](ai-engineering.md) · [`sad-adr.md`](sad-adr.md) · [`api-design.md`](api-design.md) · [`booking.md`](booking.md) · [`payments.md`](payments.md)
- Method: [`04-FEATURE_SDLC.md`](../04-FEATURE_SDLC.md), [`08-IMPLEMENTATION-DAY.md`](../08-IMPLEMENTATION-DAY.md)
