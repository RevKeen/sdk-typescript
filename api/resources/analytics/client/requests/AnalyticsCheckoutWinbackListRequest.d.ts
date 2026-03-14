import type * as RevKeen from "../../../../index.js";
/**
 * @example
 *     {}
 */
export interface AnalyticsCheckoutWinbackListRequest {
    /** Filter by opportunity type */
    type?: RevKeen.AnalyticsCheckoutWinbackListRequestType;
    /** Filter by status */
    status?: RevKeen.AnalyticsCheckoutWinbackListRequestStatus;
    /** Minimum potential value in cents */
    minValueCents?: number | null;
    /** Page number */
    page?: number;
    /** Results per page (1-100) */
    pageSize?: number;
}
//# sourceMappingURL=AnalyticsCheckoutWinbackListRequest.d.ts.map