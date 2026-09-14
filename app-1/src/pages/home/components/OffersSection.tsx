import { NumericText } from "@/components/ui/NumericText";
import { useLocale } from "@/lib/i18n";

import { OffersCarousel } from "./OffersCarousel";

export const OffersSection = () => {
  const { t } = useLocale();

  return (
    <section
      aria-labelledby="what-we-offer-heading"
      className="section-shell grain-surface relative overflow-hidden bg-background"
      id="what-we-offer"
    >
      <div className="relative mx-auto max-w-[1600px]">
        <div className="section-grid">
          <div>
            <p className="section-number">
              <NumericText>03</NumericText>
            </p>
            <h2 className="section-title" id="what-we-offer-heading">
              {t("offerHeading")}
            </h2>
          </div>
          <OffersCarousel />
        </div>
      </div>
    </section>
  );
};
