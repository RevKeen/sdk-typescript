import { HttpClient } from "../core/http.js";
import { ListResponse, ListParams } from "../core/types.js";

export interface Product {
  id: string;
  name: string;
  description?: string;
  active?: boolean;
  metadata?: Record<string, string>;
  created_at: string;
  updated_at: string;
  [key: string]: unknown;
}

export interface CreateProductParams {
  name: string;
  description?: string;
  active?: boolean;
  metadata?: Record<string, string>;
  [key: string]: unknown;
}

export interface UpdateProductParams {
  name?: string;
  description?: string;
  active?: boolean;
  metadata?: Record<string, string>;
  [key: string]: unknown;
}

export class ProductsResource {
  constructor(private http: HttpClient) {}

  async create(params: CreateProductParams): Promise<Product> {
    return this.http.post<Product>("/products", params);
  }

  async list(params?: ListParams): Promise<ListResponse<Product>> {
    return this.http.get<ListResponse<Product>>("/products", params as Record<string, unknown>);
  }

  async get(id: string): Promise<Product> {
    return this.http.get<Product>(`/products/${id}`);
  }

  async update(id: string, params: UpdateProductParams): Promise<Product> {
    return this.http.patch<Product>(`/products/${id}`, params);
  }

  async upsertExternal(source: string, externalId: string, params: CreateProductParams): Promise<Product> {
    return this.http.put<Product>(`/products/external/${source}/${externalId}`, params);
  }

  async externalBatch(params: unknown): Promise<unknown> {
    return this.http.put<unknown>("/products/external/batch", params);
  }
}
