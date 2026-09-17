import { NumericText } from "@/components/ui/NumericText";
import { useLocale } from "@/lib/i18n";

import { OffersProcess } from "./OffersProcess";

export const OffersSection = () => {
  const { t } = useLocale();

  return (
    <section
      aria-labelledby="what-we-offer-heading"
      className="section-shell grain-surface relative overflow-hidden bg-background"
      id="what-we-offer"
    >
      <div className="relative mx-auto max-w-[1600px]">
        <div className="section-grid items-end">
          <div>
            <p className="section-number">
              <NumericText>03</NumericText>
            </p>
            <h2 className="section-title" id="what-we-offer-heading">
              {t("offerHeading")}
            </h2>
          </div>
          <p className="max-w-xl border-t border-border/30 pt-4 font-primary text-[clamp(1.55rem,2.35vw,2.45rem)] leading-[1.05] tracking-[-0.025em] text-foreground/75">
            {t("offerSupporting")}
          </p>
        </div>
        <OffersProcess />
      </div>
    </section>
  );
};
