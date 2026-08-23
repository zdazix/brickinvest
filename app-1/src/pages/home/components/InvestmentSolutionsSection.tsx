import { useState } from "react";

import { ArrowUpRight } from "lucide-react";

import { useLocale } from "@/lib/i18n";

export const InvestmentSolutionsSection = () => {
  const { t } = useLocale();
  const [name, setName] = useState("");
  const [contact, setContact] = useState("");
  const [status, setStatus] = useState<"idle" | "sending" | "success">("idle");
  const [error, setError] = useState("");

  const submitRequest = async () => {
    if (!name.trim() || !contact.trim()) {
      setError(t("requestValidation"));
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
          }),
        },
      );
      if (!response.ok) throw new Error("Request failed");
      setStatus("success");
    } catch {
      setStatus("idle");
      setError(t("requestFailed"));
    }
  };

  return (
    <section
      aria-labelledby="investment-solutions-heading"
      className="section-shell relative overflow-hidden bg-surface"
      id="investment-solutions"
    >
      <div className="section-grid relative">
        <div>
          <p className="font-mono text-xs tracking-[0.28em] text-primary uppercase">
            06
          </p>
          <h2 className="section-title" id="investment-solutions-heading">
            {t("investmentHeading")}
          </h2>
        </div>
        <div className="max-w-3xl min-w-0 lg:pt-8">
          <p className="editorial-intro max-w-[600px]">{t("investmentBody")}</p>
          <div className="mt-8 border-t border-primary/35 pt-6 sm:mt-10">
            {status === "success" ? (
              <p className="font-primary text-3xl text-foreground sm:text-4xl">
                {t("requestSuccess")}
              </p>
            ) : (
              <>
                <p className="font-mono text-xs tracking-[0.2em] text-primary uppercase">
                  {t("requestPrompt")}
                </p>
                <div className="mt-7 grid items-start gap-6 sm:grid-cols-2">
                  <label className="min-w-0 text-xs tracking-[0.14em] text-foreground/70 uppercase">
                    {t("requestName")}
                    <input
                      className="mt-2 block h-12 w-full border-b border-primary/40 bg-transparent px-0 py-3 text-base text-foreground normal-case outline-none placeholder:text-foreground/35"
                      onChange={(event) => setName(event.target.value)}
                      placeholder={t("requestNamePlaceholder")}
                    />
                  </label>
                  <label className="min-w-0 text-xs tracking-[0.1em] whitespace-nowrap text-foreground/70 uppercase sm:text-[11px] lg:text-xs">
                    {t("requestContact")}
                    <input
                      className="mt-2 block h-12 w-full border-b border-primary/40 bg-transparent px-0 py-3 text-base text-foreground normal-case outline-none placeholder:text-foreground/35"
                      onChange={(event) => setContact(event.target.value)}
                      placeholder={t("requestContactPlaceholder")}
                    />
                  </label>
                </div>
                <button
                  className="mt-8 flex items-center gap-4 border border-primary bg-primary px-6 py-4 text-xs font-semibold tracking-[0.14em] text-primary-foreground transition hover:bg-transparent hover:text-primary disabled:opacity-60"
                  disabled={status === "sending"}
                  onClick={() => void submitRequest()}
                  type="button"
                >
                  {status === "sending"
                    ? t("requestSending")
                    : t("leaveRequest")}{" "}
                  <ArrowUpRight className="size-4" />
                </button>
                {error && (
                  <p aria-live="polite" className="mt-4 text-sm text-danger">
                    {error}
                  </p>
                )}
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
