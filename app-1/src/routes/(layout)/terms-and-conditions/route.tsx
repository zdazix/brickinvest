import { createFileRoute } from "@tanstack/react-router";

import { TermsAndConditionsPage } from "@/pages/legal/TermsAndConditionsPage";

export const Route = createFileRoute("/(layout)/terms-and-conditions")({
  component: TermsAndConditionsPage,
  head: () => ({
    meta: [
      { title: "Obchodní podmínky | BRICKINVEST" },
      {
        name: "description",
        content:
          "Obchodní podmínky BRICKINVEST.ES provozovaného společností Unicom Innovaciones S.L. ve Španělsku.",
      },
    ],
  }),
});
