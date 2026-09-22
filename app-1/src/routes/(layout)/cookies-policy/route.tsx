import { createFileRoute } from "@tanstack/react-router";

import { CookiesPolicyPage } from "@/pages/legal/CookiesPolicyPage";

export const Route = createFileRoute("/(layout)/cookies-policy")({
  component: CookiesPolicyPage,
  head: () => ({
    meta: [
      { title: "Cookie-Richtlinie | BRICKINVEST" },
      {
        name: "description",
        content:
          "Cookie-Richtlinie für BRICKINVEST.ES, betrieben von Unicom Innovaciones S.L. in Spanien.",
      },
    ],
  }),
});
