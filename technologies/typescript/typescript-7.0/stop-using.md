# TypeScript 7.0 — stop using these

Sources: [TS 6.0 release notes](https://www.typescriptlang.org/docs/handbook/release-notes/typescript-6-0.html), [TS 7.0 announce](https://devblogs.microsoft.com/typescript/announcing-typescript-7-0/) (hard errors for 6.0 deprecations).

## Compiler options (hard-error / unsupported in 7)

| Stop using | Use instead |
|------------|-------------|
| `target: es5` | Modern `target` matching the product runtime (defaults track current ES) |
| `downlevelIteration` | Modern targets / runtime iterators |
| `moduleResolution: node` / `node10` / `classic` | `nodenext` or `bundler` |
| `module: amd` / `umd` / `system` / `none` | `esnext` / `preserve` + bundler or Node ESM |
| `baseUrl` | `paths` relative to the project root |
| `esModuleInterop: false` / `allowSyntheticDefaultImports: false` | Leave interop on (cannot disable in 7) |
| `alwaysStrict: false` | Strict mode is assumed |
| Import `asserts` keyword | Import attributes with `with` |
| `ignoreDeprecations` as a long-term crutch | Fix the underlying deprecated option |

## Language / declaration habits

| Stop using | Use instead |
|------------|-------------|
| `any` at API/DTO boundaries | `unknown` + zod/valibot/manual narrow (product choice) |
| Non-null `!` to silence null | Fix the type or narrow |
| `namespace` / `module` keyword for app structure | ES modules |
| Triple-slash reference sprawl in apps | Proper module imports + `types` |
| Ambient globals for app DTOs | Imported types |
| Mixed string/number enums “for convenience” | Literal unions or consistent enums |

## JavaScript-checked files (TS 7 JS analysis)

When checking `.js` with TS 7, stop relying on legacy Closure/JSDoc quirks called out in the 7.0 announce (e.g. values-as-types without `typeof`, `@enum` special-case, Closure function syntax). Prefer real `.ts` or modern JSDoc `@typedef`.

## Architecture anti-patterns

| Stop using | Why |
|------------|-----|
| `as unknown as T` chains without validation | Lies to the typechecker |
| Disabling `strict` to green CI | Hides entire bug classes |
| One mega `types.ts` for every feature | Coupling and merge pain |
