export const SiteFooter = () => (
  <footer className="grain-surface w-full bg-[#ddd8cf] px-5 py-8 text-foreground sm:px-8 lg:px-12">
    <div className="mx-auto flex max-w-[1600px] flex-col gap-5 text-[11px] leading-5 tracking-[0.06em] sm:flex-row sm:items-center sm:justify-between sm:gap-8">
      <p className="text-foreground/55 sm:shrink-0">
        ©2026 BRICKINVEST. All Rights Reserved.
      </p>
      <nav
        aria-label="Legal navigation"
        className="flex flex-wrap items-center gap-x-4 gap-y-2 text-foreground/65 sm:justify-end"
      >
        <a
          className="transition-colors hover:text-primary focus-visible:text-primary"
          href="/terms"
        >
          Terms &amp; Conditions
        </a>
        <span aria-hidden="true" className="text-primary/45">
          |
        </span>
        <a
          className="transition-colors hover:text-primary focus-visible:text-primary"
          href="/privacy"
        >
          Privacy Policy
        </a>
        <span aria-hidden="true" className="text-primary/45">
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
