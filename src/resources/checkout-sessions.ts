import { HttpClient } from "../core/http.js";

export type CheckoutSessionAllowedMethod = "card" | "in_store";

export interface CheckoutSession {
  id: string;
  object?: "checkout_session";
  url: string;
  status: string;
  mode?: string | null;
  customer_id?: string;
  amount?: number | null;
  amount_total?: number | null;
  amountMinor?: number;
  currency?: string | null;
  success_url?: string;
  cancel_url?: string;
  publicToken?: string;
  invoice_id?: string | null;
  subscription_id?: string | null;
  payment_intent_id?: string | null;
  expires_at?: string | null;
  allowed_methods?: CheckoutSessionAllowedMethod[];
  selected_method?: CheckoutSessionAllowedMethod | null;
  metadata?: Record<string, string>;
  created_at: string;
  updated_at: string;
  [key: string]: unknown;
}

export interface CreateCheckoutSessionParams {
  invoiceId?: string;
  productId?: string;
  amountMinor?: number;
  currency?: string;
  successUrl?: string;
  cancelUrl?: string;
  allowedMethods?: CheckoutSessionAllowedMethod[];
  companionDeviceId?: string;
  [key: string]: unknown;
}

export interface CheckoutSessionResponse {
  data: CheckoutSession;
  requestId?: string;
}

export interface ExpireCheckoutSessionResponse {
  data: {
    id: string;
    status: "expired";
    expiredAt: string;
  };
  requestId?: string;
}

export class CheckoutSessionsResource {
  constructor(private http: HttpClient) {}

  async create(params: CreateCheckoutSessionParams): Promise<CheckoutSessionResponse> {
    return this.http.post<CheckoutSessionResponse>("/checkout-sessions", params);
  }

  async retrieve(id: string): Promise<CheckoutSessionResponse> {
    return this.http.get<CheckoutSessionResponse>(`/checkout-sessions/${id}`);
  }

  async expire(id: string): Promise<ExpireCheckoutSessionResponse> {
    return this.http.post<ExpireCheckoutSessionResponse>(`/checkout-sessions/${id}/expire`);
  }
}
