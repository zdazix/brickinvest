import { createFileRoute } from "@tanstack/react-router";

import { TermsAndConditionsPage } from "@/pages/legal/TermsAndConditionsPage";

export const Route = createFileRoute("/(layout)/terms-and-conditions")({
  component: TermsAndConditionsPage,
  head: () => ({
    meta: [
      { title: "Términos y condiciones | BRICKINVEST" },
      {
        name: "description",
        content:
          "Términos y condiciones de BRICKINVEST.ES, gestionados por Unicom Innovaciones S.L. en España.",
      },
    ],
  }),
});
