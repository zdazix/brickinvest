import type { AxiosResponse } from "axios";

import { waitFor } from "@/lib/api/delay";
import { createMockResponse } from "@/lib/api/mock-response";
import {
  DEFAULT_PAGE_SIZE,
  type PaginatedResponse,
} from "@/lib/api/pagination";

export type NewsArticle = {
  readonly id: number;
  readonly category: string;
  readonly date: string;
  readonly title: string;
  readonly summary: string;
  readonly image: string;
};

const articles: readonly NewsArticle[] = Array.from(
  { length: 17 },
  (_, index) => ({
    id: index + 1,
    category: index % 2 === 0 ? "Rynek" : "Magazyn",
    date: `${17 - index} września 2026`,
    title: `Analiza rynku i inwestycji nr ${String(index + 1).padStart(2, "0")}`,
    summary:
      "Krótki opis przedstawia kontekst rynku i najważniejsze czynniki przed lekturą całości.",
    image: `${import.meta.env.BASE_URL}images/placeholder.svg`,
  }),
);

export const getNewsPage = async (
  page: number,
  signal: AbortSignal,
): Promise<AxiosResponse<PaginatedResponse<NewsArticle>>> => {
  await waitFor(700, signal);
  const start = (page - 1) * DEFAULT_PAGE_SIZE;

  return createMockResponse({
    items: articles.slice(start, start + DEFAULT_PAGE_SIZE),
    pagination: {
      page,
      pageSize: DEFAULT_PAGE_SIZE,
      totalItems: articles.length,
      totalPages: Math.ceil(articles.length / DEFAULT_PAGE_SIZE),
    },
  });
};
