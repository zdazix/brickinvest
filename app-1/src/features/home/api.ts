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
    ["Přednost projektu", "Jasná strategie a kontrola v každé fázi."],
    ["Přednost projektu", "Hloubková analýza trhu a investičního potenciálu."],
    ["Přednost projektu", "Důvěryhodní partneři a individuální podpora."],
    [
      "Atut projektu",
      "Transparentní podpora od prvního rozhovoru až po dokončení.",
    ],
  ],
  collectionCards: [
    "Vybraná příležitost",
    "Vybraná příležitost",
    "Vybraná příležitost",
  ],
  editorialCards: [
    {
      eyebrow: "PŘÍSTUP BRICKINVEST",
      title: "Rozhodnutí založená na datech",
      description:
        "Spojujeme místní znalost, analýzu a praktickou realizaci, aby každé doporučení bylo jasné a podložené.",
    },
    {
      eyebrow: "INVESTIČNÍ STRATEGIE",
      title: "Příležitosti s jasnou perspektivou",
      description:
        "Od pozemku po dokončený objekt pomáháme posoudit riziko, potenciál a další krok pro váš kapitál.",
    },
  ],
  reviews: Array.from({ length: 6 }, (_, index) => ({
    quote:
      index === 0
        ? "Profesionální přístup, jasná komunikace a hluboká znalost místního trhu."
        : `Investor vyzdvihuje přednost BRICKINVEST č. ${index + 1}.`,
    customer: `Investor 0${index + 1}`,
    detail: "Klient BRICKINVEST",
    image: placeholderImage,
  })),
};

export const getHomeContent = async (
  signal: AbortSignal,
): Promise<AxiosResponse<HomeContent>> => {
  await waitFor(650, signal);
  return createMockResponse(homeContent);
};
