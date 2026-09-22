import { createFileRoute } from "@tanstack/react-router";

import { PrivacyPolicyPage } from "@/pages/privacy/PrivacyPolicyPage";

export const Route = createFileRoute("/(layout)/privacy-policy")({
  component: PrivacyPolicyPage,
  head: () => ({
    meta: [
      { title: "Политика конфиденциальности | BRICKINVEST" },
      {
        name: "description",
        content:
          "Политика конфиденциальности BRICKINVEST.ES, работающего под управлением Unicom Innovaciones S.L. в Испании.",
      },
    ],
  }),
});
