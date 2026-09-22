import { PageIntro } from "@/components/ui/PageIntro";
import { useLocale } from "@/lib/i18n";

type LegalPageProps = { readonly kind: "cookies" | "terms" };

export const LegalPage = ({ kind }: LegalPageProps) => {
  const { t } = useLocale();
  const isTerms = kind === "terms";
  return (
    <main
      className="grain-surface min-h-dvh bg-background px-5 pt-24 pb-16 sm:px-8 lg:px-12 lg:pt-28"
      id="main-content"
    >
      <div className="mx-auto max-w-7xl">
        <PageIntro
          description={
            isTerms ? t("legalTermsDescription") : t("legalCookiesDescription")
          }
          title={isTerms ? t("termsAndConditions") : t("cookiesPolicy")}
        />
      </div>
    </main>
  );
};
