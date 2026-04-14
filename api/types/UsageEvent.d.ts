/**
 * A single usage event representing customer consumption of a metered resource.
 */
export interface UsageEvent {
    /** Event name matching a meter's event_name */
    name: string;
    /** RevKeen customer ID */
    customer_id?: string;
    /** Your external customer identifier */
    external_customer_id?: string;
    /** Subscription ID to attribute usage to */
    subscription_id?: string;
    /** Direct meter ID (alternative to event name matching) */
    meter_id?: string;
    /** Event quantity (default: 1) */
    quantity?: number;
    /** ISO 8601 timestamp (default: now) */
    timestamp?: string;
    /** Unique key for deduplication */
    idempotency_key?: string;
    /** Arbitrary properties for filtering and aggregation */
    metadata?: Record<string, unknown>;
}
//# sourceMappingURL=UsageEvent.d.ts.map