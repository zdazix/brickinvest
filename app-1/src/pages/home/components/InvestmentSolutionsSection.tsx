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
      className="relative overflow-hidden border-t border-primary/15 bg-[#1b211d] px-6 py-24 sm:px-12 sm:py-32 lg:px-20 lg:py-40"
      id="investment-solutions"
    >
      <div className="relative mx-auto grid max-w-[1600px] gap-14 lg:grid-cols-[0.7fr_1.3fr] lg:gap-24">
        <div>
          <p className="font-mono text-xs tracking-[0.28em] text-primary uppercase">
            06
          </p>
          <h2
            className="mt-5 max-w-md font-primary text-6xl leading-[0.9] tracking-[-0.04em] text-primary-foreground sm:text-8xl"
            id="investment-solutions-heading"
          >
            {t("investmentHeading")}
          </h2>
        </div>
        <div className="max-w-3xl min-w-0 lg:pt-10">
          <p className="max-w-full font-primary text-xl leading-[1.15] tracking-[-0.02em] text-primary-foreground sm:text-3xl lg:text-4xl">
            {t("investmentBody")}
          </p>
          <div className="mt-12 border-t border-primary/35 pt-8 sm:mt-16">
            {status === "success" ? (
              <p className="font-primary text-3xl text-primary-foreground sm:text-4xl">
                {t("requestSuccess")}
              </p>
            ) : (
              <>
                <p className="font-mono text-xs tracking-[0.2em] text-primary uppercase">
                  {t("requestPrompt")}
                </p>
                <div className="mt-7 grid gap-6 sm:grid-cols-2">
                  <label className="text-xs tracking-[0.14em] text-primary-foreground/70 uppercase">
                    {t("requestName")}
                    <input
                      className="mt-2 w-full border-b border-primary/40 bg-transparent px-0 py-3 text-base text-primary-foreground normal-case outline-none placeholder:text-primary-foreground/35"
                      onChange={(event) => setName(event.target.value)}
                      placeholder={t("requestNamePlaceholder")}
                    />
                  </label>
                  <label className="text-xs tracking-[0.14em] text-primary-foreground/70 uppercase">
                    {t("requestContact")}
                    <input
                      className="mt-2 w-full border-b border-primary/40 bg-transparent px-0 py-3 text-base text-primary-foreground normal-case outline-none placeholder:text-primary-foreground/35"
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
