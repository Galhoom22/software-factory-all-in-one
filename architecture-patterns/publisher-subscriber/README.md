# Publisher-Subscriber

| | |
|--|--|
| **Family** | Messaging |
| **Intent** | Publish events to many subscribers without the publisher knowing recipients. |
| **Also known as** | Pub/Sub |
| **WAF pillars (source map)** | Reliability, Security, Cost Optimization, Operational Excellence, Performance Efficiency |

## Summary

Publish events to many subscribers without the publisher knowing recipients. Open this folder only after [`07-judgment/architecture-patterns.md`](../../07-judgment/architecture-patterns.md) names it. Prefer the simpler alternatives and platform features listed in applicability before inventing new infrastructure. Cloud-agnostic: Azure docs inspired the catalog; implementations use your pinned stack.

## Use when

- Domain events
- Fan-out notifications
- Decoupled integrations

## Avoid when

- Need request/response to one consumer
- Strict sync consistency

## File map

| File | Contents |
|------|----------|
| [`problem-solution.md`](problem-solution.md) | Problem, forces, naive fail, solution, analogy, Mermaid |
| [`applicability.md`](applicability.md) | Signals, anti-signals, simpler alternative, framework-native |
| [`implementation.md`](implementation.md) | Steps, pseudocode, sketches, tests, refactor paths |
| [`trade-offs.md`](trade-offs.md) | Pros, cons, costs, misuse, checklist |
| [`relations.md`](relations.md) | Confused-with, combines-with, alternatives |

## Sources

| Source | Checked |
|--------|---------|
| https://learn.microsoft.com/en-us/azure/architecture/patterns/publisher-subscriber | 2026-11-28 |
| Microsoft Learn — Cloud design patterns catalog | 2026-11-28 |
