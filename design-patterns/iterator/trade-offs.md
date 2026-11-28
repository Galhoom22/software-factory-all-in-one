# Iterator — trade-offs

## Pros

- Clients stay ignorant of storage layout and paging.
- Multiple traversal policies can coexist on one structure.
- Lazy walks keep large exports and cache scans within memory budgets.

## Cons

- Custom Iterator hierarchies add types when native iterables suffice.
- Concurrent mutation of the collection during iteration needs clear rules.
- Random access patterns fit arrays better than cursors.

## Costs

| Cost | Notes |
|------|-------|
| Complexity | Low with generators; higher with full Aggregate/Iterator classes |
| Indirection | One hop through the cursor |
| Performance | Lazy I/O helps; per-item object allocation can hurt hot loops |
| Testability | Easy with fixture collections |

## Common misuse

- Iterator-for-show over a single array.
- Exposing `getInternalList()` “just for the iterator” and letting clients use it anyway.
- Ignoring language protocols (`Traversable`, `Symbol.iterator`) to reinvent them.

## Review checklist

1. Is encapsulation of structure a real force?
2. Native iterable / generator / stream tried first?
3. Client loops use only the iterator surface?
4. Lazy path tested for multi-page / chunked data?
5. Mutation-during-iteration policy stated or avoided?
6. Exit path: collapse to `foreach` when one collection shape remains?
7. Names reveal the walk (`DocumentBlockIterator`), not `Helper`?
