# {{STACK}} — technology pack (template)

Copy this folder to `technologies/<slug>/`, replace placeholders, pin the current stable line from the **official** vendor site (re-verify today — do not trust memory).

**Pinned slice:** `{{VERSION}}`  
**Official home:** {{OFFICIAL_DOCS_URL}}

## Required files (every pack)

| File | Must answer |
|------|-------------|
| `README.md` | Pin, when to open, links to slices |
| `official-refs.md` | Dated official URLs only |
| `best-practices.md` | Modern defaults for this stack |
| `quality.md` | How Clean Code + architecture + patterns apply **here** |
| `<slug>-<version>/use-these.md` | Prefer these (current line) |
| `<slug>-<version>/stop-using.md` | Deprecated / legacy — ban in new code |
| `<slug>-<version>/common-mistakes.md` | Failure modes agents hit |

## Agent rule

Before writing code in this stack: read this pack **and** re-check official docs / Context7 for the pinned line (automatic — owner need not ask). Product SRS still owns the product’s version pin.
