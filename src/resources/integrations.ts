import { HttpClient } from "../core/http.js";
import { ListResponse, ListParams } from "../core/types.js";

export interface Integration {
  id: string;
  provider: string;
  status: string;
  sync_enabled?: boolean;
  sync_interval?: string;
  metadata?: Record<string, string>;
  created_at: string;
  updated_at: string;
  [key: string]: unknown;
}

export interface SyncState {
  provider: string;
  entity_type: string;
  last_sync_at?: string;
  status: string;
  [key: string]: unknown;
}

export interface SyncLog {
  id: string;
  provider: string;
  entity_type: string;
  status: string;
  records_processed?: number;
  errors?: number;
  created_at: string;
  [key: string]: unknown;
}

export interface SyncStats {
  total_synced: number;
  last_sync_at?: string;
  errors: number;
  [key: string]: unknown;
}

export interface ProductMapping {
  external_id: string;
  product_id: string;
  [key: string]: unknown;
}

export interface PaymentMapping {
  external_method: string;
  payment_method_id: string;
  [key: string]: unknown;
}

export interface IntegrationPaymentMethod {
  id: string;
  name: string;
  [key: string]: unknown;
}

export class IntegrationsResource {
  constructor(private http: HttpClient) {}

  async list(params?: ListParams): Promise<ListResponse<Integration>> {
    return this.http.get<ListResponse<Integration>>("/integrations", params as Record<string, unknown>);
  }

  async get(provider: string): Promise<Integration> {
    return this.http.get<Integration>(`/integrations/${provider}`);
  }

  async activate(provider: string, params?: Record<string, unknown>): Promise<Integration> {
    return this.http.post<Integration>(`/integrations/${provider}/activate`, params);
  }

  async deactivate(provider: string): Promise<Integration> {
    return this.http.post<Integration>(`/integrations/${provider}/deactivate`);
  }

  async test(provider: string): Promise<{ success: boolean; message?: string }> {
    return this.http.post<{ success: boolean; message?: string }>(`/integrations/${provider}/test`);
  }

  async sync(provider: string, params?: Record<string, unknown>): Promise<unknown> {
    return this.http.post<unknown>(`/integrations/${provider}/sync`, params);
  }

  async updateStatus(provider: string, params: { status: string; [key: string]: unknown }): Promise<Integration> {
    return this.http.put<Integration>(`/integrations/${provider}/status`, params);
  }

  async updateSyncToggle(provider: string, params: { enabled: boolean; [key: string]: unknown }): Promise<Integration> {
    return this.http.put<Integration>(`/integrations/${provider}/sync-toggle`, params);
  }

  async updateSyncInterval(provider: string, params: { interval: string; [key: string]: unknown }): Promise<Integration> {
    return this.http.put<Integration>(`/integrations/${provider}/sync-interval`, params);
  }

  async updateInvoiceLookback(provider: string, params: { days: number; [key: string]: unknown }): Promise<Integration> {
    return this.http.put<Integration>(`/integrations/${provider}/invoice-lookback`, params);
  }

  async updatePaymentMappings(provider: string, params: { mappings: PaymentMapping[]; [key: string]: unknown }): Promise<unknown> {
    return this.http.put<unknown>(`/integrations/${provider}/payment-mappings`, params);
  }

  async listPaymentMethods(provider: string): Promise<ListResponse<IntegrationPaymentMethod>> {
    return this.http.get<ListResponse<IntegrationPaymentMethod>>(`/integrations/${provider}/payment-methods`);
  }

  async createPaymentMethod(provider: string, params: Record<string, unknown>): Promise<IntegrationPaymentMethod> {
    return this.http.post<IntegrationPaymentMethod>(`/integrations/${provider}/payment-methods`, params);
  }

  async getSyncStates(provider: string): Promise<ListResponse<SyncState>> {
    return this.http.get<ListResponse<SyncState>>(`/integrations/${provider}/sync-states`);
  }

  async listSyncLogs(provider: string, params?: ListParams): Promise<ListResponse<SyncLog>> {
    return this.http.get<ListResponse<SyncLog>>(`/integrations/${provider}/sync-logs`, params as Record<string, unknown>);
  }

  async getSyncLog(provider: string, logId: string): Promise<SyncLog> {
    return this.http.get<SyncLog>(`/integrations/${provider}/sync-logs/${logId}`);
  }

  async getSyncStats(provider: string, integrationId: string): Promise<SyncStats> {
    return this.http.get<SyncStats>(`/integrations/${provider}/sync-stats/${integrationId}`);
  }

  async getSyncStatsByType(provider: string, integrationId: string): Promise<unknown> {
    return this.http.get<unknown>(`/integrations/${provider}/sync-stats-by-type/${integrationId}`);
  }

  async retrySyncLog(provider: string, logId: string): Promise<SyncLog> {
    return this.http.post<SyncLog>(`/integrations/${provider}/sync-logs/${logId}/retry`);
  }

  async batchRetrySyncLogs(provider: string, params: { log_ids: string[]; [key: string]: unknown }): Promise<unknown> {
    return this.http.post<unknown>(`/integrations/${provider}/sync-logs/batch-retry`, params);
  }

  async listPackages(provider: string, params?: ListParams): Promise<ListResponse<unknown>> {
    return this.http.get<ListResponse<unknown>>(`/integrations/${provider}/packages`, params as Record<string, unknown>);
  }

  async listProductMappings(provider: string): Promise<ListResponse<ProductMapping>> {
    return this.http.get<ListResponse<ProductMapping>>(`/integrations/${provider}/product-mappings`);
  }

  async updateProductMappings(provider: string, params: { mappings: ProductMapping[]; [key: string]: unknown }): Promise<unknown> {
    return this.http.put<unknown>(`/integrations/${provider}/product-mappings`, params);
  }

  async deleteProductMapping(provider: string, externalId: string): Promise<void> {
    return this.http.delete<void>(`/integrations/${provider}/product-mappings/${externalId}`);
  }

  async listUnmappedAttempts(provider: string, params?: ListParams): Promise<ListResponse<unknown>> {
    return this.http.get<ListResponse<unknown>>(`/integrations/${provider}/unmapped-attempts`, params as Record<string, unknown>);
  }
}
