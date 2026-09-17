import { ChevronDown, ConciergeBell, Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { useRouterState } from "@tanstack/react-router";

import { useConsultation } from "@/components/layout/consultation-context";
import { locales, useLocale, type LocaleKey } from "@/lib/i18n";
import { trackEvent } from "@/lib/analytics";

const navigation = [
  { label: "About Us", href: "#about", key: "about" },
  { label: "Why Us", href: "#why-us", key: "why" },
  { label: "What We Offer", href: "#what-we-offer", key: "offer" },
  { label: "Our Services", href: "#services", key: "services" },
  { label: "Projects", href: "#projects", key: "projects" },
  {
    label: "AI & Data Intelligence",
    href: "#ai-data",
    key: "intelligence",
  },
  {
    label: "Investment Solutions",
    href: "#investment-solutions",
    key: "solutions",
  },
];

export const SiteHeader = () => {
  const pathname = useRouterState({
    select: (state) => state.location.pathname,
  });
  const isHome = pathname === "/";
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState<string | null>(null);
  const [isLanguageOpen, setIsLanguageOpen] = useState(false);
  const { closeConsultation, isConsultationOpen, openConsultation } =
    useConsultation();
  const { locale, setLocale, t } = useLocale();

  useEffect(() => {
    const updateScrollState = () => setIsScrolled(window.scrollY > 8);
    updateScrollState();
    window.addEventListener("scroll", updateScrollState, { passive: true });
    return () => window.removeEventListener("scroll", updateScrollState);
  }, []);

  useEffect(() => {
    const sections = navigation
      .map(({ href }) => document.querySelector(href))
      .filter((section): section is Element => Boolean(section));
    if (!sections.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleSection = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visibleSection) setActiveSection(visibleSection.target.id);
      },
      { rootMargin: "-20% 0px -65%", threshold: [0, 0.2, 0.5] },
    );
    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

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

  const selectedLocale =
    locales.find((item) => item.key === locale) ?? locales[0];
  const closeMenu = () => setIsMenuOpen(false);
  return (
    <>
      <div
        className={`fixed inset-x-0 top-0 z-50 border-b px-4 pt-4 transition-[background-color,border-color,backdrop-filter] duration-300 sm:px-8 sm:pt-6 lg:pt-0 ${isHome ? (isScrolled ? "border-border/15 bg-foreground/60 backdrop-blur-sm" : "border-transparent bg-transparent") : `bg-surface ${isScrolled ? "border-border/30" : "border-border/60"}`}`}
      >
        <header
          className={`relative z-10 mx-auto flex max-w-[1600px] items-center justify-between gap-3 px-1 py-2 lg:gap-4 xl:gap-5 ${isHome ? "text-white" : "text-foreground"}`}
        >
          <a
            aria-label="BRICKINVEST home"
            className={`order-1 mr-auto shrink-0 font-secondary text-[1.1rem] font-bold tracking-[-0.055em] transition-[color,transform] hover:translate-x-1 hover:text-primary active:text-primary lg:hidden ${isHome ? "text-white" : "text-foreground"}`}
            href="/"
          >
            BRICKINVEST
          </a>
          <div className="hidden shrink-0 items-center gap-6 lg:flex">
            <a
              aria-label="BRICKINVEST home"
              className={`font-secondary text-[1.35rem] font-bold tracking-[-0.055em] transition-[color,transform] hover:translate-x-1 hover:text-primary active:text-primary lg:translate-x-3 ${isHome ? "text-white" : ""}`}
              href="/"
            >
              BRICKINVEST
            </a>
            <div className="relative" data-language-selector>
              <button
                aria-expanded={isLanguageOpen}
                aria-haspopup="menu"
                aria-label={t("openLanguage")}
                className={`flex items-center gap-1.5 px-0.5 py-2 text-[10px] font-semibold tracking-[0.08em] transition-colors hover:text-primary focus-visible:text-primary active:bg-primary/10 active:text-primary ${isHome ? "text-white/80" : "text-foreground/70"}`}
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
                  className="absolute top-[calc(100%+0.45rem)] left-0 z-20 min-w-40 rounded-md border border-border/80 bg-foreground p-1 shadow-lg"
                  role="menu"
                >
                  {locales.map((item) => (
                    <button
                      aria-checked={item.key === locale}
                      className="flex w-full items-center rounded-sm px-2.5 py-1.5 text-left text-[12px] leading-4 text-surface/90 transition-colors hover:bg-primary/15 hover:text-surface focus-visible:bg-primary/15 active:bg-primary/15 active:text-primary"
                      key={item.key}
                      onClick={() => {
                        setLocale(item.key as LocaleKey);
                        if (item.key !== locale) {
                          trackEvent("language_change", { language: item.key });
                        }
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
            className="hidden min-w-0 flex-1 items-center justify-center gap-x-4 gap-y-2 lg:flex xl:gap-x-6 2xl:gap-x-9"
          >
            {navigation.map(({ href, key }) => (
              <a
                className={`relative py-2 text-center text-[12px] font-semibold tracking-[0.03em] whitespace-nowrap transition-colors duration-250 after:absolute after:right-0 after:bottom-0 after:left-0 after:h-px after:origin-right after:bg-border after:transition-transform after:duration-250 hover:after:origin-left hover:after:scale-x-100 active:text-primary active:after:origin-left active:after:scale-x-100 active:after:bg-primary ${activeSection === href.slice(1) ? "text-primary after:scale-x-100" : isHome ? "text-white/85 after:scale-x-0 hover:text-white" : "text-foreground/80 after:scale-x-0 hover:text-foreground"}`}
                href={href}
                key={href}
                onClick={() =>
                  trackEvent("navigation_click", { destination: href })
                }
              >
                {t(key)}
              </a>
            ))}
          </nav>

          <div
            className="relative hidden shrink-0 items-end leading-tight lg:flex"
            data-consultation
          >
            <button
              aria-expanded={isConsultationOpen}
              aria-label="Request consultation"
              className={`flex items-center gap-2 rounded-full px-2 py-2 text-[10px] font-bold tracking-[0.07em] whitespace-nowrap transition-colors duration-250 hover:bg-primary/10 hover:text-primary focus-visible:bg-primary/10 focus-visible:text-primary focus-visible:ring-2 focus-visible:ring-ring/60 focus-visible:outline-none active:bg-primary/10 active:text-primary ${isHome ? "text-white/80" : "text-foreground/65"}`}
              onClick={(event) => {
                event.stopPropagation();
                if (isConsultationOpen) closeConsultation();
                else openConsultation();
              }}
              title="Request consultation"
              type="button"
            >
              <ConciergeBell
                aria-hidden="true"
                className="size-[18px]"
                strokeWidth={1.6}
              />
              <span>REQUEST CONSULTATION</span>
            </button>
          </div>

          <div
            className="relative order-2 flex items-end leading-tight lg:hidden"
            data-consultation
          >
            <button
              aria-expanded={isConsultationOpen}
              aria-label="Request consultation"
              className={`flex items-center gap-1.5 rounded-full px-1.5 py-2 text-[10px] font-bold tracking-[0.04em] whitespace-nowrap transition-colors duration-250 hover:bg-primary/10 hover:text-primary focus-visible:bg-primary/10 focus-visible:text-primary focus-visible:ring-2 focus-visible:ring-ring/60 focus-visible:outline-none active:bg-primary/10 active:text-primary ${isHome ? "text-white/80" : "text-foreground/65"}`}
              onClick={(event) => {
                event.stopPropagation();
                if (isConsultationOpen) closeConsultation();
                else openConsultation();
              }}
              title="Request consultation"
              type="button"
            >
              <ConciergeBell
                aria-hidden="true"
                className="size-[17px]"
                strokeWidth={1.9}
              />
              <span className="hidden sm:inline">REQUEST CONSULTATION</span>
            </button>
          </div>

          <button
            aria-controls="mobile-navigation"
            aria-expanded={isMenuOpen}
            aria-label={isMenuOpen ? t("closeMenu") : t("openMenu")}
            className={`order-3 flex h-11 shrink-0 items-center gap-2 rounded-full border px-3 font-secondary text-[10px] font-bold tracking-[0.08em] transition-colors hover:border-border active:border-primary active:bg-primary/10 active:text-primary lg:hidden ${isHome ? "border-border/55 bg-transparent text-white hover:bg-white/10" : "border-border bg-surface text-foreground hover:bg-secondary"}`}
            onClick={() => setIsMenuOpen((open) => !open)}
            type="button"
          >
            <span aria-hidden="true">MENU</span>
            {isMenuOpen ? (
              <X aria-hidden="true" className="size-5" strokeWidth={2.4} />
            ) : (
              <Menu aria-hidden="true" className="size-5" strokeWidth={2.4} />
            )}
          </button>
        </header>

        <div
          aria-hidden={!isMenuOpen}
          className={`fixed inset-0 isolate z-0 bg-[#20211f] opacity-100 transition-[opacity,visibility] duration-300 lg:hidden ${isMenuOpen ? "visible" : "invisible opacity-0"}`}
          id="mobile-navigation"
        >
          <nav
            aria-label="Mobile primary navigation"
            className="flex h-full flex-col justify-center gap-0.5 overflow-y-auto px-8 pt-24 pb-12 sm:px-16"
            hidden={!isMenuOpen}
          >
            {navigation.map(({ href, key }) => (
              <a
                className="border-b border-white/15 py-3.5 text-left font-secondary text-[clamp(1rem,4.8vw,1.35rem)] leading-[1.2] font-semibold tracking-[0.01em] text-white transition-colors hover:text-primary focus-visible:text-primary active:text-primary sm:py-4"
                href={href}
                key={href}
                onClick={() => {
                  trackEvent("navigation_click", { destination: href });
                  closeMenu();
                }}
              >
                {t(key)}
              </a>
            ))}
          </nav>
        </div>
      </div>
    </>
  );
};
