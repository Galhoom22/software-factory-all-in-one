# Builder — relations

## Confused with

| Other | Deciding question |
|-------|-------------------|
| [Factory Method](../factory-method/) | Is the pain *which concrete type*, or *how to assemble many parts* of one value? |
| [Abstract Factory](../abstract-factory/) | Do you need a **family of related objects**, or **stepwise construction** of one product? |
| [Prototype](../prototype/) | Is it cheaper to **clone a finished template** than to run the full build recipe again? |
| Fluent options helper | Do you need validation-at-build and/or multiple representations, or only chaining for style? |

## Combines with

- **Composite:** products that are document trees often use Builder to assemble nodes.
- **Factory Method:** `build()` may return through a factory when representation type varies.
- **Memento:** rare — snapshots of builder state mid-wizard; usually overkill.

## Alternatives

- Options object + validator.
- Framework mail/HTTP fluent APIs ([`technologies/laravel/`](../../technologies/laravel/), [`technologies/javascript/`](../../technologies/javascript/)).
- [Prototype](../prototype/) for template cloning in a document editor.
- [Abstract Factory](../abstract-factory/) for provider toolkits.
