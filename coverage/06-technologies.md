# Coverage — technologies library

Paths under `playbook/technologies/`.

| ✅ | Capability | Path | % | Notes |
|----|------------|------|---|-------|
| ✅ | Technologies library layout | `technologies/README.md` | **90** | Slug + version-slice convention; agent protocol |
| ✅ | PHP pack hub | `technologies/php/` | **90** | Official refs + modern baseline + `quality.md` |
| ✅ | PHP 8.6 version slice | `technologies/php/php-8.6/` | **85** | use / stop / common mistakes from php.net |
| ✅ | Quality bar + auto latest-docs | `technologies/README` + each `quality.md` | **92** | Clean Code/architecture/patterns + mandatory official refresh (D-66) |
| ✅ | Pack template for next stacks | `technologies/_pack-template/` | **90** | Required file list for Laravel/Next/… |
| ✅ | Laravel pack hub | `technologies/laravel/` | **88** | Official 13.x refs + practices + quality |
| ✅ | Laravel 13 version slice | `technologies/laravel/laravel-13/` | **88** | use / stop / mistakes from laravel.com/docs/13.x |
| ❌ | Next.js pack | `technologies/nextjs/` | **0** | Structure ready; add when owner asks |
| ❌ | Other stacks | — | **0** | Add on demand |

**Domain average (started packs only): ~90%. Library-wide including empty Next slot: ~82%.**

## Agent decision cheat-sheet

| Owner ask | Action |
|-----------|--------|
| Add PHP / 8.6 practices | Deepen `php/` — do not fork a second PHP bible |
| Add Laravel / Next.js | Create `technologies/<slug>/` from README template; pin official version |
| Product still on older PHP | Keep SRS pin; use pack as upgrade guide, not silent bump |


