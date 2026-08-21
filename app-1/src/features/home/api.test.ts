import { describe, expect, it } from "vitest";

import { getHomeContent } from "@/features/home/api";

describe("home API", () => {
  it("returns the complete landing-page content collection", async () => {
    const response = await getHomeContent(new AbortController().signal);

    expect(response.data.image).toBe("/images/placeholder.svg");
    expect(response.data.features).toHaveLength(4);
    expect(response.data.collectionCards).toHaveLength(3);
    expect(response.data.editorialCards).toHaveLength(2);
    expect(response.data.reviews).toHaveLength(6);
  });
});
