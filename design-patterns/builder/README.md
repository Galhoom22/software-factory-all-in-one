# Builder

| | |
|--|--|
| **Family** | Creational |
| **Intent** | Assemble a complex object step by step, keeping construction separate from the final representation. |
| **Also known as** | — |

## Summary

When a value needs many optional parts, ordered steps, or alternate representations (report document, export package, HTTP request with headers/body/auth), Builder gathers those steps behind a clear API and produces the finished object at the end. Open this folder only after [`07-judgment/design-patterns.md`](../../07-judgment/design-patterns.md) names it. Prefer a constructor with defaults, an options object, or a plain fluent helper when the object is still simple.

## Use when

- Construction has multiple steps that can run in different combinations.
- The same construction process should yield different representations (JSON export vs ZIP package).
- Telescoping constructors or huge options bags make call sites unreadable or error-prone.

## Avoid when

- The object has a few fields with sensible defaults — use a constructor or options struct.
- You only want a fluent API for optics; behavior is a single assignment list.
- [Prototype](../prototype/) cloning an existing template already yields the right object cheaper.

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
| https://refactoring.guru/design-patterns/builder | 2026-11-28 |
| Gamma, Helm, Johnson, Vlissides. *Design Patterns: Elements of Reusable Object-Oriented Software.* Addison-Wesley, 1994. | 2026-11-28 |
