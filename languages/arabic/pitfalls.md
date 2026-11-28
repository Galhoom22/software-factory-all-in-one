# Arabic (Modern Standard) — pitfalls

## Common failures

- Shipping LTR English layout with Arabic text stuffed in
- Using dialect in UI while requirements demand MSA
- Breaking mixed Arabic–English sentences without bidi isolation
- Rejecting ی/ک vs ي/ك and locking out keyboard variants
- Normalizing alef/teh-marbuta **into the database** so legal names and MSA spelling are permanently altered
- Indexing raw text while querying normalized text (or the reverse) — silent empty search
- Leaving tatweel / decorative elongation in match keys
- Stripping tashkeel from user content the product was supposed to keep
- Storing or exchanging Buckwalter/SafeBW instead of Unicode Arabic
- "Cleaning" Arabic by deleting everything outside a tiny allow-list and destroying bilingual fields
- Assuming one tokenizer / stemming rule from English IR will work on Arabic clitics

## Confused with

| Other | Note |
|-------|------|
| English pack (baseline LTR) | Kit docs stay English (SF-21); product UI may be Arabic |
| Generic i18n without RTL | Direction + shaping are first-class here |
| Arabic *NLP research encodings* | Tooling concern — not product storage |

## Combines with

- english (bilingual products)
- technologies frontend packs
- packages judgment when Arabic NLP is in scope

## Checklist before Done

1. `lang` / `dir` correct on document?
2. Catalogs cover this locale for user-facing strings?
3. Collation **and** search-normalization policy documented (display vs index)?
4. No kit docs written *in* this language (instructions stay English — SF-21)?
5. Formality and regional variant (MSA vs named dialect) chosen?
6. Digits policy (Western vs Eastern) fixed in DESIGN?
7. No transliteration encoding in product APIs/DB?
