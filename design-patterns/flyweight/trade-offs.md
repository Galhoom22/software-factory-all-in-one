# Flyweight — trade-offs

## Pros

- Cuts memory when intrinsic payloads are heavy and heavily duplicated.
- Keeps drawing/layout APIs honest: extrinsic data stays at the call site.
- Pools make reuse visible and reviewable (one factory, one key scheme).
- Plays well with immutable value objects once the split is clear.

## Cons

- Readers must track two places for “the style”: pool + context.
- Key design is easy to get wrong (too coarse → false sharing; too fine → no reuse).
- Unbounded pools become a leak under open-ended keys.
- Overkill for small canvases — adds ceremony without measured gain.

## Costs

| Cost | Notes |
|------|-------|
| Complexity | Extra factory + context types |
| Indirection | Hot path goes through `shared(key)` |
| Performance | Fewer allocations; possible map-lookup cost vs raw fields |
| Testability | Improves when immutability is enforced; worsen if pool is global |

## Common misuse

- Storing extrinsic fields inside the shared flyweight.
- Using Flyweight as a synonym for “any cache.”
- Sharing mutable objects and calling it Flyweight.
- Introducing a pool before a profiler shows duplication.
- Process-global pools that leak across requests in long-running PHP workers.

## Review checklist

1. Is intrinsic vs extrinsic documented field-by-field?
2. Are flyweights immutable (no setters, frozen, readonly)?
3. Was a plain `Map` / cache tried before a full pattern write-up?
4. Is the pool bounded or cleared with document/request lifetime?
5. Do tests prove same-key identity and no extrinsic leakage?
6. Would columnar arrays or string interning be simpler?
7. Is there an exit path (delete factory) if counts drop?
