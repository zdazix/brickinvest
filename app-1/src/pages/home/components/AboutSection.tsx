import { useLocale } from "@/lib/i18n";

export const AboutSection = () => {
  const { t } = useLocale();

  return (
    <section
      aria-labelledby="about-us-heading"
      className="section-shell relative overflow-hidden bg-background"
      id="about-us"
    >
      <div className="pointer-events-none absolute inset-y-0 right-0 w-1/2 bg-[radial-gradient(circle_at_70%_35%,rgba(216,196,161,0.08),transparent_55%)]" />
      <div className="section-grid relative">
        <div>
          <p className="font-mono text-xs tracking-[0.28em] text-primary uppercase">
            01
          </p>
          <h2 className="section-title" id="about-us-heading">
            {t("aboutHeading")}
          </h2>
          <div className="mt-8 h-px w-20 bg-primary" />
        </div>
        <div className="max-w-3xl lg:pt-8">
          <p className="editorial-intro">{t("aboutSupporting")}</p>
          <p className="body-copy mt-7">{t("aboutBody")}</p>
        </div>
      </div>
    </section>
  );
};
