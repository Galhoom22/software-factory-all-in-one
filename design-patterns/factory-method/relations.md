# Factory Method — relations

## Confused with

| Other | Deciding question |
|-------|-------------------|
| [Abstract Factory](../abstract-factory/) | Do you need **one** product for a workflow, or a **matching set** of products that must stay consistent together? |
| [Builder](../builder/) | Is the pain *which type* to construct, or *how to assemble many optional parts* of one object? |
| Simple factory function / map | Do you need subclassing (or a hook owned by the algorithm), or just a lookup at the composition root? |
| Strategy | Are you swapping an *algorithm step*, or swapping *what gets constructed* before a fixed algorithm runs? |

## Combines with

- **Template Method:** the creator’s `run` is often a template; `createProduct` is the hook step.
- **Strategy:** after construction, the product may itself be a strategy object.
- **Dependency injection:** concrete creators are often resolved once by the container, then reused.

## Alternatives

- No pattern: inject `Notifier` directly.
- Framework container binding ([`technologies/laravel/`](../../technologies/laravel/)).
- Plain factory function or registry map ([`technologies/javascript/`](../../technologies/javascript/)).
- [Abstract Factory](../abstract-factory/) when families of related products must be created together.
- [Builder](../builder/) when one product needs stepwise assembly with many optional fields.
