import { describe, expect, it } from "vitest";

import {
  getLocaleFromPathname,
  localizedPathname,
  stripLocalePrefix,
} from "@/lib/locale-routing";

const locales = ["en", "es", "sv", "uk", "ru", "de", "et", "pl", "cs"] as const;

describe("locale URL helpers", () => {
  it("reads a supported locale from a direct URL and uses Czech as the default", () => {
    expect(getLocaleFromPathname("/en/contact", locales, "cs")).toBe("en");
    expect(getLocaleFromPathname("/unknown/contact", locales, "cs")).toBe("cs");
  });

  it("creates locale-specific home and nested page URLs", () => {
    expect(localizedPathname("/", "en", locales)).toBe("/en");
    expect(localizedPathname("/contact", "en", locales)).toBe("/en/contact");
  });

  it("changes the locale prefix without losing the current page", () => {
    expect(localizedPathname("/en/contact", "pl", locales)).toBe("/pl/contact");
    expect(localizedPathname("/ru/terms-and-conditions", "de", locales)).toBe(
      "/de/terms-and-conditions",
    );
  });

  it("normalizes legacy paths and trailing slashes", () => {
    expect(localizedPathname("/contact/", "es", locales)).toBe("/es/contact");
    expect(stripLocalePrefix("/cs/", locales)).toBe("/");
  });
});
