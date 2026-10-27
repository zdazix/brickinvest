import { createFileRoute } from "@tanstack/react-router";

import { PrivacyPolicyPage } from "@/pages/privacy/PrivacyPolicyPage";

export const Route = createFileRoute("/(layout)/privacy")({
  component: PrivacyPolicyPage,
  head: () => ({
    meta: [
      { title: "Privacy Policy | BRICKINVEST" },
      {
        name: "description",
        content: "BRICKINVEST privacy policy and personal data processing.",
      },
    ],
  }),
});
