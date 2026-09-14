import { useLocale } from "@/lib/i18n";

export const WhyUsSection = () => {
  const { t } = useLocale();

  return (
    <section
      aria-labelledby="why-us-heading"
      className="section-shell grain-surface relative overflow-hidden bg-surface"
      id="why-us"
    >
      <div className="pointer-events-none absolute top-0 right-0 h-full w-1/2 bg-[linear-gradient(135deg,transparent_30%,rgba(216,195,154,0.045)_100%)]" />
      <div className="section-grid relative">
        <div>
          <h2 className="section-title" id="why-us-heading">
            {t("whyHeading")}
          </h2>
        </div>
        <div className="max-w-3xl lg:pt-8">
          <p className="editorial-intro">{t("whySupporting")}</p>
          <p className="body-copy mt-7">{t("whyBody")}</p>
          <div className="mt-8 border-t border-border/30 pt-6 sm:mt-10 sm:pt-7">
            <h3 className="mt-5 font-primary text-2xl tracking-[-0.018em] text-foreground sm:text-3xl">
              {t("deepInsight")}
            </h3>
            <p className="body-copy mt-5">{t("deepInsightBody")}</p>
          </div>
        </div>
      </div>
    </section>
  );
};
