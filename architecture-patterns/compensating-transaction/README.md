# Compensating Transaction

| | |
|--|--|
| **Family** | Consistency |
| **Intent** | Undo or neutralize prior steps when a multi-step distributed operation fails midway. |
| **Also known as** | Compensation |
| **WAF pillars (source map)** | Reliability |

## Summary

Undo or neutralize prior steps when a multi-step distributed operation fails midway. Open this folder only after [`07-judgment/architecture-patterns.md`](../../07-judgment/architecture-patterns.md) names it. Prefer the simpler alternatives and platform features listed in applicability before inventing new infrastructure. Cloud-agnostic: Azure docs inspired the catalog; implementations use your pinned stack.

## Use when

- Saga steps across services
- Money movement with reversible holds
- Eventually consistent workflows

## Avoid when

- Single-database transaction is enough
- Steps are not safely reversible — redesign
- Compensation is more dangerous than accepting the partial state with alerts

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
| https://learn.microsoft.com/en-us/azure/architecture/patterns/compensating-transaction | 2026-11-28 |
| Microsoft Learn — Cloud design patterns catalog | 2026-11-28 |
