import { createFileRoute } from "@tanstack/react-router";

import { CookiesPolicyPage } from "@/pages/legal/CookiesPolicyPage";

export const Route = createFileRoute("/(layout)/cookies")({
  component: CookiesPolicyPage,
  head: () => ({
    meta: [
      { title: "Zásady cookies | BRICKINVEST" },
      {
        name: "description",
        content:
          "Zásady cookies BRICKINVEST a používání podobných technologií.",
      },
    ],
  }),
});
