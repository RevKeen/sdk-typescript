/**
 * @example
 *     {
 *         resource_type: "customers"
 *     }
 */
export interface CreateImportRequest {
    /** The type of resource to import. */
    resource_type: CreateImportRequest.ResourceType;
    /** URL to the CSV file to import (if not using multipart upload) */
    file_url?: string;
    /** Map CSV column names to resource fields (e.g., { 'Email Address': 'email', 'Full Name': 'name' }) */
    column_mapping?: Record<string, unknown>;
    /** Behavior when a duplicate record is found. skip: ignore the row. update: merge new data. error: fail the row. */
    on_duplicate?: CreateImportRequest.OnDuplicate;
}
export declare namespace CreateImportRequest {
    /** The type of resource to import. */
    const ResourceType: {
        readonly Customers: "customers";
        readonly Products: "products";
        readonly Invoices: "invoices";
    };
    type ResourceType = (typeof ResourceType)[keyof typeof ResourceType];
    /** Behavior when a duplicate record is found. skip: ignore the row. update: merge new data. error: fail the row. */
    const OnDuplicate: {
        readonly Skip: "skip";
        readonly Update: "update";
        readonly Error: "error";
    };
    type OnDuplicate = (typeof OnDuplicate)[keyof typeof OnDuplicate];
}
//# sourceMappingURL=CreateImportRequest.d.ts.map