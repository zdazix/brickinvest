import { Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";

import { LocationMap } from "@/pages/home/components/LocationMap";
import { useLocale } from "@/lib/i18n";

export const LocationSection = () => {
  const { t } = useLocale();
  return (
    <section className="bg-background px-5 py-12 sm:px-8 lg:px-12 lg:py-24">
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-2 lg:items-center lg:gap-16">
        <div>
          <p className="text-[11px] text-primary">{t("sectionEyebrow")}</p>
          <h2 className="mt-4 text-3xl tracking-[-0.03em] sm:text-4xl">
            {t("locationTitle")}
          </h2>
          <p className="body-copy-muted mt-5">{t("locationDescription")}</p>
          <Link
            className="mt-6 inline-flex items-center gap-2 rounded-full border px-5 py-3 text-[13px] font-semibold"
            to="/contact"
          >
            {t("ctaButton")}
            <ArrowUpRight aria-hidden="true" className="size-4" />
          </Link>
        </div>
        <LocationMap />
      </div>
    </section>
  );
};
