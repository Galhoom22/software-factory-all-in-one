# German — data and search

Swiss German (de-CH) may prefer ss over ß — regionalize if you ship CH.

## Must

- Collation that handles umlauts predictably (document phonebook vs dictionary order if it matters)
- Search: umlaut-insensitive options if product needs them — test explicitly

## Avoid

- Latin1 encodings
- Case-fold maps that break ß

## Exports

PDF/DOCX/CSV must preserve Unicode and, when relevant, direction.
