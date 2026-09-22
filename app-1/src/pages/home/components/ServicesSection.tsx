import { useLocale } from "@/lib/i18n";

const services = [
  ["serviceLand", "serviceLandBody"],
  ["serviceResidential", "serviceResidentialBody"],
  ["serviceCommercial", "serviceCommercialBody"],
  ["serviceHotel", "serviceHotelBody"],
  ["serviceBusiness", "serviceBusinessBody"],
  ["serviceProperty", "servicePropertyBody"],
] as const;

export const ServicesSection = () => {
  const { t } = useLocale();

  return (
    <section
      aria-labelledby="services-heading"
      className="section-shell grain-surface relative overflow-hidden bg-secondary"
      id="services"
    >
      <div className="relative mx-auto max-w-[1600px]">
        <div className="section-grid">
          <div className="min-w-0">
            <h2 className="section-title" id="services-heading">
              {t("servicesHeading")}
            </h2>
          </div>
          <div className="min-w-0">
            <p className="body-copy mb-6">{t("servicesIntro")}</p>
            <div className="border-t border-border/30">
              {services.map(([title, body]) => (
                <article
                  className="grid min-h-32 grid-cols-1 items-start gap-4 border-b border-border/30 py-8 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] lg:gap-7"
                  key={title}
                >
                  <h3 className="subsection-title min-w-0 whitespace-nowrap">
                    {t(title)}
                  </h3>
                  <p className="body-copy min-w-0">{t(body)}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
