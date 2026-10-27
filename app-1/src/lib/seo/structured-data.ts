export type VerifiedProject = {
  name: string;
  location: string;
  propertyType: string;
  developmentType: string;
  description: string;
  url?: string;
  images?: string[];
  investmentAmount?: number;
  returnRate?: number;
  availability?: string;
};

export type BreadcrumbItem = { name: string; url: string };

const serviceNames = [
  "Land acquisition",
  "Residential development",
  "Commercial real estate",
  "Hotels and hospitality",
  "Company acquisitions",
] as const;

const servedPlaces = [
  "Costa del Sol, Spain",
  "Marbella",
  "Estepona",
  "Benahavís",
  "Sotogrande",
  "Málaga",
] as const;

const entityId = (origin: string | undefined, fragment: string) =>
  origin ? `${origin}/#${fragment}` : `#${fragment}`;

const verifiedOrigin = (value?: string) => {
  if (!value) return undefined;
  try {
    const url = new URL(value);
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

export const createHomepageStructuredData = (configuredOrigin?: string) => {
  const origin = verifiedOrigin(configuredOrigin);
  const organizationId = entityId(origin, "organization");
  const websiteId = entityId(origin, "website");
  const homepageId = entityId(origin, "homepage");
  const catalogId = entityId(origin, "services");
  const services = serviceNames.map((name, index) => ({
    "@type": "Service",
    "@id": entityId(origin, `service-${index + 1}`),
    name,
    provider: { "@id": organizationId },
  }));

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": organizationId,
        name: "BRICKINVEST",
        description:
          "A company focused on real estate investment and development on the Costa del Sol, Spain.",
        ...(origin ? { url: origin } : {}),
        areaServed: servedPlaces.map((name) => ({
          "@type": "Place",
          name,
        })),
        knowsAbout: [
          "Real estate investment",
          "Property investment",
          "Property development",
          "Land acquisition",
          "Residential development",
          "Commercial real estate",
          "Hotels and hospitality",
          "Company acquisitions",
        ],
        hasOfferCatalog: { "@id": catalogId },
      },
      {
        "@type": "WebSite",
        "@id": websiteId,
        name: "BRICKINVEST",
        ...(origin ? { url: origin } : {}),
        publisher: { "@id": organizationId },
        about: { "@id": organizationId },
      },
      {
        "@type": "WebPage",
        "@id": homepageId,
        isPartOf: { "@id": websiteId },
        about: { "@id": organizationId },
        mainEntity: { "@id": organizationId },
      },
      {
        "@type": "OfferCatalog",
        "@id": catalogId,
        name: "BRICKINVEST services",
        itemListElement: services.map((service) => ({
          "@type": "Offer",
          itemOffered: { "@id": service["@id"] },
        })),
      },
      ...services,
    ],
  };
};

export const createBreadcrumbList = (items: readonly BreadcrumbItem[]) =>
  items.length
    ? {
        "@type": "BreadcrumbList",
        itemListElement: items.map((item, index) => ({
          "@type": "ListItem",
          position: index + 1,
          name: item.name,
          item: item.url,
        })),
      }
    : undefined;

export const createVerifiedProjectSchema = (project: VerifiedProject) => ({
  "@type": "CreativeWork",
  name: project.name,
  contentLocation: { "@type": "Place", name: project.location },
  genre: [project.propertyType, project.developmentType],
  description: project.description,
  ...(project.url ? { url: project.url } : {}),
  ...(project.images?.length ? { image: project.images } : {}),
});
