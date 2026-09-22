import { createFileRoute } from "@tanstack/react-router";

import { PrivacyPolicyPage } from "@/pages/privacy/PrivacyPolicyPage";

export const Route = createFileRoute("/(layout)/privacy")({
  component: PrivacyPolicyPage,
  head: () => ({
    meta: [
      { title: "Privaatsuspoliitika | BRICKINVEST" },
      {
        name: "description",
        content:
          "BRICKINVESTi privaatsuspoliitika ja teave isikuandmete töötlemise kohta.",
      },
    ],
  }),
});
