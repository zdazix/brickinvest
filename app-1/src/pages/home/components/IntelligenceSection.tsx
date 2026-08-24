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
      className="section-shell grain-surface relative overflow-hidden bg-surface"
      id="ai-data-intelligence"
    >
      <div className="pointer-events-none absolute top-0 right-0 h-full w-1/2 bg-[radial-gradient(circle_at_80%_25%,rgba(216,195,154,0.08),transparent_58%)]" />
      <div className="relative mx-auto max-w-[1600px]">
        <div className="section-grid">
          <div className="min-w-0">
            <p className="font-mono text-xs tracking-[0.28em] text-primary uppercase">
              07
            </p>
            <h2 className="section-title" id="ai-data-intelligence-heading">
              AI &amp; DATA
              <br />
              INTELLIGENCE
            </h2>
          </div>
          <div className="min-w-0">
            <p className="body-copy">{t("intelligenceIntro")}</p>
            <div className="mt-11 max-w-[720px] border-t border-primary/35">
              {intelligenceItems.map(([heading, body], index) => (
                <article
                  className="border-b border-primary/20 py-8"
                  key={heading}
                >
                  <p className="font-mono text-xs tracking-[0.18em] text-primary uppercase">
                    07.0{index + 1}
                  </p>
                  <h3 className="mt-4 max-w-[650px] font-primary text-3xl leading-tight text-foreground sm:text-4xl">
                    {t(heading)}
                  </h3>
                  <p className="body-copy mt-7 max-w-[650px]">{t(body)}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
