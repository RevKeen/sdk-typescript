/** Filter by payment channel. Use card_present for terminal payments, card_not_present for online payments. */
export declare const PaymentsListRequestPaymentChannel: {
    readonly CardPresent: "card_present";
    readonly CardNotPresent: "card_not_present";
    readonly BankTransfer: "bank_transfer";
    readonly Manual: "manual";
};
export type PaymentsListRequestPaymentChannel = (typeof PaymentsListRequestPaymentChannel)[keyof typeof PaymentsListRequestPaymentChannel];
//# sourceMappingURL=PaymentsListRequestPaymentChannel.d.ts.map