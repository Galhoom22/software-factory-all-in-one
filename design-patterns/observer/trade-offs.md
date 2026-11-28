# Observer — trade-offs

## Pros

- Subject stays free of concrete reaction types.
- New reactions register without editing the core mutator.
- Runtime attach/detach supports plugins and per-request hooks.
- Tests can record notifications at a single seam.

## Cons

- Update order is easy to get wrong; observers may depend on each other accidentally.
- Cascading notifies can cause surprising re-entrancy.
- Debugging “who reacted?” needs logging or a bus with introspection.
- Pushing rich payloads couples observers to subject internals.

## Costs

| Cost | Notes |
|------|-------|
| Complexity | Subscription list + lifecycle rules |
| Indirection | Harder to see all effects of a write |
| Performance | O(n) notify; fine until n is large or work is heavy — then queue |
| Testability | Improves with recording observers; worsens if notify is hidden |

## Common misuse

- Using Observer as a global event soup with no named events or ownership.
- Notifying before the state write is durable (listeners see lies).
- Observers that mutate the subject and re-enter `notify` without a guard.
- Reimplementing Laravel’s dispatcher or Node `EventEmitter` for no isolation reason.

## Review checklist

1. Is fan-out real (multiple independent reactions), not one call dressed up?
2. Was a direct call or framework event bus tried first?
3. Does notify run only after successful state change?
4. Is the observer interface narrow (event or subject query), not a kitchen sink?
5. Is there a test that proves notification without real I/O?
6. Are detach / unsubscribe paths defined where leaks matter?
7. Would middleware or a job queue be the honest place for heavy work?
