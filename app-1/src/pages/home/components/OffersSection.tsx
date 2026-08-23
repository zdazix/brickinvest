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
      className="relative overflow-hidden border-t border-border bg-background px-6 py-12 sm:px-12 sm:py-16 lg:px-20 lg:py-24"
      id="what-we-offer"
    >
      <div className="relative mx-auto max-w-[1600px]">
        <div className="grid gap-10 lg:grid-cols-[0.7fr_1.3fr] lg:gap-16">
          <div>
            <p className="font-mono text-xs tracking-[0.28em] text-primary uppercase">
              03
            </p>
            <h2
              className="mt-5 max-w-md font-primary text-6xl leading-[0.9] tracking-[-0.04em] text-foreground sm:text-8xl"
              id="what-we-offer-heading"
            >
              {t("offerHeading")}
            </h2>
          </div>
          <div className="grid gap-x-10 border-t border-primary/35 sm:grid-cols-2">
            {offerKeys.map((key, index) => (
              <div
                className="border-b border-primary/20 py-7 sm:py-8"
                key={key}
              >
                <p className="font-mono text-xs tracking-[0.18em] text-primary uppercase">
                  03.{String(index + 1).padStart(2, "0")}
                </p>
                <p className="mt-4 max-w-xs font-primary text-2xl leading-tight text-foreground sm:text-3xl">
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
