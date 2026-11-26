# Product Requirements Document (PRD) — {{PRODUCT}}

> ⚠️ **Planning only.** This repository is for product planning only. It is **not** the implementation repository.

| Field | Value |
|-------|-------|
| Document | Product Requirements Document |
| Product | {{PRODUCT}} |
| Status | Draft |
| Source of truth | [`requirements.md`](../requirements.md) |
| Related | [`BRD.md`](BRD.md), [`SRS.md`](SRS.md), [`02-DELIVERY.md`](DELIVERY.md) |

---

## 1. Purpose

This document defines **what** the **current actor** ({{CURRENT_ACTOR}}) gets at production quality ([`02-DELIVERY.md`](DELIVERY.md)): features, user stories, and acceptance criteria. Detailed rules live in `requirements.md`; technical specifications live in the SRS. There is no MVP delivery mode.

## 2. Product Summary

{{ONE_LINE}}

## 3. Personas

| Persona | Description |
|---------|-------------|
| {{NAME}}, {{ROLE}} | {{NEED}} |

## 4. Core User Flow

1. Sign up → 2. {{STEP}} → 3. {{STEP}}

## 5. Current-Actor Features

<!-- One block per feature for the actor in focus. Copy it. IDs are F-01, F-02, ... and never reused. -->

### F-01 {{FEATURE}}

- **Story:** As a {{USER}}, I want to {{ACTION}} so that {{BENEFIT}}.
- **Acceptance criteria:**
  - Specific and testable, one per line.
- **Compliance and security:** the COMPLIANCE and SECURITY rule IDs this feature must meet.

## 6. UX Principles

- requirements.md UX section, in short.

## 7. Deferred (later actors / later scope)

- requirements.md deferred section. Sequencing only — never an incomplete current actor.

## 8. Release Criteria

- Every current-actor feature meets its acceptance criteria end to end against the real API.
- The COMPLIANCE and SECURITY pre-launch checklists are complete.

## 9. Definition of Ready

A feature is ready for implementation when:

- [ ] Its acceptance criteria are specific and testable.
- [ ] Every FR it needs is in the SRS with an Owner.
- [ ] Every endpoint it needs is in the API contract and approved by both developers.
- [ ] Every screen and state it needs exists in the prototype.
- [ ] Its COMPLIANCE and SECURITY items are named.
