export const DEFAULT_PAGE = 1;
export const DEFAULT_PAGE_SIZE = 6;

export type PaginationMetadata = {
  readonly page: number;
  readonly pageSize: number;
  readonly totalItems: number;
  readonly totalPages: number;
};

export type PaginatedResponse<TItem> = {
  readonly items: readonly TItem[];
  readonly pagination: PaginationMetadata;
};
