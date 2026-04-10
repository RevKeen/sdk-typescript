/**
 * An invoice comment with extended author details including name, email, and avatar.
 */
export interface InvoiceCommentDetail {
    id: string;
    invoiceId: string;
    userId: string | null;
    content: string;
    isInternal: boolean;
    createdAt: string;
    updatedAt: string | null;
}
//# sourceMappingURL=InvoiceCommentDetail.d.ts.map