import { createFileRoute } from "@tanstack/react-router";

import { PrivacyPolicyPage } from "@/pages/privacy/PrivacyPolicyPage";

export const Route = createFileRoute("/(layout)/privacy")({
  component: PrivacyPolicyPage,
  head: () => ({
    meta: [
      { title: "Datenschutzerklärung | BRICKINVEST" },
      {
        name: "description",
        content:
          "Datenschutzerklärung von BRICKINVEST und Informationen zur Verarbeitung personenbezogener Daten.",
      },
    ],
  }),
});
