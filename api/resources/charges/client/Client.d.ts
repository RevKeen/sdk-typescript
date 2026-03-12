import type { BaseClientOptions, BaseRequestOptions } from "../../../../BaseClient.js";
import { type NormalizedClientOptionsWithAuth } from "../../../../BaseClient.js";
import * as core from "../../../../core/index.js";
import * as RevKeen from "../../../index.js";
export declare namespace ChargesClient {
    type Options = BaseClientOptions;
    interface RequestOptions extends BaseRequestOptions {
    }
}
/**
 * Create one-time charges for existing customers. Use for setup fees, overages, or ad-hoc payments.
 *
 * **Required Scopes:**
 * - `charges:read` - List and retrieve charges
 * - `charges:write` - Create charges
 */
export declare class ChargesClient {
    protected readonly _options: NormalizedClientOptionsWithAuth<ChargesClient.Options>;
    constructor(options: ChargesClient.Options);
    /**
     * Retrieve a paginated list of charges with optional filtering by customer, status, or date range.
     *
     * @param {RevKeen.ChargesListRequest} request
     * @param {ChargesClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link RevKeen.UnauthorizedError}
     *
     * @example
     *     await client.charges.list()
     */
    list(request?: RevKeen.ChargesListRequest, requestOptions?: ChargesClient.RequestOptions): core.HttpResponsePromise<RevKeen.ChargeListResponse>;
    private __list;
    /**
     * Create a one-time charge for an existing customer. This is for ad-hoc charges
     * like setup fees, overages, or one-time services. For recurring billing, use subscriptions instead.
     *
     * The charge will be processed immediately using the customer's default payment method,
     * unless a specific payment method ID is provided.
     *
     * @param {RevKeen.ChargesCreateRequest} request
     * @param {ChargesClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link RevKeen.BadRequestError}
     * @throws {@link RevKeen.UnauthorizedError}
     * @throws {@link RevKeen.NotFoundError}
     * @throws {@link RevKeen.ConflictError}
     *
     * @example
     *     await client.charges.create({
     *         customerId: "customerId",
     *         amountMinor: 1,
     *         description: "description"
     *     })
     */
    create(request: RevKeen.ChargesCreateRequest, requestOptions?: ChargesClient.RequestOptions): core.HttpResponsePromise<RevKeen.ChargeCreateResponse>;
    private __create;
    /**
     * Retrieve details of a specific charge.
     *
     * @param {RevKeen.ChargesRetrieveRequest} request
     * @param {ChargesClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link RevKeen.UnauthorizedError}
     * @throws {@link RevKeen.NotFoundError}
     *
     * @example
     *     await client.charges.retrieve({
     *         id: "id"
     *     })
     */
    retrieve(request: RevKeen.ChargesRetrieveRequest, requestOptions?: ChargesClient.RequestOptions): core.HttpResponsePromise<RevKeen.ChargeRetrieveResponse>;
    private __retrieve;
    /**
     * Capture a charge that was created with `capture: false`.
     * You can capture the full amount or a partial amount.
     *
     * @param {RevKeen.ChargesCaptureRequest} request
     * @param {ChargesClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link RevKeen.BadRequestError}
     * @throws {@link RevKeen.UnauthorizedError}
     * @throws {@link RevKeen.NotFoundError}
     *
     * @example
     *     await client.charges.capture({
     *         id: "id"
     *     })
     */
    capture(request: RevKeen.ChargesCaptureRequest, requestOptions?: ChargesClient.RequestOptions): core.HttpResponsePromise<RevKeen.ChargeCaptureResponse>;
    private __capture;
    /**
     * Refund a charge. You can refund the full amount or specify a partial refund amount.
     * Multiple partial refunds can be issued until the full amount is refunded.
     *
     * @param {RevKeen.ChargesRefundRequest} request
     * @param {ChargesClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link RevKeen.BadRequestError}
     * @throws {@link RevKeen.UnauthorizedError}
     * @throws {@link RevKeen.NotFoundError}
     *
     * @example
     *     await client.charges.refund({
     *         id: "id"
     *     })
     */
    refund(request: RevKeen.ChargesRefundRequest, requestOptions?: ChargesClient.RequestOptions): core.HttpResponsePromise<RevKeen.ChargeRefundResponse>;
    private __refund;
}
//# sourceMappingURL=Client.d.ts.map