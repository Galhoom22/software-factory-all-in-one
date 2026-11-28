# Rate Limiting — relations

## Confused with

| Other | Note |
|-------|------|
| Throttling (often server-side shedding) | See selector confusion pairs |
| Circuit Breaker | See selector confusion pairs |

## Combines with

- **Gateway Offloading** — common pairing; still open at most 1–3 packs
- **Bulkhead** — common pairing; still open at most 1–3 packs
- **Queue-Based Load Leveling** — common pairing; still open at most 1–3 packs

## Alternatives

- Simpler list in applicability.md
- Related GoF shapes when the pain is in-process: [`design-patterns/`](../../design-patterns/README.md) via [`07-judgment/design-patterns.md`](../../07-judgment/design-patterns.md)
- Enterprise boundary craft: [`07-judgment/enterprise-system-design.md`](../../07-judgment/enterprise-system-design.md)
