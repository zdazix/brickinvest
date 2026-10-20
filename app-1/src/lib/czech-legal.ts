export type CzechLegalSection = {
  readonly title: string;
  readonly paragraphs: readonly string[];
};

const companyDetails =
  "Web funguje pod značkou BRICKINVEST a provozuje jej společnost Unicom Innovaciones S.L., CIF B-05385919, Calle Nuestra Señora de Gracia, 26, bajo, Marbella (Málaga), 29602, Španělsko.";

export const czechPrivacySections: readonly CzechLegalSection[] = [
  {
    title: "Správce údajů",
    paragraphs: [
      companyDetails,
      "Tyto zásady vysvětlují, jak mohou být osobní údaje zpracovávány při návštěvě BRICKINVEST.ES, kontaktování týmu nebo odeslání poptávky týkající se nemovitostí a projektů.",
    ],
  },
  {
    title: "Jaké údaje shromažďujeme",
    paragraphs: [
      "Podle způsobu používání webu můžeme obdržet údaje z kontaktních, konzultačních, investičních a poptávkových formulářů, například jméno, e-mail, telefon, společnost nebo lokalitu, předmět, zprávu a informace o projektu.",
      "Můžeme také zpracovávat technické a uživatelské údaje, například IP adresu, informace o prohlížeči a zařízení, navštívené stránky a interakce. Cookies a podobné technologie jsou popsány v zásadách cookies.",
    ],
  },
  {
    title: "Jak osobní údaje používáme",
    paragraphs: [
      "Osobní údaje používáme k odpovědím na otázky a poptávky, organizaci konzultací, přípravě investičních návrhů nebo informací o projektech a komunikaci související s vaším dotazem.",
      "Údaje můžeme využívat také k provozu, zabezpečení a zlepšování webu, odhalování zneužití, plnění právních povinností a ochraně práv společnosti.",
    ],
  },
  {
    title: "Právní základy podle GDPR",
    paragraphs: [
      "Zpracování může být založeno na krocích provedených na vaši žádost, plnění smlouvy, právní povinnosti, oprávněném zájmu nebo souhlasu. Pokud je základem souhlas, můžete jej kdykoli odvolat.",
      "Bez poskytnutí potřebných údajů nemusíme být schopni vaši poptávku vyřídit.",
    ],
  },
  {
    title: "Sdílení a uchovávání",
    paragraphs: [
      "Můžeme využívat poskytovatele hostingu, zabezpečení, komunikace, analytiky a podpory. Obdrží pouze údaje potřebné k plnění svých úkolů.",
      "Doba uchování závisí na účelu zpracování, právních povinnostech a potřebě uplatnění nebo obhajoby nároků. Osobní údaje neprodáváme.",
    ],
  },
  {
    title: "Vaše práva",
    paragraphs: [
      "Můžete požádat o přístup k údajům, jejich opravu nebo výmaz, omezení a přenositelnost, vznést námitku proti zpracování a odvolat souhlas. Z důvodu ochrany údajů můžeme ověřit vaši totožnost.",
      "Můžete se také obrátit na Agencia Española de Protección de Datos (AEPD) nebo jiný příslušný dozorový úřad. Veřejný e-mail je třeba před zveřejněním doplnit: [PUBLIC CONTACT EMAIL TO BE CONFIRMED].",
    ],
  },
  {
    title: "Změny a datum účinnosti",
    paragraphs: [
      "Tyto zásady můžeme aktualizovat při změně webu, procesů, poskytovatelů, právních požadavků nebo provozních postupů. Datum účinnosti: 17. září 2026. Před zveřejněním by měl dokument zkontrolovat odborník na ochranu údajů ve Španělsku.",
    ],
  },
];

export const czechTermsSections: readonly CzechLegalSection[] = [
  {
    title: "Rozsah a přijetí",
    paragraphs: [
      "Tyto podmínky upravují přístup k BRICKINVEST.ES a používání informací, materiálů a poptávkových formulářů dostupných na webu. Používáním webu potvrzujete, že jste se s podmínkami seznámili.",
      "Podmínky se týkají pouze používání webu. Každá realitní, developerská, zprostředkovatelská nebo investiční transakce vyžaduje samostatnou písemnou smlouvu.",
    ],
  },
  { title: "Údaje společnosti", paragraphs: [companyDetails] },
  {
    title: "Informační charakter obsahu",
    paragraphs: [
      "Web obsahuje obecné informace o společnosti, realitních projektech a možných příležitostech. Projekty mohou být navrhované, analyzované nebo v realizaci a informace se mohou měnit.",
      "Před finančním, realitním nebo smluvním rozhodnutím proveďte vlastní analýzu a využijte nezávislé odborné poradenství.",
    ],
  },
  {
    title: "Bez poradenství, nabídky a záruky",
    paragraphs: [
      "Obsah webu nepředstavuje finanční, investiční, právní, daňové, účetní ani jiné odborné poradenství. Nejde o nabídku, doporučení ani záruku dostupnosti, příjmu nebo výnosu.",
      "Každá realitní a investiční příležitost nese riziko včetně možné ztráty kapitálu a vyžaduje samostatné posouzení a dokumentaci.",
    ],
  },
  {
    title: "Poptávky a formuláře",
    paragraphs: [
      "Odeslání formuláře nebo žádost o informace či konzultaci nevytváří smlouvu, rezervaci, zprostředkovatelský vztah ani investiční závazek.",
      "Transakce nebo služba se stává závaznou až po podpisu samostatné písemné smlouvy.",
    ],
  },
  {
    title: "Odpovědnost uživatele a duševní vlastnictví",
    paragraphs: [
      "Web používejte v souladu se zákonem a v dobré víře. Nesmíte narušovat jeho provoz, vkládat škodlivý kód, pokoušet se o neoprávněný přístup ani odesílat nezákonný obsah.",
      "Texty, design, značka, fotografie, software a další materiály patří společnosti nebo jsou používány na základě licence. Komerční použití bez písemného souhlasu je zakázáno.",
    ],
  },
  {
    title: "Rozhodné právo a kontakt",
    paragraphs: [
      "Podmínky se řídí právem Španělska při zachování kogentních práv spotřebitelů. Datum účinnosti: 17. září 2026. Veřejný e-mail je třeba před zveřejněním doplnit: [PUBLIC CONTACT EMAIL TO BE CONFIRMED].",
    ],
  },
];

export const czechCookiesSections: readonly CzechLegalSection[] = [
  {
    title: "Co jsou cookies",
    paragraphs: [
      "Cookies jsou malé textové soubory nebo podobné technologie, které může web uložit do zařízení nebo číst z prohlížeče. Mohou si pamatovat nastavení a podporovat fungování webu.",
      "Zásady cookies je třeba číst společně se zásadami ochrany soukromí a podmínkami používání webu.",
    ],
  },
  {
    title: "Identifikované technologie",
    paragraphs: [
      `${companyDetails} Kontrola aktuálního kódu neodhalila pojmenovanou cookie nastavenou aplikací ani integrovaného marketingového poskytovatele. Zvolený jazyk určuje kód v adrese stránky; jazyková volba se neukládá do localStorage ani do cookie.`,
      "Volitelná analytika může načítat Google Tag Manager nebo Google Analytics 4 pouze po konfiguraci identifikátorů a získání souhlasu.",
    ],
  },
  {
    title: "Nezbytné technologie",
    paragraphs: [
      "Nezbytné technologie lze používat bez souhlasu, pokud jsou nutné pro požadovanou funkci, komunikaci nebo zabezpečení. Neměly by sloužit k nezávislé analytice ani marketingu.",
      "Cookies infrastruktury, hostingu nebo zabezpečení musí provozovatel před zveřejněním této politiky zdokumentovat.",
    ],
  },
  {
    title: "Nastavení jazyka a analytika",
    paragraphs: [
      "Přepínač jazyka otevře stránku s odpovídajícím jazykovým kódem v adrese. Web si jazykovou volbu neukládá do místního úložiště prohlížeče.",
      "Volitelná analytika by měla zůstat vypnutá do získání samostatného informovaného souhlasu.",
    ],
  },
  {
    title: "Marketing a třetí strany",
    paragraphs: [
      "V kontrolovaném kódu nebyl identifikován marketingový tag, reklamní síť ani marketingová cookie třetí strany. Nové služby musí být do získání potřebného souhlasu blokovány.",
      "Před aktivací je třeba uvést poskytovatele, účel, technologie, dobu uchování, příjemce a záruky přenosů.",
    ],
  },
  {
    title: "Kontrola, práva a datum",
    paragraphs: [
      "Aplikace v současnosti neobsahuje viditelný banner souhlasu, centrum nastavení ani tlačítka pro přijetí, odmítnutí, konfiguraci a odvolání souhlasu. Jde o omezení implementace, nikoli o tvrzení, že souhlas byl získán.",
      "Datum účinnosti: 18. září 2026. Veřejný e-mail je třeba před zveřejněním doplnit: [PUBLIC CONTACT EMAIL TO BE CONFIRMED]. Dokument by měl zkontrolovat odborník na ochranu soukromí ve Španělsku.",
    ],
  },
];
