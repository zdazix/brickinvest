import { ChevronDown, Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

import { locales, useLocale, type LocaleKey } from "@/lib/i18n";

const navigation = [
  { label: "About Us", href: "#about-us", key: "about" },
  { label: "Why Us", href: "#why-us", key: "why" },
  { label: "What We Offer", href: "#what-we-offer", key: "offer" },
  { label: "Our Services", href: "#our-services", key: "services" },
  { label: "Projects", href: "#projects", key: "projects" },
  {
    label: "Investment Solutions",
    href: "#investment-solutions",
    key: "solutions",
  },
  {
    label: "AI & Data Intelligence",
    href: "#ai-data-intelligence",
    key: "intelligence",
  },
];

export const SiteHeader = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLanguageOpen, setIsLanguageOpen] = useState(false);
  const [isConsultationOpen, setIsConsultationOpen] = useState(false);
  const { locale, setLocale, t } = useLocale();

  useEffect(() => {
    if (!isMenuOpen) return;
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setIsMenuOpen(false);
    };
    document.addEventListener("keydown", closeOnEscape);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", closeOnEscape);
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  useEffect(() => {
    const closeOnOutsideClick = (event: MouseEvent) => {
      if (!(event.target as Element).closest("[data-language-selector]")) {
        setIsLanguageOpen(false);
      }
    };
    document.addEventListener("click", closeOnOutsideClick);
    return () => document.removeEventListener("click", closeOnOutsideClick);
  }, []);

  useEffect(() => {
    if (!isConsultationOpen || isMenuOpen) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [isConsultationOpen, isMenuOpen]);

  useEffect(() => {
    const closeOnOutsideClick = (event: MouseEvent) => {
      if (!(event.target as Element).closest("[data-consultation]")) {
        setIsConsultationOpen(false);
      }
    };
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setIsConsultationOpen(false);
    };
    document.addEventListener("click", closeOnOutsideClick);
    document.addEventListener("keydown", closeOnEscape);
    return () => {
      document.removeEventListener("click", closeOnOutsideClick);
      document.removeEventListener("keydown", closeOnEscape);
    };
  }, []);

  const selectedLocale =
    locales.find((item) => item.key === locale) ?? locales[0];
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <div className="fixed inset-x-0 top-0 z-50 border-b border-border/60 bg-surface px-4 pt-4 shadow-sm shadow-foreground/5 sm:px-8 sm:pt-6">
      <header className="relative mx-auto flex max-w-[1600px] items-center justify-between gap-5 px-1 py-2 text-foreground">
        <div className="hidden shrink-0 items-center gap-6 lg:flex">
          <a
            aria-label="BRICKINVEST home"
            className="font-secondary text-[1.55rem] font-semibold tracking-[-0.065em] transition-colors hover:text-primary"
            href="/"
          >
            BRICKINVEST
          </a>
          <div className="relative" data-language-selector>
            <button
              aria-expanded={isLanguageOpen}
              aria-haspopup="menu"
              aria-label={t("openLanguage")}
              className="flex items-center gap-1.5 px-0.5 py-2 text-[11px] tracking-[0.1em] text-foreground/70 transition-colors hover:text-primary focus-visible:text-primary"
              onClick={(event) => {
                event.stopPropagation();
                setIsLanguageOpen((open) => !open);
              }}
              type="button"
            >
              <span>{selectedLocale.code}</span>
              <ChevronDown
                aria-hidden="true"
                className={`size-3 transition-transform ${isLanguageOpen ? "rotate-180" : ""}`}
              />
            </button>
            {isLanguageOpen && (
              <div
                className="absolute top-[calc(100%+0.45rem)] left-0 z-20 min-w-40 rounded-md border border-primary/80 bg-foreground p-1 shadow-lg"
                role="menu"
              >
                {locales.map((item) => (
                  <button
                    aria-checked={item.key === locale}
                    className="flex w-full items-center rounded-sm px-2.5 py-1.5 text-left text-[13px] leading-5 text-surface/90 transition-colors hover:bg-primary/15 hover:text-surface focus-visible:bg-primary/15"
                    key={item.key}
                    onClick={() => {
                      setLocale(item.key as LocaleKey);
                      setIsLanguageOpen(false);
                    }}
                    role="menuitemradio"
                    type="button"
                  >
                    <span>{item.label}</span>
                    {item.key === locale && (
                      <span className="ml-auto pl-2 text-primary">•</span>
                    )}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>
        <nav
          aria-label="Primary navigation"
          className="hidden flex-1 items-center justify-center gap-x-6 gap-y-2 lg:flex xl:gap-x-9"
        >
          {navigation.map(({ href, key }) => (
            <a
              className="relative py-2 text-center text-[13px] font-medium tracking-[0.035em] whitespace-nowrap text-foreground/80 transition-colors after:absolute after:right-0 after:bottom-0 after:left-0 after:h-px after:origin-right after:scale-x-0 after:bg-primary after:transition-transform after:duration-300 hover:text-foreground hover:after:origin-left hover:after:scale-x-100"
              href={href}
              key={href}
            >
              {t(key)}
            </a>
          ))}
        </nav>

        <div
          className="relative hidden shrink-0 flex-col items-end leading-tight lg:flex"
          data-consultation
        >
          <button
            aria-expanded={isConsultationOpen}
            className="text-[10px] font-medium tracking-[0.16em] text-foreground/55 uppercase transition-colors hover:text-primary focus-visible:text-primary"
            onClick={(event) => {
              event.stopPropagation();
              setIsConsultationOpen((open) => !open);
            }}
            type="button"
          >
            REQUEST CONSULTATION
          </button>
        </div>

        <div
          className="relative ml-auto flex flex-col items-end leading-tight lg:hidden"
          data-consultation
        >
          <button
            aria-expanded={isConsultationOpen}
            className="text-[10px] font-medium tracking-[0.12em] text-foreground/55 uppercase transition-colors hover:text-primary focus-visible:text-primary"
            onClick={(event) => {
              event.stopPropagation();
              setIsConsultationOpen((open) => !open);
            }}
            type="button"
          >
            REQUEST CONSULTATION
          </button>
        </div>

        <button
          aria-controls="mobile-navigation"
          aria-expanded={isMenuOpen}
          aria-label={isMenuOpen ? t("closeMenu") : t("openMenu")}
          className="mr-auto grid size-11 place-items-center rounded-full border border-border bg-surface text-foreground transition-colors hover:border-primary hover:bg-secondary lg:hidden"
          onClick={() => setIsMenuOpen((open) => !open)}
          type="button"
        >
          {isMenuOpen ? (
            <X aria-hidden="true" className="size-5" />
          ) : (
            <Menu aria-hidden="true" className="size-5" />
          )}
        </button>
      </header>

      <div
        aria-hidden={!isMenuOpen}
        className={`fixed inset-0 -z-10 bg-foreground transition-[opacity,visibility] duration-300 lg:hidden ${isMenuOpen ? "visible opacity-100" : "invisible opacity-0"}`}
        id="mobile-navigation"
      >
        <nav
          aria-label="Mobile primary navigation"
          className="flex h-full flex-col justify-center gap-1 px-8 pt-24 pb-12 sm:px-16"
          hidden={!isMenuOpen}
        >
          {navigation.map(({ href, key }) => (
            <a
              className="border-b border-white/15 py-4 text-left text-2xl font-light tracking-[-0.02em] text-white transition-colors hover:text-primary focus-visible:text-primary sm:text-3xl"
              href={href}
              key={href}
              onClick={closeMenu}
            >
              {t(key)}
            </a>
          ))}
        </nav>
      </div>

      {isConsultationOpen && (
        <div
          aria-labelledby="consultation-dialog-title"
          aria-modal="true"
          className="consultation-modal fixed inset-0 z-[60] flex items-center justify-center bg-foreground/25 px-5 py-8 sm:px-8"
          onClick={() => setIsConsultationOpen(false)}
          role="dialog"
        >
          <div
            className="consultation-modal__panel relative w-full max-w-md border border-primary/60 bg-surface px-7 py-9 text-center text-foreground sm:px-12 sm:py-12"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              aria-label="Close consultation dialog"
              className="absolute top-3 right-4 text-2xl leading-none font-light text-foreground/55 transition-colors hover:text-primary"
              onClick={() => setIsConsultationOpen(false)}
              type="button"
            >
              ×
            </button>
            <h2
              className="font-secondary text-[11px] font-medium tracking-[0.18em] text-foreground/60"
              id="consultation-dialog-title"
            >
              REQUEST CONSULTATION
            </h2>
            <p className="mx-auto mt-7 max-w-sm text-base leading-7 text-foreground/75">
              Speak with our team about your investment plans on the Costa del
              Sol.
            </p>
            <a
              className="mt-7 inline-block text-lg tracking-[0.12em] text-primary transition-colors hover:text-foreground"
              href="tel:+34695121585"
            >
              695 121 585
            </a>
            <a
              className="mt-8 block border border-foreground/25 px-5 py-3 text-[10px] font-medium tracking-[0.16em] text-foreground transition-colors hover:border-primary hover:bg-primary hover:text-primary-foreground"
              href="#investment-solutions"
              onClick={() => setIsConsultationOpen(false)}
            >
              LEAVE A REQUEST
            </a>
          </div>
        </div>
      )}
    </div>
  );
};
