import { createFileRoute } from "@tanstack/react-router";

import { PrivacyPage } from "@/pages/privacy/PrivacyPage";

export const Route = createFileRoute("/(layout)/privacy")({
  component: PrivacyPage,
  head: () => ({
    meta: [
      { title: "BRICKINVEST Privacy Policy" },
      {
        name: "description",
        content:
          "Read the BRICKINVEST privacy policy and learn how personal information is handled.",
      },
    ],
  }),
});
