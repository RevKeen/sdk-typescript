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
 * - `checkout_sessions:read` - List and retrieve sessions
 * - `checkout_sessions:write` - Create checkout sessions
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
}
//# sourceMappingURL=Client.d.ts.map