# State — implementation

## Steps

1. List modes and the operations that differ per mode. Drop operations that are identical everywhere.
2. Define a `State` interface with those operations, taking the context when transitions are needed.
3. Move each mode’s branches into a concrete state. Context methods become one-line delegates.
4. Decide who owns transitions: context methods, or state objects calling `context.transitionTo(...)`.
5. Persist status at the composition/DB edge if the lifecycle outlives the request.
6. Test illegal transitions and one happy path per mode.

## Pseudocode

```
class PaymentIntent:
  state = DraftState()
  method capture(): state.capture(this)
  method transitionTo(s): this.state = s

class DraftState:
  method capture(ctx): reject("authorize first")

class AuthorizedState:
  method capture(ctx):
    provider.capture(ctx.id)
    ctx.transitionTo(CapturedState())
```

## TypeScript sketch (illustration)

```ts
interface State {
  capture(ctx: PaymentIntent): void;
}

class PaymentIntent {
  constructor(private state: State) {}
  capture(): void {
    this.state.capture(this);
  }
  transitionTo(state: State): void {
    this.state = state;
  }
}

class AuthorizedState implements State {
  capture(ctx: PaymentIntent): void {
    // call payment-provider adapter, then:
    ctx.transitionTo(new CapturedState());
  }
}

class CapturedState implements State {
  capture(): void {
    /* idempotent */
  }
}
```

## PHP sketch (illustration)

```php
interface State
{
    public function capture(PaymentIntent $ctx): void;
}

final class PaymentIntent
{
    public function __construct(private State $state) {}

    public function capture(): void
    {
        $this->state->capture($this);
    }

    public function transitionTo(State $state): void
    {
        $this->state = $state;
    }
}

final class AuthorizedState implements State
{
    public function capture(PaymentIntent $ctx): void
    {
        $ctx->transitionTo(new CapturedState());
    }
}
```

## Testing at the risk boundary

- Risk: illegal transition succeeds, or legal transition leaves the wrong mode.
- Drive the context through events; assert resulting state type or persisted status.
- Fake the payment-provider adapter; assert it was called only from allowed modes.
- Cover idempotent re-entry for terminal modes (double capture).

## Refactor toward / away

- **Toward:** exploding status switches; duplicated transition guards; modes with multi-method rule sets.
- **Away:** collapse to enum + guards when modes shrink; replace with a persisted transition table when the machine must survive deploys and be audited centrally.
