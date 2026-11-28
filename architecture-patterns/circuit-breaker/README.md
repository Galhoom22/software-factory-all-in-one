# Circuit Breaker

| | |
|--|--|
| **Family** | Resilience |
| **Intent** | Stop calling a failing dependency for a cool-down so the system fails fast and recovers. |
| **Also known as** | — |
| **WAF pillars (source map)** | Reliability, Performance Efficiency |

## Summary

Stop calling a failing dependency for a cool-down so the system fails fast and recovers. Open this folder only after [`07-judgment/architecture-patterns.md`](../../07-judgment/architecture-patterns.md) names it. Prefer the simpler alternatives and platform features listed in applicability before inventing new infrastructure. Cloud-agnostic: Azure docs inspired the catalog; implementations use your pinned stack.

## Use when

- Remote dependencies with cascading risk
- Fail-fast UX is better than hanging
- You have a fallback or degraded mode

## Avoid when

- Local in-process calls
- Failures are always transient and Retry alone is enough
- Breaker hides systemic bugs without alerts

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
| https://learn.microsoft.com/en-us/azure/architecture/patterns/circuit-breaker | 2026-11-28 |
| Microsoft Learn — Cloud design patterns catalog | 2026-11-28 |
