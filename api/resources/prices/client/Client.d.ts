import type { BaseClientOptions, BaseRequestOptions } from "../../../../BaseClient.js";
import { type NormalizedClientOptionsWithAuth } from "../../../../BaseClient.js";
import * as core from "../../../../core/index.js";
import * as RevKeen from "../../../index.js";
export declare namespace PricesClient {
    type Options = BaseClientOptions;
    interface RequestOptions extends BaseRequestOptions {
    }
}
/**
 * Prices define how much and how often to charge for a product. A single product can have multiple prices — different currencies, billing intervals, or pricing tiers. Supports fixed-amount, pay-what-you-want, tiered, and free pricing models.
 *
 * **Required Scopes:**
 * - `prices:read` - List and retrieve prices
 * - `prices:write` - Create, update, archive prices
 */
export declare class PricesClient {
    protected readonly _options: NormalizedClientOptionsWithAuth<PricesClient.Options>;
    constructor(options: PricesClient.Options);
    /**
     * List all prices for the authenticated merchant. Supports filtering and cursor-based pagination.
     *
     * @param {RevKeen.PricesListRequest} request
     * @param {PricesClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link RevKeen.UnauthorizedError}
     *
     * @example
     *     await client.prices.list()
     */
    list(request?: RevKeen.PricesListRequest, requestOptions?: PricesClient.RequestOptions): core.HttpResponsePromise<RevKeen.PriceListResponse>;
    private __list;
    /**
     * Creates a new price for a product. Supports fixed, pay-what-you-want, and free pricing models.
     *
     * @param {RevKeen.CreatePriceRequest} request
     * @param {PricesClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link RevKeen.BadRequestError}
     * @throws {@link RevKeen.UnauthorizedError}
     * @throws {@link RevKeen.NotFoundError}
     *
     * @example
     *     await client.prices.create({
     *         product_id: "product_id"
     *     })
     */
    create(request: RevKeen.CreatePriceRequest, requestOptions?: PricesClient.RequestOptions): core.HttpResponsePromise<RevKeen.Price>;
    private __create;
    /**
     * Retrieves a price by its ID.
     *
     * @param {RevKeen.PricesRetrieveRequest} request
     * @param {PricesClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link RevKeen.UnauthorizedError}
     * @throws {@link RevKeen.NotFoundError}
     *
     * @example
     *     await client.prices.retrieve({
     *         id: "id"
     *     })
     */
    retrieve(request: RevKeen.PricesRetrieveRequest, requestOptions?: PricesClient.RequestOptions): core.HttpResponsePromise<RevKeen.Price>;
    private __retrieve;
    /**
     * Archives a price by setting active to false. The price remains in the system but cannot be used for new purchases.
     *
     * @param {RevKeen.PricesArchiveRequest} request
     * @param {PricesClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link RevKeen.UnauthorizedError}
     * @throws {@link RevKeen.NotFoundError}
     *
     * @example
     *     await client.prices.archive({
     *         id: "id"
     *     })
     */
    archive(request: RevKeen.PricesArchiveRequest, requestOptions?: PricesClient.RequestOptions): core.HttpResponsePromise<RevKeen.Price>;
    private __archive;
    /**
     * Updates a price. Only certain fields can be updated (active, nickname, lookup_key, metadata). Core pricing fields are immutable.
     *
     * @param {RevKeen.UpdatePriceRequest} request
     * @param {PricesClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link RevKeen.BadRequestError}
     * @throws {@link RevKeen.UnauthorizedError}
     * @throws {@link RevKeen.NotFoundError}
     *
     * @example
     *     await client.prices.update({
     *         id: "id"
     *     })
     */
    update(request: RevKeen.UpdatePriceRequest, requestOptions?: PricesClient.RequestOptions): core.HttpResponsePromise<RevKeen.Price>;
    private __update;
}
//# sourceMappingURL=Client.d.ts.map