# Iterator — applicability

## Signals

- Clients must traverse without knowing storage layout (array vs tree vs paged query).
- More than one traversal style is required over the same structure.
- Lazy / streaming access is required for volume (export, cache scan).

## Anti-signals

- A single in-memory list with `foreach` forever.
- Building a custom Iterator class around one array “for OOP completeness.”
- The platform already gives `Iterable`, generators, or streams that meet the need.
- You actually need random access by index — a cursor that only walks forward will fight you.

## Simpler alternative first

1. Native `for…of` / `foreach` over an array or `Traversable`.
2. A generator / `yield` function that hides paging.
3. Framework/ORM cursors or Node streams for large exports.

Only add a GoF-shaped Iterator hierarchy when multiple collection types or traversal policies must share one client loop and native protocols are not enough.

## Framework-native equivalents

| Platform | What already behaves like an Iterator | Honesty note |
|----------|---------------------------------------|--------------|
| PHP / Laravel | `Iterator`, `IteratorAggregate`, generators; Eloquent `lazy()` / `cursor()` | Prefer these. A custom Aggregate interface is rarely needed on top of `Traversable`. |
| Node | `Symbol.iterator`, async iterators, `Readable` streams | Streams cover file export pipelines; do not invent a parallel cursor API without a reason. |
| Both | Language `map`/`filter` on small collections | Enough when data already fits in memory. |

Honest claim: Iterator is already baked into modern languages. The pack matters when you design *collection types* that must expose controlled traversal — not when wrapping `string[]`.
