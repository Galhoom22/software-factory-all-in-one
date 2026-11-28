# TypeScript — best practices (modern baseline)

Defaults for agents writing **TypeScript** under this pack. Grounded in the [Handbook](https://www.typescriptlang.org/docs/handbook/intro.html) and [TSConfig Reference](https://www.typescriptlang.org/tsconfig). Version-specific 7.0 notes live in [`typescript-7.0/`](typescript-7.0/README.md).

## 1. Language vs host vs frameworks

- This pack is **TypeScript** (static types + `tsc` / language service). Runtime JS semantics → [`javascript/`](../javascript/README.md). DOM/Fetch/etc. → MDN Web APIs. React/Next/Vue → those packs.
- Prefer **`.ts` / `.tsx`** for product code. Use JSDoc-checked `.js` only when the product deliberately stays JavaScript.

## 2. Project configuration

- Always ship a **`tsconfig.json`** (or project references). Prefer **`strict": true`** (default in modern `tsc` / TS 6+).
- Match **module settings to the host**: bundler apps → `module`/`moduleResolution` `bundler` guidance; Node libraries → `nodenext` / `node16+` family — see [Choosing Compiler Options](https://www.typescriptlang.org/docs/handbook/modules/guides/choosing-compiler-options.html).
- Prefer **`verbatimModuleSyntax`** (or at least `isolatedModules`) so ESM/CJS emit stays honest.
- Prefer **`noUncheckedIndexedAccess`** when the product can absorb the discipline (safer indexed access).
- List **`types`** explicitly when you need ambient `@types/*` (TS 6+/7 default `types: []` — do not rely on auto-pulling every `@types` package).
- Set **`rootDir`** explicitly when sources live under `src/` and `tsconfig` sits at the package root.

## 3. Types that earn their keep

- Prefer **`unknown`** over `any` at trust boundaries; narrow before use ([Narrowing](https://www.typescriptlang.org/docs/handbook/2/narrowing.html)).
- Prefer **`type` / `interface`** for public shapes; use **unions + narrowing** over boolean soup and overgrown enums.
- Prefer **`satisfies`** when you need check-against-a-type without widening ([Handbook](https://www.typescriptlang.org/docs/handbook/release-notes/typescript-4-9.html)).
- Prefer **generics** for reusable APIs; constrain them (`extends`) — do not invent `T` without a reason.
- Prefer built-in **utility types** (`Partial`, `Pick`, `Omit`, `Record`, `Readonly`, …) over hand-rolled mapped copies when they match intent.
- Prefer **const assertions** / `as const` for literal unions; avoid `as` casts except at validated boundaries (with a one-line why).

## 4. Modules and imports

- Prefer **ES modules** and modern resolution (`bundler` / `nodenext`). Do not revive AMD/UMD/SystemJS/`module: none`.
- Prefer **type-only imports** (`import type` / `import { type X }`) when a symbol is type-only — works with `verbatimModuleSyntax`.
- Prefer import attributes with **`with`** (not deprecated `asserts`) when the runtime/bundler supports them.

## 5. Enums, namespaces, classes

- Prefer **string-literal unions** or const objects over most `enum`s for app code; when enums exist, keep them consistent (no accidental mixed string/number enums).
- Prefer **ES modules** over `namespace` for new code; do not use the `module` keyword as a namespace alias.
- Prefer **classes** only when identity/encapsulation needs them; otherwise functions + types.

## 6. Declaration files and libraries

- Publish **`.d.ts`** (+ maps) for libraries (`declaration`, `declarationMap`). Follow [Declaration Files](https://www.typescriptlang.org/docs/handbook/declaration-files/introduction.html) Do's and Don'ts.
- Prefer **DefinitelyTyped** / maintained `@types` over inventing ambient globals.

## 7. Tooling habits

- Pin `typescript` in the product lockfile. Re-check official docs / Context7 before non-trivial TS work.
- ESLint + typescript-eslint: if the tool still needs the **TS 6 programmatic API**, install side-by-side per the [TS 7 announcement](https://devblogs.microsoft.com/typescript/announcing-typescript-7-0/) (`@typescript/typescript6` / aliases) — do not break the lint pipeline for a silent major bump.
- Vue / Svelte / Astro / MDX / Angular template embeddings may still need **TS 6** for editor plugins until TS 7 exposes a stable API — call that out honestly in the product.

## 8. What “professional” does **not** mean here

- Not `any` everywhere “to ship faster.”
- Not disabling `strict` to silence errors without an ADR.
- Not dumping the entire Handbook into the repo — this pack is a thin judgment layer over typescriptlang.org.
