import type { BaseClientOptions, BaseRequestOptions } from "../../../../BaseClient.js";
import { type NormalizedClientOptionsWithAuth } from "../../../../BaseClient.js";
import * as core from "../../../../core/index.js";
import * as RevKeen from "../../../index.js";
export declare namespace EventsClient {
    type Options = BaseClientOptions;
    interface RequestOptions extends BaseRequestOptions {
    }
}
/**
 * Event objects represent something that happened in your account — a payment succeeded, an invoice was created, a subscription was canceled. Events are the source of truth for webhook delivery. Use them to debug webhook issues, replay missed events, or build an audit trail.
 *
 * **Required Scopes:**
 * - `events:read` - List and retrieve events
 * - `events:write` - Resend webhook events
 */
export declare class EventsClient {
    protected readonly _options: NormalizedClientOptionsWithAuth<EventsClient.Options>;
    constructor(options: EventsClient.Options);
    /**
     * Returns a list of events with optional filters. Events are returned in reverse chronological order.
     *
     * @param {RevKeen.EventsListRequest} request
     * @param {EventsClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link RevKeen.UnauthorizedError}
     *
     * @example
     *     await client.events.list({
     *         type: "invoice.paid",
     *         types: "invoice.paid,payment.succeeded"
     *     })
     */
    list(request?: RevKeen.EventsListRequest, requestOptions?: EventsClient.RequestOptions): core.HttpResponsePromise<RevKeen.EventListResponse>;
    private __list;
    /**
     * Retrieves the details of an event by its ID.
     *
     * @param {RevKeen.EventsRetrieveRequest} request
     * @param {EventsClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link RevKeen.UnauthorizedError}
     * @throws {@link RevKeen.NotFoundError}
     *
     * @example
     *     await client.events.retrieve({
     *         id: "id"
     *     })
     */
    retrieve(request: RevKeen.EventsRetrieveRequest, requestOptions?: EventsClient.RequestOptions): core.HttpResponsePromise<RevKeen.Event>;
    private __retrieve;
    /**
     * Queues the event to be resent to all configured webhook endpoints.
     *
     * @param {RevKeen.EventsResendRequest} request
     * @param {EventsClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link RevKeen.UnauthorizedError}
     * @throws {@link RevKeen.NotFoundError}
     *
     * @example
     *     await client.events.resend({
     *         id: "id"
     *     })
     */
    resend(request: RevKeen.EventsResendRequest, requestOptions?: EventsClient.RequestOptions): core.HttpResponsePromise<RevKeen.ResendWebhookResponse>;
    private __resend;
    /**
     * Creates a simulated test event that triggers webhook delivery to configured endpoints. Useful for testing webhook integrations.
     *
     * @param {RevKeen.CreateTestEventRequest} request
     * @param {EventsClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link RevKeen.UnauthorizedError}
     *
     * @example
     *     await client.events.createTest({
     *         type: "checkout.session.completed"
     *     })
     */
    createTest(request: RevKeen.CreateTestEventRequest, requestOptions?: EventsClient.RequestOptions): core.HttpResponsePromise<RevKeen.TestEventResponse>;
    private __createTest;
}
//# sourceMappingURL=Client.d.ts.map