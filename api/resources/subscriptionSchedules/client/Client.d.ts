import type { BaseClientOptions, BaseRequestOptions } from "../../../../BaseClient.js";
import { type NormalizedClientOptionsWithAuth } from "../../../../BaseClient.js";
import * as core from "../../../../core/index.js";
import * as RevKeen from "../../../index.js";
export declare namespace SubscriptionSchedulesClient {
    type Options = BaseClientOptions;
    interface RequestOptions extends BaseRequestOptions {
    }
}
/**
 * Schedule future changes to subscriptions. Define phases with different pricing, quantities, or plans that take effect at specified dates.
 *
 * **Required Scopes:**
 * - `subscription_schedules:read` - List and retrieve schedules
 * - `subscription_schedules:write` - Create, update, release schedules
 */
export declare class SubscriptionSchedulesClient {
    protected readonly _options: NormalizedClientOptionsWithAuth<SubscriptionSchedulesClient.Options>;
    constructor(options: SubscriptionSchedulesClient.Options);
    /**
     * Returns a list of subscription schedules with optional filters.
     *
     * @param {RevKeen.SubscriptionSchedulesListRequest} request
     * @param {SubscriptionSchedulesClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link RevKeen.UnauthorizedError}
     *
     * @example
     *     await client.subscriptionSchedules.list()
     */
    list(request?: RevKeen.SubscriptionSchedulesListRequest, requestOptions?: SubscriptionSchedulesClient.RequestOptions): core.HttpResponsePromise<RevKeen.SubscriptionScheduleListResponse>;
    private __list;
    /**
     * Creates a subscription schedule to manage future subscription changes. Schedules define phases with different pricing/plans that transition automatically.
     *
     * @param {RevKeen.CreateSubscriptionScheduleRequest} request
     * @param {SubscriptionSchedulesClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link RevKeen.BadRequestError}
     * @throws {@link RevKeen.UnauthorizedError}
     *
     * @example
     *     await client.subscriptionSchedules.create({
     *         phases: [{
     *                 items: [{
     *                         price_id: "price_id"
     *                     }],
     *                 start_date: "2026-03-01T00:00:00Z"
     *             }]
     *     })
     */
    create(request: RevKeen.CreateSubscriptionScheduleRequest, requestOptions?: SubscriptionSchedulesClient.RequestOptions): core.HttpResponsePromise<RevKeen.SubscriptionSchedule>;
    private __create;
    /**
     * Retrieves a subscription schedule by its ID.
     *
     * @param {RevKeen.SubscriptionSchedulesRetrieveRequest} request
     * @param {SubscriptionSchedulesClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link RevKeen.UnauthorizedError}
     * @throws {@link RevKeen.NotFoundError}
     *
     * @example
     *     await client.subscriptionSchedules.retrieve({
     *         id: "id"
     *     })
     */
    retrieve(request: RevKeen.SubscriptionSchedulesRetrieveRequest, requestOptions?: SubscriptionSchedulesClient.RequestOptions): core.HttpResponsePromise<RevKeen.SubscriptionSchedule>;
    private __retrieve;
    /**
     * Updates a subscription schedule. Only schedules in 'not_started' or 'active' status can be updated.
     *
     * @param {RevKeen.UpdateSubscriptionScheduleRequest} request
     * @param {SubscriptionSchedulesClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link RevKeen.BadRequestError}
     * @throws {@link RevKeen.UnauthorizedError}
     * @throws {@link RevKeen.NotFoundError}
     *
     * @example
     *     await client.subscriptionSchedules.update({
     *         id: "id"
     *     })
     */
    update(request: RevKeen.UpdateSubscriptionScheduleRequest, requestOptions?: SubscriptionSchedulesClient.RequestOptions): core.HttpResponsePromise<RevKeen.SubscriptionSchedule>;
    private __update;
    /**
     * Cancels a subscription schedule. Only schedules in 'not_started' or 'active' status can be canceled.
     *
     * @param {RevKeen.CancelSubscriptionScheduleRequest} request
     * @param {SubscriptionSchedulesClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link RevKeen.BadRequestError}
     * @throws {@link RevKeen.UnauthorizedError}
     * @throws {@link RevKeen.NotFoundError}
     *
     * @example
     *     await client.subscriptionSchedules.cancel({
     *         id: "id"
     *     })
     */
    cancel(request: RevKeen.CancelSubscriptionScheduleRequest, requestOptions?: SubscriptionSchedulesClient.RequestOptions): core.HttpResponsePromise<RevKeen.SubscriptionSchedule>;
    private __cancel;
    /**
     * Releases a subscription schedule, detaching it from the subscription. The subscription becomes standalone and continues normally.
     *
     * @param {RevKeen.ReleaseSubscriptionScheduleRequest} request
     * @param {SubscriptionSchedulesClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link RevKeen.BadRequestError}
     * @throws {@link RevKeen.UnauthorizedError}
     * @throws {@link RevKeen.NotFoundError}
     *
     * @example
     *     await client.subscriptionSchedules.release({
     *         id: "id"
     *     })
     */
    release(request: RevKeen.ReleaseSubscriptionScheduleRequest, requestOptions?: SubscriptionSchedulesClient.RequestOptions): core.HttpResponsePromise<RevKeen.SubscriptionSchedule>;
    private __release;
}
//# sourceMappingURL=Client.d.ts.map