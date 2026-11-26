# HTML Living Standard — prefer these

Sources: [MDN HTML](https://developer.mozilla.org/en-US/docs/Web/HTML), [Elements](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements), [WHATWG HTML](https://html.spec.whatwg.org/multipage/).

## Document shell

| Prefer | Notes |
|--------|-------|
| `<!DOCTYPE html>` | Standards mode |
| `<html lang="…">` | Language (switch for bilingual UIs) |
| `<meta charset="utf-8">` early | Encoding |
| One `<main>` | Dominant content landmark |
| `header` / `nav` / `footer` / `aside` / `section` / `article` / `search` | Landmarks & outline |

## Text and inline semantics

| Prefer | Instead of |
|--------|------------|
| `h1`–`h6` outline | Bold `div`s as headings |
| `p`, `ul`/`ol`/`li`, `dl`/`dt`/`dd` | Breaks via `<br>` stacks for structure |
| `strong` / `em` | Presentational `b`/`i` when meaning is importance/stress (those tags still exist — use by meaning) |
| `a[href]` for navigation | Clickable non-links |
| `button` for actions | `div` + click handlers as the default control |
| `code` / `pre` / `kbd` / `samp` / `var` | `tt` / `xmp` / `plaintext` |

## Forms & interactive

| Prefer | Notes |
|--------|-------|
| Associated `<label>` | Every meaningful control |
| Appropriate `input` types | email, url, number, date, … when they match |
| Constraint attributes | `required`, `min`/`max`, `pattern`, … ([validation guide](https://developer.mozilla.org/en-US/docs/Web/HTML/Guides/Form_validation)) |
| `fieldset` / `legend` | Related control groups |
| Native `dialog` / `details` when enough | Before custom modal/accordion kits |

## Media & embeds

| Prefer | Notes |
|--------|-------|
| `img` + meaningful `alt` | Empty alt only if decorative |
| `picture` / `srcset` / `sizes` | Responsive assets ([guide](https://developer.mozilla.org/en-US/docs/Web/HTML/Guides/Responsive_images)) |
| `audio` / `video` | Not `bgsound` / plugins |
| `iframe` + CSS (when needed) | Not `frameset` / `frame` |

## Extensibility

| Prefer | Notes |
|--------|-------|
| `data-*` attributes | App-specific data without inventing attributes ([how-to](https://developer.mozilla.org/en-US/docs/Learn_web_development/Howto/Solve_HTML_problems/Use_data_attributes)) |
| Global attributes (`id`, `class`, `hidden`, `lang`, …) | Per [global attributes](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Global_attributes) |

---
