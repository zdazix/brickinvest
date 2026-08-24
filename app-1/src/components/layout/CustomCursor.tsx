import { useEffect, useRef, useState } from "react";
import { MousePointer2 } from "lucide-react";

type CursorPosition = {
  x: number;
  y: number;
};

const interactiveSelector =
  'a[href], button:not(:disabled), [role="button"], [role="menuitem"], input, textarea, select, label[for]';

type CursorMode = "default" | "interactive" | "project";

export const CustomCursor = () => {
  const [position, setPosition] = useState<CursorPosition | null>(null);
  const [mode, setMode] = useState<CursorMode>("default");
  const [enabled, setEnabled] = useState(false);
  const magneticTarget = useRef<HTMLElement | null>(null);
  const frame = useRef<number | null>(null);

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
      if (frame.current !== null) cancelAnimationFrame(frame.current);
      frame.current = requestAnimationFrame(() => {
        setPosition({ x: event.clientX, y: event.clientY });

        const element =
          event.target instanceof Element
            ? event.target.closest<HTMLElement>(
                "[data-cursor-project], [data-cursor-magnetic], " +
                  interactiveSelector,
              )
            : null;
        const projectTarget = element?.closest<HTMLElement>(
          "[data-cursor-project]",
        );
        const magnetic = element?.closest<HTMLElement>(
          "[data-cursor-magnetic]",
        );
        const nextTarget = magnetic ?? null;
        if (magneticTarget.current && magneticTarget.current !== nextTarget) {
          magneticTarget.current.style.transform = "";
        }
        magneticTarget.current = nextTarget;

        if (magnetic) {
          const bounds = magnetic.getBoundingClientRect();
          const distance = Math.hypot(
            event.clientX - (bounds.left + bounds.width / 2),
            event.clientY - (bounds.top + bounds.height / 2),
          );
          const radius = 160;
          const strength = Math.max(0, 1 - distance / radius);
          const offsetX =
            (event.clientX - (bounds.left + bounds.width / 2)) *
            0.08 *
            strength;
          const offsetY =
            (event.clientY - (bounds.top + bounds.height / 2)) *
            0.08 *
            strength;
          magnetic.style.transform = `translate(${offsetX}px, ${offsetY}px)`;
        }

        setMode(
          projectTarget ? "project" : element ? "interactive" : "default",
        );
      });
    };
    const handlePointerLeave = () => {
      if (magneticTarget.current) magneticTarget.current.style.transform = "";
      magneticTarget.current = null;
      setPosition(null);
      setMode("default");
    };
    document.addEventListener("pointermove", handlePointerMove);
    document.addEventListener("pointerleave", handlePointerLeave);
    return () => {
      document.documentElement.classList.remove("custom-cursor-enabled");
      document.removeEventListener("pointermove", handlePointerMove);
      document.removeEventListener("pointerleave", handlePointerLeave);
      if (frame.current !== null) cancelAnimationFrame(frame.current);
      if (magneticTarget.current) magneticTarget.current.style.transform = "";
    };
  }, [enabled]);

  if (!enabled || !position) return null;

  const cursorClass =
    mode === "project"
      ? "size-10 border-foreground/80 bg-surface text-[8px] font-medium tracking-[0.16em] text-foreground"
      : "size-4 border-transparent bg-transparent text-foreground transition-transform duration-200 ease-out";

  return (
    <span
      aria-hidden="true"
      className={`pointer-events-none fixed z-[200] flex -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border transition-[left,top,width,height,transform,background-color,border-color] duration-200 ease-out ${mode === "interactive" ? "scale-110" : ""} ${cursorClass}`}
      style={{ left: position.x, top: position.y }}
    >
      {mode === "project" ? (
        "VIEW"
      ) : (
        <MousePointer2
          aria-hidden="true"
          className="size-4 fill-white stroke-[1.5]"
        />
      )}
    </span>
  );
};
