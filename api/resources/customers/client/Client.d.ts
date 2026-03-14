import type { BaseClientOptions, BaseRequestOptions } from "../../../../BaseClient.js";
import { type NormalizedClientOptionsWithAuth } from "../../../../BaseClient.js";
import * as core from "../../../../core/index.js";
import * as RevKeen from "../../../index.js";
export declare namespace CustomersClient {
    type Options = BaseClientOptions;
    interface RequestOptions extends BaseRequestOptions {
    }
}
/**
 * Create and manage customer records. Store payment methods and billing information.
 *
 * **Required Scopes:**
 * - `customers:read` - List and retrieve customers
 * - `customers:write` - Create, update, delete customers
 *
 * **MCP Tools:** `customers_list`, `customers_get`, `customers_create`, `customers_update`
 */
export declare class CustomersClient {
    protected readonly _options: NormalizedClientOptionsWithAuth<CustomersClient.Options>;
    constructor(options: CustomersClient.Options);
    /**
     * Retrieve all invoices for a specific customer
     *
     * @param {RevKeen.CustomersInvoicesListRequest} request
     * @param {CustomersClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link RevKeen.UnauthorizedError}
     * @throws {@link RevKeen.NotFoundError}
     *
     * @example
     *     await client.customers.invoicesList({
     *         customerId: "cus_abc123",
     *         limit: 20
     *     })
     */
    invoicesList(request: RevKeen.CustomersInvoicesListRequest, requestOptions?: CustomersClient.RequestOptions): core.HttpResponsePromise<RevKeen.CustomersInvoicesListResponse>;
    private __invoicesList;
    /**
     * Retrieve all subscriptions for a specific customer
     *
     * @param {RevKeen.CustomersSubscriptionsListRequest} request
     * @param {CustomersClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link RevKeen.UnauthorizedError}
     * @throws {@link RevKeen.NotFoundError}
     *
     * @example
     *     await client.customers.subscriptionsList({
     *         customerId: "cus_abc123",
     *         limit: 20
     *     })
     */
    subscriptionsList(request: RevKeen.CustomersSubscriptionsListRequest, requestOptions?: CustomersClient.RequestOptions): core.HttpResponsePromise<RevKeen.CustomersSubscriptionsListResponse>;
    private __subscriptionsList;
    /**
     * Retrieve all orders for a specific customer
     *
     * @param {RevKeen.CustomersOrdersListRequest} request
     * @param {CustomersClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link RevKeen.UnauthorizedError}
     * @throws {@link RevKeen.NotFoundError}
     *
     * @example
     *     await client.customers.ordersList({
     *         customerId: "cus_abc123",
     *         limit: 20
     *     })
     */
    ordersList(request: RevKeen.CustomersOrdersListRequest, requestOptions?: CustomersClient.RequestOptions): core.HttpResponsePromise<RevKeen.CustomersOrdersListResponse>;
    private __ordersList;
    /**
     * Retrieve all payments for a specific customer
     *
     * @param {RevKeen.CustomersPaymentsListRequest} request
     * @param {CustomersClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link RevKeen.UnauthorizedError}
     * @throws {@link RevKeen.NotFoundError}
     *
     * @example
     *     await client.customers.paymentsList({
     *         customerId: "cus_abc123",
     *         limit: 20
     *     })
     */
    paymentsList(request: RevKeen.CustomersPaymentsListRequest, requestOptions?: CustomersClient.RequestOptions): core.HttpResponsePromise<RevKeen.CustomersPaymentsListResponse>;
    private __paymentsList;
    /**
     * Create or update multiple customers by external system ID. Supports up to 100 customers per request with stale update protection.
     *
     * @param {RevKeen.CustomersExternalBatchRequest} request
     * @param {CustomersClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link RevKeen.BadRequestError}
     * @throws {@link RevKeen.UnauthorizedError}
     * @throws {@link RevKeen.ForbiddenError}
     *
     * @example
     *     await client.customers.externalbatch({
     *         source: "practicehub",
     *         customers: [{
     *                 external_id: "PAT-12345",
     *                 email: "john@example.com"
     *             }]
     *     })
     */
    externalbatch(request: RevKeen.CustomersExternalBatchRequest, requestOptions?: CustomersClient.RequestOptions): core.HttpResponsePromise<RevKeen.CustomersExternalBatchResponse>;
    private __externalbatch;
    /**
     * Retrieve a paginated list of customers for the merchant
     *
     * @param {RevKeen.CustomersListRequest} request
     * @param {CustomersClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link RevKeen.UnauthorizedError}
     *
     * @example
     *     await client.customers.list()
     */
    list(request?: RevKeen.CustomersListRequest, requestOptions?: CustomersClient.RequestOptions): core.HttpResponsePromise<RevKeen.CustomerListResponse>;
    private __list;
    /**
     * Create a new customer record in the merchant's account
     *
     * @param {RevKeen.CustomersCreateRequest} request
     * @param {CustomersClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link RevKeen.BadRequestError}
     * @throws {@link RevKeen.UnauthorizedError}
     *
     * @example
     *     await client.customers.create({
     *         email: "email"
     *     })
     */
    create(request: RevKeen.CustomersCreateRequest, requestOptions?: CustomersClient.RequestOptions): core.HttpResponsePromise<RevKeen.CustomerCreateResponse>;
    private __create;
    /**
     * Retrieve detailed information about a specific customer
     *
     * @param {RevKeen.CustomersRetrieveRequest} request
     * @param {CustomersClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link RevKeen.UnauthorizedError}
     * @throws {@link RevKeen.NotFoundError}
     *
     * @example
     *     await client.customers.retrieve({
     *         id: "id"
     *     })
     */
    retrieve(request: RevKeen.CustomersRetrieveRequest, requestOptions?: CustomersClient.RequestOptions): core.HttpResponsePromise<RevKeen.CustomerRetrieveResponse>;
    private __retrieve;
    /**
     * Update an existing customer's information
     *
     * @param {RevKeen.CustomersUpdateRequest} request
     * @param {CustomersClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link RevKeen.UnauthorizedError}
     * @throws {@link RevKeen.NotFoundError}
     *
     * @example
     *     await client.customers.update({
     *         id: "id"
     *     })
     */
    update(request: RevKeen.CustomersUpdateRequest, requestOptions?: CustomersClient.RequestOptions): core.HttpResponsePromise<RevKeen.CustomerUpdateResponse>;
    private __update;
    /**
     * Retrieve all payment methods for a customer
     *
     * @param {RevKeen.CustomersPaymentMethodsListRequest} request
     * @param {CustomersClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link RevKeen.UnauthorizedError}
     * @throws {@link RevKeen.NotFoundError}
     *
     * @example
     *     await client.customers.paymentmethodsList({
     *         id: "id"
     *     })
     */
    paymentmethodsList(request: RevKeen.CustomersPaymentMethodsListRequest, requestOptions?: CustomersClient.RequestOptions): core.HttpResponsePromise<RevKeen.CustomerPaymentMethodsListResponse>;
    private __paymentmethodsList;
    /**
     * Create a temporary portal session URL for a customer. The customer can use this URL to access their portal without requiring them to sign in with a magic link.
     *
     * @param {RevKeen.CustomersPortalSessionsCreateRequest} request
     * @param {CustomersClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link RevKeen.UnauthorizedError}
     * @throws {@link RevKeen.NotFoundError}
     *
     * @example
     *     await client.customers.portalsessionsCreate({
     *         id: "id"
     *     })
     */
    portalsessionsCreate(request: RevKeen.CustomersPortalSessionsCreateRequest, requestOptions?: CustomersClient.RequestOptions): core.HttpResponsePromise<RevKeen.CustomerPortalSessionCreateResponse>;
    private __portalsessionsCreate;
    /**
     * Create or update a customer identified by external source and ID. Used by integrations (PracticeHub, Wodify) to sync customers.
     *
     * @param {RevKeen.CustomersExternalUpsertByExternalIdRequest} request
     * @param {CustomersClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link RevKeen.BadRequestError}
     * @throws {@link RevKeen.UnauthorizedError}
     *
     * @example
     *     await client.customers.externalUpsertbyexternalid({
     *         source: "practicehub",
     *         externalId: "PAT-12345",
     *         email: "email"
     *     })
     */
    externalUpsertbyexternalid(request: RevKeen.CustomersExternalUpsertByExternalIdRequest, requestOptions?: CustomersClient.RequestOptions): core.HttpResponsePromise<RevKeen.CustomersExternalUpsertByExternalIdResponse>;
    private __externalUpsertbyexternalid;
}
//# sourceMappingURL=Client.d.ts.map