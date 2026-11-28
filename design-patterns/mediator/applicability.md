# Mediator — applicability

## Signals

- Colleague-to-colleague call graphs are dense or cyclic.
- Interaction policy changes independently of colleague internals.
- Adding a participant currently forces edits across many peers.

## Anti-signals

- Only two collaborators — a direct method call is clearer.
- You need many independent listeners for “something happened” with no central choreography — Observer / EventEmitter / framework events fit better.
- The proposed Mediator would own domain rules *and* persistence *and* UI — that is a god object, not a hub.
- An application service already orchestrates the flow without peer wiring.

## Simpler alternative first

1. Direct calls between two objects.
2. A plain orchestrator function / application service that calls colleagues in order.
3. Framework events (Laravel events/listeners, Node `EventEmitter`) for fan-out without choreography.

Promote to Mediator when peers must stay ignorant of each other *and* the routing rules are non-trivial and centralized.

## Framework-native equivalents

| Platform | Nearby feature | Honesty note |
|----------|----------------|--------------|
| Laravel | Events + listeners; sometimes a single Action/Service class | Events are closer to **Observer** (publish/subscribe). A Mediator is explicit choreography: “when A, then B then C.” Do not rename every EventDispatcher a Mediator. |
| Node | `EventEmitter`, small orchestrator modules | Same split: emit/listen ≠ mediated dialog flow. Use an orchestrator object when order and veto rules matter. |
| UI kits | Form/dialog controllers | A dialog controller often *is* a Mediator for child widgets — use that shape without extra ceremony. |

Honest claim: middleware is Chain of Responsibility; jobs are Command; events are usually Observer. Mediator earns its name when colleagues communicate *through* a hub that encodes interaction policy.
