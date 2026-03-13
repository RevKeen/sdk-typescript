/**
 * @example
 *     {
 *         threadId: "threadId"
 *     }
 */
export interface CommsMessagesListRequest {
    /** Thread UUID */
    threadId: string;
    /** Maximum number of results (1-100) */
    limit?: number;
    /** Number of results to skip */
    offset?: number | null;
}
//# sourceMappingURL=CommsMessagesListRequest.d.ts.map