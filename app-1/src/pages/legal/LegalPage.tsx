import { PageIntro } from "@/components/ui/PageIntro";

type LegalPageProps = { readonly kind: "cookies" | "terms" };

export const LegalPage = ({ kind }: LegalPageProps) => {
  const isTerms = kind === "terms";
  return (
    <main
      className="grain-surface min-h-dvh bg-background px-5 pt-24 pb-16 sm:px-8 lg:px-12 lg:pt-28"
      id="main-content"
    >
      <div className="mx-auto max-w-7xl">
        <PageIntro
          description={
            isTerms
              ? "Nutzungsbedingungen für die BRICKINVEST-Website."
              : "Informationen darüber, wie BRICKINVEST Cookies auf dieser Website verwendet."
          }
          title={isTerms ? "Nutzungsbedingungen" : "Cookie-Richtlinie"}
        />
      </div>
    </main>
  );
};
