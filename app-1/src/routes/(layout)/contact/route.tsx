import { createFileRoute } from "@tanstack/react-router";

import { ContactPage } from "@/pages/contact/ContactPage";

export const Route = createFileRoute("/(layout)/contact")({
  component: ContactPage,
  head: () => ({
    meta: [
      { title: "Contact | BRICKINVEST" },
      {
        name: "description",
        content: "Contact the BRICKINVEST team.",
      },
    ],
  }),
});
