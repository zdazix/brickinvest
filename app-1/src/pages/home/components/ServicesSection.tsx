import { useLocale } from "@/lib/i18n";
import { NumericText } from "@/components/ui/NumericText";

const services = [
  ["Land Acquisition", "serviceLandBody"],
  ["Residential Development", "serviceResidentialBody"],
  ["Commercial Real Estate", "serviceCommercialBody"],
  ["Hotel and Hospitality", "serviceHotelBody"],
  ["Business Acquisition", "serviceBusinessBody"],
  ["Property Management", "servicePropertyBody"],
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
            <p className="section-number">
              <NumericText>04</NumericText>
            </p>
            <h2 className="section-title" id="services-heading">
              {t("servicesHeading")}
            </h2>
          </div>
          <div className="min-w-0">
            <p className="body-copy mb-6">{t("servicesIntro")}</p>
            <div className="border-t border-border/30">
              {services.map(([title, body], index) => (
                <article
                  className="grid min-h-32 grid-cols-[4rem_minmax(0,1fr)_minmax(0,1fr)] items-start gap-4 border-b border-border/30 py-8 lg:grid-cols-[4rem_minmax(0,0.7fr)_minmax(0,1.3fr)] lg:gap-7"
                  key={title}
                >
                  <p className="section-label pt-1">
                    <NumericText>
                      {`04.${String(index + 1).padStart(2, "0")}`}
                    </NumericText>
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
