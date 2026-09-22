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
    ["Atut projektu", "Jasna strategia i kontrola na każdym etapie."],
    ["Atut projektu", "Dogłębna analiza rynku i potencjału inwestycyjnego."],
    ["Atut projektu", "Zaufani partnerzy i indywidualne wsparcie."],
    [
      "Atut projektu",
      "Przejrzyste wsparcie od pierwszej rozmowy do finalizacji.",
    ],
  ],
  collectionCards: [
    "Wybrana możliwość",
    "Wybrana możliwość",
    "Wybrana możliwość",
  ],
  editorialCards: [
    {
      eyebrow: "PODEJŚCIE BRICKINVEST",
      title: "Decyzje oparte na danych",
      description:
        "Łączymy lokalną wiedzę, analizę i praktyczną realizację, aby każda rekomendacja była jasna i uzasadniona.",
    },
    {
      eyebrow: "STRATEGIA INWESTYCYJNA",
      title: "Możliwości z jasną perspektywą",
      description:
        "Od działki po gotowy obiekt pomagamy ocenić ryzyko, potencjał i kolejny krok dla Twojego kapitału.",
    },
  ],
  reviews: Array.from({ length: 6 }, (_, index) => ({
    quote:
      index === 0
        ? "Profesjonalne podejście, jasna komunikacja i dogłębna znajomość lokalnego rynku."
        : `Inwestor podkreśla atut BRICKINVEST nr ${index + 1}.`,
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
