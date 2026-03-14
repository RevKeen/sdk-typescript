import type { BaseClientOptions, BaseRequestOptions } from "../../../../BaseClient.js";
import { type NormalizedClientOptionsWithAuth } from "../../../../BaseClient.js";
import * as core from "../../../../core/index.js";
import * as RevKeen from "../../../index.js";
export declare namespace UsageClient {
    type Options = BaseClientOptions;
    interface RequestOptions extends BaseRequestOptions {
    }
}
export declare class UsageClient {
    protected readonly _options: NormalizedClientOptionsWithAuth<UsageClient.Options>;
    constructor(options: UsageClient.Options);
    /**
     * List usage events with optional filters. Returns up to 100 events per request.
     *
     * @param {RevKeen.ListEventsUsageRequest} request
     * @param {UsageClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link RevKeen.UnauthorizedError}
     *
     * @example
     *     await client.usage.listEvents({
     *         start_time: "2026-03-01T00:00:00Z",
     *         end_time: "2026-03-31T23:59:59Z",
     *         limit: "100"
     *     })
     */
    listEvents(request?: RevKeen.ListEventsUsageRequest, requestOptions?: UsageClient.RequestOptions): core.HttpResponsePromise<RevKeen.UsageEventListResponse>;
    private __listEvents;
    /**
     * Send usage events for billing. Accepts a single event or a batch of up to 1000 events.
     *
     * **Single event:** Send the event object directly in the request body.
     * **Batch:** Wrap events in an `events` array.
     *
     * Events are matched to meters by `name` (event name) or `meter_id`. At least one of `customer_id`, `external_customer_id`, or `subscription_id` is required.
     *
     * @param {RevKeen.BatchIngestRequest} request
     * @param {UsageClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link RevKeen.BadRequestError}
     * @throws {@link RevKeen.UnauthorizedError}
     *
     * @example
     *     await client.usage.ingest({
     *         events: [{
     *                 name: "api_call"
     *             }]
     *     })
     */
    ingest(request: RevKeen.BatchIngestRequest, requestOptions?: UsageClient.RequestOptions): core.HttpResponsePromise<RevKeen.BatchIngestResult>;
    private __ingest;
    /**
     * Validate usage events without persisting them. Returns acceptance/rejection reasons that mirror real ingestion rules.
     *
     * @param {RevKeen.BatchIngestRequest} request
     * @param {UsageClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link RevKeen.BadRequestError}
     * @throws {@link RevKeen.UnauthorizedError}
     *
     * @example
     *     await client.usage.dryRun({
     *         events: [{
     *                 name: "api_call"
     *             }]
     *     })
     */
    dryRun(request: RevKeen.BatchIngestRequest, requestOptions?: UsageClient.RequestOptions): core.HttpResponsePromise<RevKeen.DryRunResult>;
    private __dryRun;
    /**
     * Get aggregated usage for a specific meter over a time range. Returns the computed value using the meter's aggregation method.
     *
     * @param {RevKeen.AggregateUsageRequest} request
     * @param {UsageClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link RevKeen.BadRequestError}
     * @throws {@link RevKeen.UnauthorizedError}
     *
     * @example
     *     await client.usage.aggregate({
     *         meterId: "mtr_abc123",
     *         start_time: "2026-03-01T00:00:00Z",
     *         end_time: "2026-03-31T23:59:59Z"
     *     })
     */
    aggregate(request: RevKeen.AggregateUsageRequest, requestOptions?: UsageClient.RequestOptions): core.HttpResponsePromise<RevKeen.UsageAggregateResponse>;
    private __aggregate;
    /**
     * Returns the current usage balance for a customer or subscription in the active billing period. Shows per-meter breakdown with included allowance, overage, estimated charges, and margin data.
     *
     * @param {RevKeen.GetBalanceUsageRequest} request
     * @param {UsageClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link RevKeen.BadRequestError}
     * @throws {@link RevKeen.UnauthorizedError}
     *
     * @example
     *     await client.usage.getBalance({
     *         subscription_id: "sub_abc123",
     *         external_customer_id: "usr_123"
     *     })
     */
    getBalance(request?: RevKeen.GetBalanceUsageRequest, requestOptions?: UsageClient.RequestOptions): core.HttpResponsePromise<RevKeen.UsageBalanceResponse>;
    private __getBalance;
}
//# sourceMappingURL=Client.d.ts.map