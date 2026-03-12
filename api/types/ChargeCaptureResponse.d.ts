export interface ChargeCaptureResponse {
    data: ChargeCaptureResponse.Data;
}
export declare namespace ChargeCaptureResponse {
    interface Data {
        id: string;
        merchantId: string;
        customerId: string;
        invoiceId: string | null;
        paymentMethodId: string | null;
        amountMinor: number;
        amountCapturedMinor: number;
        amountRefundedMinor: number;
        currency: string;
        status: Data.Status;
        description: string;
        statementDescriptor: string | null;
        failureCode: string | null;
        failureMessage: string | null;
        gatewayTransactionId: string | null;
        receiptUrl: string | null;
        captured: boolean;
        metadata: Record<string, unknown> | null;
        createdAt: string;
        updatedAt: string;
    }
    namespace Data {
        const Status: {
            readonly Pending: "pending";
            readonly Processing: "processing";
            readonly Succeeded: "succeeded";
            readonly Failed: "failed";
            readonly Refunded: "refunded";
            readonly PartiallyRefunded: "partially_refunded";
            readonly Voided: "voided";
        };
        type Status = (typeof Status)[keyof typeof Status];
    }
}
//# sourceMappingURL=ChargeCaptureResponse.d.ts.map