import { ArrowDown, ArrowRight } from "lucide-react";

import { ButtonLink } from "@/components/ui/Button";

type HeroSectionProps = { readonly image: string };

export const HeroSection = ({ image }: HeroSectionProps) => (
  <section className="relative h-dvh w-full overflow-hidden bg-background">
    <div className="relative flex size-full overflow-hidden">
      <img
        alt="Image placeholder"
        className="absolute inset-0 size-full object-cover"
        fetchPriority="high"
        src={image}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-foreground/20 via-transparent to-foreground/55" />
      <div className="relative z-10 mx-auto flex w-full max-w-7xl flex-col p-5 pt-28 text-primary-foreground sm:p-8 sm:pt-32 lg:p-10 lg:pt-36">
        <div className="mt-auto max-w-3xl pb-7 sm:pb-12 lg:pb-16">
          <h1 className="text-5xl leading-[0.95] tracking-[-0.045em] sm:text-7xl lg:text-8xl">
            H1 hero title
            <br />
            second line.
          </h1>
          <p className="mt-6 max-w-xl text-base leading-7 text-primary-foreground/85 sm:text-lg sm:leading-8">
            Hero description text goes here. Replace it with a concise value
            proposition for the page.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <ButtonLink className="min-w-48 text-sm" to="/contact">
              Primary button
              <ArrowRight aria-hidden="true" className="size-4" />
            </ButtonLink>
            <a
              className="inline-flex min-h-12 min-w-48 items-center justify-center gap-2 rounded-full border border-primary-foreground/35 px-6 text-sm font-semibold backdrop-blur-sm transition hover:bg-background hover:text-foreground"
              href="#section-one"
            >
              Secondary button
              <ArrowDown aria-hidden="true" className="size-4" />
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
);
