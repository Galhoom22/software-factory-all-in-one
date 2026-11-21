# Alpine.js — quality bar (Clean Code · architecture · patterns)

Works with Ponytail: smallest complete change that still meets this bar.

## 1. Clean Code in Alpine shape

| Rule | In Alpine terms |
|------|-----------------|
| Names reveal intent | `x-data` properties and event handlers say what they do (`open`, `count`, `filteredItems`) |
| Functions do one thing | Prefer small expressions / getters; extract `Alpine.data` when HTML JS grows |
| Readable in one pass | Multi-line `x-data` only until it hurts — then a named component |
| Comments explain why | Comment non-obvious modifiers (`.outside`) or CSP constraints — not every `@click` |
| Campsite | Leave islands smaller and clearer than you found them |

## 2. Architecture fit

- Alpine lives at the **edges** of server-rendered HTML (islands). It is not the app shell for MasarHub’s Next.js SPA.
- State stays local to the island unless you deliberately use `Alpine.store` for small shared UI chrome.
- Trust boundaries stay on the server/API — Alpine does not replace validation/authz.

## 3. Design patterns (judgment)

- Default: **declarative directives** in markup (the Alpine way).
- Extract **`Alpine.data('name', …)`** when reuse or testability needs a name.
- Do not invent a miniature Vuex/Redux inside Alpine “for architecture.”
- If the UI needs routing, complex async graphs, or shared domain state → use the product’s real FE framework (Next/React), not more Alpine.

## 4. Automatic latest check (mandatory)

Before non-trivial Alpine work:

1. Open this pack (`best-practices` + `alpinejs-v3/` slice).
2. Re-check [Start Here](https://alpinejs.dev/start-here) / [Installation](https://alpinejs.dev/essentials/installation) or Context7 for the pinned **3.x** line — memory is not evidence.
3. Confirm npm latest if pinning CDN; update `official-refs.md` date when bumping.

## Related

- Ponytail / Clean Code project rules
- Coverage: `coverage/06-technologies.md`
