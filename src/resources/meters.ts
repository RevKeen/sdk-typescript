import { HttpClient } from "../core/http.js";
import { ListResponse, ListParams } from "../core/types.js";

export interface Meter {
  id: string;
  name: string;
  event_name: string;
  aggregation_type: string;
  metadata?: Record<string, string>;
  created_at: string;
  updated_at: string;
  [key: string]: unknown;
}

export interface CreateMeterParams {
  name: string;
  event_name: string;
  aggregation_type: string;
  metadata?: Record<string, string>;
  [key: string]: unknown;
}

export interface UpdateMeterParams {
  name?: string;
  metadata?: Record<string, string>;
  [key: string]: unknown;
}

export interface MeterPrice {
  id: string;
  meter_id: string;
  amount: number;
  currency: string;
  tiers?: Array<{ [key: string]: unknown }>;
  active: boolean;
  [key: string]: unknown;
}

export interface CreateMeterPriceParams {
  amount: number;
  currency: string;
  tiers?: Array<{ [key: string]: unknown }>;
  [key: string]: unknown;
}

export interface UpdateMeterPriceParams {
  amount?: number;
  tiers?: Array<{ [key: string]: unknown }>;
  [key: string]: unknown;
}

export class MetersResource {
  constructor(private http: HttpClient) {}

  async create(params: CreateMeterParams): Promise<Meter> {
    return this.http.post<Meter>("/meters", params);
  }

  async list(params?: ListParams): Promise<ListResponse<Meter>> {
    return this.http.get<ListResponse<Meter>>("/meters", params as Record<string, unknown>);
  }

  async get(id: string): Promise<Meter> {
    return this.http.get<Meter>(`/meters/${id}`);
  }

  async update(id: string, params: UpdateMeterParams): Promise<Meter> {
    return this.http.patch<Meter>(`/meters/${id}`, params);
  }

  async createPrice(meterId: string, params: CreateMeterPriceParams): Promise<MeterPrice> {
    return this.http.post<MeterPrice>(`/meters/${meterId}/prices`, params);
  }

  async listPrices(meterId: string, params?: ListParams): Promise<ListResponse<MeterPrice>> {
    return this.http.get<ListResponse<MeterPrice>>(`/meters/${meterId}/prices`, params as Record<string, unknown>);
  }

  async updatePrice(meterId: string, priceId: string, params: UpdateMeterPriceParams): Promise<MeterPrice> {
    return this.http.patch<MeterPrice>(`/meters/${meterId}/prices/${priceId}`, params);
  }

  async deactivatePrice(meterId: string, priceId: string): Promise<MeterPrice> {
    return this.http.post<MeterPrice>(`/meters/${meterId}/prices/${priceId}/deactivate`);
  }
}
