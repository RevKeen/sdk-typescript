import type * as RevKeen from "../index.js";
export interface TerminalPaymentListResponse {
    data: RevKeen.TerminalPayment[];
    meta: TerminalPaymentListResponse.Meta;
}
export declare namespace TerminalPaymentListResponse {
    interface Meta {
        count: number;
        limit: number;
    }
}
//# sourceMappingURL=TerminalPaymentListResponse.d.ts.map