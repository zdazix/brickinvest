import { createFileRoute } from "@tanstack/react-router";

import { NewsPage } from "@/pages/news/NewsPage";

export const Route = createFileRoute("/(layout)/news")({
  component: NewsPage,
  head: () => ({
    meta: [
      { title: "Aktuality | BRICKINVEST" },
      {
        name: "description",
        content: "Čtěte nejnovější zprávy a články BRICKINVEST.",
      },
    ],
  }),
});
