import { ArrowUpRight } from "lucide-react";

import { FeatureGrid } from "@/pages/home/components/FeatureGrid";
import { useLocale } from "@/lib/i18n";

type IntroSectionProps = {
  readonly features: readonly (readonly [string, string])[];
  readonly image: string;
};

export const IntroSection = ({ features, image }: IntroSectionProps) => {
  const { t } = useLocale();
  return (
    <section
      className="bg-background px-5 py-12 sm:px-8 lg:px-12 lg:py-24"
      id="section-one"
    >
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
          <img
            alt={t("imagePlaceholder")}
            className="aspect-[4/3] size-full rounded-[2rem] object-cover"
            decoding="async"
            height="675"
            loading="lazy"
            src={image}
            width="900"
          />
          <div>
            <p className="text-[11px] text-primary">{t("sectionEyebrow")}</p>
            <h2 className="mt-5 max-w-3xl text-3xl leading-tight tracking-[-0.03em] sm:text-4xl lg:text-5xl">
              {t("introTitle")}
            </h2>
            <p className="body-copy-muted mt-5">{t("introDescription")}</p>
            <a
              className="mt-6 inline-flex items-center gap-2 border-b border-border/30 pb-1 text-[13px] font-semibold text-primary"
              href="#section-two"
            >
              {t("textLink")}
              <ArrowUpRight aria-hidden="true" className="size-4" />
            </a>
          </div>
        </div>
        <FeatureGrid features={features} />
      </div>
    </section>
  );
};
