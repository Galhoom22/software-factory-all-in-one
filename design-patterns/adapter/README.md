# Adapter

| | |
|--|--|
| **Family** | Structural |
| **Intent** | Translate one interface into another so existing clients can use a foreign collaborator without changing their call sites. |
| **Also known as** | Wrapper |

## Summary

A payment checkout, notification dispatcher, or export pipeline already speaks a stable port. A third-party SDK speaks a different shape. Adapter is a thin translator between those two shapes. Open this folder only after [`07-judgment/design-patterns.md`](../../07-judgment/design-patterns.md) names it. Prefer a one-line mapping function or the framework's HTTP client wrapper when that already removes the pain.

## Use when

- Client code owns a useful interface you will not rewrite, and a foreign API does not match it.
- Several call sites would otherwise grow `if (provider === …)` conversion branches.
- You must swap or add a provider without teaching every caller its raw SDK types.

## Avoid when

- You control both sides and can rename the foreign API to match the port once.
- The "mismatch" is one field rename that a mapper function handles in place.
- You are building a whole subsystem façade (see [Facade](../facade/README.md)), not a shape translator.

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
| https://refactoring.guru/design-patterns/adapter | 2026-11-28 |
| Gamma, Helm, Johnson, Vlissides. *Design Patterns: Elements of Reusable Object-Oriented Software.* Addison-Wesley, 1994. | 2026-11-28 |
