import { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { ArrowLeft, ArrowRight, ImageIcon } from "lucide-react";

import { IconButton } from "@/components/ui/IconButton";
import { useLocale } from "@/lib/i18n";

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

export const OffersCarousel = () => {
  const { t } = useLocale();
  const [viewportRef, carouselApi] = useEmblaCarousel({
    align: "start",
    containScroll: "trimSnaps",
    loop: false,
    slidesToScroll: 1,
  });
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);
  const [canScrollPrevious, setCanScrollPrevious] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(false);

  const updateCarouselState = useCallback(() => {
    if (!carouselApi) return;

    setSelectedIndex(carouselApi.selectedScrollSnap());
    setScrollSnaps(carouselApi.scrollSnapList());
    setCanScrollPrevious(carouselApi.canScrollPrev());
    setCanScrollNext(carouselApi.canScrollNext());
  }, [carouselApi]);

  useEffect(() => {
    if (!carouselApi) return;

    const animationFrame = requestAnimationFrame(updateCarouselState);
    carouselApi.on("select", updateCarouselState);
    carouselApi.on("reInit", updateCarouselState);

    return () => {
      cancelAnimationFrame(animationFrame);
      carouselApi.off("select", updateCarouselState);
      carouselApi.off("reInit", updateCarouselState);
    };
  }, [carouselApi, updateCarouselState]);

  return (
    <div
      aria-label="What we offer carousel"
      className="min-w-0 border-t border-border/30 pt-4"
      role="region"
    >
      <div className="flex items-center justify-end gap-2">
        <IconButton
          aria-label="Previous offer"
          className="size-10 rounded-none"
          disabled={!canScrollPrevious}
          onClick={() => carouselApi?.scrollPrev()}
          type="button"
        >
          <ArrowLeft aria-hidden="true" className="size-4" />
        </IconButton>
        <IconButton
          aria-label="Next offer"
          className="size-10 rounded-none"
          disabled={!canScrollNext}
          onClick={() => carouselApi?.scrollNext()}
          tone="primary"
          type="button"
        >
          <ArrowRight aria-hidden="true" className="size-4" />
        </IconButton>
      </div>

      <div className="mt-5 overflow-hidden" ref={viewportRef}>
        <div className="flex touch-pan-y">
          {offerKeys.map((key, index) => {
            const image = offerImages[key];
            const stepNumber = `03.${String(index + 1).padStart(2, "0")}`;

            return (
              <div
                className="min-w-0 flex-[0_0_100%] pr-0 sm:flex-[0_0_92%] sm:pr-4 lg:flex-[0_0_88%]"
                key={key}
              >
                <article className="relative isolate flex h-[29rem] flex-col justify-end overflow-hidden border border-border/35 bg-secondary sm:h-[32rem] lg:h-[35rem]">
                  {image ? (
                    <img
                      alt={image.alt}
                      className="absolute inset-0 z-0 h-full w-full object-cover"
                      decoding="async"
                      height="1200"
                      loading={index === 0 ? "eager" : "lazy"}
                      src={image.src}
                      width="900"
                    />
                  ) : (
                    <div
                      aria-hidden="true"
                      className="absolute inset-0 z-0 grid place-items-center bg-secondary text-primary/60"
                    >
                      <ImageIcon className="size-12 stroke-[1.1]" />
                    </div>
                  )}
                  <div
                    aria-hidden="true"
                    className="from-black/90 via-black/35 to-black/5 absolute inset-0 z-10 bg-gradient-to-t"
                  />
                  <div className="relative z-10 p-6 text-white sm:p-8 lg:p-10">
                    <p className="font-mono text-[10px] tracking-[0.2em] text-primary uppercase">
                      {stepNumber}
                    </p>
                    <h3 className="mt-4 max-w-[34rem] font-primary text-[clamp(1.9rem,3.4vw,3.6rem)] leading-[0.95] tracking-[-0.03em] text-white">
                      {t(key)}
                    </h3>
                  </div>
                </article>
              </div>
            );
          })}
        </div>
      </div>

      <div
        aria-label="Select offer"
        className="mt-5 flex items-center justify-center gap-2"
        role="group"
      >
        {scrollSnaps.map((_, index) => (
          <button
            aria-label={`Show offer ${index + 1}`}
            aria-pressed={selectedIndex === index}
            className={`h-1.5 rounded-full transition-[width,background-color] ${
              selectedIndex === index
                ? "w-8 bg-primary"
                : "w-1.5 bg-border/50 hover:bg-muted-foreground"
            }`}
            key={`offer-slide-${index}`}
            onClick={() => carouselApi?.scrollTo(index)}
            type="button"
          />
        ))}
      </div>
    </div>
  );
};
