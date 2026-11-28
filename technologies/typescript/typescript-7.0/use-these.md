# TypeScript 7.0 — prefer these

Sources: [Docs hub](https://www.typescriptlang.org/docs/), [Choosing Compiler Options](https://www.typescriptlang.org/docs/handbook/modules/guides/choosing-compiler-options.html), [TS 6.0 notes](https://www.typescriptlang.org/docs/handbook/release-notes/typescript-6-0.html), [TS 7.0 announce](https://devblogs.microsoft.com/typescript/announcing-typescript-7-0/).

## Compiler / project defaults (new work)

| Prefer | Instead of | Why |
|--------|------------|-----|
| `strict: true` | Loose / partial strict flags without reason | Default in modern TS; maximum type safety |
| `module` + `moduleResolution` for the host (`bundler` or `nodenext`) | `node10` / `classic` / AMD/UMD | Supported modern resolution |
| `verbatimModuleSyntax: true` (apps/libs as appropriate) | Implicit type-elision surprises | Honest ESM/CJS boundaries |
| Explicit `rootDir` when using `src/` | Relying on surprising defaults | TS 6+/7 `rootDir` default is `./` |
| Explicit `types` arrays for needed `@types` | Assuming all `@types` auto-load | TS 6+/7 default `types: []` |
| `typescript@7` for `tsc` / editor when API-free | Staying on 5.x out of habit | Native speed + 6.0-compatible checking |
| Side-by-side TS 6 API package when eslint/plugins need it | Breaking tools by deleting 6 | Documented transition path |

## Language features

| Prefer | Notes |
|--------|-------|
| Narrowing (`typeof`, equality, `in`, predicates, `asserts`) | Handbook narrowing before casts |
| `unknown` + validate | Trust boundaries |
| `satisfies` | Check shape; keep inferred literals |
| Discriminated unions | Replace many `enum` + switch piles |
| `import type` / inline `type` imports | With `verbatimModuleSyntax` |
| Generics with constraints | Shared collections and helpers |
| Utility types from the Handbook | `Partial`, `Pick`, `Omit`, `Record`, `Awaited`, … |
| `as const` / const type parameters when useful | Literal preservation |
| Project references for monorepos | Scale builds; pair with TS 7 `--builders` when earned |

## TS 7 runtime flags (when tuning large builds)

| Prefer | Notes |
|--------|-------|
| Default parallel checkers | Raise `--checkers` only with memory budget |
| `--builders` under `--build` | Monorepo project-reference parallelism |
| `--singleThreaded` | Debug / constrained CI — intentional only |
