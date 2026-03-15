import type { BaseClientOptions, BaseRequestOptions } from "../../../../BaseClient.js";
import { type NormalizedClientOptionsWithAuth } from "../../../../BaseClient.js";
import * as core from "../../../../core/index.js";
import * as RevKeen from "../../../index.js";
export declare namespace WebhookEndpointsClient {
    type Options = BaseClientOptions;
    interface RequestOptions extends BaseRequestOptions {
    }
}
/**
 * Create and manage webhook endpoints to receive real-time event notifications. Configure URLs, select event types, and manage signing secrets.
 */
export declare class WebhookEndpointsClient {
    protected readonly _options: NormalizedClientOptionsWithAuth<WebhookEndpointsClient.Options>;
    constructor(options: WebhookEndpointsClient.Options);
    /**
     * Retrieve a list of all configured webhook endpoints for your account.
     *
     * @param {RevKeen.WebhookEndpointsListRequest} request
     * @param {WebhookEndpointsClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link RevKeen.UnauthorizedError}
     *
     * @example
     *     await client.webhookEndpoints.webhookEndpointsList({
     *         limit: 20
     *     })
     */
    webhookEndpointsList(request?: RevKeen.WebhookEndpointsListRequest, requestOptions?: WebhookEndpointsClient.RequestOptions): core.HttpResponsePromise<RevKeen.WebhookEndpointListResponse>;
    private __webhookEndpointsList;
    /**
     * Create a new webhook endpoint to receive event notifications.
     *
     * A signing secret is automatically generated and returned **only in this response**.
     * Store it securely - you'll need it to verify webhook signatures.
     *
     * ## Event Patterns
     *
     * Subscribe to specific events using dot notation or wildcards:
     * - `payment.succeeded` - Specific event
     * - `invoice.*` - All invoice events
     * - `*` - All events
     *
     * ## Signature Verification
     *
     * All webhooks include an `X-Revkeen-Signature` header for verification.
     * See the [Webhooks documentation](https://docs.revkeen.com/webhooks) for verification examples.
     *
     * @param {RevKeen.CreateWebhookEndpointInput} request
     * @param {WebhookEndpointsClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link RevKeen.BadRequestError}
     * @throws {@link RevKeen.UnauthorizedError}
     * @throws {@link RevKeen.ConflictError}
     *
     * @example
     *     await client.webhookEndpoints.webhookEndpointsCreate({
     *         url: "https://api.example.com/webhooks/revkeen",
     *         enabled_events: ["payment.succeeded", "invoice.paid"]
     *     })
     */
    webhookEndpointsCreate(request: RevKeen.CreateWebhookEndpointInput, requestOptions?: WebhookEndpointsClient.RequestOptions): core.HttpResponsePromise<RevKeen.WebhookEndpointCreateResponse>;
    private __webhookEndpointsCreate;
    /**
     * Retrieve details of a specific webhook endpoint.
     *
     * @param {RevKeen.WebhookEndpointsRetrieveRequest} request
     * @param {WebhookEndpointsClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link RevKeen.UnauthorizedError}
     * @throws {@link RevKeen.NotFoundError}
     *
     * @example
     *     await client.webhookEndpoints.webhookEndpointsRetrieve({
     *         id: "id"
     *     })
     */
    webhookEndpointsRetrieve(request: RevKeen.WebhookEndpointsRetrieveRequest, requestOptions?: WebhookEndpointsClient.RequestOptions): core.HttpResponsePromise<RevKeen.WebhookEndpointRetrieveResponse>;
    private __webhookEndpointsRetrieve;
    /**
     * Delete a webhook endpoint. All pending deliveries for this endpoint will be cancelled.
     *
     * @param {RevKeen.WebhookEndpointsDeleteRequest} request
     * @param {WebhookEndpointsClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link RevKeen.UnauthorizedError}
     * @throws {@link RevKeen.NotFoundError}
     *
     * @example
     *     await client.webhookEndpoints.webhookEndpointsDelete({
     *         id: "id"
     *     })
     */
    webhookEndpointsDelete(request: RevKeen.WebhookEndpointsDeleteRequest, requestOptions?: WebhookEndpointsClient.RequestOptions): core.HttpResponsePromise<RevKeen.WebhookEndpointDeleteResponse>;
    private __webhookEndpointsDelete;
    /**
     * Update an existing webhook endpoint. You can change the URL, subscribed events, or enable/disable the endpoint.
     *
     * @param {RevKeen.UpdateWebhookEndpointInput} request
     * @param {WebhookEndpointsClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link RevKeen.BadRequestError}
     * @throws {@link RevKeen.UnauthorizedError}
     * @throws {@link RevKeen.NotFoundError}
     *
     * @example
     *     await client.webhookEndpoints.webhookEndpointsUpdate({
     *         id: "id"
     *     })
     */
    webhookEndpointsUpdate(request: RevKeen.UpdateWebhookEndpointInput, requestOptions?: WebhookEndpointsClient.RequestOptions): core.HttpResponsePromise<RevKeen.WebhookEndpointUpdateResponse>;
    private __webhookEndpointsUpdate;
    /**
     * Generate a new signing secret for this webhook endpoint.
     *
     * The new secret is returned **only in this response** - store it securely.
     * The old secret will be invalidated immediately.
     *
     * **Note:** Update your webhook handler to use the new secret before making this call,
     * or webhooks may fail verification until you update your code.
     *
     * @param {RevKeen.WebhookEndpointsRotateSecretRequest} request
     * @param {WebhookEndpointsClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link RevKeen.UnauthorizedError}
     * @throws {@link RevKeen.NotFoundError}
     *
     * @example
     *     await client.webhookEndpoints.webhookEndpointsRotateSecret({
     *         id: "id"
     *     })
     */
    webhookEndpointsRotateSecret(request: RevKeen.WebhookEndpointsRotateSecretRequest, requestOptions?: WebhookEndpointsClient.RequestOptions): core.HttpResponsePromise<RevKeen.WebhookEndpointRotateSecretResponse>;
    private __webhookEndpointsRotateSecret;
}
//# sourceMappingURL=Client.d.ts.map