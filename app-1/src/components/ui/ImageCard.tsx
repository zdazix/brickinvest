import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";

import { NumericText } from "@/components/ui/NumericText";

type ImageCardProps = {
  readonly description: string;
  readonly image: string;
  readonly title: string;
};

export const ImageCard = ({ description, image, title }: ImageCardProps) => (
  <article className="group">
    <img
      alt="Image placeholder"
      className="aspect-[4/3] size-full rounded-[2rem] object-cover"
      decoding="async"
      height="675"
      loading="lazy"
      src={image}
      width="900"
    />
    <h3 className="mt-5 text-2xl tracking-[-0.03em]">
      <NumericText>{title}</NumericText>
    </h3>
    <p className="mt-2 text-sm text-muted-foreground">
      <NumericText>{description}</NumericText>
    </p>
    <Link
      className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-primary"
      to="/contact"
    >
      Card link text
      <ArrowRight
        aria-hidden="true"
        className="size-4 transition-transform group-hover:translate-x-1"
      />
    </Link>
  </article>
);
