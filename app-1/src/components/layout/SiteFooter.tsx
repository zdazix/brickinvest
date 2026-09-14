import { NumericText } from "@/components/ui/NumericText";
import { useLocale } from "@/lib/i18n";

const companyLinks = [
  { href: "#about", key: "about" },
  { href: "#why-us", key: "why" },
  { href: "#what-we-offer", key: "offer" },
  { href: "#services", key: "services" },
  { href: "#projects", key: "projects" },
  { href: "#ai-data", key: "intelligence" },
  { href: "#investment-solutions", key: "solutions" },
] as const;

export const SiteFooter = () => {
  const { t } = useLocale();

  return (
    <footer className="grain-surface w-full bg-[#ddd8cf] px-5 py-8 text-[#000] sm:px-8 lg:px-12">
      <div className="mx-auto grid max-w-[1600px] grid-cols-1 gap-7 text-[10px] leading-4 tracking-[0.05em] sm:grid-cols-[minmax(0,1fr)_minmax(0,2fr)_minmax(0,1fr)] sm:items-start sm:gap-8 lg:gap-12">
        <p className="text-[#000] sm:pt-0.5">
          <NumericText>© 2026. All Rights Reserved.</NumericText>
        </p>

        <nav
          aria-label="Company navigation"
          className="min-w-0 sm:justify-self-center"
        >
          <p className="mb-2 text-[9px] tracking-[0.14em] text-[#000]">
            COMPANY
          </p>
          <div className="flex flex-wrap gap-x-4 gap-y-1.5 text-[#000]">
            {companyLinks.map(({ href, key }) => (
              <a
                className="transition-colors hover:text-primary focus-visible:text-primary"
                href={href}
                key={href}
              >
                {t(key)}
              </a>
            ))}
          </div>
        </nav>

        <nav
          aria-label="Legal navigation"
          className="flex flex-wrap items-center gap-x-4 gap-y-2 text-[#000] sm:justify-self-end"
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
};
