import { ReviewCarousel } from "@/components/ui/ReviewCarousel";
import type { HomeContent } from "@/features/home/api";

type ReviewsSectionProps = {
  readonly reviews: HomeContent["reviews"];
};

export const ReviewsSection = ({ reviews }: ReviewsSectionProps) => (
  <section className="bg-surface px-5 py-12 sm:px-8 lg:px-12 lg:py-24">
    <div className="mx-auto max-w-7xl">
      <div className="grid gap-8 lg:grid-cols-[0.7fr_1.3fr] lg:items-end">
        <div>
          <p className="text-[11px] text-primary">Section eyebrow</p>
          <h2 className="mt-4 text-3xl tracking-[-0.03em] sm:text-4xl">
            H2 reviews title
          </h2>
        </div>
        <p className="body-copy-muted">
          Section description text goes here. Replace it with supporting copy
          for customer reviews or social proof.
        </p>
      </div>
      <ReviewCarousel reviews={reviews} />
    </div>
  </section>
);
