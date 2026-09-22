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
    ["Projekti eelis", "Selge strateegia ja kontroll igas etapis."],
    ["Projekti eelis", "Turu ja investeerimispotentsiaali põhjalik analüüs."],
    ["Projekti eelis", "Usaldusväärsed partnerid ja personaalne tugi."],
    ["Projekti eelis", "Läbipaistev tugi esimesest vestlusest tehingu lõpuni."],
  ],
  collectionCards: ["Valitud võimalus", "Valitud võimalus", "Valitud võimalus"],
  editorialCards: [
    {
      eyebrow: "BRICKINVESTi LÄHENEMINE",
      title: "Andmepõhised otsused",
      description:
        "Ühendame kohaliku teadmise, analüüsi ja praktilise teostuse, et iga soovitus oleks arusaadav ja põhjendatud.",
    },
    {
      eyebrow: "INVESTEERIMISSTRATEEGIA",
      title: "Selge perspektiiviga võimalused",
      description:
        "Krundist valmis objektini aitame hinnata riske, potentsiaali ja teie kapitali järgmist sammu.",
    },
  ],
  reviews: Array.from({ length: 6 }, (_, index) => ({
    quote:
      index === 0
        ? "Professionaalne lähenemine, selge suhtlus ja põhjalik kohaliku turu tundmine."
        : `Investor tõstab esile BRICKINVESTi eelise nr ${index + 1}.`,
    customer: `Investor 0${index + 1}`,
    detail: "BRICKINVESTi klient",
    image: placeholderImage,
  })),
};

export const getHomeContent = async (
  signal: AbortSignal,
): Promise<AxiosResponse<HomeContent>> => {
  await waitFor(650, signal);
  return createMockResponse(homeContent);
};
