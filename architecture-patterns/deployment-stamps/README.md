# Deployment Stamps

| | |
|--|--|
| **Family** | Deployment / scale |
| **Intent** | Deploy independent copies of the stack (stamps) for scale, isolation, or regions. |
| **Also known as** | Scale units / stamps |
| **WAF pillars (source map)** | Operational Excellence, Performance Efficiency |

## Summary

Deploy independent copies of the stack (stamps) for scale, isolation, or regions. Open this folder only after [`07-judgment/architecture-patterns.md`](../../07-judgment/architecture-patterns.md) names it. Prefer the simpler alternatives and platform features listed in applicability before inventing new infrastructure. Cloud-agnostic: Azure docs inspired the catalog; implementations use your pinned stack.

## Use when

- Multi-region active footprints
- Tenant isolation by stamp
- Blast-radius control for releases

## Avoid when

- Single-region MVP with tiny traffic
- Shared DB across stamps defeats the pattern

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
| https://learn.microsoft.com/en-us/azure/architecture/patterns/deployment-stamps | 2026-11-28 |
| Microsoft Learn — Cloud design patterns catalog | 2026-11-28 |
