import { getPrivacySections } from "@/features/privacy/api";
import { useApiQuery } from "@/lib/api/use-api-query";

export const privacyQueryKey = ["privacy-sections"] as const;

export const usePrivacyQuery = () =>
  useApiQuery(privacyQueryKey, getPrivacySections);
