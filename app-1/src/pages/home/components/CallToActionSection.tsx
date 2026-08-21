import { ArrowRight } from "lucide-react";

import { ButtonLink } from "@/components/ui/Button";
export const CallToActionSection = () => (
  <section
    className="bg-foreground px-5 py-24 text-background sm:px-8 lg:px-12 lg:py-32"
    id="section-cta"
  >
    <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[1.25fr_0.75fr] lg:items-end">
      <div>
        <p className="text-sm text-background/60">CTA eyebrow</p>
        <h2 className="mt-5 max-w-3xl text-5xl tracking-[-0.04em] sm:text-6xl lg:text-7xl">
          H2 call to action title
        </h2>
      </div>
      <div>
        <p className="max-w-md leading-7 text-background/65">
          Call to action description text goes here. Explain what happens after
          the visitor selects the action.
        </p>
        <ButtonLink className="mt-8" to="/contact">
          Primary button text
          <ArrowRight aria-hidden="true" className="size-4" />
        </ButtonLink>
      </div>
    </div>
  </section>
);
