# {{PRODUCT}} — Product Requirements

> ⚠️ **Planning only.** This repository is for product planning only. It is **not** the implementation repository and contains no application code — only a non-functional, mock-data prototype in `project-ui/`.

> 💡 Idea: {{ONE_LINE}}

<!-- Write every point as one line starting with User:, System:, Rule:, Product:, or Phase:. One fact per line. -->

---

## 1. Product Overview

- Idea: What the product does, in a few lines, following the user's path through it.

## 2. The Problem We Solve

- Problem: One line per real problem the target users have today.

## 3. Product Core

- User: The central objects the user creates and works with.
- System: What the system guarantees about them.

## 4. Value Proposition and Pricing

- Product: Why this product instead of the alternatives.
- Plan: Each plan with its price, or "defined later".
- Rule: Pricing and payment rules (regions, currencies, renewal, refunds).

## 5. Core Product Flow

### Step 1 — {{FIRST_STEP}}

- User: What the user does.
- System: What the system does in response.

## 6. Features

<!-- One subsection per feature. Copy this block. -->

### {{FEATURE_NAME}}

- User: What the user can do.
- System: What the system does.
- Rule: Limits, validations, and edge cases.

## 7. Current Actor Scope

> **Delivery:** There is no MVP delivery mode. This section is the actor in focus, designed to production quality (`docs/DELIVERY.md`). Deferred items wait their turn; they do not justify an incomplete current actor.

### Mandatory Requirements

- User: Everything this actor must be able to do in production.

## 8. Deferred Scope (Later Actors and Phases)

- Phase: Each feature or actor deliberately waiting its turn.
- Rule: Any feature that does not directly serve the current actor’s core value is postponed until its turn.

## 9. Product Differentiators

- Differentiator: What competitors do not do.

## 10. User Experience Principles

- Principle: The fewest possible steps, with a clear goal for each step.
- Principle: The interface is available in {{UI_LANGUAGES}}, with a language switch on every screen when there is more than one.

## 11. Security and Privacy Principles

- Principle: Collect only the data the product needs.
- Principle: Every page and feature follows `docs/SECURITY.md` and `docs/COMPLIANCE.md`.

## 12. Future Roadmap

### Phase 2 — {{NAME}}

- Feature: Each planned feature after the current actor.

## 13. Product Metrics

- Metric: How we know users get value (activation, completion, return rate).

## 14. Implementation Priorities (Current Actor)

### Priority 1 — Foundation

- Priority: Build order for the current actor.

## 15. Product Boundaries

- Product: What we are.
- Product is not: What we are not, yet.

## 16. One-Sentence Product Definition

- Definition: {{ONE_LINE}}

## 17. Governing Product Rules

<!-- The few rules no change may break without the owner's explicit approval. CI checks that this section exists. -->

- Rule: **There is no MVP delivery mode.** Deliver one actor at a time to production-ready completeness (`docs/DELIVERY.md`): plan here → prototype millimetre-accurate → implement in FE/BE → return for the next actor.
- Rule: {{RULE}}
