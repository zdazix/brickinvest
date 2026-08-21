import type { ComponentPropsWithoutRef } from "react";

type IconButtonProps = ComponentPropsWithoutRef<"button"> & {
  readonly tone?: "primary" | "surface";
};

export const IconButton = ({
  className = "",
  tone = "surface",
  ...props
}: IconButtonProps) => (
  <button
    className={`grid size-11 place-items-center rounded-full transition-colors disabled:opacity-35 ${
      tone === "primary"
        ? "bg-primary text-primary-foreground hover:bg-primary/90"
        : "border border-border/60 bg-background hover:bg-secondary"
    } ${className}`}
    {...props}
  />
);
