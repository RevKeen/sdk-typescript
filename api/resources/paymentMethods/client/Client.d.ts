import type { BaseClientOptions, BaseRequestOptions } from "../../../../BaseClient.js";
import { type NormalizedClientOptionsWithAuth } from "../../../../BaseClient.js";
import * as core from "../../../../core/index.js";
import * as RevKeen from "../../../index.js";
export declare namespace PaymentMethodsClient {
    type Options = BaseClientOptions;
    interface RequestOptions extends BaseRequestOptions {
    }
}
/**
 * Payment Methods represent a customer's saved payment instrument (card, bank account, etc.). Attach, detach, and manage payment methods for customers.
 *
 * **Required Scopes:**
 * - `payment_methods:read` - List and retrieve payment methods
 * - `payment_methods:write` - Attach, detach, update payment methods
 */
export declare class PaymentMethodsClient {
    protected readonly _options: NormalizedClientOptionsWithAuth<PaymentMethodsClient.Options>;
    constructor(options: PaymentMethodsClient.Options);
    /**
     * Returns a list of payment methods for the merchant. You can filter by customer to see only their payment methods.
     *
     * By default, this returns payment methods sorted by creation date, with the most recent first.
     *
     * @param {RevKeen.ListPaymentMethodsRequest} request
     * @param {PaymentMethodsClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link RevKeen.UnauthorizedError}
     * @throws {@link RevKeen.ForbiddenError}
     *
     * @example
     *     await client.paymentMethods.list()
     */
    list(request?: RevKeen.ListPaymentMethodsRequest, requestOptions?: PaymentMethodsClient.RequestOptions): core.HttpResponsePromise<RevKeen.PaymentMethodList>;
    private __list;
    /**
     * Retrieves a payment method by ID. You can use either the internal UUID or the public ID (pm_xxx format).
     *
     * @param {RevKeen.RetrievePaymentMethodsRequest} request
     * @param {PaymentMethodsClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link RevKeen.UnauthorizedError}
     * @throws {@link RevKeen.ForbiddenError}
     * @throws {@link RevKeen.NotFoundError}
     *
     * @example
     *     await client.paymentMethods.retrieve({
     *         id: "pm_1a2b3c4d5e6f"
     *     })
     */
    retrieve(request: RevKeen.RetrievePaymentMethodsRequest, requestOptions?: PaymentMethodsClient.RequestOptions): core.HttpResponsePromise<RevKeen.PaymentMethod>;
    private __retrieve;
    /**
     * Updates a payment method's billing details or metadata.
     *
     * **Note:** You cannot update the card number, expiration date, or other sensitive card details. To update those, create a new payment method.
     *
     * @param {RevKeen.UpdatePaymentMethodRequest} request
     * @param {PaymentMethodsClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link RevKeen.BadRequestError}
     * @throws {@link RevKeen.UnauthorizedError}
     * @throws {@link RevKeen.ForbiddenError}
     * @throws {@link RevKeen.NotFoundError}
     *
     * @example
     *     await client.paymentMethods.update({
     *         id: "pm_1a2b3c4d5e6f"
     *     })
     */
    update(request: RevKeen.UpdatePaymentMethodRequest, requestOptions?: PaymentMethodsClient.RequestOptions): core.HttpResponsePromise<RevKeen.PaymentMethod>;
    private __update;
    /**
     * Attaches a payment method to a customer. This is typically used after creating a payment method via a Setup Intent.
     *
     * If the payment method is already attached to a different customer, this will detach it first.
     *
     * @param {RevKeen.AttachPaymentMethodRequest} request
     * @param {PaymentMethodsClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link RevKeen.BadRequestError}
     * @throws {@link RevKeen.UnauthorizedError}
     * @throws {@link RevKeen.ForbiddenError}
     * @throws {@link RevKeen.NotFoundError}
     *
     * @example
     *     await client.paymentMethods.attach({
     *         id: "pm_1a2b3c4d5e6f",
     *         customer_id: "550e8400-e29b-41d4-a716-446655440000"
     *     })
     */
    attach(request: RevKeen.AttachPaymentMethodRequest, requestOptions?: PaymentMethodsClient.RequestOptions): core.HttpResponsePromise<RevKeen.PaymentMethod>;
    private __attach;
    /**
     * Detaches a payment method from its customer. After detaching, the payment method can no longer be used for payments.
     *
     * This operation soft-deletes the payment method by setting its status to 'inactive'.
     *
     * @param {RevKeen.DetachPaymentMethodsRequest} request
     * @param {PaymentMethodsClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link RevKeen.BadRequestError}
     * @throws {@link RevKeen.UnauthorizedError}
     * @throws {@link RevKeen.ForbiddenError}
     * @throws {@link RevKeen.NotFoundError}
     *
     * @example
     *     await client.paymentMethods.detach({
     *         id: "pm_1a2b3c4d5e6f"
     *     })
     */
    detach(request: RevKeen.DetachPaymentMethodsRequest, requestOptions?: PaymentMethodsClient.RequestOptions): core.HttpResponsePromise<RevKeen.PaymentMethod>;
    private __detach;
}
//# sourceMappingURL=Client.d.ts.map