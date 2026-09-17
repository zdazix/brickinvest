import { useEffect, useRef, useState } from "react";
import { ArrowUpRight, ChevronLeft, X } from "lucide-react";

import { useLocale } from "@/lib/i18n";
import { trackEvent } from "@/lib/analytics";
import { NumericText } from "@/components/ui/NumericText";

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

const heroVideos = [
  "/videos/magnific_aerial-cinematic-drone-sh_nTOrDQ7YQD.mp4",
  "/videos/magnific_ultrapremium-cinematic-dr_BmGykOSoQR.mp4",
  "/videos/document_5780418083629833885.mp4",
  "/videos/magnific_cinematic-homepage-hero-v_LUCdBU3swO.mp4",
  "/videos/magnific_premium-travel-commercial_rlvDQLExtc.mp4",
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
      trackEvent("quiz_complete");
      trackEvent("generate_lead", { lead_source: "hero_quiz" });
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
      <div className="relative flex max-h-dvh min-h-dvh w-full max-w-4xl flex-col overflow-auto border-border/25 bg-secondary p-5 text-secondary-foreground sm:max-h-[90dvh] sm:min-h-0 sm:border sm:p-9">
        <button
          aria-label="Close qualification"
          className="absolute top-5 right-5 p-2"
          onClick={onClose}
        >
          <X />
        </button>
        {status === "success" ? (
          <div className="flex min-h-[420px] flex-col items-center justify-center text-center">
            <p className="text-[11px] tracking-[0.16em] text-primary uppercase">
              THANK YOU
            </p>
            <p className="mt-6 max-w-md font-primary text-2xl leading-tight sm:text-3xl">
              Your investment profile has been received. Our team will review
              your requirements and contact you shortly.
            </p>
            <button
              className="mt-8 text-[11px] tracking-[0.12em] text-foreground/60 uppercase"
              onClick={onClose}
              type="button"
            >
              CLOSE
            </button>
          </div>
        ) : (
          <>
            <div className="mb-5 flex items-center justify-between">
              <p className="text-[11px] tracking-[0.16em] text-primary uppercase">
                {t("qualification")}
              </p>
              <p className="font-mono text-[11px] text-[#777168]">
                <NumericText>
                  {isContact ? "CONTACT" : `0${step + 1} — 05`}
                </NumericText>
              </p>
            </div>
            <div className="mb-6 h-px w-full bg-border/25">
              <div
                className="h-px bg-border transition-[width] duration-300"
                style={{
                  width: `${isContact ? 100 : ((step + 1) / 5) * 100}%`,
                }}
              />
            </div>
            {!isContact ? (
              <>
                <h2 className="max-w-2xl font-primary text-3xl leading-[1.04] sm:text-4xl">
                  {questions[step][0]}
                </h2>
                <div className="mt-6 grid gap-2 sm:grid-cols-2">
                  {questions[step].slice(1).map((answer) => (
                    <button
                      className={`group flex min-h-14 items-center justify-between border px-4 text-left text-[13px] transition-[background-color,border-color] duration-250 ${((answers[step] as string[] | string | undefined) ?? []).toString().includes(answer) ? "border-border bg-primary/15" : "border-border hover:border-border hover:bg-surface/50"}`}
                      key={answer}
                      onClick={() => choose(answer)}
                    >
                      <NumericText>{answer}</NumericText>
                      <ArrowUpRight className="size-4 opacity-0 transition group-hover:opacity-100" />
                    </button>
                  ))}
                </div>
                <div className="mt-6 flex items-center justify-between gap-4">
                  <button
                    className="flex items-center gap-2 text-[11px] tracking-[0.1em] text-foreground/60 uppercase transition-colors hover:text-primary disabled:invisible"
                    disabled={step === 0}
                    onClick={() => setStep((current) => current - 1)}
                    type="button"
                  >
                    <ChevronLeft className="size-4" /> BACK
                  </button>
                  <button
                    className="border border-border bg-foreground px-6 py-3 text-[11px] font-semibold tracking-[0.12em] text-background transition-colors hover:bg-primary hover:text-primary-foreground disabled:opacity-40"
                    disabled={
                      step === 3
                        ? !(answers[step] as string[] | undefined)?.length
                        : !answers[step]
                    }
                    onClick={() => {
                      trackEvent("quiz_step_complete", { step: step + 1 });
                      setStep((current) => current + 1);
                    }}
                    type="button"
                  >
                    CONTINUE
                  </button>
                </div>
              </>
            ) : (
              <>
                <h2 className="max-w-2xl font-primary text-2xl leading-[1.04] sm:text-4xl">
                  RECEIVE YOUR PRIVATE INVESTMENT SELECTION
                </h2>
                <p className="mt-4 max-w-2xl text-[15px] leading-[1.45] text-foreground/70">
                  Leave your details and our team will review your requirements
                  and contact you with relevant opportunities.
                </p>
                <div className="mt-6 grid gap-4 sm:grid-cols-2">
                  <label className="text-[11px] tracking-[0.1em] uppercase">
                    {t("firstName")}
                    <input
                      className="mt-2 w-full border-b border-border bg-transparent px-0 py-3 outline-none"
                      onChange={(e) =>
                        setAnswers({ ...answers, firstName: e.target.value })
                      }
                    />
                  </label>
                  <label className="text-[11px] tracking-[0.1em] uppercase">
                    {t("email")}
                    <input
                      className="mt-2 w-full border-b border-border bg-transparent px-0 py-3 outline-none"
                      type="email"
                      onChange={(e) =>
                        setAnswers({ ...answers, email: e.target.value })
                      }
                    />
                  </label>
                  <label className="text-[11px] tracking-[0.1em] uppercase sm:col-span-2">
                    {t("phone")}
                    <input
                      className="mt-2 w-full border-b border-border bg-transparent px-0 py-3 text-[15px] text-[#000] outline-none placeholder:text-[#000]"
                      placeholder="+34 000 000 000"
                      onChange={(e) =>
                        setAnswers({ ...answers, phone: e.target.value })
                      }
                    />
                  </label>
                </div>
                <label className="mt-5 flex gap-3 text-[13px] leading-[1.4] text-foreground/70">
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
                  className="mt-5 w-full bg-foreground px-6 py-4 text-[11px] tracking-[0.12em] text-background transition-[background-color,color,transform] duration-250 ease-out hover:bg-primary hover:text-primary-foreground focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 active:translate-y-px disabled:opacity-60"
                  disabled={status === "sending"}
                  onClick={(event) => {
                    event.preventDefault();
                    void submit();
                  }}
                >
                  {status === "sending" ? "SENDING…" : "SUBMIT REQUEST"}
                </button>
                <button
                  className="mt-4 self-start text-[11px] tracking-[0.1em] text-muted-foreground uppercase transition-colors hover:text-primary"
                  onClick={() => setStep((current) => current - 1)}
                  type="button"
                >
                  <ChevronLeft className="mr-1 inline size-4" /> BACK
                </button>
              </>
            )}
            {error && (
              <p aria-live="polite" className="mt-5 text-[13px] text-[#b24f45]">
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
  const [activeVideoIndex, setActiveVideoIndex] = useState(0);
  const [activeVideoSlot, setActiveVideoSlot] = useState<0 | 1>(0);
  const videoRefs = useRef<[HTMLVideoElement | null, HTMLVideoElement | null]>([
    null,
    null,
  ]);
  const openQuiz = () => {
    trackEvent("quiz_start");
    setQuizOpen(true);
  };
  useEffect(() => {
    const open = () => openQuiz();
    window.addEventListener("open-investor-quiz", open);
    return () => {
      window.removeEventListener("open-investor-quiz", open);
    };
  }, []);

  useEffect(() => {
    const video = videoRefs.current[activeVideoSlot];
    if (!video) return;

    const startPlayback = () => {
      void video.play().catch(() => {
        // Browsers may block autoplay until a user gesture; the video remains
        // ready to play when the browser permits it.
      });
    };

    if (video.readyState >= HTMLMediaElement.HAVE_CURRENT_DATA) {
      startPlayback();
      return;
    }
    video.addEventListener("canplay", startPlayback, { once: true });
    return () => video.removeEventListener("canplay", startPlayback);
  }, [activeVideoIndex, activeVideoSlot]);

  const handleVideoEnded = (slot: 0 | 1) => {
    if (slot !== activeVideoSlot) return;

    const nextSlot = (slot === 0 ? 1 : 0) as 0 | 1;
    const nextIndex = (activeVideoIndex + 1) % heroVideos.length;
    const nextVideo = videoRefs.current[nextSlot];

    // Switch visibility immediately at the boundary. Waiting for `canplay`
    // here would leave the ended video visible as a frozen stop-frame.
    setActiveVideoIndex(nextIndex);
    setActiveVideoSlot(nextSlot);
    void nextVideo?.play().catch(() => {
      // The muted video can still start after a browser permits autoplay.
    });
  };

  const nextVideoIndex = (activeVideoIndex + 1) % heroVideos.length;

  return (
    <>
      <section
        className="grain-surface relative flex min-h-[min(72dvh,780px)] items-start overflow-hidden bg-[#75847d]"
        id="opportunities"
      >
        {[0, 1].map((slot) => {
          const videoSlot = slot as 0 | 1;
          const isActive = videoSlot === activeVideoSlot;
          return (
            <video
              aria-hidden="true"
              autoPlay={isActive}
              className={`absolute inset-0 size-full object-cover ${isActive ? "opacity-100" : "pointer-events-none opacity-0"}`}
              key={videoSlot}
              muted
              playsInline
              preload="auto"
              ref={(video) => {
                videoRefs.current[videoSlot] = video;
              }}
              src={heroVideos[isActive ? activeVideoIndex : nextVideoIndex]}
              onEnded={() => handleVideoEnded(videoSlot)}
            />
          );
        })}
        <div aria-hidden="true" className="absolute inset-0 bg-[#14201c]/55" />
        <div className="relative z-10 mx-auto flex w-full max-w-[1600px] flex-col items-center px-6 pt-20 pb-10 text-center text-white sm:px-12 sm:pt-24 sm:pb-12 lg:px-20">
          <h1 className="mt-4 max-w-4xl font-primary text-[clamp(2.75rem,6vw,5.5rem)] leading-[1] tracking-[-0.04em] sm:mt-5">
            {t("trusted")}
          </h1>
          <p className="mt-7 max-w-2xl text-[13px] tracking-[0.12em] text-white/85 uppercase sm:text-base">
            {t("highRoi")}
          </p>
          <button
            className="group mt-8 flex w-fit items-center gap-3 border border-border bg-white px-5 py-3 font-secondary text-[14px] leading-6 font-semibold tracking-[0.03em] text-foreground transition-[background-color,color,transform] duration-250 ease-out hover:bg-foreground hover:text-background focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 active:translate-y-px sm:mt-10"
            data-cursor-magnetic
            onClick={() => {
              trackEvent("hero_advice_click");
              openQuiz();
            }}
          >
            <span>REQUEST EXCLUSIVE OFFER</span>
            <ArrowUpRight className="size-4 transition-transform duration-250 ease-out group-hover:translate-x-1" />
          </button>
        </div>
      </section>
      {quizOpen && <InvestorQuiz onClose={() => setQuizOpen(false)} />}
    </>
  );
};
