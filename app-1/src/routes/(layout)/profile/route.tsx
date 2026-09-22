import { createFileRoute } from "@tanstack/react-router";

import { ProfilePage } from "@/pages/profile/ProfilePage";

export const Route = createFileRoute("/(layout)/profile")({
  component: ProfilePage,
  head: () => ({
    meta: [
      { title: "Perfil | BRICKINVEST" },
      { name: "description", content: "Gestiona los datos de tu perfil." },
    ],
  }),
});
