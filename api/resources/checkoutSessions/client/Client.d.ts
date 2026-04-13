import type { BaseClientOptions, BaseRequestOptions } from "../../../../BaseClient.js";
import { type NormalizedClientOptionsWithAuth } from "../../../../BaseClient.js";
import * as core from "../../../../core/index.js";
import * as RevKeen from "../../../index.js";
export declare namespace CheckoutSessionsClient {
    type Options = BaseClientOptions;
    interface RequestOptions extends BaseRequestOptions {
    }
}
/**
 * Create hosted checkout pages for one-time payments or subscription sign-ups. Redirect customers to RevKeen-hosted payment forms.
 *
 * **Required Scopes:**
 * - `checkout:read` - List and retrieve sessions
 * - `checkout:write` - Create checkout sessions
 */
export declare class CheckoutSessionsClient {
    protected readonly _options: NormalizedClientOptionsWithAuth<CheckoutSessionsClient.Options>;
    constructor(options: CheckoutSessionsClient.Options);
    /**
     * Create a checkout session for an invoice or product.
     *
     * @param {RevKeen.CreateCheckoutSessionInput} request
     * @param {CheckoutSessionsClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link RevKeen.BadRequestError}
     * @throws {@link RevKeen.UnauthorizedError}
     * @throws {@link RevKeen.NotFoundError}
     *
     * @example
     *     await client.checkoutSessions.checkoutSessionsCreate()
     */
    checkoutSessionsCreate(request?: RevKeen.CreateCheckoutSessionInput, requestOptions?: CheckoutSessionsClient.RequestOptions): core.HttpResponsePromise<RevKeen.CheckoutSessionCreateResponse>;
    private __checkoutSessionsCreate;
    /**
     * Retrieve a checkout session by its ID.
     *
     * @param {RevKeen.CheckoutSessionsRetrieveRequest} request
     * @param {CheckoutSessionsClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link RevKeen.UnauthorizedError}
     * @throws {@link RevKeen.NotFoundError}
     * @throws {@link RevKeen.InternalServerError}
     *
     * @example
     *     await client.checkoutSessions.checkoutSessionsRetrieve({
     *         id: "550e8400-e29b-41d4-a716-446655440000"
     *     })
     */
    checkoutSessionsRetrieve(request: RevKeen.CheckoutSessionsRetrieveRequest, requestOptions?: CheckoutSessionsClient.RequestOptions): core.HttpResponsePromise<RevKeen.CheckoutSessionRetrieveResponse>;
    private __checkoutSessionsRetrieve;
    /**
     * Manually expire an open checkout session. Only sessions with status 'open' or 'pending' and no active payment attempt can be expired.
     *
     * @param {RevKeen.CheckoutSessionsExpireRequest} request
     * @param {CheckoutSessionsClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link RevKeen.UnauthorizedError}
     * @throws {@link RevKeen.NotFoundError}
     * @throws {@link RevKeen.ConflictError}
     *
     * @example
     *     await client.checkoutSessions.checkoutSessionsExpire({
     *         id: "550e8400-e29b-41d4-a716-446655440000"
     *     })
     */
    checkoutSessionsExpire(request: RevKeen.CheckoutSessionsExpireRequest, requestOptions?: CheckoutSessionsClient.RequestOptions): core.HttpResponsePromise<RevKeen.CheckoutSessionExpireResponse>;
    private __checkoutSessionsExpire;
}
//# sourceMappingURL=Client.d.ts.map