import { createFileRoute } from "@tanstack/react-router";

import { ProfilePage } from "@/pages/profile/ProfilePage";

export const Route = createFileRoute("/(layout)/profile")({
  component: ProfilePage,
  head: () => ({
    meta: [
      { title: "Profil | BRICKINVEST" },
      { name: "description", content: "Spravujte údaje svého profilu." },
    ],
  }),
});
