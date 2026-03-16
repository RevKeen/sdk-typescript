export interface ActivatePaymentLinkResponse {
    id: string;
    status: ActivatePaymentLinkResponse.Status;
    status_changed_at: string;
    is_active: boolean;
    updated_at: string;
}
export declare namespace ActivatePaymentLinkResponse {
    const Status: {
        readonly Active: "active";
        readonly Inactive: "inactive";
        readonly Archived: "archived";
    };
    type Status = (typeof Status)[keyof typeof Status];
}
//# sourceMappingURL=ActivatePaymentLinkResponse.d.ts.map