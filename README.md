# RevKeen TypeScript SDK

Official TypeScript/Node.js SDK for the RevKeen API.

## Installation

```bash
npm install @revkeen/sdk
```

## Usage

```typescript
import { RevKeen } from '@revkeen/sdk';

const rk = new RevKeen({ apiKey: 'rk_live_...' });

const customers = await rk.customers.list();
```

## Documentation

- [API Reference](https://api.revkeen.com/v2/docs)
- [RevKeen Website](https://revkeen.com)
