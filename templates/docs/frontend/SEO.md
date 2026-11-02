# Frontend SEO — [Product]

| Field | Value |
|-------|-------|
| Owner | Frontend |
| Related | `docs/SEO.md` |

## Defaults

- Root layout: `robots: { index: false, follow: false }`
- Public marketing/legal: override to indexable with localized metadata
- `metadataBase` / site origin = production HTTPS URL

## Ship

- [ ] `generateMetadata` on each public page (title, description, canonical, languages, Open Graph)
- [ ] `app/robots.ts` allow-list
- [ ] `app/sitemap.ts` for public URLs only
- [ ] Landing JSON-LD from the same copy users see (FAQ / SoftwareApplication as applicable)
- [ ] No `dangerouslySetInnerHTML` for user/API HTML; static JSON-LD as a `<script type="application/ld+json">` text child is fine when the payload is product-owned strings
