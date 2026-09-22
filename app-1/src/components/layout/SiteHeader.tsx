import { ChevronDown, ConciergeBell, Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { useRouterState } from "@tanstack/react-router";

import { useConsultation } from "@/components/layout/consultation-context";
import { locales, useLocale, type LocaleKey } from "@/lib/i18n";
import { trackEvent } from "@/lib/analytics";

const navigation = [
  { label: "Über uns", href: "#about", key: "about" },
  { label: "Warum wir", href: "#why-us", key: "why" },
  { label: "Unser Angebot", href: "#what-we-offer", key: "offer" },
  { label: "Unsere Leistungen", href: "#services", key: "services" },
  { label: "Projects", href: "#projects", key: "projects" },
  {
    label: "KI & Datenintelligenz",
    href: "#ai-data",
    key: "intelligence",
  },
  {
    label: "Investmentlösungen",
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
  const isSwedish = locale === "sv";
  const closeMenu = () => setIsMenuOpen(false);
  return (
    <>
      <div
        className={`fixed inset-x-0 top-0 z-50 border-b px-4 pt-5 transition-[background-color,border-color,backdrop-filter] duration-300 sm:px-8 sm:pt-7 xl:pt-0 ${isHome ? (isScrolled ? "border-border/15 bg-foreground/60 backdrop-blur-sm" : "border-transparent bg-transparent") : `bg-surface ${isScrolled ? "border-border/30" : "border-border/60"}`}`}
      >
        <header
          className={`site-header relative z-10 mx-auto flex min-h-[4.5rem] max-w-[1600px] items-center justify-between gap-3 px-1 py-3 xl:min-h-[5.5rem] xl:py-2 2xl:min-h-[5rem] ${isSwedish ? "xl:gap-2 2xl:gap-4" : "xl:gap-3 2xl:gap-5"} ${isHome ? "text-white" : "text-foreground"}`}
        >
          <a
            aria-label={t("brandHome")}
            className={`order-1 mr-auto shrink-0 font-secondary text-[1.3rem] font-bold tracking-[-0.055em] transition-[color,transform] hover:translate-x-1 hover:text-primary active:text-primary xl:hidden ${isHome ? "text-white" : "text-foreground"}`}
            href="/"
          >
            BRICKINVEST
          </a>
          <div
            className={`hidden shrink-0 items-center xl:flex ${isSwedish ? "gap-3 2xl:gap-4" : "gap-4 2xl:gap-5"}`}
          >
            <a
              aria-label={t("brandHome")}
              className={`shrink-0 font-secondary text-[1.6rem] font-bold tracking-[-0.055em] transition-[color,transform] hover:translate-x-1 hover:text-primary active:text-primary ${isHome ? "text-white" : ""}`}
              href="/"
            >
              BRICKINVEST
            </a>
            <div className="relative" data-language-selector>
              <button
                aria-expanded={isLanguageOpen}
                aria-haspopup="menu"
                aria-label={t("openLanguage")}
                className={`flex items-center gap-2 px-0.5 py-2 text-[15px] font-semibold tracking-[0.08em] transition-colors hover:text-primary focus-visible:text-primary active:bg-primary/10 active:text-primary ${isHome ? "text-white/80" : "text-foreground/70"}`}
                onClick={(event) => {
                  event.stopPropagation();
                  setIsLanguageOpen((open) => !open);
                }}
                type="button"
              >
                <span>{selectedLocale.code}</span>
                <ChevronDown
                  aria-hidden="true"
                  className={`size-3 transition-transform xl:size-3.5 ${isLanguageOpen ? "rotate-180" : ""}`}
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
                      className="flex w-full items-center rounded-sm px-2.5 py-1.5 text-left text-[14px] leading-4 text-surface/90 transition-colors hover:bg-primary/15 hover:text-surface focus-visible:bg-primary/15 active:bg-primary/15 active:text-primary"
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
            aria-label={t("primaryNavigation")}
            className={`site-header-nav hidden min-w-0 flex-1 grid-cols-7 items-center xl:grid ${isSwedish ? "gap-x-1 2xl:gap-x-3" : "gap-x-2 2xl:gap-x-4"}`}
          >
            {navigation.map(({ href, key }) => (
              <a
                className={`site-header-link relative block w-full min-w-0 px-1 py-2 text-center leading-[1.15] font-semibold whitespace-normal transition-colors duration-250 after:absolute after:right-1 after:bottom-0 after:left-1 after:h-px after:origin-right after:bg-border after:transition-transform after:duration-250 hover:after:origin-left hover:after:scale-x-100 active:text-primary active:after:origin-left active:after:scale-x-100 active:after:bg-primary ${isSwedish && key === "solutions" ? "text-[12px] tracking-[0.01em] 2xl:text-[12px] 2xl:tracking-[0.01em]" : "text-[13px] tracking-[0.015em] 2xl:text-[15px] 2xl:tracking-[0.02em]"} ${activeSection === href.slice(1) ? "text-primary after:scale-x-100" : isHome ? "text-white/85 after:scale-x-0 hover:text-white" : "text-foreground/80 after:scale-x-0 hover:text-foreground"}`}
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
            className="relative hidden shrink-0 items-end leading-tight xl:flex"
            data-consultation
          >
            <button
              aria-expanded={isConsultationOpen}
              aria-label={t("requestConsultation")}
              className="group flex items-center gap-1.5 border border-border bg-white px-2 py-2.5 font-secondary text-[12px] leading-5 font-semibold tracking-[0.015em] whitespace-nowrap text-foreground transition-[background-color,color,transform] duration-250 ease-out hover:bg-foreground hover:text-background focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 active:translate-y-px 2xl:gap-2 2xl:px-3 2xl:text-[14px] 2xl:tracking-[0.02em]"
              onClick={(event) => {
                event.stopPropagation();
                if (isConsultationOpen) closeConsultation();
                else openConsultation();
              }}
              title={t("requestConsultation")}
              type="button"
            >
              <ConciergeBell
                aria-hidden="true"
                className="size-[18px] 2xl:size-5"
                strokeWidth={1.6}
              />
              <span>{t("requestConsultation")}</span>
            </button>
          </div>

          <div
            className="relative order-3 flex items-end leading-tight xl:hidden"
            data-consultation
          >
            <button
              aria-expanded={isConsultationOpen}
              aria-label={t("requestConsultation")}
              className={`grid size-12 place-items-center rounded-full transition-colors duration-250 hover:bg-primary/10 hover:text-primary focus-visible:bg-primary/10 focus-visible:text-primary focus-visible:ring-2 focus-visible:ring-ring/60 focus-visible:outline-none active:bg-primary/10 active:text-primary ${isHome ? "text-white/80" : "text-foreground/65"}`}
              onClick={(event) => {
                event.stopPropagation();
                if (isConsultationOpen) closeConsultation();
                else openConsultation();
              }}
              title={t("requestConsultation")}
              type="button"
            >
              <ConciergeBell
                aria-hidden="true"
                className="size-[20px]"
                strokeWidth={1.9}
              />
            </button>
          </div>

          <button
            aria-controls="mobile-navigation"
            aria-expanded={isMenuOpen}
            aria-label={isMenuOpen ? t("closeMenu") : t("openMenu")}
            className={`order-2 grid size-12 shrink-0 place-items-center font-bold transition-colors hover:text-primary active:text-primary xl:hidden ${isHome ? "text-white" : "text-foreground"}`}
            onClick={() => setIsMenuOpen((open) => !open)}
            type="button"
          >
            {isMenuOpen ? (
              <X aria-hidden="true" className="size-5" strokeWidth={2.4} />
            ) : (
              <Menu aria-hidden="true" className="size-5" strokeWidth={2.4} />
            )}
          </button>
        </header>

        <div
          aria-hidden={!isMenuOpen}
          className={`fixed inset-0 isolate z-0 bg-[#20211f] opacity-100 transition-[opacity,visibility] duration-300 xl:hidden ${isMenuOpen ? "visible" : "invisible opacity-0"}`}
          id="mobile-navigation"
        >
          <nav
            aria-label={t("mobileNavigation")}
            className="flex h-full flex-col justify-center gap-0.5 overflow-y-auto px-8 pt-24 pb-12 sm:px-16"
            hidden={!isMenuOpen}
          >
            <div className="relative mb-6 self-start" data-language-selector>
              <button
                aria-expanded={isLanguageOpen}
                aria-haspopup="menu"
                aria-label={t("openLanguage")}
                className="flex items-center gap-2 border-b border-white/20 px-0.5 py-2 font-secondary text-[13px] font-semibold tracking-[0.1em] text-white/80 transition-colors hover:text-primary focus-visible:text-primary active:text-primary"
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
                  className="absolute top-[calc(100%+0.45rem)] left-0 z-30 min-w-40 rounded-md border border-white/20 bg-[#20211f] p-1 shadow-lg"
                  role="menu"
                >
                  {locales.map((item) => (
                    <button
                      aria-checked={item.key === locale}
                      className="flex w-full items-center rounded-sm px-2.5 py-1.5 text-left font-secondary text-[12px] leading-4 text-white/90 transition-colors hover:bg-primary/15 hover:text-white focus-visible:bg-primary/15 active:bg-primary/15 active:text-primary"
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
            {navigation.map(({ href, key }) => (
              <a
                className="border-b border-white/15 py-3.5 text-left font-secondary text-[clamp(1.2rem,5.75vw,1.62rem)] leading-[1.2] font-semibold tracking-[0.01em] text-white transition-colors hover:text-primary focus-visible:text-primary active:text-primary sm:py-4"
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
