import { useChat } from "@ai-sdk/react";
import { Bot, File, Paperclip, Send, UserRound, X } from "lucide-react";
import {
  useEffect,
  useRef,
  useState,
  type ChangeEvent,
  type KeyboardEvent,
} from "react";

import { createMockAgentChat } from "@/components/chat/mock-agent-chat";

type AgentChatProps = {
  className?: string;
  description?: string;
  showStatus?: boolean;
  title?: string;
};

export const AgentChat = ({
  className = "",
  description = "Demo conversation",
  showStatus = true,
  title = "Support agent",
}: AgentChatProps) => {
  const [chat] = useState(createMockAgentChat);
  const { error, messages, sendMessage, status } = useChat({ chat });
  const [draft, setDraft] = useState("");
  const [files, setFiles] = useState<File[]>([]);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const threadRef = useRef<HTMLDivElement>(null);
  const isWorking = status === "submitted" || status === "streaming";
  const canSend = (draft.trim().length > 0 || files.length > 0) && !isWorking;

  useEffect(() => {
    const thread = threadRef.current;
    if (thread) thread.scrollTop = thread.scrollHeight;
  }, [messages, status]);

  const selectFiles = (event: ChangeEvent<HTMLInputElement>) => {
    setFiles(Array.from(event.target.files ?? []));
  };

  const removeFile = (index: number) => {
    setFiles((current) =>
      current.filter((_, fileIndex) => fileIndex !== index),
    );
  };

  const submit = () => {
    if (!canSend) return;

    const text = draft.trim();
    const transfer = new DataTransfer();
    files.forEach((file) => transfer.items.add(file));
    const selectedFiles = transfer.files;

    setDraft("");
    setFiles([]);
    if (fileInputRef.current) fileInputRef.current.value = "";

    if (text) {
      void sendMessage({
        files: selectedFiles.length > 0 ? selectedFiles : undefined,
        text,
      });
      return;
    }

    void sendMessage({ files: selectedFiles });
  };

  const handleKeyDown = (event: KeyboardEvent<HTMLTextAreaElement>) => {
    if (event.key !== "Enter" || event.shiftKey) return;
    event.preventDefault();
    submit();
  };

  return (
    <section
      className={`flex min-h-0 flex-col overflow-hidden bg-surface ${className}`}
    >
      <header className="flex items-center gap-3 border-b border-border/70 px-5 py-4">
        <span className="grid size-10 place-items-center rounded-full bg-primary text-primary-foreground">
          <Bot aria-hidden="true" className="size-5" />
        </span>
        <span className="min-w-0">
          <span className="block truncate font-semibold">{title}</span>
          <span className="block truncate text-xs text-muted-foreground">
            {description}
          </span>
        </span>
        {showStatus && (
          <span className="ml-auto rounded-full bg-muted px-3 py-1 text-xs font-medium text-muted-foreground">
            Not configured
          </span>
        )}
      </header>

      <div
        aria-live="polite"
        className="min-h-0 flex-1 space-y-4 overflow-y-auto bg-background/50 p-4"
        ref={threadRef}
      >
        {messages.map((message) => (
          <article
            className={`flex items-end gap-2 ${message.role === "user" ? "justify-end" : "justify-start"}`}
            key={message.id}
          >
            {message.role !== "user" && (
              <span className="grid size-8 shrink-0 place-items-center rounded-full bg-primary/15 text-primary">
                <Bot aria-hidden="true" className="size-4" />
              </span>
            )}
            <div
              className={`max-w-[82%] space-y-2 rounded-2xl px-4 py-3 text-sm ${message.role === "user" ? "rounded-br-md bg-primary text-primary-foreground" : "border border-border/70 bg-surface text-surface-foreground"}`}
            >
              {message.parts.map((part, partIndex) => {
                if (part.type === "text") {
                  return (
                    <p className="whitespace-pre-wrap" key={partIndex}>
                      {part.text}
                    </p>
                  );
                }
                if (part.type === "file") {
                  return (
                    <a
                      className="flex items-center gap-2 decoration-border underline-offset-2 hover:underline"
                      href={part.url}
                      key={partIndex}
                      rel="noreferrer"
                      target="_blank"
                    >
                      <File aria-hidden="true" className="size-4" />
                      {part.filename ?? "Attachment"}
                    </a>
                  );
                }
                return null;
              })}
            </div>
            {message.role === "user" && (
              <span className="grid size-8 shrink-0 place-items-center rounded-full bg-muted text-muted-foreground">
                <UserRound aria-hidden="true" className="size-4" />
              </span>
            )}
          </article>
        ))}
        {isWorking && (
          <div className="flex items-center gap-2 text-xs text-muted-foreground">
            <Bot aria-hidden="true" className="size-4" />
            Agent is preparing a demo response…
          </div>
        )}
        {error && (
          <p className="rounded-xl bg-danger/10 p-3 text-sm text-danger">
            The demo response could not be created.
          </p>
        )}
      </div>

      <footer className="border-t border-border/70 bg-surface p-3">
        {files.length > 0 && (
          <div className="mb-3 flex flex-wrap gap-2">
            {files.map((file, index) => (
              <span
                className="flex max-w-full items-center gap-2 rounded-full bg-muted px-3 py-1.5 text-xs"
                key={`${file.name}-${file.lastModified}`}
              >
                <File aria-hidden="true" className="size-3.5 shrink-0" />
                <span className="truncate">{file.name}</span>
                <button
                  aria-label={`Remove ${file.name}`}
                  className="rounded-full hover:text-danger"
                  onClick={() => removeFile(index)}
                  type="button"
                >
                  <X aria-hidden="true" className="size-3.5" />
                </button>
              </span>
            ))}
          </div>
        )}
        <div className="flex items-end gap-2 rounded-2xl border border-border bg-background p-2 focus-within:ring-2 focus-within:ring-ring/20">
          <input
            className="sr-only"
            multiple
            onChange={selectFiles}
            ref={fileInputRef}
            type="file"
          />
          <button
            aria-label="Attach files"
            className="grid size-10 shrink-0 place-items-center rounded-full text-muted-foreground hover:bg-muted hover:text-foreground"
            onClick={() => fileInputRef.current?.click()}
            type="button"
          >
            <Paperclip aria-hidden="true" className="size-4" />
          </button>
          <textarea
            aria-label="Message"
            className="max-h-32 min-h-10 flex-1 resize-none bg-transparent px-1 py-2 text-sm outline-none"
            onChange={(event) => setDraft(event.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Write a message"
            rows={1}
            value={draft}
          />
          <button
            aria-label="Send message"
            className="grid size-10 shrink-0 place-items-center rounded-full bg-primary text-primary-foreground transition disabled:cursor-not-allowed disabled:opacity-40"
            disabled={!canSend}
            onClick={submit}
            type="button"
          >
            <Send aria-hidden="true" className="size-4" />
          </button>
        </div>
        <p className="mt-2 px-2 text-center text-xs text-muted-foreground">
          Demo only. No messages or files leave this browser.
        </p>
      </footer>
    </section>
  );
};
