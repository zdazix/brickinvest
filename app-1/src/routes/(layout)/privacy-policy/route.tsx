import { createFileRoute } from "@tanstack/react-router";

import { PrivacyPolicyPage } from "@/pages/privacy/PrivacyPolicyPage";

export const Route = createFileRoute("/(layout)/privacy-policy")({
  component: PrivacyPolicyPage,
  head: () => ({
    meta: [
      { title: "Privacy Policy | BRICKINVEST" },
      {
        name: "description",
        content:
          "Privacy Policy for BRICKINVEST.ES, operated by Unicom Innovaciones S.L. in Spain.",
      },
    ],
  }),
});
