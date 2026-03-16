/**
 * @example
 *     {
 *         id: "id",
 *         status: "active"
 *     }
 */
export interface UpdatePaymentLinkStatusRequest {
    /** Payment link UUID or public_id */
    id: string;
    /** New status for the payment link */
    status: UpdatePaymentLinkStatusRequest.Status;
}
export declare namespace UpdatePaymentLinkStatusRequest {
    /** New status for the payment link */
    const Status: {
        readonly Active: "active";
        readonly Inactive: "inactive";
        readonly Archived: "archived";
    };
    type Status = (typeof Status)[keyof typeof Status];
}
//# sourceMappingURL=UpdatePaymentLinkStatusRequest.d.ts.map