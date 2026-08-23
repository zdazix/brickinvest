import { useLocale } from "@/lib/i18n";

const intelligenceItems = [
  ["intelligenceUnmatchedHeading", "intelligenceUnmatchedBody"],
  ["intelligenceReasoningHeading", "intelligenceReasoningBody"],
] as const;

export const IntelligenceSection = () => {
  const { t } = useLocale();

  return (
    <section
      aria-labelledby="ai-data-intelligence-heading"
      className="relative overflow-hidden border-t border-primary/15 bg-[#171716] px-6 py-24 sm:px-12 sm:py-32 lg:px-20 lg:py-40"
      id="ai-data-intelligence"
    >
      <div className="pointer-events-none absolute top-0 right-0 h-full w-1/2 bg-[radial-gradient(circle_at_80%_25%,rgba(216,196,161,0.08),transparent_58%)]" />
      <div className="relative mx-auto max-w-[1600px]">
        <div className="grid gap-14 lg:grid-cols-[0.7fr_1.3fr] lg:gap-24">
          <div>
            <p className="font-mono text-xs tracking-[0.28em] text-primary uppercase">
              07
            </p>
            <h2
              className="mt-5 max-w-md font-primary text-5xl leading-[0.92] tracking-[-0.035em] text-primary-foreground sm:text-7xl"
              id="ai-data-intelligence-heading"
            >
              {t("intelligenceHeading")}
            </h2>
          </div>
          <div className="min-w-0 lg:pt-10">
            <p className="max-w-2xl text-base leading-8 text-primary-foreground/70 sm:text-lg sm:leading-9">
              {t("intelligenceIntro")}
            </p>
            <div className="mt-12 border-t border-primary/35 sm:mt-16">
              {intelligenceItems.map(([heading, body], index) => (
                <article
                  className="border-b border-primary/20 py-8 sm:py-10"
                  key={heading}
                >
                  <p className="font-mono text-xs tracking-[0.18em] text-primary uppercase">
                    07.0{index + 1}
                  </p>
                  <h3 className="mt-4 max-w-2xl font-primary text-3xl leading-tight text-primary-foreground sm:text-4xl">
                    {t(heading)}
                  </h3>
                  <p className="mt-5 max-w-2xl text-base leading-8 text-primary-foreground/70 sm:text-lg sm:leading-9">
                    {t(body)}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
