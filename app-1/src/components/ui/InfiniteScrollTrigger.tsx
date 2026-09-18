import { useEffect, useRef } from "react";

import { Loader } from "@/components/ui/Loader";
import { useLocale } from "@/lib/i18n";

type InfiniteScrollTriggerProps = {
  readonly disabled?: boolean;
  readonly isLoading: boolean;
  readonly onIntersect: () => void;
};

export const InfiniteScrollTrigger = ({
  disabled = false,
  isLoading,
  onIntersect,
}: InfiniteScrollTriggerProps) => {
  const { t } = useLocale();
  const triggerRef = useRef<HTMLDivElement>(null);
  const onIntersectRef = useRef(onIntersect);

  useEffect(() => {
    onIntersectRef.current = onIntersect;
  }, [onIntersect]);

  useEffect(() => {
    const trigger = triggerRef.current;

    if (!trigger || disabled) {
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) {
          onIntersectRef.current();
        }
      },
      { rootMargin: "240px 0px" },
    );

    observer.observe(trigger);
    return () => observer.disconnect();
  }, [disabled]);

  return (
    <div
      aria-label={t("loadMoreItems")}
      aria-live="polite"
      className="flex min-h-36 items-center justify-center pt-12 text-[13px] text-muted-foreground"
      ref={triggerRef}
    >
      {isLoading && <Loader label={t("loadingMoreStories")} />}
    </div>
  );
};
