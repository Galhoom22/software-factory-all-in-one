# Flyweight

| | |
|--|--|
| **Family** | Structural |
| **Intent** | Share fine-grained immutable intrinsic state across many similar objects. |
| **Also known as** | Cache of immutable shards |

## Summary

A document canvas, notification template renderer, or export layout may instantiate thousands of nearly identical style, glyph, or token objects. Flyweight keeps the heavy immutable bits in a shared pool and leaves only per-use extrinsic data (position, selection, locale overlay) outside. Open this folder only after [`07-judgment/design-patterns.md`](../../07-judgment/design-patterns.md) names it. Prefer a plain map/cache of immutable values, or the platform’s existing cache store, when that already removes the duplicate payloads.

## Use when

- Huge numbers of similar objects differ mainly by position, selection, or call-site context.
- Intrinsic state is immutable and identical across many uses.
- Memory pressure is measured (profiler / heap snapshot), not imagined.

## Avoid when

- Object counts are small — clarity beats sharing.
- “Shared” state must mutate per user or per request — that is not Flyweight.
- A normal cache of DTOs or interned strings already solves reuse.
- The team wants a pattern name without a measured duplication problem.

## File map

| File | Contents |
|------|----------|
| [`problem-solution.md`](problem-solution.md) | Problem, forces, naive fail, solution, analogy, Mermaid |
| [`applicability.md`](applicability.md) | Signals, anti-signals, simpler alternative, framework-native |
| [`implementation.md`](implementation.md) | Steps, pseudocode, TS + PHP sketches, tests, refactor paths |
| [`trade-offs.md`](trade-offs.md) | Pros, cons, costs, misuse, checklist |
| [`relations.md`](relations.md) | Confused-with, combines-with, alternatives |

## Sources

| Source | Checked |
|--------|---------|
| https://refactoring.guru/design-patterns/flyweight | 2026-11-28 |
| Gamma, Helm, Johnson, Vlissides. *Design Patterns: Elements of Reusable Object-Oriented Software.* Addison-Wesley, 1994. | 2026-11-28 |
