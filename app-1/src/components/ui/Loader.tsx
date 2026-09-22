import { Leaf, LoaderCircle } from "lucide-react";

type LoaderProps = {
  readonly className?: string;
  readonly label?: string;
  readonly mode?: "inline" | "page";
};

export const Loader = ({
  className = "",
  label = "Laadimine…",
  mode = "inline",
}: LoaderProps) => (
  <div
    aria-label={label}
    className={`flex items-center justify-center ${mode === "page" ? "min-h-dvh" : "min-h-24"} ${className}`}
    role="status"
  >
    <div className="flex flex-col items-center gap-4">
      <div className="relative grid size-14 place-items-center">
        <span className="absolute inset-1 animate-pulse rounded-full bg-secondary" />
        <LoaderCircle
          aria-hidden="true"
          className="absolute inset-0 size-14 animate-spin text-primary/35"
          strokeWidth={1.25}
        />
        <span className="relative grid size-10 place-items-center rounded-full bg-primary text-primary-foreground shadow-sm">
          <Leaf aria-hidden="true" className="size-4" />
        </span>
      </div>
      <p className="text-[13px] font-medium text-muted-foreground">{label}</p>
    </div>
  </div>
);
