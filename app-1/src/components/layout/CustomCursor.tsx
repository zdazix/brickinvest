import { useEffect, useState } from "react";

type CursorPosition = {
  x: number;
  y: number;
};

const interactiveSelector =
  'a[href], button:not(:disabled), [role="button"], [role="menuitem"], input, textarea, select, label[for]';

export const CustomCursor = () => {
  const [position, setPosition] = useState<CursorPosition | null>(null);
  const [isInteractive, setIsInteractive] = useState(false);
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    const pointerQuery = window.matchMedia("(pointer: fine)");
    const motionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const updateAvailability = () =>
      setEnabled(pointerQuery.matches && !motionQuery.matches);
    updateAvailability();
    pointerQuery.addEventListener("change", updateAvailability);
    motionQuery.addEventListener("change", updateAvailability);
    return () => {
      pointerQuery.removeEventListener("change", updateAvailability);
      motionQuery.removeEventListener("change", updateAvailability);
    };
  }, []);

  useEffect(() => {
    if (!enabled) {
      document.documentElement.classList.remove("custom-cursor-enabled");
      return;
    }

    document.documentElement.classList.add("custom-cursor-enabled");
    const handlePointerMove = (event: PointerEvent) => {
      setPosition({ x: event.clientX, y: event.clientY });
      setIsInteractive(
        event.target instanceof Element &&
          Boolean(event.target.closest(interactiveSelector)),
      );
    };
    const handlePointerLeave = () => setPosition(null);
    document.addEventListener("pointermove", handlePointerMove);
    document.addEventListener("pointerleave", handlePointerLeave);
    return () => {
      document.documentElement.classList.remove("custom-cursor-enabled");
      document.removeEventListener("pointermove", handlePointerMove);
      document.removeEventListener("pointerleave", handlePointerLeave);
    };
  }, [enabled]);

  if (!enabled || !position) return null;

  return (
    <span
      aria-hidden="true"
      className={`pointer-events-none fixed z-[200] size-4 -translate-x-1/2 -translate-y-1/2 rounded-full border border-foreground/80 transition-[left,top,transform,background-color,border-color] duration-200 ease-out ${isInteractive ? "scale-[1.7] border-primary bg-primary/30" : "bg-transparent"}`}
      style={{ left: position.x, top: position.y }}
    />
  );
};
