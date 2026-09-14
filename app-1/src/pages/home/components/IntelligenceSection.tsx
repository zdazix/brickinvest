import { useLocale } from "@/lib/i18n";
import { NumericText } from "@/components/ui/NumericText";

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
            <p className="section-number">
              <NumericText>06</NumericText>
            </p>
            <h2 className="section-title" id="ai-data-heading">
              AI &amp; DATA
              <br />
              INTELLIGENCE
            </h2>
          </div>
          <div className="min-w-0">
            <p className="body-copy">{t("intelligenceIntro")}</p>
            <div className="mt-10 max-w-[720px] border-t border-border/30">
              {intelligenceItems.map(([heading, body], index) => (
                <article
                  className="border-b border-border/30 py-8"
                  key={heading}
                >
                  <p className="section-label">
                    <NumericText>{`07.0${index + 1}`}</NumericText>
                  </p>
                  <h3 className="subsection-title mt-4 max-w-[650px]">
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
