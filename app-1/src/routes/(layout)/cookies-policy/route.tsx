import { createFileRoute } from "@tanstack/react-router";

import { CookiesPolicyPage } from "@/pages/legal/CookiesPolicyPage";

export const Route = createFileRoute("/(layout)/cookies-policy")({
  component: CookiesPolicyPage,
  head: () => ({
    meta: [
      { title: "Küpsiste poliitika | BRICKINVEST" },
      {
        name: "description",
        content:
          "BRICKINVEST.ESi küpsiste poliitika, mida haldab Hispaanias tegutsev Unicom Innovaciones S.L.",
      },
    ],
  }),
});
