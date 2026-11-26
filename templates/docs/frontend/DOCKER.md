# Frontend Docker — [Product]

Owner: FE. See `docs/DOCKER.md`.

- Prefer host Node for day-to-day `dev`.
- Optional multi-stage `Dockerfile` for clean builds.
- Do not start a second database; use the backend Compose network/API URL.
