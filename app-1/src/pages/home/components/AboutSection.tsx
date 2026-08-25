import { useLocale } from "@/lib/i18n";

export const AboutSection = () => {
  const { t } = useLocale();

  return (
    <section
      aria-labelledby="about-heading"
      className="section-shell grain-surface relative overflow-hidden bg-background"
      id="about"
    >
      <div className="pointer-events-none absolute inset-y-0 right-0 w-1/2 bg-[radial-gradient(circle_at_70%_35%,rgba(216,195,154,0.08),transparent_55%)]" />
      <div className="section-grid relative">
        <div>
          <p className="section-number">01</p>
          <h2 className="section-title" id="about-heading">
            {t("aboutHeading")}
          </h2>
          <div className="mt-8 h-px w-20 bg-primary/30" />
        </div>
        <div className="min-w-0">
          <p className="editorial-intro max-w-[760px] leading-[1.08]">
            {t("aboutSupporting")}
          </p>
          <p className="body-copy mt-8 max-w-[650px]">{t("aboutBody")}</p>
        </div>
      </div>
    </section>
  );
};
