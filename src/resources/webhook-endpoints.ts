import { HttpClient } from "../core/http.js";
import { ListResponse, ListParams } from "../core/types.js";

export interface WebhookEndpoint {
  id: string;
  url: string;
  enabled_events: string[];
  status: string;
  secret?: string;
  metadata?: Record<string, string>;
  created_at: string;
  updated_at: string;
  [key: string]: unknown;
}

export interface CreateWebhookEndpointParams {
  url: string;
  enabled_events: string[];
  metadata?: Record<string, string>;
  [key: string]: unknown;
}

export interface UpdateWebhookEndpointParams {
  url?: string;
  enabled_events?: string[];
  metadata?: Record<string, string>;
  [key: string]: unknown;
}

export class WebhookEndpointsResource {
  constructor(private http: HttpClient) {}

  async create(params: CreateWebhookEndpointParams): Promise<WebhookEndpoint> {
    return this.http.post<WebhookEndpoint>("/webhook-endpoints", params);
  }

  async list(params?: ListParams): Promise<ListResponse<WebhookEndpoint>> {
    return this.http.get<ListResponse<WebhookEndpoint>>("/webhook-endpoints", params as Record<string, unknown>);
  }

  async get(id: string): Promise<WebhookEndpoint> {
    return this.http.get<WebhookEndpoint>(`/webhook-endpoints/${id}`);
  }

  async update(id: string, params: UpdateWebhookEndpointParams): Promise<WebhookEndpoint> {
    return this.http.patch<WebhookEndpoint>(`/webhook-endpoints/${id}`, params);
  }

  async del(id: string): Promise<void> {
    return this.http.delete<void>(`/webhook-endpoints/${id}`);
  }

  async rotateSecret(id: string): Promise<{ secret: string }> {
    return this.http.post<{ secret: string }>(`/webhook-endpoints/${id}/rotate-secret`);
  }
}
