import type { AxiosResponse } from "axios";

import { waitFor } from "@/lib/api/delay";
import { createMockResponse } from "@/lib/api/mock-response";

export type PrivacySection = {
  readonly title: string;
  readonly body: string;
};

const privacySections: readonly PrivacySection[] = [
  {
    title: "Administrator danych",
    body: "Niniejsza polityka prywatności dotyczy BRICKINVEST i tej strony internetowej. Administratorem danych jest [UZUPEŁNIJ PODMIOT PRAWNY BRICKINVEST]. Siedziba: [UZUPEŁNIJ ADRES SIEDZIBY]. Numer rejestrowy lub podatkowy: [UZUPEŁNIJ NUMER]. Kontakt w sprawach prywatności: [UZUPEŁNIJ E-MAIL]. Telefon: [UZUPEŁNIJ TELEFON].",
  },
  {
    title: "Zgoda i niniejsza polityka",
    body: "Korzystając ze strony lub przesyłając informacje, potwierdzasz zapoznanie się z polityką. Gdy jest to wymagane, BRICKINVEST poprosi o zgodę przed odpowiednim przetwarzaniem. Komunikacja marketingowa, cookies, analityka i inne działania oparte na zgodzie będą prowadzone zgodnie z wyborem zapisanym przez [UZUPEŁNIJ MECHANIZM ZGODY]. Zgodę można wycofać w dowolnym momencie poprzez [UZUPEŁNIJ PROCEDURĘ WYCOFANIA].",
  },
  {
    title: "Żądane i zbierane informacje",
    body: "W zależności od sposobu korzystania z BRICKINVEST dane mogą obejmować dane kontaktowe, treść zapytania, preferencje inwestycyjne, informacje o korzystaniu ze strony, dane urządzenia, logi i dane dotyczące zgody. Dokładne pola i źródła zbierania danych to: [UZUPEŁNIJ POTWIERDZONE KATEGORIE I ŹRÓDŁA]. Nie przesyłaj informacji zbędnych dla Twojego zapytania.",
  },
  {
    title: "Cele przetwarzania",
    body: "BRICKINVEST może przetwarzać informacje w celu odpowiadania na zapytania, oceny i przedstawiania odpowiednich możliwości nieruchomościowych lub inwestycyjnych, świadczenia zamówionych usług, obsługi i ochrony strony, zarządzania danymi, wypełniania obowiązków prawnych oraz pomiaru działania strony, gdy jest to dozwolone. Dodatkowe operacje przetwarzania: [UZUPEŁNIJ POTWIERDZONE OPERACJE].",
  },
  {
    title: "Podstawa prawna",
    body: "Podstawą prawną poszczególnych działań może być zgoda, działania podjęte na Twoje żądanie, wykonanie umowy, obowiązek prawny lub prawnie uzasadniony interes, który nie przeważa nad Twoimi prawami. BRICKINVEST musi uzupełnić tę mapę przed publikacją: [UZUPEŁNIJ TABELĘ OPERACJI I PODSTAW PRAWNYCH].",
  },
  {
    title: "Okres przechowywania",
    body: "Informacje będą przechowywane wyłącznie przez czas potrzebny do realizacji odpowiedniego celu oraz przez obowiązujące okresy prawne, księgowe, procesowe lub przedawnienia. Szczegółowe okresy lub kryteria dla poszczególnych kategorii to: [UZUPEŁNIJ POTWIERDZONE OKRESY PRZECHOWYWANIA].",
  },
  {
    title: "Odbiorcy i transfery międzynarodowe",
    body: "Informacje mogą być udostępniane dostawcom działającym zgodnie z instrukcjami BRICKINVEST oraz, gdy jest to konieczne lub dozwolone, organom i profesjonalnym doradcom. Kategorie podmiotów przetwarzających i dostawców chmurowych to: [UZUPEŁNIJ POTWIERDZONYCH DOSTAWCÓW]. Transfery międzynarodowe i zabezpieczenia to: [UZUPEŁNIJ POTWIERDZONE KRAJE I ZABEZPIECZENIA].",
  },
  {
    title: "Twoje prawa",
    body: "Zgodnie z obowiązującym prawem możesz żądać dostępu do danych, ich sprostowania lub usunięcia, ograniczenia i przenoszenia, sprzeciwić się przetwarzaniu oraz wycofać zgodę. Wnioski należy kierować na [UZUPEŁNIJ E-MAIL LUB SPOSÓB REALIZACJI PRAW]. BRICKINVEST może poprosić o [UZUPEŁNIJ WYMÓG WERYFIKACJI TOŻSAMOŚCI] w celu ochrony danych osobowych. Terminy i ograniczenia odpowiedzi wynikają z obowiązujących przepisów.",
  },
  {
    title: "Bezpieczeństwo, cookies i analityka",
    body: "BRICKINVEST stosuje odpowiednie środki organizacyjne i techniczne w celu ochrony informacji. Potwierdzone środki bezpieczeństwa to: [UZUPEŁNIJ ŚRODKI BEZPIECZEŃSTWA]. Kategorie cookies, narzędzia analityczne, opcje zgody i okresy przechowywania opisano w [UZUPEŁNIJ POLITYKĘ COOKIES / SZCZEGÓŁY ZGODY]. Aktualna konfiguracja analityki i tagów: [UZUPEŁNIJ POTWIERDZONE PRAKTYKI].",
  },
  {
    title: "Skargi, zmiany i kontakt",
    body: "Pytania lub wnioski można przesyłać na [UZUPEŁNIJ E-MAIL DOTYCZĄCY PRYWATNOŚCI]. Możesz również skontaktować się z właściwym organem nadzorczym: [UZUPEŁNIJ ORGAN I DANE KONTAKTOWE]. Data wejścia w życie: [UZUPEŁNIJ DATĘ]. Ostatnia aktualizacja: [UZUPEŁNIJ DATĘ AKTUALIZACJI]. Ten projekt wymaga przeglądu prawnego i operacyjnego przed publikacją, w tym potwierdzenia wszystkich danych w nawiasach.",
  },
];

export const getPrivacySections = async (
  signal: AbortSignal,
): Promise<AxiosResponse<readonly PrivacySection[]>> => {
  await waitFor(500, signal);
  return createMockResponse(privacySections);
};
