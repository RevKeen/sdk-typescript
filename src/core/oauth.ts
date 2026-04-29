import { RevKeenError } from "./errors.js";

export interface OAuthConfig {
  clientId: string;
  clientSecret: string;
  tokenEndpoint?: string;
  scopes?: string[];
}

interface TokenResponse {
  access_token: string;
  token_type: string;
  expires_in: number;
  refresh_token?: string;
  scope?: string;
}

interface CachedToken {
  accessToken: string;
  refreshToken?: string;
  expiresAt: number;
}

const DEFAULT_TOKEN_ENDPOINT = "https://api.revkeen.com/api/auth/oauth2/token";
const PRE_EXPIRY_BUFFER_MS = 60_000; // Refresh 60s before expiry

export class OAuthTokenManager {
  private config: Required<Pick<OAuthConfig, "clientId" | "clientSecret" | "tokenEndpoint">> &
    Pick<OAuthConfig, "scopes">;
  private cachedToken: CachedToken | null = null;
  private inflightRequest: Promise<string> | null = null;

  constructor(config: OAuthConfig) {
    this.config = {
      clientId: config.clientId,
      clientSecret: config.clientSecret,
      tokenEndpoint: config.tokenEndpoint || DEFAULT_TOKEN_ENDPOINT,
      scopes: config.scopes,
    };
  }

  async getToken(): Promise<string> {
    // Return cached token if still valid
    if (this.cachedToken && Date.now() < this.cachedToken.expiresAt - PRE_EXPIRY_BUFFER_MS) {
      return this.cachedToken.accessToken;
    }

    // Deduplicate concurrent requests
    if (this.inflightRequest) {
      return this.inflightRequest;
    }

    this.inflightRequest = this.fetchToken();
    try {
      return await this.inflightRequest;
    } finally {
      this.inflightRequest = null;
    }
  }

  private async fetchToken(): Promise<string> {
    // Try refresh token first if available
    if (this.cachedToken?.refreshToken) {
      try {
        return await this.requestToken("refresh_token");
      } catch {
        // Fall back to client_credentials
      }
    }

    return await this.requestToken("client_credentials");
  }

  private async requestToken(grantType: "client_credentials" | "refresh_token"): Promise<string> {
    const body = new URLSearchParams();
    body.set("grant_type", grantType);

    if (grantType === "client_credentials") {
      body.set("client_id", this.config.clientId);
      body.set("client_secret", this.config.clientSecret);
      if (this.config.scopes?.length) {
        body.set("scope", this.config.scopes.join(" "));
      }
    } else if (grantType === "refresh_token" && this.cachedToken?.refreshToken) {
      body.set("refresh_token", this.cachedToken.refreshToken);
      body.set("client_id", this.config.clientId);
      body.set("client_secret", this.config.clientSecret);
    }

    const res = await fetch(this.config.tokenEndpoint, {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: body.toString(),
    });

    if (!res.ok) {
      const errorBody = await res.text().catch(() => "");
      throw new RevKeenError(
        `OAuth token request failed (${res.status}): ${errorBody || res.statusText}`
      );
    }

    const data = (await res.json()) as TokenResponse;

    this.cachedToken = {
      accessToken: data.access_token,
      refreshToken: data.refresh_token ?? this.cachedToken?.refreshToken,
      expiresAt: Date.now() + data.expires_in * 1000,
    };

    return data.access_token;
  }
}
