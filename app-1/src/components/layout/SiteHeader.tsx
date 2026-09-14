import { ChevronDown, ConciergeBell, Menu, X } from "lucide-react";
import { useEffect, useState, type FormEvent } from "react";
import { useRouterState } from "@tanstack/react-router";

import { locales, useLocale, type LocaleKey } from "@/lib/i18n";
import { trackEvent } from "@/lib/analytics";

const navigation = [
  { label: "About Us", href: "#about", key: "about" },
  { label: "Why Us", href: "#why-us", key: "why" },
  { label: "What We Offer", href: "#what-we-offer", key: "offer" },
  { label: "Our Services", href: "#services", key: "services" },
  { label: "Projects", href: "#projects", key: "projects" },
  {
    label: "Investment Solutions",
    href: "#investment-solutions",
    key: "solutions",
  },
  {
    label: "AI & Data Intelligence",
    href: "#ai-data",
    key: "intelligence",
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
  const [isConsultationOpen, setIsConsultationOpen] = useState(false);
  const [consultationView, setConsultationView] = useState<
    "phone" | "form" | "success"
  >("phone");
  const [consultationForm, setConsultationForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [consultationError, setConsultationError] = useState("");
  const [isConsultationSending, setIsConsultationSending] = useState(false);
  const { locale, setLocale, t } = useLocale();
  const closeConsultation = () => {
    setIsConsultationOpen(false);
    setConsultationView("phone");
    setConsultationForm({ name: "", email: "", phone: "", message: "" });
    setConsultationError("");
  };
  const openConsultation = () => {
    if (!isConsultationOpen) trackEvent("consultation_open");
    setIsConsultationOpen(true);
  };

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
        closeConsultation();
      }
    };
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") closeConsultation();
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
  const submitConsultation = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const { name, email, phone, message } = consultationForm;
    if (!name.trim() || !email.trim() || !phone.trim() || !message.trim()) {
      setConsultationError("Please complete all fields before submitting.");
      return;
    }
    setIsConsultationSending(true);
    setConsultationError("");
    try {
      const response = await fetch(
        `${import.meta.env.VITE_INVESTOR_API_URL ?? ""}/api/investor-submissions`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            firstName: name,
            email,
            phone: phone.startsWith("+")
              ? phone
              : `+34${phone.replace(/\D/g, "")}`,
            objective: message.slice(0, 100),
            source: "Investment Solutions form",
          }),
        },
      );
      if (!response.ok) throw new Error("The request could not be sent.");
      setConsultationView("success");
      trackEvent("generate_lead", { lead_source: "consultation_modal" });
    } catch (error) {
      setConsultationError(
        error instanceof Error
          ? error.message
          : "The request could not be sent.",
      );
    } finally {
      setIsConsultationSending(false);
    }
  };

  return (
    <div
      className={`fixed inset-x-0 top-0 z-50 border-b px-4 pt-4 transition-[background-color,border-color,backdrop-filter] duration-300 sm:px-8 sm:pt-6 ${isHome ? (isScrolled ? "border-primary/15 bg-foreground/60 backdrop-blur-sm" : "border-transparent bg-transparent") : `bg-surface ${isScrolled ? "border-primary/30" : "border-border/60"}`}`}
    >
      <header
        className={`relative mx-auto flex max-w-[1600px] items-center justify-between gap-3 px-1 py-2 lg:gap-4 xl:gap-5 ${isHome ? "text-white" : "text-foreground"}`}
      >
        <div className="hidden shrink-0 items-center gap-6 lg:flex">
          <a
            aria-label="BRICKINVEST home"
            className={`font-secondary text-[1.55rem] font-bold tracking-[-0.065em] transition-colors hover:text-primary ${isHome ? "text-white" : ""}`}
            href="/"
          >
            BRICKINVEST
          </a>
          <div className="relative" data-language-selector>
            <button
              aria-expanded={isLanguageOpen}
              aria-haspopup="menu"
              aria-label={t("openLanguage")}
              className={`flex items-center gap-1.5 px-0.5 py-2 text-[11px] font-semibold tracking-[0.1em] transition-colors hover:text-primary focus-visible:text-primary ${isHome ? "text-white/80" : "text-foreground/70"}`}
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
              className={`relative py-2 text-center text-[13px] font-semibold tracking-[0.035em] whitespace-nowrap transition-colors duration-250 after:absolute after:right-0 after:bottom-0 after:left-0 after:h-px after:origin-right after:bg-primary after:transition-transform after:duration-250 hover:after:origin-left hover:after:scale-x-100 ${activeSection === href.slice(1) ? "text-primary after:scale-x-100" : isHome ? "text-white/85 after:scale-x-0 hover:text-white" : "text-foreground/80 after:scale-x-0 hover:text-foreground"}`}
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
            className={`flex items-center gap-2 rounded-full px-2 py-2 text-[11px] font-bold tracking-[0.08em] whitespace-nowrap transition-colors duration-250 hover:bg-primary/10 hover:text-primary focus-visible:bg-primary/10 focus-visible:text-primary focus-visible:ring-2 focus-visible:ring-primary/60 focus-visible:outline-none ${isHome ? "text-white/80" : "text-foreground/65"}`}
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
            className={`flex items-center gap-1.5 rounded-full px-1.5 py-2 text-[9px] font-bold tracking-[0.05em] whitespace-nowrap transition-colors duration-250 hover:bg-primary/10 hover:text-primary focus-visible:bg-primary/10 focus-visible:text-primary focus-visible:ring-2 focus-visible:ring-primary/60 focus-visible:outline-none ${isHome ? "text-white/80" : "text-foreground/65"}`}
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
            <span>REQUEST CONSULTATION</span>
          </button>
        </div>

        <button
          aria-controls="mobile-navigation"
          aria-expanded={isMenuOpen}
          aria-label={isMenuOpen ? t("closeMenu") : t("openMenu")}
          className={`order-1 ml-auto grid size-11 place-items-center rounded-full border font-bold transition-colors hover:border-primary lg:hidden ${isHome ? "border-primary/55 bg-transparent text-white hover:bg-white/10" : "border-border bg-surface text-foreground hover:bg-secondary"}`}
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
              className="border-b border-primary/15 py-4 text-left text-2xl font-semibold tracking-[-0.02em] text-white transition-colors hover:text-primary focus-visible:text-primary sm:text-3xl"
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

      {isConsultationOpen && (
        <div
          aria-label="REQUEST CONSULTATION"
          aria-modal="true"
          className="consultation-modal fixed inset-0 z-[60] flex items-center justify-center bg-foreground/25 px-5 py-8 sm:px-8"
          onClick={closeConsultation}
          role="dialog"
        >
          <div
            className="consultation-modal__panel relative w-full max-w-md border border-primary/60 bg-surface px-7 py-9 text-center text-foreground sm:px-12 sm:py-12"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              aria-label="Close consultation dialog"
              className="absolute top-3 right-4 text-2xl leading-none font-light text-foreground/55 transition-colors hover:text-primary"
              onClick={closeConsultation}
              type="button"
            >
              ×
            </button>
            <div className="consultation-modal__content">
              {consultationView === "phone" && (
                <>
                  <h2
                    className="font-secondary text-[11px] font-medium tracking-[0.18em] text-foreground/60"
                    id="consultation-dialog-title"
                  >
                    REQUEST CONSULTATION
                  </h2>
                  <p className="mx-auto mt-7 max-w-sm text-base leading-7 text-foreground/75">
                    Speak with our team about your investment plans on the Costa
                    del Sol.
                  </p>
                  <a
                    className="mt-7 inline-block text-lg tracking-[0.12em] text-primary transition-colors hover:text-foreground"
                    href="tel:+34695121585"
                    onClick={() => trackEvent("phone_click")}
                  >
                    +34 695 1215 85
                  </a>
                  <button
                    className="mt-8 block w-full border border-primary/25 px-5 py-3 text-[10px] font-medium tracking-[0.16em] text-foreground transition-[background-color,border-color,color,transform] duration-250 ease-out hover:border-primary hover:bg-primary hover:text-primary-foreground focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 active:translate-y-px"
                    onClick={() => {
                      trackEvent("consultation_form_open");
                      setConsultationView("form");
                    }}
                    type="button"
                  >
                    LEAVE A REQUEST
                  </button>
                </>
              )}
              {consultationView === "form" && (
                <>
                  <div className="flex items-center justify-between gap-4">
                    <button
                      className="text-[10px] tracking-[0.14em] text-foreground/55 uppercase transition-colors hover:text-primary"
                      onClick={() => setConsultationView("phone")}
                      type="button"
                    >
                      Back
                    </button>
                    <h2 className="font-secondary text-[11px] font-medium tracking-[0.18em] text-foreground/60">
                      REQUEST CONSULTATION
                    </h2>
                  </div>
                  <form
                    className="mt-7 grid gap-4 text-left"
                    onSubmit={(event) => void submitConsultation(event)}
                  >
                    {(["name", "email", "phone"] as const).map((field) => (
                      <label
                        className="grid gap-1 text-[10px] tracking-[0.14em] text-foreground/60 uppercase"
                        key={field}
                      >
                        {field === "name"
                          ? "Name"
                          : field === "email"
                            ? "Email"
                            : "Phone Number"}
                        <input
                          className="h-10 border-b border-primary/40 bg-transparent px-0 text-base tracking-normal text-foreground transition-[border-color] duration-250 outline-none focus:border-primary"
                          onChange={(event) =>
                            setConsultationForm((current) => ({
                              ...current,
                              [field]: event.target.value,
                            }))
                          }
                          required
                          type={
                            field === "email"
                              ? "email"
                              : field === "phone"
                                ? "tel"
                                : "text"
                          }
                          value={consultationForm[field]}
                        />
                      </label>
                    ))}
                    <label className="grid gap-1 text-[10px] tracking-[0.14em] text-foreground/60 uppercase">
                      Message / What would you like to discuss?
                      <textarea
                        className="min-h-20 resize-none border-b border-primary/40 bg-transparent px-0 py-2 text-base tracking-normal text-foreground transition-[border-color] duration-250 outline-none focus:border-primary"
                        onChange={(event) =>
                          setConsultationForm((current) => ({
                            ...current,
                            message: event.target.value,
                          }))
                        }
                        required
                        value={consultationForm.message}
                      />
                    </label>
                    {consultationError && (
                      <p aria-live="polite" className="text-sm text-danger">
                        {consultationError}
                      </p>
                    )}
                    <button
                      className="mt-2 border border-primary bg-foreground px-5 py-3 text-[10px] font-semibold tracking-[0.16em] text-background transition-[background-color,color,transform] duration-250 ease-out hover:bg-primary hover:text-primary-foreground focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 active:translate-y-px disabled:opacity-60"
                      disabled={isConsultationSending}
                      type="submit"
                    >
                      {isConsultationSending
                        ? "Sending…"
                        : "REQUEST CONSULTATION"}
                    </button>
                  </form>
                </>
              )}
              {consultationView === "success" && (
                <>
                  <p className="font-primary text-2xl leading-tight text-foreground">
                    Thank you. Your consultation request has been received.
                  </p>
                  <button
                    className="mt-8 text-[10px] tracking-[0.14em] text-foreground/55 uppercase transition-colors hover:text-primary"
                    onClick={() => setConsultationView("phone")}
                    type="button"
                  >
                    Back
                  </button>
                </>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
