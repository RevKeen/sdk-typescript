/**
 * @example
 *     {
 *         id: "id"
 *     }
 */
export interface InvoicesSendRequest {
    id: string;
    /** Communication channel to send the invoice through */
    channel?: InvoicesSendRequest.Channel;
    /** Optional custom template ID to use for the notification */
    template_id?: string;
}
export declare namespace InvoicesSendRequest {
    /** Communication channel to send the invoice through */
    const Channel: {
        readonly Email: "email";
        readonly Sms: "sms";
        readonly Whatsapp: "whatsapp";
    };
    type Channel = (typeof Channel)[keyof typeof Channel];
}
//# sourceMappingURL=InvoicesSendRequest.d.ts.map