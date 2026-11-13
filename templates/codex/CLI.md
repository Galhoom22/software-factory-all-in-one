# Codex CLI — how to use this repository

<!-- Copy to `.codex/CLI.md`. Use plain path names (no relative Markdown links) while this file lives under templates/. -->

This repo is tuned first for **OpenAI Codex CLI** (`codex`). The same `.codex/` files also work for the Codex IDE extension and Desktop app (shared config layers).

## One-time setup (this machine)

1. Install / update CLI: `npm install -g @openai/codex`
2. From the **repository root**:

   ```bash
   codex
   ```

3. When prompted, **trust this project**. Without trust, Codex CLI skips project `.codex/config.toml`, hooks, and can skip `AGENTS.md`.
4. In the CLI, run `/hooks` once and **trust** the project SessionStart / Stop hooks (they change hash when we edit them — re-approve after updates).
5. Confirm readiness:

   ```bash
   node scripts/verify-codex-cli.mjs
   ```

## Every session

```bash
cd <repo-root>
codex
```

Optional non-interactive:

```bash
codex exec "Read docs/AGENT_START.md and AGENTS.md, then reply only ok"
```

Paste the Codex prompt from `playbook/05-PROMPTS.md` if you want an explicit start line.

## What the CLI loads (when trusted)

| Source | What you get |
|--------|----------------|
| `AGENTS.md` | Full rulebook (auto) |
| `.codex/config.toml` → `developer_instructions` | Hard rails every turn |
| `.codex/hooks.json` SessionStart | Short rail reminder |
| `.codex/hooks.json` Stop | Runs delivery + agents + scope checks |

## If rails seem ignored

1. Confirm you started `codex` from the **git repo root**.
2. Run `node scripts/verify-codex-cli.mjs` — fix any untrusted / missing hook trust warnings.
3. Run `codex doctor` and check Configuration → cwd is this repo.
4. Open `/hooks` and trust project hooks again after `hooks.json` or scripts change.

## Do not
- Put only boolean feature flags under `[features]`. Keys like `project_doc_fallback_filenames` and `developer_instructions` must be top-level, or Codex fails with `invalid type: sequence, expected a boolean in features`.

- Start Codex in an untrusted copy of the repo and expect project rails.
- Disable `[features].hooks` for this work.
- Skip `docs/AGENT_START.md` / `AGENTS.md` when using a weak model inside Codex.
