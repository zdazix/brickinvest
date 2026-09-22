import { createFileRoute } from "@tanstack/react-router";

import { ProfilePage } from "@/pages/profile/ProfilePage";

export const Route = createFileRoute("/(layout)/profile")({
  component: ProfilePage,
  head: () => ({
    meta: [
      { title: "Profiil | BRICKINVEST" },
      { name: "description", content: "Hallake oma profiiliandmeid." },
    ],
  }),
});
