/**
 * An async data export job. Create an export, poll for completion, then download the file via the presigned URL.
 */
export interface Export {
    /** Unique export job ID */
    id: string;
    /** Object type */
    object: Export.Object_;
    /** Export job status. pending: queued. processing: generating file. completed: ready for download. failed: export failed. */
    status: Export.Status;
    /** The type of resource to export. */
    resource_type: Export.ResourceType;
    /** Output file format. csv: Comma-separated values. xlsx: Excel workbook. */
    format: Export.Format;
    /** Presigned download URL (available when status is 'completed'). Expires after 1 hour. */
    download_url?: string | null;
    /** Total rows exported (available when completed) */
    total_rows?: number | null;
    /** File size in bytes (available when completed) */
    file_size_bytes?: number | null;
    /** Error message (if status is 'failed') */
    error_message?: string | null;
    /** When the export was requested (ISO 8601) */
    created_at: string;
    /** When the export completed (ISO 8601) */
    completed_at?: string | null;
}
export declare namespace Export {
    /** Object type */
    const Object_: {
        readonly Export: "export";
    };
    type Object_ = (typeof Object_)[keyof typeof Object_];
    /** Export job status. pending: queued. processing: generating file. completed: ready for download. failed: export failed. */
    const Status: {
        readonly Pending: "pending";
        readonly Processing: "processing";
        readonly Completed: "completed";
        readonly Failed: "failed";
    };
    type Status = (typeof Status)[keyof typeof Status];
    /** The type of resource to export. */
    const ResourceType: {
        readonly Customers: "customers";
        readonly Invoices: "invoices";
        readonly Transactions: "transactions";
        readonly Subscriptions: "subscriptions";
        readonly Products: "products";
        readonly PaymentMethods: "payment_methods";
    };
    type ResourceType = (typeof ResourceType)[keyof typeof ResourceType];
    /** Output file format. csv: Comma-separated values. xlsx: Excel workbook. */
    const Format: {
        readonly Csv: "csv";
        readonly Xlsx: "xlsx";
    };
    type Format = (typeof Format)[keyof typeof Format];
}
//# sourceMappingURL=Export.d.ts.map