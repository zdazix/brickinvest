import { ChevronDown, Globe2, Menu, X } from "lucide-react";
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

  const selectedLocale =
    locales.find((item) => item.key === locale) ?? locales[0];
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <div className="fixed inset-x-0 top-0 z-50 px-4 pt-4 sm:px-8 sm:pt-6">
      <header className="text-white relative mx-auto flex max-w-[1600px] items-center justify-between px-1 py-2">
        <nav
          aria-label="Primary navigation"
          className="hidden w-full items-center justify-center gap-x-7 gap-y-2 lg:flex xl:gap-x-10"
        >
          {navigation.map(({ href, key }) => (
            <a
              className="text-white/90 hover:text-white relative py-2 text-center text-[11px] font-medium tracking-[0.08em] transition-colors after:absolute after:right-0 after:bottom-0 after:left-0 after:h-px after:origin-right after:scale-x-0 after:bg-primary after:transition-transform after:duration-300 hover:after:origin-left hover:after:scale-x-100"
              href={href}
              key={href}
            >
              {t(key)}
            </a>
          ))}
        </nav>

        <div className="absolute right-0" data-language-selector>
          <button
            aria-expanded={isLanguageOpen}
            aria-haspopup="menu"
            aria-label={t("openLanguage")}
            className="border-white/45 text-white flex min-h-12 items-center gap-2 rounded-lg border bg-[#141914]/20 px-4 text-[11px] tracking-[0.12em] backdrop-blur-sm transition-colors hover:border-primary hover:bg-[#141914]/45 hover:text-primary focus-visible:border-primary"
            onClick={(event) => {
              event.stopPropagation();
              setIsLanguageOpen((open) => !open);
            }}
            type="button"
          >
            <Globe2 aria-hidden="true" className="size-4" />
            <span>{selectedLocale.code}</span>
            <ChevronDown
              aria-hidden="true"
              className={`size-3 transition-transform ${isLanguageOpen ? "rotate-180" : ""}`}
            />
          </button>
          {isLanguageOpen && (
            <div
              className="shadow-black/40 absolute top-[calc(100%+0.5rem)] right-0 z-20 min-w-52 rounded-lg border border-primary/80 bg-[#0d1411]/95 p-2 shadow-2xl backdrop-blur-xl"
              role="menu"
            >
              {locales.map((item) => (
                <button
                  aria-checked={item.key === locale}
                  className="text-white/90 hover:text-white flex w-full items-center gap-3 rounded-md px-3 py-3 text-left text-[15px] transition-colors hover:bg-primary/15 focus-visible:bg-primary/15"
                  key={item.key}
                  onClick={() => {
                    setLocale(item.key as LocaleKey);
                    setIsLanguageOpen(false);
                  }}
                  role="menuitemradio"
                  type="button"
                >
                  <span aria-hidden="true" className="text-base">
                    {item.flag}
                  </span>
                  <span>{item.label}</span>
                  {item.key === locale && (
                    <span className="ml-auto text-primary">•</span>
                  )}
                </button>
              ))}
            </div>
          )}
        </div>

        <button
          aria-controls="mobile-navigation"
          aria-expanded={isMenuOpen}
          aria-label={isMenuOpen ? t("closeMenu") : t("openMenu")}
          className="border-white/35 bg-black/10 text-white hover:border-white/70 hover:bg-white/10 mr-auto grid size-11 place-items-center rounded-full border backdrop-blur-sm transition-colors lg:hidden"
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
        className={`fixed inset-0 -z-10 bg-[#121211]/92 backdrop-blur-md transition-[opacity,visibility] duration-300 lg:hidden ${isMenuOpen ? "visible opacity-100" : "invisible opacity-0"}`}
        id="mobile-navigation"
      >
        <nav
          aria-label="Mobile primary navigation"
          className="flex h-full flex-col justify-center gap-1 px-8 pt-24 pb-12 sm:px-16"
          hidden={!isMenuOpen}
        >
          {navigation.map(({ href, key }) => (
            <a
              className="border-white/15 text-white border-b py-4 text-left text-2xl font-light tracking-[-0.02em] transition-colors hover:text-primary focus-visible:text-primary sm:text-3xl"
              href={href}
              key={href}
              onClick={closeMenu}
            >
              {t(key)}
            </a>
          ))}
        </nav>
      </div>
    </div>
  );
};
