import { createFileRoute } from "@tanstack/react-router";

import { PrivacyPolicyPage } from "@/pages/privacy/PrivacyPolicyPage";

export const Route = createFileRoute("/(layout)/privacy-policy")({
  component: PrivacyPolicyPage,
  head: () => ({
    meta: [
      { title: "Privaatsuspoliitika | BRICKINVEST" },
      {
        name: "description",
        content:
          "BRICKINVEST.ESi privaatsuspoliitika, mida haldab Hispaanias tegutsev Unicom Innovaciones S.L.",
      },
    ],
  }),
});
