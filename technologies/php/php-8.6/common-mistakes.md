# PHP 8.6 — common mistakes

Patterns that look fine locally and fail under 8.6 CI, static analysis, or upgrade.

## Language / runtime

| Mistake | What goes wrong | Fix |
|---------|-----------------|-----|
| Claiming “Done on PHP 8.6” while CI still runs 8.4/8.5 | Partial application / `clamp` / `Duration` break on CI | Align `composer` platform + Actions PHP version with SRS |
| Using `return` in `finally` to “always return a default” | Exceptions disappear; 8.6 deprecation | Restructure control flow |
| Passing a model/DTO into `http_build_query($object)` | Deprecation; surprising property dumps | Explicit array shape |
| `array_filter($list, fn ($v) => version_compare($v, '8.6', '>='))` when PFA is available | Verbose, not wrong | Prefer `version_compare(?, '8.6', '>=')` on 8.6+ |
| Relying on `@file_get_contents` | Unstructured failures | Stream exception mode or checked return |
| Custom session handler without `validateId` | Breaks / warns under strict session defaults | Implement both ID APIs |
| Assuming `trim` only strips old whitespace | Form feed `\f` also stripped by default in 8.6 | Update tests that depended on keeping `\f` |
| Ignoring `ValueError` for NUL bytes / bad flags | Silent truncate → hard error | Validate inputs; catch intentionally |

## Types / OOP

| Mistake | What goes wrong | Fix |
|---------|-----------------|-----|
| Untyped `$data` bags at trust boundaries | Invalid shapes reach the DB | Typed DTO / array shapes + validation |
| Mutating `readonly` after init | Fatal error | Redesign for immutability or non-readonly field |
| Giving a readonly property a default **and** assigning in constructor | Illegal second init (8.6 defaults count as init) | Default **or** constructor, not both |
| Enum / class named `is` or `let` | Deprecation → future parse break | Rename now |
| Using `SORT_STRING` where API expects `SortDirection` | TypeError on 8.6-aware APIs | Pass `SortDirection::Ascending/Descending` |

## Security / I/O

| Mistake | What goes wrong | Fix |
|---------|-----------------|-----|
| Long `php://filter` chains for “clever” includes | Deprecation + known LFI→RCE gadget class | Do not build filter chains from user input |
| Weakening `session.cookie_samesite` / httponly “to make local work” | Session fixation / XSS impact | Fix cookie domain/HTTPS instead |
| Logging full exception with request bodies | PII / secrets in logs | Redact; fictional fixtures in tests |

## Agent / CI habits

| Mistake | What goes wrong | Fix |
|---------|-----------------|-----|
| Memorizing “latest PHP” | Wrong minor in CI | Read `composer.lock` / platform.php + [supported versions](https://www.php.net/supported-versions.php) |
| Upgrading to 8.6 in one product without SRS/CI | Drift across FE/BE docs | ADR + SRS §2 + Actions pin same session |
| Treating this pack as a full manual | Stale / incomplete | Always click through [`../official-refs.md`](../official-refs.md) for edge cases |
