import { createFileRoute } from "@tanstack/react-router";

import { TermsAndConditionsPage } from "@/pages/legal/TermsAndConditionsPage";

export const Route = createFileRoute("/(layout)/terms")({
  component: TermsAndConditionsPage,
  head: () => ({
    meta: [
      { title: "Terms and Conditions | BRICKINVEST" },
      {
        name: "description",
        content: "Terms and conditions of the BRICKINVEST website.",
      },
    ],
  }),
});
