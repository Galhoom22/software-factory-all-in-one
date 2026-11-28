# Chain of Responsibility

| | |
|--|--|
| **Family** | Behavioral |
| **Intent** | Pass a request along a handler pipeline until one (or each) handles it. |
| **Also known as** | Chain of Command (loosely; prefer the GoF name) |

## Summary

A request needs ordered, replaceable processing steps — auth check, rate limit, payload sanitize, then the real action. Chain of Responsibility links handlers so the sender never hard-wires who runs next. Open this folder only after [`07-judgment/design-patterns.md`](../../07-judgment/design-patterns.md) names it. Prefer framework middleware or a plain function pipeline when that already removes the pain.

## Use when

- Several independent handlers may process, enrich, or short-circuit the same request.
- Handler order matters and must stay configurable without editing the sender.
- New handlers should plug in without rewriting existing handlers’ bodies.

## Avoid when

- A single function or fixed two-step call already covers every case on the product horizon.
- Every request must run *all* steps and you only need wrapping (see Decorator) rather than “who handles.”
- The platform’s middleware / pipeline API already owns ordering and short-circuit rules.

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
| https://refactoring.guru/design-patterns/chain-of-responsibility | 2026-11-28 |
| Gamma, Helm, Johnson, Vlissides. *Design Patterns: Elements of Reusable Object-Oriented Software.* Addison-Wesley, 1994. | 2026-11-28 |
