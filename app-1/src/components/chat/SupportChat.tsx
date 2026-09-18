import { MessageCircle, X } from "lucide-react";
import { Dialog } from "radix-ui";

import { AgentChat } from "@/components/chat/AgentChat";
import { useLocale } from "@/lib/i18n";

export const SupportChat = () => {
  const { t } = useLocale();
  return (
    <Dialog.Root modal={false}>
      <Dialog.Trigger asChild>
        <button
          aria-label={t("helpChatTitle")}
          className="group fixed right-4 bottom-4 z-40 flex items-center gap-3 rounded-full border border-border bg-surface py-2 pr-4 pl-2 text-foreground shadow-lg shadow-foreground/10 transition hover:-translate-y-0.5 hover:border-border sm:right-6 sm:bottom-6"
          type="button"
        >
          <span className="grid size-10 place-items-center rounded-full bg-primary text-primary-foreground">
            <MessageCircle aria-hidden="true" className="size-5" />
          </span>
          <span className="hidden pr-1 sm:block">
            <span className="block text-[11px] text-foreground/60">
              {t("needAHand")}
            </span>
            <span className="block text-[13px] font-semibold">
              {t("helpChat")}
            </span>
          </span>
        </button>
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Content className="fixed right-4 bottom-4 z-50 h-96 w-[calc(100%-2rem)] max-w-md overflow-hidden rounded-3xl border border-border bg-surface shadow-lg outline-none sm:right-6 sm:bottom-6 sm:h-[32rem]">
          <Dialog.Title className="sr-only">{t("helpChatTitle")}</Dialog.Title>
          <Dialog.Description className="sr-only">
            {t("demoDescription")}
          </Dialog.Description>
          <Dialog.Close asChild>
            <button
              aria-label={t("close")}
              className="absolute top-4 right-4 z-10 grid size-9 place-items-center rounded-full bg-muted text-muted-foreground hover:text-foreground"
              type="button"
            >
              <X aria-hidden="true" className="size-4" />
            </button>
          </Dialog.Close>
          <AgentChat
            className="h-full"
            description={t("demoDescription")}
            showStatus={false}
            title={t("needAHand")}
          />
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
};
