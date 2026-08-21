import { describe, expect, it } from "vitest";

import { getPrivacySections } from "@/features/privacy/api";

describe("privacy API", () => {
  it("returns the ordered privacy-policy sections", async () => {
    const response = await getPrivacySections(new AbortController().signal);

    expect(response.data).toHaveLength(6);
    expect(response.data[0]?.title).toBe("Information we collect");
    expect(response.data.at(-1)?.title).toBe("Contact");
  });
});
