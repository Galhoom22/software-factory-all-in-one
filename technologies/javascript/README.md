# JavaScript — technology pack

**Pinned slice for new work in this pack:** **ECMAScript 2026** (ES2026 / 17th edition; docs checked 2026-11-21).  
**Official home:** [MDN JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript) · [JavaScript Guide](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide) · [JavaScript reference](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference) · [ECMA-262](https://262.ecma-international.org/)

## When to open this pack

- Writing or reviewing **core JavaScript** (browser, Node, or other hosts) — not framework-only recipes.
- Choosing modern language defaults (`const`/`let`, modules, `===`, async, iterators, Maps/Sets).
- Separating **language** (this pack) from **Web APIs / DOM** (MDN Web APIs) and from **TypeScript / Next.js** packs when those exist.

## Files

| File | Purpose |
|------|---------|
| [`official-refs.md`](official-refs.md) | Curated MDN + ECMA URLs (dated) |
| [`best-practices.md`](best-practices.md) | Modern JS language defaults |
| [`quality.md`](quality.md) | Clean Code + architecture + patterns in JS form |
| [`javascript-es2026/`](javascript-es2026/README.md) | Version slice: use / stop / common mistakes |

## Product vs pack

- This pack describes professional **ECMAScript / JavaScript language** usage grounded in MDN + ECMA-262.
- A product’s **runtime floor** (browsers, Node LTS) decides which ES2025/2026 APIs are safe without polyfills — check MDN Baseline / product SRS before adopting a brand-new built-in.
- TypeScript, React, Next.js, Alpine, Livewire, etc. layer on top; open those packs for framework rules. Do not invent DOM/API “style” from memory — use MDN Web APIs when the task is host-specific.

## Related

- Alpine: [`../alpinejs/`](../alpinejs/README.md) (declarative DOM — still needs sound JS)
- Livewire / Filament: server UI stacks that embed JS/Alpine
- Tailwind: CSS only — not a JS substitute
- Next.js: add `technologies/nextjs/` when the owner asks

---
