import { createFileRoute } from "@tanstack/react-router";

import { HomePage } from "@/pages/home/HomePage";

export const Route = createFileRoute("/(layout)/")({
  component: HomePage,
  head: () => ({
    meta: [
      { title: "BRICKINVEST | Costa del Sol Investment Platform" },
      {
        name: "description",
        content:
          "Development and investment opportunities on the Costa del Sol.",
      },
    ],
  }),
});
