# Pipes and Filters

| | |
|--|--|
| **Family** | Processing |
| **Intent** | Split processing into composable filters connected by pipes (channels). |
| **Also known as** | Pipeline |
| **WAF pillars (source map)** | Reliability |

## Summary

Split processing into composable filters connected by pipes (channels). Open this folder only after [`07-judgment/architecture-patterns.md`](../../07-judgment/architecture-patterns.md) names it. Prefer the simpler alternatives and platform features listed in applicability before inventing new infrastructure. Cloud-agnostic: Azure docs inspired the catalog; implementations use your pinned stack.

## Use when

- ETL/export pipelines
- Reusable stages
- Different scale per stage

## Avoid when

- Three-line transform
- Stages need huge shared transactional state

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
| https://learn.microsoft.com/en-us/azure/architecture/patterns/pipes-and-filters | 2026-11-28 |
| Microsoft Learn — Cloud design patterns catalog | 2026-11-28 |
