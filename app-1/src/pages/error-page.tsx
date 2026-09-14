type ErrorPageProps = {
  readonly reset: () => void;
};

export const ErrorPage = ({ reset }: ErrorPageProps) => (
  <main className="grain-surface grid min-h-dvh place-items-center bg-background p-6 text-foreground">
    <div className="max-w-md text-center">
      <p className="font-mono text-[11px] tracking-[0.16em] text-primary uppercase">
        Something shifted
      </p>
      <h1 className="mt-5 text-4xl tracking-[-0.04em]">The frame broke.</h1>
      <p className="mt-4 text-[15px] leading-6 text-muted-foreground">
        The experience could not be displayed, but it can be safely restarted.
      </p>
      <button
        className="mt-8 rounded-full border border-border bg-foreground px-6 py-3 font-semibold text-background transition-[background-color,color,transform] duration-250 ease-out hover:bg-primary hover:text-primary-foreground focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 active:translate-y-px"
        onClick={reset}
        type="button"
      >
        Try again
      </button>
    </div>
  </main>
);
