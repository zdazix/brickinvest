import { createFileRoute } from "@tanstack/react-router";

import { TermsAndConditionsPage } from "@/pages/legal/TermsAndConditionsPage";

export const Route = createFileRoute("/(layout)/terms-and-conditions")({
  component: TermsAndConditionsPage,
  head: () => ({
    meta: [
      { title: "Nutzungsbedingungen | BRICKINVEST" },
      {
        name: "description",
        content:
          "Nutzungsbedingungen für BRICKINVEST.ES, betrieben von Unicom Innovaciones S.L. in Spanien.",
      },
    ],
  }),
});
