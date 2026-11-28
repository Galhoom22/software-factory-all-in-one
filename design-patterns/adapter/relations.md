# Adapter — relations

## Confused with

| Other | Deciding question |
|-------|-------------------|
| [Decorator](../decorator/README.md) | Are you *changing the interface* to match a client, or *keeping the same interface* while adding behavior? |
| [Proxy](../proxy/README.md) | Is the wrapper's job access control / laziness / caching for the *same* interface, or reshaping a *foreign* API? |
| [Facade](../facade/README.md) | Are you translating one collaborator's shape, or hiding a *cluster* of subsystems behind a coarse API? |
| [Bridge](../bridge/README.md) | Are you fixing a one-time mismatch with an existing foreign type, or deliberately splitting abstraction from implementation so *both* can vary? |

## Combines with

- **Factory Method / DI container:** choose which Adapter to bind at startup.
- **Facade:** a façade may internally use Adapters to talk to each vendor.
- **Proxy:** put caching or rate limits on the Target; keep Adapter as the innermost translation.

## Alternatives

Inline mapper; rewrite the client to the vendor API (when you own only one integration); shared DTO library when both teams cooperate; framework HTTP client with typed responses.
