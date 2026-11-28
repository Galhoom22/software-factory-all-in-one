# TypeScript 7.0 — version slice

**Line:** TypeScript **7.0** (`typescript@7.0.x` on npm as of check) — native Go port of the compiler + LSP  
**Docs hub:** [typescriptlang.org/docs](https://www.typescriptlang.org/docs/) (checked 2026-11-28)  
**Announce:** [Announcing TypeScript 7.0](https://devblogs.microsoft.com/typescript/announcing-typescript-7-0/)  
**Prior major for migrate:** [TypeScript 6.0 release notes](https://www.typescriptlang.org/docs/handbook/release-notes/typescript-6-0.html) (defaults + deprecations that 7 hard-errors)

| File | Purpose |
|------|---------|
| [`use-these.md`](use-these.md) | Prefer these modern TS 6/7 defaults and language features |
| [`stop-using.md`](stop-using.md) | Removed / hard-error / legacy — ban in new code |
| [`common-mistakes.md`](common-mistakes.md) | Failure modes agents hit |

Parent pack: [`../README.md`](../README.md) · Best practices: [`../best-practices.md`](../best-practices.md)

**Toolchain honesty:** Prefer TS 7 for `tsc` and editor speed. Keep TS 6 available when a tool needs the **programmatic API** (eslint, some framework language plugins) until Microsoft ships the 7.x API.
