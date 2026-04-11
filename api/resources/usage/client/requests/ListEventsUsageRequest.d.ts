/**
 * @example
 *     {
 *         start_time: "2026-03-01T00:00:00Z",
 *         end_time: "2026-03-31T23:59:59Z",
 *         limit: "100"
 *     }
 */
export interface ListEventsUsageRequest {
    /** Filter by meter ID */
    meter_id?: string;
    /** Filter by customer ID */
    customer_id?: string;
    /** Filter by external customer ID */
    external_customer_id?: string;
    /** Filter by subscription ID */
    subscription_id?: string;
    /** Start of time range (ISO 8601) */
    start_time?: string;
    /** End of time range (ISO 8601) */
    end_time?: string;
    /** Max results (default 100, max 100) */
    limit?: string;
}
//# sourceMappingURL=ListEventsUsageRequest.d.ts.map