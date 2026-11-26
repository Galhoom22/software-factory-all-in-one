# PHP 8.6 — stop using these

Sources: [deprecated features](https://www.php.net/manual/en/migration86.deprecated.php), [release deprecations](https://www.php.net/releases/8.6/en.php), plus older patterns that modern PHP already replaced.

**Rule for agents:** do not introduce the left column in new code. When touching old code, prefer migrating in the same change if cheap.

## Deprecated in PHP 8.6 (do not write)

| Stop using | Use instead |
|------------|-------------|
| `return` inside `finally` | Return from `try`/`catch`; keep only cleanup in `finally` |
| Returning a value from `__construct` / `__destruct` (or making them generators) | Side effects only; bare `return;` to exit early is OK |
| Nullable `__debugInfo(): ?array` | `__debugInfo(): array` |
| Function named `readonly` | Rename the function |
| Identifiers `let`, `is` for classes/functions/constants; constant `_`; class constant named `namespace` | Rename (reserved for future syntax) |
| Third argument to `define()` (case-insensitive) | Omit it (case-insensitive constants are gone since 8.0) |
| `is_a()` / `is_subclass_of()` with a string while `$allow_string` is `false` | Fix the call — that path always returned false |
| `mb_ereg*`, `mb_split`, `mb_eregi*` (Oniguruma path) | PCRE with `u` modifier (`preg_*`) |
| `is_double`, `is_long`, `is_integer`, `doubleval` | `is_float`, `is_int`, `floatval` |
| `spl_object_hash()`, `spl_classes()` | `spl_object_id()`, `ReflectionExtension::getClassNames()` |
| Passing objects to `array_walk` / `http_build_query` / similar | `get_object_vars()` first |
| `strcoll()`, `SORT_LOCALE_STRING` | `Collator` (intl) |
| `metaphone()` | Maintained userland phonetic library if needed |
| Long `php://filter` chains (>16) without raising the limit | `stream_filter_append` / safer patterns (LFI risk) |
| Incomplete custom session handlers | Implement `create_sid` + `validateId` |
| `mysqli_stmt_init()` empty statements; `mysqli_get_charset()` | `mysqli_prepare()`; `character_set_name()` |
| SplFileObject CSV helpers; ArrayIterator sort/serialize leftovers | `fgetcsv`/`fputcsv`; sort the array, not the iterator |

## Already obsolete before 8.6 (still forbidden in new code)

| Stop using | Use instead | Since |
|------------|-------------|-------|
| `mysql_*` extension | PDO / mysqli | Removed ages ago |
| Untyped public APIs on new code | Declared types | 7.x / 8.x |
| `create_function`, `each()`, short open tags in new templates | Closures, proper loops, `<?php` | Removed/deprecated historically |
| `@` error suppression as control flow | Explicit checks / exceptions | Always poor practice |
| Building SQL with string concat of user input | Bound parameters | Security manual |
| `extract()` on request data | Explicit assignment / DTO | Security / clarity |
| Global `setlocale` for collation in libraries | `Collator` with explicit locale | Locale is process-global |

## Toward PHP 9

Treat 8.6 deprecations as **remove soon** — especially mbregex and case-insensitive `define(…, true)`. Prefer fixing them when you touch the file, not waiting for 9.0 errors.
