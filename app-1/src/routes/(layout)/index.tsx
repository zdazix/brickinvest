import { createFileRoute } from "@tanstack/react-router";

import { HomePage } from "@/pages/home/HomePage";

export const Route = createFileRoute("/(layout)/")({
  component: HomePage,
  head: () => ({
    meta: [
      { title: "Home | Brand" },
      { name: "description", content: "Landing page description text." },
    ],
  }),
});
