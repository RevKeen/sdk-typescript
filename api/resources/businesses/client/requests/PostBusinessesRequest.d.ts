/**
 * @example
 *     {
 *         name: "name"
 *     }
 */
export interface PostBusinessesRequest {
    customerId?: string | null;
    name: string;
    companyNumber?: string | null;
    taxIdentifier?: string | null;
    billingEmail?: string | null;
    billingPhone?: string | null;
    billingAddressLine1?: string | null;
    billingAddressLine2?: string | null;
    billingCity?: string | null;
    billingPostcode?: string | null;
    billingCountry?: string | null;
    metadata?: Record<string, unknown>;
}
//# sourceMappingURL=PostBusinessesRequest.d.ts.map