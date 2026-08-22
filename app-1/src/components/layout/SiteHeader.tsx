import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

const navigation = [
  { label: "About Us", href: "#about-us" },
  { label: "Why Us", href: "#why-us" },
  { label: "What We Offer", href: "#what-we-offer" },
  { label: "Our Services", href: "#our-services" },
  { label: "Projects", href: "#projects" },
  { label: "Investment Solutions", href: "#investment-solutions" },
  { label: "AI & Data Intelligence", href: "#ai-data-intelligence" },
];

export const SiteHeader = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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

  const closeMenu = () => setIsMenuOpen(false);
  const menuLinkClass =
    "border-b border-white/15 py-4 text-left text-2xl font-light tracking-[-0.02em] text-white transition-colors hover:text-primary focus-visible:text-primary sm:text-3xl";

  return (
    <div className="fixed inset-x-0 top-0 z-50 px-4 pt-4 sm:px-8 sm:pt-6">
      <header className="text-white mx-auto flex max-w-[1600px] items-center justify-center px-1 py-2">
        <nav
          aria-label="Primary navigation"
          className="hidden w-full items-center justify-center gap-x-7 gap-y-2 lg:flex xl:gap-x-10"
        >
          {navigation.map(({ href, label }) => (
            <a
              className="text-white/90 hover:text-white relative py-2 text-center text-[11px] font-medium tracking-[0.08em] transition-colors after:absolute after:right-0 after:bottom-0 after:left-0 after:h-px after:origin-right after:scale-x-0 after:bg-primary after:transition-transform after:duration-300 hover:after:origin-left hover:after:scale-x-100"
              href={href}
              key={href}
            >
              {label}
            </a>
          ))}
        </nav>
        <button
          aria-controls="mobile-navigation"
          aria-expanded={isMenuOpen}
          aria-label={
            isMenuOpen ? "Close navigation menu" : "Open navigation menu"
          }
          className="border-white/35 bg-black/10 text-white hover:border-white/70 hover:bg-white/10 ml-auto grid size-11 place-items-center rounded-full border backdrop-blur-sm transition-colors lg:hidden"
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
          {navigation.map(({ href, label }) => (
            <a
              className={menuLinkClass}
              href={href}
              key={href}
              onClick={closeMenu}
            >
              {label}
            </a>
          ))}
        </nav>
      </div>
    </div>
  );
};
