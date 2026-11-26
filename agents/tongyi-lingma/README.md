# Tongyi Lingma — agent harness pack

**Pinned slice:** **Tongyi Lingma (Alibaba Cloud IDE plugin)** (checked **2026-11-23**).  
**Official home:** [Alibaba Cloud Tongyi Lingma](https://tongyi.aliyun.com/lingma) (re-verify)

**Region note:** China / Alibaba Cloud ecosystems (confirm international availability on official pages).

Shared rules for every harness — the single rulebook, session habits and quality bar — are in [`../README.md`](../README.md).

## When to open this pack

- VS Code / JetBrains Lingma plugin as the coding assistant.

## Official references

Re-verify on the vendor site when bumping; prefer these over blogs.

| Topic | Official URL | Checked |
|-------|--------------|---------|
| Tongyi Lingma | https://tongyi.aliyun.com/lingma | 2026-11-23 |

## How to drive it

- **Discovery pointer:** Plugin form — paste AGENT_START into chat rules / custom prompt if the product supports project instructions.
- **Depth:** **skeleton**. If thin: deepen from official docs before claiming high coverage %.

## Use these

- Use for Chinese-comment heavy codebases when that is the product language.
- Keep complex multi-repo day loops on a stronger agent harness when Lingma depth is insufficient.
- Deepen from official Lingma docs on owner request.

## Stop using

- Do not treat plugin chat as git SoT.

## Common mistakes

| Mistake | Fix |
|---------|-----|
| No project rules loaded | Paste AGENT_START summary into custom instructions |

## Product vs pack

- **Single rulebook:** product `AGENTS.md` (+ `docs/AGENT_START.md`) remains the only full constitution. This pack teaches **how to drive Tongyi Lingma** so it obeys that rulebook.
- Discovery pointer: Plugin form — paste AGENT_START into chat rules / custom prompt if the product supports project instructions.
- Do not fork a second rulebook inside this pack.
