import { Link } from "@tanstack/react-router";
import type { ComponentProps, ComponentPropsWithoutRef } from "react";

type ButtonVariant = "primary" | "secondary" | "surface";

const variantClasses: Record<ButtonVariant, string> = {
  primary:
    "bg-foreground text-background transition-[background-color,color,transform] duration-250 ease-out hover:bg-primary hover:text-primary-foreground active:translate-y-px focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 [&_svg]:transition-transform [&_svg]:duration-250 [&_svg]:ease-out hover:[&_svg]:translate-x-1",
  secondary: "border border-border/70 bg-transparent hover:bg-secondary",
  surface: "bg-background text-foreground hover:bg-secondary",
};

const buttonClasses = (variant: ButtonVariant, className = "") =>
  `group inline-flex min-h-12 items-center justify-center gap-2 rounded-full px-6 text-[13px] font-semibold transition disabled:opacity-50 ${variantClasses[variant]} ${className}`;

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
