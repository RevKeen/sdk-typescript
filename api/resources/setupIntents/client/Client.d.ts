import type { BaseClientOptions, BaseRequestOptions } from "../../../../BaseClient.js";
import { type NormalizedClientOptionsWithAuth } from "../../../../BaseClient.js";
import * as core from "../../../../core/index.js";
import * as RevKeen from "../../../index.js";
export declare namespace SetupIntentsClient {
    type Options = BaseClientOptions;
    interface RequestOptions extends BaseRequestOptions {
    }
}
/**
 * Setup Intents save payment methods WITHOUT charging. Use them to collect card details for future use (subscriptions, saved cards) or to verify cards with 3DS/SCA before storing.
 *
 * **Required Scopes:**
 * - `setup_intents:read` - List and retrieve setup intents
 * - `setup_intents:write` - Create, confirm, cancel setup intents
 *
 * **MCP Tools:** Available via `customers_*` tools
 */
export declare class SetupIntentsClient {
    protected readonly _options: NormalizedClientOptionsWithAuth<SetupIntentsClient.Options>;
    constructor(options: SetupIntentsClient.Options);
    /**
     * Returns a list of setup intents. The setup intents are returned sorted by creation date, with the most recent first.
     *
     * @param {RevKeen.ListSetupIntentsRequest} request
     * @param {SetupIntentsClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link RevKeen.UnauthorizedError}
     * @throws {@link RevKeen.ForbiddenError}
     *
     * @example
     *     await client.setupIntents.list()
     */
    list(request?: RevKeen.ListSetupIntentsRequest, requestOptions?: SetupIntentsClient.RequestOptions): core.HttpResponsePromise<RevKeen.SetupIntentList>;
    private __list;
    /**
     * Creates a new setup intent for saving a payment method without charging.
     *
     * **Use Cases:**
     * - Save a card for future subscription payments
     * - Pre-authorize a payment method with 3DS/SCA verification
     * - Collect payment details for later use (off-session payments)
     *
     * The setup intent is created in `requires_payment_method` status. Use the `client_secret` to complete the setup flow on the client side.
     *
     * @param {RevKeen.CreateSetupIntentRequest} request
     * @param {SetupIntentsClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link RevKeen.BadRequestError}
     * @throws {@link RevKeen.UnauthorizedError}
     * @throws {@link RevKeen.ForbiddenError}
     *
     * @example
     *     await client.setupIntents.create()
     */
    create(request?: RevKeen.CreateSetupIntentRequest, requestOptions?: SetupIntentsClient.RequestOptions): core.HttpResponsePromise<RevKeen.SetupIntent>;
    private __create;
    /**
     * Retrieves a setup intent by ID. You can use either the internal UUID or the public ID (seti_xxx format).
     *
     * @param {RevKeen.RetrieveSetupIntentsRequest} request
     * @param {SetupIntentsClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link RevKeen.UnauthorizedError}
     * @throws {@link RevKeen.ForbiddenError}
     * @throws {@link RevKeen.NotFoundError}
     *
     * @example
     *     await client.setupIntents.retrieve({
     *         id: "seti_1a2b3c4d5e6f"
     *     })
     */
    retrieve(request: RevKeen.RetrieveSetupIntentsRequest, requestOptions?: SetupIntentsClient.RequestOptions): core.HttpResponsePromise<RevKeen.SetupIntent>;
    private __retrieve;
    /**
     * Updates a setup intent that has not yet been confirmed or canceled.
     *
     * You can update:
     * - `customer_id` - The customer to attach the payment method to
     * - `payment_method_types` - Allowed payment method types
     * - `description` - Merchant description
     * - `metadata` - Custom metadata
     *
     * @param {RevKeen.UpdateSetupIntentRequest} request
     * @param {SetupIntentsClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link RevKeen.BadRequestError}
     * @throws {@link RevKeen.UnauthorizedError}
     * @throws {@link RevKeen.ForbiddenError}
     * @throws {@link RevKeen.NotFoundError}
     *
     * @example
     *     await client.setupIntents.update({
     *         id: "seti_1a2b3c4d5e6f"
     *     })
     */
    update(request: RevKeen.UpdateSetupIntentRequest, requestOptions?: SetupIntentsClient.RequestOptions): core.HttpResponsePromise<RevKeen.SetupIntent>;
    private __update;
    /**
     * Confirms a setup intent and saves the payment method.
     *
     * **3DS/SCA Flow:**
     * If the payment method requires authentication, the setup intent will transition to `requires_action` status with a `next_action` containing the redirect URL. After the customer completes authentication, the setup intent will automatically transition to `succeeded`.
     *
     * **Direct Confirmation:**
     * If no authentication is required, the setup intent will immediately transition to `succeeded` and the payment method will be saved to the customer.
     *
     * @param {RevKeen.ConfirmSetupIntentRequest} request
     * @param {SetupIntentsClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link RevKeen.BadRequestError}
     * @throws {@link RevKeen.UnauthorizedError}
     * @throws {@link RevKeen.ForbiddenError}
     * @throws {@link RevKeen.NotFoundError}
     *
     * @example
     *     await client.setupIntents.confirm({
     *         id: "seti_1a2b3c4d5e6f"
     *     })
     */
    confirm(request: RevKeen.ConfirmSetupIntentRequest, requestOptions?: SetupIntentsClient.RequestOptions): core.HttpResponsePromise<RevKeen.SetupIntent>;
    private __confirm;
    /**
     * Cancels a setup intent that has not yet succeeded.
     *
     * Once canceled, the setup intent cannot be confirmed. A new setup intent must be created to save a payment method.
     *
     * @param {RevKeen.CancelSetupIntentRequest} request
     * @param {SetupIntentsClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link RevKeen.BadRequestError}
     * @throws {@link RevKeen.UnauthorizedError}
     * @throws {@link RevKeen.ForbiddenError}
     * @throws {@link RevKeen.NotFoundError}
     *
     * @example
     *     await client.setupIntents.cancel({
     *         id: "seti_1a2b3c4d5e6f"
     *     })
     */
    cancel(request: RevKeen.CancelSetupIntentRequest, requestOptions?: SetupIntentsClient.RequestOptions): core.HttpResponsePromise<RevKeen.SetupIntent>;
    private __cancel;
}
//# sourceMappingURL=Client.d.ts.map