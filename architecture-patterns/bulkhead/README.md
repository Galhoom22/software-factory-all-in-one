# Bulkhead

| | |
|--|--|
| **Family** | Resilience |
| **Intent** | Isolate resource pools so failure or saturation in one compartment does not sink the rest. |
| **Also known as** | Partition isolation |
| **WAF pillars (source map)** | Reliability, Security, Performance Efficiency |

## Summary

Isolate resource pools so failure or saturation in one compartment does not sink the rest. Open this folder only after [`07-judgment/architecture-patterns.md`](../../07-judgment/architecture-patterns.md) names it. Prefer the simpler alternatives and platform features listed in applicability before inventing new infrastructure. Cloud-agnostic: Azure docs inspired the catalog; implementations use your pinned stack.

## Use when

- Multi-tenant noisy neighbors
- Critical checkout must survive search outages
- Separate connection pools per dependency

## Avoid when

- Traffic is tiny and shared pools are fine
- Isolation cost exceeds blast-radius risk
- Circuit Breaker alone already sheds load

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
| https://learn.microsoft.com/en-us/azure/architecture/patterns/bulkhead | 2026-11-28 |
| Microsoft Learn — Cloud design patterns catalog | 2026-11-28 |
