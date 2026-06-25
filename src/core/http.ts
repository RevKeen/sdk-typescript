import { RevKeenError, RevKeenAPIError, RevKeenTimeoutError } from "./errors.js";

export type AuthProvider = () => Promise<{ header: string; value: string }>;

export interface HttpClientOptions {
  apiKey?: string;
  authProvider?: AuthProvider;
  baseUrl: string;
  timeout: number;
  headers?: Record<string, string>;
}

export class HttpClient {
  private defaultAuthProvider: AuthProvider;

  constructor(private options: HttpClientOptions) {
    if (options.authProvider) {
      this.defaultAuthProvider = options.authProvider;
    } else if (options.apiKey) {
      const apiKey = options.apiKey;
      this.defaultAuthProvider = async () => ({ header: "x-api-key", value: apiKey });
    } else {
      this.defaultAuthProvider = async () => ({ header: "x-api-key", value: "" });
    }
  }

  async request<T>(method: string, path: string, body?: unknown, query?: Record<string, unknown>): Promise<T> {
    const url = new URL(path, this.options.baseUrl);
    if (query) {
      for (const [key, value] of Object.entries(query)) {
        if (value !== undefined && value !== null) {
          url.searchParams.set(key, String(value));
        }
      }
    }

    const auth = await this.defaultAuthProvider();

    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), this.options.timeout);

    try {
      const res = await fetch(url.toString(), {
        method,
        headers: {
          "Content-Type": "application/json",
          [auth.header]: auth.value,
          ...this.options.headers,
        },
        body: body ? JSON.stringify(body) : undefined,
        signal: controller.signal,
      });

      if (!res.ok) {
        const errorBody = await res.json().catch(() => ({})) as Record<string, any>;
        throw new RevKeenAPIError(res.status, errorBody.error?.message || res.statusText, errorBody);
      }

      if (res.status === 204) return undefined as T;
      return (await res.json()) as T;
    } catch (err) {
      if (err instanceof RevKeenError) throw err;
      if ((err as Error).name === "AbortError") {
        throw new RevKeenTimeoutError(`Request timed out after ${this.options.timeout}ms`);
      }
      throw new RevKeenError(`Network error: ${(err as Error).message}`);
    } finally {
      clearTimeout(timeoutId);
    }
  }

  get<T>(path: string, query?: Record<string, unknown>): Promise<T> {
    return this.request<T>("GET", path, undefined, query);
  }

  post<T>(path: string, body?: unknown, query?: Record<string, unknown>): Promise<T> {
    return this.request<T>("POST", path, body, query);
  }

  patch<T>(path: string, body?: unknown): Promise<T> {
    return this.request<T>("PATCH", path, body);
  }

  put<T>(path: string, body?: unknown): Promise<T> {
    return this.request<T>("PUT", path, body);
  }

  delete<T>(path: string, body?: unknown): Promise<T> {
    return this.request<T>("DELETE", path, body);
  }
}
