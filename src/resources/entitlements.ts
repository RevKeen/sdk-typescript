import { HttpClient } from "../core/http.js";
import { ListResponse, ListParams } from "../core/types.js";

export interface Entitlement {
  id: string;
  customer_id: string;
  feature: string;
  granted_at: string;
  expires_at?: string;
  metadata?: Record<string, string>;
  [key: string]: unknown;
}

export interface GrantEntitlementParams {
  feature: string;
  expires_at?: string;
  metadata?: Record<string, string>;
  [key: string]: unknown;
}

export interface CheckEntitlementParams {
  feature: string;
  [key: string]: unknown;
}

export interface EntitlementCheck {
  entitled: boolean;
  feature: string;
  [key: string]: unknown;
}

export class EntitlementsResource {
  constructor(private http: HttpClient) {}

  async list(customerId: string, params?: ListParams): Promise<ListResponse<Entitlement>> {
    return this.http.get<ListResponse<Entitlement>>(`/customers/${customerId}/entitlements`, params as Record<string, unknown>);
  }

  async grant(customerId: string, params: GrantEntitlementParams): Promise<Entitlement> {
    return this.http.post<Entitlement>(`/customers/${customerId}/entitlements`, params);
  }

  async revokeAll(customerId: string): Promise<void> {
    return this.http.delete<void>(`/customers/${customerId}/entitlements`);
  }

  async check(customerId: string, params: CheckEntitlementParams): Promise<EntitlementCheck> {
    return this.http.get<EntitlementCheck>(`/customers/${customerId}/entitlements/check`, params as Record<string, unknown>);
  }

  async revoke(customerId: string, entitlementId: string): Promise<void> {
    return this.http.delete<void>(`/customers/${customerId}/entitlements/${entitlementId}`);
  }
}
