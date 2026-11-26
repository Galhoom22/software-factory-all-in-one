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

## Checklist

- [ ] Both developers can start the local stack from the implementation repos
- [ ] Production deploy docs still match the accepted hosting decision
