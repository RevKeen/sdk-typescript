import {
  wrapLanguageModel,
  type LanguageModel,
  type LanguageModelMiddleware,
} from "ai";
import type { BatchIngestResult, UsageEvent } from "./generated/types.gen.js";

type UsageEventsClient = {
  usage: {
    ingest: (body: UsageEvent | { events: UsageEvent[] }) => Promise<BatchIngestResult>;
  };
};

type JsonObject = Record<string, unknown>;

type AiTokenUsage = {
  inputTokens?: {
    total?: number;
    noCache?: number;
    cacheRead?: number;
    cacheWrite?: number;
  };
  outputTokens?: {
    total?: number;
    text?: number;
    reasoning?: number;
  };
  raw?: JsonObject;
};

export type AiUsageQuantity =
  | "input_tokens"
  | "input_tokens_no_cache"
  | "cached_input_tokens"
  | "cache_write_tokens"
  | "output_tokens"
  | "output_text_tokens"
  | "output_reasoning_tokens"
  | "total_tokens"
  | ((usage: AiMeterUsageContext) => number | undefined);

export interface AiMeterEventMapping {
  name?: string;
  meterId?: string;
  quantity: AiUsageQuantity;
  includeZero?: boolean;
  metadata?: JsonObject;
  idempotencyKeySuffix?: string;
}

export interface AiMeterUsageContext {
  usage: AiTokenUsage;
  provider: string;
  model: string;
  operation: "generate" | "stream";
  providerMetadata?: unknown;
}

export interface RevKeenAiMeteringOptions {
  revkeen: UsageEventsClient;
  meters: AiMeterEventMapping[];
  customerId?: string;
  externalCustomerId?: string;
  subscriptionId?: string;
  provider?: string;
  model?: string;
  metadata?: JsonObject | ((context: AiMeterUsageContext) => JsonObject | undefined);
  idempotencyKey?: string | ((context: AiMeterUsageContext) => string | undefined);
  timestamp?: string | Date | ((context: AiMeterUsageContext) => string | Date | undefined);
  awaitIngest?: boolean;
  onIngestError?: (error: unknown, context: AiMeterUsageContext) => void | Promise<void>;
}

export const AI_METER_ADAPTER_GUARDRAILS = [
  "Run only in merchant server-side or trusted edge code.",
  "Emit raw usage only through /v2/usage-events.",
  "Never compute or transmit RevKeen customer charge, provider cost, margin, tax, invoice, or accounting values.",
  "Never write directly to RDS, ClickHouse, Redpanda, Kafka, or any analytics infrastructure.",
] as const;

function isRecord(value: unknown): value is JsonObject {
  return typeof value === "object" && value !== null && !Array.isArray(value);
}

function finiteNumber(value: unknown): number | undefined {
  return typeof value === "number" && Number.isFinite(value) ? value : undefined;
}

function sumDefined(values: Array<number | undefined>): number | undefined {
  const defined = values.filter((value): value is number => value !== undefined);
  if (defined.length === 0) return undefined;
  return defined.reduce((total, value) => total + value, 0);
}

function quantityFor(selection: AiUsageQuantity, context: AiMeterUsageContext): number | undefined {
  if (typeof selection === "function") {
    return finiteNumber(selection(context));
  }

  const { usage } = context;
  switch (selection) {
    case "input_tokens":
      return finiteNumber(usage.inputTokens?.total);
    case "input_tokens_no_cache":
      return finiteNumber(usage.inputTokens?.noCache);
    case "cached_input_tokens":
      return finiteNumber(usage.inputTokens?.cacheRead);
    case "cache_write_tokens":
      return finiteNumber(usage.inputTokens?.cacheWrite);
    case "output_tokens":
      return finiteNumber(usage.outputTokens?.total);
    case "output_text_tokens":
      return finiteNumber(usage.outputTokens?.text);
    case "output_reasoning_tokens":
      return finiteNumber(usage.outputTokens?.reasoning);
    case "total_tokens":
      return sumDefined([
        usage.inputTokens?.total,
        usage.outputTokens?.total,
      ]);
  }
}

function normalizeUsage(usage: AiTokenUsage) {
  return {
    input_tokens: {
      total: usage.inputTokens?.total ?? null,
      no_cache: usage.inputTokens?.noCache ?? null,
      cache_read: usage.inputTokens?.cacheRead ?? null,
      cache_write: usage.inputTokens?.cacheWrite ?? null,
    },
    output_tokens: {
      total: usage.outputTokens?.total ?? null,
      text: usage.outputTokens?.text ?? null,
      reasoning: usage.outputTokens?.reasoning ?? null,
    },
  };
}

function eventNameFor(mapping: AiMeterEventMapping) {
  if (mapping.name) return mapping.name;
  if (mapping.meterId) return "ai_usage";
  throw new Error("AI meter mapping requires either name or meterId");
}

function assertServerSideRuntime() {
  if (typeof window !== "undefined" && typeof document !== "undefined") {
    throw new Error(
      "RevKeen AI Meter Adapter must run in trusted server-side or edge code, not in browser code."
    );
  }
}

function valueFromOption<T>(
  option: T | ((context: AiMeterUsageContext) => T | undefined) | undefined,
  context: AiMeterUsageContext
): T | undefined {
  return typeof option === "function"
    ? (option as (context: AiMeterUsageContext) => T | undefined)(context)
    : option;
}

export function buildAiUsageEvents(
  options: RevKeenAiMeteringOptions,
  context: AiMeterUsageContext
): UsageEvent[] {
  if (options.meters.length === 0) {
    throw new Error("RevKeen AI Meter Adapter requires at least one meter mapping");
  }

  const baseMetadata = valueFromOption(options.metadata, context);
  const timestamp = valueFromOption(options.timestamp, context);
  const baseIdempotencyKey = valueFromOption(options.idempotencyKey, context);
  const normalizedUsage = normalizeUsage(context.usage);

  return options.meters.flatMap((mapping) => {
    const quantity = quantityFor(mapping.quantity, context);
    if (quantity === undefined || (!mapping.includeZero && quantity === 0)) {
      return [];
    }

    const idempotencySuffix =
      mapping.idempotencyKeySuffix ??
      (typeof mapping.quantity === "string" ? mapping.quantity : eventNameFor(mapping));

    return [{
      name: eventNameFor(mapping),
      meter_id: mapping.meterId,
      customer_id: options.customerId,
      external_customer_id: options.externalCustomerId,
      subscription_id: options.subscriptionId,
      quantity,
      timestamp: timestamp instanceof Date ? timestamp.toISOString() : timestamp,
      idempotency_key: baseIdempotencyKey
        ? `${baseIdempotencyKey}:${idempotencySuffix}`
        : undefined,
      metadata: {
        ...(isRecord(baseMetadata) ? baseMetadata : {}),
        ...(isRecord(mapping.metadata) ? mapping.metadata : {}),
        revkeen: {
          adapter: "@revkeen/sdk/ai",
          schema_version: 1,
          source: "ai_meter_adapter",
        },
        ai: {
          provider: context.provider,
          model: context.model,
          operation: context.operation,
          usage: normalizedUsage,
          provider_hints: {
            usage_raw: context.usage.raw ?? null,
            provider_metadata: context.providerMetadata ?? null,
          },
        },
      },
    }];
  });
}

async function emitUsage(options: RevKeenAiMeteringOptions, context: AiMeterUsageContext) {
  const events = buildAiUsageEvents(options, context);
  if (events.length === 0) return;

  await options.revkeen.usage.ingest(events.length === 1 ? events[0] : { events });
}

function resolveProvider(model: LanguageModel, fallback?: string): string {
  return fallback ?? (typeof model === "string" ? "unknown" : (model as { provider?: string }).provider ?? "unknown");
}

function resolveModel(model: LanguageModel, fallback?: string): string {
  return fallback ?? (typeof model === "string" ? model : (model as { modelId?: string }).modelId ?? "unknown");
}

function createMiddleware(options: RevKeenAiMeteringOptions): LanguageModelMiddleware {
  return {
    specificationVersion: "v3",
    wrapGenerate: async ({ doGenerate, model }) => {
      const result = await doGenerate();
      const context: AiMeterUsageContext = {
        usage: result.usage,
        provider: options.provider ?? model.provider ?? "unknown",
        model: options.model ?? model.modelId ?? "unknown",
        operation: "generate",
        providerMetadata: result.providerMetadata,
      };

      const ingest = emitUsage(options, context).catch(async (error) => {
        await options.onIngestError?.(error, context);
        if (options.awaitIngest !== false) throw error;
      });

      if (options.awaitIngest !== false) {
        await ingest;
      }

      return result;
    },
    wrapStream: async ({ doStream, model }) => {
      const result = await doStream();
      const stream = result.stream.pipeThrough(new TransformStream({
        async transform(part, controller) {
          controller.enqueue(part);

          if (part.type !== "finish") return;

          const context: AiMeterUsageContext = {
            usage: part.usage,
            provider: options.provider ?? model.provider ?? "unknown",
            model: options.model ?? model.modelId ?? "unknown",
            operation: "stream",
            providerMetadata: part.providerMetadata,
          };

          const ingest = emitUsage(options, context).catch(async (error) => {
            await options.onIngestError?.(error, context);
            if (options.awaitIngest !== false) throw error;
          });

          if (options.awaitIngest !== false) {
            await ingest;
          }
        },
      }));

      return {
        ...result,
        stream,
      };
    },
  };
}

export function withRevKeenAiMetering(
  model: LanguageModel,
  options: RevKeenAiMeteringOptions
): LanguageModel {
  assertServerSideRuntime();

  if (typeof model === "string") {
    throw new Error("RevKeen AI Meter Adapter requires an AI SDK language model object, not a model id string.");
  }

  return wrapLanguageModel({
    model: model as Parameters<typeof wrapLanguageModel>[0]["model"],
    middleware: createMiddleware(options),
    providerId: resolveProvider(model, options.provider),
    modelId: resolveModel(model, options.model),
  }) as LanguageModel;
}
