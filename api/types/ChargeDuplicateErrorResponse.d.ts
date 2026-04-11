/**
 * Error response returned when a duplicate charge is detected via idempotency key.
 */
export interface ChargeDuplicateErrorResponse {
    error: string;
    existingChargeId?: string;
}
//# sourceMappingURL=ChargeDuplicateErrorResponse.d.ts.map