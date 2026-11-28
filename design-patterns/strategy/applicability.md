# Strategy — applicability

## Signals

- Multiple algorithms solve the same problem and are selected by config, tenant, or user choice.
- Orchestration methods contain format/provider/policy switches that keep growing.
- You need to unit-test the flow with a no-op or fake algorithm.
- Algorithms are peer alternatives, not lifecycle modes of one object.

## Anti-signals

- One algorithm forever; a single function is enough.
- “Strategies” differ only by a constant — pass the constant instead.
- Variation is the object’s own status machine (use State).
- You need undo/queue/logging of *requests* as objects (consider Command).
- Class-per-strategy would wrap a one-liner better expressed as a function in a map.

## Simpler alternative first

1. **Plain functions** in a map: `formats.csv = writeCsv; formats.pdf = writePdf; run(formats[key], rows)`.
2. **Inject one callable / interface** at the composition root with no hierarchy.
3. **Container binding** keyed by config for process-wide choice.

Adopt Strategy types when algorithms share a non-trivial contract, need polymorphic injection, or must carry their own collaborators.

## Framework-native equivalents

| Platform | Prefer this first | Why it often replaces Strategy classes |
|----------|-------------------|----------------------------------------|
| Any JS/TS | Function map or injected `(input) => output` | Closures *are* strategies; interfaces are optional until shared shape grows ([`technologies/javascript/`](../../technologies/javascript/)). |
| Laravel | Interface + container binding; conditional contextual binding | Bind `ExportFormat::class` to `CsvFormat` or `PdfFormat` from config. Prefer this over hand-rolled registries in domain code ([`technologies/laravel/`](../../technologies/laravel/)). |
| HTTP | Middleware only for cross-cutting request stages | Middleware is not a substitute for choosing an export or payment algorithm. |
| Cache | Config-selected store driver (framework cache manager) | Use the platform’s cache driver switch before inventing eviction Strategy types. |

Verified claim: in modern PHP/JS, a function or container-bound interface usually delivers Strategy’s benefit with less ceremony than a deep ConcreteStrategy hierarchy.

