# Command — applicability

## Signals

- The same action must be queued, retried, audited, or undone independently of the caller.
- Multiple entry points must trigger one implementation without duplicating argument packing.
- You need a history of requests (macros, undo stack, outbox).

## Anti-signals

- One synchronous call with no queue, undo, or replay requirement.
- You only need to swap algorithms at runtime — that is Strategy, not a request object.
- Framework jobs / messages already serialize the work unit and you would duplicate their shape.
- “Command” naming for every service method with no invoker/history benefit (pattern-for-show).

## Simpler alternative first

1. Direct method call on the receiver.
2. A plain function or Strategy for interchangeable algorithms.
3. Framework job / queued message (Laravel `ShouldQueue` job, Node worker message) — verify retry, delay, and payload rules before a second Command layer.

Adopt GoF Command when you need invoker/history semantics the job class does not already provide (especially in-process undo for a document editor).

## Framework-native equivalents

| Platform | What already behaves like a Command | Honesty note |
|----------|-------------------------------------|--------------|
| Laravel | Queued Jobs, `Bus::chain`, Artisan commands | A Job *is* a serialized command for async work. Do not wrap every Job in another Command interface unless undo/macros need an in-process model. |
| Node | Bull/Bee-style job payloads; simple `{ type, payload }` handlers | Same: the message *is* the command. EventEmitter is closer to Observer than Command. |
| HTTP | Controller action calling an application service | Enough when sync-only; promote to Job/Command when queue or undo appears. |

Be honest: “we use Laravel jobs” satisfies Command’s *queue* force. It does not automatically give you document-editor undo — that still needs an explicit undoable command or Memento.
