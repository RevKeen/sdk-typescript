export interface CustomersExternalBatchResponse {
    /** Number of customers created */
    created: number;
    /** Number of customers updated */
    updated: number;
    /** Number of customers skipped due to stale data */
    skipped: number;
    /** List of failed customers with error messages */
    failed: CustomersExternalBatchResponse.Failed.Item[];
}
export declare namespace CustomersExternalBatchResponse {
    type Failed = Failed.Item[];
    namespace Failed {
        interface Item {
            external_id: string;
            error: string;
        }
    }
}
//# sourceMappingURL=CustomersExternalBatchResponse.d.ts.map