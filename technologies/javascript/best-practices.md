# JavaScript — best practices (modern baseline)

Defaults for agents writing **core JavaScript** under this pack. Grounded in the [MDN JavaScript Guide](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide) and [reference](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference). Version-specific ES2026 notes live in [`javascript-es2026/`](javascript-es2026/README.md).

## 1. Language vs host

- This pack is **ECMAScript language**. Browser DOM, Fetch, Storage, Workers, etc. are **Web APIs** — look them up on MDN Web APIs, do not invent signatures.
- Do not confuse JavaScript with Java ([Guide: Introduction](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Introduction)).
- Standards: **ECMA-262** (language) and **ECMA-402** (Intl). Prefer MDN for authoring; use the spec when implementing or resolving edge cases.

## 2. Declarations and modules

- Prefer **`const` by default**, **`let` when reassignment is required** — never `var` in new code.
- Prefer **ES modules** (`import` / `export`) over script globals and legacy bundler hacks when the host supports them ([Modules guide](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules)).
- Prefer **strict mode** semantics (modules are strict by default). Do not rely on sloppy-mode Annex B quirks.

## 3. Equality, nullish, and control flow

- Prefer **`===` / `!==`**. Use `==` only with a documented reason (almost never). See [Equality comparisons](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Equality_comparisons_and_sameness); use `Object.is` when NaN/-0 identity matters.
- Prefer **`??` / `?.` / logical assignment (`??=`, `&&=`, `||=`)** over verbose null checks when intent matches.
- Prefer **`try` / `catch` / `throw`** with real `Error` (or subclasses). Prefer `Error.isError` when available (ES2026) over fragile `instanceof` across realms.

## 4. Functions, classes, and objects

- Prefer **arrow functions** for short callbacks; prefer named `function` / methods when you need `this` binding or a clear stack name.
- Prefer **classes** with public fields and **`#` private** elements for encapsulation ([Classes](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes)) — still understand the [prototype chain](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Inheritance_and_the_prototype_chain).
- Prefer **`Map` / `Set` / `WeakMap` / `WeakSet`** for keyed collections when object-as-map is the wrong tool.

## 5. Async and iteration

- Prefer **`async` / `await`** and Promise composition (`all`, `allSettled`, `any`, `try` when available) over nested `.then` pyramids.
- Prefer **`for...of`** (and `for await...of`) over `for...in` for iterating values; reserve `for...in` for intentional enumerable key walks.
- Prefer **iterator helpers / `Iterator` APIs** (ES2025+) when the runtime floor allows and they clarify pipelines.

## 6. Security and trust

- Never pass untrusted strings to **`eval`**, `new Function`, or HTML/`innerHTML` sinks without a deliberate, reviewed sanitizer.
- Prefer **`encodeURIComponent` / `decodeURIComponent`** (and URL APIs) over deprecated `escape` / `unescape`.
- Validate at trust boundaries (query, body, postMessage data, storage). Language sugar does not replace validation.

## 7. Tooling habits

- Pin the **runtime** and **transpile target** in the product (browserslist / `tsconfig` / Node engines) — this pack is not a silent upgrade of the product floor.
- Before using a brand-new built-in (ES2025/2026), check **MDN Baseline / compat** for the product’s oldest supported engine.
- Formatter + linter + the product’s test suite; TypeScript products still follow this language pack for emitted/runtime semantics.

## 8. What “professional” does **not** mean here

- Not copying every Stage 3 proposal into production.
- Not polyfilling every ES2026 API when the product targets older engines — gate on runtime.
- Not dumping the entire MDN tree into the repo — this pack stays a thin judgment layer over MDN + ECMA-262.

---
