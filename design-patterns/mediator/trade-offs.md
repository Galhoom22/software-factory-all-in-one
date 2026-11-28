# Mediator — trade-offs

## Pros

- Colleagues stay decoupled; interaction policy has one home.
- Adding a participant edits the hub, not every peer.
- Hub and colleagues test in isolation with fakes.

## Cons

- ConcreteMediator can bloat into a god object if it absorbs domain logic.
- Indirect flow is harder to read than a straight-line orchestrator for simple cases.
- Overusing Mediator for pure fan-out duplicates Observer/events poorly.

## Costs

| Cost | Notes |
|------|-------|
| Complexity | Hub + colleague ports |
| Indirection | Behavior lives in `notify` branches |
| Performance | Usually fine; watch chatty notify storms |
| Testability | Strong if the hub stays a pure router |

## Common misuse

- “Mediator” that is really an EventEmitter rename.
- Stuffing validation, persistence, and UI into the hub.
- Introducing a hub for two classes that called each other once.

## Review checklist

1. Was the peer graph actually dense or cyclic?
2. Direct call / orchestrator function / events tried first?
3. Does the hub only route, or has it stolen domain work?
4. Colleagues lack imports of other colleagues?
5. Hub policy covered by fake-colleague tests?
6. Observer/events chosen instead when only fan-out is needed?
7. Exit path: shrink to an application service when policy simplifies?
