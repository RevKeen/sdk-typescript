import type { BaseClientOptions, BaseRequestOptions } from "../../../../BaseClient.js";
import { type NormalizedClientOptionsWithAuth } from "../../../../BaseClient.js";
import * as core from "../../../../core/index.js";
import * as RevKeen from "../../../index.js";
export declare namespace BillingClient {
    type Options = BaseClientOptions;
    interface RequestOptions extends BaseRequestOptions {
    }
}
/**
 * Billing schedule preview and configuration utilities.
 *
 * **Required Scopes:**
 * - `billing:read` - Preview billing schedules
 */
export declare class BillingClient {
    protected readonly _options: NormalizedClientOptionsWithAuth<BillingClient.Options>;
    constructor(options: BillingClient.Options);
    /**
     * Generate a preview of upcoming billing dates and amounts based on the provided schedule configuration.
     *
     * This endpoint uses the same billing calculation logic as the actual scheduler, ensuring that
     * the preview matches what will actually be billed (Key Invariant #4: Preview === Scheduler).
     *
     * Use this to show customers their expected billing schedule before they subscribe, or to
     * preview changes to an existing subscription's billing configuration.
     *
     * @param {RevKeen.BillingGeneratePreviewRequest} request
     * @param {BillingClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link RevKeen.BadRequestError}
     *
     * @example
     *     await client.billing.generatepreview({
     *         interval: "day"
     *     })
     */
    generatepreview(request: RevKeen.BillingGeneratePreviewRequest, requestOptions?: BillingClient.RequestOptions): core.HttpResponsePromise<RevKeen.BillingPreviewResponse>;
    private __generatepreview;
    /**
     * Get the list of supported billing intervals and their display labels.
     *
     * @param {BillingClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @example
     *     await client.billing.getintervals()
     */
    getintervals(requestOptions?: BillingClient.RequestOptions): core.HttpResponsePromise<RevKeen.BillingIntervalsResponse>;
    private __getintervals;
    /**
     * Get the list of supported billing anchor rules with explanations.
     *
     * @param {BillingClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @example
     *     await client.billing.getanchorrules()
     */
    getanchorrules(requestOptions?: BillingClient.RequestOptions): core.HttpResponsePromise<RevKeen.BillingAnchorRulesResponse>;
    private __getanchorrules;
}
//# sourceMappingURL=Client.d.ts.map