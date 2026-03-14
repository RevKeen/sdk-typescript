import type { BaseClientOptions, BaseRequestOptions } from "../../../../BaseClient.js";
import { type NormalizedClientOptionsWithAuth } from "../../../../BaseClient.js";
import * as core from "../../../../core/index.js";
import * as RevKeen from "../../../index.js";
export declare namespace PaymentIntentsClient {
    type Options = BaseClientOptions;
    interface RequestOptions extends BaseRequestOptions {
    }
}
/**
 * Payment Intents represent the intent to collect payment. They support 3DS/SCA authentication, manual capture, and provide a client secret for frontend confirmation.
 *
 * **Required Scopes:**
 * - `payment_intents:read` - List and retrieve payment intents
 * - `payment_intents:write` - Create, confirm, capture, cancel payment intents
 *
 * **MCP Tools:** `payments_list`, `payments_get`, `payments_capture`
 */
export declare class PaymentIntentsClient {
    protected readonly _options: NormalizedClientOptionsWithAuth<PaymentIntentsClient.Options>;
    constructor(options: PaymentIntentsClient.Options);
    /**
     * Returns a list of payment intents with optional filtering.
     *
     * @param {RevKeen.PaymentIntentsListRequest} request
     * @param {PaymentIntentsClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link RevKeen.UnauthorizedError}
     *
     * @example
     *     await client.paymentIntents.list()
     */
    list(request?: RevKeen.PaymentIntentsListRequest, requestOptions?: PaymentIntentsClient.RequestOptions): core.HttpResponsePromise<RevKeen.PaymentIntentListResponse>;
    private __list;
    /**
     * Creates a payment intent to orchestrate payment collection with support for 3DS/SCA authentication.
     *
     * @param {RevKeen.CreatePaymentIntentRequest} request
     * @param {PaymentIntentsClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link RevKeen.BadRequestError}
     * @throws {@link RevKeen.UnauthorizedError}
     *
     * @example
     *     await client.paymentIntents.create({
     *         amount: 5000,
     *         customer: "customer"
     *     })
     */
    create(request: RevKeen.CreatePaymentIntentRequest, requestOptions?: PaymentIntentsClient.RequestOptions): core.HttpResponsePromise<RevKeen.PaymentIntent>;
    private __create;
    /**
     * Retrieves a payment intent by its ID (pi_xxx).
     *
     * @param {RevKeen.PaymentIntentsRetrieveRequest} request
     * @param {PaymentIntentsClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link RevKeen.NotFoundError}
     *
     * @example
     *     await client.paymentIntents.retrieve({
     *         id: "id"
     *     })
     */
    retrieve(request: RevKeen.PaymentIntentsRetrieveRequest, requestOptions?: PaymentIntentsClient.RequestOptions): core.HttpResponsePromise<RevKeen.PaymentIntent>;
    private __retrieve;
    /**
     * Updates a payment intent. Only certain fields can be updated based on the intent's status.
     *
     * @param {RevKeen.UpdatePaymentIntentRequest} request
     * @param {PaymentIntentsClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link RevKeen.BadRequestError}
     * @throws {@link RevKeen.NotFoundError}
     *
     * @example
     *     await client.paymentIntents.update({
     *         id: "id"
     *     })
     */
    update(request: RevKeen.UpdatePaymentIntentRequest, requestOptions?: PaymentIntentsClient.RequestOptions): core.HttpResponsePromise<RevKeen.PaymentIntent>;
    private __update;
    /**
     * Confirms the payment intent. May return requires_action if 3DS authentication is needed.
     *
     * @param {RevKeen.ConfirmPaymentIntentRequest} request
     * @param {PaymentIntentsClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link RevKeen.BadRequestError}
     * @throws {@link RevKeen.NotFoundError}
     *
     * @example
     *     await client.paymentIntents.confirm({
     *         id: "id"
     *     })
     */
    confirm(request: RevKeen.ConfirmPaymentIntentRequest, requestOptions?: PaymentIntentsClient.RequestOptions): core.HttpResponsePromise<RevKeen.PaymentIntent>;
    private __confirm;
    /**
     * Captures a payment intent that was created with capture_method=manual.
     *
     * @param {RevKeen.CapturePaymentIntentRequest} request
     * @param {PaymentIntentsClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link RevKeen.BadRequestError}
     * @throws {@link RevKeen.NotFoundError}
     *
     * @example
     *     await client.paymentIntents.capture({
     *         id: "id"
     *     })
     */
    capture(request: RevKeen.CapturePaymentIntentRequest, requestOptions?: PaymentIntentsClient.RequestOptions): core.HttpResponsePromise<RevKeen.PaymentIntent>;
    private __capture;
    /**
     * Cancels a payment intent. Cannot cancel if already succeeded or canceled.
     *
     * @param {RevKeen.CancelPaymentIntentRequest} request
     * @param {PaymentIntentsClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link RevKeen.BadRequestError}
     * @throws {@link RevKeen.NotFoundError}
     *
     * @example
     *     await client.paymentIntents.cancel({
     *         id: "id"
     *     })
     */
    cancel(request: RevKeen.CancelPaymentIntentRequest, requestOptions?: PaymentIntentsClient.RequestOptions): core.HttpResponsePromise<RevKeen.PaymentIntent>;
    private __cancel;
}
//# sourceMappingURL=Client.d.ts.map