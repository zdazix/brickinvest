import { Link } from "@tanstack/react-router";

import { PageIntro } from "@/components/ui/PageIntro";
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

export const CookiesPolicyPage = () => {
  const { locale, t } = useLocale();
  const sections = locale === "es" ? spanishCookiesSections : cookiesSections;
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
