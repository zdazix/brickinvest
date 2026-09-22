import { createFileRoute } from "@tanstack/react-router";

import { PrivacyPolicyPage } from "@/pages/privacy/PrivacyPolicyPage";

export const Route = createFileRoute("/(layout)/privacy")({
  component: PrivacyPolicyPage,
  head: () => ({
    meta: [
      { title: "Polityka prywatności | BRICKINVEST" },
      {
        name: "description",
        content:
          "Polityka prywatności BRICKINVEST i przetwarzanie danych osobowych.",
      },
    ],
  }),
});
