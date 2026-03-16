/**
 * @example
 *     {
 *         customerId: "customerId"
 *     }
 */
export interface CustomersEntitlementsGrantRequest {
    /** Customer UUID */
    customerId: string;
    benefitId?: string;
    benefitKey?: string;
    expiresAt?: string | null;
    metadata?: Record<string, unknown>;
}
//# sourceMappingURL=CustomersEntitlementsGrantRequest.d.ts.map