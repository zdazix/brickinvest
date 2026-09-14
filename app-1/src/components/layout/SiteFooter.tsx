import { NumericText } from "@/components/ui/NumericText";

export const SiteFooter = () => (
  <footer className="grain-surface w-full bg-[#ddd8cf] px-5 py-8 text-[#000] sm:px-8 lg:px-12">
    <div className="mx-auto flex max-w-[1600px] flex-col gap-5 text-[10px] leading-4 tracking-[0.05em] sm:flex-row sm:items-center sm:justify-between sm:gap-8">
      <p className="text-[#000] sm:shrink-0">
        <NumericText>©2026 BRICKINVEST. All Rights Reserved.</NumericText>
      </p>
      <nav
        aria-label="Legal navigation"
        className="flex flex-wrap items-center gap-x-4 gap-y-2 text-[#000] sm:justify-end"
      >
        <a
          className="transition-colors hover:text-primary focus-visible:text-primary"
          href="/terms"
        >
          Terms &amp; Conditions
        </a>
        <span aria-hidden="true" className="text-border/45">
          |
        </span>
        <a
          className="transition-colors hover:text-primary focus-visible:text-primary"
          href="/privacy"
        >
          Privacy Policy
        </a>
        <span aria-hidden="true" className="text-border/45">
          |
        </span>
        <a
          className="transition-colors hover:text-primary focus-visible:text-primary"
          href="/cookies"
        >
          Cookies Policy
        </a>
      </nav>
    </div>
  </footer>
);
