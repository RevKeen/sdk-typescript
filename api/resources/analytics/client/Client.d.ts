import type { BaseClientOptions, BaseRequestOptions } from "../../../../BaseClient.js";
import { type NormalizedClientOptionsWithAuth } from "../../../../BaseClient.js";
import * as core from "../../../../core/index.js";
import * as RevKeen from "../../../index.js";
export declare namespace AnalyticsClient {
    type Options = BaseClientOptions;
    interface RequestOptions extends BaseRequestOptions {
    }
}
/**
 * Revenue analytics including MRR summaries, time-series data, accounts receivable aging, days sales outstanding (DSO), and customer lifetime value (LTV). Use these endpoints to build dashboards and financial reports.
 *
 * **Required Scopes:**
 * - `analytics:read` - Access analytics endpoints
 */
export declare class AnalyticsClient {
    protected readonly _options: NormalizedClientOptionsWithAuth<AnalyticsClient.Options>;
    constructor(options: AnalyticsClient.Options);
    /**
     * Get Monthly Recurring Revenue metrics and growth
     *
     * @param {RevKeen.AnalyticsRevenueGetMrrSummaryRequest} request
     * @param {AnalyticsClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @example
     *     await client.analytics.revenueGetmrrsummary({
     *         asOfDate: "2024-01-31T23:59:59Z"
     *     })
     */
    revenueGetmrrsummary(request?: RevKeen.AnalyticsRevenueGetMrrSummaryRequest, requestOptions?: AnalyticsClient.RequestOptions): core.HttpResponsePromise<RevKeen.AnalyticsRevenueGetMrrSummaryResponse>;
    private __revenueGetmrrsummary;
    /**
     * Get revenue data over time with configurable granularity
     *
     * @param {RevKeen.AnalyticsRevenueGetTimeSeriesRequest} request
     * @param {AnalyticsClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @example
     *     await client.analytics.revenueGettimeseries({
     *         startDate: "2024-01-01T00:00:00Z",
     *         endDate: "2024-12-31T23:59:59Z"
     *     })
     */
    revenueGettimeseries(request: RevKeen.AnalyticsRevenueGetTimeSeriesRequest, requestOptions?: AnalyticsClient.RequestOptions): core.HttpResponsePromise<RevKeen.AnalyticsRevenueGetTimeSeriesResponse>;
    private __revenueGettimeseries;
    /**
     * Returns Accounts Receivable aging buckets with invoice counts and amounts
     *
     * @param {RevKeen.AnalyticsInvoicesGetArAgingRequest} request
     * @param {AnalyticsClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @example
     *     await client.analytics.invoicesGetaraging({
     *         asOfDate: "2024-01-31T23:59:59Z"
     *     })
     */
    invoicesGetaraging(request?: RevKeen.AnalyticsInvoicesGetArAgingRequest, requestOptions?: AnalyticsClient.RequestOptions): core.HttpResponsePromise<RevKeen.AnalyticsInvoicesGetArAgingResponse>;
    private __invoicesGetaraging;
    /**
     * Calculate DSO and collection health metrics
     *
     * @param {RevKeen.AnalyticsCollectionsGetDsoRequest} request
     * @param {AnalyticsClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @example
     *     await client.analytics.collectionsGetdso({
     *         startDate: "2024-01-01T00:00:00Z",
     *         endDate: "2024-12-31T23:59:59Z"
     *     })
     */
    collectionsGetdso(request?: RevKeen.AnalyticsCollectionsGetDsoRequest, requestOptions?: AnalyticsClient.RequestOptions): core.HttpResponsePromise<RevKeen.AnalyticsCollectionsGetDsoResponse>;
    private __collectionsGetdso;
    /**
     * Calculate customer lifetime value metrics
     *
     * @param {RevKeen.AnalyticsCustomersGetLtvRequest} request
     * @param {AnalyticsClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @example
     *     await client.analytics.customersGetltv({
     *         topN: 10
     *     })
     */
    customersGetltv(request?: RevKeen.AnalyticsCustomersGetLtvRequest, requestOptions?: AnalyticsClient.RequestOptions): core.HttpResponsePromise<RevKeen.AnalyticsCustomersGetLtvResponse>;
    private __customersGetltv;
    /**
     * Get analytics for a specific customer
     *
     * @param {RevKeen.AnalyticsCustomersRetrieveRequest} request
     * @param {AnalyticsClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link RevKeen.NotFoundError}
     *
     * @example
     *     await client.analytics.customersRetrieve({
     *         customerId: "customerId"
     *     })
     */
    customersRetrieve(request: RevKeen.AnalyticsCustomersRetrieveRequest, requestOptions?: AnalyticsClient.RequestOptions): core.HttpResponsePromise<RevKeen.AnalyticsCustomersRetrieveResponse>;
    private __customersRetrieve;
    /**
     * Get payment link performance metrics
     *
     * @param {RevKeen.AnalyticsPaymentLinksGetConversionRequest} request
     * @param {AnalyticsClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @example
     *     await client.analytics.paymentlinksGetconversion({
     *         startDate: "2024-01-01T00:00:00Z",
     *         endDate: "2024-12-31T23:59:59Z"
     *     })
     */
    paymentlinksGetconversion(request?: RevKeen.AnalyticsPaymentLinksGetConversionRequest, requestOptions?: AnalyticsClient.RequestOptions): core.HttpResponsePromise<RevKeen.AnalyticsPaymentLinksGetConversionResponse>;
    private __paymentlinksGetconversion;
    /**
     * Get stage-by-stage checkout conversion funnel metrics. Shows sessions, drop-offs, and conversion rates at each step.
     *
     * @param {RevKeen.AnalyticsCheckoutGetFunnelRequest} request
     * @param {AnalyticsClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @example
     *     await client.analytics.checkoutGetfunnel({
     *         startDate: "2024-01-01T00:00:00Z",
     *         endDate: "2024-01-31T23:59:59Z"
     *     })
     */
    checkoutGetfunnel(request?: RevKeen.AnalyticsCheckoutGetFunnelRequest, requestOptions?: AnalyticsClient.RequestOptions): core.HttpResponsePromise<RevKeen.AnalyticsCheckoutGetFunnelResponse>;
    private __checkoutGetfunnel;
    /**
     * Get aggregated abandonment alert metrics by status and severity
     *
     * @param {RevKeen.AnalyticsCheckoutAbandonmentGetSummaryRequest} request
     * @param {AnalyticsClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @example
     *     await client.analytics.checkoutAbandonmentGetsummary({
     *         startDate: "2024-01-01T00:00:00Z",
     *         endDate: "2024-12-31T23:59:59Z"
     *     })
     */
    checkoutAbandonmentGetsummary(request?: RevKeen.AnalyticsCheckoutAbandonmentGetSummaryRequest, requestOptions?: AnalyticsClient.RequestOptions): core.HttpResponsePromise<RevKeen.AnalyticsCheckoutAbandonmentGetSummaryResponse>;
    private __checkoutAbandonmentGetsummary;
    /**
     * Get paginated list of abandonment alerts with filtering
     *
     * @param {RevKeen.AnalyticsCheckoutAbandonmentListRequest} request
     * @param {AnalyticsClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @example
     *     await client.analytics.checkoutAbandonmentList()
     */
    checkoutAbandonmentList(request?: RevKeen.AnalyticsCheckoutAbandonmentListRequest, requestOptions?: AnalyticsClient.RequestOptions): core.HttpResponsePromise<RevKeen.AnalyticsCheckoutAbandonmentListResponse>;
    private __checkoutAbandonmentList;
    /**
     * Get aggregated winback opportunity metrics by type and status
     *
     * @param {AnalyticsClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @example
     *     await client.analytics.checkoutWinbackGetsummary()
     */
    checkoutWinbackGetsummary(requestOptions?: AnalyticsClient.RequestOptions): core.HttpResponsePromise<RevKeen.AnalyticsCheckoutWinbackGetSummaryResponse>;
    private __checkoutWinbackGetsummary;
    /**
     * Get paginated list of winback opportunities with filtering
     *
     * @param {RevKeen.AnalyticsCheckoutWinbackListRequest} request
     * @param {AnalyticsClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @example
     *     await client.analytics.checkoutWinbackList()
     */
    checkoutWinbackList(request?: RevKeen.AnalyticsCheckoutWinbackListRequest, requestOptions?: AnalyticsClient.RequestOptions): core.HttpResponsePromise<RevKeen.AnalyticsCheckoutWinbackListResponse>;
    private __checkoutWinbackList;
}
//# sourceMappingURL=Client.d.ts.map