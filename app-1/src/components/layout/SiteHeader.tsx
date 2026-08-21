import { useEffect, useState } from "react";
import { BrandMark } from "@/components/layout/BrandMark";
import { Button } from "@/components/ui/Button";

const navigation = [
  "Investment Opportunities",
  "Development",
  "Property Intelligence",
  "Market Intelligence",
  "AI & Data Intelligence",
  "About",
  "Contact",
];

export const SiteHeader = () => {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <div className="fixed inset-x-0 top-4 z-40 px-4 sm:px-8">
      <header
        className={`mx-auto flex max-w-[1600px] items-center justify-between gap-4 border px-4 py-3 transition-all ${scrolled ? "border-primary/20 bg-background/90 shadow-2xl backdrop-blur-xl" : "border-primary/20 bg-background/20 backdrop-blur-md"}`}
      >
        <BrandMark tone="light" />
        <nav
          aria-label="Primary navigation"
          className="hidden items-center gap-1 text-[10px] tracking-[0.08em] text-primary-foreground/80 uppercase xl:flex"
        >
          {navigation.map((item) => (
            <a
              className="px-2 py-2 transition-colors hover:text-primary"
              href="#opportunities"
              key={item}
            >
              {item}
            </a>
          ))}
        </nav>
        <Button
          className="min-h-0 rounded-none border border-primary/70 bg-transparent px-4 py-3 text-[10px] tracking-[0.16em] text-primary-foreground hover:bg-primary hover:text-primary-foreground"
          onClick={() =>
            window.dispatchEvent(new CustomEvent("open-investor-quiz"))
          }
        >
          REQUEST OPPORTUNITIES
        </Button>
      </header>
    </div>
  );
};
