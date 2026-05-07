interface OAuthConfig {
    clientId: string;
    clientSecret: string;
    tokenEndpoint?: string;
    scopes?: string[];
}
declare class OAuthTokenManager {
    private config;
    private cachedToken;
    private inflightRequest;
    constructor(config: OAuthConfig);
    getToken(): Promise<string>;
    private fetchToken;
    private requestToken;
}

export { type OAuthConfig, OAuthTokenManager };
