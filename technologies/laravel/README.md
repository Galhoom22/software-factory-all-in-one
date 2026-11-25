# Laravel — technology pack

**Pinned slice for new work in this pack:** **Laravel 13.x** (released 2026-03-17; docs current 2026-11-21).  
**Official home:** [laravel.com/docs/13.x](https://laravel.com/docs/13.x) · [Releases](https://laravel.com/docs/13.x/releases) · [Upgrade](https://laravel.com/docs/13.x/upgrade)

**PHP:** Laravel 13 requires **PHP 8.3–8.5** per the [support policy](https://laravel.com/docs/13.x/releases#support-policy). Also open [`../php/`](../php/README.md); do not assume PHP 8.6 until Laravel lists it.

## When to open this pack

- Before any non-trivial **Laravel** code (automatic latest check — see `quality.md`).
- Controllers, Form Requests, Eloquent, queues, Sanctum, jobs, AI SDK, tests.
- Upgrading major versions — read `laravel-13/stop-using.md` + official upgrade guide.

## Files

| File | Purpose |
|------|---------|
| [`official-refs.md`](official-refs.md) | Curated 13.x doc links |
| [`best-practices.md`](best-practices.md) | Modern Laravel defaults |
| [`quality.md`](quality.md) | Clean Code + modular monolith + patterns |
| [`laravel-13/`](laravel-13/README.md) | Version slice: use / stop / mistakes |

## Product vs pack

- This pack describes professional **Laravel 13** code.
- Product SRS §2 owns the Laravel version pin.
- Never bump major without ADR + SRS + CI.

## Related

- PHP pack: [`../php/`](../php/README.md)
- API readiness: `07-judgment/api-readiness.md`
- Day pipeline: `08-IMPLEMENTATION-DAY.md`

