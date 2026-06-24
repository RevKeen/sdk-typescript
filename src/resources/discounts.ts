import { HttpClient } from "../core/http.js";
import { ListResponse, ListParams } from "../core/types.js";

export interface Discount {
  id: string;
  name: string;
  type: string;
  amount?: number;
  percentage?: number;
  currency?: string;
  active: boolean;
  code?: string;
  max_redemptions?: number;
  times_redeemed?: number;
  expires_at?: string;
  metadata?: Record<string, string>;
  created_at: string;
  updated_at: string;
  [key: string]: unknown;
}

export interface CreateDiscountParams {
  name: string;
  type: string;
  amount?: number;
  percentage?: number;
  currency?: string;
  code?: string;
  max_redemptions?: number;
  expires_at?: string;
  metadata?: Record<string, string>;
  [key: string]: unknown;
}

export interface UpdateDiscountParams {
  name?: string;
  active?: boolean;
  max_redemptions?: number;
  expires_at?: string;
  metadata?: Record<string, string>;
  [key: string]: unknown;
}

export class DiscountsResource {
  constructor(private http: HttpClient) {}

  async create(params: CreateDiscountParams): Promise<Discount> {
    return this.http.post<Discount>("/discounts", params);
  }

  async list(params?: ListParams & { active?: boolean }): Promise<ListResponse<Discount>> {
    return this.http.get<ListResponse<Discount>>("/discounts", params as Record<string, unknown>);
  }

  async get(id: string): Promise<Discount> {
    return this.http.get<Discount>(`/discounts/${id}`);
  }

  async update(id: string, params: UpdateDiscountParams): Promise<Discount> {
    return this.http.patch<Discount>(`/discounts/${id}`, params);
  }

  async del(id: string): Promise<void> {
    return this.http.delete<void>(`/discounts/${id}`);
  }
}
