/**
 * A payout represents funds settled from processed payments to your bank account. Track settlement batches and reconcile amounts.
 */
export interface Payout {
    id: string;
    public_id: string;
    gateway: string;
    gateway_payout_id: string;
    /** Gross amount in cents */
    gross_amount_minor: number;
    /** Fees in cents */
    fees_amount_minor: number;
    /** Net amount in cents */
    net_amount_minor: number;
    currency: string;
    charges_count: number | null;
    refunds_count: number | null;
    chargebacks_count: number | null;
    status: Payout.Status;
    arrival_date: string | null;
    settled_at: string | null;
    created_at: string;
}
export declare namespace Payout {
    const Status: {
        readonly Pending: "pending";
        readonly InTransit: "in_transit";
        readonly Paid: "paid";
        readonly Failed: "failed";
        readonly Canceled: "canceled";
    };
    type Status = (typeof Status)[keyof typeof Status];
}
//# sourceMappingURL=Payout.d.ts.map