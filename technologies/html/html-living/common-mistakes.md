# HTML Living Standard — common mistakes

## Structure

| Mistake | What goes wrong | Fix |
|---------|-----------------|-----|
| Multiple `<main>` or none | Broken landmarks / a11y | One `main` for dominant content |
| Skipping heading levels randomly | Confusing outline | Logical `h1`–`h6` order |
| Nesting interactive in interactive | Invalid HTML, odd AT behavior | Follow content categories |
| Quirks mode (no doctype) | Layout/CSS surprises | `<!DOCTYPE html>` |

## Forms & a11y

| Mistake | What goes wrong | Fix |
|---------|-----------------|-----|
| Inputs without labels | Unusable with AT | `<label for>` or wrap |
| Relying only on HTML validation | Security holes | Server-side validation |
| `div` buttons | Keyboard/AT gaps | Native `button` |

## Media

| Mistake | What goes wrong | Fix |
|---------|-----------------|-----|
| Missing/`alt` that says “image” | Bad a11y/SEO | Meaningful alt or decorative empty |
| Huge single `img` for all viewports | Slow pages | `srcset`/`picture` |

## Agent habits

| Mistake | What goes wrong | Fix |
|---------|-----------------|-----|
| Treating “HTML5” as a separate install | Confusion | Living Standard + MDN |
| Copying HTML4 presentational tags | Obsolete / non-conforming | CSS + semantics; read obsolete.html |
| Inventing attributes | Invalid / ignored | Global attrs + `data-*` |
| Memorizing element lists | Drift | Re-open MDN Elements + this pack |

---
