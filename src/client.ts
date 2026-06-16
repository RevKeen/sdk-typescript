import { createClient } from "./generated/client/index.js";
import type { Client as GeneratedClient } from "./generated/client/index.js";
import { buildGeneratedResources } from "./generated-resources.js";
import type { GeneratedResourceRuntime, GeneratedResources } from "./generated-resources.js";
import { RevKeenAPIError, RevKeenError, RevKeenTimeoutError } from "./core/errors.js";
import { OAuthTokenManager } from "./core/oauth.js";
import type { OAuthConfig } from "./core/oauth.js";

export interface RevKeenClientOptions {
  apiKey?: string;
  oauth?: OAuthConfig;
  baseUrl?: string;
  timeout?: number;
  headers?: Record<string, string>;
  fetch?: typeof fetch;
}

function createTimeoutFetch(fetchImpl: typeof fetch, timeoutMs: number): typeof fetch {
  return async (input, init = {}) => {
    const timeoutController = new AbortController();
    const signal = init.signal
      ? AbortSignal.any([init.signal, timeoutController.signal])
      : timeoutController.signal;
    const timeoutId = setTimeout(() => timeoutController.abort(), timeoutMs);

    try {
      return await fetchImpl(input, {
        ...init,
        signal,
      });
    } finally {
      clearTimeout(timeoutId);
    }
  };
}

function getApiErrorMessage(error: unknown, fallback: string): string {
  if (typeof error === "string" && error.length > 0) {
    return error;
  }

  if (
    error &&
    typeof error === "object" &&
    "error" in error &&
    typeof (error as { error?: unknown }).error === "string"
  ) {
    return (error as { error: string }).error;
  }

  if (
    error &&
    typeof error === "object" &&
    "message" in error &&
    typeof (error as { message?: unknown }).message === "string"
  ) {
    return (error as { message: string }).message;
  }

  return fallback;
}

export class RevKeenClient implements GeneratedResourceRuntime {
  private readonly generatedClient: GeneratedClient;

  constructor(options: RevKeenClientOptions) {
    if (!options.apiKey && !options.oauth) {
      throw new RevKeenError(
        "RevKeenClient requires either 'apiKey' or 'oauth' configuration. " +
          "See https://docs.revkeen.com/api/authentication"
      );
    }

    if (options.apiKey && options.oauth) {
      throw new RevKeenError(
        "Provide either 'apiKey' or 'oauth', not both. " +
          "Use 'apiKey' for server-to-server with Unkey keys, or 'oauth' for OAuth 2.1 client credentials."
      );
    }

    const timeoutMs = options.timeout ?? 30_000;
    const tokenManager = options.oauth ? new OAuthTokenManager(options.oauth) : null;
    const fetchImpl = createTimeoutFetch(options.fetch ?? globalThis.fetch, timeoutMs);

    this.generatedClient = createClient({
      auth: async (auth) => {
        if (auth.type === "apiKey") {
          return options.apiKey;
        }

        if (auth.scheme === "bearer" && tokenManager) {
          return tokenManager.getToken();
        }

        return undefined;
      },
      baseUrl: options.baseUrl || "https://api.revkeen.com/v2",
      fetch: fetchImpl,
      headers: options.headers,
    });

    this.generatedClient.interceptors.error.use(async (error, response, request) => {
      if (error instanceof RevKeenError) {
        return error;
      }

      if (response) {
        return new RevKeenAPIError(
          response.status,
          getApiErrorMessage(error, response.statusText),
          error
        );
      }

      if (error instanceof Error && error.name === "AbortError") {
        return new RevKeenTimeoutError(
          `Request timed out${request ? ` for ${request.method} ${request.url}` : ""}`
        );
      }

      if (error instanceof Error) {
        return new RevKeenError(`Network error: ${error.message}`);
      }

      return new RevKeenError("Unknown SDK error");
    });

    Object.assign(this, buildGeneratedResources(this));
  }

  async requestData<T>(
    fn: (options: unknown) => Promise<{ data?: T; error?: unknown }>,
    options?: Record<string, unknown>
  ): Promise<T> {
    const result = await fn({
      client: this.generatedClient,
      throwOnError: true,
      ...(options ?? {}),
    });

    if (result.data === undefined) {
      throw new RevKeenError("SDK request completed without response data");
    }

    return result.data;
  }
}

export interface RevKeenClient extends GeneratedResources {}

export { RevKeenClient as RevKeen };
