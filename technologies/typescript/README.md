# TypeScript — technology pack

**Pinned slice for new work in this pack:** **TypeScript 7.0** (`typescript@7` on npm; docs checked 2026-11-28).  
**Official home:** [TypeScript Documentation](https://www.typescriptlang.org/docs/) · [Handbook](https://www.typescriptlang.org/docs/handbook/intro.html) · [TSConfig Reference](https://www.typescriptlang.org/tsconfig)

## When to open this pack

- Writing or reviewing **TypeScript** (apps, libraries, Node, bundler apps) — types, `tsconfig`, modules, declaration files.
- Choosing modern defaults (`strict`, ESM, `verbatimModuleSyntax`, narrowing, `satisfies`).
- Separating **TypeScript** (this pack) from **ECMAScript / JavaScript** ([`../javascript/`](../javascript/README.md)) and from framework packs (React, Next.js, Vue, …).

## Files

| File | Purpose |
|------|---------|
| [`official-refs.md`](official-refs.md) | Curated typescriptlang.org URLs (dated) |
| [`best-practices.md`](best-practices.md) | Modern TS language + project defaults |
| [`quality.md`](quality.md) | Clean Code + architecture + patterns in TS form |
| [`typescript-7.0/`](typescript-7.0/README.md) | Version slice: use / stop / common mistakes |

## Product vs pack

- This pack describes professional **TypeScript** usage grounded in [typescriptlang.org/docs](https://www.typescriptlang.org/docs/).
- A product’s **compiler pin** and **runtime floor** live in product SRS / DECISIONS — do not silently bump `typescript` in a product repo when the pack moves.
- TypeScript 7 is a native (Go) port of the toolset: faster `tsc` and language service. Type-checking behavior aims to match TypeScript 6 with 6.0 defaults and hard errors for 6.0 deprecations. Tools that still need the **programmatic TS API** (e.g. typescript-eslint, Volar embeddings) may need **TypeScript 6 side-by-side** until 7.1+ API work lands — see the slice.
- Emitted / runtime JavaScript still follows the [`javascript/`](../javascript/README.md) pack.

## Related

- JavaScript / ES: [`../javascript/`](../javascript/README.md)
- React: [`../react/`](../react/README.md)
- Next.js: [`../nextjs/`](../nextjs/README.md)
- Vue: [`../vue/`](../vue/README.md)
