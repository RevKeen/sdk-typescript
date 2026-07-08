# RevKeen TypeScript SDK

[![npm version](https://img.shields.io/npm/v/@revkeen/sdk.svg)](https://www.npmjs.com/package/@revkeen/sdk)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)

Official TypeScript/Node.js SDK for the [RevKeen API](https://docs.revkeen.com/api-reference/openapi) — auto-generated from the OpenAPI specification via [Hey API](https://heyapi.dev).

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
import { RevKeen } from '@revkeen/sdk';

const client = new RevKeen({ apiKey: process.env.REVKEEN_API_KEY! });

const customers = await client.customers.list({ limit: 10 });

for (const customer of customers.data) {
  console.log(customer.name, customer.email);
}
```

## Browser and Server Clients

Use the browser entry point for storefront code. It only accepts `rk_pk_*`
publishable keys and only exposes product-read and cart operations.

```typescript
import { RevKeenBrowserClient } from '@revkeen/sdk/browser';

const revkeen = new RevKeenBrowserClient({
  publishableKey: 'rk_pk_test_123',
});

const products = await revkeen.products.list();
const cart = await revkeen.cart.sessionsCreate();
```

Use the server entry point for secret-key setup, webhook, and admin operations.
It rejects publishable keys and exposes the full generated SDK surface plus
webhook verification helpers.

```typescript
import { RevKeenServerClient, constructEvent } from '@revkeen/sdk/server';

const revkeen = new RevKeenServerClient({
  apiKey: process.env.REVKEEN_API_KEY!,
});

await revkeen.webhookEndpoints.list();
const event = constructEvent(body, signature, process.env.REVKEEN_WEBHOOK_SECRET!);
```

## Authentication

### API Key (recommended for server-to-server)

```typescript
const client = new RevKeen({ apiKey: process.env.REVKEEN_API_KEY! });
```

### OAuth 2.1 (recommended for MCP and third-party integrations)

```typescript
const client = new RevKeen({
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
  const event = constructEvent(
    requestBody,
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
try {
  const customer = await client.customers.get('cus_nonexistent');
} catch (error) {
  if (error instanceof RevKeen.ApiError) {
    console.error(`API error ${error.statusCode}: ${error.message}`);
  }
}
```

## Configuration

```typescript
const client = new RevKeen({
  apiKey: process.env.REVKEEN_API_KEY!,
  // Staging environment
  baseUrl: 'https://staging-api.revkeen.com',
  // Custom timeout (ms)
  timeoutInSeconds: 30,
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
