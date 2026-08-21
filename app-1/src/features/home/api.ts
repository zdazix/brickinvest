import type { AxiosResponse } from "axios";

import { createMockResponse } from "@/lib/api/mock-response";
import { waitFor } from "@/lib/api/delay";

const placeholderImage = `${import.meta.env.BASE_URL}images/placeholder.svg`;

export type HomeContent = {
  readonly image: string;
  readonly features: readonly (readonly [string, string])[];
  readonly collectionCards: readonly string[];
  readonly editorialCards: readonly {
    readonly eyebrow: string;
    readonly title: string;
    readonly description: string;
  }[];
  readonly reviews: readonly {
    readonly quote: string;
    readonly customer: string;
    readonly detail: string;
    readonly image: string;
  }[];
};

const homeContent: HomeContent = {
  image: placeholderImage,
  features: [
    ["Feature title 01", "Feature description text goes here."],
    ["Feature title 02", "Feature description text goes here."],
    ["Feature title 03", "Feature description text goes here."],
    ["Feature title 04", "Feature description text goes here."],
  ],
  collectionCards: ["Card title 01", "Card title 02", "Card title 03"],
  editorialCards: [
    {
      eyebrow: "Eyebrow text",
      title: "H3 content title",
      description:
        "Content description text goes here. Replace this copy with information that supports the section title.",
    },
    {
      eyebrow: "Eyebrow text",
      title: "H3 content title",
      description:
        "Content description text goes here. Replace this copy with information that supports the section title.",
    },
  ],
  reviews: Array.from({ length: 6 }, (_, index) => ({
    quote:
      index === 0
        ? "Review quote placeholder text goes here."
        : `A customer review can highlight product benefit ${index + 1}.`,
    customer: `Customer name 0${index + 1}`,
    detail: "Customer detail",
    image: placeholderImage,
  })),
};

export const getHomeContent = async (
  signal: AbortSignal,
): Promise<AxiosResponse<HomeContent>> => {
  await waitFor(650, signal);
  return createMockResponse(homeContent);
};
