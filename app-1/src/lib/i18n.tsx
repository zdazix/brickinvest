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
