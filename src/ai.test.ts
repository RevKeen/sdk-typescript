import { describe, expect, it, vi } from "vitest";
import {
  AI_METER_ADAPTER_GUARDRAILS,
  buildAiUsageEvents,
  withRevKeenAiMetering,
  type RevKeenAiMeteringOptions,
} from "./ai.js";

function baseOptions(overrides: Partial<RevKeenAiMeteringOptions> = {}): RevKeenAiMeteringOptions {
  return {
    revkeen: {
      usage: {
        ingest: vi.fn(async () => ({
          object: "usage_event_batch_result" as const,
          summary: { ingested: 1, duplicate: 0, skipped: 0, failed: 0 },
          data: [],
        })),
      },
    },
    externalCustomerId: "cust_123",
    meters: [
      { name: "ai.input_tokens", quantity: "input_tokens" },
      { name: "ai.output_tokens", quantity: "output_tokens" },
      { name: "ai.cached_input_tokens", quantity: "cached_input_tokens" },
    ],
    idempotencyKey: "chatcmpl_123",
    timestamp: "2026-07-01T09:00:00.000Z",
    ...overrides,
  };
}

const usage = {
  inputTokens: {
    total: 100,
    noCache: 80,
    cacheRead: 20,
    cacheWrite: 5,
  },
  outputTokens: {
    total: 30,
    text: 24,
    reasoning: 6,
  },
  raw: {
    actual_cost: "0.00042",
  },
};

describe("AI meter adapter", () => {
  it("builds raw canonical UBB usage events without computed money fields", () => {
    const events = buildAiUsageEvents(baseOptions(), {
      usage,
      provider: "openrouter",
      model: "anthropic/claude-sonnet-4",
      operation: "generate",
      providerMetadata: {
        openrouter: {
          id: "or_123",
        },
      },
    });

    expect(events).toHaveLength(3);
    expect(events.map((event) => [event.name, event.quantity])).toEqual([
      ["ai.input_tokens", 100],
      ["ai.output_tokens", 30],
      ["ai.cached_input_tokens", 20],
    ]);

    expect(events[0]).toMatchObject({
      external_customer_id: "cust_123",
      timestamp: "2026-07-01T09:00:00.000Z",
      idempotency_key: "chatcmpl_123:input_tokens",
      metadata: {
        revkeen: {
          adapter: "@revkeen/sdk/ai",
          schema_version: 1,
          source: "ai_meter_adapter",
        },
        ai: {
          provider: "openrouter",
          model: "anthropic/claude-sonnet-4",
          operation: "generate",
          usage: {
            input_tokens: {
              total: 100,
              no_cache: 80,
              cache_read: 20,
              cache_write: 5,
            },
            output_tokens: {
              total: 30,
              text: 24,
              reasoning: 6,
            },
          },
          provider_hints: {
            usage_raw: {
              actual_cost: "0.00042",
            },
          },
        },
      },
    });

    const serialized = JSON.stringify(events);
    expect(serialized).not.toContain("provider_cost");
    expect(serialized).not.toContain("margin");
    expect(serialized).not.toContain("invoice_amount");
  });

  it("emits usage after generate through the SDK usage resource", async () => {
    const options = baseOptions({
      meters: [{ name: "ai.total_tokens", quantity: "total_tokens" }],
    });

    const model = {
      specificationVersion: "v3",
      provider: "anthropic",
      modelId: "claude-sonnet-4",
      supportedUrls: {},
      doGenerate: vi.fn(async () => ({
        content: [],
        finishReason: "stop",
        usage,
        warnings: [],
      })),
      doStream: vi.fn(),
    };

    const wrapped = withRevKeenAiMetering(model as never, options) as never as {
      doGenerate: (params: Record<string, unknown>) => Promise<unknown>;
    };

    await wrapped.doGenerate({});

    expect(options.revkeen.usage.ingest).toHaveBeenCalledOnce();
    expect(options.revkeen.usage.ingest).toHaveBeenCalledWith(expect.objectContaining({
      name: "ai.total_tokens",
      quantity: 130,
      metadata: expect.objectContaining({
        ai: expect.objectContaining({
          provider: "anthropic",
          model: "claude-sonnet-4",
        }),
      }),
    }));
  });

  it("documents the trusted-server and no-direct-infra guardrails", () => {
    expect(AI_METER_ADAPTER_GUARDRAILS).toContain(
      "Run only in merchant server-side or trusted edge code."
    );
    expect(AI_METER_ADAPTER_GUARDRAILS).toContain(
      "Never write directly to RDS, ClickHouse, Redpanda, Kafka, or any analytics infrastructure."
    );
  });
});
