# Valet Key

| | |
|--|--|
| **Family** | Security / data access |
| **Intent** | Issue a restricted time-bound token so clients upload/download directly to a resource. |
| **Also known as** | Pre-signed URL / SAS |
| **WAF pillars (source map)** | Security, Cost Optimization, Performance Efficiency |

## Summary

Issue a restricted time-bound token so clients upload/download directly to a resource. Open this folder only after [`07-judgment/architecture-patterns.md`](../../07-judgment/architecture-patterns.md) names it. Prefer the simpler alternatives and platform features listed in applicability before inventing new infrastructure. Cloud-agnostic: Azure docs inspired the catalog; implementations use your pinned stack.

## Use when

- Uploads/downloads
- CDN private objects
- Reduce app egress

## Avoid when

- Tiny files where proxy is fine
- Tokens without scope/expiry

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
| https://learn.microsoft.com/en-us/azure/architecture/patterns/valet-key | 2026-11-28 |
| Microsoft Learn — Cloud design patterns catalog | 2026-11-28 |
