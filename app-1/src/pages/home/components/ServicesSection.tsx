import { useLocale } from "@/lib/i18n";

const services = [
  ["Land Acquisition", "serviceLandBody"],
  ["Residential Development", "serviceResidentialBody"],
  ["Commercial Real Estate", "serviceCommercialBody"],
  ["Hotel and Hospitality", "serviceHotelBody"],
  ["Business Acquisition", "serviceBusinessBody"],
] as const;

export const ServicesSection = () => {
  const { t } = useLocale();

  return (
    <section
      aria-labelledby="our-services-heading"
      className="relative overflow-hidden border-t border-border bg-surface px-6 py-16 sm:px-12 sm:py-20 lg:px-20 lg:py-24"
      id="our-services"
    >
      <div className="relative mx-auto max-w-[1600px]">
        <div className="mb-10 grid gap-6 lg:grid-cols-[0.7fr_1.3fr] lg:gap-16">
          <div>
            <p className="font-mono text-xs tracking-[0.28em] text-primary uppercase">
              04
            </p>
            <h2
              className="mt-5 font-primary text-6xl leading-[0.9] tracking-[-0.04em] text-foreground sm:text-8xl"
              id="our-services-heading"
            >
              {t("servicesHeading")}
            </h2>
          </div>
          <p className="max-w-2xl self-end font-primary text-3xl leading-[1.08] tracking-[-0.025em] text-foreground sm:text-5xl lg:pb-2">
            {t("servicesSupporting")}
          </p>
        </div>
        <p className="mb-8 max-w-2xl text-base leading-8 text-foreground/70 sm:text-lg">
          {t("servicesIntro")}
        </p>
        <div className="border-t border-primary/35">
          {services.map(([title, body], index) => (
            <article
              className="grid gap-4 border-b border-primary/20 py-6 sm:grid-cols-[5rem_0.7fr_1.3fr] sm:items-start sm:gap-8 sm:py-7"
              key={title}
            >
              <p className="font-mono text-xs tracking-[0.18em] text-primary uppercase">
                04.{String(index + 1).padStart(2, "0")}
              </p>
              <h3 className="font-primary text-3xl leading-tight text-foreground sm:text-4xl">
                {title}
              </h3>
              <p className="max-w-xl text-base leading-8 text-foreground/70 sm:text-lg sm:leading-9">
                {t(body)}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
