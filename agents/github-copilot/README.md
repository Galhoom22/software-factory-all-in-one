# GitHub Copilot — agent harness pack

**Pinned slice:** **GitHub Copilot (IDE + coding agent)** (checked **2026-11-23**).  
**Official home:** [GitHub Copilot docs](https://docs.github.com/en/copilot)

**Region note:** Global (GitHub availability).

Shared rules for every harness — the single rulebook, session habits and quality bar — are in [`../README.md`](../README.md).

## When to open this pack

- VS Code / JetBrains Copilot Chat or Copilot coding agent on GitHub.

## Official references

Re-verify on the vendor site when bumping; prefer these over blogs.

| Topic | Official URL | Checked |
|-------|--------------|---------|
| GitHub Copilot documentation | https://docs.github.com/en/copilot | 2026-11-23 |
| Copilot coding agent | https://docs.github.com/en/copilot/concepts/about-copilot-coding-agent | 2026-11-23 |

## How to drive it

- **Discovery pointer:** `.github/copilot-instructions.md` (+ optional `.github/instructions/`).
- **Depth:** **full**. If thin: deepen from official docs before claiming high coverage %.

## Use these

- Keep copilot-instructions.md as a pointer to AGENTS.md / AGENT_START.
- PR reviews still need CI + human/CodeRabbit bars where product requires them.

## Stop using

- Do not put secrets in instructions files.
- Do not waive CI because Copilot “looks fine.”

## Common mistakes

| Mistake | Fix |
|---------|-----|
| Instructions fork of AGENTS | Thin pointer only |

## Product vs pack

- **Single rulebook:** product `AGENTS.md` (+ `docs/AGENT_START.md`) remains the only full constitution. This pack teaches **how to drive GitHub Copilot** so it obeys that rulebook.
- Discovery pointer: `.github/copilot-instructions.md` (+ optional `.github/instructions/`).
- Do not fork a second rulebook inside this pack.
