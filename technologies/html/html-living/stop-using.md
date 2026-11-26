# HTML Living Standard — stop using these

Sources: [WHATWG obsolete features](https://html.spec.whatwg.org/multipage/obsolete.html), [MDN HTML](https://developer.mozilla.org/en-US/docs/Web/HTML).

**Rule for agents:** do not introduce the left column in new markup.

## Entirely obsolete elements (authors must not)

| Stop using | Use instead |
|------------|-------------|
| `applet` | `embed` / `object` (or better: no plugins) |
| `acronym` | `abbr` |
| `bgsound` | `audio` |
| `dir` | `ul` |
| `frame` / `frameset` / `noframes` | `iframe` + CSS, or full pages |
| `isindex` | Explicit `form` + text control |
| `keygen` | Platform / Web Crypto flows as appropriate |
| `listing` / `xmp` / `plaintext` | `pre` + `code` (escape properly) |
| `menuitem` | Scripted `contextmenu` handling if needed |
| `noembed` | Proper fallback patterns with modern embeds |
| `param` | `object` `data` (prefer modern embed patterns) |
| `rb` / `rtc` | Ruby markup per current model |
| `strike` | `del` (edit) or `s` (no longer accurate) |
| `basefont` / `big` / `blink` / `center` / `font` / `marquee` / `multicol` / `nobr` / `spacer` / `tt` | Semantic elements + CSS |

## Obsolete attributes (do not write)

| Stop using | Use instead |
|------------|-------------|
| Presentational attrs (`align`, `bgcolor`, `border` on `img`, …) | CSS |
| `name` on `a` for fragments | `id` |
| `charset` / `language` on `script` (legacy) | Omit; UTF-8 document |
| `type="text/css"` / JS MIME `type` when default | Omit when redundant |
| `rev` on `a`/`link` | Opposite `rel` term |
| `coords`/`shape` on `a` | `area` for image maps |

## Architecture anti-patterns

| Stop using | Use instead |
|------------|-------------|
| Clickable `div`/`span` as primary controls | `button` / `a[href]` |
| `div`-only page outline | Landmarks + headings |
| Placeholder-as-label | Visible `<label>` |
| Client-only form checks as security | Server validation always |
| Fabricated structured data / fake authority | Honest markup only (product SEO/COMPLIANCE rules) |

---
