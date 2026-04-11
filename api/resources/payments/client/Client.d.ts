import type { BaseClientOptions, BaseRequestOptions } from "../../../../BaseClient.js";
import { type NormalizedClientOptionsWithAuth } from "../../../../BaseClient.js";
import * as core from "../../../../core/index.js";
import * as RevKeen from "../../../index.js";
export declare namespace PaymentsClient {
    type Options = BaseClientOptions;
    interface RequestOptions extends BaseRequestOptions {
    }
}
/**
 * Payment objects represent completed or in-progress money movements. Use them to capture authorized funds, void pending authorizations, and retrieve transaction details across all payment channels (online, terminal, and recurring).
 *
 * **Required Scopes:**
 * - `payments:read` - List and retrieve payments
 * - `payments:write` - Capture, void payments
 *
 * **MCP Tools:** `payments_list`, `payments_get`, `payments_capture`, `payments_void`
 */
export declare class PaymentsClient {
    protected readonly _options: NormalizedClientOptionsWithAuth<PaymentsClient.Options>;
    constructor(options: PaymentsClient.Options);
    /**
     * List all payments for the authenticated merchant. Supports filtering and cursor-based pagination.
     *
     * @param {RevKeen.PaymentsListRequest} request
     * @param {PaymentsClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link RevKeen.UnauthorizedError}
     *
     * @example
     *     await client.payments.list()
     */
    list(request?: RevKeen.PaymentsListRequest, requestOptions?: PaymentsClient.RequestOptions): core.HttpResponsePromise<RevKeen.PaymentListResponse>;
    private __list;
    /**
     * Retrieves a payment by its ID.
     *
     * @param {RevKeen.PaymentsRetrieveRequest} request
     * @param {PaymentsClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link RevKeen.UnauthorizedError}
     * @throws {@link RevKeen.NotFoundError}
     *
     * @example
     *     await client.payments.retrieve({
     *         id: "id"
     *     })
     */
    retrieve(request: RevKeen.PaymentsRetrieveRequest, requestOptions?: PaymentsClient.RequestOptions): core.HttpResponsePromise<RevKeen.Payment>;
    private __retrieve;
}
//# sourceMappingURL=Client.d.ts.map