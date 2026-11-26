# PHP — technology pack

**Pinned slice for new work in this pack:** **PHP 8.6** (released 2026-11-19).  
**Official home:** [PHP Manual](https://www.php.net/manual/en/) · [PHP 8.6 release](https://www.php.net/releases/8.6/en.php) · [Migrate 8.5 → 8.6](https://www.php.net/manual/en/migration86.php)

## When to open this pack

- Implementing or reviewing **PHP** application code (CLI, FPM, Laravel, etc.).
- Bumping a product’s PHP version in SRS §2 / CI — re-read the version slice first.
- Owner asks for PHP best practices or “what’s new / what’s dead.”

## Files

| File | Purpose |
|------|---------|
| [`official-refs.md`](official-refs.md) | Curated official links (manual, migration, security) |
| [`best-practices.md`](best-practices.md) | Modern PHP habits (8.0→8.6) agents must default to |
| [`php-8.6/`](php-8.6/README.md) | Version slice: use / stop / common mistakes |

## Product vs pack

- This pack says what **professional PHP 8.6 code** looks like.
- A product may still pin an older Active/Maintenance line until its SRS and CI move.
- Never change production PHP solely because this pack exists — record an ADR and update SRS §2 + CI.

## Related factory homes

- Backend CI / day loop: `09-CI-CD.md`, `08-IMPLEMENTATION-DAY.md`
- API readiness: `07-judgment/api-readiness.md`
- Framework packs (when added): `technologies/laravel/`
