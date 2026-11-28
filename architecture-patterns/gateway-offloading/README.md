# Gateway Offloading

| | |
|--|--|
| **Family** | Gateway |
| **Intent** | Move shared concerns (TLS, auth, logging, compression) into the gateway. |
| **Also known as** | Offloading |
| **WAF pillars (source map)** | Reliability, Security, Cost Optimization, Operational Excellence, Performance Efficiency |

## Summary

Move shared concerns (TLS, auth, logging, compression) into the gateway. Open this folder only after [`07-judgment/architecture-patterns.md`](../../07-judgment/architecture-patterns.md) names it. Prefer the simpler alternatives and platform features listed in applicability before inventing new infrastructure. Cloud-agnostic: Azure docs inspired the catalog; implementations use your pinned stack.

## Use when

- Many services share edge policies
- Central cert management
- Consistent audit logs

## Avoid when

- One service only
- Business rules pushed into the gateway

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
| https://learn.microsoft.com/en-us/azure/architecture/patterns/gateway-offloading | 2026-11-28 |
| Microsoft Learn — Cloud design patterns catalog | 2026-11-28 |
