# Event Sourcing

| | |
|--|--|
| **Family** | Data |
| **Intent** | Persist state as an append-only stream of domain events; rebuild views by replaying. |
| **Also known as** | — |
| **WAF pillars (source map)** | Reliability, Performance Efficiency |

## Summary

Persist state as an append-only stream of domain events; rebuild views by replaying. Open this folder only after [`07-judgment/architecture-patterns.md`](../../07-judgment/architecture-patterns.md) names it. Prefer the simpler alternatives and platform features listed in applicability before inventing new infrastructure. Cloud-agnostic: Azure docs inspired the catalog; implementations use your pinned stack.

## Use when

- Strong audit/compliance history
- Multiple projections from one stream
- Complex domain with clear events

## Avoid when

- Simple CRUD
- Team lacks event-versioning discipline
- Queries need ad-hoc joins across all history without projections

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
| https://learn.microsoft.com/en-us/azure/architecture/patterns/event-sourcing | 2026-11-28 |
| Microsoft Learn — Cloud design patterns catalog | 2026-11-28 |
