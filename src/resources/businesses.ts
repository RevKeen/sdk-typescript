import { HttpClient } from "../core/http.js";
import { ListResponse, ListParams } from "../core/types.js";

export interface Business {
  id: string;
  name: string;
  email?: string;
  phone?: string;
  address?: {
    line1?: string;
    line2?: string;
    city?: string;
    state?: string;
    postal_code?: string;
    country?: string;
    [key: string]: unknown;
  };
  tax_id?: string;
  metadata?: Record<string, string>;
  created_at: string;
  updated_at: string;
  [key: string]: unknown;
}

export interface CreateBusinessParams {
  name: string;
  email?: string;
  phone?: string;
  address?: {
    line1?: string;
    line2?: string;
    city?: string;
    state?: string;
    postal_code?: string;
    country?: string;
    [key: string]: unknown;
  };
  tax_id?: string;
  metadata?: Record<string, string>;
  [key: string]: unknown;
}

export class BusinessesResource {
  constructor(private http: HttpClient) {}

  async create(params: CreateBusinessParams): Promise<Business> {
    return this.http.post<Business>("/businesses", params);
  }

  async list(params?: ListParams): Promise<ListResponse<Business>> {
    return this.http.get<ListResponse<Business>>("/businesses", params as Record<string, unknown>);
  }

  async get(id: string): Promise<Business> {
    return this.http.get<Business>(`/businesses/${id}`);
  }
}
