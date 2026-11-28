# Template Method — applicability

## Signals

- Several classes duplicate the same multi-step ritual with small differences.
- Mandatory steps (authz, audit, metrics) must run for every variant.
- Reviewers keep finding skipped steps in copy-pasted flows.
- The step *order* is a product rule, not an accident.

## Anti-signals

- Variants need different orders or optional middle stages freely composed — prefer Strategy pieces or a pipeline.
- Only one step varies and a Strategy/callback for that step is enough.
- Base class would know too many subclass details (fragile base class).
- Team rejects inheritance; use a plain function skeleton with injected hooks.
- You are forcing unrelated flows into one base to “reuse” a method name.

## Simpler alternative first

1. **One function with injected hooks:** `export({ build, write })` calling validate → build → write → audit.
2. **Strategy for the one varying step**; keep the ritual as ordinary procedural code.
3. **Middleware / pipeline** when stages are independently composable (HTTP).

Adopt classic Template Method inheritance when the skeleton must be sealed against reordering and variants naturally form a type family.

## Framework-native equivalents

| Platform | Prefer this first | Why it often replaces Template Method |
|----------|-------------------|----------------------------------------|
| Laravel | Jobs/actions with shared base carefully; middleware for HTTP; form request pipelines | Prefer middleware for request stages. For domain export, a single action class with injected strategies often beats deep AbstractExport trees ([`technologies/laravel/`](../../technologies/laravel/)). |
| Node | Middleware pipelines; higher-order functions wrapping hooks | Express/Connect middleware is the platform Template-ish pipeline for HTTP. For domain code, prefer `runExport({ build, write })` ([`technologies/javascript/`](../../technologies/javascript/)). |
| Notifications | Channel drivers + a shared sender routine | Shared send routine + channel Strategy often wins over AbstractNotifier subclasses. |

Honest claim: sealed skeletons are valuable; inheritance is optional. Prefer hook injection unless a type hierarchy already exists.
