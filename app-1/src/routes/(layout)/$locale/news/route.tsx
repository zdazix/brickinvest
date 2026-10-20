import { createFileRoute } from "@tanstack/react-router";

import { NewsPage } from "@/pages/news/NewsPage";

export const Route = createFileRoute("/(layout)/$locale/news")({
  component: NewsPage,
});
