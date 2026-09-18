import { Link } from "@tanstack/react-router";

import { PageIntro } from "@/components/ui/PageIntro";

type PrivacySection = {
  readonly title: string;
  readonly paragraphs: readonly string[];
};

const privacySections: readonly PrivacySection[] = [
  {
    title: "Controller identity",
    paragraphs: [
      "For the personal data described in this Privacy Policy, the controller is Unicom Innovaciones S.L., trading under the BRICKINVEST name, with Spanish tax identification number (CIF) B-05385919 and address at Calle Nuestra Señora de Gracia, 26, bajo, Marbella (Málaga), 29602, Spain.",
      "This Privacy Policy explains how personal data may be processed when you visit BRICKINVEST.ES, contact the team or submit an enquiry about property-related projects and opportunities.",
    ],
  },
  {
    title: "Personal data we collect",
    paragraphs: [
      "Depending on how you use the Website, we may collect information you choose to provide through contact, consultation, investment proposal and other enquiry forms, including your name, email address, telephone number, company or location where supplied, the subject of your enquiry and the message or project information you request.",
      "We may also receive technical and usage information such as IP address, browser and device information, approximate location derived from technical data, pages viewed, referral information and interaction data. Cookies and similar technologies may collect some of this information as described in the Cookies Policy.",
      "Please do not submit special-category data or information about another person unless it is necessary, lawful and you have permission to provide it. We do not ask for such information through ordinary Website forms.",
    ],
  },
  {
    title: "How we use personal data",
    paragraphs: [
      "We may use personal data to respond to questions and requests, arrange or follow up on a consultation, prepare and provide an investment proposal or project information, communicate about an enquiry, and assess whether we can assist with the subject of your request.",
      "We may also use data to operate, secure, troubleshoot and improve the Website; maintain records of communications; detect misuse; comply with legal obligations; establish, exercise or defend legal claims; and manage the Company’s business and service providers.",
      "We will not use enquiry data for unrelated marketing without an appropriate legal basis and, where required, your consent. You can object to direct marketing at any time.",
    ],
  },
  {
    title: "Legal bases under the GDPR",
    paragraphs: [
      "We process personal data on one or more of the following legal bases under the General Data Protection Regulation (EU) 2016/679 (GDPR), depending on the circumstances: taking steps at your request before entering into a contract; performing a contract where one exists; complying with a legal obligation; pursuing legitimate interests such as answering enquiries, securing the Website and managing our business; or obtaining your consent where consent is required.",
      "Where processing is based on consent, you may withdraw that consent at any time. Withdrawal does not affect the lawfulness of processing carried out before withdrawal. If you do not provide information that is necessary for a requested response, we may be unable to process or answer the enquiry.",
    ],
  },
  {
    title: "Recipients and service providers",
    paragraphs: [
      "We may share personal data with service providers that process it on our behalf, such as hosting, website infrastructure, form, communications, security, analytics or professional support providers. These providers may only process data under appropriate instructions and safeguards for the relevant purpose.",
      "We may also disclose information where required by law, a court or competent authority, or where necessary to protect the rights, safety or property of the Company, users or others. We do not sell personal data. We do not disclose data to third parties for their own unrelated marketing purposes without an appropriate legal basis.",
    ],
  },
  {
    title: "International transfers",
    paragraphs: [
      "Some service providers may process personal data outside the European Economic Area. Where a transfer is required, we will use a lawful transfer mechanism and appropriate safeguards recognised by applicable data protection law, such as an adequacy decision or approved standard contractual clauses, together with supplementary measures where appropriate.",
      "You may contact us using the details in the Contact and legal notice section to request further information about the relevant safeguards, subject to lawful restrictions.",
    ],
  },
  {
    title: "Retention",
    paragraphs: [
      "We retain personal data only for as long as it is reasonably necessary for the purposes described in this policy, including to respond to an enquiry, maintain an appropriate record of communications, manage a relationship or transaction, comply with legal and accounting obligations, resolve disputes and enforce agreements.",
      "When data is no longer required, we will delete it or anonymise it where reasonably practicable, unless a longer retention period is required or permitted by law. Retention periods may vary according to the type of request and the applicable legal obligations.",
    ],
  },
  {
    title: "Your data protection rights",
    paragraphs: [
      "Subject to the conditions and limits in applicable law, you may request access to your personal data; rectification of inaccurate or incomplete data; erasure; restriction of processing; objection to processing, including direct marketing; and data portability where the right applies. Where processing is based on consent, you may withdraw consent at any time.",
      "You may exercise these rights by contacting the Company using the details below. We may need to verify your identity before responding. You also have the right to lodge a complaint with the Agencia Española de Protección de Datos (AEPD) or another competent supervisory authority, in particular in the Member State of your habitual residence, place of work or alleged infringement.",
    ],
  },
  {
    title: "Cookies and technical data",
    paragraphs: [
      "The Website may use strictly necessary technical cookies and, where applicable, other cookies or similar technologies. Details about the categories, purposes, providers, retention and consent choices are provided in the Cookies Policy.",
      "Where non-essential cookies require consent, they should not be activated before a valid consent choice is recorded, subject to the applicable exceptions for strictly necessary technologies. You can manage available cookie choices through the Website’s consent controls or your browser settings, although disabling necessary technologies may affect functionality.",
    ],
  },
  {
    title: "Security",
    paragraphs: [
      "We use reasonable technical and organisational measures designed to protect personal data against accidental or unlawful destruction, loss, alteration, unauthorised disclosure and unauthorised access. Measures may include access controls, secure hosting practices, backups, monitoring and limiting access to people and providers who need it.",
      "No transmission or storage system can be guaranteed to be completely secure. You should use appropriate care when sending information and notify us promptly if you believe an enquiry or account has been used without authorisation.",
    ],
  },
  {
    title: "Children",
    paragraphs: [
      "The Website and its enquiry forms are not directed to children. We do not knowingly request or collect personal data from children through the Website. If you believe a child has provided personal data, please contact us so that we can assess and remove it where appropriate.",
    ],
  },
  {
    title: "Changes to this policy",
    paragraphs: [
      "We may update this Privacy Policy to reflect changes to the Website, processing activities, service providers, applicable law or operational practices. The current version will be identified by its effective date. Where required, we will provide additional notice or request consent for a material change.",
      "This policy is intended to provide the information required by GDPR Articles 13–22, as applicable to the relevant processing. It should be read with the Website Terms & Conditions and Cookies Policy.",
    ],
  },
  {
    title: "Contact and legal notice",
    paragraphs: [
      "For privacy questions or requests concerning your personal data, contact Unicom Innovaciones S.L. at Calle Nuestra Señora de Gracia, 26, bajo, Marbella (Málaga), 29602, Spain. The public contact email address has not been confirmed in the current website content and must be added before publication: [PUBLIC CONTACT EMAIL TO BE CONFIRMED].",
      "This draft is intended to be read alongside the GDPR, Spanish Organic Law 3/2018 on the Protection of Personal Data and guarantee of digital rights, and applicable LSSI cookie-consent requirements. It is not a substitute for review by a Spanish-qualified privacy lawyer or data protection professional. No Data Protection Officer (DPO) is stated because a DPO has not been confirmed in the current project information.",
      "Effective date: 17 September 2026.",
    ],
  },
];

export const PrivacyPolicyPage = () => (
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
          description="How BRICKINVEST handles personal data when you use BRICKINVEST.ES or contact the team."
          title="Privacy Policy"
        />
      </div>

      <aside className="mt-14 flex flex-col gap-5 rounded-[2rem] bg-secondary p-7 text-secondary-foreground sm:flex-row sm:items-center sm:justify-between sm:p-9">
        <div className="max-w-3xl">
          <p className="text-[15px] font-semibold">Privacy policy draft</p>
          <p className="mt-2 text-[15px] leading-6 opacity-70">
            Effective date: 17 September 2026. This document should be checked
            by a Spanish-qualified privacy lawyer before publication or use for
            a specific processing activity.
          </p>
        </div>
      </aside>

      <article className="mx-auto mt-10 max-w-7xl rounded-[2rem] border border-border/50 bg-surface px-6 shadow-sm shadow-foreground/5 sm:px-10">
        {privacySections.map(({ title, paragraphs }) => (
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
          to="/cookies-policy"
        >
          Cookies Policy
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
