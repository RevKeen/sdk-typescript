/**
 * @example
 *     {}
 */
export interface CreateCheckoutSessionInput {
    invoiceId?: string;
    productId?: string;
    amountMinor?: number;
    currency?: string;
    successUrl?: string;
    cancelUrl?: string;
    /** Payment methods to offer. Intersected with merchant capabilities. Defaults to merchant config. */
    allowedMethods?: CreateCheckoutSessionInput.AllowedMethods.Item[];
    /** Target a registered companion device. Session is pushed via SSE to the device. */
    companionDeviceId?: string;
}
export declare namespace CreateCheckoutSessionInput {
    type AllowedMethods = AllowedMethods.Item[];
    namespace AllowedMethods {
        const Item: {
            readonly Card: "card";
            readonly InStore: "in_store";
        };
        type Item = (typeof Item)[keyof typeof Item];
    }
}
//# sourceMappingURL=CreateCheckoutSessionInput.d.ts.map