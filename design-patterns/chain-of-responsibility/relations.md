# Chain of Responsibility — relations

## Confused with

| Other | Deciding question |
|-------|-------------------|
| [Decorator](../decorator/README.md) | Do you need *ordered optional handlers that may stop the request*, or *stacked wrappers that always add behavior around the same core object*? If every layer must run and the object identity stays “one service,” prefer Decorator (or middleware that always calls `next`). If any step may refuse and skip the rest, prefer Chain. |
| [Proxy](../proxy/README.md) | Is the stand-in controlling access to *one* real subject, or are you routing among *many peer processors*? Proxy = one surrogate; Chain = pipeline of peers. |
| Pipeline / middleware (framework) | Does the platform already register ordered gates? If yes, use it — naming your classes “Chain of Responsibility” adds no behavior. |

## Combines with

- **Command:** each handler may enqueue a Command instead of doing work inline.
- **Decorator:** a terminal handler’s collaborator can itself be a decorated notifier or cache store.
- **Template Method:** rare — a base handler can fix “log → decide → forward” while subclasses supply the decide step; prefer composition first.

## Alternatives

- Ordered array of functions / `Pipeline` (simplest).
- Framework HTTP or job middleware.
- Single Strategy when only the *algorithm* varies, not a sequence of gates.
- No pattern: one clear function with early returns.
