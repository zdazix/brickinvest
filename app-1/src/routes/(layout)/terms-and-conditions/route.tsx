import { createFileRoute } from "@tanstack/react-router";

import { TermsAndConditionsPage } from "@/pages/legal/TermsAndConditionsPage";

export const Route = createFileRoute("/(layout)/terms-and-conditions")({
  component: TermsAndConditionsPage,
  head: () => ({
    meta: [
      { title: "Kasutustingimused | BRICKINVEST" },
      {
        name: "description",
        content:
          "BRICKINVEST.ESi kasutustingimused, mida haldab Hispaanias tegutsev Unicom Innovaciones S.L.",
      },
    ],
  }),
});
