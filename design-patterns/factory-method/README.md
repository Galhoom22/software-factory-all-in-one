# Factory Method

| | |
|--|--|
| **Family** | Creational |
| **Intent** | Defer the choice of which concrete product to construct to a replaceable creator hook. |
| **Also known as** | Virtual Constructor |

## Summary

A stable workflow needs *some* product that shares a contract (a notification sender, an export writer, a cache store). The workflow must not hard-code `new ConcreteThing`. Factory Method isolates that construction decision in one overridable step. Open this folder only after [`07-judgment/design-patterns.md`](../../07-judgment/design-patterns.md) names it. Prefer a plain function, map, or the framework container when that already solves the pain.

## Use when

- A shared algorithm (dispatch, export, persist) must stay fixed while the concrete collaborator changes by product line, tenant, or environment.
- Adding a new product type should not force edits inside every workflow that consumes the product.
- Tests need a seam that returns a fake product without rewriting the workflow body.

## Avoid when

- Only one concrete product exists for the foreseeable product horizon.
- A lookup table from config key → instance already covers every variant.
- The framework container or a service provider already binds the interface to the right implementation.

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
| https://refactoring.guru/design-patterns/factory-method | 2026-11-28 |
| Gamma, Helm, Johnson, Vlissides. *Design Patterns: Elements of Reusable Object-Oriented Software.* Addison-Wesley, 1994. | 2026-11-28 |
