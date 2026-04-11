import type { BaseClientOptions, BaseRequestOptions } from "../../../../BaseClient.js";
import { type NormalizedClientOptionsWithAuth } from "../../../../BaseClient.js";
import * as core from "../../../../core/index.js";
import * as RevKeen from "../../../index.js";
export declare namespace FinanceClient {
    type Options = BaseClientOptions;
    interface RequestOptions extends BaseRequestOptions {
    }
}
/**
 * Financial summaries and income reports. Get a high-level overview of your business finances including revenue, expenses, and net income.
 *
 * **Required Scopes:**
 * - `finance:read` - Access finance endpoints
 */
export declare class FinanceClient {
    protected readonly _options: NormalizedClientOptionsWithAuth<FinanceClient.Options>;
    constructor(options: FinanceClient.Options);
    /**
     * Get income report for the authenticated merchant. Requires 'finance:read' scope.
     *
     * @param {RevKeen.FinanceGetIncomeRequest} request
     * @param {FinanceClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link RevKeen.UnauthorizedError}
     * @throws {@link RevKeen.NotFoundError}
     * @throws {@link RevKeen.InternalServerError}
     *
     * @example
     *     await client.finance.getincome({
     *         start_date: "2024-01-01",
     *         end_date: "2024-12-31"
     *     })
     */
    getincome(request: RevKeen.FinanceGetIncomeRequest, requestOptions?: FinanceClient.RequestOptions): core.HttpResponsePromise<RevKeen.FinanceGetIncomeResponse>;
    private __getincome;
    /**
     * Get finance summary for the authenticated merchant. Requires 'finance:read' scope.
     *
     * @param {FinanceClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link RevKeen.UnauthorizedError}
     * @throws {@link RevKeen.NotFoundError}
     * @throws {@link RevKeen.InternalServerError}
     *
     * @example
     *     await client.finance.getsummary()
     */
    getsummary(requestOptions?: FinanceClient.RequestOptions): core.HttpResponsePromise<RevKeen.FinanceGetSummaryResponse>;
    private __getsummary;
}
//# sourceMappingURL=Client.d.ts.map