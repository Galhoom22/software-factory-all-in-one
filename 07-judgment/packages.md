# Judgment — packages over reinvention (when they earn it)

**Hard rule (language-agnostic):** before building a non-trivial capability by hand, ask whether a **maintained package** (library, SDK, first-party framework package, official plugin) already does the job well. Prefer the package when it **saves time, effort, and money** and **raises professionalism**. Do **not** add a package for every tiny helper.

Applies to PHP, C#, JavaScript, Python, Java, Go, and any other stack the product uses.

## When this judgment applies

- Designing or implementing a feature that looks larger than a few clear lines
- Reaching for custom parsing, PDF/Excel, auth providers, payments adapters, image processing, queues UI, admin CRUD, i18n tooling, etc.
- Reviewing a PR that reinvents something the ecosystem already solved
- Owner asks “should we build this ourselves?”

## Adopt

| Do | Why |
|----|-----|
| For non-trivial work: **search** the product’s ecosystem for a fit (official first-party → well-known maintained packages) | Avoid costly DIY |
| **Recommend** a package when it clearly wins on cost + quality; then use it in the implementation | Time, money, professionalism |
| Prefer **stdlib / platform / already-installed** deps when they are enough | Fewer moving parts |
| Prefer **first-party / official** packages when equal quality | Support and docs |
| **Verify** before adopting (see checklist below) | Supply-chain and maintenance risk |
| Record lasting package pins in SRS §2 (or equivalent) + REFERENCES when product rules require it | Traceability |
| Keep Ponytail: smallest complete change — the package **replaces** DIY complexity; it does not add a second parallel DIY | Least code that works |

## Forbid

| Do not | Why |
|--------|-----|
| Add a package for a few lines of obvious code | Dependency tax for no gain |
| “Package shopping” every micro-task | Noise, bloat, slower builds |
| Pick abandoned, unlicensed, or unauditable packages | Security and lock-in |
| Add a package that fights the chosen architecture (e.g. heavy SPA admin into a pinned SPA↔API product without ADR) | Architecture drift |
| Vendor a whole framework because one helper looked nice | Overkill |
| Invent a private micro-library “for later” with one call site | YAGNI |

## Decision test (use this every time)

Prefer a package when **all** of these are true:

1. The DIY path is **non-trivial** (days of work, edge cases, security surface, or ongoing maintenance).
2. A package exists that covers the **real** requirement (not 10% of it with a rewrite anyway).
3. Using it **increases** professionalism (correctness, security, a11y, i18n, tests) or clearly cuts cost.
4. The package **passes** the verification checklist.

Otherwise: write the small amount of house code (or use stdlib).

## Verification checklist (must pass)

Before recommending or installing:

| Check | Fail → |
|-------|--------|
| **Fit** — matches product requirements and architecture | Skip or need ADR |
| **Maintained** — recent releases / commits; not abandoned | Skip |
| **License** — compatible with the product | Skip or legal ask |
| **Security** — no known critical issues for the pinned line; reputable source | Skip or wait |
| **Cost** — install + upgrade burden < DIY + maintenance | Skip |
| **Scope** — does not drag an unwanted architecture | Skip or ADR |
| **Pin** — version line recorded where the product pins deps (SRS / lockfile) | Do not leave “latest” vague in docs |

## Advice shape

When the work is non-trivial:

1. Name the capability in one line.
2. Say whether a package search is warranted (yes/no + why).
3. If yes: name **1–2** candidates (prefer official), why the winner wins, checklist result.
4. If adopting: install/pin, use it, delete DIY that it replaces.
5. If not: implement the smallest house solution.

## Related

- External SDKs/partners: also [`integration-engineering.md`](integration-engineering.md).

- Ponytail / engineering standards: never add a dependency for a few lines — this judgment covers the **other** side (do not DIY a product when a package earns it)
- [`stack-selection.md`](stack-selection.md) — whole-stack choice; this file is **per capability**
- [`design-patterns.md`](design-patterns.md) — patterns ≠ packages; both must be earned
- [`architecture-patterns.md`](architecture-patterns.md) — distributed topology ≠ a package; both must be earned
- Product `SECURITY` / `COMPLIANCE` — may veto a package
