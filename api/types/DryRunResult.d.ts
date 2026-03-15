export interface DryRunResult {
    object: DryRunResult.Object_;
    summary: DryRunResult.Summary;
    data: DryRunResult.Data.Item[];
}
export declare namespace DryRunResult {
    const Object_: {
        readonly UsageEventDryRunResult: "usage_event_dry_run_result";
    };
    type Object_ = (typeof Object_)[keyof typeof Object_];
    interface Summary {
        would_ingest: number;
        would_skip: number;
        would_fail: number;
    }
    type Data = Data.Item[];
    namespace Data {
        interface Item {
            index: number;
            status: Item.Status;
            validationDetails: Item.ValidationDetails;
            reason?: string;
        }
        namespace Item {
            const Status: {
                readonly WouldIngest: "would_ingest";
                readonly WouldSkip: "would_skip";
                readonly WouldFail: "would_fail";
            };
            type Status = (typeof Status)[keyof typeof Status];
            interface ValidationDetails {
                meterMatched: boolean;
                customerMatched: boolean;
                billableQuantity: number;
                filtersPassed: boolean;
            }
        }
    }
}
//# sourceMappingURL=DryRunResult.d.ts.map