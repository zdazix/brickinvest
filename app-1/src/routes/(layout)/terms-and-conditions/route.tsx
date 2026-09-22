import { createFileRoute } from "@tanstack/react-router";

import { TermsAndConditionsPage } from "@/pages/legal/TermsAndConditionsPage";

export const Route = createFileRoute("/(layout)/terms-and-conditions")({
  component: TermsAndConditionsPage,
  head: () => ({
    meta: [
      { title: "Условия использования | BRICKINVEST" },
      {
        name: "description",
        content:
          "Условия использования сайта BRICKINVEST.ES, работающего под управлением Unicom Innovaciones S.L. в Испании.",
      },
    ],
  }),
});
