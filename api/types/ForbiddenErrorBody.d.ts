export interface ForbiddenErrorBody {
    error: ForbiddenErrorBody.Error_;
}
export declare namespace ForbiddenErrorBody {
    interface Error_ {
        type: Error_.Type;
        code: Error_.Code;
        message: string;
        request_id?: string;
    }
    namespace Error_ {
        const Type: {
            readonly AuthenticationError: "authentication_error";
        };
        type Type = (typeof Type)[keyof typeof Type];
        const Code: {
            readonly InsufficientPermissions: "insufficient_permissions";
            readonly Forbidden: "forbidden";
        };
        type Code = (typeof Code)[keyof typeof Code];
    }
}
//# sourceMappingURL=ForbiddenErrorBody.d.ts.map