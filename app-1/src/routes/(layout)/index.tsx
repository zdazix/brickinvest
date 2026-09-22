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
        title: "BRICKINVEST | Nemovitosti a investice na Costa del Sol",
      },
      {
        name: "description",
        content:
          "BRICKINVEST nabízí investice do nemovitostí, developerské projekty a investiční příležitosti na Costa del Sol včetně Marbelly, Sotogrande, Estepony a Málagy.",
      },
      { name: "robots", content: "index,follow" },
      {
        property: "og:title",
        content: "BRICKINVEST | Nemovitosti a investice na Costa del Sol",
      },
      {
        property: "og:description",
        content:
          "BRICKINVEST nabízí investice do nemovitostí, developerské projekty a investiční příležitosti na Costa del Sol včetně Marbelly, Sotogrande, Estepony a Málagy.",
      },
      { property: "og:type", content: "website" },
      { property: "og:locale", content: "cs_CZ" },
      { name: "twitter:card", content: "summary" },
      {
        name: "twitter:title",
        content: "BRICKINVEST | Nemovitosti a investice na Costa del Sol",
      },
      {
        name: "twitter:description",
        content:
          "BRICKINVEST nabízí investice do nemovitostí, developerské projekty a investiční příležitosti na Costa del Sol včetně Marbelly, Sotogrande, Estepony a Málagy.",
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
