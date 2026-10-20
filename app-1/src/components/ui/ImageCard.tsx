import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";

import { NumericText } from "@/components/ui/NumericText";
import { useLocale } from "@/lib/i18n";

type ImageCardProps = {
  readonly description: string;
  readonly image: string;
  readonly title: string;
};

export const ImageCard = ({ description, image, title }: ImageCardProps) => {
  const { localizePath } = useLocale();

  return (
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
      <h3 className="mt-5 text-xl tracking-[-0.025em]">
        <NumericText>{title}</NumericText>
      </h3>
      <p className="mt-2 text-[13px] text-muted-foreground">
        <NumericText>{description}</NumericText>
      </p>
      <Link
        className="mt-5 inline-flex items-center gap-2 text-[13px] font-semibold text-primary"
        to={localizePath("/contact") as never}
      >
        Card link text
        <ArrowRight
          aria-hidden="true"
          className="size-4 transition-transform group-hover:translate-x-1"
        />
      </Link>
    </article>
  );
};
