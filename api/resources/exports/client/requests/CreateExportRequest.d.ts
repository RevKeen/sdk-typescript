/**
 * @example
 *     {
 *         resource_type: "customers"
 *     }
 */
export interface CreateExportRequest {
    /** The type of resource to export. */
    resource_type: CreateExportRequest.ResourceType;
    /** Output file format. csv: Comma-separated values. xlsx: Excel workbook. */
    format?: CreateExportRequest.Format;
    /** Filters to apply (e.g., { status: 'paid', created_gte: '2024-01-01' }) */
    filters?: Record<string, unknown>;
    /** Column set to include. standard: common fields. full: all fields. minimal: IDs and key fields only. */
    column_set?: CreateExportRequest.ColumnSet;
}
export declare namespace CreateExportRequest {
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
    /** Column set to include. standard: common fields. full: all fields. minimal: IDs and key fields only. */
    const ColumnSet: {
        readonly Standard: "standard";
        readonly Full: "full";
        readonly Minimal: "minimal";
    };
    type ColumnSet = (typeof ColumnSet)[keyof typeof ColumnSet];
}
//# sourceMappingURL=CreateExportRequest.d.ts.map