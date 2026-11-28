# Federated Identity

| | |
|--|--|
| **Family** | Security / identity |
| **Intent** | Delegate authentication to an external identity provider; app consumes claims. |
| **Also known as** | Federation / external IdP |
| **WAF pillars (source map)** | Reliability, Security, Performance Efficiency |

## Summary

Delegate authentication to an external identity provider; app consumes claims. Open this folder only after [`07-judgment/architecture-patterns.md`](../../07-judgment/architecture-patterns.md) names it. Prefer the simpler alternatives and platform features listed in applicability before inventing new infrastructure. Cloud-agnostic: Azure docs inspired the catalog; implementations use your pinned stack.

## Use when

- Enterprise SSO
- Social login
- Multiple apps one identity

## Avoid when

- Offline device with no IdP reachability plan
- Over-federating for a tiny internal tool with platform auth already

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
| https://learn.microsoft.com/en-us/azure/architecture/patterns/federated-identity | 2026-11-28 |
| Microsoft Learn — Cloud design patterns catalog | 2026-11-28 |
