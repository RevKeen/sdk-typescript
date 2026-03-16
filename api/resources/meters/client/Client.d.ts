import type { BaseClientOptions, BaseRequestOptions } from "../../../../BaseClient.js";
import { type NormalizedClientOptionsWithAuth } from "../../../../BaseClient.js";
import * as core from "../../../../core/index.js";
import * as RevKeen from "../../../index.js";
export declare namespace MetersClient {
    type Options = BaseClientOptions;
    interface RequestOptions extends BaseRequestOptions {
    }
}
/**
 * Create and manage usage meters. Meters define how usage events are aggregated for billing. Attach prices to meters for automated usage-based invoicing.
 *
 * **Required Scopes:**
 * - `prices:read` - List and retrieve meters and prices
 * - `prices:write` - Create, update, archive meters and prices
 *
 * **MCP Tools:** `meters_list`, `meters_get`, `meters_create`, `meters_update`, `meters_create_price`, `meters_list_prices`, `meters_update_price`, `meters_deactivate_price`
 */
export declare class MetersClient {
    protected readonly _options: NormalizedClientOptionsWithAuth<MetersClient.Options>;
    constructor(options: MetersClient.Options);
    /**
     * List all usage meters with optional filtering and pagination.
     *
     * @param {RevKeen.ListMetersRequest} request
     * @param {MetersClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link RevKeen.UnauthorizedError}
     *
     * @example
     *     await client.meters.list({
     *         include_archived: "false",
     *         limit: "50",
     *         offset: "0"
     *     })
     */
    list(request?: RevKeen.ListMetersRequest, requestOptions?: MetersClient.RequestOptions): core.HttpResponsePromise<RevKeen.MeterListResponse>;
    private __list;
    /**
     * Create a new usage meter. Meters define how usage events are aggregated for billing.
     *
     * @param {RevKeen.CreateMeterRequest} request
     * @param {MetersClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link RevKeen.BadRequestError}
     * @throws {@link RevKeen.UnauthorizedError}
     *
     * @example
     *     await client.meters.create({
     *         name: "API Calls",
     *         event_name: "api_call"
     *     })
     */
    create(request: RevKeen.CreateMeterRequest, requestOptions?: MetersClient.RequestOptions): core.HttpResponsePromise<RevKeen.CreateMeterResponse>;
    private __create;
    /**
     * Retrieve a single meter by ID.
     *
     * @param {RevKeen.GetMetersRequest} request
     * @param {MetersClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link RevKeen.UnauthorizedError}
     * @throws {@link RevKeen.NotFoundError}
     *
     * @example
     *     await client.meters.get({
     *         id: "mtr_abc123"
     *     })
     */
    get(request: RevKeen.GetMetersRequest, requestOptions?: MetersClient.RequestOptions): core.HttpResponsePromise<RevKeen.MeterGetResponse>;
    private __get;
    /**
     * Update a meter's configuration. Note: `event_name` and `aggregation` are immutable after creation.
     *
     * @param {RevKeen.UpdateMeterRequest} request
     * @param {MetersClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link RevKeen.BadRequestError}
     * @throws {@link RevKeen.UnauthorizedError}
     *
     * @example
     *     await client.meters.update({
     *         id: "mtr_abc123"
     *     })
     */
    update(request: RevKeen.UpdateMeterRequest, requestOptions?: MetersClient.RequestOptions): core.HttpResponsePromise<RevKeen.UpdateMeterResponse>;
    private __update;
    /**
     * List all prices attached to a meter, including their tier configurations.
     *
     * @param {RevKeen.ListPricesMetersRequest} request
     * @param {MetersClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link RevKeen.UnauthorizedError}
     * @throws {@link RevKeen.NotFoundError}
     *
     * @example
     *     await client.meters.listPrices({
     *         meterId: "meterId"
     *     })
     */
    listPrices(request: RevKeen.ListPricesMetersRequest, requestOptions?: MetersClient.RequestOptions): core.HttpResponsePromise<RevKeen.MeterPriceListResponse>;
    private __listPrices;
    /**
     * Create a usage price for a meter with a specific pricing model (per_unit, graduated, volume, or package).
     *
     * @param {RevKeen.CreateMeterPriceRequest} request
     * @param {MetersClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link RevKeen.BadRequestError}
     * @throws {@link RevKeen.UnauthorizedError}
     * @throws {@link RevKeen.NotFoundError}
     *
     * @example
     *     await client.meters.createPrice({
     *         meterId: "meterId",
     *         pricing_model: "per_unit",
     *         currency: "GBP"
     *     })
     */
    createPrice(request: RevKeen.CreateMeterPriceRequest, requestOptions?: MetersClient.RequestOptions): core.HttpResponsePromise<RevKeen.MeterPriceResponse>;
    private __createPrice;
    /**
     * Update an existing usage price configuration. The pricing_model is immutable.
     *
     * @param {RevKeen.UpdateMeterPriceRequest} request
     * @param {MetersClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link RevKeen.BadRequestError}
     * @throws {@link RevKeen.UnauthorizedError}
     * @throws {@link RevKeen.NotFoundError}
     *
     * @example
     *     await client.meters.updatePrice({
     *         meterId: "meterId",
     *         priceId: "priceId"
     *     })
     */
    updatePrice(request: RevKeen.UpdateMeterPriceRequest, requestOptions?: MetersClient.RequestOptions): core.HttpResponsePromise<RevKeen.MeterPriceResponse>;
    private __updatePrice;
    /**
     * Deactivate a usage price. Deactivated prices cannot be used for new subscriptions but existing subscriptions continue until the end of their billing period.
     *
     * @param {RevKeen.DeactivatePriceMetersRequest} request
     * @param {MetersClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link RevKeen.UnauthorizedError}
     * @throws {@link RevKeen.NotFoundError}
     *
     * @example
     *     await client.meters.deactivatePrice({
     *         meterId: "meterId",
     *         priceId: "priceId"
     *     })
     */
    deactivatePrice(request: RevKeen.DeactivatePriceMetersRequest, requestOptions?: MetersClient.RequestOptions): core.HttpResponsePromise<RevKeen.MeterPriceResponse>;
    private __deactivatePrice;
}
//# sourceMappingURL=Client.d.ts.map