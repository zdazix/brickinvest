import { PageIntro } from "@/components/ui/PageIntro";

type LegalPageProps = { readonly kind: "cookies" | "terms" };

export const LegalPage = ({ kind }: LegalPageProps) => {
  const isTerms = kind === "terms";
  return (
    <main
      className="min-h-dvh bg-background px-5 pt-28 pb-24 sm:px-8 lg:px-12 lg:pt-32"
      id="main-content"
    >
      <div className="mx-auto max-w-7xl">
        <PageIntro
          description={
            isTerms
              ? "Terms and conditions for using the BRICKINVEST website."
              : "Information about how BRICKINVEST uses cookies on this website."
          }
          title={isTerms ? "Terms & Conditions" : "Cookies Policy"}
        />
      </div>
    </main>
  );
};
