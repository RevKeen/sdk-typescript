import type * as RevKeen from "../../../../index.js";
/**
 * @example
 *     {}
 */
export interface ListPaymentMethodsRequest {
    /** Filter by customer ID */
    customer_id?: string;
    /** Filter by payment method type */
    type?: RevKeen.ListPaymentMethodsRequestType;
    /** Maximum number of results to return */
    limit?: number;
    /** Cursor for pagination (payment method ID) */
    starting_after?: string;
    /** Cursor for pagination (payment method ID) */
    ending_before?: string;
}
//# sourceMappingURL=ListPaymentMethodsRequest.d.ts.map