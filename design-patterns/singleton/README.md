# Singleton

| | |
|--|--|
| **Family** | Creational |
| **Intent** | Ensure a class has only one instance and provide a global access point to it. |
| **Also known as** | — |

## Summary

**Singleton is usually the wrong default.** Modern applications already have a composition root — Laravel’s service container, a Node bootstrap module, a PHP entrypoint — that can bind one instance and inject it. Hand-rolled `getInstance()` hides dependencies, freezes tests, and creates process-wide mutable state. Open this folder only after [`07-judgment/design-patterns.md`](../../07-judgment/design-patterns.md) names it *and* you have rejected container-scoped injection. Prefer explicit injection of a single shared instance.

## Use when

- A rare runtime constraint truly requires one instance *and* the framework cannot own that lifetime (legacy embed, constrained extension host).
- You are documenting an existing Singleton you must shrink or remove.
- A process-wide identity gate is mandated by a low-level driver API you do not control — still wrap it behind an injected port.

## Avoid when

- You want “easy global access” to a cache, logger, config, or DB handle — **use the container / explicit injection instead.**
- Tests need per-test doubles — Singleton fights that.
- Request-scoped or tenant-scoped state is involved (one instance per process is the wrong lifetime).
- Any alternative in [`applicability.md`](applicability.md) still works.

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
| https://refactoring.guru/design-patterns/singleton | 2026-11-28 |
| Gamma, Helm, Johnson, Vlissides. *Design Patterns: Elements of Reusable Object-Oriented Software.* Addison-Wesley, 1994. | 2026-11-28 |
