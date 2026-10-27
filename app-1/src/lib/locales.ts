export const locales = [
  { code: "EN", flag: "🇬🇧", key: "en", label: "English" },
  { code: "ES", flag: "🇪🇸", key: "es", label: "Español" },
  { code: "SV", flag: "🇸🇪", key: "sv", label: "Svenska" },
  { code: "UK", flag: "🇺🇦", key: "uk", label: "Українська" },
  { code: "RU", flag: "🇷🇺", key: "ru", label: "Русский" },
  { code: "DE", flag: "🇩🇪", key: "de", label: "Deutsch" },
  { code: "EE", flag: "🇪🇪", key: "et", label: "Eesti" },
  { code: "PL", flag: "🇵🇱", key: "pl", label: "Polski" },
  { code: "CZ", flag: "🇨🇿", key: "cs", label: "Čeština" },
] as const;

export const languageMenuLocales = locales;

export type LocaleKey = (typeof locales)[number]["key"];
export const localeKeys: readonly LocaleKey[] = locales.map(({ key }) => key);
export const defaultLocale: LocaleKey = "en";
export const isLocaleKey = (value: string): value is LocaleKey =>
  localeKeys.includes(value as LocaleKey);
