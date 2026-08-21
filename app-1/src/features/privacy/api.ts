import type { AxiosResponse } from "axios";

import { waitFor } from "@/lib/api/delay";
import { createMockResponse } from "@/lib/api/mock-response";

export type PrivacySection = {
  readonly title: string;
  readonly body: string;
};

const privacySections: readonly PrivacySection[] = [
  {
    title: "Information we collect",
    body: "Describe the account, usage, device, and communication information the product collects. Replace this generic text with the exact categories used by the service.",
  },
  {
    title: "How information is used",
    body: "Explain the purposes for processing information, including service delivery, support, security, analytics, and product improvement.",
  },
  {
    title: "Sharing and service providers",
    body: "List the categories of processors and partners that receive information, and clarify that information is not sold unless the product actually does so.",
  },
  {
    title: "Retention and security",
    body: "State how retention periods are determined and summarize the organizational and technical safeguards applied to stored information.",
  },
  {
    title: "Your choices and rights",
    body: "Describe how people can access, correct, export, or delete information and how they can manage communication and cookie preferences.",
  },
  {
    title: "Contact",
    body: "Provide the privacy contact, responsible entity, and any regional representative or supervisory authority information required for the product.",
  },
];

export const getPrivacySections = async (
  signal: AbortSignal,
): Promise<AxiosResponse<readonly PrivacySection[]>> => {
  await waitFor(500, signal);
  return createMockResponse(privacySections);
};
