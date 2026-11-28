# State — applicability

## Signals

- Lifecycle methods are dominated by `switch (status)` or stacked `if (status === ...)`.
- Adding a mode forces edits across many methods of the same class.
- Invalid transitions are a real product risk (double capture, edit after lock).
- Each mode has several related behaviors, not a single flag check.

## Anti-signals

- Status is display-only; behavior does not change.
- Two modes with one-line differences — an enum + guard is enough.
- The “state” is really a pluggable algorithm chosen by the caller (that is Strategy).
- You need durable workflows across processes — prefer a workflow engine / job state table, not in-memory State objects alone.
- Concrete state classes would each be empty stubs with identical methods.

## Simpler alternative first

1. **Enum + early-return guards** in one class for small lifecycles.
2. **Transition table** (`from, event → to`) data driving a thin executor.
3. **Workflow / state-machine library** when transitions must be audited and persisted.

Adopt State objects when mode-specific behavior is large enough that co-locating it with the mode beats a growing switch.

## Framework-native equivalents

| Platform | Prefer this first | Why it often replaces State |
|----------|-------------------|--------------------------------|
| Laravel | Model casts + domain services; queues/jobs for async lifecycle; avoid stuffing switches in Eloquent models | Persist status as data; run transitions in an explicit service. Events can notify after transition ([`technologies/laravel/`](../../technologies/laravel/)). |
| Node / JavaScript | Finite-state machine libraries or a plain transition map; Express middleware only for HTTP stages | Middleware is for request pipelines, not domain lifecycle modes ([`technologies/javascript/`](../../technologies/javascript/)). |
| Cache / document editor | Explicit status field + service methods | Start simple; extract State types only when branch weight justifies it. |

Honest claim: most products store status as a column and enforce transitions in one service. GoF State is for when that service’s branching becomes the maintainability problem.
