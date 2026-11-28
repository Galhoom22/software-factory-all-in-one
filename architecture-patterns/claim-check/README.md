# Claim Check

| | |
|--|--|
| **Family** | Messaging |
| **Intent** | Send a small claim (token) on the bus and store the large payload elsewhere. |
| **Also known as** | Claim-check pattern |
| **WAF pillars (source map)** | Reliability, Security, Cost Optimization, Performance Efficiency |

## Summary

Send a small claim (token) on the bus and store the large payload elsewhere. Open this folder only after [`07-judgment/architecture-patterns.md`](../../07-judgment/architecture-patterns.md) names it. Prefer the simpler alternatives and platform features listed in applicability before inventing new infrastructure. Cloud-agnostic: Azure docs inspired the catalog; implementations use your pinned stack.

## Use when

- Payloads exceed bus limits
- Many consumers should not all receive the bytes
- Need retention separate from message TTL

## Avoid when

- Messages are already small
- Store and bus share one tightly coupled product with no size issue

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
| https://learn.microsoft.com/en-us/azure/architecture/patterns/claim-check | 2026-11-28 |
| Microsoft Learn — Cloud design patterns catalog | 2026-11-28 |
