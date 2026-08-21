import { describe, expect, it } from "vitest";

import { getProfile, updateProfile } from "@/features/profile/api";

describe("profile API", () => {
  it("returns the current profile", async () => {
    const response = await getProfile(new AbortController().signal);

    expect(response.data).toMatchObject({
      displayName: "",
      email: "",
      image: "/images/placeholder.svg",
    });
  });

  it("accepts profile updates without persisting data", async () => {
    const response = await updateProfile({
      accountType: "personal",
      bio: "Updated profile biography.",
      dateOfBirth: "2000-01-01",
      displayName: "Updated customer",
      email: "updated@example.com",
      role: "Updated role",
    });

    expect(response.data).toEqual({ updated: true });
  });
});
