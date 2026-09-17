import { createFileRoute } from "@tanstack/react-router";

import { PrivacyPolicyPage } from "@/pages/privacy/PrivacyPolicyPage";

export const Route = createFileRoute("/(layout)/privacy")({
  component: PrivacyPolicyPage,
  head: () => ({
    meta: [
      { title: "Privacy Policy | BRICKINVEST" },
      {
        name: "description",
        content:
          "Read the BRICKINVEST privacy policy and learn how personal information is handled.",
      },
    ],
  }),
});
