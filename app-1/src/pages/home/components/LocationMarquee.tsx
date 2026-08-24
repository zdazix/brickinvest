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
  <span
    aria-hidden={ariaHidden}
    className="inline-flex shrink-0 items-center gap-8 px-4 sm:gap-12 sm:px-6"
  >
    {locations.map((location, index) => (
      <span
        className="inline-flex items-center gap-8 sm:gap-12"
        key={`${location}-${index}`}
      >
        <span>{location}</span>
        <span aria-hidden="true" className="text-sm text-accent sm:text-base">
          ·
        </span>
      </span>
    ))}
  </span>
);

export const LocationMarquee = () => (
  <section
    aria-label="Costa del Sol locations"
    className="overflow-hidden border-y border-border bg-white py-4 sm:py-5"
  >
    <div className="flex w-max animate-[location-marquee_38s_linear_infinite] font-primary text-2xl tracking-[0.04em] text-foreground uppercase sm:text-[26px] lg:text-[30px]">
      <LocationSequence />
      <LocationSequence ariaHidden />
    </div>
  </section>
);
