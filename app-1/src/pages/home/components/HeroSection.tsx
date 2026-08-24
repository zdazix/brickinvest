import { useEffect, useState } from "react";
import { ArrowUpRight, Check, ChevronLeft, X } from "lucide-react";

import { useLocale } from "@/lib/i18n";

const questions = [
  [
    "What is your primary investment objective?",
    "Capital appreciation",
    "High rental yield",
    "Buy, renovate & resell",
    "Development",
    "Holiday home + investment",
    "Portfolio diversification",
  ],
  [
    "What investment budget are you considering?",
    "€500K–€700K",
    "€700K–€1M",
    "€1M–€2M",
    "€2M–€5M",
    "€5M+",
    "Flexible",
  ],
  [
    "What type of opportunity are you interested in?",
    "Apartment or Penthouse",
    "Villa",
    "Land + Development",
    "Renovation",
    "New Development",
    "Off-Market",
    "Open to recommendations",
  ],
  [
    "Which locations are you interested in?",
    "Marbella",
    "Golden Mile",
    "Nueva Andalucía",
    "Benahavís",
    "Estepona",
    "Sotogrande",
    "Other",
    "Open to recommendations",
  ],
  [
    "When are you planning to invest?",
    "Immediately",
    "1–3 months",
    "3–6 months",
    "6–12 months",
    "12+ months",
    "Exploring opportunities",
  ],
] as const;
type Answers = Record<number, string> & {
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
    setAnswers((current) => ({ ...current, [step]: answer }));
    setError("");
    setTimeout(() => setStep((current) => current + 1), 180);
  };
  const submit = async () => {
    if (
      !answers.firstName?.trim() ||
      !answers.email?.includes("@") ||
      !answers.phone?.trim() ||
      !answers.consent
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
            objective: answers[0],
            budget: answers[1],
            opportunityType: answers[2],
            locations: answers[3],
            timing: answers[4],
            firstName: answers.firstName,
            email: answers.email,
            phone: answers.phone,
            consent: answers.consent,
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
      className="fixed inset-0 z-50 grid place-items-center bg-[#10100f]/80 p-4 backdrop-blur-xl"
      role="dialog"
      aria-modal="true"
      aria-label="Investor qualification"
    >
      <div className="relative max-h-[min(760px,calc(100dvh-2rem))] w-full max-w-3xl overflow-auto border border-primary/25 bg-[#f0ece3] p-6 text-[#211f1b] shadow-2xl sm:p-12">
        <button
          aria-label="Close qualification"
          className="absolute top-5 right-5 p-2"
          onClick={onClose}
        >
          <X />
        </button>
        {status === "success" ? (
          <div className="flex min-h-[420px] flex-col items-center justify-center text-center">
            <div className="mb-7 grid size-16 place-items-center rounded-full border border-[#9b8058]">
              <Check />
            </div>
            <p className="text-xs tracking-[0.2em] text-[#8b704e] uppercase">
              {t("requestReceived")}
            </p>
            <h2 className="mt-5 max-w-md font-primary text-5xl leading-none">
              {t("preparing")}
            </h2>
            <p className="mt-6 max-w-md text-[#5c574f]">{t("advisor")}</p>
            <button
              className="mt-8 border-b border-[#211f1b] pb-2 text-xs tracking-[0.15em] uppercase"
              onClick={onClose}
            >
              {t("return")}
            </button>
          </div>
        ) : (
          <>
            <div className="mb-10 flex items-center justify-between">
              <p className="text-xs tracking-[0.2em] text-[#8b704e] uppercase">
                {t("qualification")}
              </p>
              <p className="font-mono text-xs text-[#777168]">
                {isContact ? t("details") : `0${step + 1} / 05`}
              </p>
            </div>
            {!isContact ? (
              <>
                <h2 className="max-w-2xl font-primary text-4xl leading-[1.02] sm:text-6xl">
                  {questions[step][0]}
                </h2>
                <div className="mt-10 grid gap-2 sm:grid-cols-2">
                  {questions[step].slice(1).map((answer) => (
                    <button
                      className="group flex min-h-16 items-center justify-between border border-[#c6bfb3] px-5 text-left text-sm transition hover:border-[#8b704e] hover:bg-[#e7e0d4]"
                      key={answer}
                      onClick={() => choose(answer)}
                    >
                      {answer}
                      <ArrowUpRight className="size-4 opacity-0 transition group-hover:opacity-100" />
                    </button>
                  ))}
                </div>
              </>
            ) : (
              <>
                <h2 className="max-w-2xl font-primary text-4xl leading-[1.02] sm:text-6xl">
                  Tell us where to send your opportunities.
                </h2>
                <div className="mt-10 grid gap-5 sm:grid-cols-2">
                  <label className="text-xs tracking-[0.12em] uppercase">
                    {t("firstName")}
                    <input
                      className="mt-2 w-full border-b border-[#aaa195] bg-transparent px-0 py-3 outline-none"
                      onChange={(e) =>
                        setAnswers({ ...answers, firstName: e.target.value })
                      }
                    />
                  </label>
                  <label className="text-xs tracking-[0.12em] uppercase">
                    {t("email")}
                    <input
                      className="mt-2 w-full border-b border-[#aaa195] bg-transparent px-0 py-3 outline-none"
                      type="email"
                      onChange={(e) =>
                        setAnswers({ ...answers, email: e.target.value })
                      }
                    />
                  </label>
                  <label className="text-xs tracking-[0.12em] uppercase sm:col-span-2">
                    {t("phone")}
                    <input
                      className="mt-2 w-full border-b border-[#aaa195] bg-transparent px-0 py-3 outline-none"
                      placeholder="+34 000 000 000"
                      onChange={(e) =>
                        setAnswers({ ...answers, phone: e.target.value })
                      }
                    />
                  </label>
                </div>
                <label className="mt-8 flex gap-3 text-sm text-[#5c574f]">
                  <input
                    checked={Boolean(answers.consent)}
                    type="checkbox"
                    onChange={(e) =>
                      setAnswers({ ...answers, consent: e.target.checked })
                    }
                  />{" "}
                  {t("privacy")}
                </label>
                <button
                  className="mt-8 w-full bg-[#211f1b] px-6 py-5 text-xs tracking-[0.14em] text-[#f0ece3] transition hover:bg-[#8b704e] disabled:opacity-60"
                  disabled={status === "sending"}
                  onClick={() => void submit()}
                >
                  {status === "sending" ? t("send") : t("submit")}
                </button>
              </>
            )}
            {error && (
              <p aria-live="polite" className="mt-5 text-sm text-[#b24f45]">
                {error}
              </p>
            )}
            {step > 0 && !isContact && (
              <button
                className="mt-8 flex items-center gap-2 text-xs tracking-[0.12em] text-[#777168] uppercase"
                onClick={() => setStep((current) => current - 1)}
              >
                <ChevronLeft className="size-4" /> Previous
              </button>
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
        className="relative flex items-start overflow-hidden bg-white"
        id="opportunities"
      >
        <div className="mx-auto flex w-full max-w-[1600px] flex-col items-center px-6 pt-20 pb-10 text-center text-foreground sm:px-12 sm:pt-24 sm:pb-12 lg:px-20">
          <h1 className="mt-4 max-w-4xl font-primary text-5xl leading-[0.98] tracking-[-0.035em] sm:mt-5 sm:text-7xl lg:text-8xl">
            {t("trusted")}
          </h1>
          <p className="mt-7 max-w-2xl text-sm tracking-[0.16em] text-accent uppercase sm:text-lg">
            {t("highRoi")}
          </p>
          <button
            className="group mt-8 flex w-fit items-center gap-4 border border-primary bg-primary px-7 py-4 text-xs font-semibold tracking-[0.14em] text-primary-foreground transition-colors duration-300 hover:bg-accent hover:text-accent-foreground sm:mt-10"
            onClick={() => setQuizOpen(true)}
          >
            <span>
              REQUEST EXCLUSIVE NEWS
              <br />
              WITH HIGH ROI INVESTMENT PROJECTS
            </span>
            <ArrowUpRight className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
          </button>
        </div>
      </section>
      {quizOpen && <InvestorQuiz onClose={() => setQuizOpen(false)} />}
    </main>
  );
};
