# Chain of Responsibility — trade-offs

## Pros

- Sender stays decoupled from which gate handles or rejects a request.
- New gates plug in at the composition root without editing sibling handlers.
- Each handler is a small, independently testable unit.

## Cons

- Debugging “who stopped the request?” needs logging or a trace id across the chain.
- Guaranteeing *exactly one* handler can be awkward if several could claim the request.
- Easy to grow a long opaque pipeline that hides business rules.

## Costs

| Cost | Notes |
|------|-------|
| Complexity | Handler types + wiring at the composition root |
| Indirection | Jump-to-definition hops through `next` / middleware |
| Performance | Usually cheap; watch N I/O-bound gates on hot paths |
| Testability | Improves per gate; integration tests still need the assembled chain |

## Common misuse

- Rebuilding Laravel/Express middleware as a custom Handler tree “for purity.”
- Putting unrelated business logic in every handler so the chain becomes a distributed god object.
- Using a chain when a single Strategy or function would suffice.

## Review checklist

1. Problem named as ordered optional gates / short-circuit?
2. Function list or framework middleware tried first?
3. Composition root owns order — handlers do not construct siblings?
4. Short-circuit and success paths tested?
5. No product-specific names leaked into forever-generic sketches?
6. Exit path: collapse to middleware or a pipe of functions when custom types stop earning keep?
7. Names reveal the gate (`AuthHandler`), not `Helper` / `Manager`?
