# Idempotent Consumer

| | |
|--|--|
| **Family** | Messaging / reliability |
| **Intent** | Process the same message multiple times with the same effect as once. |
| **Also known as** | Idempotent receiver |
| **WAF pillars (source map)** | Reliability |

## Summary

Process the same message multiple times with the same effect as once. Open this folder only after [`07-judgment/architecture-patterns.md`](../../07-judgment/architecture-patterns.md) names it. Prefer the simpler alternatives and platform features listed in applicability before inventing new infrastructure. Cloud-agnostic: Azure docs inspired the catalog; implementations use your pinned stack.

## Use when

- Queues with at-least-once
- Payment webhooks
- Retries across Crash

## Avoid when

- Operations already naturally idempotent and cheap
- Exactly-once platform guarantee you truly have

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
| https://learn.microsoft.com/en-us/azure/architecture/patterns/idempotent-consumer | 2026-11-28 |
| Microsoft Learn — Cloud design patterns catalog | 2026-11-28 |
