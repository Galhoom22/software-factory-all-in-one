# Decision Log — {{PRODUCT}}

> ⚠️ **Planning only.** This repository is for product planning only. It is **not** the implementation repository.

| Field | Value |
|-------|-------|
| Document | Decision Log (lightweight architecture decision records) |
| Status | Living document |
| Related | [`SRS.md`](SRS.md) §2, §3, §9 |

This log records **why** each lasting product or technical decision was made. The linked documents hold the details; this file holds the reason and the trade-off.

---

## 1. How to Use This Log

- Add an entry when a decision is hard to reverse, affects both developers, or closes an open decision in [SRS §9](SRS.md#9-open-decisions).
- Never edit the decision of an accepted entry. To change it, add a new entry and set the old one to **Superseded by D-xx**.
- Statuses: **Proposed**, **Accepted**, **Superseded**.
- Each entry has four parts: context, decision, consequences (good and bad), and where the details live.

## 2. Index

| ID | Decision | Status |
|----|----------|--------|
| D-01 | Separate planning repository; implementation in its own repositories | Accepted |
| D-02 | No MVP mode — actor loop is the only delivery method | Accepted |

## 3. Decisions

### D-01 Separate planning repository

- **Context:** Requirements, compliance, and design must be agreed before code, and the developers need one shared reference.
- **Decision:** This repository holds planning documents and a prototype in `project-ui/` (mock data, no backend). Application code lives in separate repositories.
- **Consequences:** ✅ One source of truth that every developer reads. ✅ The prototype shows every screen and state before implementation. ❌ Documents and implementation can drift, so every change updates all affected documents in the same commit.
- **Details:** `AGENTS.md`, [`project-ui/README.md`](../project-ui/README.md).

### D-02 No MVP mode — actor loop is the only delivery method

- **Context:** “Ship an MVP subset first” caused incomplete current-actor screens, pricing gaps, and rework when those choices later became permanent.
- **Decision:** There is no MVP delivery mode. Deliver one **actor** at a time to production quality: plan here → prototype millimetre-accurate → implement in FE/BE → return for the next actor. Deferred lists are sequencing only.
- **Consequences:** ✅ Agents and CI cannot excuse stubs for the actor in focus. ✅ Production rules (billing periods, languages, empty states) are decided once. ❌ Other actors wait their turn even when tempting to sketch early.
- **Details:** [`02-DELIVERY.md`](02-DELIVERY.md), `AGENTS.md`, `scripts/check-delivery.mjs`.

