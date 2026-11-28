# Observer

| | |
|--|--|
| **Family** | Behavioral |
| **Intent** | Let many dependents react when one subject’s interesting state changes, without the subject naming those dependents. |
| **Also known as** | Publish-Subscribe (when the channel is named; still the same one-to-many idea) |

## Summary

A subject owns state that several side effects care about — refresh a document preview, invalidate cache entries, enqueue a notification. Observer keeps the subject free of hard-coded fan-out lists: dependents subscribe, the subject notifies. Open this folder only after [`07-judgment/design-patterns.md`](../../07-judgment/design-patterns.md) names it. Prefer Laravel events/Eloquent observers or Node `EventEmitter` when they already remove the pain.

## Use when

- One object’s change must reach an open-ended set of reactions without editing the subject each time a reaction is added.
- Reactions must register and unregister at runtime (feature flags, per-request listeners, plugin hooks).
- Tests need to assert that a change was published without running every real side effect.

## Avoid when

- Only one caller cares about the change and a direct method call is clearer.
- The framework event bus or `EventEmitter` already covers subscribe/notify for this surface.
- You need a guarantee that every listener finished successfully before the subject continues — Observer is usually fire-and-forget unless you add that contract yourself.

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
| https://refactoring.guru/design-patterns/observer | 2026-11-28 |
| Gamma, Helm, Johnson, Vlissides. *Design Patterns: Elements of Reusable Object-Oriented Software.* Addison-Wesley, 1994. | 2026-11-28 |
