/**
 * @example
 *     {
 *         id: "mtr_abc123"
 *     }
 */
export interface UpdateMeterRequest {
    /** Meter ID */
    id: string;
    /** Updated meter name */
    name?: string;
    /** Updated slug */
    slug?: string;
    /** Updated description */
    description?: string;
    /** Meter status */
    status?: UpdateMeterRequest.Status;
    /** Updated value key */
    value_key?: string;
    /** Updated filter conditions */
    filter_conditions?: Record<string, unknown>[];
    /** Updated unique count key */
    unique_count_key?: string;
    /** Updated unit name */
    unit_name?: string;
    /** Updated carry forward setting */
    carry_forward?: boolean;
    /** Updated metadata */
    metadata?: Record<string, unknown>;
}
export declare namespace UpdateMeterRequest {
    /** Meter status */
    const Status: {
        readonly Active: "active";
        readonly Archived: "archived";
        readonly Draft: "draft";
    };
    type Status = (typeof Status)[keyof typeof Status];
}
//# sourceMappingURL=UpdateMeterRequest.d.ts.map