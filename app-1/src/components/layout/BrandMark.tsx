import { Link, useRouterState } from "@tanstack/react-router";
import { Leaf } from "lucide-react";

import { scrollCurrentHomeToTop } from "@/lib/navigation/scroll-home";

type BrandMarkProps = {
  readonly tone?: "dark" | "light";
};

export const BrandMark = ({ tone = "dark" }: BrandMarkProps) => {
  const pathname = useRouterState({
    select: (state) => state.location.pathname,
  });

  const className = `group inline-flex items-center gap-2.5 rounded-full font-primary text-xl tracking-[-0.035em] ${tone === "light" ? "text-primary-foreground" : "text-foreground"}`;
  const content = (
    <>
      <span className="grid size-9 place-items-center rounded-full bg-primary text-primary-foreground transition-transform duration-300 group-hover:-rotate-12">
        <Leaf aria-hidden="true" className="size-4" />
      </span>
      Brand
    </>
  );

  if (pathname === "/") {
    return (
      <a
        aria-label="Brand home"
        className={className}
        href="/"
        onClick={(event) => scrollCurrentHomeToTop(event, pathname)}
      >
        {content}
      </a>
    );
  }

  return (
    <Link aria-label="Brand home" className={className} to="/">
      {content}
    </Link>
  );
};
