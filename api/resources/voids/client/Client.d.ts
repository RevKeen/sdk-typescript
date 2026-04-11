import type { BaseClientOptions, BaseRequestOptions } from "../../../../BaseClient.js";
import { type NormalizedClientOptionsWithAuth } from "../../../../BaseClient.js";
import * as core from "../../../../core/index.js";
import * as RevKeen from "../../../index.js";
export declare namespace VoidsClient {
    type Options = BaseClientOptions;
    interface RequestOptions extends BaseRequestOptions {
    }
}
/**
 * Cancel unsettled transactions before gateway settlement. Voids are always for the full amount — no partial voids. If the transaction has already settled, use a refund instead.
 *
 * **Required Scopes:**
 * - `voids:read` - List and retrieve voids
 * - `voids:write` - Create voids
 */
export declare class VoidsClient {
    protected readonly _options: NormalizedClientOptionsWithAuth<VoidsClient.Options>;
    constructor(options: VoidsClient.Options);
    /**
     * Retrieve a paginated list of voids with optional filters. Results are ordered by creation date (newest first). Voids are full-amount cancellations of unsettled transactions.
     *
     * @param {RevKeen.VoidsListRequest} request
     * @param {VoidsClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link RevKeen.UnauthorizedError}
     * @throws {@link RevKeen.InternalServerError}
     *
     * @example
     *     await client.voids.list({
     *         created_after: "2024-01-01T00:00:00Z",
     *         created_before: "2024-12-31T23:59:59Z",
     *         limit: 20
     *     })
     */
    list(request?: RevKeen.VoidsListRequest, requestOptions?: VoidsClient.RequestOptions): core.HttpResponsePromise<RevKeen.VoidListResponse>;
    private __list;
    /**
     * Void a payment that has not yet settled. Voids are always for the full amount. If the payment has already settled, use a refund instead.
     *
     * @param {RevKeen.CreateVoidInput} request
     * @param {VoidsClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link RevKeen.BadRequestError}
     * @throws {@link RevKeen.UnauthorizedError}
     * @throws {@link RevKeen.InternalServerError}
     *
     * @example
     *     await client.voids.create({
     *         payment_id: "660e8400-e29b-41d4-a716-446655440000"
     *     })
     */
    create(request: RevKeen.CreateVoidInput, requestOptions?: VoidsClient.RequestOptions): core.HttpResponsePromise<RevKeen.VoidCreateResponse>;
    private __create;
    /**
     * Retrieve a single void by its public ID (void_xxx) or internal UUID.
     *
     * @param {RevKeen.VoidsRetrieveRequest} request
     * @param {VoidsClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link RevKeen.UnauthorizedError}
     * @throws {@link RevKeen.NotFoundError}
     * @throws {@link RevKeen.InternalServerError}
     *
     * @example
     *     await client.voids.retrieve({
     *         id: "id"
     *     })
     */
    retrieve(request: RevKeen.VoidsRetrieveRequest, requestOptions?: VoidsClient.RequestOptions): core.HttpResponsePromise<RevKeen.VoidRetrieveResponse>;
    private __retrieve;
}
//# sourceMappingURL=Client.d.ts.map