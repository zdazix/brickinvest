import { ImageCard } from "@/components/ui/ImageCard";
import { useLocale } from "@/lib/i18n";

type CollectionSectionProps = {
  readonly cards: readonly string[];
  readonly image: string;
};

export const CollectionSection = ({ cards, image }: CollectionSectionProps) => {
  const { t } = useLocale();
  return (
    <section
      className="bg-surface px-5 pt-12 pb-16 sm:px-8 lg:px-12 lg:pt-24 lg:pb-24"
      id="section-two"
    >
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
          <div>
            <p className="text-[11px] text-primary">{t("sectionEyebrow")}</p>
            <h2 className="mt-4 text-3xl tracking-[-0.03em] sm:text-4xl">
              {t("collectionTitle")}
            </h2>
          </div>
          <p className="max-w-md text-[15px] leading-6 text-muted-foreground">
            {t("collectionDescription")}
          </p>
        </div>
        <div className="mt-8 grid gap-5 lg:grid-cols-3">
          {cards.map((title, index) => (
            <ImageCard
              description={t("cardDescription")}
              image={image}
              key={`${title}-${index}`}
              title={title}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
