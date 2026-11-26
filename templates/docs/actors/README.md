# Actor packs

Planning specs organized by **actor** (who uses the capability). Matches actor-loop delivery (`docs/DELIVERY.md` / factory `02-DELIVERY.md`).

| Path | Role |
|------|------|
| [`README.md`](README.md) | This index |
| [`Actor-01-CurrentActor/`](Actor-01-CurrentActor/) | First actor in focus (rename folder to a real slug) |
| Shared scope | [`../SCOPE_REJECTIONS.md`](../SCOPE_REJECTIONS.md) — do **not** copy into each actor |

## Layout per actor

```text
Actor-##-Name/
├── README.md     Role contract + navigation
├── screens.md    Screen IDs, routes, states
└── flow.md       End-to-end journeys for this actor
```

When the current actor’s screens change, update that actor’s `screens.md` / `flow.md` **and** the prototype screen index / flows in the same commit.

