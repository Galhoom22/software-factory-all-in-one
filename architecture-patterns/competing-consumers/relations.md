# Competing Consumers — relations

## Confused with

| Other | Note |
|-------|------|
| Publisher-Subscriber (fan-out copy) | See selector confusion pairs |
| Sequential Convoy (order within group) | See selector confusion pairs |

## Combines with

- **Queue-Based Load Leveling** — common pairing; still open at most 1–3 packs
- **Idempotent Consumer** — common pairing; still open at most 1–3 packs
- **Priority Queue** — common pairing; still open at most 1–3 packs

## Alternatives

- Simpler list in applicability.md
- Related GoF shapes when the pain is in-process: [`design-patterns/`](../../design-patterns/README.md) via [`07-judgment/design-patterns.md`](../../07-judgment/design-patterns.md)
- Enterprise boundary craft: [`07-judgment/enterprise-system-design.md`](../../07-judgment/enterprise-system-design.md)
