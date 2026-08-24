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
            <p className="section-number">03</p>
            <h2 className="section-title" id="what-we-offer-heading">
              {t("offerHeading")}
            </h2>
          </div>
          <div className="grid gap-x-10 border-t border-primary/35 sm:grid-cols-2">
            {offerKeys.map((key, index) => (
              <div
                className="grid min-h-32 grid-cols-[4rem_minmax(0,1fr)] items-start gap-6 border-b border-primary/20 py-8"
                key={key}
              >
                <p className="section-label pt-1">
                  03.{String(index + 1).padStart(2, "0")}
                </p>
                <p className="max-w-xs min-w-0 font-primary text-2xl leading-tight text-foreground sm:text-3xl">
                  {t(key)}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
