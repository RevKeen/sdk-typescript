/**
 * An async data import job. Upload a CSV file to create records in bulk. Poll GET /v2/imports/:id for status and error details.
 */
export interface Import {
    /** Unique import job ID */
    id: string;
    /** Object type */
    object: Import.Object_;
    /** Import job status. pending: queued. validating: checking data. processing: creating records. completed: all rows imported. completed_with_errors: some rows failed. failed: import aborted. */
    status: Import.Status;
    /** The type of resource to import. */
    resource_type: Import.ResourceType;
    /** Total rows in the uploaded file */
    total_rows?: number | null;
    /** Number of rows processed so far */
    processed_rows?: number | null;
    /** Number of rows successfully imported */
    success_count?: number | null;
    /** Number of rows that failed */
    error_count?: number | null;
    /** Detailed error information for failed rows */
    errors?: Import.Errors.Item[] | null;
    /** When the import was created (ISO 8601) */
    created_at: string;
    /** When the import completed (ISO 8601) */
    completed_at?: string | null;
}
export declare namespace Import {
    /** Object type */
    const Object_: {
        readonly Import: "import";
    };
    type Object_ = (typeof Object_)[keyof typeof Object_];
    /** Import job status. pending: queued. validating: checking data. processing: creating records. completed: all rows imported. completed_with_errors: some rows failed. failed: import aborted. */
    const Status: {
        readonly Pending: "pending";
        readonly Validating: "validating";
        readonly Processing: "processing";
        readonly Completed: "completed";
        readonly CompletedWithErrors: "completed_with_errors";
        readonly Failed: "failed";
    };
    type Status = (typeof Status)[keyof typeof Status];
    /** The type of resource to import. */
    const ResourceType: {
        readonly Customers: "customers";
        readonly Products: "products";
        readonly Invoices: "invoices";
    };
    type ResourceType = (typeof ResourceType)[keyof typeof ResourceType];
    type Errors = Errors.Item[];
    namespace Errors {
        interface Item {
            /** Row number (1-based) */
            row: number;
            /** Field that caused the error */
            field?: string;
            /** Error message */
            message: string;
        }
    }
}
//# sourceMappingURL=Import.d.ts.map