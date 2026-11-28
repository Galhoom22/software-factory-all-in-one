# Strategy — relations

## Confused with

| Other | Deciding question |
|-------|-------------------|
| [State](../state/README.md) | Does **internal lifecycle mode** pick the next behavior, or does an **external choice** inject an interchangeable algorithm? If the object must behave differently because it *is* authorized vs captured, use State. If the caller/config picks CSV vs PDF, use Strategy. |
| [Template Method](../template-method/README.md) | Is variation a few **steps inside a fixed skeleton** owned by a base type, or a **whole algorithm** replaced behind a contract? Skeleton + hooks → Template Method. Replaceable complete policy → Strategy (composition). |
| [Command](../command/README.md) | Are you packaging a **request** to queue, log, undo, or schedule, or packaging an **algorithm/policy** the context calls immediately? Request-as-object → Command. Interchangeable policy → Strategy. |

## Combines with

- **Factory Method / container:** create or resolve the strategy at the edge.
- **Adapter:** payment-provider Strategy often wraps vendor SDKs behind one port.
- **Context object** may also use Observer to announce which strategy ran.

## Alternatives

- Plain function map keyed by config.
- Single injected callable.
- Template Method when the shared skeleton dominates and only steps vary.
- State when behavior follows a lifecycle, not a caller-selected policy.
- Command when you need undo/queue semantics for requests.
