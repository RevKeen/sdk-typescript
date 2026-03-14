import type * as RevKeen from "../../../../index.js";
/**
 * @example
 *     {}
 */
export interface ChargesListRequest {
    /** Page number */
    page?: number;
    /** Maximum number of results (1-100) */
    limit?: number;
    /** Filter by customer UUID */
    customerId?: string;
    /** Filter by charge status */
    status?: RevKeen.ChargesListRequestStatus;
    /** Filter charges created on or after this date */
    createdGte?: string;
    /** Filter charges created on or before this date */
    createdLte?: string;
}
//# sourceMappingURL=ChargesListRequest.d.ts.map