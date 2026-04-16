import { HttpClient } from "../core/http.js";
import { ListResponse, ListParams } from "../core/types.js";

export interface Order {
  id: string;
  customer_id: string;
  status: string;
  amount: number;
  currency: string;
  items?: Array<{ [key: string]: unknown }>;
  metadata?: Record<string, string>;
  created_at: string;
  updated_at: string;
  [key: string]: unknown;
}

export interface CreateOrderParams {
  customer_id: string;
  items?: Array<{ [key: string]: unknown }>;
  metadata?: Record<string, string>;
  [key: string]: unknown;
}

export interface PayOrderParams {
  payment_method_id?: string;
  [key: string]: unknown;
}

export interface FulfillOrderParams {
  tracking_number?: string;
  carrier?: string;
  [key: string]: unknown;
}

export class OrdersResource {
  constructor(private http: HttpClient) {}

  async create(params: CreateOrderParams): Promise<Order> {
    return this.http.post<Order>("/orders", params);
  }

  async list(params?: ListParams & { customer_id?: string; status?: string }): Promise<ListResponse<Order>> {
    return this.http.get<ListResponse<Order>>("/orders", params as Record<string, unknown>);
  }

  async get(id: string): Promise<Order> {
    return this.http.get<Order>(`/orders/${id}`);
  }

  async pay(id: string, params?: PayOrderParams): Promise<Order> {
    return this.http.post<Order>(`/orders/${id}/pay`, params);
  }

  async cancel(id: string): Promise<Order> {
    return this.http.post<Order>(`/orders/${id}/cancel`);
  }

  async fulfill(id: string, params?: FulfillOrderParams): Promise<Order> {
    return this.http.post<Order>(`/orders/${id}/fulfill`, params);
  }
}
