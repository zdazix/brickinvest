import { describe, expect, it } from "vitest";

import {
  createMockAgentChat,
  mockAgentReplyDelayMilliseconds,
} from "@/components/chat/mock-agent-chat";

describe("mock agent chat", () => {
  it("keeps attachments in the AI SDK message and returns a local reply", async () => {
    const chat = createMockAgentChat();

    await chat.sendMessage({
      files: [
        {
          filename: "brief.txt",
          mediaType: "text/plain",
          type: "file",
          url: "data:text/plain;base64,SGVsbG8=",
        },
      ],
      text: "Review this file",
    });

    expect(mockAgentReplyDelayMilliseconds).toBe(500);
    expect(chat.messages.at(-2)?.parts).toEqual(
      expect.arrayContaining([
        expect.objectContaining({ filename: "brief.txt", type: "file" }),
      ]),
    );
    expect(chat.messages.at(-1)?.parts).toEqual([
      expect.objectContaining({
        text: expect.stringContaining("1 attachment"),
        type: "text",
      }),
    ]);
  });
});
