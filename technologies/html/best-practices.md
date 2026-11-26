# HTML — best practices (modern baseline)

Defaults for agents writing **HTML** under this pack. Grounded in [MDN HTML](https://developer.mozilla.org/en-US/docs/Web/HTML), [elements reference](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements), and the [WHATWG Living Standard](https://html.spec.whatwg.org/multipage/). Slice details: [`html-living/`](html-living/README.md).

## 1. Document basics

- Use `<!DOCTYPE html>` and a single `<html>` → `<head>` / `<body>` tree.
- Set **`lang`** on `<html>` (and switch it when the product is bilingual).
- Prefer **UTF-8**; put `<meta charset="utf-8">` early in `<head>`.
- Write **lowercase** tag names (convention; HTML is case-insensitive for ASCII tag names).

## 2. Semantics over soup

- Prefer sectioning elements: `main`, `nav`, `header`, `footer`, `article`, `section`, `aside`, `search` — not unlabeled `div` stacks for landmarks.
- Prefer text semantics: `p`, lists, `h1`–`h6` (one logical outline), `strong`/`em`, `a`, `button` for actions, `label` + form controls.
- Respect **content categories** ([guide](https://developer.mozilla.org/en-US/docs/Web/HTML/Guides/Content_categories)) — do not nest interactive content illegally (e.g. `a` inside `a`, `button` inside `a`).

## 3. Forms and trust

- Prefer native form controls + **constraint validation** attributes (`required`, `type`, `pattern`, `min`/`max`, …) before inventing JS-only validation ([Form validation guide](https://developer.mozilla.org/en-US/docs/Web/HTML/Guides/Form_validation)).
- Always associate `<label>` with controls (`for`/`id` or wrapping).
- Validate again on the server — HTML validation is UX, not a security boundary.

## 4. Media and performance

- Prefer responsive images (`srcset` / `sizes` / `<picture>`) when assets matter ([Responsive images](https://developer.mozilla.org/en-US/docs/Web/HTML/Guides/Responsive_images)).
- Prefer native `<audio>` / `<video>` over obsolete plugins.
- Prefer meaningful `alt` on images (empty `alt=""` only when decorative).

## 5. Scripts and styles

- Prefer external CSS/JS modules the product already uses; do not revive presentational tags (`font`, `center`, `big`, …).
- Omit redundant `type="text/css"` / JavaScript MIME `type` on `style`/`script` when defaults apply (WHATWG obsolete-but-conforming warnings).
- Prefer `id` over obsolete `name` on anchors/`img` for fragment targets.

## 6. Accessibility (HTML layer)

- Prefer real controls (`button`, `a[href]`, form fields) over clickable `div`s.
- Prefer visible labels; do not rely on placeholder alone.
- Prefer landmarks and headings that match the visual structure (WCAG products still own the full a11y bar).

## 7. What “professional” does **not** mean here

- Not dumping every HTML element into every page.
- Not using microdata/microformats unless the product’s SEO/structured-data rules ask for them (and never fabricate authority).
- Not treating “HTML5” as a separate installable version — use the Living Standard + MDN.

---
