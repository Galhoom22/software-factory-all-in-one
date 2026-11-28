# Memento — applicability

## Signals

- Undo/back must restore private fields the UI should never display.
- Deep-copying public props loses internal cursors, caches, or eligibility flags.
- Multiple modules started reading “just one more” private field to implement rollback.
- Export or payment drafts need checkpoints with a hard history limit.

## Anti-signals

- All meaningful state is already a public DTO — a plain copy/stack suffices.
- You need a durable audit log of every change for compliance — prefer events.
- History would be unbounded (every keystroke forever) without a product decision on depth.
- Command objects with explicit `undo()` already invert each action cleanly.
- Framework form libraries already snapshot field values for the wizard you are building.

## Simpler alternative first

1. **Command with inverse** — store operations, not state, when each edit has a clear undo.
2. **Public immutable snapshot DTO** — when nothing private must be hidden.
3. **Framework form/wizard state** — session-backed step data without a custom memento type.
4. **Bounded event list** — rebuild state by replay when auditability matters more than opacity.

Adopt Memento when encapsulation of the originator is the non-negotiable force.

## Framework-native equivalents

| Platform | Prefer this first | Why it often replaces Memento |
|----------|-------------------|--------------------------------|
| Laravel | Session flash / validated form requests; job middleware + stored job payload versions | Do not invent Memento for HTTP form “back” if session step data already holds the public fields ([`technologies/laravel/`](../../technologies/laravel/)). |
| PHP | Value objects + explicit snapshot methods returning opaque classes in the same package | Keep memento classes package-private where the language allows ([`technologies/php/`](../../technologies/php/)). |
| Node / JavaScript | Immutable state trees (copy-on-write) for UI; redo stacks of patches | For UI-only state, an immutable store often beats classical Memento. Reserve Memento for domain objects with true private fields ([`technologies/javascript/`](../../technologies/javascript/)). |

Verified claim (conceptual): Memento earns its keep when the caretaker must be forbidden from reading internals — if the caretaker already owns all fields, you have a plain history stack, not Memento.
