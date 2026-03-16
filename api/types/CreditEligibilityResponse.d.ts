export interface CreditEligibilityResponse {
    data: CreditEligibilityResponse.Data;
    requestId: string;
}
export declare namespace CreditEligibilityResponse {
    interface Data {
        can_credit: boolean;
        max_creditable_minor: number;
        total_credited_minor: number;
        invoice_total_minor: number;
        reason?: string;
    }
}
//# sourceMappingURL=CreditEligibilityResponse.d.ts.map