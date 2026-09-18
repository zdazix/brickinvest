import { createFileRoute } from "@tanstack/react-router";

import { CookiesPolicyPage } from "@/pages/legal/CookiesPolicyPage";

export const Route = createFileRoute("/(layout)/cookies-policy")({
  component: CookiesPolicyPage,
  head: () => ({
    meta: [
      { title: "Cookies Policy | BRICKINVEST" },
      {
        name: "description",
        content:
          "Cookies Policy for BRICKINVEST.ES, operated by Unicom Innovaciones S.L. in Spain.",
      },
    ],
  }),
});
