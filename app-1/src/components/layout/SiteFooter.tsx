import { Link } from "@tanstack/react-router";

import { BrandMark } from "@/components/layout/BrandMark";

export const SiteFooter = () => (
  <footer className="bg-foreground px-5 pb-10 text-background sm:px-8 lg:px-12">
    <div className="mx-auto flex max-w-7xl flex-col gap-7 border-t border-background/15 pt-8 sm:flex-row sm:items-center sm:justify-between">
      <BrandMark tone="light" />
      <nav
        aria-label="Footer navigation"
        className="flex flex-wrap gap-x-6 gap-y-3 text-sm text-background/65"
      >
        <Link className="hover:text-background" to="/profile">
          Profile
        </Link>
        <Link className="hover:text-background" to="/privacy">
          Privacy policy
        </Link>
        <Link className="hover:text-background" to="/contact">
          Contact us
        </Link>
        <Link className="hover:text-background" to="/news">
          News
        </Link>
      </nav>
      <p className="text-sm text-background/55">© 2026 Brand</p>
    </div>
  </footer>
);
