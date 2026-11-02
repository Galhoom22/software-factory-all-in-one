# SEO — [Product]

> Planning only. FE implements public-page technical SEO (`docs/frontend/SEO.md`).

| Field | Value |
|-------|-------|
| Owner | Shared strategy; **FE** implements |
| Related | `docs/frontend/SEO.md`, COMPLIANCE marketing/privacy red lines, DECISIONS (SEO entry) |

## Goal

Public pages are crawlable, indexable, honest, and fast. Do not index the signed-in product. Do not invent reviews, ratings, or unprovable claims.

## Indexation

| URL class | Index |
|-----------|-------|
| Marketing / landing / public legal | Yes |
| Auth, app, billing, staff, internal catalogs | No (`noindex`) |

## Must ship before launch

- [ ] Localized title and description on every public page
- [ ] Canonical + hreflang (every locale + `x-default`)
- [ ] `robots.txt` + XML sitemap matching the allow-list
- [ ] Honest JSON-LD only (no AggregateRating / fake reviews)
- [ ] Analytics only after cookie consent; never send private user content to analytics
- [ ] Search Console verified; sitemap submitted on go-live

Map useful fundamentals from a public SEO learning path (for example [roadmap.sh/seo](https://roadmap.sh/seo)) into the rows above — keep technical and on-page; skip spammy off-page tactics.
