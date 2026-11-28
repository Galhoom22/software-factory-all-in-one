# Command — relations

## Confused with

| Other | Deciding question |
|-------|-------------------|
| [Strategy](../strategy/README.md) | Are you packaging a *request to perform later* (queue, undo, audit), or *swapping how a step computes a result right now*? If the object’s job is to be stored/replayed, choose Command. If the object’s job is to be selected as the current algorithm, choose Strategy. |
| [Memento](../memento/README.md) | Do you store *what to do* (action + args) or *what the state was* (opaque snapshot)? Undo via reverse actions → Command; undo via restore snapshot → Memento (often together). |
| Application service / use-case class | Is there an Invoker and optional history, or just a named method? A use-case without queue/undo is not Command. |

## Combines with

- **Memento:** Command executes; Memento captures document state for reliable undo.
- **Composite:** macro commands that run a list of child commands.
- **Chain of Responsibility:** a handler enqueues a Command instead of doing I/O inline.

## Alternatives

- Direct receiver call (simplest).
- Strategy for interchangeable algorithms without history.
- Framework Job / message as the sole command shape for async work.
- No pattern when a single sync function suffices.
