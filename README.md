# RevKeen TypeScript SDK

[![npm version](https://img.shields.io/npm/v/@revkeen/sdk.svg)](https://www.npmjs.com/package/@revkeen/sdk)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)

Official TypeScript/Node.js SDK for the [RevKeen API](https://docs.revkeen.com/api-reference/openapi), generated with OpenAPI Generator `7.24.0`.

> [!IMPORTANT]
> This repository is a generated release mirror. Propose source changes in
> [RevKeen/revkeen](https://github.com/RevKeen/revkeen); `main` here is updated only by an explicit reviewed SDK release.

## Installation

```bash
npm install @revkeen/sdk
```

```bash
pnpm add @revkeen/sdk
```

```bash
yarn add @revkeen/sdk
```

## Quick Start

```typescript
import { RevKeenClient, RevKeenEnvironment } from '@revkeen/sdk';

const client = new RevKeenClient({
  secretKey: process.env.REVKEEN_API_KEY!,
  environment: RevKeenEnvironment.Sandbox,
});

const customers = await client.customers.list({ limit: 10 });

for (const customer of customers.data) {
  console.log(customer.name, customer.email);
}
```

## Authentication

### API Key (recommended for server-to-server)

```typescript
const client = new RevKeenClient({
  secretKey: process.env.REVKEEN_API_KEY!,
  environment: RevKeenEnvironment.Production,
});
```

### OAuth 2.1 (recommended for MCP and third-party integrations)

```typescript
const client = new RevKeenClient({
  environment: RevKeenEnvironment.Production,
  oauth: {
    clientId: process.env.REVKEEN_CLIENT_ID!,
    clientSecret: process.env.REVKEEN_CLIENT_SECRET!,
    scopes: ['customers:read', 'invoices:read'],
  },
});
```

The SDK handles token acquisition, caching, and automatic refresh. See the [OAuth guide](https://docs.revkeen.com/docs/developers/oauth) for details.

## Resources

Every API resource is available as a typed property on the client:

| Resource | Method examples |
|----------|----------------|
| `client.customers` | `list()`, `create()`, `get()`, `update()`, `delete()` |
| `client.invoices` | `list()`, `create()`, `get()`, `update()`, `finalize()`, `send()`, `void()` |
| `client.subscriptions` | `list()`, `create()`, `get()`, `update()`, `cancel()`, `pause()`, `resume()` |
| `client.products` | `list()`, `create()`, `get()`, `update()`, `delete()` |
| `client.payments` | `list()`, `create()`, `get()` |
| `client.checkoutSessions` | `create()`, `get()` |
| `client.discounts` | `list()`, `create()`, `get()`, `update()`, `delete()` |
| `client.creditNotes` | `list()`, `create()`, `get()` |
| `client.paymentLinks` | `list()`, `create()`, `get()`, `update()` |
| `client.paymentMethods` | `list()`, `get()`, `detach()` |
| `client.webhookEndpoints` | `list()`, `create()`, `delete()` |
| `client.events` | `list()`, `get()` |
| `client.entitlements` | `list()`, `check()` |

## Webhook Verification

```typescript
import { constructEvent, WebhookSignatureVerificationError } from '@revkeen/sdk';

try {
  // Capture rawBody before any JSON middleware runs.
  const event = constructEvent(
    rawBody,
    headers['revkeen-signature'],
    process.env.REVKEEN_WEBHOOK_SECRET!
  );

  switch (event.type) {
    case 'invoice.paid':
      console.log('Invoice paid:', event.data.id);
      break;
  }
} catch (error) {
  if (error instanceof WebhookSignatureVerificationError) {
    console.error('Invalid signature');
  }
}
```

## Error Handling

```typescript
import { RevKeenAPIError } from '@revkeen/sdk';

try {
  const customer = await client.customers.get('cus_nonexistent');
} catch (error) {
  if (error instanceof RevKeenAPIError) {
    console.error(`API error ${error.status}: ${error.code}`);
  }
}
```

## Configuration

```typescript
const client = new RevKeenClient({
  secretKey: process.env.REVKEEN_API_KEY!,
  environment: RevKeenEnvironment.Sandbox,
  connectTimeout: 5_000,
  readTimeout: 30_000,
});

// Custom endpoints require the explicit escape hatch.
const local = RevKeenClient.forCustomBaseUrl('http://localhost:4010/v2', {
  secretKey: process.env.REVKEEN_API_KEY!,
});
```

## Compatibility

- **Runtime:** Node.js 18+
- **Package format:** ESM and CommonJS
- **TypeScript:** Full type definitions included

## Links

- [API Reference](https://docs.revkeen.com/api-reference/openapi)
- [SDK Documentation](https://docs.revkeen.com/docs/developers/sdks/typescript)
- [Go SDK](https://github.com/revkeen/sdk-go)
- [PHP SDK](https://github.com/revkeen/sdk-php)
