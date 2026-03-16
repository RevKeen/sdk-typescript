import type * as RevKeen from "../../../index.js";
export interface PayoutsPaymentsListResponse {
    data: RevKeen.PayoutPayment[];
    meta: PayoutsPaymentsListResponse.Meta;
}
export declare namespace PayoutsPaymentsListResponse {
    interface Meta {
        payout_id: string;
        total: number;
        limit: number;
        offset: number;
    }
}
//# sourceMappingURL=PayoutsPaymentsListResponse.d.ts.map