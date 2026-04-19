export interface ListResponse<T> {
  data: T[];
  has_more: boolean;
  total_count?: number;
}

export interface ListParams {
  limit?: number;
  offset?: number;
  cursor?: string;
}

export interface PaginatedResponse<T> {
  data: T[];
  pagination: {
    total: number;
    limit: number;
    offset: number;
    has_more: boolean;
  };
}
