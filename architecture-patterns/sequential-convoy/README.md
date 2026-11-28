# Sequential Convoy

| | |
|--|--|
| **Family** | Messaging |
| **Intent** | Process related messages in order for one group without blocking unrelated groups. |
| **Also known as** | Message session / ordered convoy |
| **WAF pillars (source map)** | Reliability |

## Summary

Process related messages in order for one group without blocking unrelated groups. Open this folder only after [`07-judgment/architecture-patterns.md`](../../07-judgment/architecture-patterns.md) names it. Prefer the simpler alternatives and platform features listed in applicability before inventing new infrastructure. Cloud-agnostic: Azure docs inspired the catalog; implementations use your pinned stack.

## Use when

- Per-aggregate command streams
- Session-based processors
- IoT device twin updates

## Avoid when

- No ordering needs
- Single partition bottleneck

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
| https://learn.microsoft.com/en-us/azure/architecture/patterns/sequential-convoy | 2026-11-28 |
| Microsoft Learn — Cloud design patterns catalog | 2026-11-28 |
