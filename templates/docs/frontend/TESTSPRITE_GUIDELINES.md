# TestSprite Guidelines — Frontend

Copy into the frontend implementation repository. Paste into MCP/agent prompts when generating TestSprite runs.

## Hard constraints

- Fictional data only; no real personal documents or emails.
- Password fixtures meet the product minimum length.
- Do not skip consent, auth redirects, or destructive confirms.
- Prefer critical journeys from `TESTING.md` (P0) over exhaustive UI coverage.

## P0 themes (adapt to the product)

1. Unauthenticated → sign-in redirect
2. Sign-in success / failure
3. Core create → review / confirm flow
4. Plan or quota limit messaging when applicable
5. Export / delete confirmations

## Plans

One JSON object per file; `type: "frontend"`; plain-language actions and assertions. Validate with `testsprite test create --plan-from … --dry-run`.
