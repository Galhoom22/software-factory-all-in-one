# Arabic (Modern Standard) — pitfalls

## Common failures

- Shipping LTR English layout with Arabic text stuffed in
- Using dialect in UI while requirements demand MSA
- Breaking mixed Arabic–English sentences without bidi isolation
- Rejecting ی/ک vs ي/ك and locking out keyboard variants

## Confused with

| Other | Note |
|-------|------|
| English pack (baseline LTR) | See selector |
| Generic i18n without RTL | See selector |

## Combines with

- english (bilingual products)
- technologies frontend packs

## Checklist before Done

1. `lang` / `dir` correct on document?
2. Catalogs cover this locale for user-facing strings?
3. Collation/search policy documented?
4. No kit docs written *in* this language (instructions stay English — SF-21)?
5. Formality and regional variant chosen?
