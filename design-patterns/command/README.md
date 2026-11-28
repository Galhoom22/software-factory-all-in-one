# Command

| | |
|--|--|
| **Family** | Behavioral |
| **Intent** | Turn a request into an object so you can queue, log, undo, or retry it. |
| **Also known as** | Action, Transaction (informal) |

## Summary

Package “do this work” as a first-class object: export this file, charge this payment adapter, undo this document edit. Invokers queue or run commands without knowing receivers’ internals. Open this folder only after [`07-judgment/design-patterns.md`](../../07-judgment/design-patterns.md) names it. Prefer framework jobs / queued messages when they already give you the object boundary.

## Use when

- You must queue, schedule, retry, or audit an action separately from the code that decides to run it.
- Undo / redo or macro recording needs a stored representation of past actions.
- The same action must be triggered from UI, API, and a worker with one implementation.

## Avoid when

- Calling a method once is enough — no queue, undo, or replay.
- A plain function (or Strategy) already swaps algorithms without needing an object for history.
- The framework job / message class already *is* your Command and a second hierarchy would duplicate it.

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
| https://refactoring.guru/design-patterns/command | 2026-11-28 |
| Gamma, Helm, Johnson, Vlissides. *Design Patterns: Elements of Reusable Object-Oriented Software.* Addison-Wesley, 1994. | 2026-11-28 |
