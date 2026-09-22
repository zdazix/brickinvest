import { createFileRoute } from "@tanstack/react-router";

import { CookiesPolicyPage } from "@/pages/legal/CookiesPolicyPage";

export const Route = createFileRoute("/(layout)/cookies")({
  component: CookiesPolicyPage,
  head: () => ({
    meta: [
      { title: "Polityka cookies | BRICKINVEST" },
      {
        name: "description",
        content:
          "Polityka cookies BRICKINVEST i wykorzystanie podobnych technologii.",
      },
    ],
  }),
});
