export interface CheckoutSessionExpireResponse {
    data: CheckoutSessionExpireResponse.Data;
    requestId: string;
}
export declare namespace CheckoutSessionExpireResponse {
    interface Data {
        id: string;
        status: Data.Status;
        expiredAt: string;
    }
    namespace Data {
        const Status: {
            readonly Expired: "expired";
        };
        type Status = (typeof Status)[keyof typeof Status];
    }
}
//# sourceMappingURL=CheckoutSessionExpireResponse.d.ts.map