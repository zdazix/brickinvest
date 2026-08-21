import { getNewsPage } from "@/features/news/api";
import { useInfiniteQuery } from "@/lib/api/use-infinite-query";

export const newsQueryKey = ["news"] as const;

export const useNewsInfiniteQuery = () =>
  useInfiniteQuery(newsQueryKey, getNewsPage);
