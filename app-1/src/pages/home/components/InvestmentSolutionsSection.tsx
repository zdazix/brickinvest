import { useState, type FormEvent } from "react";

import { ArrowUpRight } from "lucide-react";

import { useLocale } from "@/lib/i18n";
import { trackEvent } from "@/lib/analytics";

export const InvestmentSolutionsSection = () => {
  const { locale, t } = useLocale();
  const isLongInvestmentLocale =
    locale === "de" ||
    locale === "et" ||
    locale === "es" ||
    locale === "pl" ||
    locale === "cs";
  const [name, setName] = useState("");
  const [contact, setContact] = useState("");
  const [status, setStatus] = useState<"idle" | "sending" | "success">("idle");
  const [errors, setErrors] = useState({ name: "", contact: "" });
  const [error, setError] = useState("");

  const submitRequest = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const nextErrors = {
      name: name.trim() ? "" : t("requestNameRequired"),
      contact: contact.trim() ? "" : t("requestContactRequired"),
    };
    setErrors(nextErrors);
    if (nextErrors.name || nextErrors.contact) {
      return;
    }
    setStatus("sending");
    setError("");
    const isEmail = contact.includes("@");
    try {
      const response = await fetch(
        `${import.meta.env.VITE_INVESTOR_API_URL ?? ""}/api/investor-submissions`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            firstName: name,
            email: isEmail ? contact : undefined,
            phone: isEmail ? undefined : contact,
            source: "Formulář investičních řešení",
          }),
        },
      );
      if (!response.ok) {
        const details = (await response.json().catch(() => null)) as {
          error?: { message?: string };
        } | null;
        throw new Error(details?.error?.message || t("requestFailed"));
      }
      setStatus("success");
      trackEvent("generate_lead", { lead_source: "investment_solutions" });
    } catch (submissionError) {
      setStatus("idle");
      setError(
        submissionError instanceof Error
          ? submissionError.message
          : t("requestFailed"),
      );
    }
  };

  return (
    <section
      aria-labelledby="investment-solutions-heading"
      className="section-shell grain-surface relative overflow-hidden bg-background"
      id="investment-solutions"
    >
      <div
        className={`section-grid relative ${
          isLongInvestmentLocale ? "investment-locale-grid" : ""
        }`}
      >
        <div className="min-w-0">
          <h2
            className={`section-title ${
              isLongInvestmentLocale
                ? `investment-locale-title ${locale === "et" ? "investment-title-et" : locale === "es" ? "investment-title-es" : locale === "pl" ? "investment-title-pl" : locale === "cs" ? "investment-title-cs" : ""}`
                : locale === "sv"
                  ? "!text-[clamp(2rem,3.3vw,3.1rem)] break-words"
                  : ""
            }`}
            id="investment-solutions-heading"
          >
            {locale === "sv" ? (
              <>
                <span className="inline-block whitespace-nowrap">
                  SKRÄDDARSYDDA
                </span>{" "}
                INVESTERINGSLÖSNINGAR
              </>
            ) : isLongInvestmentLocale ? (
              locale === "pl" ? (
                <>
                  <span className="investment-title-pl-line block whitespace-nowrap">
                    INDYWIDUALNE
                  </span>{" "}
                  <span className="investment-title-pl-line block whitespace-nowrap">
                    ROZWIĄZANIA
                  </span>{" "}
                  <span className="investment-title-pl-line block whitespace-nowrap">
                    INWESTYCYJNE
                  </span>
                </>
              ) : locale === "cs" ? (
                <>
                  <span className="investment-title-cs-line block whitespace-nowrap">
                    INDIVIDUÁLNÍ
                  </span>{" "}
                  <span className="investment-title-cs-line block whitespace-nowrap">
                    INVESTIČNÍ
                  </span>{" "}
                  <span className="investment-title-cs-line block whitespace-nowrap">
                    ŘEŠENÍ
                  </span>
                </>
              ) : (
                <>
                  <span className="block whitespace-nowrap">
                    {locale === "et"
                      ? "INDIVIDUAALSED"
                      : locale === "es"
                        ? "SOLUCIONES DE"
                        : "INDIVIDUELLE"}
                  </span>{" "}
                  <span className="block whitespace-nowrap">
                    {locale === "et"
                      ? "INVESTEERIMISLAHENDUSED"
                      : locale === "es"
                        ? "INVERSIÓN PERSONALIZADAS"
                        : "INVESTMENTLÖSUNGEN"}
                  </span>
                </>
              )
            ) : (
              t("investmentHeading")
            )}
          </h2>
        </div>
        <div className="min-w-0">
          <p
            className={`editorial-intro max-w-[720px] ${
              isLongInvestmentLocale ? "investment-locale-body" : ""
            }`}
          >
            {t("investmentBody")}
          </p>
          <div className="mt-10 border-t border-border/30 pt-6">
            {status === "success" ? (
              <p className="font-primary text-2xl text-foreground sm:text-3xl">
                {t("requestSuccess")}
              </p>
            ) : (
              <>
                <p className="section-label tracking-[0.2em] text-[#000]">
                  {t("requestPrompt")}
                </p>
                <form
                  className="mt-7"
                  onSubmit={(event) => void submitRequest(event)}
                >
                  <div className="grid items-start gap-6 sm:grid-cols-2">
                    <label
                      className="form-label min-w-0"
                      htmlFor="investment-name"
                    >
                      {t("requestName")}
                      <input
                        aria-describedby={
                          errors.name ? "investment-name-error" : undefined
                        }
                        aria-invalid={Boolean(errors.name)}
                        id="investment-name"
                        className="mt-2 block h-12 w-full border-b border-border/40 bg-transparent px-0 py-3 text-[15px] text-foreground normal-case transition-[border-color] duration-250 outline-none placeholder:text-foreground/35 focus:border-border"
                        onChange={(event) => {
                          setName(event.target.value);
                          if (event.target.value.trim())
                            setErrors((current) => ({ ...current, name: "" }));
                        }}
                        placeholder={t("requestNamePlaceholder")}
                      />
                      {errors.name && (
                        <span
                          aria-live="polite"
                          className="mt-2 block text-[13px] text-danger"
                          id="investment-name-error"
                        >
                          {errors.name}
                        </span>
                      )}
                    </label>
                    <label
                      className="form-label min-w-0 whitespace-nowrap"
                      htmlFor="investment-contact"
                    >
                      {t("requestContact")}
                      <input
                        aria-describedby={
                          errors.contact
                            ? "investment-contact-error"
                            : undefined
                        }
                        aria-invalid={Boolean(errors.contact)}
                        id="investment-contact"
                        className="mt-2 block h-12 w-full border-b border-border/40 bg-transparent px-0 py-3 text-[15px] text-foreground normal-case transition-[border-color] duration-250 outline-none placeholder:text-foreground/35 focus:border-border"
                        onChange={(event) => {
                          setContact(event.target.value);
                          if (event.target.value.trim())
                            setErrors((current) => ({
                              ...current,
                              contact: "",
                            }));
                        }}
                        placeholder={t("requestContactPlaceholder")}
                      />
                      {errors.contact && (
                        <span
                          aria-live="polite"
                          className="mt-2 block text-[13px] text-danger"
                          id="investment-contact-error"
                        >
                          {errors.contact}
                        </span>
                      )}
                    </label>
                  </div>
                  <button
                    className="group mt-8 flex items-center gap-2.5 border border-border bg-foreground px-4 py-2.5 font-secondary text-[12px] leading-5 font-semibold tracking-[0.03em] text-background transition-[background-color,color,transform] duration-250 ease-out hover:bg-white hover:text-foreground focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 active:translate-y-px disabled:opacity-60"
                    data-cursor-magnetic
                    disabled={status === "sending"}
                    type="submit"
                  >
                    {status === "sending"
                      ? t("requestSending")
                      : t("leaveRequest")}{" "}
                    <ArrowUpRight className="size-4 transition-transform duration-250 ease-out group-hover:translate-x-1" />
                  </button>
                  {error && (
                    <p
                      aria-live="polite"
                      className="mt-4 text-[13px] text-danger"
                    >
                      {error}
                    </p>
                  )}
                </form>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
