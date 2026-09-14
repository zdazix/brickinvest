import { ImageCard } from "@/components/ui/ImageCard";

type CollectionSectionProps = {
  readonly cards: readonly string[];
  readonly image: string;
};

export const CollectionSection = ({ cards, image }: CollectionSectionProps) => (
  <section
    className="bg-surface px-5 pt-12 pb-16 sm:px-8 lg:px-12 lg:pt-24 lg:pb-24"
    id="section-two"
  >
    <div className="mx-auto max-w-7xl">
      <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
        <div>
          <p className="text-[11px] text-primary">Section eyebrow</p>
          <h2 className="mt-4 text-3xl tracking-[-0.03em] sm:text-4xl">
            H2 collection title
          </h2>
        </div>
        <p className="max-w-md text-[15px] leading-6 text-muted-foreground">
          Section description text goes here. Use it to introduce the cards
          below.
        </p>
      </div>
      <div className="mt-8 grid gap-5 lg:grid-cols-3">
        {cards.map((title) => (
          <ImageCard
            description="Card description text goes here."
            image={image}
            key={title}
            title={title}
          />
        ))}
      </div>
    </div>
  </section>
);
