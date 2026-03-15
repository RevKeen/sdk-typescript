import type { BaseClientOptions, BaseRequestOptions } from "../../../../../../BaseClient.js";
import { type NormalizedClientOptionsWithAuth } from "../../../../../../BaseClient.js";
import * as core from "../../../../../../core/index.js";
import * as RevKeen from "../../../../../index.js";
export declare namespace AnalyticsClient {
    type Options = BaseClientOptions;
    interface RequestOptions extends BaseRequestOptions {
    }
}
export declare class AnalyticsClient {
    protected readonly _options: NormalizedClientOptionsWithAuth<AnalyticsClient.Options>;
    constructor(options: AnalyticsClient.Options);
    /**
     * Get decline analytics for the merchant including approval rates, decline categories, and per-gateway breakdown.
     *
     * @param {RevKeen.paymentAttempts.GetDeclinesAnalyticsRequest} request
     * @param {AnalyticsClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link RevKeen.UnauthorizedError}
     *
     * @example
     *     await client.paymentAttempts.analytics.getDeclines({
     *         start_date: "2024-01-01T00:00:00Z",
     *         end_date: "2024-12-31T23:59:59Z"
     *     })
     */
    getDeclines(request?: RevKeen.paymentAttempts.GetDeclinesAnalyticsRequest, requestOptions?: AnalyticsClient.RequestOptions): core.HttpResponsePromise<RevKeen.DeclineAnalyticsResponse>;
    private __getDeclines;
}
//# sourceMappingURL=Client.d.ts.map