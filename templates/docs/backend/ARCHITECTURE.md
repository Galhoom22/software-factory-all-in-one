# Backend Architecture — {{PRODUCT}}

> ⚠️ **Planning only.** A proposal for the implementation repository. Libraries named here are proposals until they are added to [SRS §2](../SRS.md#2-technology-stack) with a verified version.

## 1. Principles

- Framework-native features first (auth, queues, validation, ORM) before extra services.
- Business rules live in one place, the backend.
- Prefer a **modular monolith**: one deployable app and database, code split by domain modules with Service Providers and public Actions — not microservices, not a flat ball-of-mud `app/` tree. Add a module toolkit package only if the product explicitly decides to.

## 2. Folder Structure

```text
app/
  Modules/{Name}/   Http, Models, Actions, Jobs, Providers, routes, migrations
  Shared/           cross-cutting helpers only (keep thin)
```

## 3. Request Lifecycle

Authentication → authorization (owner check) → validation → action → resource response.

## 4. Asynchronous Work

Which tasks run as queued jobs, how status is exposed, and how failures are retried.

If the product uses AI: prefer the framework AI SDK (or one thin OpenAI-compatible provider entry) over a custom multi-adapter layer; configure chat and embeddings separately; stamp the embedding model on each vector row and re-embed on model change (vectors from different models are not interchangeable).

## 5. Data and Privacy

Encryption of sensitive fields, retention, deletion, and data export.

## 6. Security

The SECURITY rules with Owner = BE or Both.

## 7. Testing

Full guide: [`TESTING.md`](TESTING.md). Feature tests per endpoint (including authorization); unit tests for business rules; fake external providers.

## 8. Deployment (initial production)

Hosting, database, queue worker, backups, and monitoring, kept to what the current actor needs in production; details in [`../DEPLOYMENT.md`](../DEPLOYMENT.md) and the [backend deployment guide](DEPLOYMENT.md).

