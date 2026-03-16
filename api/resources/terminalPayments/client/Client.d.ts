import type { BaseClientOptions, BaseRequestOptions } from "../../../../BaseClient.js";
import { type NormalizedClientOptionsWithAuth } from "../../../../BaseClient.js";
import * as core from "../../../../core/index.js";
import * as RevKeen from "../../../index.js";
export declare namespace TerminalPaymentsClient {
    type Options = BaseClientOptions;
    interface RequestOptions extends BaseRequestOptions {
    }
}
/**
 * Initiate and manage card-present payments via POS terminal devices. Send sale, refund, and void commands to PAX terminals through the RevKeen connector.
 *
 * **Required Scopes:**
 * - `terminal:read` - List and retrieve terminal payments
 * - `terminal:write` - Initiate, cancel, refund, void terminal payments
 *
 * **MCP Tools:** `terminal_payments_initiate`, `terminal_payments_list`, `terminal_payments_get`, `terminal_payments_cancel`, `terminal_payments_refund`, `terminal_payments_void`
 */
export declare class TerminalPaymentsClient {
    protected readonly _options: NormalizedClientOptionsWithAuth<TerminalPaymentsClient.Options>;
    constructor(options: TerminalPaymentsClient.Options);
    /**
     * List terminal payment attempts for the authenticated merchant. Supports filtering by invoice, status, type, and device. Uses cursor-based pagination.
     *
     * @param {RevKeen.ListTerminalPaymentsRequest} request
     * @param {TerminalPaymentsClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link RevKeen.UnauthorizedError}
     *
     * @example
     *     await client.terminalPayments.list()
     */
    list(request?: RevKeen.ListTerminalPaymentsRequest, requestOptions?: TerminalPaymentsClient.RequestOptions): core.HttpResponsePromise<RevKeen.TerminalPaymentListResponse>;
    private __list;
    /**
     * Send a card-present payment request to a specific terminal device. The payment is dispatched to the merchant's POS connector which forwards it to the PAX terminal.
     *
     * **Device Selection:** You must provide a `device_id`. Use [List Terminal Devices](#tag/Terminal-Devices/operation/terminal_devices_list) to discover available devices and their IDs. Even merchants with a single terminal must pass the `device_id` explicitly — there is no auto-routing fallback.
     *
     * **Invoice Association:** `invoice_id` is optional. Omit it for walk-in or ad-hoc payments where no pre-existing invoice exists.
     *
     * The response returns immediately with status `requested`. Subscribe to terminal webhooks (`billing.terminal_payment.succeeded`, `billing.terminal_payment.declined`, etc.) to receive the outcome asynchronously.
     *
     * @param {RevKeen.CreateTerminalPaymentRequest} request
     * @param {TerminalPaymentsClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link RevKeen.BadRequestError}
     * @throws {@link RevKeen.UnauthorizedError}
     * @throws {@link RevKeen.ForbiddenError}
     * @throws {@link RevKeen.ConflictError}
     * @throws {@link RevKeen.UnprocessableEntityError}
     *
     * @example
     *     await client.terminalPayments.create({
     *         device_id: "d1e2f3a4-b5c6-7890-abcd-ef1234567890",
     *         amount_minor: 5000,
     *         currency: "GBP"
     *     })
     */
    create(request: RevKeen.CreateTerminalPaymentRequest, requestOptions?: TerminalPaymentsClient.RequestOptions): core.HttpResponsePromise<RevKeen.TerminalPaymentResponse>;
    private __create;
    /**
     * Get a terminal payment attempt by ID.
     *
     * @param {RevKeen.RetrieveTerminalPaymentsRequest} request
     * @param {TerminalPaymentsClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link RevKeen.NotFoundError}
     *
     * @example
     *     await client.terminalPayments.retrieve({
     *         id: "id"
     *     })
     */
    retrieve(request: RevKeen.RetrieveTerminalPaymentsRequest, requestOptions?: TerminalPaymentsClient.RequestOptions): core.HttpResponsePromise<RevKeen.TerminalPaymentResponse>;
    private __retrieve;
    /**
     * Cancel an in-progress terminal payment. Only payments with status `requested` or `in_progress` can be cancelled.
     *
     * @param {RevKeen.CancelTerminalPaymentsRequest} request
     * @param {TerminalPaymentsClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link RevKeen.NotFoundError}
     * @throws {@link RevKeen.ConflictError}
     *
     * @example
     *     await client.terminalPayments.cancel({
     *         id: "id"
     *     })
     */
    cancel(request: RevKeen.CancelTerminalPaymentsRequest, requestOptions?: TerminalPaymentsClient.RequestOptions): core.HttpResponsePromise<RevKeen.TerminalPaymentResponse>;
    private __cancel;
    /**
     * Initiate a refund for a completed terminal payment. The refund is sent to the same terminal that processed the original sale.
     *
     * `amount_minor` is optional — omit for a full refund. For partial refunds, specify the amount in minor units.
     *
     * The refund command is dispatched asynchronously. Subscribe to `billing.terminal_refund.succeeded` webhooks for the outcome.
     *
     * @param {RevKeen.RefundTerminalPaymentRequest} request
     * @param {TerminalPaymentsClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link RevKeen.NotFoundError}
     * @throws {@link RevKeen.UnprocessableEntityError}
     *
     * @example
     *     await client.terminalPayments.refund({
     *         id: "id"
     *     })
     */
    refund(request: RevKeen.RefundTerminalPaymentRequest, requestOptions?: TerminalPaymentsClient.RequestOptions): core.HttpResponsePromise<RevKeen.TerminalPaymentResponse>;
    private __refund;
    /**
     * Void a completed terminal payment. Voids are always for the full amount — partial voids are not supported. The void is sent to the same terminal that processed the original sale.
     *
     * Voids are only possible for unsettled transactions. If the transaction has already settled, use a refund instead.
     *
     * The void command is dispatched asynchronously. Subscribe to `billing.terminal_void.succeeded` webhooks for the outcome.
     *
     * @param {RevKeen.VoidTerminalPaymentRequest} request
     * @param {TerminalPaymentsClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link RevKeen.NotFoundError}
     * @throws {@link RevKeen.UnprocessableEntityError}
     *
     * @example
     *     await client.terminalPayments.void({
     *         id: "id"
     *     })
     */
    void(request: RevKeen.VoidTerminalPaymentRequest, requestOptions?: TerminalPaymentsClient.RequestOptions): core.HttpResponsePromise<RevKeen.TerminalPaymentResponse>;
    private __void;
}
//# sourceMappingURL=Client.d.ts.map