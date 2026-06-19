import { HttpClient } from "../core/http.js";
import { ListResponse, ListParams } from "../core/types.js";

export interface Subscription {
  id: string;
  customer_id: string;
  status: string;
  current_period_start: string;
  current_period_end: string;
  cancel_at_period_end?: boolean;
  metadata?: Record<string, string>;
  created_at: string;
  updated_at: string;
  [key: string]: unknown;
}

export interface CreateSubscriptionParams {
  customer_id: string;
  price_id?: string;
  items?: Array<{ price_id: string; quantity?: number; [key: string]: unknown }>;
  metadata?: Record<string, string>;
  [key: string]: unknown;
}

export interface UpdateSubscriptionParams {
  metadata?: Record<string, string>;
  cancel_at_period_end?: boolean;
  [key: string]: unknown;
}

export interface ChangePlanParams {
  price_id: string;
  proration_behavior?: string;
  [key: string]: unknown;
}

export interface ChangeQuantityParams {
  quantity: number;
  [key: string]: unknown;
}

export interface SubscriptionItem {
  id: string;
  subscription_id: string;
  price_id: string;
  quantity: number;
  [key: string]: unknown;
}

export interface CreateSubscriptionItemParams {
  price_id: string;
  quantity?: number;
  [key: string]: unknown;
}

export interface UpdateSubscriptionItemParams {
  quantity?: number;
  price_id?: string;
  [key: string]: unknown;
}

export class SubscriptionsResource {
  constructor(private http: HttpClient) {}

  async create(params: CreateSubscriptionParams): Promise<Subscription> {
    return this.http.post<Subscription>("/subscriptions", params);
  }

  async list(params?: ListParams & { customer_id?: string; status?: string }): Promise<ListResponse<Subscription>> {
    return this.http.get<ListResponse<Subscription>>("/subscriptions", params as Record<string, unknown>);
  }

  async get(id: string): Promise<Subscription> {
    return this.http.get<Subscription>(`/subscriptions/${id}`);
  }

  async update(id: string, params: UpdateSubscriptionParams): Promise<Subscription> {
    return this.http.patch<Subscription>(`/subscriptions/${id}`, params);
  }

  async del(id: string): Promise<Subscription> {
    return this.http.delete<Subscription>(`/subscriptions/${id}`);
  }

  async changePlan(id: string, params: ChangePlanParams): Promise<Subscription> {
    return this.http.post<Subscription>(`/subscriptions/${id}/change-plan`, params);
  }

  async changeQuantity(id: string, params: ChangeQuantityParams): Promise<Subscription> {
    return this.http.post<Subscription>(`/subscriptions/${id}/change-quantity`, params);
  }

  async previewRenewal(id: string): Promise<unknown> {
    return this.http.post<unknown>(`/subscriptions/${id}/preview-renewal`);
  }

  async pause(id: string, params?: Record<string, unknown>): Promise<Subscription> {
    return this.http.post<Subscription>(`/subscriptions/${id}/pause`, params);
  }

  async resume(id: string): Promise<Subscription> {
    return this.http.post<Subscription>(`/subscriptions/${id}/resume`);
  }

  async cancel(id: string, params?: Record<string, unknown>): Promise<Subscription> {
    return this.http.post<Subscription>(`/subscriptions/${id}/cancel`, params);
  }

  async reactivate(id: string): Promise<Subscription> {
    return this.http.post<Subscription>(`/subscriptions/${id}/reactivate`);
  }

  async listItems(subscriptionId: string, params?: ListParams): Promise<ListResponse<SubscriptionItem>> {
    return this.http.get<ListResponse<SubscriptionItem>>(`/subscriptions/${subscriptionId}/items`, params as Record<string, unknown>);
  }

  async createItem(subscriptionId: string, params: CreateSubscriptionItemParams): Promise<SubscriptionItem> {
    return this.http.post<SubscriptionItem>(`/subscriptions/${subscriptionId}/items`, params);
  }

  async updateItem(subscriptionId: string, itemId: string, params: UpdateSubscriptionItemParams): Promise<SubscriptionItem> {
    return this.http.patch<SubscriptionItem>(`/subscriptions/${subscriptionId}/items/${itemId}`, params);
  }

  async deleteItem(subscriptionId: string, itemId: string): Promise<void> {
    return this.http.delete<void>(`/subscriptions/${subscriptionId}/items/${itemId}`);
  }
}
