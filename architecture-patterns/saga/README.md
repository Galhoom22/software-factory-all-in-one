# Saga

| | |
|--|--|
| **Family** | Consistency |
| **Intent** | Coordinate a sequence of local transactions across services with compensations on failure. |
| **Also known as** | Long-running transaction (distributed) |
| **WAF pillars (source map)** | Reliability |

## Summary

Coordinate a sequence of local transactions across services with compensations on failure. Open this folder only after [`07-judgment/architecture-patterns.md`](../../07-judgment/architecture-patterns.md) names it. Prefer the simpler alternatives and platform features listed in applicability before inventing new infrastructure. Cloud-agnostic: Azure docs inspired the catalog; implementations use your pinned stack.

## Use when

- Orders across inventory/payment/shipping
- Multi-service workflows
- Need partial undo

## Avoid when

- Single DB transaction enough
- Compensations undefined

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
| https://learn.microsoft.com/en-us/azure/architecture/patterns/saga | 2026-11-28 |
| Microsoft Learn — Cloud design patterns catalog | 2026-11-28 |
