# Judgment — SEO + GEO (public surfaces)

Absorb dual search visibility as **judgment only**. Map it onto planning `docs/SEO.md`, FE `docs/frontend/SEO.md`, COMPLIANCE marketing red lines, and the day pipeline when **public/marketing/legal** pages change — never invent a second “growth SEO” program or spam tactics.

**Sources to prefer (re-check when advice conflicts):**

1. [Google Search Central — optimizing for generative AI features](https://developers.google.com/search/docs/fundamentals/ai-optimization-guide) (official for Google Search / AI Overviews / AI Mode)
2. Product COMPLIANCE / SECURITY (claims, consent, no fake authority)
3. Industry dual-opt craft that **does not** contradict (1)–(2) — e.g. clear Q&A structure, headings, citeable facts ([Frase SEO + GEO overview](https://www.frase.io/resources/seo-geo-guide) is optional reading, not a required vendor)

## Problem this prevents

Public pages that are only “keyword stuffed” or only “schema dumped” fail both channels:

- Traditional search: weak crawl/index/metadata, thin or dishonest copy, app routes indexed by accident.
- Generative / AI answer surfaces: content that is hard to extract, commodity rewrites, unciteable claims, or “GEO hacks” Google explicitly says to ignore.

Agents shipping FE marketing days without an SEO+GEO checklist leave the next product invisible in both SERPs and AI answers.

## Definitions (keep short)

| Term | Meaning here |
|------|----------------|
| **SEO** | Optimize crawlable public pages so search engines can index and rank honest results (titles, structure, technical health, people-first content). |
| **GEO** | Improve the chance that **AI answer / generative search** systems cite or ground on your public content (clarity, structure, unique useful facts). For Google Search, Google treats this as **still SEO** — same foundations, not a separate hack stack. |

## Adopt (wire into planning + day)

| Practice | Pass when | Where |
|----------|-----------|--------|
| **Index allow-list** | Only marketing/legal (and other deliberately public) URLs are indexable; app/auth/billing stay `noindex` | `docs/SEO.md`, FE robots/sitemap |
| **Technical foundations** | Localized title/description, canonical, locale alternates, HTTPS, crawlable HTML, honest JSON-LD when used | FE SEO guide + launch checklist |
| **People-first, non-commodity copy** | Public copy answers real user intents with unique, truthful product value — not AI-slop rewrites of common tips | Landing/FAQ/legal |
| **Structure for humans and extraction** | One H1; descriptive H2/H3; short paragraphs; lists where they help; FAQ that mirrors visible Q&A; lead with the direct answer then detail | On-page craft |
| **Citeable claims** | Stats and product facts are true, dated when needed, and match visible copy + schema (no invented reviews/ratings) | COMPLIANCE + JSON-LD |
| **Measure after launch** | Search Console (coverage, CWV, queries); use Google’s Generative AI performance report when available; optional manual spot-checks on major AI assistants | Ops section of SEO.md |
| **Day gate (public pages)** | Any must-finish that ships or changes indexable URLs / metadata / schema / public FAQ runs the SEO+GEO checklist before Done | [`08-IMPLEMENTATION-DAY.md`](../08-IMPLEMENTATION-DAY.md) |

## Forbid

| Forbid | Why |
|--------|-----|
| Indexing signed-in app, auth, billing, or private catalogs | Leaks product; pollutes index |
| Fake AggregateRating, testimonials, guaranteed outcomes, bought links | COMPLIANCE / spam; destroys trust |
| Requiring `llms.txt`, special “AI-only” markup, or rewriting copy *only* for models (for Google Search) | [Google mythbusting](https://developers.google.com/search/docs/fundamentals/ai-optimization-guide) — ignored or ineffective |
| Scaled doorway pages / keyword-variant spam for fan-out queries | Spam policy; poor long-term quality |
| Treating a vendor “GEO score” as Done without official + product rails | No third party has Google’s internal systems |
| Blocking Done on ranking position or AI citation count | Launch readiness ≠ competitive SERP campaign |

## Overlap (do once, serves both)

Clear structure, comprehensive truthful answers, authority via real expertise and primary sources, fast accessible pages, and honest schema for rich results help **both** classic SEO and generative citation. Dual optimization is **one** content + technical bar — not two rewrite passes.

## Day pipeline placement

Same spirit as API readiness / DSA: a **named gate**, not a vibe.

1. **During the day** — if must-finish touches public marketing/legal pages, metadata, robots, sitemap, or public FAQ/schema: open product `docs/SEO.md` + FE SEO + this judgment; apply the checklist.
2. **Before PR** — Lighthouse SEO (or equivalent) clean on changed public routes in a production-like build; no RL/claim violations in title/H1/schema.
3. **Closeout evidence** — note which public URLs changed and that the SEO+GEO checklist passed (or “N/A — no public surfaces”).

Backend-only / private-API days: **skip** (say N/A). Do not invent marketing work.

## Minimum evidence to cite when the gate applies

- Public URL(s) touched + index yes/no confirmed.
- Metadata / hreflang / robots / sitemap still match the allow-list.
- Schema (if any) matches visible copy; no fabricated authority.
- Structure note: headings / FAQ / direct answers present where the page type needs them.
- Measurement plan unchanged or updated (Search Console after launch — not fake citation dashboards).

## Related homes

- Method: [`08-IMPLEMENTATION-DAY.md`](../08-IMPLEMENTATION-DAY.md)
- Templates: `templates/docs/SEO.md`, `templates/docs/frontend/SEO.md`
- Lessons: [`06-LESSONS.md`](../06-LESSONS.md) (SEO honesty)
- Product COMPLIANCE marketing / privacy red lines
