# Gateway Routing

| | |
|--|--|
| **Family** | Gateway |
| **Intent** | Expose one entry URL and route to the correct service by path, host, or headers. |
| **Also known as** | API gateway routing |
| **WAF pillars (source map)** | Reliability, Operational Excellence, Performance Efficiency |

## Summary

Expose one entry URL and route to the correct service by path, host, or headers. Open this folder only after [`07-judgment/architecture-patterns.md`](../../07-judgment/architecture-patterns.md) names it. Prefer the simpler alternatives and platform features listed in applicability before inventing new infrastructure. Cloud-agnostic: Azure docs inspired the catalog; implementations use your pinned stack.

## Use when

- Microservice edge
- Blue/green or version routing
- Hide topology from clients

## Avoid when

- Single service
- Routing logic encodes deep business rules

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
| https://learn.microsoft.com/en-us/azure/architecture/patterns/gateway-routing | 2026-11-28 |
| Microsoft Learn — Cloud design patterns catalog | 2026-11-28 |
