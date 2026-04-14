import type { BaseClientOptions, BaseRequestOptions } from "../../../../BaseClient.js";
import { type NormalizedClientOptionsWithAuth } from "../../../../BaseClient.js";
import * as core from "../../../../core/index.js";
import * as RevKeen from "../../../index.js";
export declare namespace SubscriptionsClient {
    type Options = BaseClientOptions;
    interface RequestOptions extends BaseRequestOptions {
    }
}
/**
 * Subscriptions manage recurring billing cycles for your customers. Create subscriptions to automatically charge customers on a schedule, with support for trials, prorations, plan changes, and dunning for failed payments.
 *
 * **Required Scopes:**
 * - `subscriptions:read` - List and retrieve subscriptions
 * - `subscriptions:write` - Create, update, cancel subscriptions
 *
 * **MCP Tools:** `subscriptions_get`
 */
export declare class SubscriptionsClient {
    protected readonly _options: NormalizedClientOptionsWithAuth<SubscriptionsClient.Options>;
    constructor(options: SubscriptionsClient.Options);
    /**
     * Retrieve a paginated list of subscriptions with optional filters
     *
     * @param {RevKeen.SubscriptionsListRequest} request
     * @param {SubscriptionsClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link RevKeen.UnauthorizedError}
     *
     * @example
     *     await client.subscriptions.list()
     */
    list(request?: RevKeen.SubscriptionsListRequest, requestOptions?: SubscriptionsClient.RequestOptions): core.HttpResponsePromise<RevKeen.SubscriptionListResponse>;
    private __list;
    /**
     * Create a new subscription for a customer
     *
     * @param {RevKeen.SubscriptionsCreateRequest} request
     * @param {SubscriptionsClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link RevKeen.BadRequestError}
     * @throws {@link RevKeen.UnauthorizedError}
     *
     * @example
     *     await client.subscriptions.create({
     *         customerId: "customerId"
     *     })
     */
    create(request: RevKeen.SubscriptionsCreateRequest, requestOptions?: SubscriptionsClient.RequestOptions): core.HttpResponsePromise<RevKeen.SubscriptionCreateResponse>;
    private __create;
    /**
     * Retrieve detailed information about a specific subscription
     *
     * @param {RevKeen.SubscriptionsRetrieveRequest} request
     * @param {SubscriptionsClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link RevKeen.UnauthorizedError}
     * @throws {@link RevKeen.NotFoundError}
     *
     * @example
     *     await client.subscriptions.retrieve({
     *         id: "id"
     *     })
     */
    retrieve(request: RevKeen.SubscriptionsRetrieveRequest, requestOptions?: SubscriptionsClient.RequestOptions): core.HttpResponsePromise<RevKeen.SubscriptionRetrieveResponse>;
    private __retrieve;
    /**
     * Cancel an active subscription immediately or at period end
     *
     * @param {RevKeen.SubscriptionsCancelRequest} request
     * @param {SubscriptionsClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link RevKeen.UnauthorizedError}
     * @throws {@link RevKeen.NotFoundError}
     *
     * @example
     *     await client.subscriptions.cancel({
     *         id: "id"
     *     })
     */
    cancel(request: RevKeen.SubscriptionsCancelRequest, requestOptions?: SubscriptionsClient.RequestOptions): core.HttpResponsePromise<RevKeen.SubscriptionCancelResponse>;
    private __cancel;
    /**
     * Update an existing subscription's properties
     *
     * @param {RevKeen.SubscriptionsUpdateRequest} request
     * @param {SubscriptionsClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link RevKeen.UnauthorizedError}
     * @throws {@link RevKeen.NotFoundError}
     *
     * @example
     *     await client.subscriptions.update({
     *         id: "id"
     *     })
     */
    update(request: RevKeen.SubscriptionsUpdateRequest, requestOptions?: SubscriptionsClient.RequestOptions): core.HttpResponsePromise<RevKeen.SubscriptionUpdateResponse>;
    private __update;
    /**
     * Change the plan for an existing subscription with optional proration
     *
     * @param {RevKeen.SubscriptionsChangePlanRequest} request
     * @param {SubscriptionsClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link RevKeen.UnauthorizedError}
     * @throws {@link RevKeen.NotFoundError}
     *
     * @example
     *     await client.subscriptions.changeplan({
     *         id: "id",
     *         newPlanId: "newPlanId"
     *     })
     */
    changeplan(request: RevKeen.SubscriptionsChangePlanRequest, requestOptions?: SubscriptionsClient.RequestOptions): core.HttpResponsePromise<RevKeen.SubscriptionChangePlanResponse>;
    private __changeplan;
    /**
     * Update the quantity for a subscription with optional proration
     *
     * @param {RevKeen.SubscriptionsChangeQuantityRequest} request
     * @param {SubscriptionsClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link RevKeen.UnauthorizedError}
     * @throws {@link RevKeen.NotFoundError}
     *
     * @example
     *     await client.subscriptions.changequantity({
     *         id: "id",
     *         newQuantity: 1
     *     })
     */
    changequantity(request: RevKeen.SubscriptionsChangeQuantityRequest, requestOptions?: SubscriptionsClient.RequestOptions): core.HttpResponsePromise<RevKeen.SubscriptionChangeQuantityResponse>;
    private __changequantity;
    /**
     * Preview the upcoming renewal dates and amounts for an existing subscription.
     *
     * This uses the same billing calculation logic as the actual scheduler to show exactly when
     * and how much the subscription will be billed (Key Invariant #4: Preview === Scheduler).
     *
     * @param {RevKeen.SubscriptionsPreviewRenewalRequest} request
     * @param {SubscriptionsClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link RevKeen.UnauthorizedError}
     * @throws {@link RevKeen.NotFoundError}
     *
     * @example
     *     await client.subscriptions.previewrenewal({
     *         id: "id"
     *     })
     */
    previewrenewal(request: RevKeen.SubscriptionsPreviewRenewalRequest, requestOptions?: SubscriptionsClient.RequestOptions): core.HttpResponsePromise<RevKeen.SubscriptionPreviewRenewalResponse>;
    private __previewrenewal;
    /**
     * Pause an active subscription. While paused:
     * - No new invoices are generated
     * - The subscription status changes to "paused"
     * - The customer retains access until the current period ends (depending on your business logic)
     *
     * **Behavior Options:**
     * - `keep_as_draft`: Invoices are created as drafts (default)
     * - `mark_uncollectible`: Invoices are marked uncollectible
     * - `void`: Invoices are voided
     *
     * Optionally set `resumes_at` to automatically resume at a future date.
     *
     * @param {RevKeen.PauseSubscriptionInput} request
     * @param {SubscriptionsClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link RevKeen.BadRequestError}
     * @throws {@link RevKeen.UnauthorizedError}
     * @throws {@link RevKeen.NotFoundError}
     *
     * @example
     *     await client.subscriptions.pause({
     *         id: "id"
     *     })
     */
    pause(request: RevKeen.PauseSubscriptionInput, requestOptions?: SubscriptionsClient.RequestOptions): core.HttpResponsePromise<RevKeen.SubscriptionPauseResponse>;
    private __pause;
    /**
     * Resume a paused subscription. The subscription status changes back to "active" and normal billing resumes.
     *
     * If the subscription was paused with draft invoices, you may need to manually finalize and send them.
     *
     * @param {RevKeen.SubscriptionsResumeRequest} request
     * @param {SubscriptionsClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link RevKeen.BadRequestError}
     * @throws {@link RevKeen.UnauthorizedError}
     * @throws {@link RevKeen.NotFoundError}
     *
     * @example
     *     await client.subscriptions.resume({
     *         id: "id"
     *     })
     */
    resume(request: RevKeen.SubscriptionsResumeRequest, requestOptions?: SubscriptionsClient.RequestOptions): core.HttpResponsePromise<RevKeen.SubscriptionResumeResponse>;
    private __resume;
    /**
     * Cancel a subscription either immediately or at the end of the current billing period.
     *
     * **Modes:**
     * - `immediately`: Status set to "canceled", access revoked now
     * - `period_end`: cancelAtPeriodEnd flag set, access continues until period end
     *
     * @param {RevKeen.CancelSubscriptionInput} request
     * @param {SubscriptionsClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link RevKeen.BadRequestError}
     * @throws {@link RevKeen.UnauthorizedError}
     * @throws {@link RevKeen.NotFoundError}
     *
     * @example
     *     await client.subscriptions.cancelsubscription({
     *         id: "id",
     *         mode: "immediately"
     *     })
     */
    cancelsubscription(request: RevKeen.CancelSubscriptionInput, requestOptions?: SubscriptionsClient.RequestOptions): core.HttpResponsePromise<RevKeen.SubscriptionCancelSubscriptionResponse>;
    private __cancelsubscription;
    /**
     * Reverse a scheduled cancellation. The subscription must be active with cancelAtPeriodEnd=true.
     * Clears the cancellation flag and the subscription continues as normal.
     *
     * @param {RevKeen.SubscriptionsReactivateRequest} request
     * @param {SubscriptionsClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link RevKeen.BadRequestError}
     * @throws {@link RevKeen.UnauthorizedError}
     * @throws {@link RevKeen.NotFoundError}
     *
     * @example
     *     await client.subscriptions.reactivate({
     *         id: "id"
     *     })
     */
    reactivate(request: RevKeen.SubscriptionsReactivateRequest, requestOptions?: SubscriptionsClient.RequestOptions): core.HttpResponsePromise<RevKeen.SubscriptionReactivateResponse>;
    private __reactivate;
    /**
     * Retrieve all line items for a specific subscription. Items represent individual products/prices within a multi-product subscription.
     *
     * @param {RevKeen.SubscriptionItemsListRequest} request
     * @param {SubscriptionsClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link RevKeen.UnauthorizedError}
     * @throws {@link RevKeen.NotFoundError}
     *
     * @example
     *     await client.subscriptions.subscriptionItemsList({
     *         subscriptionId: "subscriptionId"
     *     })
     */
    subscriptionItemsList(request: RevKeen.SubscriptionItemsListRequest, requestOptions?: SubscriptionsClient.RequestOptions): core.HttpResponsePromise<RevKeen.SubscriptionItemListResponse>;
    private __subscriptionItemsList;
    /**
     * Add a new line item to an existing subscription. This is used for multi-product subscriptions where items share the same billing interval.
     *
     * @param {RevKeen.CreateSubscriptionItemInput} request
     * @param {SubscriptionsClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link RevKeen.BadRequestError}
     * @throws {@link RevKeen.UnauthorizedError}
     * @throws {@link RevKeen.NotFoundError}
     *
     * @example
     *     await client.subscriptions.subscriptionItemsCreate({
     *         subscriptionId: "subscriptionId",
     *         currency: "USD",
     *         unit_amount_minor: 2999
     *     })
     */
    subscriptionItemsCreate(request: RevKeen.CreateSubscriptionItemInput, requestOptions?: SubscriptionsClient.RequestOptions): core.HttpResponsePromise<RevKeen.SubscriptionItemCreateResponse>;
    private __subscriptionItemsCreate;
    /**
     * Remove a line item from a subscription. Cannot remove the last item - cancel the subscription instead.
     *
     * @param {RevKeen.SubscriptionItemsDeleteRequest} request
     * @param {SubscriptionsClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link RevKeen.BadRequestError}
     * @throws {@link RevKeen.UnauthorizedError}
     * @throws {@link RevKeen.NotFoundError}
     *
     * @example
     *     await client.subscriptions.subscriptionItemsDelete({
     *         subscriptionId: "subscriptionId",
     *         itemId: "itemId"
     *     })
     */
    subscriptionItemsDelete(request: RevKeen.SubscriptionItemsDeleteRequest, requestOptions?: SubscriptionsClient.RequestOptions): core.HttpResponsePromise<RevKeen.SubscriptionItemDeleteResponse>;
    private __subscriptionItemsDelete;
    /**
     * Update a subscription item's quantity, description, price, or fulfillment type.
     *
     * @param {RevKeen.UpdateSubscriptionItemInput} request
     * @param {SubscriptionsClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link RevKeen.UnauthorizedError}
     * @throws {@link RevKeen.NotFoundError}
     *
     * @example
     *     await client.subscriptions.subscriptionItemsUpdate({
     *         subscriptionId: "subscriptionId",
     *         itemId: "itemId"
     *     })
     */
    subscriptionItemsUpdate(request: RevKeen.UpdateSubscriptionItemInput, requestOptions?: SubscriptionsClient.RequestOptions): core.HttpResponsePromise<RevKeen.SubscriptionItemUpdateResponse>;
    private __subscriptionItemsUpdate;
}
//# sourceMappingURL=Client.d.ts.map