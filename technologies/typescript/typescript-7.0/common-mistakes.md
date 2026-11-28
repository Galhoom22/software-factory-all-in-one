# TypeScript 7.0 — common mistakes

## Config

- Forgetting explicit `rootDir` / `types` after adopting TS 6+/7 defaults — empty ambient types or wrong emit layout.
- Copying a bundler `tsconfig` into a Node library (or the reverse) — wrong `moduleResolution`.
- Upgrading to TS 7 while eslint/Volar still import the old API — install the documented side-by-side 6.x package instead of disabling lint.

## Types

- Using `any` to “finish the ticket” and letting it spread through props and DTOs.
- Overusing `enum` where a string-literal union + narrowing is clearer.
- Casting with `as` instead of narrowing; especially after `JSON.parse`.
- Confusing `interface` merging with accidental global pollution.

## Modules

- Forgetting `import type` under `verbatimModuleSyntax` (runtime import of types-only symbols).
- Still using `asserts` on imports instead of `with`.
- Path aliases without updating `paths` after removing `baseUrl`.

## Agent habits

- Trusting chat memory for “latest TypeScript” instead of typescriptlang.org / Context7 this session.
- Silently bumping the product’s `typescript` major without ADR.
- Opening only this pack and inventing React/Next APIs — open those packs too.
- Treating TS 7 as “new language syntax” — it is primarily a **native toolchain**; language defaults come from the 6.0 line.
