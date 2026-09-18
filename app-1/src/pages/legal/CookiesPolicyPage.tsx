import { Link } from "@tanstack/react-router";

import { PageIntro } from "@/components/ui/PageIntro";

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

export const CookiesPolicyPage = () => (
  <main
    className="grain-surface min-h-dvh bg-background px-5 pt-24 pb-16 sm:px-8 lg:px-12 lg:pt-28 lg:pb-24"
    id="main-content"
  >
    <div className="mx-auto max-w-7xl">
      <Link
        className="inline-flex text-[12px] tracking-[0.12em] text-muted-foreground uppercase transition-colors hover:text-foreground focus-visible:text-foreground"
        to="/"
      >
        ← Back to BRICKINVEST home
      </Link>

      <div className="mt-8">
        <PageIntro
          description="How BRICKINVEST.ES uses cookies and similar technologies, and how you can control optional technologies."
          title="Cookies Policy"
        />
      </div>

      <aside className="mt-14 flex flex-col gap-5 rounded-[2rem] bg-secondary p-7 text-secondary-foreground sm:flex-row sm:items-center sm:justify-between sm:p-9">
        <div className="max-w-3xl">
          <p className="text-[15px] font-semibold">Cookies policy draft</p>
          <p className="mt-2 text-[15px] leading-6 opacity-70">
            Effective date: 18 September 2026. The current site does not yet
            include a user-facing cookie-consent banner or preference center;
            this limitation must be resolved before enabling optional cookies.
          </p>
        </div>
      </aside>

      <article className="mx-auto mt-10 max-w-7xl rounded-[2rem] border border-border/50 bg-surface px-6 shadow-sm shadow-foreground/5 sm:px-10">
        {cookiesSections.map(({ title, paragraphs }) => (
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
          Terms &amp; Conditions
        </Link>
        <Link
          className="transition-colors hover:text-foreground focus-visible:text-foreground"
          to="/privacy-policy"
        >
          Privacy Policy
        </Link>
        <Link
          className="transition-colors hover:text-foreground focus-visible:text-foreground"
          to="/"
        >
          Home
        </Link>
      </div>
    </div>
  </main>
);
