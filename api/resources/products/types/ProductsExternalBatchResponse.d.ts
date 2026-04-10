export interface ProductsExternalBatchResponse {
    /** Number of products created */
    created: number;
    /** Number of products updated */
    updated: number;
    /** Number of products skipped due to stale data */
    skipped: number;
    /** List of failed products with error messages */
    failed: ProductsExternalBatchResponse.Failed.Item[];
}
export declare namespace ProductsExternalBatchResponse {
    type Failed = Failed.Item[];
    namespace Failed {
        interface Item {
            external_id: string;
            error: string;
        }
    }
}
//# sourceMappingURL=ProductsExternalBatchResponse.d.ts.map