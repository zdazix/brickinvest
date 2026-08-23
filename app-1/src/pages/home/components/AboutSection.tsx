import { useLocale } from "@/lib/i18n";

export const AboutSection = () => {
  const { t } = useLocale();

  return (
    <section
      aria-labelledby="about-us-heading"
      className="relative overflow-hidden border-t border-border bg-background px-6 py-12 sm:px-12 sm:py-16 lg:px-20 lg:py-24"
      id="about-us"
    >
      <div className="pointer-events-none absolute inset-y-0 right-0 w-1/2 bg-[radial-gradient(circle_at_70%_35%,rgba(216,196,161,0.08),transparent_55%)]" />
      <div className="relative mx-auto grid max-w-[1600px] gap-10 lg:grid-cols-[0.7fr_1.3fr] lg:gap-16">
        <div>
          <p className="font-mono text-xs tracking-[0.28em] text-primary uppercase">
            01
          </p>
          <h2
            className="mt-5 font-primary text-6xl leading-none tracking-[-0.04em] text-foreground sm:text-8xl"
            id="about-us-heading"
          >
            {t("aboutHeading")}
          </h2>
          <div className="mt-8 h-px w-20 bg-primary" />
        </div>
        <div className="max-w-3xl lg:pt-8">
          <p className="max-w-2xl font-primary text-3xl leading-[1.08] tracking-[-0.025em] text-foreground sm:text-5xl">
            {t("aboutSupporting")}
          </p>
          <p className="mt-7 max-w-2xl text-base leading-8 text-foreground/70 sm:text-lg sm:leading-9">
            {t("aboutBody")}
          </p>
        </div>
      </div>
    </section>
  );
};
