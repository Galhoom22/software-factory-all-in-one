# Memento — relations

## Confused with

| Other | Deciding question |
|-------|-------------------|
| Command (with undo) | Do you store **state snapshots**, or **operations with inverses**? Prefer Command when each edit inverts cleanly. |
| Event sourcing | Do you need a **durable audit of changes**, or an **opaque rollback token** for a live object? |
| Serialization / DTO copy | Is the consumer allowed to **read every field**, or must fields stay **private** to the originator? |
| [Prototype](../prototype/) | Are you cloning to create a **new independent object**, or snapshotting to **restore the same instance** later? |
| [State](../state/) | Are you swapping **behavior modes**, or saving/restoring **data**? |

## Combines with

- **Command:** caretaker may store commands *or* mementos; avoid storing both for the same edit without a clear rule.
- **Iterator:** rarely — do not expose memento collections as traversable field bags.
- **Persistence adapter:** sealed mementos written to a job store for export resume.

## Alternatives

- Command stack with `undo()` per edit.
- Framework session / form step state ([`technologies/laravel/`](../../technologies/laravel/)).
- Immutable UI state + patches ([`technologies/javascript/`](../../technologies/javascript/)).
- Event log + rebuild when compliance requires history of changes.
- No pattern: single “Cancel” that discards the in-memory draft without history.
