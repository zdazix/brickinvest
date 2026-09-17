import { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { ArrowLeft, ArrowRight } from "lucide-react";

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

const offerImages = [
  {
    alt: "Project management planning on a tablet",
    kind: "image",
    src: "/images/offers/project-management.jpg",
    position: "center 68%",
  },
  {
    alt: "In-house construction project",
    kind: "image",
    src: "/images/offers/construction-project.jpg",
    position: "center center",
  },
  {
    alt: "Architecture and engineering planning",
    kind: "image",
    src: "/images/offers/architecture-planning.jpg",
    position: "center center",
  },
  {
    alt: "Unique development plot",
    kind: "image",
    src: "/images/offers/03-04.jpg",
    position: "center center",
  },
  {
    alt: "Bespoke ready-made development",
    kind: "image",
    src: "/images/offers/03-05.png",
    position: "center center",
  },
  {
    alt: "Investment return opportunity",
    kind: "video",
    src: "/videos/offers-03-06.mp4",
    position: "65% center",
  },
  {
    alt: "Multilingual investor support",
    kind: "image",
    src: "/images/offers/03-07.jpg",
    position: "center center",
  },
  {
    alt: "Architecture and engineering planning",
    kind: "image",
    src: "/images/offers/architecture-planning.jpg",
    position: "35% center",
  },
] as const;

export const OffersProcess = () => {
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
    <div className="mt-12 min-w-0 sm:mt-16 lg:mt-22">
      <div className="mb-4 flex items-center justify-end gap-2 sm:mb-5">
        <IconButton
          aria-label="Previous offer"
          className="size-9 rounded-none"
          disabled={!canScrollPrevious}
          onClick={() => carouselApi?.scrollPrev()}
          type="button"
        >
          <ArrowLeft aria-hidden="true" className="size-4" />
        </IconButton>
        <IconButton
          aria-label="Next offer"
          className="size-9 rounded-none"
          disabled={!canScrollNext}
          onClick={() => carouselApi?.scrollNext()}
          tone="primary"
          type="button"
        >
          <ArrowRight aria-hidden="true" className="size-4" />
        </IconButton>
      </div>

      <div
        aria-label="What we offer horizontal slider"
        className="overflow-hidden"
        ref={viewportRef}
        role="region"
      >
        <div className="flex touch-pan-y">
          {offerKeys.map((key, index) => {
            const image = offerImages[index];
            const stepNumber = `/03.${String(index + 1).padStart(2, "0")}`;

            return (
              <div className="w-full min-w-0 flex-[0_0_100%] pr-0" key={key}>
                <article className="group grid h-[31rem] overflow-hidden border border-border/35 bg-surface sm:h-[34rem] lg:h-[27rem] lg:grid-cols-[minmax(0,1.22fr)_minmax(0,0.78fr)]">
                  <div className="relative min-h-0 overflow-hidden">
                    {image.kind === "video" ? (
                      <video
                        aria-label={image.alt}
                        autoPlay
                        className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.035]"
                        loop
                        muted
                        playsInline
                        preload="metadata"
                        src={image.src}
                        style={{ objectPosition: image.position }}
                      />
                    ) : (
                      <img
                        alt={image.alt}
                        className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.035]"
                        decoding="async"
                        height="1104"
                        loading={index === 0 ? "eager" : "lazy"}
                        src={image.src}
                        style={{ objectPosition: image.position }}
                        width="1024"
                      />
                    )}
                    <div
                      aria-hidden="true"
                      className="from-black/35 absolute inset-0 bg-gradient-to-t via-transparent to-transparent opacity-70"
                    />
                  </div>

                  <div className="flex min-h-0 flex-col justify-start p-6 sm:p-9 lg:p-8 lg:pb-10 xl:p-9 xl:pb-12">
                    <div className="flex items-start justify-between gap-5">
                      <p className="font-mono text-[clamp(0.8rem,1.3vw,1.1rem)] leading-none tracking-[0.08em] text-primary">
                        {stepNumber}
                      </p>
                      <span
                        aria-hidden="true"
                        className="mt-1 size-2 shrink-0 rounded-full bg-primary"
                      />
                    </div>

                    <div className="mt-10 sm:mt-14 lg:mt-12">
                      <h3 className="max-w-[24rem] font-primary text-[clamp(1.6rem,3vw,3rem)] leading-[0.94] tracking-[-0.04em] text-foreground">
                        {t(key)}
                      </h3>
                      <p className="mt-4 max-w-[31rem] text-[11px] leading-[1.5] text-muted-foreground sm:mt-5 sm:text-[12px]">
                        {t(`${key}Body`)}
                      </p>
                    </div>
                  </div>
                </article>
              </div>
            );
          })}
        </div>
      </div>

      <div
        aria-label="Select offer"
        className="mt-4 flex items-center justify-center gap-2"
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
