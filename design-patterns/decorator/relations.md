# Decorator — relations

## Confused with

| Other | Deciding question |
|-------|-------------------|
| [Proxy](../proxy/README.md) | Is the wrapper's primary job *adding optional behavior*, or *controlling access / lifetime / location* of the real subject? |
| [Adapter](../adapter/README.md) | Does the wrapper keep the *same* interface, or translate to a *different* one? |
| [Composite](../composite/README.md) | Is structure a *linear wrap* of one child, or a *tree* of many children? |
| Chain of Responsibility | Do you always forward to an inner component, or might a handler stop the chain without a fixed wrappee? |

## Combines with

- **Proxy:** outermost Proxy for auth, inner Decorators for metrics.
- **Strategy:** Decorator may choose a Strategy for compression algorithm.
- **Facade:** façade returns an already-decorated graph to clients.

## Alternatives

Framework middleware; higher-order functions; subclass for a single permanent extra; aspect hooks if the platform provides them.
