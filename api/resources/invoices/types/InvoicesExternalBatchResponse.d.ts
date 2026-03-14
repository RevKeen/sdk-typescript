export interface InvoicesExternalBatchResponse {
    /** Number of invoices created */
    created: number;
    /** Number of invoices updated */
    updated: number;
    /** Number of invoices skipped due to stale data */
    skipped: number;
    /** Number of invoices blocked due to immutable field violations */
    blocked: number;
    /** List of failed invoices with error messages */
    failed: InvoicesExternalBatchResponse.Failed.Item[];
}
export declare namespace InvoicesExternalBatchResponse {
    type Failed = Failed.Item[];
    namespace Failed {
        interface Item {
            external_id: string;
            error: string;
            reason_code?: string;
        }
    }
}
//# sourceMappingURL=InvoicesExternalBatchResponse.d.ts.map