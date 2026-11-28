# Singleton — trade-offs

## Pros

- Guarantees one instance when no container exists (rare greenfield today).
- Simple to explain as a literacy concept.
- Can wrap stubborn external drivers that forbid multiple instances.

## Cons

- **Global mutable state** and hidden dependencies.
- Hard to test, mock, and parallelize.
- Wrong lifetime for request/tenant scopes.
- Duplicates what frameworks already provide.
- Encourages procedural “reach in from anywhere” design.
- Long-running PHP/Node workers keep stale state across jobs unless carefully reset.

## Costs

| Cost | Notes |
|------|-------|
| Complexity | Low syntax cost; high coupling cost |
| Lifetime bugs | State survives across jobs/requests in workers |
| Performance | Irrelevant vs the design damage |
| Testability | Poor unless reset hooks exist (smell) |

## Common misuse

- Default pattern for cache, logger, DB, config, “managers.”
- Singleton + [Abstract Factory](../abstract-factory/) “toolkit holder.”
- Multiton maps of Singletons pretending to be a container.
- Using Singleton to skip learning the framework’s DI.
- Storing request/tenant data on a process Singleton.

## Review checklist

1. Was the framework container / composition root tried first?
2. Can the collaborator be constructor-injected instead?
3. Is the lifetime truly process-wide and safe for workers?
4. Can tests bind a fake without static reset hooks?
5. Are new call sites forbidden from using `getInstance()`?
6. Is there a deletion plan for any classical Singleton left?
7. Would a scoped binding (request/tenant) be more correct?
