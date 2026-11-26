# PHP — best practices (modern baseline)

Defaults for agents writing PHP under this pack. Grounded in the [PHP Manual](https://www.php.net/manual/en/) language and OOP chapters. Version-specific 8.6 rules live in [`php-8.6/`](php-8.6/README.md).

## 1. Types first

- Declare **parameter, return, and property types** on new code. Prefer precise types (`int`, `string`, `array`, class names, unions, `?T`) over untyped “mixed by accident.”
- Prefer **constructor property promotion** for simple DTOs/value objects ([manual](https://www.php.net/manual/en/language.oop5.decon.php)).
- Use **`readonly` properties** (and readonly classes when the whole object is immutable) for values that must not change after init ([manual](https://www.php.net/manual/en/language.oop5.properties.php)). On PHP 8.6, readonly properties may have **defaults** — use them for fixed interface getters instead of constructor noise.
- Prefer **backed enums** for closed sets (status, sort direction, error kinds) over magic strings/ints ([manual](https://www.php.net/manual/en/language.enumerations.php)). On 8.6 prefer `SortDirection` where sorting is shared.

## 2. Errors and control flow

- Prefer **exceptions** for exceptional failures; do not `@`-silence stream/file errors when you can use structured stream error modes (8.6+) or explicit checks.
- Use **`match`** for value→result maps that must be exhaustive; avoid fall-through `switch` for new code.
- Never `return` from a **`finally`** block (deprecated in 8.6 — discards exceptions). Put cleanup in `finally`, returns in `try`/`catch`.
- Do not return values from `__construct` / `__destruct` (deprecated in 8.6).

## 3. Strings, arrays, encodings

- Treat strings as **bytes** unless you intentionally use Unicode-aware APIs. Prefer PCRE with the `u` modifier over deprecated **mb_ereg** / **mb_split** family (removed path toward PHP 9).
- Prefer **`is_int` / `is_float` / `floatval`** — not deprecated aliases `is_long`, `is_integer`, `is_double`, `doubleval`.
- Do not pass **objects where arrays are expected** (`array_walk`, `http_build_query`, …) — convert with `get_object_vars()` first (deprecated in 8.6).
- For locale-aware sorting/compare, use **`Collator`** (intl), not `strcoll` / `SORT_LOCALE_STRING` (deprecated in 8.6).

## 4. OOP and APIs

- Prefer **composition** and narrow interfaces; do not invent Singleton/globals for request state.
- Use **`#[\Override]`** on methods (and on 8.6 class constants / enum cases) when intentionally overriding — catch typos at compile time.
- Prefer **asymmetric visibility** / property hooks when the framework version supports them and they remove boilerplate — not for show.
- Public APIs: validate at trust boundaries; never trust query/body/headers.

## 5. Security (manual “Security” chapter)

- Use parameterized queries / prepared statements (PDO / framework query builder) — never concatenate user input into SQL.
- Escape output for the context (HTML, attr, JS, URL). Framework escaping first.
- Sessions: respect secure defaults (8.6 enables stricter session cookie defaults). Custom session handlers must implement `create_sid` + `validateId`.
- Do not log secrets or real PII; keep error display off in production.

## 6. Tooling habits

- Pin the PHP version from **`composer.lock` / platform config** in CI (not “latest from memory”).
- Run formatter + static analysis + the full test suite the product’s TESTING guide requires.
- Prefer framework features (Laravel container, jobs, validation) over DIY when the product uses that framework — see `technologies/laravel/` when present.

## 7. What “professional” does **not** mean here

- Not copying every RFC into the product.
- Not upgrading production to 8.6 without SRS + CI + regression proof.
- Not dumping the entire PHP manual into the repo — this pack stays a thin judgment layer over [php.net](https://www.php.net/manual/en/).
