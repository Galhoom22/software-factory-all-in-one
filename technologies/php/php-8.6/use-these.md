# PHP 8.6 — prefer these

Sources: [release notes](https://www.php.net/releases/8.6/en.php), [new features](https://www.php.net/manual/en/migration86.new-features.php). Use when the runtime is 8.6+ (or when teaching the target line).

## Language

| Prefer | Instead of | Why |
|--------|------------|-----|
| **Partial function application** (`fn(?, …)`, `fn(1, …)`) | Nested `fn ($x) => foo(1, $x)` noise | Clearer pipelines / `array_filter` callbacks ([manual](https://www.php.net/manual/en/migration86.new-features.php)) |
| **`clamp($v, $min, $max)`** | `max($min, min($v, $max))` | Readable bounds for numbers and comparable values (incl. `Time\Duration`) |
| **`Time\Duration`** | Raw microsecond ints for timeouts/backoff | Comparable, composable elapsed time |
| **Readonly property defaults** | Constructor-only assignment for fixed getters | Less boilerplate for get-only interface props |
| **`SortDirection` enum** | `SORT_ASC` / magic ints in shared APIs | Type-safe sort direction across libraries |
| **`#[\Override]` on class constants / enum cases** | Silent mismatches | Compile-time check when implementing interfaces |
| **Stream error mode → exceptions** (`StreamErrorMode::Exception`) | `@file_get_contents` + `error_get_last()` | Structured `StreamError` / `StreamException` |
| **`Io\Poll`** (when building event loops) | `stream_select()` for large connection counts | Scalable epoll/kqueue/etc. foundation |
| **`Uri\…\UriBuilder` / `UrlBuilder`** | Hand-rolled string concat for URIs | Safer URI construction |
| **Parameter DocComments** + `ReflectionParameter::getDocComment()` | Duplicating `@param` only | Docs next to the parameter |

## Still prefer from earlier 8.x (still best on 8.6)

| Prefer | Notes |
|--------|-------|
| Typed properties + promotion | Manual OOP chapters |
| Enums (backed when serialized) | Closed sets |
| `match` expressions | Exhaustive maps |
| `readonly` classes/properties | Immutability |
| First-class callables (`strlen(...)`) | Combine with partial application where useful |
| Attributes (`#[\Deprecated]`, `#[\Override]`, …) | Metadata without docblock hacks |
| Named arguments for clarity at call sites | Especially boolean flags |

## Security / sessions (8.6 defaults)

- New installs get stronger session defaults (`use_strict_mode`, `cookie_httponly`, `cookie_samesite=Lax`). Keep them; do not weaken without an ADR.
- Custom session save handlers: implement **`create_sid` + `validateId`** now (required for strict mode; moving into the main interface toward 9.0).
