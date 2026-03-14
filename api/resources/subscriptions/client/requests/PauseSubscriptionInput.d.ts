/**
 * @example
 *     {
 *         id: "id"
 *     }
 */
export interface PauseSubscriptionInput {
    /** Subscription UUID */
    id: string;
    /** How to handle invoices during the pause period */
    behavior?: PauseSubscriptionInput.Behavior;
    /** ISO 8601 date when the subscription should automatically resume. If not provided, subscription stays paused until manually resumed. */
    resumes_at?: string;
}
export declare namespace PauseSubscriptionInput {
    /** How to handle invoices during the pause period */
    const Behavior: {
        readonly KeepAsDraft: "keep_as_draft";
        readonly MarkUncollectible: "mark_uncollectible";
        readonly Void: "void";
    };
    type Behavior = (typeof Behavior)[keyof typeof Behavior];
}
//# sourceMappingURL=PauseSubscriptionInput.d.ts.map