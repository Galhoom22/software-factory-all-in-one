# Queue-Based Load Leveling — relations

## Confused with

| Other | Note |
|-------|------|
| Throttling | See selector confusion pairs |
| Competing Consumers | See selector confusion pairs |

## Combines with

- **Competing Consumers** — common pairing; still open at most 1–3 packs
- **Priority Queue** — common pairing; still open at most 1–3 packs
- **Circuit Breaker** — common pairing; still open at most 1–3 packs

## Alternatives

- Simpler list in applicability.md
- Related GoF shapes when the pain is in-process: [`design-patterns/`](../../design-patterns/README.md) via [`07-judgment/design-patterns.md`](../../07-judgment/design-patterns.md)
- Enterprise boundary craft: [`07-judgment/enterprise-system-design.md`](../../07-judgment/enterprise-system-design.md)
