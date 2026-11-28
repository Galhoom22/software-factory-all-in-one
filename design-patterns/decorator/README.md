# Decorator

| | |
|--|--|
| **Family** | Structural |
| **Intent** | Attach additional behavior to an object dynamically by wrapping it with the same interface. |
| **Also known as** | Wrapper |

## Summary

HTTP handlers, cache stores, and notification senders often need optional extras — logging, compression, retries — without subclass explosion. Decorator wraps a component that shares its interface and forwards calls after/before extra work. Open this folder only after [`07-judgment/design-patterns.md`](../../07-judgment/design-patterns.md) names it. Prefer framework middleware stacks when they already compose that pipeline.

## Use when

- Behavior must be stacked in combinations the client chooses at runtime or composition root.
- Subclassing every mix (`CachedLoggedSender`, …) would explode.
- The wrapped object's public contract stays unchanged.

## Avoid when

- Framework middleware / pipeline already composes the cross-cutting concerns.
- You need to change the interface to match a foreign API ([Adapter](../adapter/README.md)).
- You need access control or lazy init for the *same* interface with a stand-in ([Proxy](../proxy/README.md)) as the primary goal.

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
| https://refactoring.guru/design-patterns/decorator | 2026-11-28 |
| Gamma, Helm, Johnson, Vlissides. *Design Patterns: Elements of Reusable Object-Oriented Software.* Addison-Wesley, 1994. | 2026-11-28 |
