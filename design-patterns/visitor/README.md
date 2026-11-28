# Visitor

| | |
|--|--|
| **Family** | Behavioral |
| **Intent** | Add operations over an object structure without changing the element types. |
| **Also known as** | Double dispatch |

## Summary

A document outline, export AST, or notification template tree stays stable while new operations keep appearing (lint, metrics, serialize, accessibility scan). Visitor moves each operation into its own visitor type; elements only expose a narrow `accept`. Open this folder only after [`07-judgment/design-patterns.md`](../../07-judgment/design-patterns.md) names it. Prefer plain functions over a closed set of variants, pattern matching, or Iterator + external helpers when the structure still changes often.

## Use when

- Object structure is stable; operations change more often than element types.
- Element classes must stay free of every new algorithm’s dependencies.
- You need typed per-element behavior without a growing `switch` on type tags in one module.

## Avoid when

- Structure changes more often than operations — every new element breaks all visitors.
- A simple Iterator plus functions is enough.
- Language pattern matching / algebraic data types already cover variants cleanly.
- You only have one operation forever — put it on the elements.

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
| https://refactoring.guru/design-patterns/visitor | 2026-11-28 |
| Gamma, Helm, Johnson, Vlissides. *Design Patterns: Elements of Reusable Object-Oriented Software.* Addison-Wesley, 1994. | 2026-11-28 |
