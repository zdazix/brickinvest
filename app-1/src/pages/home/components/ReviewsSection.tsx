import { ReviewCarousel } from "@/components/ui/ReviewCarousel";
import type { HomeContent } from "@/features/home/api";

type ReviewsSectionProps = {
  readonly reviews: HomeContent["reviews"];
};

export const ReviewsSection = ({ reviews }: ReviewsSectionProps) => (
  <section className="bg-surface px-5 py-16 sm:px-8 lg:px-12 lg:py-24">
    <div className="mx-auto max-w-7xl">
      <div className="grid gap-8 lg:grid-cols-[0.7fr_1.3fr] lg:items-end">
        <div>
          <p className="text-sm text-primary">Section eyebrow</p>
          <h2 className="mt-4 text-4xl tracking-[-0.035em] sm:text-5xl">
            H2 reviews title
          </h2>
        </div>
        <p className="max-w-xl text-lg leading-8 text-muted-foreground">
          Section description text goes here. Replace it with supporting copy
          for customer reviews or social proof.
        </p>
      </div>
      <ReviewCarousel reviews={reviews} />
    </div>
  </section>
);
