# Queue-Based Load Leveling

| | |
|--|--|
| **Family** | Messaging / scale |
| **Intent** | Buffer work on a queue so consumers process at a steady rate under spikes. |
| **Also known as** | Load leveling |
| **WAF pillars (source map)** | Reliability, Cost Optimization, Performance Efficiency |

## Summary

Buffer work on a queue so consumers process at a steady rate under spikes. Open this folder only after [`07-judgment/architecture-patterns.md`](../../07-judgment/architecture-patterns.md) names it. Prefer the simpler alternatives and platform features listed in applicability before inventing new infrastructure. Cloud-agnostic: Azure docs inspired the catalog; implementations use your pinned stack.

## Use when

- Burst uploads/orders
- Downstream has hard RPS limits
- Decouple producers from consumers

## Avoid when

- Need sync answers with no lag
- Queue without lag SLOs/alerts

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
| https://learn.microsoft.com/en-us/azure/architecture/patterns/queue-based-load-leveling | 2026-11-28 |
| Microsoft Learn — Cloud design patterns catalog | 2026-11-28 |
