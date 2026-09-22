import type { AxiosResponse } from "axios";

import { waitFor } from "@/lib/api/delay";
import { createMockResponse } from "@/lib/api/mock-response";

export type PrivacySection = {
  readonly title: string;
  readonly body: string;
};

const privacySections: readonly PrivacySection[] = [
  {
    title: "Vastutav töötleja",
    body: "See privaatsuspoliitika kehtib BRICKINVESTi ja selle veebisaidi kohta. Vastutav juriidiline isik on [SISESTA BRICKINVESTi JURIIDILINE ÜKSUS]. Registrijärgne aadress: [SISESTA REGISTRIJÄRGNE AADRESS]. Registri- või maksukood: [SISESTA REGISTRI- VÕI MAKSUKOOD]. Privaatsuskontakt: [SISESTA PRIVAATSUSE E-POST]. Telefon: [SISESTA PRIVAATSUSE TELEFON].",
  },
  {
    title: "Nõusolek ja see poliitika",
    body: "Seda veebisaiti kasutades või teavet esitades kinnitate, et olete poliitikaga tutvunud. Kui nõusolek on vajalik, küsib BRICKINVEST seda enne vastavat töötlemist. Turundussuhtlus, küpsised, analüüs ja muud nõusolekupõhised tegevused järgivad [SISESTA NÕUSOLEKUMEHHANISM] kaudu salvestatud valikuid. Nõusoleku saab igal ajal tagasi võtta, kasutades [SISESTA TAGASIVÕTMISE KORD].",
  },
  {
    title: "Nõutud ja kogutud teave",
    body: "Sõltuvalt sellest, kuidas BRICKINVESTiga suhtlete, võivad andmed hõlmata kontaktandmeid, päringu sisu, investeerimiseelistusi, veebisaidi kasutusinfot, seadme- ja logiandmeid ning nõusolekuandmeid. Täpsed väljad ja kogumiskohad on: [SISESTA KINNITATUD ANDMEKATEGOORIAD JA ALLIKAD]. Ärge esitage oma päringu jaoks mittevajalikku teavet.",
  },
  {
    title: "Töötlemise eesmärgid",
    body: "BRICKINVEST võib töödelda teavet päringutele vastamiseks, sobivate kinnisvara- või investeerimisvõimaluste hindamiseks ja tutvustamiseks, soovitud teenuste osutamiseks, veebisaidi käitamiseks ja turvamiseks, andmete haldamiseks, õiguslike kohustuste täitmiseks ning veebisaidi toimivuse mõõtmiseks, kui see on lubatud. Täiendavad töötlemistoimingud: [SISESTA KINNITATUD TÖÖTLEMISTOIMINGUD].",
  },
  {
    title: "Õiguslik alus",
    body: "Iga toimingu õiguslik alus võib olla nõusolek, teie taotlusel astutud sammud, lepingu täitmine, õigusliku kohustuse täitmine või õigustatud huvi, mis ei kaalu üles teie õigusi. BRICKINVEST peab enne avaldamist selle kaardistamise lõpetama: [SISESTA TÖÖTLEMISTOIMINGUTE JA ÕIGUSLIKE ALUSTE TABEL].",
  },
  {
    title: "Säilitamine",
    body: "Teavet säilitatakse ainult nii kaua, kui see on vajalik vastava eesmärgi ning kohaldatava õigusliku, raamatupidamisliku, vaidlus- või aegumistähtaja jaoks. Iga kategooria konkreetsed tähtajad või kriteeriumid on: [SISESTA KINNITATUD SÄILITAMISTÄHTAJAD].",
  },
  {
    title: "Saajad ja rahvusvahelised edastused",
    body: "Teavet võidakse jagada BRICKINVESTi juhiste alusel tegutsevate teenusepakkujatega ning vajaduse või loa korral ametiasutuste või professionaalsete nõustajatega. Volitatud töötlejate ja pilveteenuse pakkujate kategooriad on: [SISESTA KINNITATUD VOLITATUD TÖÖTLEJAD / PILVETEENUSE PAKKUJAD]. Rahvusvahelised edastused ja nende kaitsemeetmed on: [SISESTA KINNITATUD EDASTAMISASUKOHAD JA KAITSEMEETMED].",
  },
  {
    title: "Teie õigused",
    body: "Kohaldatava õiguse alusel võite taotleda juurdepääsu andmetele, nende parandamist või kustutamist, töötlemise piiramist ja ülekandmist, esitada töötlemisele vastuväiteid ning võtta nõusoleku tagasi. Taotlused tuleb saata aadressil või viisil [SISESTA ÕIGUSTE TAOTLEMISE E-POST VÕI MEETOD]. BRICKINVEST võib isikuandmete kaitsmiseks nõuda [SISESTA ISIKUSAMASUSE KONTROLLI NÕUE]. Vastamise tähtajad ja piirangud tulenevad kohaldatavast õigusest.",
  },
  {
    title: "Turvalisus, küpsised ja analüüs",
    body: "BRICKINVEST rakendab teabe kaitsmiseks asjakohaseid organisatsioonilisi ja tehnilisi meetmeid. Kinnitatud kaitsemeetmed on: [SISESTA TURVAMEETMED]. Küpsiste kategooriaid, analüüsitööriistu, nõusolekuseadeid ja säilitamist kirjeldatakse dokumendis [SISESTA KÜPSISTE POLIITIKA / NÕUSOLEKU ÜKSIKASJAD]. Praegune analüüsi- ja sildikonfiguratsioon: [SISESTA KINNITATUD PRAKTIKAD].",
  },
  {
    title: "Kaebused, muudatused ja kontakt",
    body: "Küsimused või taotlused võib saata aadressile [SISESTA PRIVAATSUSE E-POST]. Samuti võite pöörduda pädeva järelevalveasutuse poole: [SISESTA JÄRELEVALVEASUTUS JA KONTAKTANDMED]. Jõustumiskuupäev: [SISESTA JÕUSTUMISKUUPÄEV]. Viimati uuendatud: [SISESTA UUENDAMISE KUUPÄEV]. See kavand vajab enne avaldamist õiguslikku ja töökorralduslikku ülevaatust, sealhulgas kõigi nurksulgudes olevate andmete kinnitamist.",
  },
];

export const getPrivacySections = async (
  signal: AbortSignal,
): Promise<AxiosResponse<readonly PrivacySection[]>> => {
  await waitFor(500, signal);
  return createMockResponse(privacySections);
};
