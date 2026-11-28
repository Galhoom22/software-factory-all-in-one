# Chain of Responsibility — implementation

## Steps

1. Name the request type and the outcome (continue / stop / result).
2. Define the smallest handler contract (`handle` + optional `next`).
3. Implement one concrete handler per real gate; keep each under a few lines of decision logic.
4. Assemble the chain (or register middleware) in one composition root — not inside handlers.
5. Cover short-circuit and happy-path with focused tests at the chain head.

## Pseudocode

```
head = auth.then(throttle).then(deliver)
client.submit(request) -> head.handle(request)
  auth: if fail -> stop; else next.handle(request)
  throttle: if limited -> stop; else next.handle(request)
  deliver: send notification / write export / call payment adapter
```

## TypeScript sketch (illustration)

```ts
type Result = { ok: true } | { ok: false; reason: string };
type Handler = (req: { userId: string }, next: () => Result) => Result;

const auth: Handler = (req, next) =>
  req.userId ? next() : { ok: false, reason: "unauthenticated" };

const throttle: Handler = (_req, next) => next(); // stub: real limiter here

const deliver: Handler = (_req, _next) => ({ ok: true });

function chain(handlers: Handler[]): (req: { userId: string }) => Result {
  const run = (i: number, req: { userId: string }): Result =>
    i >= handlers.length ? { ok: true } : handlers[i](req, () => run(i + 1, req));
  return (req) => run(0, req);
}

const handle = chain([auth, throttle, deliver]);
```

## PHP sketch (illustration)

```php
interface Handler {
    public function setNext(?Handler $next): Handler;
    /** @param array{userId:string} $request */
    public function handle(array $request): array;
}

abstract class BaseHandler implements Handler {
    private ?Handler $next = null;
    public function setNext(?Handler $next): Handler { $this->next = $next; return $next ?? $this; }
    protected function forward(array $request): array {
        return $this->next?->handle($request) ?? ['ok' => true];
    }
}

final class AuthHandler extends BaseHandler {
    public function handle(array $request): array {
        return ($request['userId'] ?? '') === ''
            ? ['ok' => false, 'reason' => 'unauthenticated']
            : $this->forward($request);
    }
}
```

## Testing at the risk boundary

- Assert an early handler stops the chain (later handlers never run — spy or counter).
- Assert a valid request reaches the terminal handler.
- Prefer fakes for side-effecting terminals (notifier, payment adapter, export writer).

## Refactor toward / away

- **Toward:** nested `if` gates in one service; duplicated pre-checks across controllers.
- **Away:** collapse to a function list or framework middleware when the custom Handler types add no rule the platform lacks.
