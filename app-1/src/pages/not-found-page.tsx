import { NumericText } from "@/components/ui/NumericText";

export const NotFoundPage = () => (
  <main className="grain-surface grid min-h-dvh place-items-center bg-background p-6 text-foreground">
    <div className="max-w-lg text-center">
      <p className="font-mono text-xs tracking-widest text-primary uppercase">
        <NumericText>404 / Off canvas</NumericText>
      </p>
      <h1 className="mt-5 text-6xl tracking-tighter">Nothing here yet.</h1>
      <a
        className="mt-8 inline-flex rounded-full border border-border px-6 py-3 font-semibold transition-[background-color,border-color,color,transform] duration-250 ease-out hover:border-border hover:bg-primary hover:text-primary-foreground focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 active:translate-y-px"
        href="/"
      >
        Return to the frame
      </a>
    </div>
  </main>
);
