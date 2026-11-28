# Mediator

| | |
|--|--|
| **Family** | Behavioral |
| **Intent** | Route colleague communication through a hub to cut N-to-N coupling. |
| **Also known as** | Intermediary, Controller (UI sense — informal) |

## Summary

Many colleagues (editor panes, notification channels, payment and export services) must coordinate without each importing all others. A Mediator hub owns the interaction rules. Open this folder only after [`07-judgment/design-patterns.md`](../../07-judgment/design-patterns.md) names it. Prefer a small application service or framework events when a full hub would be heavier than the graph it replaces.

## Use when

- Colleague objects form a dense web of direct calls that changes often.
- Interaction rules belong in one place (dialog flow, multi-pane editor, multi-channel notify orchestration).
- Adding a colleague should not force edits to every other colleague.

## Avoid when

- Two objects talking is enough — a direct call or small function wins.
- You only need broadcast “state changed” fan-out — that is Observer / events.
- A god-object Mediator would centralize *all* business logic instead of interaction routing.

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
| https://refactoring.guru/design-patterns/mediator | 2026-11-28 |
| Gamma, Helm, Johnson, Vlissides. *Design Patterns: Elements of Reusable Object-Oriented Software.* Addison-Wesley, 1994. | 2026-11-28 |
