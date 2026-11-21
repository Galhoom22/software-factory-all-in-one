# Symfony — technology pack

**Pinned slice for new work in this pack:** **Symfony 8.1.x** (current stable on check day 2026-11-21; `symfony.com/doc/current` tracks this line).  
**Official home:** [Documentation hub](https://symfony.com/doc) · [Setup](https://symfony.com/doc/current/setup.html) · [Best practices](https://symfony.com/doc/current/best_practices.html) · [Releases](https://symfony.com/releases)

**Requires (8.1 stable):** PHP **8.4.0+** (extensions: Ctype, iconv, PCRE, Session, SimpleXML, Tokenizer).  
**LTS alternative:** Symfony **7.4** (PHP **8.2+**) — use when the product explicitly pins LTS (`--version=lts` / `7.4.*`).

## When to open this pack

- Building or reviewing a **Symfony** application (webapp, API, console).
- Using Symfony **components** in a non-Symfony PHP app.
- Choosing stable **8.1.*** vs LTS **7.4.***.

## Files

| File | Purpose |
|------|---------|
| [`official-refs.md`](official-refs.md) | Curated current-docs URLs (dated) |
| [`best-practices.md`](best-practices.md) | Official + pack defaults |
| [`quality.md`](quality.md) | Clean Code + architecture in Symfony form |
| [`symfony-8/`](symfony-8/README.md) | Version slice: use / stop / common mistakes |

## Product vs pack

- This pack describes professional **Symfony 8** (and how to choose LTS 7.4).
- Products already on **Laravel** must **not** migrate to Symfony by habit — record an ADR if the framework should change.
- Standalone Symfony packages remain valid in any PHP project when the product already uses them.

## Related

- PHP: [`../php/`](../php/README.md)
- Laravel: [`../laravel/`](../laravel/README.md) (different framework — do not mix conventions blindly)
- Twig/AssetMapper/UX live under Symfony docs Front-end section

---
