"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/ai.ts
var ai_exports = {};
__export(ai_exports, {
  AI_METER_ADAPTER_GUARDRAILS: () => AI_METER_ADAPTER_GUARDRAILS,
  buildAiUsageEvents: () => buildAiUsageEvents,
  withRevKeenAiMetering: () => withRevKeenAiMetering
});
module.exports = __toCommonJS(ai_exports);
var import_ai = require("ai");
var AI_METER_ADAPTER_GUARDRAILS = [
  "Run only in merchant server-side or trusted edge code.",
  "Emit raw usage only through /v2/usage-events.",
  "Never compute or transmit RevKeen customer charge, provider cost, margin, tax, invoice, or accounting values.",
  "Never write directly to RDS, ClickHouse, Redpanda, Kafka, or any analytics infrastructure."
];
function isRecord(value) {
  return typeof value === "object" && value !== null && !Array.isArray(value);
}
function finiteNumber(value) {
  return typeof value === "number" && Number.isFinite(value) ? value : void 0;
}
function sumDefined(values) {
  const defined = values.filter((value) => value !== void 0);
  if (defined.length === 0) return void 0;
  return defined.reduce((total, value) => total + value, 0);
}
function quantityFor(selection, context) {
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
        usage.outputTokens?.total
      ]);
  }
}
function normalizeUsage(usage) {
  return {
    input_tokens: {
      total: usage.inputTokens?.total ?? null,
      no_cache: usage.inputTokens?.noCache ?? null,
      cache_read: usage.inputTokens?.cacheRead ?? null,
      cache_write: usage.inputTokens?.cacheWrite ?? null
    },
    output_tokens: {
      total: usage.outputTokens?.total ?? null,
      text: usage.outputTokens?.text ?? null,
      reasoning: usage.outputTokens?.reasoning ?? null
    }
  };
}
function eventNameFor(mapping) {
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
function valueFromOption(option, context) {
  return typeof option === "function" ? option(context) : option;
}
function buildAiUsageEvents(options, context) {
  if (options.meters.length === 0) {
    throw new Error("RevKeen AI Meter Adapter requires at least one meter mapping");
  }
  const baseMetadata = valueFromOption(options.metadata, context);
  const timestamp = valueFromOption(options.timestamp, context);
  const baseIdempotencyKey = valueFromOption(options.idempotencyKey, context);
  const normalizedUsage = normalizeUsage(context.usage);
  return options.meters.flatMap((mapping) => {
    const quantity = quantityFor(mapping.quantity, context);
    if (quantity === void 0 || !mapping.includeZero && quantity === 0) {
      return [];
    }
    const idempotencySuffix = mapping.idempotencyKeySuffix ?? (typeof mapping.quantity === "string" ? mapping.quantity : eventNameFor(mapping));
    return [{
      name: eventNameFor(mapping),
      meter_id: mapping.meterId,
      customer_id: options.customerId,
      external_customer_id: options.externalCustomerId,
      subscription_id: options.subscriptionId,
      quantity,
      timestamp: timestamp instanceof Date ? timestamp.toISOString() : timestamp,
      idempotency_key: baseIdempotencyKey ? `${baseIdempotencyKey}:${idempotencySuffix}` : void 0,
      metadata: {
        ...isRecord(baseMetadata) ? baseMetadata : {},
        ...isRecord(mapping.metadata) ? mapping.metadata : {},
        revkeen: {
          adapter: "@revkeen/sdk/ai",
          schema_version: 1,
          source: "ai_meter_adapter"
        },
        ai: {
          provider: context.provider,
          model: context.model,
          operation: context.operation,
          usage: normalizedUsage,
          provider_hints: {
            usage_raw: context.usage.raw ?? null,
            provider_metadata: context.providerMetadata ?? null
          }
        }
      }
    }];
  });
}
async function emitUsage(options, context) {
  const events = buildAiUsageEvents(options, context);
  if (events.length === 0) return;
  await options.revkeen.usage.ingest(events.length === 1 ? events[0] : { events });
}
function resolveProvider(model, fallback) {
  return fallback ?? (typeof model === "string" ? "unknown" : model.provider ?? "unknown");
}
function resolveModel(model, fallback) {
  return fallback ?? (typeof model === "string" ? model : model.modelId ?? "unknown");
}
function createMiddleware(options) {
  return {
    specificationVersion: "v3",
    wrapGenerate: async ({ doGenerate, model }) => {
      const result = await doGenerate();
      const context = {
        usage: result.usage,
        provider: options.provider ?? model.provider ?? "unknown",
        model: options.model ?? model.modelId ?? "unknown",
        operation: "generate",
        providerMetadata: result.providerMetadata
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
          const context = {
            usage: part.usage,
            provider: options.provider ?? model.provider ?? "unknown",
            model: options.model ?? model.modelId ?? "unknown",
            operation: "stream",
            providerMetadata: part.providerMetadata
          };
          const ingest = emitUsage(options, context).catch(async (error) => {
            await options.onIngestError?.(error, context);
            if (options.awaitIngest !== false) throw error;
          });
          if (options.awaitIngest !== false) {
            await ingest;
          }
        }
      }));
      return {
        ...result,
        stream
      };
    }
  };
}
function withRevKeenAiMetering(model, options) {
  assertServerSideRuntime();
  if (typeof model === "string") {
    throw new Error("RevKeen AI Meter Adapter requires an AI SDK language model object, not a model id string.");
  }
  return (0, import_ai.wrapLanguageModel)({
    model,
    middleware: createMiddleware(options),
    providerId: resolveProvider(model, options.provider),
    modelId: resolveModel(model, options.model)
  });
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  AI_METER_ADAPTER_GUARDRAILS,
  buildAiUsageEvents,
  withRevKeenAiMetering
});
//# sourceMappingURL=ai.js.map