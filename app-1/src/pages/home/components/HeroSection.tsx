import { useEffect, useState } from "react";
import { ArrowUpRight, ChevronLeft, X } from "lucide-react";

import { useLocale } from "@/lib/i18n";

const questions = [
  [
    "What are you looking for?",
    "Investment Property",
    "Development Opportunity",
    "Land",
    "Renovation Project",
    "New Development",
    "Not Sure Yet",
  ],
  [
    "What is your investment budget?",
    "€500K–€700K",
    "€700K–€1M",
    "€1M–€2M",
    "€2M–€5M",
    "€5M+",
  ],
  [
    "What is your primary investment objective?",
    "Capital Appreciation",
    "Rental Yield",
    "Development & Resale",
    "Personal Use + Investment",
    "Portfolio Diversification",
  ],
  [
    "Which locations are you considering?",
    "Marbella",
    "Golden Mile",
    "Estepona",
    "Benahavís",
    "Sotogrande",
    "Málaga",
    "Other",
    "Open to Recommendations",
  ],
  [
    "When are you planning to invest?",
    "Immediately",
    "Within 3 Months",
    "3–6 Months",
    "6–12 Months",
    "Exploring Opportunities",
  ],
] as const;
const questionKeys = [
  "opportunityType",
  "budget",
  "objective",
  "locations",
  "timing",
] as const;
type Answers = Record<number, string | string[]> & {
  objective?: string;
  budget?: string;
  opportunityType?: string;
  locations?: string[];
  timing?: string;
  firstName?: string;
  email?: string;
  phone?: string;
  consent?: boolean;
};

const InvestorQuiz = ({ onClose }: { readonly onClose: () => void }) => {
  const { t } = useLocale();
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<Answers>({});
  const [error, setError] = useState("");
  const [status, setStatus] = useState<"idle" | "sending" | "success">("idle");
  const isContact = step === questions.length;
  const choose = (answer: string) => {
    const key = questionKeys[step];
    const nextLocations = (current: Answers) =>
      (current.locations ?? []).includes(answer)
        ? (current.locations ?? []).filter((item) => item !== answer)
        : [...(current.locations ?? []), answer];
    setAnswers((current) => ({
      ...current,
      [step]:
        step === 3
          ? (current[step] as string[] | undefined)?.includes(answer)
            ? (current[step] as string[]).filter((item) => item !== answer)
            : [...((current[step] as string[] | undefined) ?? []), answer]
          : answer,
      [key]: step === 3 ? nextLocations(current) : answer,
    }));
    setError("");
  };
  const submit = async () => {
    if (
      !answers.firstName?.trim() ||
      !answers.email?.includes("@") ||
      !answers.phone?.trim()
    ) {
      setError(t("validation"));
      return;
    }
    setStatus("sending");
    try {
      const response = await fetch(
        `${import.meta.env.VITE_INVESTOR_API_URL ?? ""}/api/investor-submissions`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            objective: answers.objective,
            budget: answers.budget,
            opportunityType: answers.opportunityType,
            locations: answers.locations?.join(", "),
            timing: answers.timing,
            firstName: answers.firstName,
            email: answers.email,
            phone: answers.phone,
            ...(answers.consent ? { consent: true } : {}),
            source: "Investor qualification form",
          }),
        },
      );
      if (!response.ok) throw new Error("Request failed");
      setStatus("success");
    } catch {
      setError(t("failed"));
      setStatus("idle");
    }
  };
  return (
    <div
      className="fixed inset-0 z-50 grid place-items-center bg-foreground/80 p-0 sm:p-4"
      role="dialog"
      aria-modal="true"
      aria-label="Investor qualification"
    >
      <div className="relative flex max-h-dvh min-h-dvh w-full max-w-4xl flex-col overflow-auto border-primary/25 bg-secondary p-5 text-secondary-foreground sm:max-h-[90dvh] sm:min-h-0 sm:border sm:p-9">
        <button
          aria-label="Close qualification"
          className="absolute top-5 right-5 p-2"
          onClick={onClose}
        >
          <X />
        </button>
        {status === "success" ? (
          <div className="flex min-h-[420px] flex-col items-center justify-center text-center">
            <p className="text-xs tracking-[0.2em] text-primary uppercase">
              THANK YOU
            </p>
            <p className="mt-6 max-w-md font-primary text-3xl leading-tight sm:text-4xl">
              Your investment profile has been received. Our team will review
              your requirements and contact you shortly.
            </p>
            <button
              className="mt-8 text-xs tracking-[0.15em] text-foreground/60 uppercase"
              onClick={onClose}
              type="button"
            >
              CLOSE
            </button>
          </div>
        ) : (
          <>
            <div className="mb-5 flex items-center justify-between">
              <p className="text-xs tracking-[0.2em] text-primary uppercase">
                {t("qualification")}
              </p>
              <p className="font-mono text-xs text-[#777168]">
                {isContact ? "CONTACT" : `0${step + 1} — 05`}
              </p>
            </div>
            <div className="mb-6 h-px w-full bg-primary/25">
              <div
                className="h-px bg-primary transition-[width] duration-300"
                style={{
                  width: `${isContact ? 100 : ((step + 1) / 5) * 100}%`,
                }}
              />
            </div>
            {!isContact ? (
              <>
                <h2 className="max-w-2xl font-primary text-4xl leading-[1.02] sm:text-5xl">
                  {questions[step][0]}
                </h2>
                <div className="mt-6 grid gap-2 sm:grid-cols-2">
                  {questions[step].slice(1).map((answer) => (
                    <button
                      className={`group flex min-h-14 items-center justify-between border px-4 text-left text-sm transition-[background-color,border-color] duration-250 ${((answers[step] as string[] | string | undefined) ?? []).toString().includes(answer) ? "border-primary bg-primary/15" : "border-border hover:border-primary hover:bg-surface/50"}`}
                      key={answer}
                      onClick={() => choose(answer)}
                    >
                      {answer}
                      <ArrowUpRight className="size-4 opacity-0 transition group-hover:opacity-100" />
                    </button>
                  ))}
                </div>
                <div className="mt-6 flex items-center justify-between gap-4">
                  <button
                    className="flex items-center gap-2 text-xs tracking-[0.12em] text-foreground/60 uppercase transition-colors hover:text-primary disabled:invisible"
                    disabled={step === 0}
                    onClick={() => setStep((current) => current - 1)}
                    type="button"
                  >
                    <ChevronLeft className="size-4" /> BACK
                  </button>
                  <button
                    className="border border-foreground bg-foreground px-6 py-3 text-xs font-semibold tracking-[0.14em] text-background transition-colors hover:bg-primary hover:text-primary-foreground disabled:opacity-40"
                    disabled={
                      step === 3
                        ? !(answers[step] as string[] | undefined)?.length
                        : !answers[step]
                    }
                    onClick={() => setStep((current) => current + 1)}
                    type="button"
                  >
                    CONTINUE
                  </button>
                </div>
              </>
            ) : (
              <>
                <h2 className="max-w-2xl font-primary text-3xl leading-[1.02] sm:text-5xl">
                  RECEIVE YOUR PRIVATE INVESTMENT SELECTION
                </h2>
                <p className="mt-4 max-w-2xl text-base leading-6 text-foreground/70">
                  Leave your details and our team will review your requirements
                  and contact you with relevant opportunities.
                </p>
                <div className="mt-6 grid gap-4 sm:grid-cols-2">
                  <label className="text-xs tracking-[0.12em] uppercase">
                    {t("firstName")}
                    <input
                      className="mt-2 w-full border-b border-border bg-transparent px-0 py-3 outline-none"
                      onChange={(e) =>
                        setAnswers({ ...answers, firstName: e.target.value })
                      }
                    />
                  </label>
                  <label className="text-xs tracking-[0.12em] uppercase">
                    {t("email")}
                    <input
                      className="mt-2 w-full border-b border-border bg-transparent px-0 py-3 outline-none"
                      type="email"
                      onChange={(e) =>
                        setAnswers({ ...answers, email: e.target.value })
                      }
                    />
                  </label>
                  <label className="text-xs tracking-[0.12em] uppercase sm:col-span-2">
                    {t("phone")}
                    <input
                      className="mt-2 w-full border-b border-border bg-transparent px-0 py-3 outline-none"
                      placeholder="+34 000 000 000"
                      onChange={(e) =>
                        setAnswers({ ...answers, phone: e.target.value })
                      }
                    />
                  </label>
                </div>
                <label className="mt-5 flex gap-3 text-sm leading-5 text-foreground/70">
                  <input
                    checked={Boolean(answers.consent)}
                    type="checkbox"
                    onChange={(e) =>
                      setAnswers({ ...answers, consent: e.target.checked })
                    }
                  />{" "}
                  I agree to receive relevant BRICKINVEST investment
                  opportunities and updates.
                </label>
                <button
                  className="mt-5 w-full bg-foreground px-6 py-4 text-xs tracking-[0.14em] text-background transition-[background-color,color,transform] duration-250 ease-out hover:bg-primary hover:text-primary-foreground focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 active:translate-y-px disabled:opacity-60"
                  disabled={status === "sending"}
                  onClick={(event) => {
                    event.preventDefault();
                    void submit();
                  }}
                >
                  {status === "sending" ? "SENDING…" : "SUBMIT REQUEST"}
                </button>
                <button
                  className="mt-4 self-start text-xs tracking-[0.12em] text-muted-foreground uppercase transition-colors hover:text-primary"
                  onClick={() => setStep((current) => current - 1)}
                  type="button"
                >
                  <ChevronLeft className="mr-1 inline size-4" /> BACK
                </button>
              </>
            )}
            {error && (
              <p aria-live="polite" className="mt-5 text-sm text-[#b24f45]">
                {error}
              </p>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export const HeroSection = () => {
  const { t } = useLocale();
  const [quizOpen, setQuizOpen] = useState(false);
  useEffect(() => {
    const open = () => setQuizOpen(true);
    window.addEventListener("open-investor-quiz", open);
    return () => {
      window.removeEventListener("open-investor-quiz", open);
    };
  }, []);
  return (
    <main id="main-content">
      <section
        className="grain-surface relative flex items-start overflow-hidden bg-background"
        id="opportunities"
      >
        <div className="mx-auto flex w-full max-w-[1600px] flex-col items-center px-6 pt-20 pb-10 text-center text-foreground sm:px-12 sm:pt-24 sm:pb-12 lg:px-20">
          <h1 className="mt-4 max-w-4xl font-primary text-[clamp(3.25rem,7vw,6.5rem)] leading-[0.98] tracking-[-0.045em] sm:mt-5">
            {t("trusted")}
          </h1>
          <p className="mt-7 max-w-2xl text-sm tracking-[0.16em] text-accent uppercase sm:text-lg">
            {t("highRoi")}
          </p>
          <button
            className="group mt-8 flex w-fit items-center gap-4 border border-foreground bg-foreground px-7 py-4 text-xs font-semibold tracking-[0.14em] text-background transition-[background-color,color,transform] duration-250 ease-out hover:bg-primary hover:text-primary-foreground focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 active:translate-y-px sm:mt-10"
            data-cursor-magnetic
            onClick={() => setQuizOpen(true)}
          >
            <span>REQUEST EXCLUSIVE ADVICE</span>
            <ArrowUpRight className="size-4 transition-transform duration-250 ease-out group-hover:translate-x-1" />
          </button>
        </div>
      </section>
      {quizOpen && <InvestorQuiz onClose={() => setQuizOpen(false)} />}
    </main>
  );
};
