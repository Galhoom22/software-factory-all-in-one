# Backend Docker — [Product]

Owner: BE. See `docs/DOCKER.md`.

- Compose: database (+ extensions), mail catcher, API, queue worker.
- Pin database and runtime to SRS §2.
- Production stays on the accepted host unless DECISIONS change.
- Host / Herd: `DB_HOST=127.0.0.1` in `.env`. Compose `api` / `queue`: `DB_HOST=<postgres-service>` via Compose `environment:` (not by editing the host `.env` for Docker).
- If the API uses Laravel `artisan serve` in the container, set Compose `command` (and image `CMD`) to include `--no-reload` so Compose env reaches HTTP workers. Symptom of the miss: CLI DB OK, HTTP `Connection refused` to `127.0.0.1:5432`. See [`../learning-from-mistakes/laravel-serve-strips-compose-env.md`](../learning-from-mistakes/laravel-serve-strips-compose-env.md).
