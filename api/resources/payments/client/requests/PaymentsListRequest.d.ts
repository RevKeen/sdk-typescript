import type * as RevKeen from "../../../../index.js";
/**
 * @example
 *     {}
 */
export interface PaymentsListRequest {
    /** Filter by customer ID */
    customer_id?: string;
    /** Filter by invoice ID */
    invoice_id?: string;
    /** Filter by status */
    status?: RevKeen.PaymentsListRequestStatus;
    /** Filter by payment channel. Use card_present for terminal payments, card_not_present for online payments. */
    payment_channel?: RevKeen.PaymentsListRequestPaymentChannel;
    /** Filter by created_at >= (Unix timestamp) */
    created_gte?: number | null;
    /** Filter by created_at <= (Unix timestamp) */
    created_lte?: number | null;
    /** Maximum number of results (1-100) */
    limit?: number;
    /** Cursor for pagination - return results after this ID */
    starting_after?: string;
    /** Cursor for pagination - return results before this ID */
    ending_before?: string;
}
//# sourceMappingURL=PaymentsListRequest.d.ts.map