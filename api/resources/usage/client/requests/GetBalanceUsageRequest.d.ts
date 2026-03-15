/**
 * @example
 *     {
 *         subscription_id: "sub_abc123",
 *         external_customer_id: "usr_123"
 *     }
 */
export interface GetBalanceUsageRequest {
    /** Filter to a specific subscription */
    subscription_id?: string;
    /** Filter to a specific customer by RevKeen ID */
    customer_id?: string;
    /** Filter to a customer by your external identifier */
    external_customer_id?: string;
    /** Filter to a single meter */
    meter_id?: string;
}
//# sourceMappingURL=GetBalanceUsageRequest.d.ts.map