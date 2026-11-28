# Choreography

| | |
|--|--|
| **Family** | Messaging / workflow |
| **Intent** | Let services react to events to complete a business flow without a central orchestrator. |
| **Also known as** | Event-driven choreography |
| **WAF pillars (source map)** | Operational Excellence, Performance Efficiency |

## Summary

Let services react to events to complete a business flow without a central orchestrator. Open this folder only after [`07-judgment/architecture-patterns.md`](../../07-judgment/architecture-patterns.md) names it. Prefer the simpler alternatives and platform features listed in applicability before inventing new infrastructure. Cloud-agnostic: Azure docs inspired the catalog; implementations use your pinned stack.

## Use when

- Loosely coupled services own their reactions
- Flows change often at the edges
- You accept eventual consistency

## Avoid when

- Compliance needs a single auditable state machine
- Saga orchestration is clearer for compensations
- Team cannot observe the distributed flow

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
| https://learn.microsoft.com/en-us/azure/architecture/patterns/choreography | 2026-11-28 |
| Microsoft Learn — Cloud design patterns catalog | 2026-11-28 |
