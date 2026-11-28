# Index Table

| | |
|--|--|
| **Family** | Data |
| **Intent** | Maintain secondary indexes (tables) for query fields the primary store cannot filter efficiently. |
| **Also known as** | Secondary index table |
| **WAF pillars (source map)** | Reliability, Performance Efficiency |

## Summary

Maintain secondary indexes (tables) for query fields the primary store cannot filter efficiently. Open this folder only after [`07-judgment/architecture-patterns.md`](../../07-judgment/architecture-patterns.md) names it. Prefer the simpler alternatives and platform features listed in applicability before inventing new infrastructure. Cloud-agnostic: Azure docs inspired the catalog; implementations use your pinned stack.

## Use when

- Key-value / document stores without rich secondary indexes
- Known query patterns

## Avoid when

- Relational DB already indexes the columns
- Unbounded fan-out indexes

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
| https://learn.microsoft.com/en-us/azure/architecture/patterns/index-table | 2026-11-28 |
| Microsoft Learn — Cloud design patterns catalog | 2026-11-28 |
