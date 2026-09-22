import { createFileRoute } from "@tanstack/react-router";

import { PrivacyPolicyPage } from "@/pages/privacy/PrivacyPolicyPage";

export const Route = createFileRoute("/(layout)/privacy")({
  component: PrivacyPolicyPage,
  head: () => ({
    meta: [
      { title: "Политика конфиденциальности | BRICKINVEST" },
      {
        name: "description",
        content:
          "Политика конфиденциальности BRICKINVEST и информация об обработке персональных данных.",
      },
    ],
  }),
});
