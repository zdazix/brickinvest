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
        title:
          "BRICKINVEST | Desarrollo inmobiliario e inversiones en la Costa del Sol",
      },
      {
        name: "description",
        content:
          "BRICKINVEST ofrece inversiones inmobiliarias, desarrollos y oportunidades de proyectos en la Costa del Sol, incluyendo Marbella, Sotogrande, Estepona y Málaga.",
      },
      { name: "robots", content: "index,follow" },
      {
        property: "og:title",
        content:
          "BRICKINVEST | Desarrollo inmobiliario e inversiones en la Costa del Sol",
      },
      {
        property: "og:description",
        content:
          "BRICKINVEST ofrece inversiones inmobiliarias, desarrollos y oportunidades de proyectos en la Costa del Sol, incluyendo Marbella, Sotogrande, Estepona y Málaga.",
      },
      { property: "og:type", content: "website" },
      { property: "og:locale", content: "es_ES" },
      { name: "twitter:card", content: "summary" },
      {
        name: "twitter:title",
        content:
          "BRICKINVEST | Desarrollo inmobiliario e inversiones en la Costa del Sol",
      },
      {
        name: "twitter:description",
        content:
          "BRICKINVEST ofrece inversiones inmobiliarias, desarrollos y oportunidades de proyectos en la Costa del Sol, incluyendo Marbella, Sotogrande, Estepona y Málaga.",
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
