import {
  createContext,
  useContext,
  useMemo,
  useState,
  type PropsWithChildren,
} from "react";

export const locales = [
  { code: "EN", flag: "🇬🇧", key: "en", label: "English" },
  { code: "ES", flag: "🇪🇸", key: "es", label: "Español" },
  { code: "SV", flag: "🇸🇪", key: "sv", label: "Svenska" },
  { code: "UK", flag: "🇺🇦", key: "uk", label: "Українська" },
  { code: "RU", flag: "🇷🇺", key: "ru", label: "Русский" },
  { code: "DE", flag: "🇩🇪", key: "de", label: "Deutsch" },
  { code: "ET", flag: "🇪🇪", key: "et", label: "Eesti" },
  { code: "PL", flag: "🇵🇱", key: "pl", label: "Polski" },
] as const;

export type LocaleKey = (typeof locales)[number]["key"];
type Dictionary = Record<string, string>;

const english: Dictionary = {
  about: "About Us",
  why: "Why Us",
  offer: "What We Offer",
  services: "Our Services",
  projects: "Projects",
  solutions: "Investment Solutions",
  intelligence: "AI & Data Intelligence",
  trusted:
    "Your Trusted Partner for Development and Investment on the Costa del Sol.",
  highRoi: "High-ROI Property Investment Opportunities",
  qualification: "Investor qualification",
  requestReceived: "Request received",
  preparing: "Your opportunities are being prepared.",
  advisor:
    "A BRICKINVEST advisor will be in touch with a considered selection.",
  return: "Return to BRICKINVEST",
  details: "DETAILS",
  firstName: "First Name",
  email: "Email",
  phone: "Phone Number with international country code",
  privacy:
    "I agree to the GDPR/privacy notice and consent to BRICKINVEST using my details to respond to this request.",
  validation: "Please complete your details and accept the privacy notice.",
  failed: "We could not send your request. Please try again.",
  send: "SENDING…",
  submit: "REQUEST MY INVESTMENT OPPORTUNITIES",
  openMenu: "Open navigation menu",
  closeMenu: "Close navigation menu",
  openLanguage: "Open language selector",
  aboutHeading: "ABOUT US",
  aboutSupporting:
    "Experienced real estate developers with 25 years of market presence, local expertise, trusted relationships, and an international perspective.",
  aboutBody:
    "At BRICKINVEST, we specialize in identifying high-quality residential and commercial investment opportunities across the Costa del Sol and throughout Spain. With years of cultivated market experience and a strong network of trusted local and international partners, we provide our clients with access to opportunities that are often off-market and carefully selected.",
  whyHeading: "WHY US?",
  whySupporting: "Tailored investment guidance on the Costa del Sol",
  whyBody:
    "With years of market experience, we provide case-specific consulting designed around each client’s investment goals, risk profile, and project scope.",
  deepInsight: "Deep local insight",
  deepInsightBody:
    "Our long-standing presence in the market and trusted network give us access to opportunities before they reach the wider market. This allows us to identify high-value properties and development prospects with strong potential.",
  offerHeading: "WHAT WE OFFER",
  offerProjectManagement:
    "Project management with implementation in digital screen AI system",
  offerConstruction: "In-house construction company",
  offerArchitecture: "In-house architects and engineering team",
  offerPlots: "The unique plots",
  offerDevelopments: "Bespoke ready-made development",
  offerRoi: "ROI of 40%+ per year",
  offerMultilingual: "Multilingual support",
  offerLegacy: "Legacy and transparency",
  servicesHeading: "OUR SERVICES",
  servicesSupporting: "Comprehensive investment services on the Costa del Sol",
  servicesIntro:
    "We deliver a full suite of investment and development services for corporate clients and qualified individual investors, including:",
  serviceLandBody:
    "Identifying prime land parcels for new construction projects with strong development potential.",
  serviceResidentialBody:
    "Sourcing opportunities for luxury residences, apartments, and residential communities across the Costa del Sol.",
  serviceCommercialBody:
    "Selecting high-yield commercial assets, including retail spaces, office buildings, and industrial properties.",
  serviceHotelBody:
    "Supporting the acquisition and development of hotels, resorts, and hospitality ventures.",
  serviceBusinessBody:
    "Identifying existing businesses with potential for operational improvement and higher returns.",
  projectsHeading: "PROJECTS",
  plots: "PLOTS",
  renovation: "RENOVATION APARTMENTS AND VILLAS",
  newDevelopment: "NEW DEVELOPMENT",
  investmentHeading: "TAILORED INVESTMENT SOLUTIONS",
  investmentBody:
    "Whether you are a seasoned professional or a new investor, our team provides personalized services tailored to your specific needs. From initial consultation to final transaction, we are dedicated to ensuring the success of your investment projects.",
  requestPrompt: "Leave your request",
  leaveRequest: "LEAVE REQUEST",
  requestName: "Name",
  requestNamePlaceholder: "Your name",
  requestContact: "Email or phone number",
  requestContactPlaceholder: "Your email or phone",
  requestSending: "SENDING…",
  requestSuccess: "Thank you. Your request has been received.",
  requestValidation: "Please enter your name and email or phone number.",
  requestFailed: "We could not send your request. Please try again.",
  intelligenceHeading: "AI & DATA INTELLIGENCE",
  intelligenceIntro:
    "At BRICKINVEST, we build the core intelligence that powers every investment recommendation and project evaluation on the Costa del Sol. Our data infrastructure and analytical systems underpin every valuation, ranking, and opportunity assessment.",
  intelligenceUnmatchedHeading: "Unmatched Property Intelligence",
  intelligenceUnmatchedBody:
    "We process millions of data points across historical transactions, rental trends, demographic shifts, and micro-market movements to identify opportunities that outperform. Our analysis doesn’t just show properties — it simulates outcomes, ranks risk-adjusted returns, and maps the path to optimal portfolio performance.",
  intelligenceReasoningHeading:
    "Understand the Reasoning Behind Every Investment",
  intelligenceReasoningBody:
    "Our models analyze thousands of data points to deliver explained predictions, not just numbers. Every recommendation incorporates local market conditions, price movements, and profitability trends so you know exactly why a property stands out.",
};

const translations: Record<LocaleKey, Dictionary> = {
  en: english,
  es: {
    ...english,
    about: "Sobre nosotros",
    why: "Por qué nosotros",
    offer: "Qué ofrecemos",
    services: "Nuestros servicios",
    projects: "Proyectos",
    solutions: "Soluciones de inversión",
    intelligence: "IA e inteligencia de datos",
    trusted:
      "Tu socio de confianza para el desarrollo y la inversión en la Costa del Sol.",
    highRoi: "Oportunidades inmobiliarias de alta rentabilidad",
    qualification: "Cualificación del inversor",
    details: "DATOS",
    firstName: "Nombre",
    phone: "Teléfono con prefijo internacional",
    privacy:
      "Acepto el aviso de privacidad y autorizo a BRICKINVEST a utilizar mis datos para responder a esta solicitud.",
    validation: "Completa tus datos y acepta el aviso de privacidad.",
    failed: "No hemos podido enviar tu solicitud. Inténtalo de nuevo.",
    return: "Volver a BRICKINVEST",
    submit: "SOLICITAR MIS OPORTUNIDADES DE INVERSIÓN",
  },
  sv: {
    ...english,
    about: "Om oss",
    why: "Varför oss",
    offer: "Vad vi erbjuder",
    services: "Våra tjänster",
    projects: "Projekt",
    solutions: "Investeringslösningar",
    intelligence: "AI och dataintelligens",
    trusted:
      "Din pålitliga partner för utveckling och investering på Costa del Sol.",
    highRoi: "Fastighetsmöjligheter med hög avkastning",
    qualification: "Investerarkvalificering",
    details: "UPPGIFTER",
    firstName: "Förnamn",
    phone: "Telefonnummer med internationell landskod",
    return: "Tillbaka till BRICKINVEST",
    submit: "BEGÄR MINA INVESTERINGSMÖJLIGHETER",
  },
  uk: {
    ...english,
    about: "Про нас",
    why: "Чому ми",
    offer: "Що ми пропонуємо",
    services: "Наші послуги",
    projects: "Проєкти",
    solutions: "Інвестиційні рішення",
    intelligence: "ШІ та аналітика даних",
    trusted:
      "Ваш надійний партнер з розвитку та інвестицій на Коста-дель-Соль.",
    highRoi: "Високоприбуткові інвестиційні можливості в нерухомості",
    qualification: "Кваліфікація інвестора",
    details: "ДАНІ",
    firstName: "Ім’я",
    phone: "Номер телефону з міжнародним кодом",
    return: "Повернутися до BRICKINVEST",
    submit: "ЗАПИТАТИ МОЇ ІНВЕСТИЦІЙНІ МОЖЛИВОСТІ",
  },
  ru: {
    ...english,
    about: "О нас",
    why: "Почему мы",
    offer: "Что мы предлагаем",
    services: "Наши услуги",
    projects: "Проекты",
    solutions: "Инвестиционные решения",
    intelligence: "ИИ и аналитика данных",
    trusted:
      "Ваш надежный партнер по развитию и инвестициям на Коста-дель-Соль.",
    highRoi: "Высокодоходные инвестиционные возможности в недвижимости",
    qualification: "Квалификация инвестора",
    details: "ДАННЫЕ",
    firstName: "Имя",
    phone: "Телефон с международным кодом",
    return: "Вернуться в BRICKINVEST",
    submit: "ЗАПРОСИТЬ МОИ ИНВЕСТИЦИОННЫЕ ВОЗМОЖНОСТИ",
  },
  de: {
    ...english,
    about: "Über uns",
    why: "Warum wir",
    offer: "Unser Angebot",
    services: "Unsere Services",
    projects: "Projekte",
    solutions: "Investmentlösungen",
    intelligence: "KI und Datenintelligenz",
    trusted:
      "Ihr zuverlässiger Partner für Entwicklung und Investment an der Costa del Sol.",
    highRoi: "Immobilienchancen mit hoher Rendite",
    qualification: "Investorenqualifizierung",
    details: "DATEN",
    firstName: "Vorname",
    phone: "Telefonnummer mit internationaler Vorwahl",
    return: "Zurück zu BRICKINVEST",
    submit: "MEINE INVESTMENTCHANCEN ANFORDERN",
  },
  et: {
    ...english,
    about: "Meist",
    why: "Miks meie",
    offer: "Meie pakkumine",
    services: "Meie teenused",
    projects: "Projektid",
    solutions: "Investeerimislahendused",
    intelligence: "AI ja andmeintelligents",
    trusted:
      "Teie usaldusväärne partner Costa del Soli arenduses ja investeeringutes.",
    highRoi: "Kõrge tootlusega kinnisvaravõimalused",
    qualification: "Investori kvalifitseerimine",
    details: "ANDMED",
    firstName: "Eesnimi",
    phone: "Rahvusvahelise suunakoodiga telefon",
    return: "Tagasi BRICKINVESTi",
    submit: "TAOTLE MINU INVESTEERIMISVÕIMALUSI",
  },
  pl: {
    ...english,
    about: "O nas",
    why: "Dlaczego my",
    offer: "Co oferujemy",
    services: "Nasze usługi",
    projects: "Projekty",
    solutions: "Rozwiązania inwestycyjne",
    intelligence: "AI i inteligencja danych",
    trusted: "Twój zaufany partner w rozwoju i inwestycjach na Costa del Sol.",
    highRoi: "Wysokodochodowe możliwości inwestycji w nieruchomości",
    qualification: "Kwalifikacja inwestora",
    details: "DANE",
    firstName: "Imię",
    phone: "Numer telefonu z międzynarodowym kierunkowym",
    return: "Wróć do BRICKINVEST",
    submit: "POPROŚ O MOJE MOŻLIWOŚCI INWESTYCYJNE",
  },
};

type LocaleContextValue = {
  locale: LocaleKey;
  setLocale: (locale: LocaleKey) => void;
  t: (key: string) => string;
};
const LocaleContext = createContext<LocaleContextValue | null>(null);

export const LocaleProvider = ({ children }: PropsWithChildren) => {
  const [locale, setLocaleState] = useState<LocaleKey>(() => {
    const saved = window.localStorage.getItem(
      "brickinvest-locale",
    ) as LocaleKey | null;
    return locales.some((item) => item.key === saved) ? saved! : "en";
  });
  const setLocale = (next: LocaleKey) => {
    setLocaleState(next);
    window.localStorage.setItem("brickinvest-locale", next);
  };
  const value = useMemo(
    () => ({
      locale,
      setLocale,
      t: (key: string) => translations[locale][key] ?? english[key] ?? key,
    }),
    [locale],
  );
  return (
    <LocaleContext.Provider value={value}>{children}</LocaleContext.Provider>
  );
};

export const useLocale = () => {
  const context = useContext(LocaleContext);
  if (!context) throw new Error("useLocale must be used within LocaleProvider");
  return context;
};
