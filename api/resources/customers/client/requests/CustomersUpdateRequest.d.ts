/**
 * @example
 *     {
 *         id: "id"
 *     }
 */
export interface CustomersUpdateRequest {
    /** Customer UUID */
    id: string;
    email?: string;
    name?: string;
    phone?: string;
    metadata?: Record<string, unknown>;
    /** Custom fields */
    customFields?: Record<string, unknown>;
}
//# sourceMappingURL=CustomersUpdateRequest.d.ts.map