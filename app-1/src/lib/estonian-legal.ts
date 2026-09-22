export type EstonianLegalSection = {
  readonly title: string;
  readonly paragraphs: readonly string[];
};

const companyDetails =
  "Veebisaiti haldab BRICKINVESTi kaubamärgi all Unicom Innovaciones S.L., Hispaania maksukood CIF B-05385919, aadress Calle Nuestra Señora de Gracia, 26, bajo, Marbella (Málaga), 29602, Hispaania.";

export const estonianPrivacySections: readonly EstonianLegalSection[] = [
  {
    title: "Vastutav töötleja",
    paragraphs: [
      companyDetails,
      "See privaatsuspoliitika selgitab, kuidas võidakse isikuandmeid töödelda, kui külastate BRICKINVEST.ESi, võtate meeskonnaga ühendust või saadate päringu kinnisvara- ja arendusprojektide kohta.",
    ],
  },
  {
    title: "Milliseid isikuandmeid kogume",
    paragraphs: [
      "Sõltuvalt sellest, kuidas veebisaiti kasutate, võime saada andmeid, mille sisestate kontakti-, konsultatsiooni-, investeerimis- ja päringuvormidesse. Nende hulka võivad kuuluda nimi, e-posti aadress, telefoninumber, ettevõte või asukoht, teema, sõnum ja soovitud projektiteave.",
      "Samuti võidakse töödelda tehnilisi ja kasutusandmeid, näiteks IP-aadressi, brauseri- ja seadmeinfot, ligikaudseid tehnilisi asukohaandmeid, külastatud lehti, viiteallikat ja kasutusinteraktsioone. Küpsiseid ja sarnaseid tehnoloogiaid kirjeldatakse küpsiste poliitikas.",
    ],
  },
  {
    title: "Kuidas kasutame isikuandmeid",
    paragraphs: [
      "Kasutame isikuandmeid küsimustele ja päringutele vastamiseks, konsultatsioonide korraldamiseks, investeerimispakkumiste või projektiteabe ettevalmistamiseks, päringuga seotud suhtluse pidamiseks ja teie toetamise võimaluste hindamiseks.",
      "Samuti võime andmeid kasutada veebisaidi käitamiseks, kaitsmiseks, vigade parandamiseks ja täiustamiseks, suhtlusandmete säilitamiseks, väärkasutuse tuvastamiseks, õiguslike kohustuste täitmiseks ning ettevõtte õiguste kaitsmiseks.",
      "Päringuandmeid ei kasutata sõltumatuks turunduseks ilma sobiva õigusliku aluseta ja vajaduse korral teie nõusolekuta. Otseturundusele saate igal ajal vastu vaielda.",
    ],
  },
  {
    title: "Õiguslikud alused GDPRi järgi",
    paragraphs: [
      "Töötlemine võib olukorrast sõltuvalt põhineda teie päringu alusel võetavatel lepingueelsetel meetmetel, lepingu täitmisel, õiguslikul kohustusel, õigustatud huvil, näiteks päringutele vastamisel ja veebisaidi turvalisuse tagamisel, või teie nõusolekul.",
      "Kui töötlemine põhineb nõusolekul, saate selle igal ajal tagasi võtta. Tagasivõtmine ei mõjuta enne tagasivõtmist toimunud töötlemise õiguspärasust. Vajalike andmeteta ei pruugi meil olla võimalik päringut töödelda.",
    ],
  },
  {
    title: "Edastamine ja säilitamine",
    paragraphs: [
      "Võime kasutada majutuse, turvalisuse, suhtluse, analüüsi või päringute töötlemise teenusepakkujaid. Neile edastatakse ainult ülesande täitmiseks vajalikud andmed ning nad peavad järgima lepingulisi ja õiguslikke nõudeid.",
      "Säilitamise kestus sõltub töötlemise eesmärgist, õiguslikest kohustustest ja vajadusest nõudeid tõendada, esitada või kaitsta. Me ei müü isikuandmeid.",
    ],
  },
  {
    title: "Teie õigused",
    paragraphs: [
      "Teil on õigus taotleda juurdepääsu andmetele, nende parandamist või kustutamist, töötlemise piiramist ja andmete ülekandmist, esitada töötlemisele vastuväiteid või võtta nõusolek tagasi. Taotluse töötlemiseks võime kontrollida teie isikusamasust.",
      "Samuti saate pöörduda Hispaania andmekaitseameti (AEPD) või muu pädeva järelevalveasutuse poole. Avalikku kontakt-e-posti ei ole veel kinnitatud ja see tuleb enne avaldamist lisada: [PUBLIC CONTACT EMAIL TO BE CONFIRMED].",
    ],
  },
  {
    title: "Muudatused ja jõustumiskuupäev",
    paragraphs: [
      "Võime seda privaatsuspoliitikat muuta, kui muutuvad veebisait, töötlemisviisid, teenusepakkujad, õiguslikud nõuded või töökorraldus. Jõustumiskuupäev: 17. september 2026. Enne avaldamist peaks dokumendi üle vaatama Hispaanias tegutsev andmekaitseekspert.",
    ],
  },
];

export const estonianTermsSections: readonly EstonianLegalSection[] = [
  {
    title: "Kohaldamisala ja nõustumine",
    paragraphs: [
      "Need kasutustingimused reguleerivad teie juurdepääsu BRICKINVEST.ESile ning veebisaidil pakutava teabe, materjalide ja päringufunktsioonide kasutamist. Veebisaiti kasutades kinnitate, et olete tingimusi lugenud ja mõistate neid. Kui te ei nõustu, palun ärge veebisaiti kasutage.",
      "Tingimused kehtivad ainult veebisaidi kasutamisele. Kinnisvara-, arendus-, vahendus-, investeerimis- ja muude tehingute jaoks on vaja eraldi kirjalikku kokkulepet.",
    ],
  },
  { title: "Ettevõtte andmed", paragraphs: [companyDetails] },
  {
    title: "Sisu teabekohustus",
    paragraphs: [
      "Veebisait sisaldab üldist teavet ettevõtte, kinnisvaraga seotud projektide ja võimalike võimaluste kohta. Projektid võivad olla kavandatavad, ülevaatamisel või arendamisel; teave võib muutuda, olla ebatäielik või teie isiklikule olukorrale sobimatu.",
      "Enne finants-, kinnisvara- või lepingulise otsuse tegemist peaksite tegema iseseisva kontrolli ja küsima sõltumatut professionaalset nõu.",
    ],
  },
  {
    title: "Nõustamine, pakkumine ja garantii puuduvad",
    paragraphs: [
      "Veebisaidil olev teave ei kujuta endast finants-, investeerimis-, õigus-, maksu-, raamatupidamis-, hüpoteegi- ega muud professionaalset nõustamist. Sisu ei ole pakkumine, investeerimiskutse, soovitus ega garantii saadavuse, tulu, väärtuse kasvu või tootluse kohta.",
      "Iga kinnisvara- või investeerimisvõimalusega kaasnevad riskid, sealhulgas võimalik kapitalikadu, ning see eeldab eraldi kontrolli, kättesaadavust, tingimusi ja dokumentatsiooni.",
    ],
  },
  {
    title: "Päringud ja vormid",
    paragraphs: [
      "Vormi saatmine, teabe küsimine või konsultatsiooni taotlemine ei loo lepingut, broneeringut, agendisuhet ega investeerimiskohustust. Ettevõte võib päringu täpsustamiseks teiega ühendust võtta ulatuses, mida andmekaitseõigus lubab.",
      "Tehing või teenus muutub siduvaks alles eraldi kirjaliku kokkuleppega. Ettevõte võib päringu või võimaluse seadusega lubatud ulatuses tagasi lükata, peatada või lõpetada.",
    ],
  },
  {
    title: "Kasutaja vastutus ja intellektuaalomand",
    paragraphs: [
      "Peate veebisaiti kasutama seaduslikult ja heas usus. Te ei tohi häirida veebisaidi toimimist, sisestada pahatahtlikku koodi, proovida volitamata juurdepääsu, esineda teise isikuna ega edastada ebaseaduslikku või eksitavat teavet.",
      "Tekstid, kujundus, kaubamärgid, fotod, tarkvara ja muud materjalid kuuluvad ettevõttele või neid kasutatakse litsentsi alusel. Ilma eelneva kirjaliku loata ei tohi neid reprodutseerida, levitada, avaldada ega äriliselt kasutada, välja arvatud juhul, kui kohustuslik õigus näeb ette teisiti.",
    ],
  },
  {
    title: "Kättesaadavus, kolmandad osapooled ja muudatused",
    paragraphs: [
      "Ettevõte püüab hoida veebisaiti kättesaadava ja kasulikuna, kuid ei garanteeri katkestusteta, turvalist ega veatut juurdepääsu. Juurdepääsu võidakse tehnilistel, töökorralduslikel, turva- või õiguslikel põhjustel muuta või piirata.",
      "Lingid kolmandate osapoolte veebisaitidele, platvormidele või teenustele on mõeldud mugavuseks. Ettevõte ei kontrolli nende sisu, kättesaadavust, turvalisust, tingimusi ega privaatsustavasid.",
    ],
  },
  {
    title: "Kohaldatav õigus ja kontakt",
    paragraphs: [
      "Neid tingimusi reguleerib Hispaania õigus. Kohustuslikud tarbijakaitseõigused jäävad jõusse. Kui mõni säte osutub kehtetuks või jõustamatuks, kehtivad ülejäänud sätted seadusega lubatud ulatuses edasi.",
      "Jõustumiskuupäev: 17. september 2026. Õiguslikes küsimustes pöörduge Unicom Innovaciones S.L. poole; avalikku kontakt-e-posti ei ole veel kinnitatud: [PUBLIC CONTACT EMAIL TO BE CONFIRMED]. Enne avaldamist peaks dokumendi üle vaatama Hispaanias kvalifitseeritud jurist.",
    ],
  },
];

export const estonianCookiesSections: readonly EstonianLegalSection[] = [
  {
    title: "Mis on küpsised",
    paragraphs: [
      "Küpsised on väikesed tekstifailid või sarnased tehnoloogiad, mida veebisait võib teie seadmesse salvestada või brauserist lugeda. Need võivad meeles pidada seadeid, pakkuda funktsioone ja aidata mõista, kuidas veebisaiti kasutatakse.",
      "Seda küpsiste poliitikat tuleb lugeda koos privaatsuspoliitika ja kasutustingimustega.",
    ],
  },
  {
    title: "Praegu tuvastatud tehnoloogiad",
    paragraphs: [
      `${companyDetails} Praeguse koodi ülevaatus ei tuvastanud rakenduse seatud küpsist ega sisseehitatud turunduspakkujat. Valitud keel salvestatakse localStorage'is võtme brickinvest-locale all; see on brauseri salvestusruum, mitte küpsis.`,
      "Rakendus sisaldab nõusolekust sõltuvat analüüsikihti, mis võib Google Tag Manageri või Google Analytics 4 laadida ainult siis, kui mõõtmis-ID-d on seadistatud ja nõusolek antud. Kontrollitud töökeskkonnas ei ole selliseid ID-sid kinnitatud.",
    ],
  },
  {
    title: "Vajalikud ja tehnilised tehnoloogiad",
    paragraphs: [
      "Range vajadusega tehnoloogiaid võib kasutada ilma nõusolekuta, kui need on vajalikud selgesõnaliselt taotletud funktsiooni, side või turvalisuse jaoks. Neid ei tohi kasutada sõltumatul analüüsi- ega turunduseesmärgil.",
      "Kontrollitud rakenduse kood ei näita praegu nimelist vajalikku küpsist. Majutuse infrastruktuuri- või turvaküpsised peab vastutav operaator enne selle poliitika avaldamist dokumenteerima.",
    ],
  },
  {
    title: "Keele seaded ja analüüs",
    paragraphs: [
      "Keelevalik salvestatakse brauseri localStorage'i võtme brickinvest-locale alla ning selle saab kustutada brauseri saidiandmete seadete kaudu.",
      "Valikuline analüüs peab kuni eraldi informeeritud nõusoleku saamiseni olema välja lülitatud. Nõusolekut ei tohi tuletada veebisaidi edasisest külastamisest ega kerimisest.",
    ],
  },
  {
    title: "Turundus ja kolmandad osapooled",
    paragraphs: [
      "Kontrollitud koodis ei tuvastatud turundussilti, reklaamivõrgustikku ega kolmanda osapoole turundusküpsist. Selliste teenuste lisamisel tuleb need vajaduse korral blokeerida kuni kehtiva eelneva nõusoleku saamiseni.",
      "Enne aktiveerimist tuleb avalikustada teenusepakkuja, eesmärk, tehnoloogiad, säilitamise kestus, saajad ja rahvusvaheliste edastuste kaitsemeetmed.",
    ],
  },
  {
    title: "Kontrollid, õigused ja kuupäev",
    paragraphs: [
      "Kontrollitud rakendus ei sisalda praegu nähtavat bännerit, seadete keskust ega juhtnuppe küpsiste nõusoleku vastuvõtmiseks, tagasilükkamiseks, seadistamiseks või tagasivõtmiseks. See on rakenduse allesjäänud piirang, mitte väide, et nõusolek on kogutud.",
      "Küpsiste kohta küsimuste korral pöörduge Unicom Innovaciones S.L. poole. Avalikku kontakt-e-posti ei ole veel kinnitatud: [PUBLIC CONTACT EMAIL TO BE CONFIRMED]. Jõustumiskuupäev: 18. september 2026. Enne avaldamist peaks dokumendi üle vaatama Hispaanias tegutsev andmekaitseekspert.",
    ],
  },
];
