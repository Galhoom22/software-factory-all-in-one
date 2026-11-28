# Arabic (Modern Standard) — UI / UX

Treat Arabic as a first-class locale, not an English layout flipped at the end.

## Must

- Full RTL: html dir=rtl (and lang=ar); logical CSS (inline-start/end, margin-inline) — not physical left/right for layout
- Mirror navigation, steppers, and chevrons; do not mirror brand marks or media that are not directional
- Labels, errors, and empty states in Modern Standard Arabic (MSA) unless product rules allow a named dialect
- Form fields: labels above or start-aligned; keep numbers readable (decide Western vs Eastern digits in DESIGN and stick to it)
- Diacritics: if the product shows vocalized Arabic, preserve them in the UI; do not treat tashkeel as decoration to strip for layout convenience
- WCAG: contrast and focus rings work in RTL; language switch names the other language in its own script

## Avoid

- Dialect slang in legal/pricing/consumer-facing text when MSA is required
- Hard-coded left/right padding that breaks RTL
- Mirroring logos, photos, or charts incorrectly
- Mixing digit systems in the same surface without a DESIGN rule

## Review prompts

1. Does the first viewport read correctly in RTL?
2. Is address/tone (formal vs informal) consistent?
3. Do strings fit without clipping after translation expansion?
4. Are digits and optional diacritics consistent with DESIGN?

