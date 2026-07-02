import { LanguageModel } from 'ai';
import { U as UsageEvent, B as BatchIngestResult } from './types.gen-kn79GXSQ.mjs';

type UsageEventsClient = {
    usage: {
        ingest: (body: UsageEvent | {
            events: UsageEvent[];
        }) => Promise<BatchIngestResult>;
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
type AiUsageQuantity = "input_tokens" | "input_tokens_no_cache" | "cached_input_tokens" | "cache_write_tokens" | "output_tokens" | "output_text_tokens" | "output_reasoning_tokens" | "total_tokens" | ((usage: AiMeterUsageContext) => number | undefined);
interface AiMeterEventMapping {
    name?: string;
    meterId?: string;
    quantity: AiUsageQuantity;
    includeZero?: boolean;
    metadata?: JsonObject;
    idempotencyKeySuffix?: string;
}
interface AiMeterUsageContext {
    usage: AiTokenUsage;
    provider: string;
    model: string;
    operation: "generate" | "stream";
    providerMetadata?: unknown;
}
interface RevKeenAiMeteringOptions {
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
declare const AI_METER_ADAPTER_GUARDRAILS: readonly ["Run only in merchant server-side or trusted edge code.", "Emit raw usage only through /v2/usage-events.", "Never compute or transmit RevKeen customer charge, provider cost, margin, tax, invoice, or accounting values.", "Never write directly to RDS, ClickHouse, Redpanda, Kafka, or any analytics infrastructure."];
declare function buildAiUsageEvents(options: RevKeenAiMeteringOptions, context: AiMeterUsageContext): UsageEvent[];
declare function withRevKeenAiMetering(model: LanguageModel, options: RevKeenAiMeteringOptions): LanguageModel;

export { AI_METER_ADAPTER_GUARDRAILS, type AiMeterEventMapping, type AiMeterUsageContext, type AiUsageQuantity, type RevKeenAiMeteringOptions, buildAiUsageEvents, withRevKeenAiMetering };
