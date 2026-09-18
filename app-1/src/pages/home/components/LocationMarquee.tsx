import { useLocale } from "@/lib/i18n";

const locations = [
  "MARBELLA",
  "SOTOGRANDE",
  "MIJAS",
  "ESTEPONA",
  "GOLDEN MILE",
  "NERJA",
  "MALAGA",
] as const;

const LocationSequence = ({
  ariaHidden = false,
}: {
  readonly ariaHidden?: boolean;
}) => (
  <span aria-hidden={ariaHidden} className="inline-flex shrink-0 items-center">
    {locations.map((location, index) => (
      <span
        className="relative flex w-44 shrink-0 items-center justify-center sm:w-56"
        key={`${location}-${index}`}
      >
        <span>{location}</span>
        {index < locations.length - 1 && (
          <span
            aria-hidden="true"
            className="absolute right-0 text-[13px] text-accent sm:text-sm"
          >
            ·
          </span>
        )}
      </span>
    ))}
  </span>
);

export const LocationMarquee = () => {
  const { t } = useLocale();
  return (
    <section
      aria-label={t("locations")}
      className="grain-surface overflow-hidden border-[1px] border-t border-b border-border bg-surface py-3 sm:py-4"
    >
      <div className="location-marquee-track flex w-max animate-[location-marquee_48s_linear_infinite] items-center font-secondary text-[13px] tracking-[0.12em] text-foreground uppercase sm:text-[15px] sm:[animation-duration:40s]">
        <LocationSequence />
        <LocationSequence ariaHidden />
      </div>
    </section>
  );
};
