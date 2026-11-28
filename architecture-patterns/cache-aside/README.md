# Cache-Aside

| | |
|--|--|
| **Family** | Data / performance |
| **Intent** | Load data into cache on miss; application owns read-through and invalidation. |
| **Also known as** | Lazy cache / lazy loading |
| **WAF pillars (source map)** | Reliability, Performance Efficiency |

## Summary

Load data into cache on miss; application owns read-through and invalidation. Open this folder only after [`07-judgment/architecture-patterns.md`](../../07-judgment/architecture-patterns.md) names it. Prefer the simpler alternatives and platform features listed in applicability before inventing new infrastructure. Cloud-agnostic: Azure docs inspired the catalog; implementations use your pinned stack.

## Use when

- Read-heavy, write-light data
- Expensive queries with stable keys
- You can define TTL/invalidation rules

## Avoid when

- Data must be strongly consistent on every read
- Working set does not fit cache
- Framework already caches the page/response safely

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
| https://learn.microsoft.com/en-us/azure/architecture/patterns/cache-aside | 2026-11-28 |
| Microsoft Learn — Cloud design patterns catalog | 2026-11-28 |
