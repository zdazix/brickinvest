import { useLocale } from "@/lib/i18n";

const offerKeys = [
  "offerProjectManagement",
  "offerConstruction",
  "offerArchitecture",
  "offerPlots",
  "offerDevelopments",
  "offerRoi",
  "offerMultilingual",
  "offerLegacy",
] as const;

const offerImages = [
  {
    alt: "Project management planning on a tablet",
    src: "/images/offers/project-management.jpg",
    position: "center 68%",
  },
  {
    alt: "In-house construction project",
    src: "/images/offers/construction-project.jpg",
    position: "center center",
  },
  {
    alt: "Architecture and engineering planning",
    src: "/images/offers/architecture-planning.jpg",
    position: "center center",
  },
  {
    alt: "Project management planning on a tablet",
    src: "/images/offers/project-management.jpg",
    position: "55% 35%",
  },
  {
    alt: "In-house construction project",
    src: "/images/offers/construction-project.jpg",
    position: "45% 70%",
  },
  {
    alt: "Architecture and engineering planning",
    src: "/images/offers/architecture-planning.jpg",
    position: "65% center",
  },
  {
    alt: "Project management planning on a tablet",
    src: "/images/offers/project-management.jpg",
    position: "center 42%",
  },
  {
    alt: "Architecture and engineering planning",
    src: "/images/offers/architecture-planning.jpg",
    position: "35% center",
  },
] as const;

export const OffersProcess = () => {
  const { t } = useLocale();

  return (
    <div className="mt-14 space-y-6 sm:mt-20 sm:space-y-8 lg:mt-28 lg:space-y-12">
      {offerKeys.map((key, index) => {
        const image = offerImages[index];
        const stepNumber = `/03.${String(index + 1).padStart(2, "0")}`;
        const reversed = index % 2 === 1;

        return (
          <article
            className="group grid overflow-hidden border border-border/35 bg-surface lg:min-h-[34rem] lg:grid-cols-[minmax(0,1.22fr)_minmax(0,0.78fr)]"
            key={key}
          >
            <div
              className={`relative min-h-[20rem] overflow-hidden sm:min-h-[27rem] lg:min-h-0 ${
                reversed ? "lg:order-2" : ""
              }`}
            >
              <img
                alt={image.alt}
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.035]"
                decoding="async"
                height="1104"
                loading={index === 0 ? "eager" : "lazy"}
                src={image.src}
                style={{ objectPosition: image.position }}
                width="1024"
              />
              <div
                aria-hidden="true"
                className="from-black/35 absolute inset-0 bg-gradient-to-t via-transparent to-transparent opacity-70"
              />
            </div>

            <div
              className={`flex min-h-[19rem] flex-col justify-between p-6 sm:min-h-[22rem] sm:p-9 lg:min-h-0 lg:p-10 xl:p-12 ${
                reversed ? "lg:order-1" : ""
              }`}
            >
              <div className="flex items-start justify-between gap-5">
                <p className="font-mono text-[clamp(1.1rem,1.8vw,1.65rem)] leading-none tracking-[0.08em] text-primary">
                  {stepNumber}
                </p>
                <span
                  aria-hidden="true"
                  className="mt-1 size-2 shrink-0 rounded-full bg-primary"
                />
              </div>

              <div className="mt-14 sm:mt-20 lg:mt-0">
                <h3 className="max-w-[24rem] font-primary text-[clamp(2.25rem,4.2vw,4.65rem)] leading-[0.92] tracking-[-0.04em] text-foreground">
                  {t(key)}
                </h3>
                <p className="mt-6 max-w-[31rem] text-[14px] leading-[1.55] text-muted-foreground sm:mt-8 sm:text-[15px]">
                  {t(`${key}Body`)}
                </p>
              </div>

              <div className="mt-10 flex items-center gap-3 border-t border-border/25 pt-4 font-mono text-[9px] tracking-[0.18em] text-muted-foreground uppercase sm:mt-12">
                <span>BRICKINVEST</span>
                <span aria-hidden="true" className="h-px w-10 bg-primary" />
                <span>What we offer</span>
              </div>
            </div>
          </article>
        );
      })}
    </div>
  );
};
