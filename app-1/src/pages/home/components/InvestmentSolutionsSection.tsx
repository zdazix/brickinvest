import { useState, type FormEvent } from "react";

import { ArrowUpRight } from "lucide-react";

import { useLocale } from "@/lib/i18n";
import { trackEvent } from "@/lib/analytics";

export const InvestmentSolutionsSection = () => {
  const { t } = useLocale();
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
            source: "Investment Solutions form",
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
      <div className="section-grid relative">
        <div>
          <p className="section-number">06</p>
          <h2 className="section-title" id="investment-solutions-heading">
            {t("investmentHeading")}
          </h2>
        </div>
        <div className="min-w-0">
          <p className="editorial-intro max-w-[720px]">{t("investmentBody")}</p>
          <div className="mt-10 border-t border-primary/30 pt-6">
            {status === "success" ? (
              <p className="font-primary text-3xl text-foreground sm:text-4xl">
                {t("requestSuccess")}
              </p>
            ) : (
              <>
                <p className="section-label tracking-[0.2em]">
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
                        className="mt-2 block h-12 w-full border-b border-primary/40 bg-transparent px-0 py-3 text-base text-foreground normal-case transition-[border-color] duration-250 outline-none placeholder:text-foreground/35 focus:border-primary"
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
                          className="mt-2 block text-sm text-danger"
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
                        className="mt-2 block h-12 w-full border-b border-primary/40 bg-transparent px-0 py-3 text-base text-foreground normal-case transition-[border-color] duration-250 outline-none placeholder:text-foreground/35 focus:border-primary"
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
                          className="mt-2 block text-sm text-danger"
                          id="investment-contact-error"
                        >
                          {errors.contact}
                        </span>
                      )}
                    </label>
                  </div>
                  <button
                    className="group mt-8 flex items-center gap-4 border border-primary bg-foreground px-6 py-4 text-xs font-semibold tracking-[0.14em] text-background transition-[background-color,color,transform] duration-250 ease-out hover:bg-primary hover:text-primary-foreground focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 active:translate-y-px disabled:opacity-60"
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
                    <p aria-live="polite" className="mt-4 text-sm text-danger">
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
