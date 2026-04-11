/**
 * @example
 *     {
 *         id: "id"
 *     }
 */
export interface CustomersUpdateRequest {
    /** Customer UUID */
    id: string;
    /** Updated email address */
    email?: string;
    /** Updated full name */
    name?: string;
    /** Updated phone number */
    phone?: string;
    /** Metadata to merge with existing values (set a key to null to remove it) */
    metadata?: Record<string, unknown>;
    /** Merchant-defined custom fields displayed as columns in the dashboard */
    customFields?: Record<string, unknown>;
}
//# sourceMappingURL=CustomersUpdateRequest.d.ts.map