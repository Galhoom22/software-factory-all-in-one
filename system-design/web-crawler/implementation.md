# Web crawler — implementation

## Steps

1. Write the pain and reject simpler alternatives explicitly.
2. Run back-of-the-envelope (QPS, storage, bandwidth) when load matters.
3. Sketch components and trust boundaries.
4. Name failure modes and consistency expectations.
5. Add observability at the new seams.
6. Record the Architecture Decision Record (selector template).

## Pseudocode

```
on design_trigger:
  apply design_method()
  if pack_web_crawler earns keep:
    document ADR
  else:
    keep baseline
```

## TypeScript sketch (illustration)

```ts
/** Illustration only — not production copy-paste. */
export type DesignChoice = { chosen: string; baselineRejected: boolean };

export function noteWebcrawlerChoice(): DesignChoice {
  return { chosen: "web-crawler", baselineRejected: true };
}
```

## PHP sketch (illustration)

```php
/** Illustration only — not production copy-paste. */
final class WebcrawlerChoice
{
    public function chosen(): string
    {
        return 'web-crawler';
    }
}
```

## Testing at the risk boundary

- Prove the failure or scale pain this pack claims to address (load, lag, partition, abuse).
- Assert degraded modes are intentional.
- For exercises: walk the design-method steps with numbers.

## Refactor toward / away

- **Toward:** measured pain matches signals; baseline rejected; ADR written.
- **Away:** load or topology no longer justifies the complexity.
