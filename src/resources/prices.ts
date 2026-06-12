import { HttpClient } from "../core/http.js";
import { ListResponse, ListParams } from "../core/types.js";

export interface PriceTier {
  up_to: number | null;
  unit_amount_minor: number | null;
  flat_amount_minor: number | null;
}

export interface TransformQuantity {
  divide_by: number;
  round: "up" | "down";
}

export interface Price {
  id: string;
  product_id: string;
  amount: number;
  currency: string;
  unit_amount: number | null;
  type: "one_time" | "recurring";
  pricing_model: "fixed" | "pay_what_you_want" | "free";
  interval?: string | null;
  interval_count?: number | null;
  trial_period_days?: number | null;
  active?: boolean;
  nickname?: string | null;
  lookup_key?: string | null;
  billing_scheme: "per_unit" | "tiered";
  tiers_mode?: "graduated" | "volume" | null;
  tiers?: PriceTier[] | null;
  transform_quantity?: TransformQuantity | null;
  metadata?: Record<string, string>;
  created_at: string;
  updated_at: string;
  [key: string]: unknown;
}

export interface CreatePriceParams {
  product_id: string;
  amount: number;
  currency: string;
  type?: "one_time" | "recurring";
  pricing_model?: "fixed" | "pay_what_you_want" | "free";
  interval?: string;
  interval_count?: number;
  trial_period_days?: number;
  nickname?: string;
  lookup_key?: string;
  billing_scheme?: "per_unit" | "tiered";
  tiers_mode?: "graduated" | "volume";
  tiers?: PriceTier[];
  transform_quantity?: TransformQuantity;
  metadata?: Record<string, string>;
  [key: string]: unknown;
}

export interface UpdatePriceParams {
  active?: boolean;
  metadata?: Record<string, string>;
  [key: string]: unknown;
}

export class PricesResource {
  constructor(private http: HttpClient) {}

  async create(params: CreatePriceParams): Promise<Price> {
    return this.http.post<Price>("/prices", params);
  }

  async list(params?: ListParams & { product_id?: string }): Promise<ListResponse<Price>> {
    return this.http.get<ListResponse<Price>>("/prices", params as Record<string, unknown>);
  }

  async get(id: string): Promise<Price> {
    return this.http.get<Price>(`/prices/${id}`);
  }

  async update(id: string, params: UpdatePriceParams): Promise<Price> {
    return this.http.patch<Price>(`/prices/${id}`, params);
  }

  async archive(id: string): Promise<Price> {
    return this.http.delete<Price>(`/prices/${id}`);
  }
}
