import type { BaseClientOptions, BaseRequestOptions } from "../../../../BaseClient.js";
import { type NormalizedClientOptionsWithAuth } from "../../../../BaseClient.js";
import * as core from "../../../../core/index.js";
import * as RevKeen from "../../../index.js";
export declare namespace CreditNotesClient {
    type Options = BaseClientOptions;
    interface RequestOptions extends BaseRequestOptions {
    }
}
/**
 * Issue formal accounting corrections for paid or partially paid invoices. A credit note is the accounting document; a refund is the money movement. They are often created together.
 *
 * **Required Scopes:**
 * - `credit_notes:read` - List and retrieve credit notes
 * - `credit_notes:write` - Create and void credit notes
 */
export declare class CreditNotesClient {
    protected readonly _options: NormalizedClientOptionsWithAuth<CreditNotesClient.Options>;
    constructor(options: CreditNotesClient.Options);
    /**
     * Retrieve a paginated list of credit notes with optional filters. Results are ordered by creation date (newest first).
     *
     * @param {RevKeen.CreditNotesListRequest} request
     * @param {CreditNotesClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link RevKeen.UnauthorizedError}
     * @throws {@link RevKeen.InternalServerError}
     *
     * @example
     *     await client.creditNotes.list({
     *         created_after: "2024-01-01T00:00:00Z",
     *         created_before: "2024-12-31T23:59:59Z",
     *         limit: 20
     *     })
     */
    list(request?: RevKeen.CreditNotesListRequest, requestOptions?: CreditNotesClient.RequestOptions): core.HttpResponsePromise<RevKeen.CreditNoteListResponse>;
    private __list;
    /**
     * Issue a credit note for a paid or partially paid invoice. The credit can be applied via refund to payment method, customer balance, or marked as external.
     *
     * @param {RevKeen.CreateCreditNoteInput} request
     * @param {CreditNotesClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link RevKeen.BadRequestError}
     * @throws {@link RevKeen.UnauthorizedError}
     * @throws {@link RevKeen.ConflictError}
     * @throws {@link RevKeen.InternalServerError}
     *
     * @example
     *     await client.creditNotes.create({
     *         invoice_id: "660e8400-e29b-41d4-a716-446655440000",
     *         amount_minor: 5000
     *     })
     */
    create(request: RevKeen.CreateCreditNoteInput, requestOptions?: CreditNotesClient.RequestOptions): core.HttpResponsePromise<RevKeen.CreditNoteCreateResponse>;
    private __create;
    /**
     * Retrieve a single credit note by its UUID.
     *
     * @param {RevKeen.CreditNotesRetrieveRequest} request
     * @param {CreditNotesClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link RevKeen.UnauthorizedError}
     * @throws {@link RevKeen.NotFoundError}
     * @throws {@link RevKeen.InternalServerError}
     *
     * @example
     *     await client.creditNotes.retrieve({
     *         id: "id"
     *     })
     */
    retrieve(request: RevKeen.CreditNotesRetrieveRequest, requestOptions?: CreditNotesClient.RequestOptions): core.HttpResponsePromise<RevKeen.CreditNoteRetrieveResponse>;
    private __retrieve;
    /**
     * Void a credit note that has been issued but not yet fully applied. This is an accounting void — it reverses the credit without creating a new financial transaction.
     *
     * @param {RevKeen.CreditNotesVoidRequest} request
     * @param {CreditNotesClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link RevKeen.BadRequestError}
     * @throws {@link RevKeen.UnauthorizedError}
     * @throws {@link RevKeen.NotFoundError}
     * @throws {@link RevKeen.InternalServerError}
     *
     * @example
     *     await client.creditNotes.void({
     *         id: "id"
     *     })
     */
    void(request: RevKeen.CreditNotesVoidRequest, requestOptions?: CreditNotesClient.RequestOptions): core.HttpResponsePromise<RevKeen.CreditNoteVoidResponse>;
    private __void;
}
//# sourceMappingURL=Client.d.ts.map