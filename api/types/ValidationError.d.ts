export interface ValidationError {
    error: ValidationError.Error_;
}
export declare namespace ValidationError {
    interface Error_ {
        type: Error_.Type;
        code: Error_.Code;
        message: string;
        param?: string;
        details?: Error_.Details;
        request_id?: string;
    }
    namespace Error_ {
        const Type: {
            readonly InvalidRequestError: "invalid_request_error";
        };
        type Type = (typeof Type)[keyof typeof Type];
        const Code: {
            readonly ValidationError: "validation_error";
        };
        type Code = (typeof Code)[keyof typeof Code];
        interface Details {
            /** Field-specific validation errors */
            fields?: Record<string, string[]>;
        }
    }
}
//# sourceMappingURL=ValidationError.d.ts.map