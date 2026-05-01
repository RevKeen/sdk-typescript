import { HttpClient } from "../core/http.js";
import { ListResponse, ListParams } from "../core/types.js";

export interface UsageEvent {
  id: string;
  meter_id: string;
  customer_id: string;
  value: number;
  timestamp: string;
  properties?: Record<string, unknown>;
  [key: string]: unknown;
}

export interface CreateUsageEventParams {
  meter_id: string;
  customer_id: string;
  value: number;
  timestamp?: string;
  properties?: Record<string, unknown>;
  [key: string]: unknown;
}

export interface UsageDryRunParams {
  meter_id: string;
  customer_id: string;
  value: number;
  timestamp?: string;
  properties?: Record<string, unknown>;
  [key: string]: unknown;
}

export interface UsageDryRunResult {
  cost: number;
  currency: string;
  breakdown?: Array<{ [key: string]: unknown }>;
  [key: string]: unknown;
}

export interface UsageAggregate {
  meter_id: string;
  value: number;
  start_time: string;
  end_time: string;
  [key: string]: unknown;
}

export interface UsageBalance {
  customer_id: string;
  balances: Array<{ meter_id: string; value: number; [key: string]: unknown }>;
  [key: string]: unknown;
}

export class UsageResource {
  constructor(private http: HttpClient) {}

  async create(params: CreateUsageEventParams): Promise<UsageEvent> {
    return this.http.post<UsageEvent>("/usage-events", params);
  }

  async list(params?: ListParams & { meter_id?: string; customer_id?: string }): Promise<ListResponse<UsageEvent>> {
    return this.http.get<ListResponse<UsageEvent>>("/usage-events", params as Record<string, unknown>);
  }

  async dryRun(params: UsageDryRunParams): Promise<UsageDryRunResult> {
    return this.http.post<UsageDryRunResult>("/usage-events/dry-run", params);
  }

  async aggregate(meterId: string, params?: Record<string, unknown>): Promise<UsageAggregate> {
    return this.http.get<UsageAggregate>(`/usage-events/aggregate/${meterId}`, params);
  }

  async getBalance(params?: Record<string, unknown>): Promise<UsageBalance> {
    return this.http.get<UsageBalance>("/usage/balance", params);
  }
}
