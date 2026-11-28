# Leader Election

| | |
|--|--|
| **Family** | Coordination |
| **Intent** | Elect one instance to coordinate shared work so followers do not conflict. |
| **Also known as** | — |
| **WAF pillars (source map)** | Reliability |

## Summary

Elect one instance to coordinate shared work so followers do not conflict. Open this folder only after [`07-judgment/architecture-patterns.md`](../../07-judgment/architecture-patterns.md) names it. Prefer the simpler alternatives and platform features listed in applicability before inventing new infrastructure. Cloud-agnostic: Azure docs inspired the catalog; implementations use your pinned stack.

## Use when

- Cluster-wide schedulers
- Partition owners
- Singleton processors in a fleet

## Avoid when

- Stateless horizontally scaled workers
- Managed schedulers already elect

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
| https://learn.microsoft.com/en-us/azure/architecture/patterns/leader-election | 2026-11-28 |
| Microsoft Learn — Cloud design patterns catalog | 2026-11-28 |
