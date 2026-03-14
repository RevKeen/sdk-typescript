import type { BaseClientOptions, BaseRequestOptions } from "../../../../BaseClient.js";
import { type NormalizedClientOptionsWithAuth } from "../../../../BaseClient.js";
import * as core from "../../../../core/index.js";
import * as RevKeen from "../../../index.js";
export declare namespace MetersClient {
    type Options = BaseClientOptions;
    interface RequestOptions extends BaseRequestOptions {
    }
}
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
}
//# sourceMappingURL=Client.d.ts.map