# Memento

| | |
|--|--|
| **Family** | Behavioral |
| **Intent** | Capture and restore an object's internal state without breaking encapsulation. |
| **Also known as** | Token / snapshot |

## Summary

A form wizard, checkout draft, or export-job runner needs rollback: restore prior internals without exposing private fields to the UI or caretaker. Memento lets the originator export an opaque snapshot the caretaker stores, then hand it back for restore. Open this folder only after [`07-judgment/design-patterns.md`](../../07-judgment/design-patterns.md) names it. Prefer command objects with inverse actions, framework form state, or bounded event logs when those already give safe rollback.

## Use when

- Undo/redo, draft rollback, or mid-wizard “back” must restore private state.
- State to save is encapsulated and must not leak to the caretaker or UI layer.
- Snapshot history is scoped and bounded (depth limit, session lifetime).

## Avoid when

- A public DTO copy is enough because fields are already part of the API.
- You need full audit/event sourcing — that is a different design.
- Unbounded snapshots would exhaust memory.
- Command/undo stack with explicit inverses already covers the product.

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
| https://refactoring.guru/design-patterns/memento | 2026-11-28 |
| Gamma, Helm, Johnson, Vlissides. *Design Patterns: Elements of Reusable Object-Oriented Software.* Addison-Wesley, 1994. | 2026-11-28 |
