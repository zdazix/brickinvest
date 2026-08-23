import { Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";

import type { HomeContent } from "@/features/home/api";

type EditorialSectionProps = {
  readonly cards: HomeContent["editorialCards"];
  readonly image: string;
};

export const EditorialSection = ({ cards, image }: EditorialSectionProps) => (
  <section
    className="bg-background px-5 py-16 sm:px-8 lg:px-12 lg:py-24"
    id="section-three"
  >
    <div className="mx-auto max-w-7xl">
      <div className="mb-8 max-w-2xl">
        <p className="text-sm text-primary">Section eyebrow</p>
        <h2 className="mt-4 text-4xl tracking-[-0.035em] sm:text-5xl">
          H2 editorial section title
        </h2>
        <p className="mt-6 text-lg leading-8 text-muted-foreground">
          Section description text goes here. Replace it with a clear
          introduction to the content items.
        </p>
      </div>
      <div className="space-y-20 lg:space-y-28">
        {cards.map((card, index) => (
          <article
            className="grid gap-8 lg:grid-cols-2 lg:items-center lg:gap-16"
            key={`${card.title}-${index}`}
          >
            <img
              alt="Image placeholder"
              className={`aspect-[4/3] size-full rounded-[2rem] object-cover ${index === 1 ? "lg:order-2" : ""}`}
              loading="lazy"
              src={image}
            />
            <div className={index === 1 ? "lg:order-1" : ""}>
              <p className="text-sm text-primary">{card.eyebrow}</p>
              <h3 className="mt-4 text-4xl tracking-[-0.035em] sm:text-5xl">
                {card.title}
              </h3>
              <p className="mt-5 max-w-lg text-lg leading-8 text-muted-foreground">
                {card.description}
              </p>
              <Link
                className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-primary"
                to="/contact"
              >
                Button text
                <ArrowUpRight aria-hidden="true" className="size-4" />
              </Link>
            </div>
          </article>
        ))}
      </div>
    </div>
  </section>
);
