# Visitor — relations

## Confused with

| Other | Deciding question |
|-------|-------------------|
| Iterator | Do you need **typed per-element algorithms**, or only **linear traversal** access? |
| [Strategy](../strategy/) | Are you swapping **one algorithm step** for a context, or running **many typed visits** over a structure? |
| Interpreter | Are you evaluating a **language/grammar**, or applying **external operations** to a structure? |
| Pattern matching / `match` | Is a **closed union** small enough that exhaustiveness checking beats a Visitor hierarchy? |
| [Composite](../composite/) | Composite shapes the tree; Visitor *operates* on it — often combined, not rivals. |

## Combines with

- **Composite:** classic pairing — composite supplies the structure, visitors supply operations.
- **Interpreter:** some interpreters use visitor-style walks; keep naming honest.
- **Command:** a visitor may emit commands rather than mutating immediately.

## Alternatives

- Discriminated unions + exhaustive `switch`/`match` ([`technologies/javascript/`](../../technologies/javascript/), [`technologies/php/`](../../technologies/php/)).
- Iterator + pure functions over DTOs.
- Methods on elements when operations are few and stable.
- Existing AST/tooling visitors for well-known formats — do not reinvent.
- Laravel pipelines / collection maps for linear DTO processing ([`technologies/laravel/`](../../technologies/laravel/)).
