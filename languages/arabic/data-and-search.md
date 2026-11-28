# Arabic (Modern Standard) — data and search

Backups and dumps must preserve UTF-8. Separate **display text** (as the user wrote it) from **search/index keys** (normalized).

## Must

- DB collation that sorts Arabic correctly (e.g. ICU / `utf8mb4_unicode_ci` class — pin what your engine supports)
- Search/index pipeline (document the order; apply to query *and* indexed fields the same way):
  1. Unicode normalize (NFC; NFKC only when you intentionally fold compatibility forms)
  2. Strip tatweel / kashida (`U+0640`) for matching
  3. Optionally strip tashkeel (diacritics) for matching — never strip them from stored user-facing content unless the product says so
  4. Fold alef variants (أ إ آ ٱ → ا) and often yeh / alef maksura (ى → ي) and teh marbuta (ة → ه) **for search only**
  5. Decide Eastern Arabic-Indic vs Western digits once; fold for search if both appear in input
- Full-text: prefer engines that tokenize Arabic; whitespace-only tokenizers miss clitics — test prefix/infix search on real Arabic tokens
- Exports/PDF: embed Arabic-capable fonts; set RTL in the document when needed

## Avoid

- Latin-only collations for Arabic primary data
- Case-folding rules copied from English
- Writing Buckwalter / SafeBW / HSB (or other Latin transliteration) into product databases or APIs — store Unicode Arabic script; transliteration is for NLP tooling, not user data
- Applying aggressive alef/teh-marbuta folds to *stored* display strings (breaks correct spelling and legal names)

## NLP / morphology (when the product earns it)

- Naive `split(/\s+/)` is not Arabic morphology. For search quality, spelling variants, or morphology-aware features, prefer a **verified Arabic NLP package** over a DIY character map ([`07-judgment/packages.md`](../../07-judgment/packages.md)).
- Dialect ID, NER, sentiment, and morphological disambiguation belong only when requirements name them — do not pull heavy model stacks "for later."
- Reference practice for Arabic text utilities (normalize, dediacritize, clean presentation forms): CAMeL Lab / CAMeL Tools concepts — re-verify the current library before depending on it in a product.

## Exports

PDF/DOCX/CSV must preserve Unicode and, when relevant, direction.
