import { Link } from "@tanstack/react-router";

import { PageIntro } from "@/components/ui/PageIntro";
import { Loader } from "@/components/ui/Loader";
import { usePrivacyQuery } from "@/features/privacy/queries";

export const PrivacyPage = () => {
  const privacyQuery = usePrivacyQuery();

  return (
    <main
      className="min-h-dvh bg-background px-5 pt-28 pb-24 sm:px-8 lg:px-12 lg:pt-32 lg:pb-36"
      id="main-content"
    >
      <div className="mx-auto max-w-7xl">
        <PageIntro
          description="A clear, readable policy structure ready to be replaced with reviewed legal copy before launch."
          title="Privacy policy."
        />
        <aside className="mt-14 flex flex-col gap-5 rounded-[2rem] bg-secondary p-7 text-secondary-foreground sm:flex-row sm:items-center sm:justify-between sm:p-9">
          <div className="max-w-2xl">
            <p className="font-semibold">Before publishing</p>
            <p className="mt-2 leading-7 opacity-70">
              Replace every section with counsel-reviewed language that matches
              the product’s real data practices.
            </p>
          </div>
          <Link className="shrink-0 font-semibold text-primary" to="/contact">
            Ask a privacy question
          </Link>
        </aside>
        <article className="mx-auto mt-16 max-w-7xl rounded-[2rem] border border-border/50 bg-surface px-6 shadow-sm shadow-foreground/5 sm:px-10">
          {privacyQuery.isError ? (
            <p className="py-10 text-danger">
              The policy sections could not be loaded.
            </p>
          ) : !privacyQuery.data ? (
            <Loader className="py-10" label="Loading policy sections…" />
          ) : null}
          {privacyQuery.data?.map(({ title, body }, index) => (
            <section
              className="grid gap-5 border-t border-border/60 py-10 first:border-t-0 sm:grid-cols-[4rem_1fr] sm:gap-8 sm:py-12"
              key={title}
            >
              <p className="font-mono text-xs text-primary">0{index + 1}</p>
              <div>
                <h2 className="text-3xl tracking-[-0.03em] sm:text-4xl">
                  {title}
                </h2>
                <p className="mt-5 max-w-3xl leading-7 text-muted-foreground">
                  {body}
                </p>
              </div>
            </section>
          ))}
        </article>
      </div>
    </main>
  );
};
