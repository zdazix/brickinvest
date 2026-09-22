import { useLocale } from "@/lib/i18n";

const intelligenceItems = [
  ["intelligenceUnmatchedHeading", "intelligenceUnmatchedBody"],
  ["intelligenceReasoningHeading", "intelligenceReasoningBody"],
] as const;

export const IntelligenceSection = () => {
  const { t } = useLocale();

  return (
    <section
      aria-labelledby="ai-data-heading"
      className="section-shell grain-surface relative overflow-hidden bg-surface"
      id="ai-data"
    >
      <div className="pointer-events-none absolute top-0 right-0 h-full w-1/2 bg-[radial-gradient(circle_at_80%_25%,rgba(216,195,154,0.08),transparent_58%)]" />
      <div className="relative mx-auto max-w-[1600px]">
        <div className="section-grid">
          <div className="min-w-0">
            <h2
              className="section-title min-w-0 [overflow-wrap:anywhere]"
              id="ai-data-heading"
            >
              {t("intelligenceHeading")}
            </h2>
          </div>
          <div className="min-w-0">
            <p className="body-copy">{t("intelligenceIntro")}</p>
            <div className="mt-10 max-w-[720px] border-t border-border/30">
              {intelligenceItems.map(([heading, body]) => (
                <article
                  className="border-b border-border/30 py-8"
                  key={heading}
                >
                  <h3 className="subsection-title mt-4 max-w-[650px] min-w-0 [overflow-wrap:anywhere]">
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
