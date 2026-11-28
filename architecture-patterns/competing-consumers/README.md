# Competing Consumers

| | |
|--|--|
| **Family** | Messaging / scale |
| **Intent** | Multiple workers pull the same queue so throughput scales with consumers. |
| **Also known as** | Competing consumers / queue workers |
| **WAF pillars (source map)** | Reliability, Cost Optimization, Performance Efficiency |

## Summary

Multiple workers pull the same queue so throughput scales with consumers. Open this folder only after [`07-judgment/architecture-patterns.md`](../../07-judgment/architecture-patterns.md) names it. Prefer the simpler alternatives and platform features listed in applicability before inventing new infrastructure. Cloud-agnostic: Azure docs inspired the catalog; implementations use your pinned stack.

## Use when

- Embarrassingly parallel jobs
- Need elastic throughput
- Queue already buffers producers

## Avoid when

- Strict global ordering required without partitioning
- Work is not idempotent
- One consumer with vertical scale is enough

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
| https://learn.microsoft.com/en-us/azure/architecture/patterns/competing-consumers | 2026-11-28 |
| Microsoft Learn — Cloud design patterns catalog | 2026-11-28 |
