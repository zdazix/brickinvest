import { createFileRoute } from "@tanstack/react-router";

import { CookiesPolicyPage } from "@/pages/legal/CookiesPolicyPage";

export const Route = createFileRoute("/(layout)/cookies-policy")({
  component: CookiesPolicyPage,
  head: () => ({
    meta: [
      { title: "Политика cookie | BRICKINVEST" },
      {
        name: "description",
        content:
          "Политика cookie BRICKINVEST.ES, работающего под управлением Unicom Innovaciones S.L. в Испании.",
      },
    ],
  }),
});
