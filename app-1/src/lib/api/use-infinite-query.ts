import {
  type InfiniteData,
  type QueryKey,
  useInfiniteQuery as useTanStackInfiniteQuery,
} from "@tanstack/react-query";
import type { AxiosResponse } from "axios";
import { useEffect, useRef } from "react";
import { toast } from "sonner";

import { getApiErrorMessage } from "@/lib/api/api-error";
import { DEFAULT_PAGE, type PaginatedResponse } from "@/lib/api/pagination";

type InfiniteQueryRequest<TItem> = (
  page: number,
  signal: AbortSignal,
) => Promise<AxiosResponse<PaginatedResponse<TItem>>>;

type InfiniteQueryOptions = { readonly errorMessage?: string };

export const useInfiniteQuery = <TItem>(
  queryKey: QueryKey,
  request: InfiniteQueryRequest<TItem>,
  options: InfiniteQueryOptions = {},
) => {
  const query = useTanStackInfiniteQuery<
    PaginatedResponse<TItem>,
    Error,
    InfiniteData<PaginatedResponse<TItem>>,
    QueryKey,
    number
  >({
    getNextPageParam: (lastPage) =>
      lastPage.pagination.page < lastPage.pagination.totalPages
        ? lastPage.pagination.page + 1
        : undefined,
    initialPageParam: DEFAULT_PAGE,
    queryFn: async ({ pageParam, signal }) =>
      (await request(pageParam, signal)).data,
    queryKey,
  });
  const errorMessageRef = useRef(options.errorMessage);
  const handledErrorUpdatedAt = useRef(query.errorUpdatedAt);

  useEffect(() => {
    errorMessageRef.current = options.errorMessage;
  }, [options.errorMessage]);

  useEffect(() => {
    if (!query.error || query.errorUpdatedAt <= handledErrorUpdatedAt.current) {
      return;
    }

    handledErrorUpdatedAt.current = query.errorUpdatedAt;
    toast.error(
      errorMessageRef.current ||
        getApiErrorMessage(query.error, "More items could not be loaded."),
    );
  }, [query.error, query.errorUpdatedAt]);

  return {
    ...query,
    items: query.data?.pages.flatMap((page) => page.items) ?? [],
  };
};
