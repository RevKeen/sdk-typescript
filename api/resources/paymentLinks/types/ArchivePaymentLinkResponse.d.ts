export interface ArchivePaymentLinkResponse {
    id: string;
    status: ArchivePaymentLinkResponse.Status;
    status_changed_at: string;
    is_active: boolean;
    updated_at: string;
}
export declare namespace ArchivePaymentLinkResponse {
    const Status: {
        readonly Active: "active";
        readonly Inactive: "inactive";
        readonly Archived: "archived";
    };
    type Status = (typeof Status)[keyof typeof Status];
}
//# sourceMappingURL=ArchivePaymentLinkResponse.d.ts.map