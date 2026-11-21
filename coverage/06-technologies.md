# Coverage — technologies library

Paths under `playbook/technologies/`.

| ✅ | Capability | Path | % | Notes |
|----|------------|------|---|-------|
| ✅ | Technologies library layout | `technologies/README.md` | **90** | Slug + version-slice convention; agent protocol |
| ✅ | PHP pack hub | `technologies/php/` | **88** | Official refs + modern baseline |
| ✅ | PHP 8.6 version slice | `technologies/php/php-8.6/` | **85** | use / stop / common mistakes from php.net |
| ❌ | Laravel pack | `technologies/laravel/` | **0** | Structure ready; add when owner asks |
| ❌ | Next.js pack | `technologies/nextjs/` | **0** | Structure ready; add when owner asks |
| ❌ | Other stacks | — | **0** | Add on demand |

**Domain average (started packs only): ~88%. Library-wide including empty slots: ~72%.**

## Agent decision cheat-sheet

| Owner ask | Action |
|-----------|--------|
| Add PHP / 8.6 practices | Deepen `php/` — do not fork a second PHP bible |
| Add Laravel / Next.js | Create `technologies/<slug>/` from README template; pin official version |
| Product still on older PHP | Keep SRS pin; use pack as upgrade guide, not silent bump |
