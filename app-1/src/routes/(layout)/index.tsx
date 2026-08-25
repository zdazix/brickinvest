import { createFileRoute } from "@tanstack/react-router";

import { HomePage } from "@/pages/home/HomePage";

const productionUrl = import.meta.env.VITE_BRICKINVEST_PRODUCTION_URL?.replace(
  /\/$/,
  "",
);
const canonicalUrl =
  productionUrl &&
  !/\.(?:preview|projects)\.amazi\.pro$/i.test(new URL(productionUrl).hostname)
    ? `${productionUrl}/`
    : undefined;

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "#brickinvest",
      name: "BRICKINVEST",
      description:
        "Real estate investment and development company operating on the Costa del Sol, Spain.",
      additionalType: "https://schema.org/RealEstateAgent",
      areaServed: [
        { "@type": "Place", name: "Costa del Sol, Spain" },
        { "@type": "Place", name: "Marbella" },
        { "@type": "Place", name: "Golden Mile" },
        { "@type": "Place", name: "Estepona" },
        { "@type": "Place", name: "Benahavís" },
        { "@type": "Place", name: "Sotogrande" },
        { "@type": "Place", name: "Málaga" },
      ],
      knowsAbout: [
        "Property investment",
        "Real estate development",
        "Land acquisition",
        "Residential development",
        "Commercial real estate",
        "Hotel and hospitality investment",
        "Business acquisition",
        "Renovation investment",
        "Project management",
        "Property development",
        "Investment analysis",
        "AI and data intelligence",
      ],
      hasOfferCatalog: { "@id": "#brickinvest-services" },
    },
    {
      "@type": "WebPage",
      "@id": "#homepage",
      name: "BRICKINVEST | Property Development & Investment Costa del Sol",
      about: { "@id": "#brickinvest" },
      mainEntity: { "@id": "#brickinvest" },
      mentions: [
        { "@id": "#brickinvest-services" },
        { "@id": "#investment-opportunities" },
        { "@id": "#brickinvest-projects" },
        { "@id": "#investment-analysis" },
      ],
    },
    {
      "@type": "OfferCatalog",
      "@id": "#brickinvest-services",
      name: "BRICKINVEST property investment and development services",
      itemListElement: [
        "Land acquisition",
        "Residential development",
        "Commercial real estate",
        "Hotel and hospitality investment",
        "Business acquisition",
        "Project management",
        "Property development",
        "Investment analysis",
        "AI and data intelligence",
      ].map((name) => ({
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name,
          provider: { "@id": "#brickinvest" },
        },
      })),
    },
    {
      "@type": "ItemList",
      "@id": "#investment-opportunities",
      name: "BRICKINVEST investment opportunity categories",
      itemListElement: [
        "Plots",
        "Renovation apartments and villas",
        "New development",
      ].map((name, index) => ({
        "@type": "ListItem",
        position: index + 1,
        item: {
          "@type": "Thing",
          name,
          isPartOf: { "@id": "#brickinvest-projects" },
        },
      })),
    },
    {
      "@type": "CollectionPage",
      "@id": "#brickinvest-projects",
      name: "BRICKINVEST projects",
      about: {
        "@type": "Thing",
        name: "Property development and investment projects",
      },
      spatialCoverage: [
        "Costa del Sol",
        "Marbella",
        "Golden Mile",
        "Estepona",
        "Benahavís",
        "Sotogrande",
        "Málaga",
      ].map((name) => ({ "@type": "Place", name })),
      subjectOf: { "@id": "#investment-analysis" },
    },
    {
      "@type": "Service",
      "@id": "#investment-analysis",
      name: "AI and Data Intelligence for property investment analysis",
      serviceType:
        "Property analysis, investment evaluation, market intelligence and opportunity assessment",
      provider: { "@id": "#brickinvest" },
    },
  ],
};

export const Route = createFileRoute("/(layout)/")({
  component: HomePage,
  head: () => ({
    meta: [
      {
        title: "BRICKINVEST | Property Development & Investment Costa del Sol",
      },
      {
        name: "description",
        content:
          "BRICKINVEST provides property investment, development and project opportunities across the Costa del Sol, including Marbella, Sotogrande, Estepona and Málaga.",
      },
      { name: "robots", content: "index,follow" },
      {
        property: "og:title",
        content:
          "BRICKINVEST | Property Development & Investment Costa del Sol",
      },
      {
        property: "og:description",
        content:
          "BRICKINVEST provides property investment, development and project opportunities across the Costa del Sol, including Marbella, Sotogrande, Estepona and Málaga.",
      },
      { property: "og:type", content: "website" },
      { property: "og:locale", content: "en_US" },
      { name: "twitter:card", content: "summary" },
      {
        name: "twitter:title",
        content:
          "BRICKINVEST | Property Development & Investment Costa del Sol",
      },
      {
        name: "twitter:description",
        content:
          "BRICKINVEST provides property investment, development and project opportunities across the Costa del Sol, including Marbella, Sotogrande, Estepona and Málaga.",
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
