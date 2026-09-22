import { createFileRoute } from "@tanstack/react-router";

import { ContactPage } from "@/pages/contact/ContactPage";

export const Route = createFileRoute("/(layout)/contact")({
  component: ContactPage,
  head: () => ({
    meta: [
      { title: "Contacto | BRICKINVEST" },
      {
        name: "description",
        content: "Contacta con el equipo de BRICKINVEST.",
      },
    ],
  }),
});
