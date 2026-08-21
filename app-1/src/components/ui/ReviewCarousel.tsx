import { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { ArrowLeft, ArrowRight } from "lucide-react";

import { IconButton } from "@/components/ui/IconButton";

export type Review = {
  readonly quote: string;
  readonly customer: string;
  readonly detail: string;
  readonly image: string;
};

type ReviewCarouselProps = {
  readonly reviews: readonly Review[];
};

export const ReviewCarousel = ({ reviews }: ReviewCarouselProps) => {
  const [viewportRef, carouselApi] = useEmblaCarousel({
    align: "start",
    containScroll: "trimSnaps",
    loop: false,
    slidesToScroll: "auto",
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
    <div className="mt-12">
      <div className="overflow-hidden" ref={viewportRef}>
        <div className="flex touch-pan-y gap-4">
          {reviews.map(({ quote, customer, detail, image }, index) => (
            <div
              className="min-w-0 flex-[0_0_100%] sm:flex-[0_0_calc((100%-1rem)/2)] lg:flex-[0_0_calc((100%-2rem)/3)]"
              key={`${customer}-${index}`}
            >
              <blockquote
                className={`flex min-h-72 flex-col rounded-[2rem] p-7 ${
                  index % 3 === 1
                    ? "bg-primary text-primary-foreground"
                    : "border border-border/50 bg-background"
                }`}
              >
                <span className="font-primary text-4xl leading-none opacity-35">
                  “
                </span>
                <p className="mt-5 text-xl leading-8">{quote}</p>
                <footer className="mt-auto flex items-center gap-4 pt-10">
                  <img
                    alt=""
                    className="size-14 rounded-full object-cover"
                    loading="lazy"
                    src={image}
                  />
                  <div>
                    <p className="text-sm font-semibold">{customer}</p>
                    <p className="mt-1 text-xs opacity-60">{detail}</p>
                  </div>
                </footer>
              </blockquote>
            </div>
          ))}
        </div>
      </div>
      <div className="mt-7 grid grid-cols-3 items-center gap-5">
        <IconButton
          aria-label="Previous review"
          className="justify-self-start"
          disabled={!canScrollPrevious}
          onClick={() => carouselApi?.scrollPrev()}
          type="button"
        >
          <ArrowLeft aria-hidden="true" className="size-4" />
        </IconButton>
        <div
          aria-label="Select review"
          className="flex items-center justify-center gap-2"
          role="group"
        >
          {scrollSnaps.map((_, index) => (
            <button
              aria-label={`Show review group ${index + 1}`}
              aria-pressed={selectedIndex === index}
              className={`h-2 rounded-full transition-[width,background-color] ${
                selectedIndex === index
                  ? "w-8 bg-primary"
                  : "w-2 bg-border hover:bg-muted-foreground"
              }`}
              key={`review-group-${index}`}
              onClick={() => carouselApi?.scrollTo(index)}
              type="button"
            />
          ))}
        </div>
        <IconButton
          aria-label="Next review"
          className="justify-self-end"
          disabled={!canScrollNext}
          onClick={() => carouselApi?.scrollNext()}
          tone="primary"
          type="button"
        >
          <ArrowRight aria-hidden="true" className="size-4" />
        </IconButton>
      </div>
    </div>
  );
};
