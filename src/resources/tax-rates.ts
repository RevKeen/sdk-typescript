import { HttpClient } from "../core/http.js";
import { ListResponse, ListParams } from "../core/types.js";

export interface TaxRate {
  id: string;
  display_name: string;
  percentage: number;
  inclusive: boolean;
  active: boolean;
  jurisdiction?: string;
  description?: string;
  metadata?: Record<string, string>;
  created_at: string;
  updated_at: string;
  [key: string]: unknown;
}

export interface CreateTaxRateParams {
  display_name: string;
  percentage: number;
  inclusive?: boolean;
  jurisdiction?: string;
  description?: string;
  metadata?: Record<string, string>;
  [key: string]: unknown;
}

export interface UpdateTaxRateParams {
  display_name?: string;
  active?: boolean;
  description?: string;
  metadata?: Record<string, string>;
  [key: string]: unknown;
}

export class TaxRatesResource {
  constructor(private http: HttpClient) {}

  async create(params: CreateTaxRateParams): Promise<TaxRate> {
    return this.http.post<TaxRate>("/tax-rates", params);
  }

  async list(params?: ListParams & { active?: boolean }): Promise<ListResponse<TaxRate>> {
    return this.http.get<ListResponse<TaxRate>>("/tax-rates", params as Record<string, unknown>);
  }

  async get(id: string): Promise<TaxRate> {
    return this.http.get<TaxRate>(`/tax-rates/${id}`);
  }

  async update(id: string, params: UpdateTaxRateParams): Promise<TaxRate> {
    return this.http.patch<TaxRate>(`/tax-rates/${id}`, params);
  }

  async archive(id: string): Promise<TaxRate> {
    return this.http.delete<TaxRate>(`/tax-rates/${id}`);
  }
}
