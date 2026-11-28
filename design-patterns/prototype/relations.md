# Prototype — relations

## Confused with

| Other | Deciding question |
|-------|-------------------|
| [Builder](../builder/) | Do you **clone a finished template**, or **run a multi-step recipe** that may not have a master instance? |
| [Factory Method](../factory-method/) | Does the example instance *carry* what to create, or does a creator method decide the type? |
| Flyweight | Are you sharing **immutable intrinsic state** across many contexts, or **copying** a template into independent instances? |
| Cache store | Is the goal reuse of *computed results* with eviction, or *spawn independent editable copies*? |

## Combines with

- **Registry / map:** named prototypes for a document editor gallery.
- **Memento:** sometimes stores snapshots that can be cloned into restore points — keep the concerns separate.
- **Composite:** document trees clone recursively.

## Alternatives

- [Builder](../builder/) when assembly steps matter more than a master copy.
- Language `structuredClone` / `clone` for plain values ([`technologies/javascript/`](../../technologies/javascript/), [`technologies/php/`](../../technologies/php/)).
- Laravel mail/view templates or Eloquent `replicate()` when those already match the need ([`technologies/laravel/`](../../technologies/laravel/)).
- Factory function returning fresh DTOs.
