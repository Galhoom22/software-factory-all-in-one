# French — data and search

Full-text French stemming is engine-specific.

## Must

- Accent-aware collation; optional accent-insensitive search column if required
- Sort that does not throw école after z

## Avoid

- latin1
- Stripping accents on write

## Exports

PDF/DOCX/CSV must preserve Unicode and, when relevant, direction.
