import { describe, it, expect, vi, beforeEach, afterEach } from "vitest";
import { OAuthTokenManager } from "../oauth.js";
import { RevKeenError } from "../errors.js";

const TOKEN_ENDPOINT = "https://api.revkeen.com/api/auth/oauth2/token";

function mockTokenResponse(overrides: Record<string, unknown> = {}) {
  return {
    access_token: "rkoa_test_access_token",
    token_type: "Bearer",
    expires_in: 3600,
    ...overrides,
  };
}

describe("OAuthTokenManager", () => {
  let mockFetch: ReturnType<typeof vi.fn>;

  beforeEach(() => {
    mockFetch = vi.fn();
    vi.stubGlobal("fetch", mockFetch);
  });

  afterEach(() => {
    vi.restoreAllMocks();
  });

  it("fetches token via client_credentials grant", async () => {
    mockFetch.mockResolvedValueOnce({
      ok: true,
      json: async () => mockTokenResponse(),
    });

    const manager = new OAuthTokenManager({
      clientId: "test_client",
      clientSecret: "test_secret",
      tokenEndpoint: TOKEN_ENDPOINT,
    });

    const token = await manager.getToken();

    expect(token).toBe("rkoa_test_access_token");
    expect(mockFetch).toHaveBeenCalledOnce();

    const [url, options] = mockFetch.mock.calls[0];
    expect(url).toBe(TOKEN_ENDPOINT);
    expect(options.method).toBe("POST");
    expect(options.headers["Content-Type"]).toBe("application/x-www-form-urlencoded");

    const body = new URLSearchParams(options.body);
    expect(body.get("grant_type")).toBe("client_credentials");
    expect(body.get("client_id")).toBe("test_client");
    expect(body.get("client_secret")).toBe("test_secret");
  });

  it("includes scopes in token request", async () => {
    mockFetch.mockResolvedValueOnce({
      ok: true,
      json: async () => mockTokenResponse(),
    });

    const manager = new OAuthTokenManager({
      clientId: "test_client",
      clientSecret: "test_secret",
      tokenEndpoint: TOKEN_ENDPOINT,
      scopes: ["invoices:read", "customers:write"],
    });

    await manager.getToken();

    const body = new URLSearchParams(mockFetch.mock.calls[0][1].body);
    expect(body.get("scope")).toBe("invoices:read customers:write");
  });

  it("uses default token endpoint when not specified", async () => {
    mockFetch.mockResolvedValueOnce({
      ok: true,
      json: async () => mockTokenResponse(),
    });

    const manager = new OAuthTokenManager({
      clientId: "test_client",
      clientSecret: "test_secret",
    });

    await manager.getToken();

    expect(mockFetch.mock.calls[0][0]).toBe(
      "https://api.revkeen.com/api/auth/oauth2/token"
    );
  });

  it("caches token and reuses on second call", async () => {
    mockFetch.mockResolvedValueOnce({
      ok: true,
      json: async () => mockTokenResponse({ expires_in: 3600 }),
    });

    const manager = new OAuthTokenManager({
      clientId: "test_client",
      clientSecret: "test_secret",
      tokenEndpoint: TOKEN_ENDPOINT,
    });

    const token1 = await manager.getToken();
    const token2 = await manager.getToken();

    expect(token1).toBe("rkoa_test_access_token");
    expect(token2).toBe("rkoa_test_access_token");
    expect(mockFetch).toHaveBeenCalledOnce(); // Only one fetch
  });

  it("refreshes token when near expiry", async () => {
    // First token expires in 30 seconds (less than 60s buffer)
    mockFetch
      .mockResolvedValueOnce({
        ok: true,
        json: async () => mockTokenResponse({ expires_in: 30 }),
      })
      .mockResolvedValueOnce({
        ok: true,
        json: async () =>
          mockTokenResponse({ access_token: "rkoa_refreshed_token" }),
      });

    const manager = new OAuthTokenManager({
      clientId: "test_client",
      clientSecret: "test_secret",
      tokenEndpoint: TOKEN_ENDPOINT,
    });

    const token1 = await manager.getToken();
    expect(token1).toBe("rkoa_test_access_token");

    // Second call should trigger a new fetch (token within buffer)
    const token2 = await manager.getToken();
    expect(token2).toBe("rkoa_refreshed_token");
    expect(mockFetch).toHaveBeenCalledTimes(2);
  });

  it("deduplicates concurrent requests", async () => {
    let resolveToken: (value: unknown) => void;
    const tokenPromise = new Promise((resolve) => {
      resolveToken = resolve;
    });

    mockFetch.mockImplementationOnce(async () => {
      await tokenPromise;
      return {
        ok: true,
        json: async () => mockTokenResponse(),
      };
    });

    const manager = new OAuthTokenManager({
      clientId: "test_client",
      clientSecret: "test_secret",
      tokenEndpoint: TOKEN_ENDPOINT,
    });

    // Start two concurrent requests
    const p1 = manager.getToken();
    const p2 = manager.getToken();

    // Resolve the token request
    resolveToken!(undefined);

    const [token1, token2] = await Promise.all([p1, p2]);

    expect(token1).toBe("rkoa_test_access_token");
    expect(token2).toBe("rkoa_test_access_token");
    expect(mockFetch).toHaveBeenCalledOnce(); // Only one fetch for both
  });

  it("throws RevKeenError on invalid credentials", async () => {
    mockFetch.mockResolvedValue({
      ok: false,
      status: 401,
      statusText: "Unauthorized",
      text: async () => '{"error":"invalid_client"}',
    });

    const manager = new OAuthTokenManager({
      clientId: "bad_client",
      clientSecret: "bad_secret",
      tokenEndpoint: TOKEN_ENDPOINT,
    });

    await expect(manager.getToken()).rejects.toThrow(RevKeenError);

    const manager2 = new OAuthTokenManager({
      clientId: "bad_client",
      clientSecret: "bad_secret",
      tokenEndpoint: TOKEN_ENDPOINT,
    });
    await expect(manager2.getToken()).rejects.toThrow("OAuth token request failed (401)");
  });

  it("uses refresh_token when available, falls back to client_credentials", async () => {
    // First call: client_credentials with refresh_token in response
    mockFetch.mockResolvedValueOnce({
      ok: true,
      json: async () =>
        mockTokenResponse({
          access_token: "rkoa_first",
          refresh_token: "rkor_refresh_token",
          expires_in: 30, // Near expiry to trigger refresh
        }),
    });

    const manager = new OAuthTokenManager({
      clientId: "test_client",
      clientSecret: "test_secret",
      tokenEndpoint: TOKEN_ENDPOINT,
    });

    // Get initial token
    const token1 = await manager.getToken();
    expect(token1).toBe("rkoa_first");

    // Second call: tries refresh_token grant
    mockFetch.mockResolvedValueOnce({
      ok: true,
      json: async () =>
        mockTokenResponse({ access_token: "rkoa_refreshed" }),
    });

    const token2 = await manager.getToken();
    expect(token2).toBe("rkoa_refreshed");

    // Verify second call used refresh_token grant
    const secondBody = new URLSearchParams(mockFetch.mock.calls[1][1].body);
    expect(secondBody.get("grant_type")).toBe("refresh_token");
    expect(secondBody.get("refresh_token")).toBe("rkor_refresh_token");
  });

  it("falls back to client_credentials when refresh fails", async () => {
    // First call: get a token with refresh_token
    mockFetch.mockResolvedValueOnce({
      ok: true,
      json: async () =>
        mockTokenResponse({
          access_token: "rkoa_first",
          refresh_token: "rkor_expired",
          expires_in: 30,
        }),
    });

    const manager = new OAuthTokenManager({
      clientId: "test_client",
      clientSecret: "test_secret",
      tokenEndpoint: TOKEN_ENDPOINT,
    });

    await manager.getToken();

    // Refresh fails, then client_credentials succeeds
    mockFetch
      .mockResolvedValueOnce({
        ok: false,
        status: 400,
        statusText: "Bad Request",
        text: async () => '{"error":"invalid_grant"}',
      })
      .mockResolvedValueOnce({
        ok: true,
        json: async () =>
          mockTokenResponse({ access_token: "rkoa_fallback" }),
      });

    const token2 = await manager.getToken();
    expect(token2).toBe("rkoa_fallback");
    expect(mockFetch).toHaveBeenCalledTimes(3); // initial + failed refresh + fallback
  });
});
