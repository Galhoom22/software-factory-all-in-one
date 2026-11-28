# Retry

| | |
|--|--|
| **Family** | Resilience |
| **Intent** | Re-attempt operations that fail from transient faults, with backoff and limits. |
| **Also known as** | Transient fault handling |
| **WAF pillars (source map)** | Reliability |

## Summary

Re-attempt operations that fail from transient faults, with backoff and limits. Open this folder only after [`07-judgment/architecture-patterns.md`](../../07-judgment/architecture-patterns.md) names it. Prefer the simpler alternatives and platform features listed in applicability before inventing new infrastructure. Cloud-agnostic: Azure docs inspired the catalog; implementations use your pinned stack.

## Use when

- HTTP 429/503
- Deadlocks
- Brief network glitches

## Avoid when

- Logic bugs
- Non-idempotent posts without keys
- Retry without Circuit Breaker on persistent fail

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
| https://learn.microsoft.com/en-us/azure/architecture/patterns/retry | 2026-11-28 |
| Microsoft Learn — Cloud design patterns catalog | 2026-11-28 |
