import { useState } from "react";

import { useLocale } from "@/lib/i18n";
import { trackEvent } from "@/lib/analytics";
import { NumericText } from "@/components/ui/NumericText";

const projectKeys = ["plots", "renovation", "newDevelopment"] as const;

const projectImages = {
  plots: "/images/projects/plots.png",
  renovation:
    "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=900&q=80",
  newDevelopment: "/images/projects/new-development.png",
} as const;

export const ProjectsSection = () => {
  const { t } = useLocale();
  const [activeProject, setActiveProject] = useState<
    (typeof projectKeys)[number] | null
  >(null);

  return (
    <section
      aria-labelledby="projects-heading"
      className="section-shell grain-surface relative overflow-hidden bg-surface"
      id="projects"
    >
      <div className="relative mx-auto max-w-[1600px]">
        <div className="section-grid">
          <div>
            <p className="section-number">
              <NumericText>05</NumericText>
            </p>
            <h2 className="section-title" id="projects-heading">
              {t("projectsHeading")}
            </h2>
          </div>
          <div className="border-t border-border/35">
            {projectKeys.map((key, index) => (
              <button
                aria-label={`View ${t(key)}`}
                className="group relative grid min-h-36 w-full grid-cols-[5rem_minmax(0,1fr)_2.5rem] items-center gap-7 overflow-hidden border-b border-border/20 px-0 py-8 text-left transition-colors hover:bg-secondary focus-visible:bg-secondary sm:min-h-40"
                data-cursor-project
                key={key}
                onClick={() => {
                  trackEvent("project_category_view", {
                    category:
                      key === "newDevelopment" ? "new_development" : key,
                  });
                }}
                onBlur={() => setActiveProject(null)}
                onFocus={() => setActiveProject(key)}
                onMouseEnter={() => setActiveProject(key)}
                onMouseLeave={() => setActiveProject(null)}
                type="button"
              >
                <span className="section-label relative z-10 pt-1">
                  <NumericText>{`05.0${index + 1}`}</NumericText>
                </span>
                <span className="relative z-10 max-w-[22rem] min-w-0 font-primary text-[clamp(1.3rem,2vw,2.1rem)] leading-[1.08] tracking-[-0.018em] text-foreground">
                  {t(key)}
                </span>
                <img
                  alt={t(key)}
                  className={`absolute top-1/2 right-16 z-0 h-36 w-56 -translate-y-1/2 object-cover opacity-0 grayscale transition-[opacity,filter] duration-500 ease-out group-hover:opacity-100 group-hover:grayscale-0 sm:right-24 sm:h-40 sm:w-[min(50vw,18rem)] ${activeProject === key ? "opacity-100 grayscale-0" : ""}`}
                  decoding="async"
                  height="600"
                  loading="lazy"
                  src={projectImages[key]}
                  width="900"
                />
                <span className="relative z-10 text-xl text-primary/60 transition-transform duration-300 group-hover:translate-x-1">
                  ↗
                </span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
