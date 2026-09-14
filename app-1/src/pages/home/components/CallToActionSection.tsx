import { ArrowRight } from "lucide-react";

import { ButtonLink } from "@/components/ui/Button";
export const CallToActionSection = () => (
  <section
    className="bg-surface px-5 py-16 text-foreground sm:px-8 lg:px-12 lg:py-24"
    id="section-cta"
  >
    <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[1.25fr_0.75fr] lg:items-end">
      <div>
        <p className="text-[11px] text-foreground/60">CTA eyebrow</p>
        <h2 className="mt-5 max-w-3xl text-4xl tracking-[-0.035em] sm:text-5xl lg:text-6xl">
          H2 call to action title
        </h2>
      </div>
      <div>
        <p className="max-w-md text-[15px] leading-6 text-foreground/65">
          Call to action description text goes here. Explain what happens after
          the visitor selects the action.
        </p>
        <ButtonLink className="mt-6" to="/contact">
          Primary button text
          <ArrowRight aria-hidden="true" className="size-4" />
        </ButtonLink>
      </div>
    </div>
  </section>
);
