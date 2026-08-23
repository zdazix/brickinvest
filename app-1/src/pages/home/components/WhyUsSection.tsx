import { useLocale } from "@/lib/i18n";

export const WhyUsSection = () => {
  const { t } = useLocale();

  return (
    <section
      aria-labelledby="why-us-heading"
      className="relative overflow-hidden border-t border-border bg-surface px-6 py-16 sm:px-12 sm:py-20 lg:px-20 lg:py-24"
      id="why-us"
    >
      <div className="pointer-events-none absolute top-0 right-0 h-full w-1/2 bg-[linear-gradient(135deg,transparent_30%,rgba(216,196,161,0.045)_100%)]" />
      <div className="relative mx-auto grid max-w-[1600px] gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
        <div>
          <h2
            className="mt-5 max-w-md font-primary text-6xl leading-[0.9] tracking-[-0.04em] text-foreground sm:text-8xl"
            id="why-us-heading"
          >
            {t("whyHeading")}
          </h2>
        </div>
        <div className="max-w-3xl lg:pt-6">
          <p className="max-w-2xl font-primary text-4xl leading-[1.04] tracking-[-0.03em] text-foreground sm:text-6xl">
            {t("whySupporting")}
          </p>
          <p className="mt-7 max-w-2xl text-base leading-8 text-foreground/70 sm:text-lg sm:leading-9">
            {t("whyBody")}
          </p>
          <div className="mt-10 border-t border-primary/35 pt-6 sm:mt-12 sm:pt-7">
            <h3 className="mt-5 font-primary text-3xl tracking-[-0.02em] text-foreground sm:text-4xl">
              {t("deepInsight")}
            </h3>
            <p className="mt-5 max-w-2xl text-base leading-8 text-foreground/70 sm:text-lg sm:leading-9">
              {t("deepInsightBody")}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
