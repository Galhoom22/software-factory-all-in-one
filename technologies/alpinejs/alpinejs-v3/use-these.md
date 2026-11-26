# Alpine.js 3.x — prefer these

Sources: [Start Here](https://alpinejs.dev/start-here), [Installation](https://alpinejs.dev/essentials/installation).

## Install

| Prefer | Instead of | Why |
|--------|------------|-----|
| **`defer`** on the CDN script | Sync script in `<head>` without defer | Official requirement; avoids race with DOM |
| **Pinned CDN version** (`alpinejs@3.17.5`) in production | Eternal `@3.x.x` without review | Reproducible builds |
| **`npm install alpinejs` + `Alpine.start()` once** in bundles | Multiple starts / ad-hoc globals | Single instance |
| **CSP build** (`@alpinejs/csp`) when CSP forbids `new Function` | Default build under strict CSP | Official CSP path |

## Core directives (Start Here foundation)

| Prefer | Role |
|--------|------|
| **`x-data`** | Declare reactive state on a parent |
| **`@…` / `x-on:`** | Events (`@click`, `@click.outside`, …) |
| **`x-text` / `x-html`** | Text / HTML binding (prefer `x-text` when HTML not required) |
| **`x-show`** | Show/hide without destroying DOM |
| **`x-model`** | Two-way bind inputs |
| **`x-for` on `<template>`** | List rendering |
| **`x-cloak` + CSS rule** | Prevent flash before init |

## Structure as components grow

| Prefer | Notes |
|--------|-------|
| Getters for derived lists | e.g. `get filteredItems()` in Start Here search example |
| **`Alpine.data('dropdown', …)`** | Named, reusable components outside giant attributes |
| Official plugins | collapse, persist, focus, morph, … when the need is real |
| `:key` on `x-for` | Stable identity when items reorder |

## Canonical CDN (dev / docs style)

```html
<script defer src="https://cdn.jsdelivr.net/npm/alpinejs@3.x.x/dist/cdn.min.js"></script>
```

## Canonical module

```js
import Alpine from 'alpinejs'

window.Alpine = Alpine
Alpine.start()
```
