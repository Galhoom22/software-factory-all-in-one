# State — trade-offs

## Pros

- Mode rules live with the mode, not in a shared switch.
- Invalid transitions can be rejected locally in the wrong state.
- New modes add a type instead of editing every method (when the interface holds).
- Context public API stays stable while behavior shifts.

## Cons

- More types; readers must chase the current state object.
- Shared data between states tempts fat contexts or back-door getters.
- Transition graphs can become implicit spaghetti across state classes.
- Overkill for labels that barely change behavior.

## Costs

| Cost | Notes |
|------|-------|
| Complexity | One class per mode + interface |
| Indirection | Behavior is not in the context body |
| Performance | Extra virtual calls — rarely the bottleneck |
| Testability | Improves per-mode tests; needs transition coverage |

## Common misuse

- State objects that only wrap an enum with no real behavior split.
- Letting every state mutate unrelated context fields freely.
- Confusing State with Strategy (caller-picked algorithm vs lifecycle mode).
- In-memory State for multi-server workflows without persistence.

## Review checklist

1. Do modes change *behavior*, not just labels?
2. Was enum + guard / transition table tried first?
3. Is the State interface limited to operations that actually vary?
4. Are illegal transitions tested?
5. Is persistence of status explicit at the edge?
6. Could Strategy or a plain function map solve this with less ceremony?
7. Is there an exit path back to a simpler enum when modes collapse?
