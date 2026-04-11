import type { BaseClientOptions, BaseRequestOptions } from "../../../../BaseClient.js";
import { type NormalizedClientOptionsWithAuth } from "../../../../BaseClient.js";
import * as core from "../../../../core/index.js";
import * as RevKeen from "../../../index.js";
export declare namespace PayoutsClient {
    type Options = BaseClientOptions;
    interface RequestOptions extends BaseRequestOptions {
    }
}
/**
 * Payout objects represent funds settled to your bank account from processed payments. Track settlement batches, reconcile amounts, and monitor payout timing across all payment gateways.
 *
 * **Required Scopes:**
 * - `payouts:read` - List and retrieve payouts
 */
export declare class PayoutsClient {
    protected readonly _options: NormalizedClientOptionsWithAuth<PayoutsClient.Options>;
    constructor(options: PayoutsClient.Options);
    /**
     * Retrieve a paginated list of payouts/settlements with optional filters. Results are ordered by creation date (newest first).
     *
     * @param {RevKeen.PayoutsListRequest} request
     * @param {PayoutsClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link RevKeen.UnauthorizedError}
     * @throws {@link RevKeen.InternalServerError}
     *
     * @example
     *     await client.payouts.list({
     *         created_after: "2024-01-01T00:00:00Z",
     *         created_before: "2024-12-31T23:59:59Z",
     *         limit: 20
     *     })
     */
    list(request?: RevKeen.PayoutsListRequest, requestOptions?: PayoutsClient.RequestOptions): core.HttpResponsePromise<RevKeen.PayoutsListResponse>;
    private __list;
    /**
     * Retrieve a single payout by its public ID (pyt_xxx) or internal UUID.
     *
     * @param {RevKeen.PayoutsRetrieveRequest} request
     * @param {PayoutsClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link RevKeen.UnauthorizedError}
     * @throws {@link RevKeen.NotFoundError}
     * @throws {@link RevKeen.InternalServerError}
     *
     * @example
     *     await client.payouts.retrieve({
     *         id: "id"
     *     })
     */
    retrieve(request: RevKeen.PayoutsRetrieveRequest, requestOptions?: PayoutsClient.RequestOptions): core.HttpResponsePromise<RevKeen.PayoutsRetrieveResponse>;
    private __retrieve;
    /**
     * Retrieve all payments that were included in a specific payout batch.
     *
     * @param {RevKeen.PayoutsPaymentsListRequest} request
     * @param {PayoutsClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link RevKeen.UnauthorizedError}
     * @throws {@link RevKeen.NotFoundError}
     * @throws {@link RevKeen.InternalServerError}
     *
     * @example
     *     await client.payouts.paymentsList({
     *         id: "id"
     *     })
     */
    paymentsList(request: RevKeen.PayoutsPaymentsListRequest, requestOptions?: PayoutsClient.RequestOptions): core.HttpResponsePromise<RevKeen.PayoutsPaymentsListResponse>;
    private __paymentsList;
}
//# sourceMappingURL=Client.d.ts.map