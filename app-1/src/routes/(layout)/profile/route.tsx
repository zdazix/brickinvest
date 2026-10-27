import { createFileRoute } from "@tanstack/react-router";

import { ProfilePage } from "@/pages/profile/ProfilePage";

export const Route = createFileRoute("/(layout)/profile")({
  component: ProfilePage,
  head: () => ({
    meta: [
      { title: "Profile | BRICKINVEST" },
      { name: "description", content: "Manage your profile details." },
    ],
  }),
});
