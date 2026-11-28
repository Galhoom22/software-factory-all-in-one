# Docker — [Product]

> Planning only. Copy FE/BE docker skeletons into **implementation** repositories. Do not invent a second production host here unless DECISIONS says so.

| Field | Value |
|-------|-------|
| Related | `docs/frontend/DOCKER.md`, `docs/backend/DOCKER.md`, `docs/DEPLOYMENT.md` |

## Decision

- **Local:** Docker Compose for shared services (database, mail catcher, optional app processes).
- **Production:** keep the chosen hosting path (often managed VPS / PaaS) unless a decision moves production onto containers.

## Rules

- No secrets in images or Compose files.
- Pin runtime images to the SRS version lines.
- Fictional data only in local volumes.
- Backend owns the data-plane Compose; frontend points at it.
- **Two audiences for DB host:** host PHP / Herd uses `DB_HOST=127.0.0.1` in the mounted `.env`; Compose services set `DB_HOST` to the database **service name** in `environment:` (do not `env_file:` the host `.env` into those services — it fights overrides). Document both; never “fix” Docker by rewriting the host file to the Compose hostname.
- **Laravel API in Compose:** run `php artisan serve … --no-reload` (Compose `command:` and/or image `CMD`). Default `serve` clears Compose env for the PHP child so the mounted `.env` wins and HTTP talks to `127.0.0.1` inside the container. Details: [`learning-from-mistakes/laravel-serve-strips-compose-env.md`](learning-from-mistakes/laravel-serve-strips-compose-env.md).
- Always pass the host `.env` for Compose **interpolation** only (e.g. `${APP_KEY}`): `docker compose --env-file .env -f docker/compose.yaml up …`.
- After recreate, smoke a **DB-backed HTTP** route (not only `docker exec … artisan config:show`).

## Checklist

- [ ] Both developers can start the local stack from the implementation repos
- [ ] Production deploy docs still match the accepted hosting decision
- [ ] Compose API process keeps service-name DB host under HTTP (Laravel: `--no-reload` or equivalent)
