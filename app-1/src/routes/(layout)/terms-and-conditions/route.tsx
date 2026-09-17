import { createFileRoute } from "@tanstack/react-router";

import { TermsAndConditionsPage } from "@/pages/legal/TermsAndConditionsPage";

export const Route = createFileRoute("/(layout)/terms-and-conditions")({
  component: TermsAndConditionsPage,
  head: () => ({
    meta: [
      { title: "Terms & Conditions | BRICKINVEST" },
      {
        name: "description",
        content:
          "Website Terms & Conditions for BRICKINVEST.ES, operated by Unicom Innovaciones S.L. in Spain.",
      },
    ],
  }),
});
