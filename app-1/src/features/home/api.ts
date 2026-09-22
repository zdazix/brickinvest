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
    ["Преимущество проекта", "Понятная стратегия и контроль каждого этапа."],
    [
      "Преимущество проекта",
      "Тщательный анализ рынка и инвестиционного потенциала.",
    ],
    [
      "Преимущество проекта",
      "Проверенные партнёры и персональное сопровождение.",
    ],
    ["Преимущество проекта", "Прозрачная работа от первой встречи до сделки."],
  ],
  collectionCards: [
    "Избранная возможность",
    "Избранная возможность",
    "Избранная возможность",
  ],
  editorialCards: [
    {
      eyebrow: "ПОДХОД BRICKINVEST",
      title: "Решения, основанные на данных",
      description:
        "Мы объединяем локальную экспертизу, аналитику и практическую реализацию, чтобы каждая рекомендация была понятной и обоснованной.",
    },
    {
      eyebrow: "ИНВЕСТИЦИОННАЯ СТРАТЕГИЯ",
      title: "Возможности с ясной перспективой",
      description:
        "От участка до готового объекта мы помогаем оценить риски, потенциал и следующий шаг для вашего капитала.",
    },
  ],
  reviews: Array.from({ length: 6 }, (_, index) => ({
    quote:
      index === 0
        ? "Профессиональный подход, понятная коммуникация и сильное знание местного рынка."
        : `Инвестор отмечает преимущество BRICKINVEST №${index + 1}.`,
    customer: `Инвестор 0${index + 1}`,
    detail: "Клиент BRICKINVEST",
    image: placeholderImage,
  })),
};

export const getHomeContent = async (
  signal: AbortSignal,
): Promise<AxiosResponse<HomeContent>> => {
  await waitFor(650, signal);
  return createMockResponse(homeContent);
};
