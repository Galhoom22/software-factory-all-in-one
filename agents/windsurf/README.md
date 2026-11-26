# Windsurf — agent harness pack

**Pinned slice:** **Windsurf Cascade** (checked **2026-11-23**).  
**Official home:** [Windsurf docs](https://docs.windsurf.com/) (re-verify)

**Region note:** Global (vendor availability).

Shared rules for every harness — the single rulebook, session habits and quality bar — are in [`../README.md`](../README.md).

## When to open this pack

- Windsurf IDE / Cascade agent on this repo.

## Official references

Re-verify on the vendor site when bumping; prefer these over blogs.

| Topic | Official URL | Checked |
|-------|--------------|---------|
| Windsurf documentation | https://docs.windsurf.com/ | 2026-11-23 |

## How to drive it

- **Discovery pointer:** `.windsurf/rules/` thin pointer + `AGENTS.md`.
- **Depth:** **full**. If thin: deepen from official docs before claiming high coverage %.

## Use these

- Keep `.windsurf/rules` thin; AGENTS.md is SoT.
- Same delivery / no-MVP rails as other harnesses.

## Stop using

- Do not invent a Windsurf-only constitution.

## Common mistakes

| Mistake | Fix |
|---------|-----|
| Rules drift from AGENTS | Edit AGENTS; keep pointer |

## Product vs pack

- **Single rulebook:** product `AGENTS.md` (+ `docs/AGENT_START.md`) remains the only full constitution. This pack teaches **how to drive Windsurf** so it obeys that rulebook.
- Discovery pointer: `.windsurf/rules/` thin pointer + `AGENTS.md`.
- Do not fork a second rulebook inside this pack.
