import { HttpClient } from "../core/http.js";
import { ListResponse, ListParams } from "../core/types.js";

export interface PaymentIntent {
  id: string;
  amount: number;
  currency: string;
  status: string;
  customer_id?: string;
  payment_method_id?: string;
  metadata?: Record<string, string>;
  created_at: string;
  updated_at: string;
  [key: string]: unknown;
}

export interface CreatePaymentIntentParams {
  amount: number;
  currency: string;
  customer_id?: string;
  payment_method_id?: string;
  metadata?: Record<string, string>;
  [key: string]: unknown;
}

export interface UpdatePaymentIntentParams {
  amount?: number;
  currency?: string;
  payment_method_id?: string;
  metadata?: Record<string, string>;
  [key: string]: unknown;
}

export interface ConfirmPaymentIntentParams {
  payment_method_id?: string;
  [key: string]: unknown;
}

export interface CapturePaymentIntentParams {
  amount_to_capture?: number;
  [key: string]: unknown;
}

export class PaymentIntentsResource {
  constructor(private http: HttpClient) {}

  async create(params: CreatePaymentIntentParams): Promise<PaymentIntent> {
    return this.http.post<PaymentIntent>("/payment-intents", params);
  }

  async list(params?: ListParams & { customer_id?: string; status?: string }): Promise<ListResponse<PaymentIntent>> {
    return this.http.get<ListResponse<PaymentIntent>>("/payment-intents", params as Record<string, unknown>);
  }

  async get(id: string): Promise<PaymentIntent> {
    return this.http.get<PaymentIntent>(`/payment-intents/${id}`);
  }

  async update(id: string, params: UpdatePaymentIntentParams): Promise<PaymentIntent> {
    return this.http.post<PaymentIntent>(`/payment-intents/${id}`, params);
  }

  async confirm(id: string, params?: ConfirmPaymentIntentParams): Promise<PaymentIntent> {
    return this.http.post<PaymentIntent>(`/payment-intents/${id}/confirm`, params);
  }

  async capture(id: string, params?: CapturePaymentIntentParams): Promise<PaymentIntent> {
    return this.http.post<PaymentIntent>(`/payment-intents/${id}/capture`, params);
  }

  async cancel(id: string): Promise<PaymentIntent> {
    return this.http.post<PaymentIntent>(`/payment-intents/${id}/cancel`);
  }
}
