# State — relations

## Confused with

| Other | Deciding question |
|-------|-------------------|
| [Strategy](../strategy/README.md) | Does the object’s *internal lifecycle* choose the behavior, or does the *caller* inject an interchangeable algorithm? |
| [Template Method](../template-method/README.md) | Is the variation a fixed skeleton with deferred steps, or a whole mode object swapped over time? |
| Workflow engine | Must transitions survive process restarts and be audited centrally? |

## Combines with

- **Observer:** publish an event after `transitionTo` for cache invalidation or notifications.
- **Singleton caution:** do not make state objects global; keep them owned by the context instance.
- Payment-provider adapters often sit behind State’s `capture` implementations.

## Alternatives

- Enum + guarded methods.
- Data-driven transition table.
- Strategy when the caller selects the algorithm independently of lifecycle.
- Framework job/workflow status fields for durable async processes.
