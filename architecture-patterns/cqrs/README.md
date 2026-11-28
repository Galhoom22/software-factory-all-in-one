# CQRS

| | |
|--|--|
| **Family** | Data |
| **Intent** | Separate read models from write models when their shapes and scale diverge. |
| **Also known as** | Command Query Responsibility Segregation |
| **WAF pillars (source map)** | Performance Efficiency |

## Summary

Separate read models from write models when their shapes and scale diverge. Open this folder only after [`07-judgment/architecture-patterns.md`](../../07-judgment/architecture-patterns.md) names it. Prefer the simpler alternatives and platform features listed in applicability before inventing new infrastructure. Cloud-agnostic: Azure docs inspired the catalog; implementations use your pinned stack.

## Use when

- Read/write load asymmetry
- Complex writes, simple high-QPS reads
- Event-sourced write side

## Avoid when

- CRUD app with symmetric needs
- Team cannot operate two models
- Premature split without measured pain

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
| https://learn.microsoft.com/en-us/azure/architecture/patterns/cqrs | 2026-11-28 |
| Microsoft Learn — Cloud design patterns catalog | 2026-11-28 |
