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
      className="section-shell relative overflow-hidden bg-surface"
      id="our-services"
    >
      <div className="relative mx-auto max-w-[1600px]">
        <div className="grid gap-8 lg:grid-cols-[minmax(0,0.7fr)_minmax(0,1.3fr)] lg:gap-16">
          <div>
            <p className="font-mono text-xs tracking-[0.28em] text-primary uppercase">
              04
            </p>
            <h2 className="section-title" id="our-services-heading">
              {t("servicesHeading")}
            </h2>
          </div>
          <p className="editorial-intro">{t("servicesSupporting")}</p>
        </div>
        <p className="body-copy mb-8">{t("servicesIntro")}</p>
        <div className="border-t border-primary/35">
          {services.map(([title, body], index) => (
            <article
              className="grid gap-4 border-b border-primary/20 py-6 sm:grid-cols-[5rem_minmax(0,0.7fr)_minmax(0,1.3fr)] sm:items-start sm:gap-8"
              key={title}
            >
              <p className="font-mono text-xs tracking-[0.18em] text-primary uppercase">
                04.{String(index + 1).padStart(2, "0")}
              </p>
              <h3 className="min-w-0 font-primary text-3xl leading-tight text-foreground sm:text-4xl">
                {title}
              </h3>
              <p className="body-copy min-w-0">{t(body)}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
