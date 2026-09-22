import { createFileRoute } from "@tanstack/react-router";

import { PrivacyPolicyPage } from "@/pages/privacy/PrivacyPolicyPage";

export const Route = createFileRoute("/(layout)/privacy-policy")({
  component: PrivacyPolicyPage,
  head: () => ({
    meta: [
      { title: "Zásady ochrany soukromí | BRICKINVEST" },
      {
        name: "description",
        content:
          "Zásady ochrany soukromí BRICKINVEST.ES provozovaného společností Unicom Innovaciones S.L. ve Španělsku.",
      },
    ],
  }),
});
