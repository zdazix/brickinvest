import { useState } from "react";

import { useConsultation } from "@/components/layout/consultation-context";
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
  const { closeConsultation, isConsultationOpen, openConsultation } =
    useConsultation();
  const [activeProject, setActiveProject] = useState<
    (typeof projectKeys)[number] | null
  >(null);

  return (
    <section
      aria-labelledby="projects-heading"
      className="section-shell grain-surface relative overflow-visible bg-surface"
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
            <p className="mt-7 max-w-md font-primary text-[clamp(1.53rem,2.55vw,2.34rem)] leading-[0.95] tracking-[-0.03em] text-foreground">
              WE HAVE HUNDREDS OF PROJECT OPPORTUNITIES FOR YOU.
            </p>
            <button
              aria-expanded={isConsultationOpen}
              aria-label="Get your personal investment proposal"
              className="projects-cta mt-6 inline-flex cursor-pointer items-center rounded-none border-b-[2px] border-primary bg-transparent px-2 py-2 text-left text-[14px] font-bold tracking-[0.07em] text-foreground/75 uppercase transition-[border-color,border-width,color] duration-250 ease-in-out hover:border-primary/80 hover:text-primary focus-visible:border-primary/80 focus-visible:text-primary focus-visible:ring-2 focus-visible:ring-ring/60 focus-visible:outline-none active:border-primary/80 active:text-primary"
              data-consultation
              data-cursor-cta
              onClick={() => {
                if (isConsultationOpen) closeConsultation();
                else openConsultation();
              }}
              title="Get your personal investment proposal"
              type="button"
            >
              <span>GET YOUR PERSONAL INVESTMENT PROPOSAL</span>
              <span
                aria-hidden="true"
                className="projects-cta-arrow ml-2 inline-block text-[18px] leading-none font-extrabold text-primary transition-transform duration-250 ease-in-out"
              >
                →
              </span>
            </button>
          </div>
          <div className="border-t border-border/35">
            {projectKeys.map((key, index) => (
              <button
                aria-label={`View ${t(key)}`}
                className="group relative z-0 grid min-h-36 w-full grid-cols-[5rem_minmax(0,1fr)_2.5rem] items-center gap-7 overflow-visible border-b border-border/20 px-0 py-8 text-left transition-colors hover:z-20 hover:bg-secondary focus-visible:z-20 focus-visible:bg-secondary sm:min-h-40"
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
                <span
                  aria-hidden="true"
                  className={`pointer-events-none absolute top-1/2 right-0 z-0 h-32 w-56 -translate-y-1/2 overflow-hidden bg-foreground opacity-0 grayscale transition-[opacity,filter,transform] duration-500 ease-out group-hover:scale-[1.015] group-hover:opacity-100 group-hover:grayscale-0 sm:right-0 sm:h-[min(50vh,24rem)] sm:w-[min(50vw,42rem)] ${activeProject === key ? "scale-[1.015] opacity-100 grayscale-0" : ""}`}
                >
                  <img
                    alt={t(key)}
                    className="h-full w-full object-cover"
                    decoding="async"
                    height="600"
                    loading="lazy"
                    src={projectImages[key]}
                    width="900"
                  />
                </span>
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
