import { ImageIcon } from "lucide-react";

import { useLocale } from "@/lib/i18n";
import { NumericText } from "@/components/ui/NumericText";

const offerKeys = [
  "offerProjectManagement",
  "offerConstruction",
  "offerArchitecture",
  "offerPlots",
  "offerDevelopments",
  "offerRoi",
  "offerMultilingual",
  "offerLegacy",
] as const;

const offerImages: Partial<
  Record<
    (typeof offerKeys)[number],
    { readonly alt: string; readonly src: string }
  >
> = {
  offerProjectManagement: {
    alt: "Project management planning",
    src: "/images/offers/project-management.jpg",
  },
  offerConstruction: {
    alt: "In-house construction project",
    src: "/images/offers/construction-project.jpg",
  },
  offerArchitecture: {
    alt: "Architecture and engineering planning",
    src: "/images/offers/architecture-planning.jpg",
  },
};

export const OffersSection = () => {
  const { t } = useLocale();

  return (
    <section
      aria-labelledby="what-we-offer-heading"
      className="section-shell grain-surface relative overflow-hidden bg-background"
      id="what-we-offer"
    >
      <div className="relative mx-auto max-w-[1600px]">
        <div className="section-grid">
          <div>
            <p className="section-number">
              <NumericText>03</NumericText>
            </p>
            <h2 className="section-title" id="what-we-offer-heading">
              {t("offerHeading")}
            </h2>
          </div>
          <div className="grid min-w-0 grid-cols-1 gap-4 border-t border-border/30 pt-4 sm:grid-cols-2 lg:grid-cols-4">
            {offerKeys.map((key, index) => {
              const image = offerImages[key];

              return (
                <article
                  className="flex h-full min-h-[24rem] min-w-0 flex-col border border-border/35 bg-surface p-4 sm:min-h-[26rem] sm:p-5"
                  key={key}
                >
                  <div className="relative grid aspect-[4/3] w-full place-items-center overflow-hidden border border-dashed border-border/40 bg-secondary/40 text-primary/60">
                    {image ? (
                      <img
                        alt={image.alt}
                        className="absolute inset-0 h-full w-full object-cover"
                        src={image.src}
                      />
                    ) : (
                      <ImageIcon
                        aria-hidden="true"
                        className="size-7 stroke-[1.25]"
                      />
                    )}
                  </div>
                  <div className="flex flex-1 flex-col pt-5">
                    <p className="section-label">
                      <NumericText>
                        {`03.${String(index + 1).padStart(2, "0")}`}
                      </NumericText>
                    </p>
                    <h3 className="mt-3 max-w-xs min-w-0 font-primary text-xl leading-tight text-foreground sm:text-2xl">
                      <NumericText>{t(key)}</NumericText>
                    </h3>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
