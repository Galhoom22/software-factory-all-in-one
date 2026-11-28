# Throttling — relations

## Confused with

| Other | Note |
|-------|------|
| Rate Limiting | See selector confusion pairs |
| Circuit Breaker | See selector confusion pairs |

## Combines with

- **Bulkhead** — common pairing; still open at most 1–3 packs
- **Priority Queue** — common pairing; still open at most 1–3 packs
- **Queue-Based Load Leveling** — common pairing; still open at most 1–3 packs

## Alternatives

- Simpler list in applicability.md
- Related GoF shapes when the pain is in-process: [`design-patterns/`](../../design-patterns/README.md) via [`07-judgment/design-patterns.md`](../../07-judgment/design-patterns.md)
- Enterprise boundary craft: [`07-judgment/enterprise-system-design.md`](../../07-judgment/enterprise-system-design.md)
