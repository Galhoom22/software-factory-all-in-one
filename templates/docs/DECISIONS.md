# Decision Log — {{PRODUCT}}

> ⚠️ **Planning only.** This repository is for product planning only. It is **not** the implementation repository.

| Field | Value |
|-------|-------|
| Document | Decision Log (lightweight architecture decision records) |
| Status | Living document |
| Related | [`SRS.md`](SRS.md) §2, §3, §9 · FE/BE [`ARCHITECTURE.md`](frontend/ARCHITECTURE.md) |

This log records **why** each lasting product or technical decision was made. Linked documents hold the details; this file holds the reason and the trade-off. It is the product’s ADR log — do **not** add a parallel `docs/adr/` tree in planning unless the owner explicitly chooses one for an implementation repo.

Judgment for SAD/ADR craft: playbook [`07-judgment/sad-adr.md`](../../07-judgment/sad-adr.md).

---

## 1. How to Use This Log

- Add an entry when a decision is hard to reverse, affects both developers, or closes an open decision in [SRS §9](SRS.md#9-open-decisions).
- Never edit the decision of an **Accepted** entry. To change it, add a new entry and set the old one to **Superseded by D-xx**.
- Statuses: **Proposed**, **Accepted**, **Superseded** (optional: **Deprecated** when retired without replacement).
- Number sequentially (`D-01`, `D-02`, …). Link **Related** decisions that constrain or follow this one.
- Default shape: **Context**, **Options considered** (when there was a real choice), **Decision**, **Consequences** (at least one ✅ and one ❌), **Details**.
- Add optional impact subsections only when the decision earns them (skip for simple product rules):
  - Architecture / C4 (context or container change)
  - Data model / migration
  - Security / compliance
  - Performance
  - Dependencies
  - Deployment / rollback
- Light, reversible forks go in [`decision-logs/`](decision-logs/), not here.

## 2. Index

| ID | Decision | Status |
|----|----------|--------|
| D-01 | Separate planning repository; implementation in its own repositories | Accepted |
| D-02 | No MVP mode — actor loop is the only delivery method | Accepted |

## 3. Decisions

### D-01 Separate planning repository

- **Context:** Requirements, compliance, and design must be agreed before code, and the developers need one shared reference.
- **Options considered:** (1) Plan and code in one repo — faster start, mixes concerns. (2) Separate planning repo — clearer SoT, more remotes.
- **Decision:** This repository holds planning documents and a prototype in `project-ui/` (mock data, no backend). Application code lives in separate repositories.
- **Consequences:** ✅ One source of truth that every developer reads. ✅ The prototype shows every screen and state before implementation. ❌ Documents and implementation can drift, so every change updates all affected documents in the same commit.
- **Details:** `AGENTS.md`, [`project-ui/README.md`](../project-ui/README.md).
- **Related:** D-02.

### D-02 No MVP mode — actor loop is the only delivery method

- **Context:** “Ship an MVP subset first” caused incomplete current-actor screens, pricing gaps, and rework when those choices later became permanent.
- **Options considered:** (1) MVP subset then backfill — short-term speed, lasting holes. (2) Actor-complete production quality — slower start, less rework.
- **Decision:** There is no MVP delivery mode. Deliver one **actor** at a time to production quality: plan here → prototype millimetre-accurate → implement in FE/BE → return for the next actor. Deferred lists are sequencing only.
- **Consequences:** ✅ Agents and CI cannot excuse stubs for the actor in focus. ✅ Production rules (billing periods, languages, empty states) are decided once. ❌ Other actors wait their turn even when tempting to sketch early.
- **Details:** [`DELIVERY.md`](DELIVERY.md), `AGENTS.md`, `scripts/check-delivery.mjs`.
- **Related:** D-01.

### D-xx {{SHORT_TITLE}} (copy this shape)

- **Context:** {{PROBLEM_CONSTRAINTS}}
- **Options considered:** {{OPTION_A_PROS_CONS}} · {{OPTION_B_PROS_CONS}}
- **Decision:** {{WHAT_WE_CHOSE}}
- **Consequences:** ✅ {{BENEFIT}} ❌ {{TRADEOFF}}
- **Details:** {{LINKS}}
- **Related:** {{D-xx}}
- **Architecture impact (optional):** {{C4_OR_BOUNDARY_CHANGE_OR_NONE}}
- **Security / performance / deps / deploy (optional):** {{ONLY_IF_MATERIAL}}
