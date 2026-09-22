import type { AxiosResponse } from "axios";

import { waitFor } from "@/lib/api/delay";
import { createMockResponse } from "@/lib/api/mock-response";

export type ContactMessage = {
  readonly name: string;
  readonly email: string;
  readonly subject: string;
  readonly message: string;
};

export type ContactDetail = {
  readonly type: "email" | "phone" | "location";
  readonly label: string;
};

const contactDetails: readonly ContactDetail[] = [
  { type: "email", label: "hello@example.com" },
  { type: "phone", label: "+1 000 000 0000" },
  { type: "location", label: "Marbella, Hispaania" },
];

export const getContactDetails = async (
  signal: AbortSignal,
): Promise<AxiosResponse<readonly ContactDetail[]>> => {
  await waitFor(450, signal);
  return createMockResponse(contactDetails);
};

export const sendContactMessage = async (
  values: ContactMessage,
): Promise<AxiosResponse<{ readonly accepted: true }>> => {
  void values;
  await waitFor(700);
  return createMockResponse({ accepted: true });
};
