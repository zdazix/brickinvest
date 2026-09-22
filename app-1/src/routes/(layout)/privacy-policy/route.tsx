import { createFileRoute } from "@tanstack/react-router";

import { PrivacyPolicyPage } from "@/pages/privacy/PrivacyPolicyPage";

export const Route = createFileRoute("/(layout)/privacy-policy")({
  component: PrivacyPolicyPage,
  head: () => ({
    meta: [
      { title: "Política de privacidad | BRICKINVEST" },
      {
        name: "description",
        content:
          "Política de privacidad de BRICKINVEST.ES, gestionada por Unicom Innovaciones S.L. en España.",
      },
    ],
  }),
});
