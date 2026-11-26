# ECMAScript 2026 — stop using these

Sources: [Deprecated and obsolete features](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Deprecated_and_obsolete_features), [MDN reference](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference).

**Rule for agents:** do not introduce the left column in new code. When touching old code, prefer migrating in the same change if cheap.

## Deprecated (do not write)

| Stop using | Use instead |
|------------|-------------|
| `var` in new modules | `const` / `let` |
| `==` / `!=` (coercive) | `===` / `!==` (or `Object.is` when needed) |
| `with` statement | Explicit object binding / destructuring |
| `arguments.callee` / `fn.caller` | Named functions, rest parameters |
| `Object.prototype.__proto__` accessors | `Object.getPrototypeOf` / `Object.setPrototypeOf` (rare) |
| `__defineGetter__` / `__defineSetter__` / `__lookup*` | `Object.defineProperty` / `getOwnPropertyDescriptor` |
| String HTML wrappers (`big`, `fontsize`, …) | Real DOM / framework markup |
| `String.prototype.substr` | `slice` / `substring` |
| `trimLeft` / `trimRight` | `trimStart` / `trimEnd` |
| `Date.prototype.getYear` / `setYear` | `getFullYear` / `setFullYear` |
| `toGMTString` | `toUTCString` |
| `escape` / `unescape` | `encodeURIComponent` / `decodeURIComponent` (or `URL`) |
| Octal escape sequences in strings/regex | Standard escapes / Unicode escapes |
| RegExp static `$1`–`$9`, `input`, `lastMatch`, … | Match results from `exec` / `match` / `matchAll` |
| `RegExp.prototype.compile` | `new RegExp(...)` |
| HTML-like `<!--` / `-->` comments in JS | `//` or `/* */` |
| `for...in` initializer `var` in loop header | Declare outside / use `for...of` |

## Obsolete / removed (never)

| Stop using | Use instead |
|------------|-------------|
| `for each...in` | `for...of` |
| Legacy generators / `StopIteration` | `function*` + iterator protocol |
| Array/generator comprehensions | `map`/`filter` / generators |
| `Object.observe` / `Array.observe` | Explicit state updates or `Proxy` when earned |
| Expression closures (`function () 1`) | Arrow / normal function bodies |
| Non-standard String/Array generics | Prototype methods + `call` if needed |
| `uneval` / `toSource` | `JSON.stringify` / custom serialization |

## Architecture anti-patterns (language level)

| Stop using | Use instead |
|------------|-------------|
| `eval` / `new Function` on untrusted input | Parse data as data; never execute strings |
| Implicit globals | Modules + explicit exports |
| Mutating shared arrays/objects as “events” | Explicit APIs; immutable updates when UI depends on identity |
| Assuming every ES2026 built-in exists | Gate on product runtime / Baseline; polyfill only with product policy |

---
