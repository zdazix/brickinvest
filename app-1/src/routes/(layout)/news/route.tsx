import { createFileRoute } from "@tanstack/react-router";

import { NewsPage } from "@/pages/news/NewsPage";

export const Route = createFileRoute("/(layout)/news")({
  component: NewsPage,
  head: () => ({
    meta: [
      { title: "News | BRICKINVEST" },
      {
        name: "description",
        content: "Read the latest BRICKINVEST news and articles.",
      },
    ],
  }),
});
