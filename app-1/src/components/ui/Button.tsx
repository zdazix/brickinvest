import { Link } from "@tanstack/react-router";
import type { ComponentProps, ComponentPropsWithoutRef } from "react";

type ButtonVariant = "primary" | "secondary" | "surface";

const variantClasses: Record<ButtonVariant, string> = {
  primary:
    "bg-foreground text-background transition-[background-color,color,transform] duration-300 hover:bg-primary hover:text-primary-foreground [&_svg]:transition-transform [&_svg]:duration-300 hover:[&_svg]:translate-x-1",
  secondary: "border border-border/70 bg-transparent hover:bg-secondary",
  surface: "bg-background text-foreground hover:bg-secondary",
};

const buttonClasses = (variant: ButtonVariant, className = "") =>
  `group inline-flex min-h-12 items-center justify-center gap-2 rounded-full px-6 font-semibold transition disabled:opacity-50 ${variantClasses[variant]} ${className}`;

type ButtonProps = ComponentPropsWithoutRef<"button"> & {
  readonly variant?: ButtonVariant;
};

export const Button = ({
  className,
  variant = "primary",
  ...props
}: ButtonProps) => (
  <button
    className={buttonClasses(variant, className)}
    data-cursor-magnetic={variant === "primary" ? true : undefined}
    {...props}
  />
);

type ButtonLinkProps = ComponentProps<typeof Link> & {
  readonly variant?: ButtonVariant;
};

export const ButtonLink = ({
  className,
  variant = "primary",
  ...props
}: ButtonLinkProps) => (
  <Link
    className={buttonClasses(variant, className)}
    data-cursor-magnetic={variant === "primary" ? true : undefined}
    {...props}
  />
);
