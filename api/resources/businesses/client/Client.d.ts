import type { BaseClientOptions, BaseRequestOptions } from "../../../../BaseClient.js";
import { type NormalizedClientOptionsWithAuth } from "../../../../BaseClient.js";
import * as core from "../../../../core/index.js";
import * as RevKeen from "../../../index.js";
export declare namespace BusinessesClient {
    type Options = BaseClientOptions;
    interface RequestOptions extends BaseRequestOptions {
    }
}
export declare class BusinessesClient {
    protected readonly _options: NormalizedClientOptionsWithAuth<BusinessesClient.Options>;
    constructor(options: BusinessesClient.Options);
    /**
     * List businesses, optionally filtered by customer_id.
     *
     * @param {RevKeen.GetBusinessesRequest} request
     * @param {BusinessesClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link RevKeen.BadRequestError}
     *
     * @example
     *     await client.businesses.listBusinesses()
     */
    listBusinesses(request?: RevKeen.GetBusinessesRequest, requestOptions?: BusinessesClient.RequestOptions): core.HttpResponsePromise<RevKeen.GetBusinessesResponse>;
    private __listBusinesses;
    /**
     * Create a new business. Requires 'businesses:write' scope.
     *
     * @param {RevKeen.PostBusinessesRequest} request
     * @param {BusinessesClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link RevKeen.BadRequestError}
     * @throws {@link RevKeen.UnauthorizedError}
     *
     * @example
     *     await client.businesses.createABusiness({
     *         name: "name"
     *     })
     */
    createABusiness(request: RevKeen.PostBusinessesRequest, requestOptions?: BusinessesClient.RequestOptions): core.HttpResponsePromise<RevKeen.PostBusinessesResponse>;
    private __createABusiness;
    /**
     * Get a business by its ID. Requires 'businesses:read' scope.
     *
     * @param {RevKeen.GetBusinessesIdRequest} request
     * @param {BusinessesClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link RevKeen.UnauthorizedError}
     * @throws {@link RevKeen.NotFoundError}
     *
     * @example
     *     await client.businesses.getBusinessById({
     *         id: "bus_123"
     *     })
     */
    getBusinessById(request: RevKeen.GetBusinessesIdRequest, requestOptions?: BusinessesClient.RequestOptions): core.HttpResponsePromise<RevKeen.GetBusinessesIdResponse>;
    private __getBusinessById;
}
//# sourceMappingURL=Client.d.ts.map