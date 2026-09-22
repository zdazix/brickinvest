import { PageIntro } from "@/components/ui/PageIntro";
import { Loader } from "@/components/ui/Loader";
import { usePrivacyQuery } from "@/features/privacy/queries";
import { useLocale } from "@/lib/i18n";

export const PrivacyPage = () => {
  const { t } = useLocale();
  const privacyQuery = usePrivacyQuery();

  return (
    <main
      className="min-h-dvh bg-background px-5 pt-24 pb-16 sm:px-8 lg:px-12 lg:pt-28 lg:pb-24"
      id="main-content"
    >
      <div className="mx-auto max-w-7xl">
        <PageIntro
          description={t("legalPrivacyDescription")}
          title={t("privacyPolicy")}
        />
        <aside className="mt-14 flex flex-col gap-5 rounded-[2rem] bg-secondary p-7 text-secondary-foreground sm:flex-row sm:items-center sm:justify-between sm:p-9">
          <div className="max-w-2xl">
            <p className="text-[15px] font-semibold">{t("privacyDraft")}</p>
            <p className="mt-2 text-[15px] leading-6 opacity-70">
              {t("privacyDraftNotice")}
            </p>
          </div>
        </aside>
        <article className="mx-auto mt-10 max-w-7xl rounded-[2rem] border border-border/50 bg-surface px-6 shadow-sm shadow-foreground/5 sm:px-10">
          {privacyQuery.isError ? (
            <p className="py-10 text-[13px] text-danger">
              {t("privacyUnavailable")}
            </p>
          ) : !privacyQuery.data ? (
            <Loader className="py-10" label={t("loadingPrivacy")} />
          ) : null}
          {privacyQuery.data?.map(({ title, body }) => (
            <section
              className="border-t border-border/60 py-10 first:border-t-0 sm:py-12"
              key={title}
            >
              <div>
                <h2 className="text-2xl tracking-[-0.025em] sm:text-3xl">
                  {title}
                </h2>
                <p className="mt-5 max-w-3xl text-[15px] leading-6 text-muted-foreground">
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
