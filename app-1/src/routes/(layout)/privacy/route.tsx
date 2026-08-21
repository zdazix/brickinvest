import { createFileRoute } from "@tanstack/react-router";

import { PrivacyPage } from "@/pages/privacy/PrivacyPage";

export const Route = createFileRoute("/(layout)/privacy")({
  component: PrivacyPage,
  head: () => ({
    meta: [
      { title: "Privacy policy | Brand" },
      { name: "description", content: "Read the Brand privacy policy." },
    ],
  }),
});
