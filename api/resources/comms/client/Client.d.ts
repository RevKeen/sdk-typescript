import type { BaseClientOptions, BaseRequestOptions } from "../../../../BaseClient.js";
import { type NormalizedClientOptionsWithAuth } from "../../../../BaseClient.js";
import * as core from "../../../../core/index.js";
import * as RevKeen from "../../../index.js";
export declare namespace CommsClient {
    type Options = BaseClientOptions;
    interface RequestOptions extends BaseRequestOptions {
    }
}
export declare class CommsClient {
    protected readonly _options: NormalizedClientOptionsWithAuth<CommsClient.Options>;
    constructor(options: CommsClient.Options);
    /**
     * Send a direct message to a customer via email, SMS, or WhatsApp
     *
     * @param {RevKeen.CommsMessagesSendRequest} request
     * @param {CommsClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link RevKeen.BadRequestError}
     *
     * @example
     *     await client.comms.messagesSend({
     *         channel: "email",
     *         body: "body"
     *     })
     */
    messagesSend(request: RevKeen.CommsMessagesSendRequest, requestOptions?: CommsClient.RequestOptions): core.HttpResponsePromise<RevKeen.CommsMessagesSendResponse>;
    private __messagesSend;
    /**
     * List conversation threads for the authenticated merchant
     *
     * @param {RevKeen.CommsThreadsListRequest} request
     * @param {CommsClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @example
     *     await client.comms.threadsList()
     */
    threadsList(request?: RevKeen.CommsThreadsListRequest, requestOptions?: CommsClient.RequestOptions): core.HttpResponsePromise<RevKeen.CommsThreadsListResponse>;
    private __threadsList;
    /**
     * List all messages in a conversation thread
     *
     * @param {RevKeen.CommsMessagesListRequest} request
     * @param {CommsClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link RevKeen.NotFoundError}
     *
     * @example
     *     await client.comms.messagesList({
     *         threadId: "threadId"
     *     })
     */
    messagesList(request: RevKeen.CommsMessagesListRequest, requestOptions?: CommsClient.RequestOptions): core.HttpResponsePromise<RevKeen.CommsMessagesListResponse>;
    private __messagesList;
}
//# sourceMappingURL=Client.d.ts.map