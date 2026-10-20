const normalizePathname = (pathname: string) => {
  const withLeadingSlash = pathname.startsWith("/") ? pathname : `/${pathname}`;
  return withLeadingSlash.replace(/\/{2,}/gu, "/").replace(/\/+$/u, "") || "/";
};

export const getLocaleFromPathname = <Locale extends string>(
  pathname: string,
  supportedLocales: readonly Locale[],
  defaultLocale: Locale,
): Locale => {
  const localeSegment = normalizePathname(pathname).split("/")[1];
  return supportedLocales.includes(localeSegment as Locale)
    ? (localeSegment as Locale)
    : defaultLocale;
};

export const stripLocalePrefix = <Locale extends string>(
  pathname: string,
  supportedLocales: readonly Locale[],
): string => {
  const normalizedPathname = normalizePathname(pathname);
  const [, localeSegment, ...remainingSegments] = normalizedPathname.split("/");

  if (!supportedLocales.includes(localeSegment as Locale)) {
    return normalizedPathname;
  }

  return remainingSegments.length ? `/${remainingSegments.join("/")}` : "/";
};

export const localizedPathname = <Locale extends string>(
  pathname: string,
  locale: Locale,
  supportedLocales: readonly Locale[],
): string => {
  const pathWithoutLocale = stripLocalePrefix(pathname, supportedLocales);
  return pathWithoutLocale === "/"
    ? `/${locale}`
    : `/${locale}${pathWithoutLocale}`;
};
