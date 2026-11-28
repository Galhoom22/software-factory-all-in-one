# State

| | |
|--|--|
| **Family** | Behavioral |
| **Intent** | Move state-specific behavior into objects so a context can change behavior when its mode changes. |
| **Also known as** | Objects for States |

## Summary

A context object (payment intent, document lock, cache entry lifecycle) behaves differently in each mode. State puts each mode’s rules in its own type and lets the context delegate. Open this folder only after [`07-judgment/design-patterns.md`](../../07-judgment/design-patterns.md) names it. Prefer a plain enum + small functions, or a workflow/state-machine library, when that already removes the pain.

## Use when

- The same public operations mean different things depending on an explicit lifecycle mode.
- Mode-specific rules are branching into large `switch`/`if` trees that edit the same methods every time a mode is added.
- Transitions themselves need clear ownership (which modes may follow which).

## Avoid when

- There are only one or two modes with trivial branches.
- Modes do not change *behavior* — they only label data for display.
- Strategy fits better: the algorithm is chosen by the caller, not by the object’s internal lifecycle.

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
| https://refactoring.guru/design-patterns/state | 2026-11-28 |
| Gamma, Helm, Johnson, Vlissides. *Design Patterns: Elements of Reusable Object-Oriented Software.* Addison-Wesley, 1994. | 2026-11-28 |
