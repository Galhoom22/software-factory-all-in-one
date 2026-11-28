# Iterator

| | |
|--|--|
| **Family** | Behavioral |
| **Intent** | Traverse a collection without exposing its internal structure. |
| **Also known as** | Cursor |

## Summary

Clients need “next item” over export rows, cache keys, or document blocks without caring whether storage is an array, tree, or lazy query. Iterator hides that structure behind a uniform cursor. Open this folder only after [`07-judgment/design-patterns.md`](../../07-judgment/design-patterns.md) names it. Prefer language `for…of` / `foreach` and native iterators or streams before inventing a custom cursor hierarchy.

## Use when

- Multiple traversal styles (forward, filtered, nested) must work without leaking storage layout.
- The same client code must walk different collection implementations.
- You need lazy traversal (large file export, paged cache scan) without loading everything.

## Avoid when

- A simple array/`foreach` is the only access pattern forever.
- The language or framework already exposes `Iterable` / `IteratorAggregate` / async iterables you can use directly.
- You are inventing Iterator to wrap one array with no alternate structure.

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
| https://refactoring.guru/design-patterns/iterator | 2026-11-28 |
| Gamma, Helm, Johnson, Vlissides. *Design Patterns: Elements of Reusable Object-Oriented Software.* Addison-Wesley, 1994. | 2026-11-28 |
