import type { AxiosResponse } from "axios";

import { waitFor } from "@/lib/api/delay";
import { createMockResponse } from "@/lib/api/mock-response";

export type Profile = {
  readonly accountType: "" | "business" | "personal";
  readonly dateOfBirth: string;
  readonly displayName: string;
  readonly email: string;
  readonly role: string;
  readonly bio: string;
  readonly image: string;
};

const profile: Profile = {
  accountType: "",
  dateOfBirth: "",
  displayName: "",
  email: "",
  role: "",
  bio: "",
  image: `${import.meta.env.BASE_URL}images/placeholder.svg`,
};

export const getProfile = async (
  signal: AbortSignal,
): Promise<AxiosResponse<Profile>> => {
  await waitFor(500, signal);
  return createMockResponse(profile);
};

export const updateProfile = async (
  values: Omit<Profile, "image">,
): Promise<AxiosResponse<{ readonly updated: true }>> => {
  void values;
  await waitFor(650);
  return createMockResponse({ updated: true });
};
