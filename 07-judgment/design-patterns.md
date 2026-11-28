# Judgment — object-oriented design patterns

Absorb **GoF-style design pattern judgment** (creational / structural / behavioral blueprints; problem → naive → enhanced) for implementation design. Keep the on-demand reference library in [`design-patterns/`](../design-patterns/README.md) — open it **only through this selector**, never paste packs into products, never force a named pattern on every feature, and never copy toy “pizza/duck” sample trees (SF-18).

Upstream reading (human only, optional): classic GoF catalogs and reputable pattern courses. Prefer the **behaviors** below; keep instructor names and course PDFs out of product repos after absorption ([`01-STEPS.md`](../01-STEPS.md) § Absorb outside references).

## Adopt (map onto existing docs)

| Idea | Lands in |
|------|----------|
| A pattern is a **blueprint** (named solution shape), not a mandatory code paste | FEATURE_SDLC “Design pattern evaluation” · DECISIONS when architectural |
| **Define the problem first**, then a naive solution, then enhance — patterns earn their keep by fixing real pain (duplication, tight coupling, closed-for-extension) | Day design / spike notes · FEATURE design section |
| Patterns give a **shared language** (Factory, Strategy, Adapter, …) so review can say “this is an Adapter to the provider SDK” instead of inventing jargon | CodeRabbit / PR review · ARCHITECTURE |
| Prefer **composition (has-a)** over inheritance (is-a) unless the type hierarchy is the real domain model | clean-code / engineering-standards · FE/BE ARCHITECTURE |
| Creational / structural / behavioral is enough taxonomy for agents — pick the family that matches the pain | FEATURE conditional module |
| Framework-native mechanisms often **are** the pattern (middleware ≈ Chain of Responsibility; queue jobs ≈ Command; Eloquent relations ≠ invent Composite) | Prefer platform features (Ponytail order) |
| Not mandatory; **not only one valid pattern** per problem — document the choice and the rejected alternative when the abstraction is consequential | DECISIONS.md (options + ❌) · Pattern Decision Record below |
| UML / simple structure sketches clarify IS-A, HAS-A, dependency before coding a new layer | FEATURE design · SAD/ADR judgment |
| On-demand library packs deepen a **chosen** candidate | [`design-patterns/<slug>/`](../design-patterns/README.md) after this selector names it |

## Forbid

| Do not | Why |
|--------|-----|
| Introduce Factory / Observer / Strategy / DIY DI on a three-line fix | Ponytail + clean-code; pattern for show |
| Copy a full course sample domain into the product | Forever-generic; product domain wins |
| Treat Singleton as default for “global access” | Hidden coupling; prefer explicit injection / container the framework already has |
| Rewrite working modular-monolith boundaries to showcase patterns | Architecture stays the product’s chosen shape |
| Require a pattern name in every PR | Only when a consequential abstraction is added or changed |
| Open the whole `design-patterns/` tree “just in case” | Selector first; at most 1–3 candidate folders |
| Paste library packs into a product repository | Library is kit reference only (SF-18) |

## Selection procedure (mandatory)

1. **Problem** — one sentence: what hurts in today’s code?
2. **Forces** — what must stay true (extensibility, testability, latency, security boundary, …)?
3. **Baseline** — state the no-pattern option (plain function, data table, framework feature). Is it enough? If yes, stop: **Chosen: none (baseline)**.
4. **Family** — creation vs structure vs behavior of collaboration.
5. **Candidates** — use the table below; pick **1–3** rows.
6. **Open packs** — only those folders under [`design-patterns/`](../design-patterns/README.md).
7. **Choose** — write the Pattern Decision Record before merging the abstraction.

## Problem → pattern table

| You need to … | Candidates | Do not confuse with |
|---------------|------------|---------------------|
| Swap which concrete type a workflow constructs without editing the workflow | Factory Method | Abstract Factory (families), Builder (stepwise) |
| Build matching sets of related objects (theme/variant stays consistent) | Abstract Factory | Factory Method (one product), Builder |
| Assemble a complex value with many optional steps / representations | Builder | Prototype (clone), Abstract Factory |
| Duplicate a configured instance without depending on its concrete class | Prototype | Builder (from scratch), Memento (history) |
| Guarantee one shared instance (rarely justified) | Singleton | Container binding / scoped service |
| Call a third-party API whose shape does not match your port | Adapter | Facade (simplify subsystem), Bridge (split abs/impl) |
| Let an abstraction and its implementation evolve on separate axes | Bridge | Adapter (after-the-fact wrap), Strategy |
| Treat leaves and trees the same (outline, folder, menu) | Composite | Decorator (add behavior), Iterator (walk only) |
| Stack orthogonal behaviors without a subclass combinatorics explosion | Decorator | Proxy (access control), Adapter |
| Hide a noisy subsystem behind a narrow entry API | Facade | Adapter (one foreign type), Mediator |
| Share immutable intrinsic state across many fine-grained objects | Flyweight | Singleton (one instance), cache without identity rules |
| Control access, lazy-load, or audit calls to another object | Proxy | Decorator (behavior add), Adapter |
| Run a request through ordered handlers until one finishes it | Chain of Responsibility | Decorator (always wraps), Middleware (prefer framework) |
| Queue, log, undo, or retry a user/system action as an object | Command | Strategy (swap algorithm), queue job (prefer framework) |
| Walk a collection without exposing its storage | Iterator | Visitor (operation over structure), foreach (prefer language) |
| Stop N colleagues from calling each other directly | Mediator | Observer (broadcast), Facade |
| Snapshot and restore opaque object state (undo buffer) | Memento | Prototype (clone), Command history |
| Notify many listeners when one subject changes | Observer | Mediator (routed hub), framework events |
| Replace giant state `switch`es with per-state objects | State | Strategy (client picks algorithm), enums |
| Swap interchangeable algorithms behind one interface | Strategy | State (object owns transitions), Template Method |
| Fix algorithm skeleton; vary steps in subclasses/hooks | Template Method | Strategy (compose steps), Factory Method (creation step) |
| Add operations over a stable object structure without editing element types | Visitor | Iterator (traversal only), Strategy |

All 22 classic packs appear at least once above.

## Confusion pairs (one deciding question)

| Pair | Ask |
|------|-----|
| Strategy vs State | Does the **client** choose the algorithm, or does the **object** change behavior as its own state changes? |
| Strategy vs Template Method | Are variants **composed** as replaceable objects, or **inherited** as steps inside a fixed skeleton? |
| Strategy vs Command | Are you swapping **how** work is calculated, or packaging a **request** to send/queue/undo? |
| Decorator vs Proxy vs Adapter | Are you **adding behavior**, **controlling access**, or **translating an incompatible interface**? |
| Adapter vs Facade vs Bridge | Foreign shape to port; noisy subsystem to narrow API; or abstraction/implementation split by design? |
| Factory Method vs Abstract Factory vs Builder | One product hook; **family** of products; or **stepwise** construction of one complex product? |
| Composite vs Decorator | Uniform **tree of parts**, or **wrapper stack** on one component? |
| Chain of Responsibility vs Decorator | Can a handler **stop** the chain, or does every wrapper **always** participate? |
| Mediator vs Observer | Do colleagues talk through a **router**, or subscribe to a **subject’s** events? |
| Prototype vs Builder | Copy a **configured instance**, or **build** from steps/parameters? |

## Pattern Decision Record (mandatory for consequential abstractions)

```
Pattern decision
Problem:        <one sentence: what hurts today>
Forces:         <what must stay true: extensibility, testability, performance, …>
Baseline:       <no-pattern option> — sufficient? yes/no, why
Candidates:     <A> — rejected because … ; <B> — rejected because …
Chosen:         <X> — solves <problem> by <mechanism>
                OR none (baseline)
Framework-native alternative: <feature or "none">
Costs accepted: <indirection, files, learning curve>
Exit path:      <how to remove it if it proves wrong>
Evidence:       <test at the risk boundary>
```

“Chosen: none (baseline)” is a valid, often correct, outcome.

## Worked scenarios (generic)

### 1) No pattern — export filename sanitizer

```
Pattern decision
Problem:        Filenames for file export need illegal characters stripped.
Forces:         Pure, fast, easy to test; no variants planned.
Baseline:       A pure function `sanitizeFilename(name)` — sufficient? yes — one rule, no collaborators.
Candidates:     Strategy — rejected (no interchangeable algorithms). Decorator — rejected (no stacking behaviors).
Chosen:         none (baseline)
Framework-native alternative: language string APIs
Costs accepted: none
Exit path:      N/A
Evidence:       unit tests on edge filenames
```

### 2) Framework-native — HTTP cross-cutting checks

```
Pattern decision
Problem:        Authenticate and rate-limit requests before controllers run.
Forces:         Ordered pipeline; reusable across routes; matches framework lifecycle.
Baseline:       Inline checks in every controller — sufficient? no — duplication and missed routes.
Candidates:     Chain of Responsibility (hand-rolled) — rejected (framework already owns the pipeline). Decorator — rejected (HTTP lifecycle is not object wrapping).
Chosen:         none (baseline) as a GoF class design; use framework middleware instead
Framework-native alternative: Laravel HTTP middleware / Node middleware stack (Chain-of-Responsibility shape)
Costs accepted: framework conventions only
Exit path:      remove middleware registration
Evidence:       feature test: unauthenticated request never hits controller
```

### 3) Adapter — payment-provider SDK

```
Pattern decision
Problem:        Domain billing port expects charge(Money); vendor SDK uses createPayment(array).
Forces:         Keep domain free of vendor types; swap providers later.
Baseline:       Call SDK from application service — sufficient? no — vendor leaks into use-cases.
Candidates:     Facade — rejected (not simplifying a large subsystem; translating one type). Bridge — rejected (not designed as abs/impl split up front).
Chosen:         Adapter — solves incompatible shapes by wrapping the SDK behind the port
Framework-native alternative: none
Costs accepted: one adapter class per provider
Exit path:      delete adapter when vendor abandoned; keep port
Evidence:       fake adapter in unit tests; contract test against sandbox optional
```

### 4) Strategy — notification channel

```
Pattern decision
Problem:        Same notification content must send via email or push depending on user preference.
Forces:         Add channels without editing the notifier core; test each channel alone.
Baseline:       if/else on channel string — sufficient? no — grows with every channel and resists fakes.
Candidates:     State — rejected (channel is chosen by client/config, not object lifecycle). Template Method — rejected (no shared skeleton of steps worth inheriting).
Chosen:         Strategy — interchangeable send algorithms behind one interface
Framework-native alternative: map of callables / container-tagged handlers if tiny
Costs accepted: one class (or function) per channel
Exit path:      collapse to functions if only two stable channels remain
Evidence:       notifier unit test with fake channel strategy
```

### 5) Observer — document editor autosave hint

```
Pattern decision
Problem:       Many UI panels must refresh when the document model changes.
Forces:        Decouple model from panels; avoid N-to-N panel calls.
Baseline:      Model calls each panel method — sufficient? no — model knows all panels.
Candidates:    Mediator — rejected (no complex colleague protocol; simple broadcast). Singleton event bus — rejected (hidden global).
Chosen:        Observer — subject notifies subscribers on change
Framework-native alternative: framework events / Node EventEmitter when already in stack
Costs accepted: subscription lifecycle bookkeeping
Exit path:     unsubscribe on dispose; or switch to framework events
Evidence:      unit test: change fires listener once
```

## Professional bar (checklist)

Before adding or renaming a design-pattern-shaped abstraction:

1. **Problem named** in one sentence (what hurts today)?
2. **Naive path** stated (and why it fails on extensibility / coupling / duplication)?
3. **Baseline** (no pattern / framework feature) explicitly rejected or accepted?
4. **Pattern (or framework feature)** chosen because it removes that pain — not because it looks senior?
5. **Rejected alternative** named when the change is consequential (record above)?
6. Call sites stay readable; no new package for a few lines?
7. Tests cover the behavior at the risk boundary (not the pattern slogan)?
8. At most 1–3 library folders opened?

## Day workflow hook

Same as [`08-IMPLEMENTATION-DAY.md`](../08-IMPLEMENTATION-DAY.md): when the day’s work introduces a **consequential new abstraction**, complete the Pattern Decision Record (problem → baseline → candidates → chosen). If a surprising pattern misuse burned time, capture `docs/learning-from-mistakes/` and promote a generic bullet to [`06-LESSONS.md`](../06-LESSONS.md) automatically when professionalism rises.
