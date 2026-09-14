import { useEffect, useRef, useState } from "react";
import { MousePointer2, Pointer } from "lucide-react";

const interactiveSelector =
  'a[href], button:not(:disabled), [role="button"], [role="menuitem"], input, textarea, select, label[for]';

type CursorMode = "default" | "interactive" | "project";
type CursorPosition = { x: number; y: number };

export const CustomCursor = () => {
  const [position, setPosition] = useState<CursorPosition | null>(null);
  const [mode, setMode] = useState<CursorMode>("default");
  const [enabled, setEnabled] = useState(false);
  const magneticTarget = useRef<HTMLElement | null>(null);
  const frame = useRef<number | null>(null);
  const latestPointer = useRef<PointerEvent | null>(null);
  const cursorRef = useRef<HTMLSpanElement | null>(null);

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
      latestPointer.current = event;
      if (frame.current !== null) return;
      frame.current = requestAnimationFrame(() => {
        frame.current = null;
        const pointer = latestPointer.current;
        if (!pointer) return;
        if (cursorRef.current) {
          cursorRef.current.style.left = `${pointer.clientX}px`;
          cursorRef.current.style.top = `${pointer.clientY}px`;
        } else {
          setPosition({ x: pointer.clientX, y: pointer.clientY });
        }

        const element =
          pointer.target instanceof Element
            ? pointer.target.closest<HTMLElement>(
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
            pointer.clientX - (bounds.left + bounds.width / 2),
            pointer.clientY - (bounds.top + bounds.height / 2),
          );
          const radius = 160;
          const strength = Math.max(0, 1 - distance / radius);
          const offsetX =
            (pointer.clientX - (bounds.left + bounds.width / 2)) *
            0.08 *
            strength;
          const offsetY =
            (pointer.clientY - (bounds.top + bounds.height / 2)) *
            0.08 *
            strength;
          magnetic.style.transform = `translate(${offsetX}px, ${offsetY}px)`;
        }

        const nextMode = projectTarget
          ? "project"
          : element
            ? "interactive"
            : "default";
        setMode((currentMode) =>
          currentMode === nextMode ? currentMode : nextMode,
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
      frame.current = null;
      latestPointer.current = null;
      if (magneticTarget.current) magneticTarget.current.style.transform = "";
    };
  }, [enabled]);

  if (!enabled || !position) return null;

  const cursorClass =
    mode === "project"
      ? "size-8 border-border/80 bg-surface text-[7px] font-medium tracking-[0.14em] text-foreground"
      : "size-4 border-transparent bg-transparent text-foreground transition-transform duration-200 ease-out";
  const CursorIcon = mode === "interactive" ? Pointer : MousePointer2;

  return (
    <span
      aria-hidden="true"
      className={`pointer-events-none fixed z-[200] flex -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border transition-[left,top,width,height,transform,background-color,border-color] duration-200 ease-out ${mode === "interactive" ? "scale-110" : ""} ${cursorClass}`}
      ref={cursorRef}
      style={{ left: position.x, top: position.y }}
    >
      {mode === "project" ? (
        "VIEW"
      ) : (
        <CursorIcon
          aria-hidden="true"
          className="size-4 fill-white stroke-[1.5]"
        />
      )}
    </span>
  );
};
