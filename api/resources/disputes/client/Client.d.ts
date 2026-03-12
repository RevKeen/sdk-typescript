import type { BaseClientOptions, BaseRequestOptions } from "../../../../BaseClient.js";
import { type NormalizedClientOptionsWithAuth } from "../../../../BaseClient.js";
import * as core from "../../../../core/index.js";
import * as RevKeen from "../../../index.js";
export declare namespace DisputesClient {
    type Options = BaseClientOptions;
    interface RequestOptions extends BaseRequestOptions {
    }
}
/**
 * Handle chargebacks and disputes. Submit evidence to contest disputes.
 *
 * **Required Scopes:**
 * - `disputes:read` - List and retrieve disputes
 * - `disputes:write` - Submit evidence, accept disputes
 */
export declare class DisputesClient {
    protected readonly _options: NormalizedClientOptionsWithAuth<DisputesClient.Options>;
    constructor(options: DisputesClient.Options);
    /**
     * Retrieve a paginated list of disputes/chargebacks with optional filters. Results are ordered by disputed date (newest first).
     *
     * @param {RevKeen.DisputesListRequest} request
     * @param {DisputesClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link RevKeen.UnauthorizedError}
     * @throws {@link RevKeen.InternalServerError}
     *
     * @example
     *     await client.disputes.list({
     *         disputed_after: "2024-01-01T00:00:00Z",
     *         disputed_before: "2024-12-31T23:59:59Z",
     *         limit: 20
     *     })
     */
    list(request?: RevKeen.DisputesListRequest, requestOptions?: DisputesClient.RequestOptions): core.HttpResponsePromise<RevKeen.DisputesListResponse>;
    private __list;
    /**
     * Retrieve disputes that need evidence submission, ordered by due date (most urgent first). Use this to prioritize dispute responses.
     *
     * @param {RevKeen.DisputesGetOpenRequest} request
     * @param {DisputesClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link RevKeen.UnauthorizedError}
     * @throws {@link RevKeen.InternalServerError}
     *
     * @example
     *     await client.disputes.getopen({
     *         limit: 20
     *     })
     */
    getopen(request?: RevKeen.DisputesGetOpenRequest, requestOptions?: DisputesClient.RequestOptions): core.HttpResponsePromise<RevKeen.DisputesGetOpenResponse>;
    private __getopen;
    /**
     * Retrieve a single dispute by its public ID (dsp_xxx) or internal UUID.
     *
     * @param {RevKeen.DisputesRetrieveRequest} request
     * @param {DisputesClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link RevKeen.UnauthorizedError}
     * @throws {@link RevKeen.NotFoundError}
     * @throws {@link RevKeen.InternalServerError}
     *
     * @example
     *     await client.disputes.retrieve({
     *         id: "id"
     *     })
     */
    retrieve(request: RevKeen.DisputesRetrieveRequest, requestOptions?: DisputesClient.RequestOptions): core.HttpResponsePromise<RevKeen.DisputesRetrieveResponse>;
    private __retrieve;
}
//# sourceMappingURL=Client.d.ts.map