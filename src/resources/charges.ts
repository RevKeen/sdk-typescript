import { HttpClient } from "../core/http.js";
import { ListResponse, ListParams } from "../core/types.js";

export interface Charge {
  id: string;
  amount: number;
  currency: string;
  status: string;
  customer_id?: string;
  payment_method_id?: string;
  invoice_id?: string;
  metadata?: Record<string, string>;
  created_at: string;
  updated_at: string;
  [key: string]: unknown;
}

export interface CreateChargeParams {
  amount: number;
  currency: string;
  customer_id?: string;
  payment_method_id?: string;
  invoice_id?: string;
  description?: string;
  metadata?: Record<string, string>;
  [key: string]: unknown;
}

export interface CaptureChargeParams {
  amount?: number;
  [key: string]: unknown;
}

export interface RefundChargeParams {
  amount?: number;
  reason?: string;
  [key: string]: unknown;
}

export class ChargesResource {
  constructor(private http: HttpClient) {}

  async create(params: CreateChargeParams): Promise<Charge> {
    return this.http.post<Charge>("/charges", params);
  }

  async list(params?: ListParams & { customer_id?: string; status?: string }): Promise<ListResponse<Charge>> {
    return this.http.get<ListResponse<Charge>>("/charges", params as Record<string, unknown>);
  }

  async get(id: string): Promise<Charge> {
    return this.http.get<Charge>(`/charges/${id}`);
  }

  async capture(id: string, params?: CaptureChargeParams): Promise<Charge> {
    return this.http.post<Charge>(`/charges/${id}/capture`, params);
  }

  async refund(id: string, params?: RefundChargeParams): Promise<unknown> {
    return this.http.post<unknown>(`/charges/${id}/refund`, params);
  }
}
