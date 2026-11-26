# Frontend SEO + GEO — [Product]

| Field | Value |
|-------|-------|
| Owner | Frontend |
| Related | `docs/SEO.md`, factory `07-judgment/seo-geo.md` |

## Defaults

- Root layout: `robots: { index: false, follow: false }`
- Public marketing/legal: override to indexable with localized metadata
- `metadataBase` / site origin = production HTTPS URL

## Ship — technical

- [ ] `generateMetadata` (or stack equivalent) on each public page (title, description, canonical, languages, Open Graph)
- [ ] `app/robots.ts` (or equivalent) allow-list
- [ ] `app/sitemap.ts` for public URLs only
- [ ] Landing JSON-LD from the same copy users see (FAQ / SoftwareApplication as applicable)
- [ ] No `dangerouslySetInnerHTML` for user/API HTML; static JSON-LD as a `<script type="application/ld+json">` text child is fine when the payload is product-owned strings

## Ship — on-page + GEO craft

- [ ] One H1; descriptive H2/H3 that match user questions and section intent
- [ ] FAQ / support blocks: question phrasing users actually use; complete answers; schema mirrors visible text
- [ ] Lead sections with a concise direct answer before deep detail
- [ ] Prefer static or server-rendered HTML for public pages (avoid client-only shells for indexable content)
- [ ] Meaningful image `alt`; no decorative spam for “SEO keywords”
- [ ] Compliance-safe titles and descriptions (no fabricated authority)

## Definition of Done (public-page slice)

- [ ] Shared checklist in `docs/SEO.md` is green for the change
- [ ] robots + sitemap match the allow-list on the target environment
- [ ] Lighthouse SEO (or equivalent) clean on changed public routes
- [ ] Locale alternates do not point at `noindex` URLs
- [ ] Rich Results / schema validation passes without implying false claims
- [ ] GEO craft items above checked for every new or rewritten public page
