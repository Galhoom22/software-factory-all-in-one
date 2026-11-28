# Observer — relations

## Confused with

| Other | Deciding question |
|-------|-------------------|
| [Mediator](../mediator/README.md) | Do peers need a hub to talk *to each other*, or does one subject only broadcast “I changed”? |
| [Chain of Responsibility](../chain-of-responsibility/README.md) | Must exactly one handler consume the request along a line, or should every subscriber react? |
| Event bus / pub-sub | Do you need a named channel across modules (bus), or a subject-owned subscription list? |

## Combines with

- **State / document editor:** state transitions publish events observers use for cache and notifications.
- **Command:** completed commands notify observers for audit or UI refresh.
- Framework listeners often *are* the Observer implementation — keep domain events small and let the bus fan out.

## Alternatives

- Direct collaborator call (one reaction).
- Laravel events / Eloquent observers; Node `EventEmitter`.
- Explicit callback parameter for a single optional hook.
- Queue/job dispatch when reactions must be durable and async.
