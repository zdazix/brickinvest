import { getContactDetails, sendContactMessage } from "@/features/contact/api";
import { useApiMutation } from "@/lib/api/use-api-mutation";
import { useApiQuery } from "@/lib/api/use-api-query";

export const contactDetailsQueryKey = ["contact-details"] as const;

export const useContactDetailsQuery = () =>
  useApiQuery(contactDetailsQueryKey, getContactDetails);

export const useContactMutation = (onSuccess: () => void) =>
  useApiMutation(sendContactMessage, {
    onSuccess,
    successMessage: "Thanks. Your message has been received.",
  });
