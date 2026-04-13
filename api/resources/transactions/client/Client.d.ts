import type { BaseClientOptions, BaseRequestOptions } from "../../../../BaseClient.js";
import { type NormalizedClientOptionsWithAuth } from "../../../../BaseClient.js";
import * as core from "../../../../core/index.js";
import * as RevKeen from "../../../index.js";
export declare namespace TransactionsClient {
    type Options = BaseClientOptions;
    interface RequestOptions extends BaseRequestOptions {
    }
}
/**
 * Transactions represent all financial movements in the unified transaction model. This includes sales, refunds, voids, captures, disputes, and adjustments. Every transaction is linked to an invoice and child transactions reference their parent.
 *
 * **Required Scopes:**
 * - `payments:read` - List and retrieve transactions
 */
export declare class TransactionsClient {
    protected readonly _options: NormalizedClientOptionsWithAuth<TransactionsClient.Options>;
    constructor(options: TransactionsClient.Options);
    /**
     * List all transactions for the authenticated merchant. Transactions represent the unified financial truth — every sale, refund, void, capture, dispute, and adjustment.
     *
     * @param {RevKeen.TransactionsListRequest} request
     * @param {TransactionsClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link RevKeen.UnauthorizedError}
     *
     * @example
     *     await client.transactions.list()
     */
    list(request?: RevKeen.TransactionsListRequest, requestOptions?: TransactionsClient.RequestOptions): core.HttpResponsePromise<RevKeen.TransactionListResponse>;
    private __list;
    /**
     * Retrieve a single transaction by its ID.
     *
     * @param {RevKeen.TransactionsRetrieveRequest} request
     * @param {TransactionsClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link RevKeen.UnauthorizedError}
     * @throws {@link RevKeen.NotFoundError}
     *
     * @example
     *     await client.transactions.retrieve({
     *         id: "id"
     *     })
     */
    retrieve(request: RevKeen.TransactionsRetrieveRequest, requestOptions?: TransactionsClient.RequestOptions): core.HttpResponsePromise<RevKeen.TransactionRetrieveResponse>;
    private __retrieve;
}
//# sourceMappingURL=Client.d.ts.map