import { HttpClient } from "../core/http.js";
import { ListResponse, ListParams } from "../core/types.js";

export interface Customer {
  id: string;
  name: string;
  email: string;
  phone?: string;
  metadata?: Record<string, string>;
  created_at: string;
  updated_at: string;
  [key: string]: unknown;
}

export interface CreateCustomerParams {
  name: string;
  email: string;
  phone?: string;
  metadata?: Record<string, string>;
  [key: string]: unknown;
}

export interface UpdateCustomerParams {
  name?: string;
  email?: string;
  phone?: string;
  metadata?: Record<string, string>;
  [key: string]: unknown;
}

export class CustomersResource {
  constructor(private http: HttpClient) {}

  async create(params: CreateCustomerParams): Promise<Customer> {
    return this.http.post<Customer>("/customers", params);
  }

  async list(params?: ListParams & { email?: string }): Promise<ListResponse<Customer>> {
    return this.http.get<ListResponse<Customer>>("/customers", params as Record<string, unknown>);
  }

  async get(id: string): Promise<Customer> {
    return this.http.get<Customer>(`/customers/${id}`);
  }

  async update(id: string, params: UpdateCustomerParams): Promise<Customer> {
    return this.http.patch<Customer>(`/customers/${id}`, params);
  }

  async listPaymentMethods(id: string): Promise<ListResponse<unknown>> {
    return this.http.get<ListResponse<unknown>>(`/customers/${id}/payment-methods`);
  }

  async listInvoices(customerId: string, params?: ListParams): Promise<ListResponse<unknown>> {
    return this.http.get<ListResponse<unknown>>(`/customers/${customerId}/invoices`, params as Record<string, unknown>);
  }

  async listSubscriptions(customerId: string, params?: ListParams): Promise<ListResponse<unknown>> {
    return this.http.get<ListResponse<unknown>>(`/customers/${customerId}/subscriptions`, params as Record<string, unknown>);
  }

  async listOrders(customerId: string, params?: ListParams): Promise<ListResponse<unknown>> {
    return this.http.get<ListResponse<unknown>>(`/customers/${customerId}/orders`, params as Record<string, unknown>);
  }

  async listPayments(customerId: string, params?: ListParams): Promise<ListResponse<unknown>> {
    return this.http.get<ListResponse<unknown>>(`/customers/${customerId}/payments`, params as Record<string, unknown>);
  }

  async createPortalSession(id: string): Promise<{ url: string }> {
    return this.http.post<{ url: string }>(`/customers/${id}/portal-sessions`);
  }

  async upsertExternal(source: string, externalId: string, params: CreateCustomerParams): Promise<Customer> {
    return this.http.put<Customer>(`/customers/external/${source}/${externalId}`, params);
  }

  async externalBatch(params: unknown): Promise<unknown> {
    return this.http.put<unknown>("/customers/external/batch", params);
  }
}
