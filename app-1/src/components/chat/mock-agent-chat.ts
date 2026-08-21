import { Chat } from "@ai-sdk/react";
import type { ChatTransport, UIMessage, UIMessageChunk } from "ai";

export const mockAgentReplyDelayMilliseconds = 500;

const initialMessage = (): UIMessage => ({
  id: globalThis.crypto.randomUUID(),
  parts: [
    {
      text: "The agent is not configured yet. Connect an AI provider to enable real responses.",
      type: "text",
    },
  ],
  role: "assistant",
});

const waitForReply = (signal?: AbortSignal): Promise<void> =>
  new Promise((resolve) => {
    const timeout = globalThis.setTimeout(
      resolve,
      mockAgentReplyDelayMilliseconds,
    );
    signal?.addEventListener(
      "abort",
      () => {
        globalThis.clearTimeout(timeout);
        resolve();
      },
      { once: true },
    );
  });

const replyText = (messages: readonly UIMessage[]): string => {
  const attachmentCount =
    messages.at(-1)?.parts.filter((part) => part.type === "file").length ?? 0;

  if (attachmentCount > 0) {
    return `I received ${attachmentCount} attachment${attachmentCount === 1 ? "" : "s"}. The agent is not configured yet, so the files were not sent to a provider.`;
  }

  return "The agent is not configured yet. Your message stays in this demo conversation.";
};

export const createMockAgentTransport = (): ChatTransport<UIMessage> => ({
  reconnectToStream: () => Promise.resolve(null),
  sendMessages: ({ abortSignal, messages }) =>
    Promise.resolve(
      new ReadableStream<UIMessageChunk>({
        start: async (controller) => {
          await waitForReply(abortSignal);
          if (abortSignal?.aborted) {
            controller.close();
            return;
          }

          const messageId = globalThis.crypto.randomUUID();
          const textId = globalThis.crypto.randomUUID();
          controller.enqueue({ messageId, type: "start" });
          controller.enqueue({ id: textId, type: "text-start" });
          controller.enqueue({
            delta: replyText(messages),
            id: textId,
            type: "text-delta",
          });
          controller.enqueue({ id: textId, type: "text-end" });
          controller.enqueue({ finishReason: "stop", type: "finish" });
          controller.close();
        },
      }),
    ),
});

export const createMockAgentChat = (): Chat<UIMessage> =>
  new Chat<UIMessage>({
    messages: [initialMessage()],
    transport: createMockAgentTransport(),
  });
