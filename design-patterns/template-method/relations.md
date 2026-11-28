# Template Method — relations

## Confused with

| Other | Deciding question |
|-------|-------------------|
| [Strategy](../strategy/README.md) | Do you replace a **whole algorithm** by injection, or keep a **fixed skeleton** and override steps? Whole algorithm → Strategy. Fixed skeleton → Template Method. |
| [Factory Method](../factory-method/README.md) | Is the deferred step *constructing a product*, or an arbitrary ritual step? Construction hook → Factory Method (often inside a Template Method). |
| Middleware / Chain | Are stages independently composable around a request, or a sealed inheritance skeleton? |

## Combines with

- **Factory Method:** a template step that creates a collaborator.
- **Strategy:** inject strategies into hooks when steps need runtime swap without new subclasses.
- **Observer:** audit hook publishes domain events.

## Alternatives

- Skeleton function with injected hooks (often best).
- Strategy for a single varying block.
- HTTP middleware pipeline for request/response stages.
- State when the “variant” is a lifecycle mode, not a recipe subclass.
