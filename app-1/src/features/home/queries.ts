import { getHomeContent } from "@/features/home/api";
import { useApiQuery } from "@/lib/api/use-api-query";

export const homeQueryKey = ["home-content"] as const;

export const useHomeQuery = () => useApiQuery(homeQueryKey, getHomeContent);
