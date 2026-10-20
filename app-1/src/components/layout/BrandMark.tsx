import { Link, useRouterState } from "@tanstack/react-router";
import { Leaf } from "lucide-react";

import { scrollCurrentHomeToTop } from "@/lib/navigation/scroll-home";
import { localeKeys } from "@/lib/locales";
import { useLocale } from "@/lib/i18n";
import { stripLocalePrefix } from "@/lib/locale-routing";

type BrandMarkProps = {
  readonly tone?: "dark" | "light";
};

export const BrandMark = ({ tone = "dark" }: BrandMarkProps) => {
  const { t, localizePath } = useLocale();
  const pathname = useRouterState({
    select: (state) => state.location.pathname,
  });

  const className = `group inline-flex items-center gap-2.5 rounded-full font-primary text-lg tracking-[-0.03em] ${tone === "light" ? "text-primary-foreground" : "text-foreground"}`;
  const content = (
    <>
      <span className="grid size-9 place-items-center rounded-full bg-primary text-primary-foreground transition-transform duration-300 group-hover:-rotate-12">
        <Leaf aria-hidden="true" className="size-4" />
      </span>
      BRICKINVEST
    </>
  );

  const homePath = localizePath("/");
  const isHome = stripLocalePrefix(pathname, localeKeys) === "/";

  if (isHome) {
    return (
      <a
        aria-label={t("brandHome")}
        className={className}
        href={homePath}
        onClick={(event) =>
          scrollCurrentHomeToTop(event, stripLocalePrefix(pathname, localeKeys))
        }
      >
        {content}
      </a>
    );
  }

  return (
    <Link
      aria-label={t("brandHome")}
      className={className}
      to={homePath as never}
    >
      {content}
    </Link>
  );
};
