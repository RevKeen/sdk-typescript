import type { BaseClientOptions, BaseRequestOptions } from "../../../../BaseClient.js";
import { type NormalizedClientOptionsWithAuth } from "../../../../BaseClient.js";
import * as core from "../../../../core/index.js";
import * as RevKeen from "../../../index.js";
export declare namespace IntegrationsClient {
    type Options = BaseClientOptions;
    interface RequestOptions extends BaseRequestOptions {
    }
}
/**
 * Manage external integrations (PracticeHub, Wodify). List active integrations and update status.
 */
export declare class IntegrationsClient {
    protected readonly _options: NormalizedClientOptionsWithAuth<IntegrationsClient.Options>;
    constructor(options: IntegrationsClient.Options);
    /**
     * Activate an external integration for the merchant. Validates credentials and schedules sync.
     *
     * @param {RevKeen.IntegrationsActivateRequest} request
     * @param {IntegrationsClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link RevKeen.BadRequestError}
     * @throws {@link RevKeen.UnauthorizedError}
     * @throws {@link RevKeen.ConflictError}
     *
     * @example
     *     await client.integrations.activate({
     *         provider: "practicehub",
     *         credentials: {
     *             apiKey: "apiKey",
     *             baseUrl: "baseUrl"
     *         }
     *     })
     */
    activate(request: RevKeen.IntegrationsActivateRequest, requestOptions?: IntegrationsClient.RequestOptions): core.HttpResponsePromise<RevKeen.IntegrationsActivateResponse>;
    private __activate;
    /**
     * Deactivate an external integration. Stops sync jobs and revokes API keys.
     *
     * @param {RevKeen.IntegrationsDeactivateRequest} request
     * @param {IntegrationsClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link RevKeen.NotFoundError}
     *
     * @example
     *     await client.integrations.deactivate({
     *         provider: "practicehub"
     *     })
     */
    deactivate(request: RevKeen.IntegrationsDeactivateRequest, requestOptions?: IntegrationsClient.RequestOptions): core.HttpResponsePromise<RevKeen.IntegrationsDeactivateResponse>;
    private __deactivate;
    /**
     * Get the current status of an integration including sync schedule.
     *
     * @param {RevKeen.IntegrationsGetStatusRequest} request
     * @param {IntegrationsClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link RevKeen.UnauthorizedError}
     * @throws {@link RevKeen.InternalServerError}
     *
     * @example
     *     await client.integrations.getstatus({
     *         provider: "practicehub"
     *     })
     */
    getstatus(request: RevKeen.IntegrationsGetStatusRequest, requestOptions?: IntegrationsClient.RequestOptions): core.HttpResponsePromise<RevKeen.IntegrationsGetStatusResponse>;
    private __getstatus;
    /**
     * Validate credentials against the provider without activating the integration.
     *
     * @param {RevKeen.IntegrationsTestRequest} request
     * @param {IntegrationsClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link RevKeen.UnauthorizedError}
     *
     * @example
     *     await client.integrations.test({
     *         provider: "practicehub",
     *         credentials: {
     *             apiKey: "apiKey",
     *             baseUrl: "baseUrl"
     *         }
     *     })
     */
    test(request: RevKeen.IntegrationsTestRequest, requestOptions?: IntegrationsClient.RequestOptions): core.HttpResponsePromise<RevKeen.IntegrationsTestResponse>;
    private __test;
    /**
     * Trigger an immediate sync job for an active integration. Pass fullResync=true to ignore the incremental cursor and re-process all records.
     *
     * @param {RevKeen.IntegrationsTriggerSyncRequest} request
     * @param {IntegrationsClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link RevKeen.BadRequestError}
     *
     * @example
     *     await client.integrations.triggersync({
     *         provider: "practicehub"
     *     })
     */
    triggersync(request: RevKeen.IntegrationsTriggerSyncRequest, requestOptions?: IntegrationsClient.RequestOptions): core.HttpResponsePromise<RevKeen.IntegrationsTriggerSyncResponse>;
    private __triggersync;
    /**
     * List all integrations for the authenticated merchant.
     *
     * @param {IntegrationsClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link RevKeen.UnauthorizedError}
     *
     * @example
     *     await client.integrations.list()
     */
    list(requestOptions?: IntegrationsClient.RequestOptions): core.HttpResponsePromise<RevKeen.IntegrationsListResponse>;
    private __list;
    /**
     * Update integration status and last sync timestamp. Used by sync worker.
     *
     * @param {RevKeen.IntegrationsUpdateStatusRequest} request
     * @param {IntegrationsClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link RevKeen.UnauthorizedError}
     * @throws {@link RevKeen.NotFoundError}
     * @throws {@link RevKeen.InternalServerError}
     *
     * @example
     *     await client.integrations.updatestatus({
     *         provider: "practicehub",
     *         status: "connected"
     *     })
     */
    updatestatus(request: RevKeen.IntegrationsUpdateStatusRequest, requestOptions?: IntegrationsClient.RequestOptions): core.HttpResponsePromise<RevKeen.IntegrationsUpdateStatusResponse>;
    private __updatestatus;
    /**
     * Enable or disable sync for an integration.
     *
     * @param {RevKeen.IntegrationsSyncToggleRequest} request
     * @param {IntegrationsClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link RevKeen.NotFoundError}
     *
     * @example
     *     await client.integrations.synctoggle({
     *         provider: "practicehub",
     *         enabled: true
     *     })
     */
    synctoggle(request: RevKeen.IntegrationsSyncToggleRequest, requestOptions?: IntegrationsClient.RequestOptions): core.HttpResponsePromise<RevKeen.IntegrationsSyncToggleResponse>;
    private __synctoggle;
    /**
     * Update the sync interval (in minutes) for an integration.
     *
     * @param {RevKeen.IntegrationsSyncIntervalRequest} request
     * @param {IntegrationsClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link RevKeen.NotFoundError}
     *
     * @example
     *     await client.integrations.syncinterval({
     *         provider: "practicehub",
     *         syncIntervalMinutes: 1
     *     })
     */
    syncinterval(request: RevKeen.IntegrationsSyncIntervalRequest, requestOptions?: IntegrationsClient.RequestOptions): core.HttpResponsePromise<RevKeen.IntegrationsSyncIntervalResponse>;
    private __syncinterval;
    /**
     * Update how far back (in days) to fetch invoices on initial sync.
     *
     * @param {RevKeen.IntegrationsInvoiceLookbackRequest} request
     * @param {IntegrationsClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link RevKeen.NotFoundError}
     *
     * @example
     *     await client.integrations.invoicelookback({
     *         provider: "practicehub",
     *         invoiceLookbackDays: 1
     *     })
     */
    invoicelookback(request: RevKeen.IntegrationsInvoiceLookbackRequest, requestOptions?: IntegrationsClient.RequestOptions): core.HttpResponsePromise<RevKeen.IntegrationsInvoiceLookbackResponse>;
    private __invoicelookback;
    /**
     * Update payment method mappings between RevKeen and the external provider.
     *
     * @param {RevKeen.IntegrationsPaymentMappingsRequest} request
     * @param {IntegrationsClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link RevKeen.NotFoundError}
     *
     * @example
     *     await client.integrations.paymentmappings({
     *         provider: "practicehub",
     *         mappings: [{
     *                 id: "id",
     *                 revkeenMethod: "revkeenMethod",
     *                 practiceHubMethodId: "practiceHubMethodId"
     *             }]
     *     })
     */
    paymentmappings(request: RevKeen.IntegrationsPaymentMappingsRequest, requestOptions?: IntegrationsClient.RequestOptions): core.HttpResponsePromise<RevKeen.IntegrationsPaymentMappingsResponse>;
    private __paymentmappings;
    /**
     * Fetch payment methods from the external provider using stored credentials.
     *
     * @param {RevKeen.IntegrationsGetPaymentMethodsRequest} request
     * @param {IntegrationsClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link RevKeen.NotFoundError}
     *
     * @example
     *     await client.integrations.getpaymentmethods({
     *         provider: "practicehub"
     *     })
     */
    getpaymentmethods(request: RevKeen.IntegrationsGetPaymentMethodsRequest, requestOptions?: IntegrationsClient.RequestOptions): core.HttpResponsePromise<RevKeen.IntegrationsGetPaymentMethodsResponse>;
    private __getpaymentmethods;
    /**
     * Fetch payment methods from the external provider using temporary credentials, typically during integration setup wizard.
     *
     * @param {RevKeen.IntegrationsPostPaymentMethodsRequest} request
     * @param {IntegrationsClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link RevKeen.UnauthorizedError}
     * @throws {@link RevKeen.InternalServerError}
     *
     * @example
     *     await client.integrations.postpaymentmethods({
     *         provider: "practicehub",
     *         baseUrl: "baseUrl",
     *         apiKey: "apiKey"
     *     })
     */
    postpaymentmethods(request: RevKeen.IntegrationsPostPaymentMethodsRequest, requestOptions?: IntegrationsClient.RequestOptions): core.HttpResponsePromise<RevKeen.IntegrationsPostPaymentMethodsResponse>;
    private __postpaymentmethods;
    /**
     * Get per-resource sync state for an integration (patients, invoices, products, etc.).
     *
     * @param {RevKeen.IntegrationsSyncStatesRequest} request
     * @param {IntegrationsClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link RevKeen.UnauthorizedError}
     * @throws {@link RevKeen.InternalServerError}
     *
     * @example
     *     await client.integrations.syncstates({
     *         provider: "practicehub"
     *     })
     */
    syncstates(request: RevKeen.IntegrationsSyncStatesRequest, requestOptions?: IntegrationsClient.RequestOptions): core.HttpResponsePromise<RevKeen.IntegrationsSyncStatesResponse>;
    private __syncstates;
    /**
     * List sync logs with filtering for the Sync History dashboard.
     *
     * @param {RevKeen.IntegrationsSyncLogsRequest} request
     * @param {IntegrationsClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link RevKeen.UnauthorizedError}
     * @throws {@link RevKeen.InternalServerError}
     *
     * @example
     *     await client.integrations.synclogs({
     *         provider: "practicehub"
     *     })
     */
    synclogs(request: RevKeen.IntegrationsSyncLogsRequest, requestOptions?: IntegrationsClient.RequestOptions): core.HttpResponsePromise<RevKeen.IntegrationsSyncLogsResponse>;
    private __synclogs;
    /**
     * Get a single sync log entry by its ID.
     *
     * @param {RevKeen.IntegrationsSyncLogByIdRequest} request
     * @param {IntegrationsClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link RevKeen.NotFoundError}
     *
     * @example
     *     await client.integrations.synclogbyid({
     *         provider: "practicehub",
     *         logId: "logId"
     *     })
     */
    synclogbyid(request: RevKeen.IntegrationsSyncLogByIdRequest, requestOptions?: IntegrationsClient.RequestOptions): core.HttpResponsePromise<RevKeen.IntegrationsSyncLogByIdResponse>;
    private __synclogbyid;
    /**
     * Get aggregate sync statistics for an integration.
     *
     * @param {RevKeen.IntegrationsSyncStatsRequest} request
     * @param {IntegrationsClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link RevKeen.UnauthorizedError}
     * @throws {@link RevKeen.InternalServerError}
     *
     * @example
     *     await client.integrations.syncstats({
     *         provider: "practicehub",
     *         integrationId: "integrationId"
     *     })
     */
    syncstats(request: RevKeen.IntegrationsSyncStatsRequest, requestOptions?: IntegrationsClient.RequestOptions): core.HttpResponsePromise<RevKeen.IntegrationsSyncStatsResponse>;
    private __syncstats;
    /**
     * Get sync statistics grouped by resource type for an integration.
     *
     * @param {RevKeen.IntegrationsSyncStatsByTypeRequest} request
     * @param {IntegrationsClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link RevKeen.UnauthorizedError}
     * @throws {@link RevKeen.InternalServerError}
     *
     * @example
     *     await client.integrations.syncstatsbytype({
     *         provider: "practicehub",
     *         integrationId: "integrationId"
     *     })
     */
    syncstatsbytype(request: RevKeen.IntegrationsSyncStatsByTypeRequest, requestOptions?: IntegrationsClient.RequestOptions): core.HttpResponsePromise<RevKeen.IntegrationsSyncStatsByTypeResponse>;
    private __syncstatsbytype;
    /**
     * Request retry for a failed sync log item.
     *
     * @param {RevKeen.IntegrationsRetryLogRequest} request
     * @param {IntegrationsClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link RevKeen.BadRequestError}
     * @throws {@link RevKeen.NotFoundError}
     *
     * @example
     *     await client.integrations.retrylog({
     *         provider: "practicehub",
     *         logId: "logId"
     *     })
     */
    retrylog(request: RevKeen.IntegrationsRetryLogRequest, requestOptions?: IntegrationsClient.RequestOptions): core.HttpResponsePromise<RevKeen.IntegrationsRetryLogResponse>;
    private __retrylog;
    /**
     * Request batch retry for failed sync log items of an integration.
     *
     * @param {RevKeen.IntegrationsBatchRetryRequest} request
     * @param {IntegrationsClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link RevKeen.UnauthorizedError}
     * @throws {@link RevKeen.InternalServerError}
     *
     * @example
     *     await client.integrations.batchretry({
     *         provider: "practicehub",
     *         integrationId: "integrationId"
     *     })
     */
    batchretry(request: RevKeen.IntegrationsBatchRetryRequest, requestOptions?: IntegrationsClient.RequestOptions): core.HttpResponsePromise<RevKeen.IntegrationsBatchRetryResponse>;
    private __batchretry;
    /**
     * Fetch packages from the external provider using stored credentials.
     *
     * @param {RevKeen.IntegrationsGetPackagesRequest} request
     * @param {IntegrationsClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link RevKeen.NotFoundError}
     *
     * @example
     *     await client.integrations.getpackages({
     *         provider: "practicehub"
     *     })
     */
    getpackages(request: RevKeen.IntegrationsGetPackagesRequest, requestOptions?: IntegrationsClient.RequestOptions): core.HttpResponsePromise<RevKeen.IntegrationsGetPackagesResponse>;
    private __getpackages;
    /**
     * List product mappings between external packages and RevKeen products.
     *
     * @param {RevKeen.IntegrationsGetProductMappingsRequest} request
     * @param {IntegrationsClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link RevKeen.NotFoundError}
     *
     * @example
     *     await client.integrations.getproductmappings({
     *         provider: "practicehub"
     *     })
     */
    getproductmappings(request: RevKeen.IntegrationsGetProductMappingsRequest, requestOptions?: IntegrationsClient.RequestOptions): core.HttpResponsePromise<RevKeen.IntegrationsGetProductMappingsResponse>;
    private __getproductmappings;
    /**
     * Save product mappings between external packages and RevKeen products. Replaces all existing mappings in a single transaction.
     *
     * @param {RevKeen.IntegrationsPutProductMappingsRequest} request
     * @param {IntegrationsClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link RevKeen.BadRequestError}
     * @throws {@link RevKeen.NotFoundError}
     *
     * @example
     *     await client.integrations.putproductmappings({
     *         provider: "practicehub",
     *         mappings: [{
     *                 externalId: "externalId",
     *                 internalId: "internalId"
     *             }]
     *     })
     */
    putproductmappings(request: RevKeen.IntegrationsPutProductMappingsRequest, requestOptions?: IntegrationsClient.RequestOptions): core.HttpResponsePromise<RevKeen.IntegrationsPutProductMappingsResponse>;
    private __putproductmappings;
    /**
     * Delete a single product mapping by external ID.
     *
     * @param {RevKeen.IntegrationsDeleteProductMappingRequest} request
     * @param {IntegrationsClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link RevKeen.NotFoundError}
     *
     * @example
     *     await client.integrations.deleteproductmapping({
     *         provider: "practicehub",
     *         externalId: "externalId"
     *     })
     */
    deleteproductmapping(request: RevKeen.IntegrationsDeleteProductMappingRequest, requestOptions?: IntegrationsClient.RequestOptions): core.HttpResponsePromise<RevKeen.IntegrationsDeleteProductMappingResponse>;
    private __deleteproductmapping;
}
//# sourceMappingURL=Client.d.ts.map