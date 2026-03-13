import type * as RevKeen from "../index.js";
export interface PaymentAttemptListResponse {
    data: RevKeen.PaymentAttempt[];
    meta: PaymentAttemptListResponse.Meta;
}
export declare namespace PaymentAttemptListResponse {
    interface Meta {
        /** Number of results returned */
        count: number;
        /** Limit used in query */
        limit?: number;
    }
}
//# sourceMappingURL=PaymentAttemptListResponse.d.ts.map