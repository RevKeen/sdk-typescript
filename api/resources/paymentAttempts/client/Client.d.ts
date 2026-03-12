import type { BaseClientOptions, BaseRequestOptions } from "../../../../BaseClient.js";
import { type NormalizedClientOptionsWithAuth } from "../../../../BaseClient.js";
import * as core from "../../../../core/index.js";
import * as RevKeen from "../../../index.js";
import { AnalyticsClient } from "../resources/analytics/client/Client.js";
export declare namespace PaymentAttemptsClient {
    type Options = BaseClientOptions;
    interface RequestOptions extends BaseRequestOptions {
    }
}
/**
 * Track payment attempts across all gateways. Analyze retry patterns and failure reasons.
 */
export declare class PaymentAttemptsClient {
    protected readonly _options: NormalizedClientOptionsWithAuth<PaymentAttemptsClient.Options>;
    protected _analytics: AnalyticsClient | undefined;
    constructor(options: PaymentAttemptsClient.Options);
    get analytics(): AnalyticsClient;
    /**
     * Get merchant's payment attempt timeline with optional filters. Returns normalized outcomes across all gateways.
     *
     * @param {RevKeen.ListPaymentAttemptsRequest} request
     * @param {PaymentAttemptsClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link RevKeen.UnauthorizedError}
     *
     * @example
     *     await client.paymentAttempts.list()
     */
    list(request?: RevKeen.ListPaymentAttemptsRequest, requestOptions?: PaymentAttemptsClient.RequestOptions): core.HttpResponsePromise<RevKeen.PaymentAttemptListResponse>;
    private __list;
    /**
     * Look up a payment attempt by the gateway order ID (payatt_xxx format). Used for webhook debugging and support lookup.
     *
     * @param {RevKeen.GetByGatewayOrderIdPaymentAttemptsRequest} request
     * @param {PaymentAttemptsClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link RevKeen.UnauthorizedError}
     * @throws {@link RevKeen.NotFoundError}
     *
     * @example
     *     await client.paymentAttempts.getByGatewayOrderId({
     *         orderId: "payatt_abc123xyz789"
     *     })
     */
    getByGatewayOrderId(request: RevKeen.GetByGatewayOrderIdPaymentAttemptsRequest, requestOptions?: PaymentAttemptsClient.RequestOptions): core.HttpResponsePromise<RevKeen.PaymentAttemptSingleResponse>;
    private __getByGatewayOrderId;
    /**
     * Retrieve a specific payment attempt by its UUID.
     *
     * @param {RevKeen.GetPaymentAttemptsRequest} request
     * @param {PaymentAttemptsClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link RevKeen.UnauthorizedError}
     * @throws {@link RevKeen.NotFoundError}
     *
     * @example
     *     await client.paymentAttempts.get({
     *         id: "id"
     *     })
     */
    get(request: RevKeen.GetPaymentAttemptsRequest, requestOptions?: PaymentAttemptsClient.RequestOptions): core.HttpResponsePromise<RevKeen.PaymentAttemptSingleResponse>;
    private __get;
    /**
     * Get payment attempt history for a legacy transaction ID.
     *
     * @param {RevKeen.ListByTransactionPaymentAttemptsRequest} request
     * @param {PaymentAttemptsClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link RevKeen.UnauthorizedError}
     *
     * @example
     *     await client.paymentAttempts.listByTransaction({
     *         transactionId: "transactionId"
     *     })
     */
    listByTransaction(request: RevKeen.ListByTransactionPaymentAttemptsRequest, requestOptions?: PaymentAttemptsClient.RequestOptions): core.HttpResponsePromise<RevKeen.PaymentAttemptListResponse>;
    private __listByTransaction;
    /**
     * Get payment attempt history for a subscription.
     *
     * @param {RevKeen.ListBySubscriptionPaymentAttemptsRequest} request
     * @param {PaymentAttemptsClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link RevKeen.UnauthorizedError}
     *
     * @example
     *     await client.paymentAttempts.listBySubscription({
     *         subscriptionId: "subscriptionId"
     *     })
     */
    listBySubscription(request: RevKeen.ListBySubscriptionPaymentAttemptsRequest, requestOptions?: PaymentAttemptsClient.RequestOptions): core.HttpResponsePromise<RevKeen.PaymentAttemptListResponse>;
    private __listBySubscription;
    /**
     * Get payment attempt history for an invoice.
     *
     * @param {RevKeen.ListByInvoicePaymentAttemptsRequest} request
     * @param {PaymentAttemptsClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link RevKeen.UnauthorizedError}
     *
     * @example
     *     await client.paymentAttempts.listByInvoice({
     *         invoiceId: "invoiceId"
     *     })
     */
    listByInvoice(request: RevKeen.ListByInvoicePaymentAttemptsRequest, requestOptions?: PaymentAttemptsClient.RequestOptions): core.HttpResponsePromise<RevKeen.PaymentAttemptListResponse>;
    private __listByInvoice;
    /**
     * Check if a subscription is eligible for payment retry based on decline history and retry policies.
     *
     * @param {RevKeen.CheckRetryEligibilityPaymentAttemptsRequest} request
     * @param {PaymentAttemptsClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link RevKeen.UnauthorizedError}
     *
     * @example
     *     await client.paymentAttempts.checkRetryEligibility({
     *         subscriptionId: "subscriptionId"
     *     })
     */
    checkRetryEligibility(request: RevKeen.CheckRetryEligibilityPaymentAttemptsRequest, requestOptions?: PaymentAttemptsClient.RequestOptions): core.HttpResponsePromise<RevKeen.RetryEligibilityResponse>;
    private __checkRetryEligibility;
    /**
     * Get all payment attempts that are ready for retry (for dunning workflows).
     *
     * @param {PaymentAttemptsClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link RevKeen.UnauthorizedError}
     *
     * @example
     *     await client.paymentAttempts.listRetryReady()
     */
    listRetryReady(requestOptions?: PaymentAttemptsClient.RequestOptions): core.HttpResponsePromise<RevKeen.PaymentAttemptListResponse>;
    private __listRetryReady;
    /**
     * Get interpreted AVS/CVV security verification results for a payment attempt. Returns human-readable descriptions and risk assessments.
     *
     * @param {RevKeen.GetSecurityResultPaymentAttemptsRequest} request
     * @param {PaymentAttemptsClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link RevKeen.UnauthorizedError}
     * @throws {@link RevKeen.NotFoundError}
     *
     * @example
     *     await client.paymentAttempts.getSecurityResult({
     *         id: "id"
     *     })
     */
    getSecurityResult(request: RevKeen.GetSecurityResultPaymentAttemptsRequest, requestOptions?: PaymentAttemptsClient.RequestOptions): core.HttpResponsePromise<RevKeen.PaymentSecurityResponse>;
    private __getSecurityResult;
    /**
     * Get a reference list of all supported AVS and CVV response codes with their interpretations. Useful for building payment fraud rules.
     *
     * @param {PaymentAttemptsClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link RevKeen.UnauthorizedError}
     *
     * @example
     *     await client.paymentAttempts.listSecurityCodes()
     */
    listSecurityCodes(requestOptions?: PaymentAttemptsClient.RequestOptions): core.HttpResponsePromise<RevKeen.ListSecurityCodesPaymentAttemptsResponse>;
    private __listSecurityCodes;
}
//# sourceMappingURL=Client.d.ts.map