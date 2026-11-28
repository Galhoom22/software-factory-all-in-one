# Messaging Bridge

| | |
|--|--|
| **Family** | Integration |
| **Intent** | Connect incompatible messaging systems through an intermediary bridge. |
| **Also known as** | Bridge |
| **WAF pillars (source map)** | Cost Optimization, Operational Excellence |

## Summary

Connect incompatible messaging systems through an intermediary bridge. Open this folder only after [`07-judgment/architecture-patterns.md`](../../07-judgment/architecture-patterns.md) names it. Prefer the simpler alternatives and platform features listed in applicability before inventing new infrastructure. Cloud-agnostic: Azure docs inspired the catalog; implementations use your pinned stack.

## Use when

- Cloud ↔ on-prem messaging
- Vendor bus migration
- Partner integrations

## Avoid when

- Same bus technology already
- Simple HTTP callback is enough

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
| https://learn.microsoft.com/en-us/azure/architecture/patterns/messaging-bridge | 2026-11-28 |
| Microsoft Learn — Cloud design patterns catalog | 2026-11-28 |
