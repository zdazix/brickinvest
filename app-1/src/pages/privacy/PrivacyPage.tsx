import { PageIntro } from "@/components/ui/PageIntro";
import { Loader } from "@/components/ui/Loader";
import { NumericText } from "@/components/ui/NumericText";
import { usePrivacyQuery } from "@/features/privacy/queries";

export const PrivacyPage = () => {
  const privacyQuery = usePrivacyQuery();

  return (
    <main
      className="min-h-dvh bg-background px-5 pt-24 pb-16 sm:px-8 lg:px-12 lg:pt-28 lg:pb-24"
      id="main-content"
    >
      <div className="mx-auto max-w-7xl">
        <PageIntro
          description="How BRICKINVEST handles personal information when you use this website or contact the team."
          title="BRICKINVEST Privacy Policy"
        />
        <aside className="mt-14 flex flex-col gap-5 rounded-[2rem] bg-secondary p-7 text-secondary-foreground sm:flex-row sm:items-center sm:justify-between sm:p-9">
          <div className="max-w-2xl">
            <p className="text-[15px] font-semibold">Draft for review</p>
            <p className="mt-2 text-[15px] leading-6 opacity-70">
              Bracketed placeholders must be completed and this policy requires
              legal and operational review before publication.
            </p>
          </div>
        </aside>
        <article className="mx-auto mt-10 max-w-7xl rounded-[2rem] border border-border/50 bg-surface px-6 shadow-sm shadow-foreground/5 sm:px-10">
          {privacyQuery.isError ? (
            <p className="py-10 text-[13px] text-danger">
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
              <p className="font-mono text-[11px] text-primary">
                <NumericText>{`0${index + 1}`}</NumericText>
              </p>
              <div>
                <h2 className="text-2xl tracking-[-0.025em] sm:text-3xl">
                  <NumericText>{title}</NumericText>
                </h2>
                <p className="mt-5 max-w-3xl text-[15px] leading-6 text-muted-foreground">
                  <NumericText>{body}</NumericText>
                </p>
              </div>
            </section>
          ))}
        </article>
      </div>
    </main>
  );
};
