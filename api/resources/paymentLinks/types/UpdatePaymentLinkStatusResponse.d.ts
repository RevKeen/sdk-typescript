export interface UpdatePaymentLinkStatusResponse {
    id: string;
    status: UpdatePaymentLinkStatusResponse.Status;
    status_changed_at: string;
    is_active: boolean;
    updated_at: string;
}
export declare namespace UpdatePaymentLinkStatusResponse {
    const Status: {
        readonly Active: "active";
        readonly Inactive: "inactive";
        readonly Archived: "archived";
    };
    type Status = (typeof Status)[keyof typeof Status];
}
//# sourceMappingURL=UpdatePaymentLinkStatusResponse.d.ts.map