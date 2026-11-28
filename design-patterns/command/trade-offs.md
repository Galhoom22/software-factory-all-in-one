# Command — trade-offs

## Pros

- Invokers stay free of receiver details; actions become portable objects.
- Queue, retry, audit, and undo share one representation of “what to do.”
- Tests inject fake receivers without spinning UI or brokers.

## Cons

- Many small classes if every button becomes a ConcreteCommand.
- Undo needs careful design (or Memento) — `undo()` stubs lie.
- Parallel Command + Job hierarchies duplicate the same payload shape.

## Costs

| Cost | Notes |
|------|-------|
| Complexity | Command types + invoker + receivers |
| Indirection | Stack traces jump through `execute` |
| Performance | Negligible in-process; queue latency dominates async |
| Testability | Strong at the command/receiver seam |

## Common misuse

- Naming every service method a “Command” with no invoker or history.
- Wrapping Laravel Jobs in another Command interface for ceremony.
- Confusing Command with Strategy (see relations).

## Review checklist

1. Is there a real queue / undo / replay / multi-entry force?
2. Was a direct call or Strategy tried first?
3. Does a framework Job already cover the async case?
4. Is the ConcreteCommand thin (bind + delegate)?
5. Fake receiver used in at least one test?
6. Undo either real or omitted — no empty `undo()` for show?
7. Exit path: collapse to Job or direct call when history vanishes?
