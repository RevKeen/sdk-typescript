/**
 * @example
 *     {
 *         email: "email"
 *     }
 */
export interface CustomersCreateRequest {
    email: string;
    name?: string;
    phone?: string;
    metadata?: Record<string, unknown>;
    /** Custom fields */
    customFields?: Record<string, unknown>;
}
//# sourceMappingURL=CustomersCreateRequest.d.ts.map