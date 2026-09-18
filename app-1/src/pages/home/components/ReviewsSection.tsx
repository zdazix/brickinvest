import { ReviewCarousel } from "@/components/ui/ReviewCarousel";
import type { HomeContent } from "@/features/home/api";
import { useLocale } from "@/lib/i18n";

type ReviewsSectionProps = {
  readonly reviews: HomeContent["reviews"];
};

export const ReviewsSection = ({ reviews }: ReviewsSectionProps) => {
  const { t } = useLocale();
  return (
    <section className="bg-surface px-5 py-12 sm:px-8 lg:px-12 lg:py-24">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-8 lg:grid-cols-[0.7fr_1.3fr] lg:items-end">
          <div>
            <p className="text-[11px] text-primary">{t("sectionEyebrow")}</p>
            <h2 className="mt-4 text-3xl tracking-[-0.03em] sm:text-4xl">
              {t("reviewsTitle")}
            </h2>
          </div>
          <p className="body-copy-muted">{t("reviewsDescription")}</p>
        </div>
        <ReviewCarousel reviews={reviews} />
      </div>
    </section>
  );
};
