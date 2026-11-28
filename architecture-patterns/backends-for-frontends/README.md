# Backends for Frontends

| | |
|--|--|
| **Family** | API / UX |
| **Intent** | Give each frontend (web, mobile, partner) its own backend shape instead of one crowded API. |
| **Also known as** | BFF |
| **WAF pillars (source map)** | Reliability, Security, Performance Efficiency |

## Summary

Give each frontend (web, mobile, partner) its own backend shape instead of one crowded API. Open this folder only after [`07-judgment/architecture-patterns.md`](../../07-judgment/architecture-patterns.md) names it. Prefer the simpler alternatives and platform features listed in applicability before inventing new infrastructure. Cloud-agnostic: Azure docs inspired the catalog; implementations use your pinned stack.

## Use when

- Mobile needs different payloads/auth than web
- Partner API must not expose internal aggregates
- Release cadences differ per client

## Avoid when

- One SPA with one API is enough
- BFFs duplicate domain rules instead of composing
- You only need Gateway Routing to existing services

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
| https://learn.microsoft.com/en-us/azure/architecture/patterns/backends-for-frontends | 2026-11-28 |
| Microsoft Learn — Cloud design patterns catalog | 2026-11-28 |
