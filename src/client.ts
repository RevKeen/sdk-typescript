import { buildGeneratedResources } from "./generated-resources.js";
import type {
  GeneratedResourceRuntime,
  GeneratedResources,
} from "./generated-resources.js";
import {
  assertPublishableKey,
  assertSecretKey,
} from "./core/authentication.js";
import { createRevKeenAPIError, RevKeenError } from "./core/errors.js";
import {
  resolveRevKeenEnvironment,
  validateCustomBaseUrl,
} from "./core/environment.js";
import type { RevKeenEnvironment } from "./core/environment.js";
import {
  createPrivateOpenApiTransport,
  isOpenApiResponseError,
} from "./core/openapi-transport.js";
import { OAuthTokenManager } from "./core/oauth.js";
import type { OAuthConfig } from "./core/oauth.js";
import type {
  RevKeenOperationMetadata,
  RevKeenRequestOptions,
  RevKeenRetryOptions,
  RevKeenTransportRequest,
} from "./core/request-options.js";
import { RevKeenTransport } from "./core/transport.js";
import type {
  BatchIngestResult,
  DryRunResult,
  UsageIngestRequest,
} from "./generated/types.gen.js";

interface RevKeenClientBaseOptions {
  /** @deprecated Use connectTimeout and readTimeout for explicit phases. */
  timeout?: number;
  connectTimeout?: number;
  readTimeout?: number;
  retry?: RevKeenRetryOptions;
  requestIdFactory?: () => string;
  headers?: Record<string, string>;
  fetch?: typeof fetch;
}

type RevKeenAuthenticationOptions =
  | { secretKey: string; apiKey?: never; oauth?: never }
  /** @deprecated Use secretKey. */
  | { apiKey: string; secretKey?: never; oauth?: never }
  | { oauth: OAuthConfig; secretKey?: never; apiKey?: never };

export type RevKeenClientOptions = RevKeenClientBaseOptions &
  RevKeenAuthenticationOptions & { environment: RevKeenEnvironment };

export type RevKeenCustomBaseUrlClientOptions = RevKeenClientBaseOptions &
  RevKeenAuthenticationOptions;

export interface UsageResource {
  ingest: (
    body: UsageIngestRequest,
    requestOptions?: RevKeenRequestOptions,
  ) => Promise<BatchIngestResult>;
  dryRun: (
    body: UsageIngestRequest,
    requestOptions?: RevKeenRequestOptions,
  ) => Promise<DryRunResult>;
}

const RESERVED_HEADERS = new Set([
  "authorization",
  "idempotency-key",
  "x-api-key",
  "x-correlation-id",
  "x-request-id",
  "x-trace-id",
]);

function validateHeaders(headers: Record<string, string> | undefined): void {
  for (const name of Object.keys(headers ?? {})) {
    if (RESERVED_HEADERS.has(name.toLowerCase())) {
      throw new RevKeenError(
        `Header '${name}' is managed by the RevKeen SDK and cannot be configured directly.`,
      );
    }
  }
}

function interpolatePath(template: string, path: unknown): string {
  const values =
    path && typeof path === "object" ? (path as Record<string, unknown>) : {};
  return template.replace(/\{([^}]+)\}/g, (_match, name: string) => {
    const value = values[name];
    if (value === undefined || value === null)
      throw new RevKeenError(`Missing required path parameter '${name}'`);
    return encodeURIComponent(String(value));
  });
}

async function parseResponseBody(response: Response): Promise<unknown> {
  if (response.status === 204 || response.headers.get("content-length") === "0")
    return {};
  const text = await response.text();
  if (!text) return {};
  if (response.headers.get("content-type")?.includes("json")) {
    try {
      return JSON.parse(text);
    } catch {
      return text;
    }
  }
  return text;
}

interface InternalClientOptions extends RevKeenClientBaseOptions {
  baseUrl: string;
  key?: string;
  oauth?: OAuthConfig;
  allowPublishableKey?: boolean;
}

export class RevKeenClient implements GeneratedResourceRuntime {
  private transport!: RevKeenTransport;
  private baseUrl!: string;
  private staticHeaders!: Record<string, string>;
  private key?: string;
  private tokenManager: OAuthTokenManager | null = null;
  readonly usage!: UsageResource;

  constructor(options: RevKeenClientOptions) {
    const key =
      "secretKey" in options
        ? options.secretKey
        : "apiKey" in options
          ? options.apiKey
          : undefined;
    this.initialize({
      ...options,
      baseUrl: resolveRevKeenEnvironment(options.environment),
      key,
      oauth: options.oauth,
    });
  }

  static forCustomBaseUrl(
    baseUrl: string,
    options: RevKeenCustomBaseUrlClientOptions,
  ): RevKeenClient {
    const client = Object.create(RevKeenClient.prototype) as RevKeenClient;
    const key =
      "secretKey" in options
        ? options.secretKey
        : "apiKey" in options
          ? options.apiKey
          : undefined;
    client.initialize({
      ...options,
      baseUrl: validateCustomBaseUrl(baseUrl),
      key,
      oauth: options.oauth,
    });
    return client;
  }

  private initialize(options: InternalClientOptions): void {
    if (!options.key && !options.oauth) {
      throw new RevKeenError(
        "RevKeenClient requires either 'secretKey' or 'oauth' configuration. See https://docs.revkeen.com/api/authentication",
      );
    }
    if (options.key && options.oauth)
      throw new RevKeenError("Provide either a key or 'oauth', not both.");
    if (options.key) {
      if (options.allowPublishableKey) assertPublishableKey(options.key);
      else assertSecretKey(options.key);
    }
    validateHeaders(options.headers);

    const legacyTimeout = options.timeout;
    this.transport = new RevKeenTransport({
      fetch: options.fetch,
      connectTimeout: options.connectTimeout ?? legacyTimeout,
      readTimeout: options.readTimeout ?? legacyTimeout,
      retry: options.retry,
      requestIdFactory: options.requestIdFactory,
    });
    this.baseUrl = options.baseUrl;
    this.staticHeaders = { ...(options.headers ?? {}) };
    this.key = options.key;
    this.tokenManager = options.oauth
      ? new OAuthTokenManager(options.oauth)
      : null;

    Object.assign(this, buildGeneratedResources(this));
    Object.defineProperty(this, "usage", {
      enumerable: true,
      value: {
        ingest: (
          body: UsageIngestRequest,
          requestOptions?: RevKeenRequestOptions,
        ) =>
          this.requestData<BatchIngestResult>({ body }, requestOptions, {
            method: "POST",
            operationId: "usage_events_ingest",
            path: "/usage-events",
            idempotent: false,
            requiresIdempotencyKey: false,
          }),
        dryRun: (
          body: UsageIngestRequest,
          requestOptions?: RevKeenRequestOptions,
        ) =>
          this.requestData<DryRunResult>({ body }, requestOptions, {
            method: "POST",
            operationId: "usage_events_dry_run",
            path: "/usage-events/dry-run",
            idempotent: false,
            requiresIdempotencyKey: false,
          }),
      },
    });
  }

  async requestData<T>(
    options: Record<string, unknown> | undefined,
    requestOptions: RevKeenRequestOptions | undefined,
    operation: RevKeenOperationMetadata,
  ): Promise<T> {
    return this.transport.execute(
      operation,
      requestOptions,
      async (transportRequest) => {
        const response = await this.sendOpenApiRequest(
          operation,
          options,
          transportRequest,
        );
        return (await parseResponseBody(response)) as T;
      },
    );
  }

  private async sendOpenApiRequest(
    operation: RevKeenOperationMetadata,
    options: Record<string, unknown> | undefined,
    transportRequest: RevKeenTransportRequest,
  ): Promise<Response> {
    const requestId = transportRequest.headers["x-request-id"];
    const context = {
      requestId,
      traceId: transportRequest.headers["x-trace-id"],
      correlationId: requestId,
      attemptCount: 1,
    };
    const headers: Record<string, string> = {
      ...this.staticHeaders,
      ...transportRequest.headers,
    };
    if (this.key) headers["x-api-key"] = this.key;
    if (this.tokenManager) {
      try {
        headers.authorization = `Bearer ${await this.tokenManager.getToken()}`;
      } catch (error) {
        const message =
          error instanceof Error
            ? error.message
            : "Unknown OAuth token failure";
        throw new RevKeenError(
          `OAuth token acquisition failed: ${message}`,
          context,
        );
      }
    }
    if (options?.body !== undefined)
      headers["Content-Type"] = "application/json";

    const api = createPrivateOpenApiTransport({
      basePath: this.baseUrl,
      fetchApi: transportRequest.fetch,
    });
    try {
      return await api.send({
        path: interpolatePath(operation.path, options?.path),
        method: operation.method,
        headers,
        query: options?.query as never,
        body: options?.body,
      });
    } catch (error) {
      if (!isOpenApiResponseError(error)) throw error;
      const body = await parseResponseBody(error.response);
      const errorContext = this.transport.getErrorContext(error.response);
      throw createRevKeenAPIError(
        error.response.status,
        body,
        error.response.statusText,
        errorContext,
      );
    }
  }
}

export interface RevKeenClient extends GeneratedResources {}
export { RevKeenClient as RevKeen };

export function createBrowserCoreClient(
  publishableKey: string,
  environment: RevKeenEnvironment,
  options: RevKeenClientBaseOptions = {},
): RevKeenClient {
  const client = Object.create(RevKeenClient.prototype) as RevKeenClient;
  (
    client as unknown as { initialize(options: InternalClientOptions): void }
  ).initialize({
    ...options,
    baseUrl: resolveRevKeenEnvironment(environment),
    key: publishableKey,
    allowPublishableKey: true,
  });
  return client;
}

export function createBrowserCoreClientForCustomBaseUrl(
  publishableKey: string,
  baseUrl: string,
  options: RevKeenClientBaseOptions = {},
): RevKeenClient {
  const client = Object.create(RevKeenClient.prototype) as RevKeenClient;
  (
    client as unknown as { initialize(options: InternalClientOptions): void }
  ).initialize({
    ...options,
    baseUrl: validateCustomBaseUrl(baseUrl),
    key: publishableKey,
    allowPublishableKey: true,
  });
  return client;
}

export type { RevKeenClientBaseOptions as RevKeenBrowserClientTransportOptions };
