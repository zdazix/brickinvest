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
    ["Projektvorteil", "Klare Strategie und Kontrolle in jeder Phase."],
    [
      "Преимущество проекта",
      "Sorgfältige Analyse des Marktes und des Investmentpotenzials.",
    ],
    [
      "Преимущество проекта",
      "Vertrauensvolle Partner und persönliche Betreuung.",
    ],
    [
      "Projektvorteil",
      "Transparente Begleitung vom ersten Gespräch bis zum Abschluss.",
    ],
  ],
  collectionCards: [
    "Ausgewählte Möglichkeit",
    "Ausgewählte Möglichkeit",
    "Ausgewählte Möglichkeit",
  ],
  editorialCards: [
    {
      eyebrow: "DER BRICKINVEST-ANSATZ",
      title: "Entscheidungen auf Datenbasis",
      description:
        "Wir verbinden lokale Expertise, Analyse und praktische Umsetzung, damit jede Empfehlung nachvollziehbar und fundiert ist.",
    },
    {
      eyebrow: "INVESTMENTSTRATEGIE",
      title: "Möglichkeiten mit klarer Perspektive",
      description:
        "Vom Grundstück bis zum fertigen Objekt helfen wir Ihnen, Risiken, Potenzial und den nächsten Schritt für Ihr Kapital zu bewerten.",
    },
  ],
  reviews: Array.from({ length: 6 }, (_, index) => ({
    quote:
      index === 0
        ? "Professioneller Ansatz, klare Kommunikation und fundiertes Wissen über den lokalen Markt."
        : `Ein Investor hebt den Vorteil von BRICKINVEST Nr. ${index + 1} hervor.`,
    customer: `Investor 0${index + 1}`,
    detail: "BRICKINVEST-Kunde",
    image: placeholderImage,
  })),
};

export const getHomeContent = async (
  signal: AbortSignal,
): Promise<AxiosResponse<HomeContent>> => {
  await waitFor(650, signal);
  return createMockResponse(homeContent);
};
