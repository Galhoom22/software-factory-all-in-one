# Arabic (Modern Standard) — data and search

Backups and dumps must preserve UTF-8.

## Must

- DB collation that sorts Arabic correctly (e.g. ICU / utf8mb4_unicode_ci class — pin what your engine supports)
- Search: normalize alef variants / tatweel thoughtfully; document the policy
- Full-text: prefer engines that tokenize Arabic; test prefix search on Arabic tokens
- Exports/PDF: embed Arabic-capable fonts; set RTL in the document when needed

## Avoid

- Latin-only collations for Arabic primary data
- Case-folding rules copied from English

## Exports

PDF/DOCX/CSV must preserve Unicode and, when relevant, direction.
