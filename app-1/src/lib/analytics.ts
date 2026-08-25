export type AnalyticsEventName =
  | "hero_advice_click"
  | "quiz_start"
  | "quiz_step_complete"
  | "quiz_complete"
  | "consultation_open"
  | "phone_click"
  | "consultation_form_open"
  | "generate_lead"
  | "project_category_view"
  | "insight_open"
  | "language_change"
  | "navigation_click";

type AnalyticsParams = Record<string, string | number>;
type Gtag = (...args: unknown[]) => void;

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: Gtag;
    grantBrickinvestAnalyticsConsent?: () => void;
  }
}

const gtmId = import.meta.env.VITE_GTM_ID?.trim();
const ga4Id = import.meta.env.VITE_GA4_MEASUREMENT_ID?.trim();
let consentGranted = false;
let initialized = false;

const pushToDataLayer = (event: string, params: AnalyticsParams = {}) => {
  window.dataLayer ??= [];
  window.dataLayer.push({ event, ...params });
};

const initializeAnalytics = () => {
  if (initialized || (!gtmId && !ga4Id)) return;
  initialized = true;

  if (gtmId) {
    const script = document.createElement("script");
    script.async = true;
    script.src = `https://www.googletagmanager.com/gtm.js?id=${encodeURIComponent(gtmId)}`;
    document.head.appendChild(script);
  }

  if (ga4Id) {
    const script = document.createElement("script");
    script.async = true;
    script.src = `https://www.googletagmanager.com/gtag/js?id=${encodeURIComponent(ga4Id)}`;
    document.head.appendChild(script);
    window.gtag =
      window.gtag ??
      ((...args: unknown[]) =>
        pushToDataLayer("gtag", { args: JSON.stringify(args) }));
    window.gtag("js", new Date());
    window.gtag("config", ga4Id, { send_page_view: true });
  }
};

export const grantAnalyticsConsent = () => {
  consentGranted = true;
  initializeAnalytics();
};

export const trackEvent = (
  event: AnalyticsEventName,
  params: AnalyticsParams = {},
) => {
  if (!consentGranted) return;
  try {
    pushToDataLayer(event, params);
    if (ga4Id && window.gtag) window.gtag("event", event, params);
  } catch {
    // Measurement must never interfere with the visitor's action.
  }
};

if (typeof window !== "undefined") {
  window.addEventListener(
    "brickinvest:analytics-consent",
    grantAnalyticsConsent,
  );
  window.grantBrickinvestAnalyticsConsent = grantAnalyticsConsent;
}

export const analyticsEnvironment = {
  gtmConfigured: Boolean(gtmId),
  ga4Configured: Boolean(ga4Id),
};
