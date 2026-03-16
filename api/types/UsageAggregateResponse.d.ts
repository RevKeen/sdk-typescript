export interface UsageAggregateResponse {
    object: UsageAggregateResponse.Object_;
    meter_id: string;
    start_time: string;
    end_time: string;
    /** Aggregated usage value */
    value: number;
    /** Number of events in range */
    event_count: number;
}
export declare namespace UsageAggregateResponse {
    const Object_: {
        readonly UsageAggregate: "usage_aggregate";
    };
    type Object_ = (typeof Object_)[keyof typeof Object_];
}
//# sourceMappingURL=UsageAggregateResponse.d.ts.map