# SEO + GEO — [Product]

> Planning only. FE implements public-page technical SEO and on-page craft (`docs/frontend/SEO.md`). Judgment: factory `07-judgment/seo-geo.md`.

| Field | Value |
|-------|-------|
| Owner | Shared strategy; **FE** implements |
| Related | `docs/frontend/SEO.md`, COMPLIANCE marketing/privacy red lines, DECISIONS (SEO entry), factory `07-judgment/seo-geo.md` |

## Goal

Public pages are crawlable, indexable, honest, fast, and **clear enough to cite** in traditional search results **and** generative / AI answer surfaces. Do not index the signed-in product. Do not invent reviews, ratings, or unprovable claims.

- **SEO** — classic crawl → index → rank readiness.
- **GEO** — structure and truthfulness that help AI systems ground or cite your public content. For Google Search, foundations are still SEO ([Google AI optimization guide](https://developers.google.com/search/docs/fundamentals/ai-optimization-guide)); do not chase vendor-only “GEO hacks.”

## Indexation

| URL class | Index |
|-----------|-------|
| Marketing / landing / public legal | Yes |
| Auth, app, billing, staff, internal catalogs | No (`noindex`) |

## Must ship before launch (SEO + GEO)

### Technical SEO

- [ ] Localized title and description on every public page
- [ ] Canonical + locale alternates (`hreflang` or equivalent + `x-default`)
- [ ] `robots.txt` + XML sitemap matching the allow-list
- [ ] Honest JSON-LD only (no AggregateRating / fake reviews) — same facts users see
- [ ] Analytics only after cookie consent; never send private user content to analytics
- [ ] Search Console verified; sitemap submitted on go-live

### GEO / answer-surface craft (same pages — not a second site)

- [ ] Public copy is **people-first and non-commodity** (unique product truth, not generic tip-list spam)
- [ ] Clear heading hierarchy; FAQ / Q&A where users ask real questions; **direct answer first**, then detail
- [ ] Lists and short paragraphs where they aid scanning and extraction
- [ ] Claims are citeable (true, specific, linked to primary sources when citing stats)
- [ ] No `llms.txt` / AI-only markup **required** for Google; optional files for other systems must not replace the HTML truth
- [ ] After launch: monitor Search Console (including Generative AI performance when available); optional spot-checks on major AI assistants — citations are a signal, not a Done gate

Map useful fundamentals from a public SEO learning path (for example [roadmap.sh/seo](https://roadmap.sh/seo)) into the rows above — keep technical and on-page; skip spammy off-page tactics. Dual-opt overview (optional): [Frase SEO + GEO guide](https://www.frase.io/resources/seo-geo-guide) — discard anything that conflicts with Google Search Central or product COMPLIANCE.
