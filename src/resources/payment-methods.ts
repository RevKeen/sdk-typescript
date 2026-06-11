import { HttpClient } from "../core/http.js";
import { ListResponse, ListParams } from "../core/types.js";

export interface PaymentMethod {
  id: string;
  customer_id?: string;
  type: string;
  card?: {
    brand: string;
    last4: string;
    exp_month: number;
    exp_year: number;
    [key: string]: unknown;
  };
  metadata?: Record<string, string>;
  created_at: string;
  updated_at: string;
  [key: string]: unknown;
}

export interface UpdatePaymentMethodParams {
  metadata?: Record<string, string>;
  [key: string]: unknown;
}

export interface AttachPaymentMethodParams {
  customer_id: string;
  [key: string]: unknown;
}

export class PaymentMethodsResource {
  constructor(private http: HttpClient) {}

  async list(params?: ListParams & { customer_id?: string; type?: string }): Promise<ListResponse<PaymentMethod>> {
    return this.http.get<ListResponse<PaymentMethod>>("/payment-methods", params as Record<string, unknown>);
  }

  async get(id: string): Promise<PaymentMethod> {
    return this.http.get<PaymentMethod>(`/payment-methods/${id}`);
  }

  async update(id: string, params: UpdatePaymentMethodParams): Promise<PaymentMethod> {
    return this.http.post<PaymentMethod>(`/payment-methods/${id}`, params);
  }

  async attach(id: string, params: AttachPaymentMethodParams): Promise<PaymentMethod> {
    return this.http.post<PaymentMethod>(`/payment-methods/${id}/attach`, params);
  }

  async detach(id: string): Promise<PaymentMethod> {
    return this.http.post<PaymentMethod>(`/payment-methods/${id}/detach`);
  }
}
