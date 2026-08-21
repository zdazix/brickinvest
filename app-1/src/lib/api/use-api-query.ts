import { type QueryKey, useQuery } from "@tanstack/react-query";
import type { AxiosResponse } from "axios";
import { useEffect, useRef } from "react";
import { toast } from "sonner";

import { getApiErrorMessage } from "@/lib/api/api-error";

type QueryRequest<TData> = (
  signal: AbortSignal,
) => Promise<AxiosResponse<TData>>;

type ApiQueryOptions = { readonly errorMessage?: string };

export const useApiQuery = <TData>(
  queryKey: QueryKey,
  request: QueryRequest<TData>,
  options: ApiQueryOptions = {},
) => {
  const query = useQuery({
    queryFn: async ({ signal }) => (await request(signal)).data,
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
        getApiErrorMessage(query.error, "The data could not be loaded."),
    );
  }, [query.error, query.errorUpdatedAt]);

  return query;
};
