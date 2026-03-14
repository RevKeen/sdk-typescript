export interface NotFoundErrorBody {
    error: NotFoundErrorBody.Error_;
}
export declare namespace NotFoundErrorBody {
    interface Error_ {
        type: Error_.Type;
        code: Error_.Code;
        message: string;
        param?: string;
        request_id?: string;
    }
    namespace Error_ {
        const Type: {
            readonly InvalidRequestError: "invalid_request_error";
        };
        type Type = (typeof Type)[keyof typeof Type];
        const Code: {
            readonly ResourceNotFound: "resource_not_found";
        };
        type Code = (typeof Code)[keyof typeof Code];
    }
}
//# sourceMappingURL=NotFoundErrorBody.d.ts.map