import { Link, useRouterState } from "@tanstack/react-router";
import { useEffect, useState, type MouseEvent } from "react";

import { BrandMark } from "@/components/layout/BrandMark";
import { ButtonLink } from "@/components/ui/Button";
import { scrollCurrentHomeToTop } from "@/lib/navigation/scroll-home";

const scrollThreshold = 24;

export const SiteHeader = () => {
  const pathname = useRouterState({
    select: (state) => state.location.pathname,
  });
  const [isScrolled, setIsScrolled] = useState(false);
  const usesOverlayStyle = pathname === "/" && !isScrolled;
  const activeLinkClass = usesOverlayStyle
    ? "font-semibold text-primary"
    : "font-semibold text-secondary/65";
  const navigationLinkClass =
    "px-2 py-2 font-medium transition-colors duration-200";

  const scrollHomeToTop = (event: MouseEvent<HTMLAnchorElement>) =>
    scrollCurrentHomeToTop(event, pathname);

  useEffect(() => {
    const updateScrollState = () => {
      setIsScrolled(window.scrollY > scrollThreshold);
    };

    updateScrollState();
    window.addEventListener("scroll", updateScrollState, { passive: true });

    return () => {
      window.removeEventListener("scroll", updateScrollState);
    };
  }, [pathname]);

  return (
    <div className="fixed inset-x-0 top-3 z-50 h-0 px-3 sm:top-5 sm:px-5">
      <header
        className={`mx-auto flex max-w-7xl items-center justify-between gap-5 rounded-full border px-4 py-3 transition-[background-color,border-color,box-shadow,color] duration-300 sm:px-5 ${
          usesOverlayStyle
            ? "border-transparent bg-transparent text-primary-foreground"
            : "border-background/10 bg-foreground/50 text-background shadow-lg shadow-foreground/10 backdrop-blur-xl"
        }`}
      >
        <BrandMark tone="light" />
        <nav
          aria-label="Primary navigation"
          className={`hidden items-center gap-2 rounded-full px-4 py-2 text-base transition-colors duration-300 md:flex ${
            usesOverlayStyle
              ? "bg-background/85 text-foreground shadow-sm backdrop-blur-lg"
              : "bg-transparent text-background"
          }`}
        >
          {pathname === "/" ? (
            <a
              aria-current="page"
              className={`${navigationLinkClass} ${activeLinkClass}`}
              href="/"
              onClick={scrollHomeToTop}
            >
              Home
            </a>
          ) : (
            <Link className={navigationLinkClass} to="/">
              Home
            </Link>
          )}
          <Link
            activeProps={{ className: activeLinkClass }}
            className={navigationLinkClass}
            to="/profile"
          >
            Profile
          </Link>
          <Link
            activeProps={{ className: activeLinkClass }}
            className={navigationLinkClass}
            to="/privacy"
          >
            Privacy
          </Link>
          <Link
            activeProps={{ className: activeLinkClass }}
            className={navigationLinkClass}
            to="/news"
          >
            News
          </Link>
        </nav>
        <ButtonLink
          className="min-h-0 px-5 py-3 text-sm shadow-sm"
          to="/contact"
          variant="surface"
        >
          Contact us
        </ButtonLink>
      </header>
    </div>
  );
};
