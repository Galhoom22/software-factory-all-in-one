# Flyweight — relations

## Confused with

| Other | Deciding question |
|-------|-------------------|
| Ordinary cache / memoization | Are you caching *results of computation*, or *sharing immutable intrinsic state* of many fine-grained objects? |
| [Singleton](../singleton/) | Do you need **one** process-wide instance, or **many shared shards** keyed by intrinsic data? Prefer neither global static — use a scoped pool. |
| [Composite](../composite/) | Is the pain tree structure of parts, or memory of repeated leaf state? |
| [Proxy](../proxy/) | Are you controlling *access/laziness* to a subject, or *sharing* identical intrinsic data? |
| Object pool (reusable mutable workers) | Are instances reset and reused for *capacity*, or shared immutably for *identity of content*? |

## Combines with

- **Composite:** leaf nodes in a document tree often hold flyweight references for style.
- **Factory Method / simple factory:** the pool’s `shared(key)` is a specialized factory.
- **State (careful):** only if “state” objects are immutable and extrinsic context is separate — otherwise do not share.

## Alternatives

- Plain `Map` of frozen value objects at the composition root.
- Framework cache for serialized templates ([`technologies/laravel/`](../../technologies/laravel/)).
- Arrays of scalars / structure-of-arrays for huge canvases ([`technologies/php/`](../../technologies/php/), [`technologies/javascript/`](../../technologies/javascript/)).
- No pattern: one style object injected when diversity is tiny.
