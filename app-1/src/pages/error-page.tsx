type ErrorPageProps = {
  readonly reset: () => void;
};

export const ErrorPage = ({ reset }: ErrorPageProps) => (
  <main className="grain-surface grid min-h-dvh place-items-center bg-background p-6 text-foreground">
    <div className="max-w-md text-center">
      <p className="font-mono text-xs tracking-widest text-primary uppercase">
        Something shifted
      </p>
      <h1 className="mt-5 text-5xl tracking-tighter">The frame broke.</h1>
      <p className="mt-4 leading-7 text-muted-foreground">
        The experience could not be displayed, but it can be safely restarted.
      </p>
      <button
        className="mt-8 rounded-full border border-foreground bg-foreground px-6 py-3 font-semibold text-background transition-colors hover:bg-primary hover:text-primary-foreground"
        onClick={reset}
        type="button"
      >
        Try again
      </button>
    </div>
  </main>
);
