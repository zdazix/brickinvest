import { describe, expect, it } from "vitest";

import { getNewsPage } from "@/features/news/api";

describe("news API", () => {
  it("returns predictable pages for the infinite query", async () => {
    const firstPage = await getNewsPage(1, new AbortController().signal);
    const secondPage = await getNewsPage(2, new AbortController().signal);

    expect(firstPage.data.items).toHaveLength(6);
    expect(firstPage.data.pagination.totalPages).toBe(3);
    expect(secondPage.data.items[0]?.id).toBe(7);
  });
});
