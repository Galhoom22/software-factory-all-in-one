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
| ✅ | Tailwind CSS pack hub | `technologies/tailwindcss/` | **88** | Vite install + v4 practices + quality |
| ✅ | Tailwind CSS v4 slice | `technologies/tailwindcss/tailwindcss-v4/` | **88** | use / stop / mistakes from tailwindcss.com |
| ✅ | Alpine.js pack hub | `technologies/alpinejs/` | **88** | Start Here + install + quality |
| ✅ | Alpine.js 3.x slice | `technologies/alpinejs/alpinejs-v3/` | **88** | use / stop / mistakes from alpinejs.dev |
| ❌ | Next.js pack | `technologies/nextjs/` | **0** | Structure ready; add when owner asks |
| ❌ | Other stacks | — | **0** | Add on demand (owner pastes official docs URL → fill pack same session) |

**Domain average (started packs only): ~89%. Library-wide including empty Next slot: ~84%.**

## Agent decision cheat-sheet

| Owner ask | Action |
|-----------|--------|
| Add PHP / 8.6 practices | Deepen `php/` — do not fork a second PHP bible |
| Pastes an official stack docs URL (e.g. Tailwind Vite install) | Create or deepen `technologies/<slug>/` from `_pack-template/`; pin latest official line; update this atlas + sync |
| Add Laravel / Next.js | Create `technologies/<slug>/` from README template; pin official version |
| Product still on older PHP / CSS | Keep SRS pin; use pack as upgrade guide, not silent bump |



