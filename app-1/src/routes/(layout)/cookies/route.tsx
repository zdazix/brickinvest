import { createFileRoute } from "@tanstack/react-router";

import { CookiesPolicyPage } from "@/pages/legal/CookiesPolicyPage";

export const Route = createFileRoute("/(layout)/cookies")({
  component: CookiesPolicyPage,
  head: () => ({
    meta: [
      { title: "Cookie Policy | BRICKINVEST" },
      {
        name: "description",
        content: "BRICKINVEST cookie policy and use of similar technologies.",
      },
    ],
  }),
});
