# Prototype

| | |
|--|--|
| **Family** | Creational |
| **Intent** | Copy a configured instance without depending on its concrete class. |
| **Also known as** | Clone |

## Summary

When building the same document-editor preset or cache entry shape repeatedly is expensive or leaks private fields, let the object clone itself through a shared contract. Open this folder only after [`07-judgment/design-patterns.md`](../../07-judgment/design-patterns.md) names it. Prefer structured clone, a copy helper, or a plain factory with public fields when the type is known and simple.

## Use when

- Clients receive values only through an interface but must duplicate them.
- Many presets differ only by field configuration, not by behavior subclasses.
- Construction needs private state the caller cannot read.

## Avoid when

- A plain object literal or factory with public fields is enough.
- Deep graphs with cycles make cloning unsafe without a dedicated plan.
- You only need undo history — consider Memento instead.

## File map

| File | Contents |
|------|----------|
| [`problem-solution.md`](problem-solution.md) | Problem, forces, solution, analogy, structure |
| [`applicability.md`](applicability.md) | Signals, anti-signals, simpler alternative, framework-native |
| [`implementation.md`](implementation.md) | Steps, pseudocode, TS/PHP sketches, tests, refactor paths |
| [`trade-offs.md`](trade-offs.md) | Pros, cons, costs, misuse, review checklist |
| [`relations.md`](relations.md) | Confused-with, combines-with, alternatives |

## Sources

| Source | Checked |
|--------|---------|
| https://refactoring.guru/design-patterns/prototype | 2026-11-28 |
| Gamma, Helm, Johnson, Vlissides. *Design Patterns: Elements of Reusable Object-Oriented Software.* Addison-Wesley, 1994. | 2026-11-28 |

