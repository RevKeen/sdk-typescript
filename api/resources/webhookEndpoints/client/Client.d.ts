import type { BaseClientOptions, BaseRequestOptions } from "../../../../BaseClient.js";
import { type NormalizedClientOptionsWithAuth } from "../../../../BaseClient.js";
import * as core from "../../../../core/index.js";
import type * as RevKeen from "../../../index.js";
export declare namespace WebhookEndpointsClient {
    type Options = BaseClientOptions;
    interface RequestOptions extends BaseRequestOptions {
    }
}
/**
 * Webhook endpoint objects let you register URLs that RevKeen will notify when events occur in your account — payments, subscription changes, invoice updates, and more. Each endpoint can subscribe to specific event types or use wildcards to receive all events.
 */
export declare class WebhookEndpointsClient {
    protected readonly _options: NormalizedClientOptionsWithAuth<WebhookEndpointsClient.Options>;
    constructor(options: WebhookEndpointsClient.Options);
    /**
     * @param {RevKeen.WebhookEndpointsListRequest} request
     * @param {WebhookEndpointsClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @example
     *     await client.webhookEndpoints.webhookEndpointsList()
     */
    webhookEndpointsList(request?: RevKeen.WebhookEndpointsListRequest, requestOptions?: WebhookEndpointsClient.RequestOptions): core.HttpResponsePromise<RevKeen.WebhookEndpointsListResponse>;
    private __webhookEndpointsList;
    /**
     * @param {RevKeen.WebhookEndpointsCreateRequest} request
     * @param {WebhookEndpointsClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @example
     *     await client.webhookEndpoints.webhookEndpointsCreate({
     *         url: "url",
     *         enabled_events: ["enabled_events"]
     *     })
     */
    webhookEndpointsCreate(request: RevKeen.WebhookEndpointsCreateRequest, requestOptions?: WebhookEndpointsClient.RequestOptions): core.HttpResponsePromise<RevKeen.WebhookEndpointsCreateResponse>;
    private __webhookEndpointsCreate;
    /**
     * @param {RevKeen.WebhookEndpointsRetrieveRequest} request
     * @param {WebhookEndpointsClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @example
     *     await client.webhookEndpoints.webhookEndpointsRetrieve({
     *         id: "id"
     *     })
     */
    webhookEndpointsRetrieve(request: RevKeen.WebhookEndpointsRetrieveRequest, requestOptions?: WebhookEndpointsClient.RequestOptions): core.HttpResponsePromise<RevKeen.WebhookEndpointsRetrieveResponse>;
    private __webhookEndpointsRetrieve;
    /**
     * @param {RevKeen.WebhookEndpointsDeleteRequest} request
     * @param {WebhookEndpointsClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @example
     *     await client.webhookEndpoints.webhookEndpointsDelete({
     *         id: "id"
     *     })
     */
    webhookEndpointsDelete(request: RevKeen.WebhookEndpointsDeleteRequest, requestOptions?: WebhookEndpointsClient.RequestOptions): core.HttpResponsePromise<RevKeen.WebhookEndpointsDeleteResponse>;
    private __webhookEndpointsDelete;
    /**
     * @param {RevKeen.WebhookEndpointsUpdateRequest} request
     * @param {WebhookEndpointsClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @example
     *     await client.webhookEndpoints.webhookEndpointsUpdate({
     *         id: "id"
     *     })
     */
    webhookEndpointsUpdate(request: RevKeen.WebhookEndpointsUpdateRequest, requestOptions?: WebhookEndpointsClient.RequestOptions): core.HttpResponsePromise<RevKeen.WebhookEndpointsUpdateResponse>;
    private __webhookEndpointsUpdate;
    /**
     * @param {RevKeen.WebhookEndpointsRotateSecretRequest} request
     * @param {WebhookEndpointsClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @example
     *     await client.webhookEndpoints.webhookEndpointsRotateSecret({
     *         id: "id"
     *     })
     */
    webhookEndpointsRotateSecret(request: RevKeen.WebhookEndpointsRotateSecretRequest, requestOptions?: WebhookEndpointsClient.RequestOptions): core.HttpResponsePromise<RevKeen.WebhookEndpointsRotateSecretResponse>;
    private __webhookEndpointsRotateSecret;
}
//# sourceMappingURL=Client.d.ts.map