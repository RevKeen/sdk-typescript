import type { BaseClientOptions, BaseRequestOptions } from "../../../../BaseClient.js";
import { type NormalizedClientOptionsWithAuth } from "../../../../BaseClient.js";
import * as core from "../../../../core/index.js";
import * as RevKeen from "../../../index.js";
export declare namespace TaxRatesClient {
    type Options = BaseClientOptions;
    interface RequestOptions extends BaseRequestOptions {
    }
}
export declare class TaxRatesClient {
    protected readonly _options: NormalizedClientOptionsWithAuth<TaxRatesClient.Options>;
    constructor(options: TaxRatesClient.Options);
    /**
     * List all tax rates for the authenticated merchant. Supports filtering and cursor-based pagination.
     *
     * @param {RevKeen.GetTaxRatesRequest} request
     * @param {TaxRatesClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link RevKeen.UnauthorizedError}
     *
     * @example
     *     await client.taxRates.listTaxRates()
     */
    listTaxRates(request?: RevKeen.GetTaxRatesRequest, requestOptions?: TaxRatesClient.RequestOptions): core.HttpResponsePromise<RevKeen.TaxRateListResponse>;
    private __listTaxRates;
    /**
     * Creates a new tax rate. Tax rates are optional overrides - Quaderno remains the primary tax calculator.
     *
     * @param {RevKeen.CreateTaxRateRequest} request
     * @param {TaxRatesClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link RevKeen.BadRequestError}
     * @throws {@link RevKeen.UnauthorizedError}
     *
     * @example
     *     await client.taxRates.createATaxRate({
     *         display_name: "display_name",
     *         percentage: 1.1
     *     })
     */
    createATaxRate(request: RevKeen.CreateTaxRateRequest, requestOptions?: TaxRatesClient.RequestOptions): core.HttpResponsePromise<RevKeen.TaxRate>;
    private __createATaxRate;
    /**
     * Retrieves a tax rate by its ID.
     *
     * @param {RevKeen.GetTaxRatesIdRequest} request
     * @param {TaxRatesClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link RevKeen.UnauthorizedError}
     * @throws {@link RevKeen.NotFoundError}
     *
     * @example
     *     await client.taxRates.retrieveATaxRate({
     *         id: "id"
     *     })
     */
    retrieveATaxRate(request: RevKeen.GetTaxRatesIdRequest, requestOptions?: TaxRatesClient.RequestOptions): core.HttpResponsePromise<RevKeen.TaxRate>;
    private __retrieveATaxRate;
    /**
     * Archives a tax rate by setting active to false. The tax rate remains in the system but cannot be used for new transactions.
     *
     * @param {RevKeen.DeleteTaxRatesIdRequest} request
     * @param {TaxRatesClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link RevKeen.UnauthorizedError}
     * @throws {@link RevKeen.NotFoundError}
     *
     * @example
     *     await client.taxRates.archiveATaxRate({
     *         id: "id"
     *     })
     */
    archiveATaxRate(request: RevKeen.DeleteTaxRatesIdRequest, requestOptions?: TaxRatesClient.RequestOptions): core.HttpResponsePromise<RevKeen.TaxRate>;
    private __archiveATaxRate;
    /**
     * Updates a tax rate. Note: percentage, inclusive, and tax_type cannot be changed after creation.
     *
     * @param {RevKeen.UpdateTaxRateRequest} request
     * @param {TaxRatesClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link RevKeen.BadRequestError}
     * @throws {@link RevKeen.UnauthorizedError}
     * @throws {@link RevKeen.NotFoundError}
     *
     * @example
     *     await client.taxRates.updateATaxRate({
     *         id: "id"
     *     })
     */
    updateATaxRate(request: RevKeen.UpdateTaxRateRequest, requestOptions?: TaxRatesClient.RequestOptions): core.HttpResponsePromise<RevKeen.TaxRate>;
    private __updateATaxRate;
}
//# sourceMappingURL=Client.d.ts.map