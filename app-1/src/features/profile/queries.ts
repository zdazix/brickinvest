import { getProfile, updateProfile } from "@/features/profile/api";
import { useApiMutation } from "@/lib/api/use-api-mutation";
import { useApiQuery } from "@/lib/api/use-api-query";

export const profileQueryKey = ["profile"] as const;

export const useProfileQuery = () => useApiQuery(profileQueryKey, getProfile);

export const useProfileMutation = () =>
  useApiMutation(updateProfile, {
    successMessage: "Profiländerungen gespeichert.",
  });
