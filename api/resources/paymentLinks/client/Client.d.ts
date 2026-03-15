import type { BaseClientOptions, BaseRequestOptions } from "../../../../BaseClient.js";
import { type NormalizedClientOptionsWithAuth } from "../../../../BaseClient.js";
import * as core from "../../../../core/index.js";
import * as RevKeen from "../../../index.js";
export declare namespace PaymentLinksClient {
    type Options = BaseClientOptions;
    interface RequestOptions extends BaseRequestOptions {
    }
}
/**
 * Create shareable payment links for invoices, subscriptions, or custom amounts. Customers complete payment on a hosted page.
 *
 * **Required Scopes:**
 * - `payment_links:read` - List and retrieve payment links
 * - `payment_links:write` - Create and update payment links
 */
export declare class PaymentLinksClient {
    protected readonly _options: NormalizedClientOptionsWithAuth<PaymentLinksClient.Options>;
    constructor(options: PaymentLinksClient.Options);
    /**
     * List payment links for the authenticated merchant with pagination and filters
     *
     * @param {RevKeen.ListPaymentLinksRequest} request
     * @param {PaymentLinksClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link RevKeen.BadRequestError}
     * @throws {@link RevKeen.UnauthorizedError}
     *
     * @example
     *     await client.paymentLinks.listPaymentLinks()
     */
    listPaymentLinks(request?: RevKeen.ListPaymentLinksRequest, requestOptions?: PaymentLinksClient.RequestOptions): core.HttpResponsePromise<RevKeen.ListPaymentLinksResponse>;
    private __listPaymentLinks;
    /**
     * Create a new payment link for invoices, subscriptions, or custom amounts
     *
     * @param {RevKeen.CreatePaymentLinkRequest} request
     * @param {PaymentLinksClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link RevKeen.BadRequestError}
     * @throws {@link RevKeen.UnauthorizedError}
     * @throws {@link RevKeen.ConflictError}
     *
     * @example
     *     await client.paymentLinks.createPaymentLink()
     */
    createPaymentLink(request?: RevKeen.CreatePaymentLinkRequest, requestOptions?: PaymentLinksClient.RequestOptions): core.HttpResponsePromise<RevKeen.CreatePaymentLinkResponse>;
    private __createPaymentLink;
    /**
     * Retrieve a payment link by its UUID or public_id
     *
     * @param {RevKeen.GetPaymentLinkRequest} request
     * @param {PaymentLinksClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link RevKeen.UnauthorizedError}
     * @throws {@link RevKeen.NotFoundError}
     *
     * @example
     *     await client.paymentLinks.getPaymentLink({
     *         id: "id"
     *     })
     */
    getPaymentLink(request: RevKeen.GetPaymentLinkRequest, requestOptions?: PaymentLinksClient.RequestOptions): core.HttpResponsePromise<RevKeen.GetPaymentLinkResponse>;
    private __getPaymentLink;
    /**
     * Mark a payment link as expired, preventing further use
     *
     * @param {RevKeen.ExpirePaymentLinkRequest} request
     * @param {PaymentLinksClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link RevKeen.BadRequestError}
     * @throws {@link RevKeen.UnauthorizedError}
     * @throws {@link RevKeen.NotFoundError}
     *
     * @example
     *     await client.paymentLinks.expirePaymentLink({
     *         id: "id"
     *     })
     */
    expirePaymentLink(request: RevKeen.ExpirePaymentLinkRequest, requestOptions?: PaymentLinksClient.RequestOptions): core.HttpResponsePromise<RevKeen.ExpirePaymentLinkResponse>;
    private __expirePaymentLink;
    /**
     * Change the status of a payment link. Active links accept payments, inactive links are temporarily disabled, and archived links are permanently disabled and cannot be reactivated.
     *
     * @param {RevKeen.UpdatePaymentLinkStatusRequest} request
     * @param {PaymentLinksClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link RevKeen.BadRequestError}
     * @throws {@link RevKeen.UnauthorizedError}
     * @throws {@link RevKeen.NotFoundError}
     *
     * @example
     *     await client.paymentLinks.updatePaymentLinkStatus({
     *         id: "id",
     *         status: "active"
     *     })
     */
    updatePaymentLinkStatus(request: RevKeen.UpdatePaymentLinkStatusRequest, requestOptions?: PaymentLinksClient.RequestOptions): core.HttpResponsePromise<RevKeen.UpdatePaymentLinkStatusResponse>;
    private __updatePaymentLinkStatus;
    /**
     * Temporarily disable a payment link. It can be reactivated later.
     *
     * @param {RevKeen.DeactivatePaymentLinkRequest} request
     * @param {PaymentLinksClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link RevKeen.BadRequestError}
     * @throws {@link RevKeen.UnauthorizedError}
     * @throws {@link RevKeen.NotFoundError}
     *
     * @example
     *     await client.paymentLinks.deactivatePaymentLink({
     *         id: "id"
     *     })
     */
    deactivatePaymentLink(request: RevKeen.DeactivatePaymentLinkRequest, requestOptions?: PaymentLinksClient.RequestOptions): core.HttpResponsePromise<RevKeen.DeactivatePaymentLinkResponse>;
    private __deactivatePaymentLink;
    /**
     * Enable a payment link to accept payments. Cannot be used on archived links.
     *
     * @param {RevKeen.ActivatePaymentLinkRequest} request
     * @param {PaymentLinksClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link RevKeen.BadRequestError}
     * @throws {@link RevKeen.UnauthorizedError}
     * @throws {@link RevKeen.NotFoundError}
     *
     * @example
     *     await client.paymentLinks.activatePaymentLink({
     *         id: "id"
     *     })
     */
    activatePaymentLink(request: RevKeen.ActivatePaymentLinkRequest, requestOptions?: PaymentLinksClient.RequestOptions): core.HttpResponsePromise<RevKeen.ActivatePaymentLinkResponse>;
    private __activatePaymentLink;
    /**
     * Permanently disable a payment link. This action cannot be undone.
     *
     * @param {RevKeen.ArchivePaymentLinkRequest} request
     * @param {PaymentLinksClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link RevKeen.UnauthorizedError}
     * @throws {@link RevKeen.NotFoundError}
     *
     * @example
     *     await client.paymentLinks.archivePaymentLink({
     *         id: "id"
     *     })
     */
    archivePaymentLink(request: RevKeen.ArchivePaymentLinkRequest, requestOptions?: PaymentLinksClient.RequestOptions): core.HttpResponsePromise<RevKeen.ArchivePaymentLinkResponse>;
    private __archivePaymentLink;
}
//# sourceMappingURL=Client.d.ts.map