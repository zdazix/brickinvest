import { useLocale } from "@/lib/i18n";

const projectKeys = ["plots", "renovation", "newDevelopment"] as const;

export const ProjectsSection = () => {
  const { t } = useLocale();

  return (
    <section
      aria-labelledby="projects-heading"
      className="relative overflow-hidden border-t border-border bg-background px-6 py-12 sm:px-12 sm:py-16 lg:px-20 lg:py-24"
      id="projects"
    >
      <div className="relative mx-auto max-w-[1600px]">
        <div className="grid gap-10 lg:grid-cols-[0.7fr_1.3fr] lg:gap-16">
          <div>
            <p className="font-mono text-xs tracking-[0.28em] text-primary uppercase">
              05
            </p>
            <h2
              className="mt-5 font-primary text-6xl leading-[0.9] tracking-[-0.04em] text-foreground sm:text-8xl"
              id="projects-heading"
            >
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
