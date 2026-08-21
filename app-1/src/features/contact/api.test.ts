import { describe, expect, it } from "vitest";

import { sendContactMessage } from "@/features/contact/api";

describe("contact API", () => {
  it("accepts a contact mutation without persisting data", async () => {
    const response = await sendContactMessage({
      email: "person@example.com",
      message: "Hello from the form.",
      name: "Person",
      subject: "Question",
    });

    expect(response.data).toEqual({ accepted: true });
  });
});
