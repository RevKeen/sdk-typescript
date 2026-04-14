/**
 * Result of a batch ingest operation showing how many events were accepted and any that were rejected.
 */
export interface BatchIngestResult {
    object: BatchIngestResult.Object_;
    summary: BatchIngestResult.Summary;
    data: BatchIngestResult.Data.Item[];
}
export declare namespace BatchIngestResult {
    const Object_: {
        readonly UsageEventBatchResult: "usage_event_batch_result";
    };
    type Object_ = (typeof Object_)[keyof typeof Object_];
    interface Summary {
        ingested: number;
        duplicate: number;
        skipped: number;
        failed: number;
    }
    type Data = Data.Item[];
    namespace Data {
        interface Item {
            index: number;
            status: Item.Status;
            id?: string;
            reason?: string;
        }
        namespace Item {
            const Status: {
                readonly Ingested: "ingested";
                readonly Duplicate: "duplicate";
                readonly Skipped: "skipped";
                readonly Failed: "failed";
            };
            type Status = (typeof Status)[keyof typeof Status];
        }
    }
}
//# sourceMappingURL=BatchIngestResult.d.ts.map