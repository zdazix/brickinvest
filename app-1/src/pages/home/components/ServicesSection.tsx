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
      className="section-shell grain-surface relative overflow-hidden bg-secondary"
      id="our-services"
    >
      <div className="relative mx-auto max-w-[1600px]">
        <div className="section-grid">
          <div className="min-w-0">
            <p className="section-number">04</p>
            <h2 className="section-title" id="our-services-heading">
              {t("servicesHeading")}
            </h2>
          </div>
          <div className="min-w-0">
            <p className="body-copy mb-6">{t("servicesIntro")}</p>
            <div className="border-t border-primary/35">
              {services.map(([title, body], index) => (
                <article
                  className="grid min-h-32 grid-cols-[4rem_minmax(0,0.7fr)_minmax(0,1.3fr)] items-start gap-7 border-b border-primary/20 py-8"
                  key={title}
                >
                  <p className="section-label pt-1">
                    04.{String(index + 1).padStart(2, "0")}
                  </p>
                  <h3 className="subsection-title min-w-0">{title}</h3>
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
