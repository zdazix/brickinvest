import { createFileRoute } from "@tanstack/react-router";

import { PrivacyPolicyPage } from "@/pages/privacy/PrivacyPolicyPage";

export const Route = createFileRoute("/(layout)/privacy-policy")({
  component: PrivacyPolicyPage,
  head: () => ({
    meta: [
      { title: "Datenschutzerklärung | BRICKINVEST" },
      {
        name: "description",
        content:
          "Datenschutzerklärung für BRICKINVEST.ES, betrieben von Unicom Innovaciones S.L. in Spanien.",
      },
    ],
  }),
});
