# External Configuration Store

| | |
|--|--|
| **Family** | Ops |
| **Intent** | Keep configuration outside the deploy package so settings change without rebuilds. |
| **Also known as** | Externalized config |
| **WAF pillars (source map)** | Operational Excellence |

## Summary

Keep configuration outside the deploy package so settings change without rebuilds. Open this folder only after [`07-judgment/architecture-patterns.md`](../../07-judgment/architecture-patterns.md) names it. Prefer the simpler alternatives and platform features listed in applicability before inventing new infrastructure. Cloud-agnostic: Azure docs inspired the catalog; implementations use your pinned stack.

## Use when

- Feature flags / dynamic limits
- Many environments
- Secrets must not sit in images

## Avoid when

- Truly static build-time constants
- Store becomes an undocumented second database of business rules

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
| https://learn.microsoft.com/en-us/azure/architecture/patterns/external-configuration-store | 2026-11-28 |
| Microsoft Learn — Cloud design patterns catalog | 2026-11-28 |
