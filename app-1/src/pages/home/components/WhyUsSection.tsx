import { useLocale } from "@/lib/i18n";

export const WhyUsSection = () => {
  const { t } = useLocale();

  return (
    <section
      aria-labelledby="why-us-heading"
      className="relative overflow-hidden border-t border-primary/15 bg-[#171716] px-6 py-24 sm:px-12 sm:py-32 lg:px-20 lg:py-40"
      id="why-us"
    >
      <div className="pointer-events-none absolute top-0 right-0 h-full w-1/2 bg-[linear-gradient(135deg,transparent_30%,rgba(216,196,161,0.045)_100%)]" />
      <div className="relative mx-auto grid max-w-[1600px] gap-16 lg:grid-cols-[0.8fr_1.2fr] lg:gap-28">
        <div>
          <p className="font-mono text-xs tracking-[0.28em] text-primary uppercase">
            02
          </p>
          <h2
            className="mt-5 max-w-md font-primary text-6xl leading-[0.9] tracking-[-0.04em] text-primary-foreground sm:text-8xl"
            id="why-us-heading"
          >
            {t("whyHeading")}
          </h2>
        </div>
        <div className="max-w-3xl lg:pt-10">
          <p className="max-w-2xl font-primary text-4xl leading-[1.04] tracking-[-0.03em] text-primary-foreground sm:text-6xl">
            {t("whySupporting")}
          </p>
          <div className="mt-16 border-t border-primary/35 pt-7 sm:mt-20 sm:pt-9">
            <p className="font-mono text-xs tracking-[0.2em] text-primary uppercase">
              02.01
            </p>
            <h3 className="mt-5 font-primary text-3xl tracking-[-0.02em] text-primary-foreground sm:text-4xl">
              {t("deepInsight")}
            </h3>
            <p className="mt-5 max-w-2xl text-base leading-8 text-primary-foreground/70 sm:text-lg sm:leading-9">
              {t("deepInsightBody")}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
