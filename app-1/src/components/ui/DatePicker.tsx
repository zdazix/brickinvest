import {
  addMonths,
  eachDayOfInterval,
  endOfMonth,
  endOfWeek,
  format,
  isSameDay,
  isSameMonth,
  isValid,
  parseISO,
  startOfMonth,
  startOfWeek,
} from "date-fns";
import { CalendarDays, ChevronLeft, ChevronRight } from "lucide-react";
import { Popover } from "radix-ui";
import { useMemo, useState } from "react";

import { NumericText } from "@/components/ui/NumericText";
import { useLocale } from "@/lib/i18n";

type DatePickerProps = {
  readonly "aria-label"?: string;
  readonly disabled?: boolean;
  readonly id?: string;
  readonly onBlur?: () => void;
  readonly onValueChange: (value: string) => void;
  readonly placeholder?: string;
  readonly value?: string;
};

const weekdays = ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"];
const swedishWeekdays = ["Sö", "Må", "Ti", "On", "To", "Fr", "Lö"];

const parseDate = (value?: string) => {
  if (!value) return undefined;
  const parsed = parseISO(value);
  return isValid(parsed) ? parsed : undefined;
};

export const DatePicker = ({
  "aria-label": ariaLabel = "Choose date",
  disabled,
  id,
  onBlur,
  onValueChange,
  placeholder = "...",
  value,
}: DatePickerProps) => {
  const { locale, t } = useLocale();
  const weekdayLabels = locale === "sv" ? swedishWeekdays : weekdays;
  const [open, setOpen] = useState(false);
  const selectedDate = parseDate(value);
  const [viewMonth, setViewMonth] = useState(selectedDate ?? new Date());
  const days = useMemo(
    () =>
      eachDayOfInterval({
        start: startOfWeek(startOfMonth(viewMonth)),
        end: endOfWeek(endOfMonth(viewMonth)),
      }),
    [viewMonth],
  );

  const selectDate = (date: Date) => {
    onValueChange(format(date, "yyyy-MM-dd"));
    setOpen(false);
  };

  return (
    <Popover.Root
      onOpenChange={(nextOpen) => {
        if (nextOpen && selectedDate) setViewMonth(selectedDate);
        setOpen(nextOpen);
      }}
      open={open}
    >
      <Popover.Trigger asChild>
        <button
          aria-label={ariaLabel}
          className="flex min-h-12 w-full items-center justify-between gap-3 rounded-2xl border border-border bg-background px-4 text-left text-[15px] font-normal text-foreground transition outline-none focus:border-ring focus:ring-2 focus:ring-ring/20 disabled:cursor-not-allowed disabled:opacity-50"
          disabled={disabled}
          id={id}
          onBlur={onBlur}
          type="button"
        >
          <span className={selectedDate ? "" : "text-muted-foreground"}>
            {selectedDate ? (
              <NumericText>{format(selectedDate, "MMM d, yyyy")}</NumericText>
            ) : (
              placeholder
            )}
          </span>
          <CalendarDays
            aria-hidden="true"
            className="size-4 shrink-0 text-muted-foreground"
          />
        </button>
      </Popover.Trigger>
      <Popover.Portal>
        <Popover.Content
          align="start"
          collisionPadding={16}
          className="z-50 w-72 max-w-[calc(100vw-2rem)] rounded-2xl border border-border bg-surface p-3 text-surface-foreground shadow-xl outline-none"
          sideOffset={8}
        >
          <div className="mb-3 flex items-center justify-between">
            <button
              aria-label={t("previousMonth")}
              className="flex size-9 items-center justify-center rounded-lg transition hover:bg-muted focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none"
              onClick={() => setViewMonth((current) => addMonths(current, -1))}
              type="button"
            >
              <ChevronLeft aria-hidden="true" className="size-4" />
            </button>
            <p aria-live="polite" className="text-[13px] font-bold">
              <NumericText>{format(viewMonth, "MMMM yyyy")}</NumericText>
            </p>
            <button
              aria-label={t("nextMonth")}
              className="flex size-9 items-center justify-center rounded-lg transition hover:bg-muted focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none"
              onClick={() => setViewMonth((current) => addMonths(current, 1))}
              type="button"
            >
              <ChevronRight aria-hidden="true" className="size-4" />
            </button>
          </div>
          <div className="grid grid-cols-7 text-center">
            {weekdayLabels.map((weekday) => (
              <span
                className="py-1 text-[11px] font-semibold text-muted-foreground"
                key={weekday}
              >
                {weekday}
              </span>
            ))}
            {days.map((day) => {
              const selected = selectedDate && isSameDay(day, selectedDate);
              return (
                <button
                  aria-label={format(day, "MMMM d, yyyy")}
                  aria-pressed={Boolean(selected)}
                  className={[
                    "mx-auto flex size-9 items-center justify-center rounded-lg text-[13px] transition outline-none hover:bg-muted focus-visible:ring-2 focus-visible:ring-ring",
                    !isSameMonth(day, viewMonth)
                      ? "text-muted-foreground/55"
                      : "",
                    selected
                      ? "bg-primary font-bold text-primary-foreground hover:bg-primary/90"
                      : "",
                  ].join(" ")}
                  key={day.toISOString()}
                  onClick={() => selectDate(day)}
                  type="button"
                >
                  <NumericText>{format(day, "d")}</NumericText>
                </button>
              );
            })}
          </div>
          {selectedDate && (
            <button
              className="mt-2 w-full rounded-lg py-2 text-[13px] font-semibold text-primary transition hover:bg-muted"
              onClick={() => {
                onValueChange("");
                setOpen(false);
              }}
              type="button"
            >
              {t("clearDate")}
            </button>
          )}
        </Popover.Content>
      </Popover.Portal>
    </Popover.Root>
  );
};
