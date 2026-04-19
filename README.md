# RevKeen TypeScript SDK

The official TypeScript and JavaScript client for the [RevKeen API](https://docs.revkeen.com). Typed end-to-end from the OpenAPI spec, with auto-pagination, automatic retries, webhook verification, and first-class OAuth support.

[![npm version](https://img.shields.io/npm/v/@revkeen/sdk?style=flat-square&color=000)](https://www.npmjs.com/package/@revkeen/sdk)
[![CI](https://img.shields.io/github/actions/workflow/status/RevKeen/sdk-typescript/ci.yml?branch=main&style=flat-square&label=ci)](https://github.com/RevKeen/sdk-typescript/actions)
[![License: MIT](https://img.shields.io/badge/license-MIT-000?style=flat-square)](./LICENSE)
[![Docs](https://img.shields.io/badge/docs-docs.revkeen.com-000?style=flat-square)](https://docs.revkeen.com/docs/sdks/typescript)

## Install

```bash
npm install @revkeen/sdk
# or: pnpm add / yarn add / bun add
```

Requires Node.js 18+ (or any modern runtime with `fetch`). Ships with full TypeScript definitions — no `@types` package needed.

## Quick start

```ts
import { RevKeen } from "@revkeen/sdk";

const client = new RevKeen({
  apiKey: process.env.REVKEEN_API_KEY!,
});

const customer = await client.customers.create({
  email: "ops@acme.example",
  name: "Acme Inc.",
});

console.log(customer.id);
```

## Features

- **Typed request and response shapes** — autocomplete and compile-time validation for every field
- **Automatic pagination** — `for await (const invoice of client.invoices.list())`
- **Automatic retries** — idempotent requests retry on `5xx`, `429`, and network errors with exponential backoff
- **Idempotency keys** — attached automatically on safe-to-retry mutations
- **Webhook verification** — `client.webhooks.verify(rawBody, signature, secret)`
- **OAuth 2.1 + API-key auth** — drop in either, mix per-request
- **Runtime-agnostic** — Node.js, Bun, Deno, Cloudflare Workers, Vercel Edge

## Documentation

- [SDK docs](https://docs.revkeen.com/docs/sdks/typescript) — examples, recipes, and full API surface
- [API reference](https://docs.revkeen.com/docs/api-reference) — every endpoint, from the OpenAPI spec
- [Webhooks guide](https://docs.revkeen.com/docs/webhooks) — signature verification + event catalogue
- [Versioning](https://docs.revkeen.com/docs/fundamentals/versioning) — API ↔ SDK compatibility matrix

## Generation

This SDK is generated from the [canonical OpenAPI spec](https://docs.revkeen.com/docs/api-reference). The generator runs on every spec change — see `.github/workflows/generate.yml`. A human-authored layer adds idiomatic helpers for pagination, retries, webhooks, and errors.

## Contributing

See [CONTRIBUTING.md](./CONTRIBUTING.md) for development setup, test instructions, and the release process.

Please file issues and feature requests on the [issue tracker](https://github.com/RevKeen/sdk-typescript/issues). For security disclosures, see [SECURITY.md](./SECURITY.md).

## License

[MIT](./LICENSE) — © RevKeen.
