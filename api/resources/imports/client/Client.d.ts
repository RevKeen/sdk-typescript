import type { BaseClientOptions, BaseRequestOptions } from "../../../../BaseClient.js";
import { type NormalizedClientOptionsWithAuth } from "../../../../BaseClient.js";
import * as core from "../../../../core/index.js";
import * as RevKeen from "../../../index.js";
export declare namespace ImportsClient {
    type Options = BaseClientOptions;
    interface RequestOptions extends BaseRequestOptions {
    }
}
/**
 * Bulk data import jobs. Upload a CSV file to create customers, products, or invoices in bulk. Imports are processed asynchronously — poll `GET /v2/imports/:id` for progress and error details.
 *
 * **Required Scopes:**
 * - `imports:read` - Check import status
 * - `imports:write` - Create import jobs
 */
export declare class ImportsClient {
    protected readonly _options: NormalizedClientOptionsWithAuth<ImportsClient.Options>;
    constructor(options: ImportsClient.Options);
    /**
     * Create a bulk data import job. The import is processed asynchronously. Poll `GET /v2/imports/:id` for progress and errors.
     *
     * @param {RevKeen.CreateImportRequest} request
     * @param {ImportsClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link RevKeen.BadRequestError}
     * @throws {@link RevKeen.UnauthorizedError}
     *
     * @example
     *     await client.imports.create({
     *         resource_type: "customers"
     *     })
     */
    create(request: RevKeen.CreateImportRequest, requestOptions?: ImportsClient.RequestOptions): core.HttpResponsePromise<RevKeen.ImportCreateResponse>;
    private __create;
    /**
     * Check the status and progress of an import job. Includes detailed error information for failed rows.
     *
     * @param {RevKeen.ImportsRetrieveRequest} request
     * @param {ImportsClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link RevKeen.UnauthorizedError}
     * @throws {@link RevKeen.NotFoundError}
     *
     * @example
     *     await client.imports.retrieve({
     *         id: "id"
     *     })
     */
    retrieve(request: RevKeen.ImportsRetrieveRequest, requestOptions?: ImportsClient.RequestOptions): core.HttpResponsePromise<RevKeen.ImportRetrieveResponse>;
    private __retrieve;
}
//# sourceMappingURL=Client.d.ts.map