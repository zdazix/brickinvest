import type { LucideIcon } from "lucide-react";

import { NumericText } from "@/components/ui/NumericText";

export type IconListItem = {
  readonly icon: LucideIcon;
  readonly label: string;
};

type IconListProps = {
  readonly items: readonly IconListItem[];
};

export const IconList = ({ items }: IconListProps) => (
  <ul className="grid gap-6">
    {items.map(({ icon: Icon, label }) => (
      <li className="flex items-center gap-4" key={label}>
        <span className="grid size-11 place-items-center rounded-full bg-background text-primary">
          <Icon aria-hidden="true" className="size-5" />
        </span>
        <span className="text-[13px] font-semibold">
          <NumericText>{label}</NumericText>
        </span>
      </li>
    ))}
  </ul>
);
