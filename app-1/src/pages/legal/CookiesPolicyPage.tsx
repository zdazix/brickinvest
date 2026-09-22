import { Link } from "@tanstack/react-router";
import { useEffect } from "react";

import { PageIntro } from "@/components/ui/PageIntro";
import { polishCookiesSections } from "@/lib/polish-legal";
import { useLocale } from "@/lib/i18n";

type CookiesSection = {
  readonly title: string;
  readonly paragraphs: readonly string[];
};

const cookiesSections: readonly CookiesSection[] = [
  {
    title: "What cookies are",
    paragraphs: [
      "Cookies are small text files or similar technologies that a website may store on your device or read from your browser. They can help a website remember a setting, provide a requested function, understand how the site is used or support other purposes described in a cookie notice.",
      "This Cookies Policy explains the cookie and similar-technology position identified in the current BRICKINVEST.ES application. It should be read together with the Privacy Policy and Website Terms & Conditions.",
    ],
  },
  {
    title: "Controller identity",
    paragraphs: [
      "The controller for personal data processed through cookies or similar technologies is Unicom Innovaciones S.L., trading under the BRICKINVEST name, with Spanish tax identification number (CIF) B-05385919 and address at Calle Nuestra Señora de Gracia, 26, bajo, Marbella (Málaga), 29602, Spain.",
      "The Company is responsible for the BRICKINVEST.ES website, subject to the role of any third-party provider that may process information through a service it operates.",
    ],
  },
  {
    title: "Cookies currently identified",
    paragraphs: [
      "A review of the current application source did not identify an application-set cookie name or an embedded marketing-cookie provider. The application currently stores the selected language as localStorage under the key `brickinvest-locale`; this is browser storage, not a cookie. No cookie should be inferred from that storage key.",
      "The application includes a consent-gated analytics integration that can load Google Tag Manager and/or Google Analytics 4 only when deployment identifiers are provided and an analytics-consent event is granted. No such identifiers or environment files are present in the reviewed application workspace, and no analytics or marketing cookie name can therefore be confirmed as currently installed from the source alone.",
      "This is a source-code inventory, not a substitute for checking the live production domain and each deployment configuration. If a deployment adds a provider, tag or cookie, this policy and the cookie inventory must be updated before that technology is enabled.",
    ],
  },
  {
    title: "Necessary and technical technologies",
    paragraphs: [
      "Strictly necessary technologies may be used without consent when they are required to provide a service you have expressly requested, transmit a communication or enable a function you have asked for. They should be limited to that purpose and should not be used for unrelated analytics or marketing.",
      "The reviewed application does not currently declare a named necessary cookie. The router, navigation, form flows and language preference currently operate without an identified application cookie. Any infrastructure cookie that is required by hosting or security should be documented by the responsible production operator before publication of this policy.",
    ],
  },
  {
    title: "Preferences and language settings",
    paragraphs: [
      "The language selector stores the selected locale in browser localStorage under `brickinvest-locale`. It is used to remember a display preference and is not a cookie. You can remove it through your browser’s site-data controls; the site may then return to its default language selection.",
      "No separate preference cookie or preference-management provider is currently identified in the reviewed application source.",
    ],
  },
  {
    title: "Analytics and measurement",
    paragraphs: [
      "The application contains an optional, consent-gated analytics layer. It is designed not to load Google Tag Manager or Google Analytics 4 scripts and not to send measurement events until the application receives an analytics-consent signal. The reviewed source does not contain a configured measurement ID, so no active analytics provider, cookie name or retention period can be confirmed for the current workspace.",
      "If analytics is enabled in a deployment, the provider, purpose, cookie names, retention periods, international transfers and applicable safeguards must be identified in the consent interface and this policy. Analytics consent must be separate from necessary functionality and must not be assumed from continued browsing.",
    ],
  },
  {
    title: "Marketing and third-party cookies",
    paragraphs: [
      "No marketing tag, advertising network or third-party marketing cookie is currently identified in the reviewed application source. The Company does not intend to set optional marketing cookies through the current implementation described here.",
      "If third-party content, advertising, social media tools or other optional providers are added, they must be blocked until valid prior consent is obtained where required. Their identity, purposes, cookie names, storage periods, recipients and transfer safeguards must be disclosed before activation.",
    ],
  },
  {
    title: "Legal basis and consent",
    paragraphs: [
      "Under Article 22.2 of Spain’s Ley 34/2002 de Servicios de la Sociedad de la Información y del Comercio Electrónico (LSSI-CE), and the applicable AEPD guidance, strictly necessary technologies may be used where the relevant exemption applies. Non-essential cookies and similar technologies require prior, informed and freely given consent before they are installed or read.",
      "Consent must be specific, granular, informed and as easy to refuse as to accept. A valid design should provide equally visible Accept and Reject options, a way to Configure choices by purpose, and a way to Withdraw consent later. Consent should not be bundled with unrelated forms or inferred from scrolling, browsing or silence.",
    ],
  },
  {
    title: "Consent controls and current limitation",
    paragraphs: [
      "The reviewed application does not currently contain a cookie-consent banner, preference center or visible Accept, Reject, Configure or Withdraw controls. This is a remaining implementation limitation, not a claim that consent has been collected. The consent-gated analytics hook in the source is not by itself a user-facing consent mechanism.",
      "Until a compliant consent interface and production cookie inventory are implemented, optional analytics, marketing and third-party cookies should remain disabled. Once implemented, you should be able to accept or reject optional categories with equal prominence, configure granular choices and reopen the settings to withdraw consent. You can also delete existing site data or block cookies through your browser settings, although blocking necessary technologies may affect site functionality.",
    ],
  },
  {
    title: "Storage periods and international transfers",
    paragraphs: [
      "No application cookie storage period can currently be confirmed because no application-set cookie is declared in the reviewed source. The `brickinvest-locale` localStorage value remains until it is removed by the user, cleared by the browser or replaced by the application. Any future cookie inventory must state each cookie’s duration and whether it is a session or persistent technology.",
      "If a future provider processes cookie or device information outside the European Economic Area, the transfer must have a lawful basis and appropriate safeguards under applicable data protection law, such as an adequacy decision or approved standard contractual clauses where appropriate. The provider and safeguards must be disclosed before activation.",
    ],
  },
  {
    title: "Your rights and the Privacy Policy",
    paragraphs: [
      "Where cookie or similar-technology data identifies or can reasonably be linked to you, you may have rights under applicable data protection law, including access, rectification, erasure, restriction, objection, portability and withdrawal of consent. Details about how personal data is handled and how to contact the controller are provided in the Privacy Policy.",
      "You may also complain to the Agencia Española de Protección de Datos (AEPD) or another competent supervisory authority. Browser controls can help you delete or block stored technologies, but they do not replace a lawful consent mechanism where one is required.",
    ],
  },
  {
    title: "Changes to this policy",
    paragraphs: [
      "We may update this Cookies Policy when the Website, its technologies, providers, consent practices or applicable law changes. The current version will be identified by its effective date. Material changes to optional technologies should be accompanied by appropriate information and, where required, a new consent choice.",
    ],
  },
  {
    title: "Contact and legal notice",
    paragraphs: [
      "For questions about cookies or to request information about the technologies used on BRICKINVEST.ES, contact Unicom Innovaciones S.L. at Calle Nuestra Señora de Gracia, 26, bajo, Marbella (Málaga), 29602, Spain. The public contact email address has not been confirmed in the current website content and must be added before publication: [PUBLIC CONTACT EMAIL TO BE CONFIRMED].",
      "Effective date: 18 September 2026. This Cookies Policy is a legal draft and is not a substitute for review by a Spanish-qualified lawyer or privacy professional, including a check of the live production domain, hosting layer, deployment variables and any future third-party providers.",
    ],
  },
];

const spanishCookiesSections: readonly CookiesSection[] = [
  {
    title: "Qué son las cookies",
    paragraphs: [
      "Las cookies son pequeños archivos de texto o tecnologías similares que un sitio puede guardar en tu dispositivo o leer desde el navegador. Pueden recordar una configuración, prestar una función, entender el uso del sitio u otros fines descritos en un aviso de cookies.",
      "Esta política explica la situación identificada en BRICKINVEST.ES y debe leerse junto con la Política de privacidad y los Términos y condiciones.",
    ],
  },
  {
    title: "Identidad del responsable",
    paragraphs: [
      "El responsable de los datos tratados mediante cookies o tecnologías similares es Unicom Innovaciones S.L., bajo la marca BRICKINVEST, con CIF B-05385919 y domicilio en Calle Nuestra Señora de Gracia, 26, bajo, Marbella (Málaga), 29602, España.",
      "La empresa es responsable del sitio BRICKINVEST.ES, sin perjuicio del papel de los proveedores terceros que operen sus propios servicios.",
    ],
  },
  {
    title: "Cookies identificadas actualmente",
    paragraphs: [
      "La revisión del código actual no ha identificado un nombre de cookie creado por la aplicación ni un proveedor de marketing integrado. La aplicación guarda el idioma seleccionado en localStorage con la clave `brickinvest-locale`; esto es almacenamiento del navegador, no una cookie.",
      "Existe una integración de analítica condicionada al consentimiento que podría cargar Google Tag Manager o Google Analytics 4 solo si se configuran identificadores de despliegue y se recibe una señal de consentimiento. No hay identificadores ni archivos de entorno en el workspace revisado, por lo que no se confirma ninguna cookie de analítica o marketing.",
      "Este inventario procede del código y debe completarse con un escaneo del navegador en producción y con la configuración de cada despliegue.",
    ],
  },
  {
    title: "Tecnologías necesarias y técnicas",
    paragraphs: [
      "Las tecnologías estrictamente necesarias pueden utilizarse sin consentimiento cuando resulten imprescindibles para prestar un servicio solicitado, transmitir una comunicación o habilitar una función solicitada. Deben limitarse a ese fin y no utilizarse para analítica o marketing.",
      "El código revisado no declara actualmente una cookie necesaria con nombre. Cualquier cookie de infraestructura, alojamiento o seguridad debe documentarse antes de publicar esta política.",
    ],
  },
  {
    title: "Preferencias e idioma",
    paragraphs: [
      "El selector de idioma guarda el idioma elegido en localStorage bajo `brickinvest-locale`. Se utiliza para recordar una preferencia y no es una cookie. Puedes eliminarlo desde los controles de datos del sitio del navegador.",
      "No se ha identificado una cookie independiente de preferencias ni un proveedor de gestión de preferencias.",
    ],
  },
  {
    title: "Analítica y medición",
    paragraphs: [
      "La aplicación contiene una capa opcional de analítica condicionada al consentimiento. Está diseñada para no cargar Google Tag Manager o Google Analytics 4 ni enviar eventos hasta recibir una señal de consentimiento. No se ha configurado ningún identificador de medición en el workspace revisado.",
      "Si se activa la analítica, deberán identificarse en el consentimiento y en esta política el proveedor, finalidad, nombres, duración, transferencias y garantías. El consentimiento de analítica debe ser independiente y no presumirse por navegar.",
    ],
  },
  {
    title: "Cookies de marketing y terceros",
    paragraphs: [
      "No se ha identificado en el código un tag de marketing, red publicitaria ni cookie de marketing de terceros. La implementación actual no pretende establecer cookies opcionales de marketing.",
      "Si se añaden contenidos, publicidad, redes sociales u otros proveedores, deben bloquearse hasta obtener consentimiento previo válido cuando sea necesario y documentar sus datos, finalidades, duración, destinatarios y garantías.",
    ],
  },
  {
    title: "Base legal y consentimiento",
    paragraphs: [
      "Conforme al artículo 22.2 de la Ley 34/2002 (LSSI-CE) y las recomendaciones aplicables de la AEPD, las tecnologías estrictamente necesarias pueden quedar exentas cuando corresponda. Las tecnologías no esenciales requieren consentimiento previo, informado y libre antes de instalarse o leerse.",
      "El consentimiento debe ser específico, granular, informado y tan fácil de rechazar como de aceptar. El diseño debe ofrecer opciones igualmente visibles de Aceptar y Rechazar, configuración por finalidad y una forma de retirar el consentimiento. No debe presumirse por desplazarse, navegar o guardar silencio.",
    ],
  },
  {
    title: "Controles de consentimiento y limitación actual",
    paragraphs: [
      "La aplicación revisada no contiene actualmente banner, centro de preferencias ni controles visibles de Aceptar, Rechazar, Configurar o Retirar. Es una limitación pendiente, no una afirmación de que se haya recogido consentimiento. El hook técnico de analítica no es por sí mismo un mecanismo de consentimiento para usuarios.",
      "Hasta implementar una interfaz conforme y completar el inventario de producción, las cookies opcionales de analítica, marketing y terceros deben permanecer desactivadas. El navegador también permite borrar o bloquear datos, aunque bloquear tecnologías necesarias puede afectar al funcionamiento.",
    ],
  },
  {
    title: "Duración y transferencias internacionales",
    paragraphs: [
      "No se puede confirmar actualmente la duración de ninguna cookie de la aplicación porque el código no declara cookies propias. El valor `brickinvest-locale` permanece en localStorage hasta que el usuario, el navegador o la aplicación lo eliminen o sustituyan. Todo inventario futuro debe indicar duración y si cada tecnología es de sesión o persistente.",
      "Si un proveedor futuro trata datos fuera del Espacio Económico Europeo, la transferencia deberá contar con base legal y garantías adecuadas, como decisión de adecuación o cláusulas contractuales tipo cuando corresponda.",
    ],
  },
  {
    title: "Tus derechos y la Política de privacidad",
    paragraphs: [
      "Cuando los datos de cookies o tecnologías similares te identifiquen o puedan vincularse razonablemente contigo, puedes tener derechos de acceso, rectificación, supresión, limitación, oposición, portabilidad y retirada del consentimiento. La Política de privacidad explica el tratamiento y el contacto.",
      "También puedes reclamar ante la AEPD u otra autoridad competente. Los controles del navegador ayudan a borrar o bloquear tecnologías, pero no sustituyen un mecanismo legal de consentimiento cuando sea necesario.",
    ],
  },
  {
    title: "Cambios de esta política",
    paragraphs: [
      "Podemos actualizar esta política cuando cambien el sitio, sus tecnologías, proveedores, prácticas de consentimiento o la ley. La versión vigente se identificará por su fecha. Los cambios importantes deberán acompañarse de información adecuada y, cuando sea necesario, una nueva elección de consentimiento.",
    ],
  },
  {
    title: "Contacto y aviso legal",
    paragraphs: [
      "Para preguntas sobre cookies o para solicitar información sobre las tecnologías de BRICKINVEST.ES, contacta con Unicom Innovaciones S.L. en Calle Nuestra Señora de Gracia, 26, bajo, Marbella (Málaga), 29602, España. El email público no ha sido confirmado y debe añadirse antes de publicar: [PUBLIC CONTACT EMAIL TO BE CONFIRMED].",
      "Fecha de entrada en vigor: 18 de septiembre de 2026. Esta Política de cookies es un borrador legal y no sustituye la revisión de un abogado o profesional de privacidad en España, incluido un escaneo del dominio de producción, la infraestructura y las variables de despliegue.",
    ],
  },
];

const swedishCookiesSections: readonly CookiesSection[] = [
  {
    title: "Vad cookies är",
    paragraphs: [
      "Cookies är små textfiler eller liknande teknik som en webbplats kan spara på din enhet eller läsa i webbläsaren. De kan komma ihåg inställningar, tillhandahålla funktioner eller hjälpa till att förstå hur webbplatsen används.",
      "Policyn ska läsas tillsammans med integritetspolicyn och webbplatsvillkoren.",
    ],
  },
  {
    title: "Ansvarig organisation",
    paragraphs: [
      "Ansvarig för behandlingen genom cookies och liknande teknik är Unicom Innovaciones S.L., under varumärket BRICKINVEST, med CIF B-05385919 och adress Calle Nuestra Señora de Gracia, 26, bajo, Marbella (Málaga), 29602, Spanien.",
      "Företaget ansvarar för BRICKINVEST.ES, utan att detta ändrar tredje parts ansvar för deras egna tjänster.",
    ],
  },
  {
    title: "Cookies som för närvarande identifierats",
    paragraphs: [
      "Genomgången av den aktuella koden har inte identifierat något cookienamn som skapas av applikationen eller någon integrerad marknadsföringsleverantör. Språkvalet sparas i localStorage med nyckeln `brickinvest-locale`; detta är webbläsarlagring och inte en cookie.",
      "Det finns ett samtyckesberoende analyslager som kan ladda Google Tag Manager eller Google Analytics 4 endast om mät-ID:n konfigureras och samtycke lämnas. Inga sådana ID:n eller miljövariabler har bekräftats i workspace-granskningen, så inga analys- eller marknadsföringscookies bekräftas.",
      "Inventeringen kommer från koden och måste kompletteras med en webbläsarskanning i produktion och kontroll av varje deployment.",
    ],
  },
  {
    title: "Nödvändiga och tekniska cookies",
    paragraphs: [
      "Strikt nödvändig teknik kan användas utan samtycke när den krävs för en efterfrågad tjänst, kommunikation eller funktion. Den ska begränsas till detta ändamål och inte användas för analys eller marknadsföring.",
      "Den granskade koden deklarerar för närvarande ingen namngiven nödvändig cookie. Cookies från hosting, infrastruktur eller säkerhet måste dokumenteras före publicering.",
    ],
  },
  {
    title: "Inställningar och språk",
    paragraphs: [
      "Språkvalet sparas i localStorage under `brickinvest-locale` för att komma ihåg en preferens. Det är inte en cookie och kan raderas via webbläsarens datakontroller.",
      "Ingen separat cookie eller leverantör för inställningshantering har identifierats.",
    ],
  },
  {
    title: "Analys och mätning",
    paragraphs: [
      "Applikationen innehåller ett valfritt analyslager som är beroende av samtycke. Det är utformat för att inte ladda Google Tag Manager eller Google Analytics 4 och inte skicka händelser innan en samtyckessignal finns. Inget mät-ID är konfigurerat i den granskade miljön.",
      "Om analys aktiveras måste leverantör, ändamål, namn, lagring, överföringar och skydd anges i samtycket och policyn. Analytiskt samtycke ska vara separat och får inte antas genom surfning.",
    ],
  },
  {
    title: "Marknadsföring och tredje part",
    paragraphs: [
      "Ingen marknadsföringstagg, annonsnätverk eller tredjepartscookie för marknadsföring har identifierats i koden. Den nuvarande implementationen är inte avsedd att sätta valfria marknadsföringscookies.",
      "Om sociala medier, annonser eller andra leverantörer läggs till ska de blockeras tills giltigt samtycke har lämnats när det krävs, och deras ändamål, lagring, mottagare och skydd ska dokumenteras.",
    ],
  },
  {
    title: "Rättslig grund och samtycke",
    paragraphs: [
      "Enligt artikel 22.2 i spanska LSSI-CE och tillämpliga AEPD-rekommendationer kan strikt nödvändig teknik vara undantagen när den behövs. Icke nödvändig teknik kräver informerat, frivilligt och förhandslämnat samtycke.",
      "Samtycket ska vara specifikt, tydligt och lika lätt att avvisa som att acceptera, med inställningar per ändamål och möjlighet att återkalla. Det får inte antas genom scrollning, surfning eller tystnad.",
    ],
  },
  {
    title: "Samtyckeskontroller och aktuell begränsning",
    paragraphs: [
      "Den granskade applikationen innehåller för närvarande ingen banner, inställningspanel eller synliga kontroller för att acceptera, avvisa, konfigurera eller återkalla. Detta är en kvarstående implementationbegränsning, inte ett påstående om att samtycke har samlats in.",
      "Tills en korrekt kontroll och en fullständig produktionsinventering finns ska valfria analys-, marknadsförings- och tredjepartscookies vara avstängda. Webbläsaren kan också radera eller blockera data, men blockering av nödvändig teknik kan påverka funktioner.",
    ],
  },
  {
    title: "Lagringstid och internationella överföringar",
    paragraphs: [
      "Ingen lagringstid för en applikationscookie kan bekräftas eftersom koden inte deklarerar egna cookies. Värdet `brickinvest-locale` finns i localStorage tills användaren, webbläsaren eller applikationen tar bort eller ersätter det. Framtida inventering ska ange lagringstid och om teknik är sessionsbaserad eller beständig.",
      "Om en framtida leverantör behandlar uppgifter utanför EES ska överföringen ha laglig grund och lämpliga skydd, exempelvis adekvansbeslut eller standardavtalsklausuler.",
    ],
  },
  {
    title: "Dina rättigheter och integritetspolicyn",
    paragraphs: [
      "När cookie- eller teknikuppgifter kan kopplas till dig kan du ha rätt till tillgång, rättelse, radering, begränsning, invändning, dataportabilitet och återkallelse av samtycke. Integritetspolicyn beskriver behandlingen och kontaktvägen.",
      "Du kan även lämna klagomål till AEPD eller annan behörig myndighet. Webbläsarkontroller hjälper dig att radera eller blockera teknik men ersätter inte ett lagligt samtyckesförfarande när det krävs.",
    ],
  },
  {
    title: "Ändringar av policyn",
    paragraphs: [
      "Vi kan uppdatera policyn när webbplatsen, tekniken, leverantörer, samtyckesrutiner eller lagen ändras. Den aktuella versionen anges med datum. Viktiga ändringar ska åtföljas av lämplig information och vid behov ett nytt samtycke.",
    ],
  },
  {
    title: "Kontakt och juridisk information",
    paragraphs: [
      "För frågor om cookies eller BRICKINVEST.ES teknik, kontakta Unicom Innovaciones S.L. på Calle Nuestra Señora de Gracia, 26, bajo, Marbella (Málaga), 29602, Spanien. Den offentliga e-postadressen är inte bekräftad och måste läggas till före publicering: [PUBLIC CONTACT EMAIL TO BE CONFIRMED].",
      "Ikraftträdande: 18 september 2026. Detta är ett juridiskt utkast och ersätter inte granskning av jurist eller dataskyddsexpert i Spanien, inklusive skanning av produktionens domän och deployment-konfiguration.",
    ],
  },
];

const ukrainianCookiesSections: readonly CookiesSection[] = [
  {
    title: "Що таке файли cookie",
    paragraphs: [
      "Файли cookie — це невеликі текстові файли або подібні технології, які сайт може зберігати на вашому пристрої або зчитувати з браузера. Вони можуть запам’ятовувати налаштування, забезпечувати потрібну функцію, допомагати розуміти використання сайту або виконувати інші цілі, описані в повідомленні про cookie.",
      "Ця політика пояснює ситуацію з cookie та подібними технологіями, виявлену в поточному застосунку BRICKINVEST.ES. Її слід читати разом із Політикою конфіденційності та Умовами вебсайту.",
    ],
  },
  {
    title: "Відомості про відповідальну особу",
    paragraphs: [
      "Відповідальною особою за персональні дані, що обробляються через cookie або подібні технології, є Unicom Innovaciones S.L., яка працює під брендом BRICKINVEST, CIF B-05385919, адреса: Calle Nuestra Señora de Gracia, 26, bajo, Marbella (Málaga), 29602, Іспанія.",
      "Компанія відповідає за сайт BRICKINVEST.ES з урахуванням ролі будь-якого стороннього постачальника, який може обробляти інформацію через власний сервіс.",
    ],
  },
  {
    title: "Виявлені на цей момент cookie",
    paragraphs: [
      "Перевірка поточного коду не виявила назви cookie, яку створює застосунок, або вбудованого постачальника маркетингових cookie. Обрана мова зберігається в localStorage браузера за ключем `brickinvest-locale`; це сховище браузера, а не cookie.",
      "Застосунок містить аналітичну інтеграцію, яка залежить від згоди та може завантажувати Google Tag Manager і/або Google Analytics 4 лише після надання ідентифікаторів розгортання та отримання сигналу згоди. У перевіреному робочому просторі таких ідентифікаторів або файлів середовища немає, тому активні аналітичні чи маркетингові cookie не підтверджені лише на підставі коду.",
      "Це інвентаризація вихідного коду, а не заміна перевірки робочого домену та налаштувань кожного розгортання. Якщо розгортання додає постачальника, тег або cookie, цю політику потрібно оновити до активації технології.",
    ],
  },
  {
    title: "Необхідні та технічні технології",
    paragraphs: [
      "Суворо необхідні технології можуть використовуватися без згоди, коли вони потрібні для надання прямо запитаної послуги, передавання повідомлення або забезпечення функції, яку ви попросили. Їх слід обмежувати цією метою та не використовувати для непов’язаної аналітики чи маркетингу.",
      "Перевірений застосунок наразі не декларує іменовану необхідну cookie. Маршрутизація, навігація, форми та збереження мовних налаштувань працюють без виявленої cookie застосунку. Будь-яку інфраструктурну cookie хостингу або безпеки відповідальний оператор має задокументувати до публікації цієї політики.",
    ],
  },
  {
    title: "Налаштування та мова",
    paragraphs: [
      "Перемикач мови зберігає вибрану локаль у localStorage браузера під ключем `brickinvest-locale`. Він використовується для запам’ятовування мовної переваги й не є cookie. Видалити його можна через налаштування даних сайту в браузері.",
      "У перевіреному коді окрему cookie налаштувань або постачальника керування налаштуваннями не виявлено.",
    ],
  },
  {
    title: "Аналітика та вимірювання",
    paragraphs: [
      "Застосунок містить необов’язковий аналітичний шар, що залежить від згоди. Він спроєктований так, щоб не завантажувати скрипти Google Tag Manager або Google Analytics 4 і не надсилати вимірювальні події до отримання сигналу згоди. У перевіреному коді немає налаштованого ідентифікатора вимірювання.",
      "Якщо аналітику буде активовано, у вікні згоди та цій політиці потрібно вказати постачальника, мету, назви cookie, строки зберігання, міжнародні передачі та гарантії. Згода на аналітику має бути окремою й не може вважатися наданою через продовження перегляду сайту.",
    ],
  },
  {
    title: "Маркетингові та сторонні cookie",
    paragraphs: [
      "У перевіреному коді не виявлено маркетингового тегу, рекламної мережі або сторонньої маркетингової cookie. Поточна реалізація не призначена для встановлення необов’язкових маркетингових cookie.",
      "Якщо буде додано сторонній контент, рекламу, інструменти соціальних мереж або інших необов’язкових постачальників, їх потрібно блокувати до отримання чинної попередньої згоди, коли вона потрібна. До активації слід розкрити їхню назву, цілі, cookie, строки зберігання, отримувачів і гарантії передачі.",
    ],
  },
  {
    title: "Правова підстава та згода",
    paragraphs: [
      "Відповідно до статті 22.2 іспанського Закону 34/2002 (LSSI-CE) та застосовних рекомендацій AEPD, суворо необхідні технології можуть використовуватися без згоди, якщо діє відповідний виняток. Необов’язкові cookie та подібні технології потребують попередньої, поінформованої та вільно наданої згоди до їх встановлення або зчитування.",
      "Згода має бути конкретною, деталізованою, поінформованою та такою ж простою для відхилення, як і для прийняття. Інтерфейс має містити однаково помітні варіанти «Прийняти» і «Відхилити», налаштування за цілями та можливість відкликати згоду. Згоду не можна виводити з прокручування, навігації або мовчання.",
    ],
  },
  {
    title: "Елементи керування згодою та поточне обмеження",
    paragraphs: [
      "Перевірений застосунок наразі не містить банера згоди на cookie, центру налаштувань або видимих елементів «Прийняти», «Відхилити», «Налаштувати» чи «Відкликати». Це невирішене обмеження реалізації, а не твердження про те, що згоду вже отримано. Технічний аналітичний хук сам по собі не є користувацьким механізмом згоди.",
      "До впровадження відповідного інтерфейсу та повної інвентаризації робочого середовища необов’язкові аналітичні, маркетингові та сторонні cookie мають залишатися вимкненими. Видалити або заблокувати дані можна також у налаштуваннях браузера, хоча блокування необхідних технологій може вплинути на роботу сайту.",
    ],
  },
  {
    title: "Строки зберігання та міжнародні передачі",
    paragraphs: [
      "Наразі неможливо підтвердити строк зберігання cookie застосунку, оскільки перевірений код не декларує власних cookie. Значення `brickinvest-locale` у localStorage зберігається, доки користувач, браузер або застосунок не видалить чи не замінить його. Майбутня інвентаризація має вказувати строк кожної технології та те, чи є вона сесійною або постійною.",
      "Якщо майбутній постачальник оброблятиме дані cookie або пристрою за межами Європейської економічної зони, передача повинна мати законну підставу та належні гарантії, наприклад рішення про адекватність або стандартні договірні положення.",
    ],
  },
  {
    title: "Ваші права та Політика конфіденційності",
    paragraphs: [
      "Якщо дані cookie або подібної технології ідентифікують вас або можуть бути обґрунтовано з вами пов’язані, ви можете мати права на доступ, виправлення, видалення, обмеження, заперечення, перенесення даних і відкликання згоди. Деталі обробки персональних даних і контакти відповідальної особи наведені в Політиці конфіденційності.",
      "Ви також можете подати скаргу до Іспанського агентства із захисту даних (AEPD) або іншого компетентного наглядового органу. Налаштування браузера допомагають видаляти чи блокувати технології, але не замінюють законний механізм згоди, коли він потрібен.",
    ],
  },
  {
    title: "Зміни до цієї політики",
    paragraphs: [
      "Ми можемо оновлювати цю Політику cookie, коли змінюються сайт, технології, постачальники, практики отримання згоди або законодавство. Чинна версія визначається датою набуття чинності. Істотні зміни необов’язкових технологій мають супроводжуватися належною інформацією та, коли потрібно, новим вибором згоди.",
    ],
  },
  {
    title: "Контакти та юридичне повідомлення",
    paragraphs: [
      "З питань cookie або для отримання інформації про технології BRICKINVEST.ES звертайтеся до Unicom Innovaciones S.L. за адресою Calle Nuestra Señora de Gracia, 26, bajo, Marbella (Málaga), 29602, Spain. Публічну електронну адресу ще не підтверджено, її потрібно додати до публікації: [PUBLIC CONTACT EMAIL TO BE CONFIRMED].",
      "Дата набуття чинності: 18 вересня 2026 року. Ця Політика cookie є юридичним проєктом і не замінює перевірку іспанським юристом або фахівцем із конфіденційності, включно з перевіркою робочого домену, хостингу, змінних розгортання та майбутніх сторонніх постачальників.",
    ],
  },
];

void [
  cookiesSections,
  spanishCookiesSections,
  swedishCookiesSections,
  ukrainianCookiesSections,
];

export const CookiesPolicyPage = () => {
  const { t } = useLocale();
  useEffect(() => {
    document.title = "Polityka cookies | BRICKINVEST";
  }, []);
  const sections = polishCookiesSections;
  return (
    <main
      className="grain-surface min-h-dvh bg-background px-5 pt-24 pb-16 sm:px-8 lg:px-12 lg:pt-28 lg:pb-24"
      id="main-content"
    >
      <div className="mx-auto max-w-7xl">
        <Link
          className="inline-flex text-[12px] tracking-[0.12em] text-muted-foreground uppercase transition-colors hover:text-foreground focus-visible:text-foreground"
          to="/"
        >
          {t("backHome")}
        </Link>

        <div className="mt-8">
          <PageIntro
            description={t("legalCookiesDescription")}
            title={t("cookiesPolicy")}
          />
        </div>

        <aside className="mt-14 flex flex-col gap-5 rounded-[2rem] bg-secondary p-7 text-secondary-foreground sm:flex-row sm:items-center sm:justify-between sm:p-9">
          <div className="max-w-3xl">
            <p className="text-[15px] font-semibold">{t("cookiesDraft")}</p>
            <p className="mt-2 text-[15px] leading-6 opacity-70">
              {t("cookiesDraftNotice")}
            </p>
          </div>
        </aside>

        <article className="mx-auto mt-10 max-w-7xl rounded-[2rem] border border-border/50 bg-surface px-6 shadow-sm shadow-foreground/5 sm:px-10">
          {sections.map(({ title, paragraphs }) => (
            <section
              className="border-t border-border/60 py-10 first:border-t-0 sm:py-12"
              key={title}
            >
              <div className="max-w-4xl">
                <h2 className="text-2xl tracking-[-0.025em] sm:text-3xl">
                  {title}
                </h2>
                <div className="mt-5 space-y-4 text-[15px] leading-7 text-muted-foreground">
                  {paragraphs.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                </div>
              </div>
            </section>
          ))}
        </article>

        <div className="mt-10 flex flex-wrap gap-x-5 gap-y-3 text-[12px] tracking-[0.12em] text-muted-foreground uppercase">
          <Link
            className="transition-colors hover:text-foreground focus-visible:text-foreground"
            to="/terms-and-conditions"
          >
            {t("termsAndConditions")}
          </Link>
          <Link
            className="transition-colors hover:text-foreground focus-visible:text-foreground"
            to="/privacy-policy"
          >
            {t("privacyPolicy")}
          </Link>
          <Link
            className="transition-colors hover:text-foreground focus-visible:text-foreground"
            to="/"
          >
            {t("home")}
          </Link>
        </div>
      </div>
    </main>
  );
};
