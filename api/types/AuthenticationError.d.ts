export interface AuthenticationError {
    error: AuthenticationError.Error_;
}
export declare namespace AuthenticationError {
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
            readonly AuthenticationFailed: "authentication_failed";
            readonly InvalidApiKey: "invalid_api_key";
            readonly ExpiredApiKey: "expired_api_key";
        };
        type Code = (typeof Code)[keyof typeof Code];
    }
}
//# sourceMappingURL=AuthenticationError.d.ts.map