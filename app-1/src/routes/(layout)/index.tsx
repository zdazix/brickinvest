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
        title: "BRICKINVEST | Nieruchomości i inwestycje na Costa del Sol",
      },
      {
        name: "description",
        content:
          "BRICKINVEST oferuje inwestycje w nieruchomości, projekty deweloperskie i możliwości inwestycyjne na Costa del Sol, w tym w Marbelli, Sotogrande, Esteponie i Maladze.",
      },
      { name: "robots", content: "index,follow" },
      {
        property: "og:title",
        content: "BRICKINVEST | Nieruchomości i inwestycje na Costa del Sol",
      },
      {
        property: "og:description",
        content:
          "BRICKINVEST oferuje inwestycje w nieruchomości, projekty deweloperskie i możliwości inwestycyjne na Costa del Sol, w tym w Marbelli, Sotogrande, Esteponie i Maladze.",
      },
      { property: "og:type", content: "website" },
      { property: "og:locale", content: "pl_PL" },
      { name: "twitter:card", content: "summary" },
      {
        name: "twitter:title",
        content: "BRICKINVEST | Nieruchomości i inwestycje na Costa del Sol",
      },
      {
        name: "twitter:description",
        content:
          "BRICKINVEST oferuje inwestycje w nieruchomości, projekty deweloperskie i możliwości inwestycyjne na Costa del Sol, w tym w Marbelli, Sotogrande, Esteponie i Maladze.",
      },
    ],
    links: canonicalUrl ? [{ rel: "canonical", href: canonicalUrl }] : [],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify(structuredData),
      },
    ],
  }),
});
