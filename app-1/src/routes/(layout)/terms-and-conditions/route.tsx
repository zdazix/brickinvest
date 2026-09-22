import { createFileRoute } from "@tanstack/react-router";

import { TermsAndConditionsPage } from "@/pages/legal/TermsAndConditionsPage";

export const Route = createFileRoute("/(layout)/terms-and-conditions")({
  component: TermsAndConditionsPage,
  head: () => ({
    meta: [
      { title: "Warunki korzystania | BRICKINVEST" },
      {
        name: "description",
        content:
          "Warunki korzystania z BRICKINVEST.ES zarządzanego przez Unicom Innovaciones S.L. w Hiszpanii.",
      },
    ],
  }),
});
