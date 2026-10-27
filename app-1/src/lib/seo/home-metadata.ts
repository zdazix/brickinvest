import type { LocaleKey } from "@/lib/locales";

export type HomeMetadata = {
  description: string;
  locale: string;
  title: string;
};

export const homeMetadata: Record<LocaleKey, HomeMetadata> = {
  en: {
    title: "BRICKINVEST | Property Investment on the Costa del Sol",
    description:
      "Discover carefully selected property investment opportunities, development projects, and tailored guidance on the Costa del Sol with BRICKINVEST.",
    locale: "en_GB",
  },
  es: {
    title: "BRICKINVEST | Inversión inmobiliaria en la Costa del Sol",
    description:
      "Descubre oportunidades inmobiliarias, proyectos de desarrollo y asesoramiento de inversión personalizado en la Costa del Sol con BRICKINVEST.",
    locale: "es_ES",
  },
  sv: {
    title: "BRICKINVEST | Fastighetsinvesteringar på Costa del Sol",
    description:
      "Upptäck noggrant utvalda fastighetsinvesteringar, utvecklingsprojekt och personlig vägledning på Costa del Sol med BRICKINVEST.",
    locale: "sv_SE",
  },
  uk: {
    title: "BRICKINVEST | Інвестиції в нерухомість на Коста-дель-Соль",
    description:
      "Відкрийте для себе ретельно відібрані можливості інвестування в нерухомість і девелоперські проєкти на Коста-дель-Соль разом із BRICKINVEST.",
    locale: "uk_UA",
  },
  ru: {
    title: "BRICKINVEST | Инвестиции в недвижимость на Коста-дель-Соль",
    description:
      "Подобранные инвестиционные объекты, девелоперские проекты и персональное сопровождение на Коста-дель-Соль от BRICKINVEST.",
    locale: "ru_RU",
  },
  de: {
    title: "BRICKINVEST | Immobilieninvestitionen an der Costa del Sol",
    description:
      "Entdecken Sie sorgfältig ausgewählte Immobilieninvestitionen, Entwicklungsprojekte und persönliche Beratung an der Costa del Sol mit BRICKINVEST.",
    locale: "de_DE",
  },
  et: {
    title: "BRICKINVEST | Kinnisvarainvesteeringud Costa del Solil",
    description:
      "Avastage BRICKINVESTi abil hoolikalt valitud kinnisvarainvesteeringuid, arendusprojekte ja personaalset nõustamist Costa del Solil.",
    locale: "et_EE",
  },
  pl: {
    title: "BRICKINVEST | Inwestycje w nieruchomości na Costa del Sol",
    description:
      "Poznaj starannie wybrane inwestycje w nieruchomości, projekty deweloperskie i indywidualne doradztwo na Costa del Sol z BRICKINVEST.",
    locale: "pl_PL",
  },
  cs: {
    title: "BRICKINVEST | Nemovitosti a investice na Costa del Sol",
    description:
      "Objevte pečlivě vybrané investiční příležitosti, developerské projekty a osobní poradenství na Costa del Sol s BRICKINVEST.",
    locale: "cs_CZ",
  },
};

export const getHomeMetadata = (locale: LocaleKey): HomeMetadata =>
  homeMetadata[locale];

const readProductionOrigin = (): string | undefined => {
  const productionUrl = import.meta.env.VITE_BRICKINVEST_PRODUCTION_URL;
  if (!productionUrl) return undefined;

  try {
    const url = new URL(productionUrl);
    if (
      url.protocol !== "https:" ||
      /\.(?:preview|projects)\.amazi\.pro$/i.test(url.hostname)
    ) {
      return undefined;
    }
    return url.origin;
  } catch {
    return undefined;
  }
};

export const getHomeCanonicalUrl = (locale?: LocaleKey): string | undefined => {
  const origin = readProductionOrigin();
  if (!origin) return undefined;
  return locale ? `${origin}/${locale}` : `${origin}/`;
};
