import type { BaseClientOptions, BaseRequestOptions } from "../../../../BaseClient.js";
import { type NormalizedClientOptionsWithAuth } from "../../../../BaseClient.js";
import * as core from "../../../../core/index.js";
import * as RevKeen from "../../../index.js";
export declare namespace InvoicesClient {
    type Options = BaseClientOptions;
    interface RequestOptions extends BaseRequestOptions {
    }
}
/**
 * Create, send, and manage invoices. Track payment status and send reminders.
 *
 * **Required Scopes:**
 * - `invoices:read` - List and retrieve invoices
 * - `invoices:write` - Create, update, send, finalize invoices
 *
 * **MCP Tools:** `invoices_list`, `invoices_get`, `invoices_create`, `invoices_send`, `invoices_finalize`
 */
export declare class InvoicesClient {
    protected readonly _options: NormalizedClientOptionsWithAuth<InvoicesClient.Options>;
    constructor(options: InvoicesClient.Options);
    /**
     * Create or update multiple invoices by external system ID. Supports up to 100 invoices per request with stale update protection and immutable field guardrails.
     *
     * @param {RevKeen.InvoicesExternalBatchRequest} request
     * @param {InvoicesClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link RevKeen.BadRequestError}
     * @throws {@link RevKeen.UnauthorizedError}
     * @throws {@link RevKeen.ForbiddenError}
     *
     * @example
     *     await client.invoices.externalbatch({
     *         source: "practicehub",
     *         invoices: [{
     *                 external_id: "INV-12345"
     *             }]
     *     })
     */
    externalbatch(request: RevKeen.InvoicesExternalBatchRequest, requestOptions?: InvoicesClient.RequestOptions): core.HttpResponsePromise<RevKeen.InvoicesExternalBatchResponse>;
    private __externalbatch;
    /**
     * List invoices with pagination and filtering.
     *
     * @param {RevKeen.InvoicesListRequest} request
     * @param {InvoicesClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @example
     *     await client.invoices.list()
     */
    list(request?: RevKeen.InvoicesListRequest, requestOptions?: InvoicesClient.RequestOptions): core.HttpResponsePromise<RevKeen.InvoiceListResponse>;
    private __list;
    /**
     * Create a new invoice.
     *
     * @param {RevKeen.InvoicesCreateRequest} request
     * @param {InvoicesClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @example
     *     await client.invoices.create({
     *         customer_uuid: "customer_uuid",
     *         total_minor: 1
     *     })
     */
    create(request: RevKeen.InvoicesCreateRequest, requestOptions?: InvoicesClient.RequestOptions): core.HttpResponsePromise<RevKeen.InvoiceResponse>;
    private __create;
    /**
     * Get a single invoice by ID.
     *
     * @param {RevKeen.InvoicesRetrieveRequest} request
     * @param {InvoicesClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @example
     *     await client.invoices.retrieve({
     *         id: "id"
     *     })
     */
    retrieve(request: RevKeen.InvoicesRetrieveRequest, requestOptions?: InvoicesClient.RequestOptions): core.HttpResponsePromise<RevKeen.InvoiceResponse>;
    private __retrieve;
    /**
     * Delete an invoice.
     *
     * @param {RevKeen.InvoicesDeleteRequest} request
     * @param {InvoicesClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @example
     *     await client.invoices.delete({
     *         id: "id"
     *     })
     */
    delete(request: RevKeen.InvoicesDeleteRequest, requestOptions?: InvoicesClient.RequestOptions): core.HttpResponsePromise<RevKeen.SuccessResponse>;
    private __delete;
    /**
     * Update an existing invoice.
     *
     * @param {RevKeen.InvoicesUpdateRequest} request
     * @param {InvoicesClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @example
     *     await client.invoices.update({
     *         id: "id"
     *     })
     */
    update(request: RevKeen.InvoicesUpdateRequest, requestOptions?: InvoicesClient.RequestOptions): core.HttpResponsePromise<RevKeen.InvoiceResponse>;
    private __update;
    /**
     * Issue a full or partial refund for a paid invoice. Emits invoice.refunded notification to customer.
     *
     * @param {RevKeen.InvoicesRefundRequest} request
     * @param {InvoicesClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link RevKeen.BadRequestError}
     *
     * @example
     *     await client.invoices.refund({
     *         id: "id"
     *     })
     */
    refund(request: RevKeen.InvoicesRefundRequest, requestOptions?: InvoicesClient.RequestOptions): core.HttpResponsePromise<RevKeen.InvoiceResponse>;
    private __refund;
    /**
     * Reject an invoice during approval workflow. Returns invoice to draft status with rejection details.
     *
     * @param {RevKeen.InvoicesRejectRequest} request
     * @param {InvoicesClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link RevKeen.BadRequestError}
     *
     * @example
     *     await client.invoices.reject({
     *         id: "id",
     *         reason: "Invoice totals do not match purchase order"
     *     })
     */
    reject(request: RevKeen.InvoicesRejectRequest, requestOptions?: InvoicesClient.RequestOptions): core.HttpResponsePromise<RevKeen.InvoiceResponse>;
    private __reject;
    /**
     * List comments for an invoice. Use includeInternal=true to include internal comments (merchant only).
     *
     * @param {RevKeen.InvoicesCommentsListRequest} request
     * @param {InvoicesClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @example
     *     await client.invoices.commentsList({
     *         id: "id",
     *         includeInternal: "false"
     *     })
     */
    commentsList(request: RevKeen.InvoicesCommentsListRequest, requestOptions?: InvoicesClient.RequestOptions): core.HttpResponsePromise<RevKeen.InvoiceCommentListDetailResponse>;
    private __commentsList;
    /**
     * Add a comment to an invoice. Set isInternal to true for merchant-only comments.
     *
     * @param {RevKeen.InvoicesCommentsAddRequest} request
     * @param {InvoicesClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @example
     *     await client.invoices.commentsAdd({
     *         id: "id",
     *         content: "Payment reminder sent to customer"
     *     })
     */
    commentsAdd(request: RevKeen.InvoicesCommentsAddRequest, requestOptions?: InvoicesClient.RequestOptions): core.HttpResponsePromise<RevKeen.InvoiceCommentDetailResponse>;
    private __commentsAdd;
    /**
     * Create or update an invoice identified by external source and ID. Used by integrations (PracticeHub, Wodify) to sync invoices.
     *
     * @param {RevKeen.InvoicesExternalUpsertByExternalIdRequest} request
     * @param {InvoicesClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link RevKeen.BadRequestError}
     * @throws {@link RevKeen.ConflictError}
     * @throws {@link RevKeen.UnprocessableEntityError}
     *
     * @example
     *     await client.invoices.externalUpsertbyexternalid({
     *         source: "practicehub",
     *         externalId: "INV-12345"
     *     })
     */
    externalUpsertbyexternalid(request: RevKeen.InvoicesExternalUpsertByExternalIdRequest, requestOptions?: InvoicesClient.RequestOptions): core.HttpResponsePromise<RevKeen.InvoicesExternalUpsertByExternalIdResponse>;
    private __externalUpsertbyexternalid;
    /**
     * Finalizes a draft invoice, locking it for payment. Assigns invoice number and generates public token. After finalization, financial fields become immutable.
     *
     * @param {RevKeen.InvoicesFinalizeRequest} request
     * @param {InvoicesClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link RevKeen.BadRequestError}
     * @throws {@link RevKeen.NotFoundError}
     *
     * @example
     *     await client.invoices.finalize({
     *         id: "id"
     *     })
     */
    finalize(request: RevKeen.InvoicesFinalizeRequest, requestOptions?: InvoicesClient.RequestOptions): core.HttpResponsePromise<RevKeen.InvoiceResponse>;
    private __finalize;
    /**
     * Voids an invoice. Only invoices without recorded payments can be voided. Use refund instead for paid invoices.
     *
     * @param {RevKeen.InvoicesVoidRequest} request
     * @param {InvoicesClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link RevKeen.BadRequestError}
     * @throws {@link RevKeen.NotFoundError}
     *
     * @example
     *     await client.invoices.void({
     *         id: "id"
     *     })
     */
    void(request: RevKeen.InvoicesVoidRequest, requestOptions?: InvoicesClient.RequestOptions): core.HttpResponsePromise<RevKeen.InvoiceResponse>;
    private __void;
    /**
     * Sends an invoice to the customer via the specified channel (email, SMS, or WhatsApp). Invoice must be approved first.
     *
     * @param {RevKeen.InvoicesSendRequest} request
     * @param {InvoicesClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link RevKeen.BadRequestError}
     * @throws {@link RevKeen.NotFoundError}
     *
     * @example
     *     await client.invoices.send({
     *         id: "id"
     *     })
     */
    send(request: RevKeen.InvoicesSendRequest, requestOptions?: InvoicesClient.RequestOptions): core.HttpResponsePromise<RevKeen.InvoiceResponse>;
    private __send;
    /**
     * Records a manual payment against an invoice. Use this for cash, check, bank transfer, or other offline payments.
     *
     * @param {RevKeen.InvoicesPayRequest} request
     * @param {InvoicesClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link RevKeen.BadRequestError}
     * @throws {@link RevKeen.NotFoundError}
     *
     * @example
     *     await client.invoices.pay({
     *         id: "id"
     *     })
     */
    pay(request: RevKeen.InvoicesPayRequest, requestOptions?: InvoicesClient.RequestOptions): core.HttpResponsePromise<RevKeen.InvoiceResponse>;
    private __pay;
    /**
     * Check if an invoice is eligible for credit notes and get the maximum creditable amount.
     *
     * @param {RevKeen.InvoicesCreditEligibilityRequest} request
     * @param {InvoicesClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link RevKeen.NotFoundError}
     *
     * @example
     *     await client.invoices.creditEligibility({
     *         id: "id"
     *     })
     */
    creditEligibility(request: RevKeen.InvoicesCreditEligibilityRequest, requestOptions?: InvoicesClient.RequestOptions): core.HttpResponsePromise<RevKeen.CreditEligibilityResponse>;
    private __creditEligibility;
    /**
     * List all credit notes issued for an invoice.
     *
     * @param {RevKeen.InvoicesCreditNotesListRequest} request
     * @param {InvoicesClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link RevKeen.NotFoundError}
     *
     * @example
     *     await client.invoices.creditNotesList({
     *         id: "id"
     *     })
     */
    creditNotesList(request: RevKeen.InvoicesCreditNotesListRequest, requestOptions?: InvoicesClient.RequestOptions): core.HttpResponsePromise<RevKeen.CreditNoteListResponse>;
    private __creditNotesList;
    /**
     * Issue a credit note for a paid or partially paid invoice. Use this instead of void for invoices that have received payment.
     *
     * @param {RevKeen.InvoicesCreditNoteIssueRequest} request
     * @param {InvoicesClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link RevKeen.BadRequestError}
     * @throws {@link RevKeen.NotFoundError}
     * @throws {@link RevKeen.ConflictError}
     *
     * @example
     *     await client.invoices.creditNoteIssue({
     *         id: "id",
     *         amount_minor: 5000,
     *         reason: "Service issue - partial refund for outage"
     *     })
     */
    creditNoteIssue(request: RevKeen.InvoicesCreditNoteIssueRequest, requestOptions?: InvoicesClient.RequestOptions): core.HttpResponsePromise<RevKeen.CreditNoteResponse>;
    private __creditNoteIssue;
}
//# sourceMappingURL=Client.d.ts.map