import { ArrowUpRight } from "lucide-react";

import { FeatureGrid } from "@/pages/home/components/FeatureGrid";

type IntroSectionProps = {
  readonly features: readonly (readonly [string, string])[];
  readonly image: string;
};

export const IntroSection = ({ features, image }: IntroSectionProps) => (
  <section
    className="bg-background px-5 py-12 sm:px-8 lg:px-12 lg:py-24"
    id="section-one"
  >
    <div className="mx-auto max-w-7xl">
      <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
        <img
          alt="Image placeholder"
          className="aspect-[4/3] size-full rounded-[2rem] object-cover"
          loading="lazy"
          src={image}
        />
        <div>
          <p className="text-sm text-primary">Section eyebrow</p>
          <h2 className="mt-5 max-w-3xl text-4xl leading-tight tracking-[-0.035em] sm:text-5xl lg:text-6xl">
            H2 section title
          </h2>
          <p className="body-copy-muted mt-5">
            Section description text goes here. Replace this placeholder with
            useful supporting copy for the section.
          </p>
          <a
            className="mt-6 inline-flex items-center gap-2 border-b border-primary/30 pb-1 text-sm font-semibold text-primary"
            href="#section-two"
          >
            Text link
            <ArrowUpRight aria-hidden="true" className="size-4" />
          </a>
        </div>
      </div>
      <FeatureGrid features={features} />
    </div>
  </section>
);
