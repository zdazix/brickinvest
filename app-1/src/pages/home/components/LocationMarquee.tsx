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
        {index < locations.length - 1 && (
          <span aria-hidden="true" className="text-sm text-accent sm:text-base">
            ·
          </span>
        )}
      </span>
    ))}
  </span>
);

export const LocationMarquee = () => (
  <section
    aria-label="Costa del Sol locations"
    className="grain-surface overflow-hidden border-y border-border bg-surface py-3 sm:py-4"
  >
    <div className="location-marquee-track flex w-max animate-[location-marquee_48s_linear_infinite] items-center font-secondary text-[15px] tracking-[0.16em] text-foreground uppercase sm:text-[17px] sm:[animation-duration:40s]">
      <LocationSequence />
      <LocationSequence ariaHidden />
    </div>
  </section>
);
