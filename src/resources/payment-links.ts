import { HttpClient } from "../core/http.js";
import { ListResponse, ListParams } from "../core/types.js";

export interface PaymentLink {
  id: string;
  url: string;
  amount?: number;
  currency?: string;
  status: string;
  customer_id?: string;
  metadata?: Record<string, string>;
  created_at: string;
  updated_at: string;
  [key: string]: unknown;
}

export interface CreatePaymentLinkParams {
  amount?: number;
  currency?: string;
  customer_id?: string;
  description?: string;
  metadata?: Record<string, string>;
  [key: string]: unknown;
}

export interface UpdatePaymentLinkStatusParams {
  status: string;
  [key: string]: unknown;
}

export class PaymentLinksResource {
  constructor(private http: HttpClient) {}

  async create(params: CreatePaymentLinkParams): Promise<PaymentLink> {
    return this.http.post<PaymentLink>("/payment-links", params);
  }

  async list(params?: ListParams & { status?: string }): Promise<ListResponse<PaymentLink>> {
    return this.http.get<ListResponse<PaymentLink>>("/payment-links", params as Record<string, unknown>);
  }

  async get(id: string): Promise<PaymentLink> {
    return this.http.get<PaymentLink>(`/payment-links/${id}`);
  }

  async expire(id: string): Promise<PaymentLink> {
    return this.http.post<PaymentLink>(`/payment-links/${id}/expire`);
  }

  async updateStatus(id: string, params: UpdatePaymentLinkStatusParams): Promise<PaymentLink> {
    return this.http.patch<PaymentLink>(`/payment-links/${id}/status`, params);
  }

  async deactivate(id: string): Promise<PaymentLink> {
    return this.http.post<PaymentLink>(`/payment-links/${id}/deactivate`);
  }

  async activate(id: string): Promise<PaymentLink> {
    return this.http.post<PaymentLink>(`/payment-links/${id}/activate`);
  }

  async archive(id: string): Promise<PaymentLink> {
    return this.http.post<PaymentLink>(`/payment-links/${id}/archive`);
  }
}
