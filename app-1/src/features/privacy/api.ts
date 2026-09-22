import type { AxiosResponse } from "axios";

import { waitFor } from "@/lib/api/delay";
import { createMockResponse } from "@/lib/api/mock-response";

export type PrivacySection = {
  readonly title: string;
  readonly body: string;
};

const privacySections: readonly PrivacySection[] = [
  {
    title: "Správce údajů",
    body: "Tyto zásady ochrany soukromí se vztahují na BRICKINVEST a tento web. Správcem údajů je [DOPLŇTE PRÁVNÍ SUBJEKT BRICKINVEST]. Sídlo: [DOPLŇTE ADRESU SÍDLA]. Registrační nebo daňové číslo: [DOPLŇTE ČÍSLO]. Kontakt pro ochranu soukromí: [DOPLŇTE E-MAIL]. Telefon: [DOPLŇTE TELEFON].",
  },
  {
    title: "Souhlas a tyto zásady",
    body: "Používáním webu nebo odesláním informací potvrzujete, že jste se se zásadami seznámili. Pokud je to nutné, BRICKINVEST si před příslušným zpracováním vyžádá souhlas. Marketingová komunikace, cookies, analytika a další činnosti založené na souhlasu se řídí volbou zaznamenanou prostřednictvím [DOPLŇTE MECHANISMUS SOUHLASU]. Souhlas lze kdykoli odvolat prostřednictvím [DOPLŇTE POSTUP ODVOLÁNÍ].",
  },
  {
    title: "Požadované a shromažďované informace",
    body: "V závislosti na používání BRICKINVEST mohou údaje zahrnovat kontaktní údaje, obsah dotazu, investiční preference, informace o používání webu, údaje o zařízení, logy a údaje o souhlasu. Přesná pole a zdroje jsou: [DOPLŇTE POTVRZENÉ KATEGORIE A ZDROJE]. Neodesílejte informace, které pro váš dotaz nejsou potřebné.",
  },
  {
    title: "Účely zpracování",
    body: "BRICKINVEST může informace zpracovávat za účelem odpovědí na dotazy, posouzení a představení vhodných realitních nebo investičních příležitostí, poskytování objednaných služeb, provozu a ochrany webu, správy údajů, plnění právních povinností a měření výkonu webu, pokud je to dovoleno. Další operace zpracování: [DOPLŇTE POTVRZENÉ OPERACE].",
  },
  {
    title: "Právní základ",
    body: "Právním základem jednotlivých činností může být souhlas, kroky provedené na vaši žádost, plnění smlouvy, právní povinnost nebo oprávněný zájem, který nepřevažuje nad vašimi právy. BRICKINVEST musí před zveřejněním doplnit tuto mapu: [DOPLŇTE TABULKU OPERACÍ A PRÁVNÍCH ZÁKLADŮ].",
  },
  {
    title: "Doba uchování",
    body: "Informace budou uchovávány pouze po dobu potřebnou pro příslušný účel a po dobu vyžadovanou právními, účetními, procesními nebo promlčecími lhůtami. Konkrétní lhůty nebo kritéria pro jednotlivé kategorie jsou: [DOPLŇTE POTVRZENÉ DOBY UCHOVÁVÁNÍ].",
  },
  {
    title: "Příjemci a mezinárodní přenosy",
    body: "Informace mohou být sdíleny s dodavateli jednajícími podle pokynů BRICKINVEST a v nezbytných či povolených případech s úřady nebo odbornými poradci. Kategorie zpracovatelů a cloudových dodavatelů jsou: [DOPLŇTE POTVRZENÉ DODAVATELE]. Mezinárodní přenosy a záruky jsou: [DOPLŇTE POTVRZENÉ ZEMĚ A ZÁRUKY].",
  },
  {
    title: "Vaše práva",
    body: "Podle platných právních předpisů můžete požádat o přístup k údajům, jejich opravu nebo výmaz, omezení a přenositelnost, vznést námitku proti zpracování a odvolat souhlas. Žádosti posílejte na [DOPLŇTE E-MAIL NEBO ZPŮSOB UPLATNĚNÍ PRÁV]. BRICKINVEST může požádat o [DOPLŇTE POŽADAVEK OVĚŘENÍ TOTOŽNOSTI] za účelem ochrany osobních údajů. Lhůty a omezení odpovědi se řídí platnými právními předpisy.",
  },
  {
    title: "Bezpečnost, cookies a analytika",
    body: "BRICKINVEST používá vhodná organizační a technická opatření k ochraně informací. Potvrzená bezpečnostní opatření jsou: [DOPLŇTE BEZPEČNOSTNÍ OPATŘENÍ]. Kategorie cookies, analytické nástroje, možnosti souhlasu a uchovávání jsou popsány v [DOPLŇTE ZÁSADY COOKIES / PODROBNOSTI SOUHLASU]. Aktuální nastavení analytiky a tagů: [DOPLŇTE POTVRZENÉ POSTUPY].",
  },
  {
    title: "Stížnosti, změny a kontakt",
    body: "Dotazy nebo žádosti lze posílat na [DOPLŇTE E-MAIL PRO OCHRANU SOUKROMÍ]. Obrátit se můžete také na příslušný dozorový úřad: [DOPLŇTE ÚŘAD A KONTAKTNÍ ÚDAJE]. Datum účinnosti: [DOPLŇTE DATUM]. Poslední aktualizace: [DOPLŇTE DATUM AKTUALIZACE]. Tento návrh vyžaduje před zveřejněním právní a provozní kontrolu včetně potvrzení všech údajů v závorkách.",
  },
];

export const getPrivacySections = async (
  signal: AbortSignal,
): Promise<AxiosResponse<readonly PrivacySection[]>> => {
  await waitFor(500, signal);
  return createMockResponse(privacySections);
};
