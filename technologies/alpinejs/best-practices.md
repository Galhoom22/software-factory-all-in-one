# Alpine.js — best practices

Sources: [Start Here](https://alpinejs.dev/start-here), [Installation](https://alpinejs.dev/essentials/installation). Re-check official docs before non-trivial Alpine work (SF-05).

## Install defaults (v3)

1. **CDN / demos:** `<script defer src="https://cdn.jsdelivr.net/npm/alpinejs@3.x.x/dist/cdn.min.js"></script>` in `<head>`. **Always `defer`.** For production, **pin an exact version** (e.g. `3.17.5`), not floating `@3.x.x` forever without review.
2. **Bundled apps:** `npm install alpinejs` → `import Alpine from 'alpinejs'` → `window.Alpine = Alpine` (optional) → register plugins → **`Alpine.start()` once**.
3. Register extensions **between** import and `Alpine.start()`. Never call `start()` twice on one page.

## Authoring (from Start Here + essentials)

- Every interactive island needs a parent **`x-data`** (object, empty `x-data`, or registered component).
- Prefer **`@click`** shorthand over verbose `x-on:click` in new markup (both are valid).
- Use **modifiers** deliberately (`.outside`, `.prevent`, `.stop`, …) instead of hand-rolled listeners.
- **`x-show`** for toggle visibility; pair with **`x-cloak`** + `[x-cloak]{display:none!important}` to avoid FOUC when default is hidden.
- **`x-model`** for input binding; keep expressions small.
- **`x-for`** only on `<template>` with a `:key` when list identity matters.
- Move large JS out of HTML attributes into **`Alpine.data(...)`** / modules when the object no longer fits one glance.

## Scope discipline

- Alpine = **progressive enhancement** of HTML. Do not use it to reimplement routing, large client stores, or a second app inside a React/Next product without an ADR.
- One concern per `x-data` root. Prefer several small islands over one mega-component.
- Prefer official **plugins** over reinventing collapse/persist/focus when those needs appear.

## Pairing

- With Tailwind: utilities in markup + Alpine for behavior — keep concerns split (classes ≠ state).
