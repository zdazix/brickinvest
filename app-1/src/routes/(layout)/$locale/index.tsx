import { createFileRoute } from "@tanstack/react-router";

import { HomePage } from "@/pages/home/HomePage";
import { defaultLocale, isLocaleKey } from "@/lib/locales";
import { getHomeCanonicalUrl, getHomeMetadata } from "@/lib/seo/home-metadata";

export const Route = createFileRoute("/(layout)/$locale/")({
  component: HomePage,
  head: ({ params }) => {
    const locale = isLocaleKey(params.locale) ? params.locale : defaultLocale;
    const metadata = getHomeMetadata(locale);
    const canonicalUrl = getHomeCanonicalUrl(locale);

    return {
      meta: [
        { title: metadata.title },
        { name: "description", content: metadata.description },
        { name: "robots", content: "index,follow" },
        { property: "og:title", content: metadata.title },
        { property: "og:description", content: metadata.description },
        { property: "og:type", content: "website" },
        { property: "og:locale", content: metadata.locale },
        { name: "twitter:card", content: "summary" },
        { name: "twitter:title", content: metadata.title },
        { name: "twitter:description", content: metadata.description },
      ],
      links: canonicalUrl ? [{ rel: "canonical", href: canonicalUrl }] : [],
    };
  },
});
