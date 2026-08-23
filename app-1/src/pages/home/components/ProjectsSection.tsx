import { useLocale } from "@/lib/i18n";

const projectKeys = ["plots", "renovation", "newDevelopment"] as const;

export const ProjectsSection = () => {
  const { t } = useLocale();

  return (
    <section
      aria-labelledby="projects-heading"
      className="section-shell relative overflow-hidden bg-background"
      id="projects"
    >
      <div className="relative mx-auto max-w-[1600px]">
        <div className="section-grid">
          <div>
            <p className="font-mono text-xs tracking-[0.28em] text-primary uppercase">
              05
            </p>
            <h2 className="section-title" id="projects-heading">
              {t("projectsHeading")}
            </h2>
          </div>
          <div className="border-t border-primary/35">
            {projectKeys.map((key, index) => (
              <div
                className="group flex items-center justify-between gap-6 border-b border-primary/20 py-6 transition-colors hover:bg-primary/5 sm:py-7"
                key={key}
              >
                <div className="flex items-start gap-6 sm:gap-10">
                  <span className="pt-1 font-mono text-xs tracking-[0.18em] text-primary">
                    05.0{index + 1}
                  </span>
                  <span className="font-primary text-3xl leading-tight text-foreground sm:text-5xl">
                    {t(key)}
                  </span>
                </div>
                <span className="text-2xl text-primary/60 transition-transform group-hover:translate-x-1">
                  ↗
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
