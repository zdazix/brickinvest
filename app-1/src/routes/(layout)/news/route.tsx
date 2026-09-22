import { createFileRoute } from "@tanstack/react-router";

import { NewsPage } from "@/pages/news/NewsPage";

export const Route = createFileRoute("/(layout)/news")({
  component: NewsPage,
  head: () => ({
    meta: [
      { title: "Uudised | BRICKINVEST" },
      {
        name: "description",
        content: "Lugege BRICKINVESTi viimaseid artikleid.",
      },
    ],
  }),
});
