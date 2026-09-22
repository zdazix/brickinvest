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
    ["Ventaja del proyecto", "Estrategia clara y control en cada etapa."],
    [
      "Ventaja del proyecto",
      "Análisis profundo del mercado y del potencial de inversión.",
    ],
    ["Ventaja del proyecto", "Socios de confianza y apoyo personalizado."],
    [
      "Ventaja del proyecto",
      "Acompañamiento transparente desde la primera conversación hasta el cierre.",
    ],
  ],
  collectionCards: [
    "Oportunidad seleccionada",
    "Oportunidad seleccionada",
    "Oportunidad seleccionada",
  ],
  editorialCards: [
    {
      eyebrow: "EL ENFOQUE DE BRICKINVEST",
      title: "Decisiones basadas en datos",
      description:
        "Combinamos conocimiento local, análisis y ejecución práctica para que cada recomendación sea clara y esté fundamentada.",
    },
    {
      eyebrow: "ESTRATEGIA DE INVERSIÓN",
      title: "Oportunidades con una perspectiva clara",
      description:
        "Desde una parcela hasta un activo terminado, ayudamos a evaluar los riesgos, el potencial y el siguiente paso para tu capital.",
    },
  ],
  reviews: Array.from({ length: 6 }, (_, index) => ({
    quote:
      index === 0
        ? "Un enfoque profesional, una comunicación clara y un profundo conocimiento del mercado local."
        : `Un inversor destaca la ventaja de BRICKINVEST n.º ${index + 1}.`,
    customer: `Investor 0${index + 1}`,
    detail: "Cliente de BRICKINVEST",
    image: placeholderImage,
  })),
};

export const getHomeContent = async (
  signal: AbortSignal,
): Promise<AxiosResponse<HomeContent>> => {
  await waitFor(650, signal);
  return createMockResponse(homeContent);
};
