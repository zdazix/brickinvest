import { createFileRoute } from "@tanstack/react-router";

import { CookiesPolicyPage } from "@/pages/legal/CookiesPolicyPage";

export const Route = createFileRoute("/(layout)/cookies-policy")({
  component: CookiesPolicyPage,
  head: () => ({
    meta: [
      { title: "Política de cookies | BRICKINVEST" },
      {
        name: "description",
        content:
          "Política de cookies de BRICKINVEST.ES, gestionada por Unicom Innovaciones S.L. en España.",
      },
    ],
  }),
});
