import type { BaseClientOptions, BaseRequestOptions } from "../../../../BaseClient.js";
import { type NormalizedClientOptionsWithAuth } from "../../../../BaseClient.js";
import * as core from "../../../../core/index.js";
import * as RevKeen from "../../../index.js";
export declare namespace ProductsClient {
    type Options = BaseClientOptions;
    interface RequestOptions extends BaseRequestOptions {
    }
}
/**
 * Products represent the goods or services you sell. Each product can have multiple prices for different currencies, billing intervals, or pricing models. Products are used across subscriptions, one-off charges, and checkout sessions.
 *
 * **Required Scopes:**
 * - `products:read` - List and retrieve products
 * - `products:write` - Create, update, archive products
 */
export declare class ProductsClient {
    protected readonly _options: NormalizedClientOptionsWithAuth<ProductsClient.Options>;
    constructor(options: ProductsClient.Options);
    /**
     * List products with pagination and optional search.
     *
     * @param {RevKeen.ProductsListRequest} request
     * @param {ProductsClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link RevKeen.BadRequestError}
     * @throws {@link RevKeen.UnauthorizedError}
     *
     * @example
     *     await client.products.list()
     */
    list(request?: RevKeen.ProductsListRequest, requestOptions?: ProductsClient.RequestOptions): core.HttpResponsePromise<RevKeen.ProductListResponse>;
    private __list;
    /**
     * Create a new product. Requires 'products:write' scope.
     *
     * @param {RevKeen.CreateProductRequest} request
     * @param {ProductsClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link RevKeen.BadRequestError}
     * @throws {@link RevKeen.UnauthorizedError}
     *
     * @example
     *     await client.products.create({
     *         product_id: "product_id",
     *         name: "name",
     *         kind: "subscription",
     *         pricing_model: "one_time",
     *         amount_minor: 1
     *     })
     */
    create(request: RevKeen.CreateProductRequest, requestOptions?: ProductsClient.RequestOptions): core.HttpResponsePromise<RevKeen.ProductCreateResponse>;
    private __create;
    /**
     * Get a product by its ID. Requires 'products:read' scope.
     *
     * @param {RevKeen.ProductsRetrieveRequest} request
     * @param {ProductsClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link RevKeen.UnauthorizedError}
     * @throws {@link RevKeen.NotFoundError}
     *
     * @example
     *     await client.products.retrieve({
     *         id: "prod_123"
     *     })
     */
    retrieve(request: RevKeen.ProductsRetrieveRequest, requestOptions?: ProductsClient.RequestOptions): core.HttpResponsePromise<RevKeen.ProductRetrieveResponse>;
    private __retrieve;
    /**
     * Update an existing product. Requires 'products:write' scope.
     *
     * @param {RevKeen.UpdateProductRequest} request
     * @param {ProductsClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link RevKeen.BadRequestError}
     * @throws {@link RevKeen.UnauthorizedError}
     * @throws {@link RevKeen.NotFoundError}
     *
     * @example
     *     await client.products.update({
     *         id: "prod_123"
     *     })
     */
    update(request: RevKeen.UpdateProductRequest, requestOptions?: ProductsClient.RequestOptions): core.HttpResponsePromise<RevKeen.ProductUpdateResponse>;
    private __update;
    /**
     * Create or update a product by external system ID. Uses stale update protection.
     *
     * @param {RevKeen.ProductsExternalUpsertRequest} request
     * @param {ProductsClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link RevKeen.UnauthorizedError}
     * @throws {@link RevKeen.ForbiddenError}
     * @throws {@link RevKeen.ConflictError}
     *
     * @example
     *     await client.products.externalupsert({
     *         source: "practicehub",
     *         externalId: "prod_12345",
     *         name: "Monthly Membership",
     *         amountCents: 9900
     *     })
     */
    externalupsert(request: RevKeen.ProductsExternalUpsertRequest, requestOptions?: ProductsClient.RequestOptions): core.HttpResponsePromise<RevKeen.ProductsExternalUpsertResponse>;
    private __externalupsert;
    /**
     * Create or update multiple products by external system ID. Supports up to 100 products per request with stale update protection.
     *
     * @param {RevKeen.ProductsExternalBatchRequest} request
     * @param {ProductsClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link RevKeen.BadRequestError}
     * @throws {@link RevKeen.UnauthorizedError}
     * @throws {@link RevKeen.ForbiddenError}
     *
     * @example
     *     await client.products.externalbatch({
     *         source: "practicehub",
     *         products: [{
     *                 external_id: "prod_12345",
     *                 name: "Monthly Membership",
     *                 amount_cents: 9900
     *             }]
     *     })
     */
    externalbatch(request: RevKeen.ProductsExternalBatchRequest, requestOptions?: ProductsClient.RequestOptions): core.HttpResponsePromise<RevKeen.ProductsExternalBatchResponse>;
    private __externalbatch;
}
//# sourceMappingURL=Client.d.ts.map