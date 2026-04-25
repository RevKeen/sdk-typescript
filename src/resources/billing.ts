import { HttpClient } from "../core/http.js";

export interface BillingPreview {
  amount: number;
  currency: string;
  line_items: Array<{ [key: string]: unknown }>;
  [key: string]: unknown;
}

export interface BillingPreviewParams {
  customer_id?: string;
  subscription_id?: string;
  price_id?: string;
  quantity?: number;
  [key: string]: unknown;
}

export interface BillingInterval {
  id: string;
  interval: string;
  interval_count: number;
  [key: string]: unknown;
}

export interface AnchorRule {
  id: string;
  name: string;
  anchor_day?: number;
  [key: string]: unknown;
}

export class BillingResource {
  constructor(private http: HttpClient) {}

  async preview(params: BillingPreviewParams): Promise<BillingPreview> {
    return this.http.post<BillingPreview>("/billing/preview", params);
  }

  async listIntervals(): Promise<BillingInterval[]> {
    return this.http.get<BillingInterval[]>("/billing/intervals");
  }

  async listAnchorRules(): Promise<AnchorRule[]> {
    return this.http.get<AnchorRule[]>("/billing/anchor-rules");
  }
}
