import { createFileRoute } from "@tanstack/react-router";

import { HomePage } from "@/pages/home/HomePage";
import { createHomepageStructuredData } from "@/lib/seo/structured-data";

const productionUrl = import.meta.env.VITE_BRICKINVEST_PRODUCTION_URL;
const structuredData = createHomepageStructuredData(productionUrl);

const canonicalUrl = (() => {
  if (!productionUrl) return undefined;
  try {
    const url = new URL(productionUrl);
    if (
      url.protocol !== "https:" ||
      /\.(?:preview|projects)\.amazi\.pro$/i.test(url.hostname)
    ) {
      return undefined;
    }
    return `${url.origin}/`;
  } catch {
    return undefined;
  }
})();

export const Route = createFileRoute("/(layout)/")({
  component: HomePage,
  head: () => ({
    meta: [
      {
        title: "BRICKINVEST | Недвижимость и инвестиции на Коста-дель-Соль",
      },
      {
        name: "description",
        content:
          "BRICKINVEST предлагает инвестиции в недвижимость, девелопмент и проектные возможности на Коста-дель-Соль: в Марбелье, Сотогранде, Эстепоне и Малаге.",
      },
      { name: "robots", content: "index,follow" },
      {
        property: "og:title",
        content: "BRICKINVEST | Недвижимость и инвестиции на Коста-дель-Соль",
      },
      {
        property: "og:description",
        content:
          "BRICKINVEST предлагает инвестиции в недвижимость, девелопмент и проектные возможности на Коста-дель-Соль: в Марбелье, Сотогранде, Эстепоне и Малаге.",
      },
      { property: "og:type", content: "website" },
      { property: "og:locale", content: "ru_RU" },
      { name: "twitter:card", content: "summary" },
      {
        name: "twitter:title",
        content: "BRICKINVEST | Недвижимость и инвестиции на Коста-дель-Соль",
      },
      {
        name: "twitter:description",
        content:
          "BRICKINVEST предлагает инвестиции в недвижимость, девелопмент и проектные возможности на Коста-дель-Соль: в Марбелье, Сотогранде, Эстепоне и Малаге.",
      },
    ],
    links: canonicalUrl ? [{ rel: "canonical", href: canonicalUrl }] : [],
    scripts: [
      {
        attrs: { type: "application/ld+json" },
        children: JSON.stringify(structuredData),
      },
    ],
  }),
});
