# Bridge

| | |
|--|--|
| **Family** | Structural |
| **Intent** | Split a lasting abstraction from its replaceable implementations so each hierarchy can grow without multiplying subclasses. |
| **Also known as** | Handle/Body |

## Summary

Notification *kinds* (alert, digest, receipt) and delivery *channels* (email, push, webhook) both change. Bridge keeps those two axes independent: high-level operations depend on a channel implementor, not on a matrix of subclasses. Open this folder only after [`07-judgment/design-patterns.md`](../../07-judgment/design-patterns.md) names it. Prefer Strategy or a plain channel interface when only one axis varies.

## Use when

- Two independent dimensions of variation would otherwise explode into `AlertEmail`, `AlertPush`, `DigestEmail`, …
- Abstraction-level APIs (compose message, schedule, retry) must stay stable while transport changes.
- Teams or modules own the "what" and the "how" separately.

## Avoid when

- Only the channel (or only the message kind) varies — use Strategy or a map.
- You merely need to wrap one foreign SDK once ([Adapter](../adapter/README.md)).
- A single concrete pipeline is enough for the product horizon.

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
| https://refactoring.guru/design-patterns/bridge | 2026-11-28 |
| Gamma, Helm, Johnson, Vlissides. *Design Patterns: Elements of Reusable Object-Oriented Software.* Addison-Wesley, 1994. | 2026-11-28 |
