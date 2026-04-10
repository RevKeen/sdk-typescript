/**
 * A paginated list of charges matching the query filters.
 */
export interface ChargeListResponse {
    data: ChargeListResponse.Data.Item[];
    pagination: ChargeListResponse.Pagination;
}
export declare namespace ChargeListResponse {
    type Data = Data.Item[];
    namespace Data {
        interface Item {
            id: string;
            merchantId: string;
            customerId: string;
            invoiceId: string | null;
            paymentMethodId: string | null;
            amountMinor: number;
            amountCapturedMinor: number;
            amountRefundedMinor: number;
            currency: string;
            status: Item.Status;
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
        namespace Item {
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
    interface Pagination {
        /** Current page number */
        page: number;
        /** Maximum results per page */
        limit: number;
        /** Total number of results matching the query */
        total: number;
        /** Total number of pages available */
        totalPages: number;
    }
}
//# sourceMappingURL=ChargeListResponse.d.ts.map