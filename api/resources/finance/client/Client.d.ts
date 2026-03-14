import type { BaseClientOptions, BaseRequestOptions } from "../../../../BaseClient.js";
import { type NormalizedClientOptionsWithAuth } from "../../../../BaseClient.js";
import * as core from "../../../../core/index.js";
import * as RevKeen from "../../../index.js";
export declare namespace FinanceClient {
    type Options = BaseClientOptions;
    interface RequestOptions extends BaseRequestOptions {
    }
}
export declare class FinanceClient {
    protected readonly _options: NormalizedClientOptionsWithAuth<FinanceClient.Options>;
    constructor(options: FinanceClient.Options);
    /**
     * Get income report for the authenticated merchant. Requires 'finance:read' scope.
     *
     * @param {RevKeen.GetFinanceIncomeRequest} request
     * @param {FinanceClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link RevKeen.UnauthorizedError}
     * @throws {@link RevKeen.NotFoundError}
     * @throws {@link RevKeen.InternalServerError}
     *
     * @example
     *     await client.finance.getIncomeReport({
     *         start_date: "2024-01-01",
     *         end_date: "2024-12-31"
     *     })
     */
    getIncomeReport(request: RevKeen.GetFinanceIncomeRequest, requestOptions?: FinanceClient.RequestOptions): core.HttpResponsePromise<RevKeen.GetFinanceIncomeResponse>;
    private __getIncomeReport;
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
     *     await client.finance.getFinanceSummary()
     */
    getFinanceSummary(requestOptions?: FinanceClient.RequestOptions): core.HttpResponsePromise<RevKeen.GetFinanceSummaryResponse>;
    private __getFinanceSummary;
}
//# sourceMappingURL=Client.d.ts.map