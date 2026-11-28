# Template Method

| | |
|--|--|
| **Family** | Behavioral |
| **Intent** | Fix an algorithm’s skeleton in one place and let subclasses (or hooks) fill in selected steps. |
| **Also known as** | — |

## Summary

File export, notification delivery, and HTTP-adjacent pipelines often share the same ordered steps with a few variable parts. Template Method owns the order once and defers those parts. Open this folder only after [`07-judgment/design-patterns.md`](../../07-judgment/design-patterns.md) names it. Prefer Strategy (composition) or middleware pipelines when inheritance would only add noise.

## Use when

- Several flows share the same step order and invariants, differing only in named steps.
- Changing the order in one place must update every variant.
- Subclasses should not be allowed to skip mandatory steps (validation, audit).

## Avoid when

- Variants need different step orders — that is not a shared skeleton.
- You only need to swap one whole policy — Strategy or a function is enough.
- Inheritance is unavailable or unwanted; use a skeleton function with injected hooks instead.

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
| https://refactoring.guru/design-patterns/template-method | 2026-11-28 |
| Gamma, Helm, Johnson, Vlissides. *Design Patterns: Elements of Reusable Object-Oriented Software.* Addison-Wesley, 1994. | 2026-11-28 |
