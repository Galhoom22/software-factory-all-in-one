# ECMAScript 2026 — prefer these

Sources: [MDN JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript), [Guide](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide), [ECMA-262](https://262.ecma-international.org/), [Deprecated features](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Deprecated_and_obsolete_features). Use when the runtime floor supports the API (or a deliberate polyfill exists).

## Language baseline (all modern targets)

| Prefer | Instead of | Why |
|--------|------------|-----|
| `const` / `let` | `var` | Block scope; no hoisting surprises |
| `===` / `!==` | `==` / `!=` | No coercive equality ([sameness guide](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Equality_comparisons_and_sameness)) |
| ES modules (`import`/`export`) | Global scripts / accidental shared `window` state | Clear dependency graph ([modules](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules)) |
| `async`/`await` + Promise helpers | Nested `.then` pyramids | Readable async control flow |
| `for...of` / `for await...of` | `for...in` for arrays; legacy `for each...in` | Iterate values correctly |
| Classes + `#` private fields | Ad-hoc prototype soup for new OOP | Clear encapsulation ([classes](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes)) |
| `Map` / `Set` / `WeakMap` / `WeakSet` | Objects-as-maps with string keys only | Correct key types and GC behavior |
| `?.` / `??` / `??=` | Verbose null checks | Intent-matching nullish handling |
| Template literals | String `+` concatenation for multi-part text | Readable strings |
| `Object.hasOwn` | `obj.hasOwnProperty` call sites | Safer own-property checks |
| Array copy helpers (`toSorted`, `toReversed`, `with`, …) | Mutating `sort`/`reverse` when immutability matters | Predictable UI/state updates |

## ES2025 (still prefer on current targets)

| Prefer | Notes |
|--------|-------|
| `Iterator` helpers / static methods | Pipeline-style iteration when available |
| `Set` methods (`intersection`, `union`, `difference`, …) | Set algebra without hand-rolled loops |
| `Promise.try` | Wrap sync-or-async functions into a Promise safely |
| `RegExp.escape` | Safe embedding of user text in patterns |
| JSON modules + import attributes | Typed module graph for JSON when the bundler/runtime supports it |
| `Float16Array` / `Math.f16round` | When half-float data is required |

## ES2026 (prefer when Baseline/runtime allows)

| Prefer | Notes |
|--------|-------|
| `Map.prototype.getOrInsert` / `getOrInsertComputed` (and WeakMap) | Avoid get/set race boilerplate ([MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map/getOrInsert)) |
| `Array.fromAsync` | Build arrays from async iterables cleanly |
| `Error.isError` | Reliable Error detection across realms |
| `Math.sumPrecise` | Sum floats without intermediate rounding traps |
| `Uint8Array` base64/hex helpers | Prefer over hand-rolled codecs when available |
| `Iterator.concat` | Chain iterables without custom glue |
| `JSON.rawJSON` / parse source text (when needed) | Advanced JSON tooling — only if the problem needs it |

## Documented on MDN but gate on runtime / edition

| Prefer (when supported) | Caution |
|-------------------------|---------|
| `Temporal` APIs | Prefer over legacy `Date` math **when** the product runtime/Baseline supports Temporal; otherwise keep `Date`/`Intl` and do not invent polyfills casually |
| `using` / `await using` + `DisposableStack` | Prefer for deterministic resource cleanup **when** the runtime supports explicit resource management |

## Still correct fundamentals

| Prefer | Notes |
|--------|-------|
| Closures with intent | [Closures guide](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Closures) — understand captures; avoid accidental retained DOM |
| `Intl.*` formatters | Locale-aware dates/numbers/lists over hand-rolled strings |
| Structured `Error` + `cause` | Preserve error chains for debugging |

---
