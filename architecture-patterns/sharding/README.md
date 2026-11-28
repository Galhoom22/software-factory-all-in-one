# Sharding

| | |
|--|--|
| **Family** | Data / scale |
| **Intent** | Split data into horizontal partitions (shards) by a key for scale and isolation. |
| **Also known as** | Horizontal partitioning |
| **WAF pillars (source map)** | Reliability, Cost Optimization |

## Summary

Split data into horizontal partitions (shards) by a key for scale and isolation. Open this folder only after [`07-judgment/architecture-patterns.md`](../../07-judgment/architecture-patterns.md) names it. Prefer the simpler alternatives and platform features listed in applicability before inventing new infrastructure. Cloud-agnostic: Azure docs inspired the catalog; implementations use your pinned stack.

## Use when

- Multi-tenant by tenant id
- Huge datasets
- Regional affinity

## Avoid when

- Data fits comfortably
- Cross-shard queries dominate

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
| https://learn.microsoft.com/en-us/azure/architecture/patterns/sharding | 2026-11-28 |
| Microsoft Learn — Cloud design patterns catalog | 2026-11-28 |
