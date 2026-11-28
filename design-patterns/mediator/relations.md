# Mediator — relations

## Confused with

| Other | Deciding question |
|-------|-------------------|
| [Observer](../observer/README.md) | Do subjects *broadcast* state changes to unknown listeners (Observer), or does a *hub own choreography* among known colleagues (Mediator)? If listeners register freely and the subject ignores who they are, choose Observer. If A must trigger B then C with veto/order rules and peers must not know each other, choose Mediator. |
| [Facade](../facade/README.md) | Is the object a *narrow API over a subsystem for outsiders*, or a *router among internal peers*? Outsiders → Facade; peer dialog → Mediator. |
| Application service | Is the orchestrator called from the outside as a use-case, with no colleague callbacks into it? That may be enough without the Mediator name. |

## Combines with

- **Observer:** hub subscribes to external events, then mediates internal colleagues.
- **Command:** hub turns UI intents into Commands for undoable editor actions.
- **Memento:** hub triggers save/restore of document snapshots around mediated flows.

## Alternatives

- Direct calls (two colleagues).
- Linear application service / orchestrator function.
- Framework events / EventEmitter (Observer-shaped fan-out).
- No pattern when one module already owns the flow.
