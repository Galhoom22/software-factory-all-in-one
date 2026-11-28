# Laravel `artisan serve` strips Compose DB host

**Date:** 2026-11-28 · **Area:** Docker Compose / Laravel local API

## Symptom

Compose sets `DB_HOST` to the database **service name**. `php artisan config:show` / `db:show` inside the API container report that hostname and connect. HTTP requests (and API clients such as Apidog) still fail with:

`SQLSTATE[08006] … connection to server at "127.0.0.1", port 5432 failed: Connection refused`

CSRF or health routes that never touch the database may still return 2xx, so the stack looks “up.”

## Root cause

1. The API container mounts the project tree, including a host `.env` with `DB_HOST=127.0.0.1` (correct for Herd/host PHP).
2. Compose injects `DB_HOST=<service-name>` into the container environment.
3. Default `php artisan serve` (without `--no-reload`) starts the PHP built-in server as a child process and **clears** almost every environment variable so `.env` file changes can reload. Only a small passthrough list survives (`APP_ENV`, `PATH`, … — **not** `DB_HOST`).
4. The child process then loads the mounted `.env`, sees no Compose `DB_HOST`, and uses `127.0.0.1`. Inside the container that address is the container itself, not the Postgres service — connection refused.

CLI `artisan` in a fresh `docker exec` still sees Compose env, which is why diagnosis looks contradictory.

## Resolution

Run the API process with reload disabled so Compose env is passed through:

```bash
php artisan serve --host=0.0.0.0 --port=8000 --no-reload
```

Wire that as the Compose `command:` (and/or image `CMD`) for the API service. Recreate the API container after changing it. Keep host `.env` on `127.0.0.1` for Herd; do not “fix” Docker by rewriting the host file to the Compose hostname.

Verify with an HTTP path that reads config (or any DB-backed route), not only CLI `config:show`.

## Lesson

Compose environment and a mounted host `.env` are two audiences. Laravel’s default `serve` reload path privileges the file and silently drops Compose overrides. Prefer `--no-reload` in containers; document both hostnames; smoke DB through HTTP after every Compose recreate.
