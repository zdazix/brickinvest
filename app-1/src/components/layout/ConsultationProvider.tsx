import {
  useEffect,
  useState,
  type FormEvent,
  type PropsWithChildren,
} from "react";

import { trackEvent } from "@/lib/analytics";
import { ConsultationContext } from "@/components/layout/consultation-context";
import { useLocale } from "@/lib/i18n";

type ConsultationView = "form" | "success";

export const ConsultationProvider = ({ children }: PropsWithChildren) => {
  const { t } = useLocale();
  const [isConsultationOpen, setIsConsultationOpen] = useState(false);
  const [consultationView, setConsultationView] =
    useState<ConsultationView>("form");
  const [consultationForm, setConsultationForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [consultationError, setConsultationError] = useState("");
  const [isConsultationSending, setIsConsultationSending] = useState(false);

  const closeConsultation = () => {
    setIsConsultationOpen(false);
    setConsultationView("form");
    setConsultationForm({ name: "", email: "", phone: "", message: "" });
    setConsultationError("");
  };

  const openConsultation = () => {
    if (!isConsultationOpen) {
      trackEvent("consultation_open");
      trackEvent("consultation_form_open");
    }
    setIsConsultationOpen(true);
  };

  useEffect(() => {
    if (!isConsultationOpen) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") closeConsultation();
    };
    document.addEventListener("keydown", closeOnEscape);

    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", closeOnEscape);
    };
  }, [isConsultationOpen]);

  const submitConsultation = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const { name, email, phone } = consultationForm;
    if (!name.trim() || !email.trim() || !phone.trim()) {
      setConsultationError(t("validation"));
      return;
    }
    setIsConsultationSending(true);
    setConsultationError("");
    try {
      const response = await fetch(
        `${import.meta.env.VITE_INVESTOR_API_URL ?? ""}/api/investor-submissions`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            firstName: name,
            email,
            phone: phone.startsWith("+")
              ? phone
              : `+34${phone.replace(/\D/g, "")}`,
            objective: consultationForm.message.slice(0, 100),
            source: "Investeerimislahenduste vorm",
          }),
        },
      );
      if (!response.ok) throw new Error(t("requestCouldNotSend"));
      setConsultationView("success");
      trackEvent("generate_lead", { lead_source: "consultation_modal" });
    } catch (error) {
      setConsultationError(
        error instanceof Error ? error.message : t("requestCouldNotSend"),
      );
    } finally {
      setIsConsultationSending(false);
    }
  };

  return (
    <ConsultationContext.Provider
      value={{ closeConsultation, isConsultationOpen, openConsultation }}
    >
      {children}
      {isConsultationOpen && (
        <div
          aria-label={t("requestConsultation")}
          aria-modal="true"
          className="consultation-modal fixed inset-0 z-[60] flex items-start justify-center overflow-y-auto bg-foreground/25 px-5 py-4 sm:items-center sm:px-8 sm:py-8"
          onClick={closeConsultation}
          role="dialog"
        >
          <div
            className="consultation-modal__panel relative my-auto max-h-[calc(100dvh-2rem)] w-full max-w-md overflow-y-auto overscroll-contain border border-border/60 bg-surface px-7 py-9 text-center text-foreground sm:max-h-[calc(100dvh-4rem)] sm:px-12 sm:py-12"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              aria-label={t("closeConsultation")}
              className="absolute top-3 right-4 text-xl leading-none font-light text-foreground/55 transition-colors hover:text-primary"
              onClick={closeConsultation}
              type="button"
            >
              ×
            </button>
            <div className="consultation-modal__content">
              {consultationView === "form" && (
                <>
                  <form
                    className="grid gap-4 text-left"
                    onSubmit={(event) => void submitConsultation(event)}
                  >
                    {(["name", "email", "phone"] as const).map((field) => (
                      <label
                        className="grid gap-1 text-[10px] tracking-[0.14em] text-foreground/60 uppercase"
                        key={field}
                      >
                        {field === "name"
                          ? t("nameLabel")
                          : field === "email"
                            ? t("email")
                            : t("phoneShort")}
                        <input
                          className={`h-10 border-b border-border/40 bg-transparent px-0 text-[15px] tracking-normal transition-[border-color] duration-250 outline-none focus:border-border ${field === "phone" ? "text-[#000]" : "text-foreground"}`}
                          onChange={(event) =>
                            setConsultationForm((current) => ({
                              ...current,
                              [field]: event.target.value,
                            }))
                          }
                          required
                          type={
                            field === "email"
                              ? "email"
                              : field === "phone"
                                ? "tel"
                                : "text"
                          }
                          placeholder={
                            field === "name"
                              ? t("yourName")
                              : field === "email"
                                ? t("yourEmail")
                                : t("yourPhoneOptional")
                          }
                          value={consultationForm[field]}
                        />
                      </label>
                    ))}
                    {consultationError && (
                      <p aria-live="polite" className="text-[13px] text-danger">
                        {consultationError}
                      </p>
                    )}
                    <button
                      className="mt-2 border border-border bg-foreground px-5 py-3 text-[10px] font-semibold tracking-[0.16em] text-background transition-[background-color,color,transform] duration-250 ease-out hover:bg-primary hover:text-primary-foreground focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 active:translate-y-px disabled:opacity-60"
                      disabled={isConsultationSending}
                      type="submit"
                    >
                      {isConsultationSending
                        ? t("consultationSending")
                        : t("consultationRequest")}
                    </button>
                  </form>
                </>
              )}
              {consultationView === "success" && (
                <>
                  <p className="font-primary text-xl leading-tight text-foreground">
                    {t("consultationSuccess")}
                  </p>
                  <button
                    className="mt-8 text-[10px] tracking-[0.14em] text-foreground/55 uppercase transition-colors hover:text-primary"
                    onClick={() => setConsultationView("form")}
                    type="button"
                  >
                    {t("newRequest")}
                  </button>
                </>
              )}
            </div>
          </div>
        </div>
      )}
    </ConsultationContext.Provider>
  );
};
