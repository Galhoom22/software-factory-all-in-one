# Alpine.js 3.x — stop using these

Sources: [Installation](https://alpinejs.dev/essentials/installation), [Start Here](https://alpinejs.dev/start-here), [CSP](https://alpinejs.dev/advanced/csp).

**Rule for agents:** do not introduce the left column in new code.

## Install / runtime

| Stop using | Use instead |
|------------|-------------|
| CDN script **without** `defer` | `defer` as required by docs |
| Calling **`Alpine.start()` more than once** | Single start per page |
| Registering plugins **after** `start()` | Register between import and `start()` |
| Unpkg floating `//unpkg.com/alpinejs` in production without a pin | jsDelivr (or npm) with **exact** version |
| Default Alpine under a strict CSP that bans eval-like APIs | `@alpinejs/csp` build |

## Markup / state anti-patterns

| Stop using | Use instead |
|------------|-------------|
| Alpine directives **without** an `x-data` ancestor | Add `x-data` (even empty) on a parent |
| `x-for` directly on a `<div>` / `<li>` | `x-for` on `<template>` |
| Giant multi-screen apps as one `x-data` blob | Split islands; or use the product SPA framework |
| `x-html` with unsanitized user input | `x-text` or sanitized trusted HTML only |
| Rebuilding React/Next features in Alpine inside a separate SPA frontend | Stay on that frontend's pinned stack unless an ADR says otherwise |

## Legacy / wrong generation

| Stop using | Notes |
|------------|-------|
| Alpine **v2** APIs/docs patterns in new work | Pack targets **v3** only |
| Inventing a second framework of helpers that duplicate official plugins | Prefer documented plugins |
