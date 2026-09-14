import { ImageIcon } from "lucide-react";

import { NumericText } from "@/components/ui/NumericText";

type FeatureCardProps = {
  readonly description: string;
  readonly index: number;
  readonly title: string;
};

export const FeatureCard = ({
  description,
  index,
  title,
}: FeatureCardProps) => (
  <li className="flex min-h-64 flex-col rounded-3xl border border-border/45 bg-surface p-7 shadow-sm shadow-foreground/5">
    <div className="flex items-start justify-between gap-4">
      <span className="grid size-11 place-items-center rounded-full bg-secondary text-secondary-foreground">
        <ImageIcon aria-hidden="true" className="size-5" />
      </span>
      <span className="text-[13px] text-muted-foreground">
        <NumericText>{`0${index + 1}`}</NumericText>
      </span>
    </div>
    <h3 className="mt-auto pt-10 text-lg">
      <NumericText>{title}</NumericText>
    </h3>
    <p className="mt-3 text-[13px] leading-5 text-muted-foreground">
      <NumericText>{description}</NumericText>
    </p>
  </li>
);
