import type { BaseClientOptions, BaseRequestOptions } from "../../../../BaseClient.js";
import { type NormalizedClientOptionsWithAuth } from "../../../../BaseClient.js";
import * as core from "../../../../core/index.js";
import * as RevKeen from "../../../index.js";
export declare namespace RefundsClient {
    type Options = BaseClientOptions;
    interface RequestOptions extends BaseRequestOptions {
    }
}
/**
 * Refund objects represent money returned to a customer after a completed payment. You can issue full or partial refunds, and they automatically create a child transaction linked to the original payment for audit trail purposes.
 *
 * **Required Scopes:**
 * - `refunds:read` - List and retrieve refunds
 * - `refunds:write` - Create refunds
 *
 * **MCP Tools:** `refunds_create`
 */
export declare class RefundsClient {
    protected readonly _options: NormalizedClientOptionsWithAuth<RefundsClient.Options>;
    constructor(options: RefundsClient.Options);
    /**
     * Retrieve a paginated list of refunds with optional filters. Results are ordered by creation date (newest first).
     *
     * @param {RevKeen.RefundsListRequest} request
     * @param {RefundsClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link RevKeen.UnauthorizedError}
     * @throws {@link RevKeen.InternalServerError}
     *
     * @example
     *     await client.refunds.list({
     *         created_after: "2024-01-01T00:00:00Z",
     *         created_before: "2024-12-31T23:59:59Z",
     *         limit: 20
     *     })
     */
    list(request?: RevKeen.RefundsListRequest, requestOptions?: RefundsClient.RequestOptions): core.HttpResponsePromise<RevKeen.RefundListResponse>;
    private __list;
    /**
     * Initiate a refund for a payment. The refund will be processed through the original payment gateway.
     *
     * @param {RevKeen.CreateRefundInput} request
     * @param {RefundsClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link RevKeen.BadRequestError}
     * @throws {@link RevKeen.UnauthorizedError}
     * @throws {@link RevKeen.InternalServerError}
     *
     * @example
     *     await client.refunds.create({
     *         payment_id: "660e8400-e29b-41d4-a716-446655440000"
     *     })
     */
    create(request: RevKeen.CreateRefundInput, requestOptions?: RefundsClient.RequestOptions): core.HttpResponsePromise<RevKeen.RefundCreateResponse>;
    private __create;
    /**
     * Retrieve a single refund by its public ID (ref_xxx) or internal UUID.
     *
     * @param {RevKeen.RefundsRetrieveRequest} request
     * @param {RefundsClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link RevKeen.UnauthorizedError}
     * @throws {@link RevKeen.NotFoundError}
     * @throws {@link RevKeen.InternalServerError}
     *
     * @example
     *     await client.refunds.retrieve({
     *         id: "id"
     *     })
     */
    retrieve(request: RevKeen.RefundsRetrieveRequest, requestOptions?: RefundsClient.RequestOptions): core.HttpResponsePromise<RevKeen.RefundRetrieveResponse>;
    private __retrieve;
}
//# sourceMappingURL=Client.d.ts.map