export interface DeactivatePaymentLinkResponse {
    id: string;
    status: DeactivatePaymentLinkResponse.Status;
    status_changed_at: string;
    is_active: boolean;
    updated_at: string;
}
export declare namespace DeactivatePaymentLinkResponse {
    const Status: {
        readonly Active: "active";
        readonly Inactive: "inactive";
        readonly Archived: "archived";
    };
    type Status = (typeof Status)[keyof typeof Status];
}
//# sourceMappingURL=DeactivatePaymentLinkResponse.d.ts.map