import type { BaseClientOptions, BaseRequestOptions } from "../../../../BaseClient.js";
import { type NormalizedClientOptionsWithAuth } from "../../../../BaseClient.js";
import * as core from "../../../../core/index.js";
import * as RevKeen from "../../../index.js";
export declare namespace ExportsClient {
    type Options = BaseClientOptions;
    interface RequestOptions extends BaseRequestOptions {
    }
}
/**
 * Bulk data export jobs. Generate CSV or XLSX files of customers, invoices, transactions, subscriptions, products, or payment methods. Exports are processed asynchronously — poll `GET /v2/exports/:id` for status and download URL.
 *
 * **Required Scopes:**
 * - `exports:read` - Check export status
 * - `exports:write` - Create export jobs
 */
export declare class ExportsClient {
    protected readonly _options: NormalizedClientOptionsWithAuth<ExportsClient.Options>;
    constructor(options: ExportsClient.Options);
    /**
     * Create an async data export. The export is processed in the background. Poll `GET /v2/exports/:id` for status and download URL.
     *
     * @param {RevKeen.CreateExportRequest} request
     * @param {ExportsClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link RevKeen.BadRequestError}
     * @throws {@link RevKeen.UnauthorizedError}
     *
     * @example
     *     await client.exports.create({
     *         resource_type: "customers"
     *     })
     */
    create(request: RevKeen.CreateExportRequest, requestOptions?: ExportsClient.RequestOptions): core.HttpResponsePromise<RevKeen.ExportCreateResponse>;
    private __create;
    /**
     * Check the status of an export job. When status is 'completed', the download_url will contain a presigned URL (valid for 1 hour).
     *
     * @param {RevKeen.ExportsRetrieveRequest} request
     * @param {ExportsClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link RevKeen.UnauthorizedError}
     * @throws {@link RevKeen.NotFoundError}
     *
     * @example
     *     await client.exports.retrieve({
     *         id: "id"
     *     })
     */
    retrieve(request: RevKeen.ExportsRetrieveRequest, requestOptions?: ExportsClient.RequestOptions): core.HttpResponsePromise<RevKeen.ExportRetrieveResponse>;
    private __retrieve;
}
//# sourceMappingURL=Client.d.ts.map