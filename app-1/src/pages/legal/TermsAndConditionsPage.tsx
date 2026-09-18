import { Link } from "@tanstack/react-router";

import { PageIntro } from "@/components/ui/PageIntro";

type TermsSection = {
  readonly title: string;
  readonly paragraphs: readonly string[];
};

const termsSections: readonly TermsSection[] = [
  {
    title: "1. Scope and acceptance",
    paragraphs: [
      "These Website Terms & Conditions govern your access to and use of BRICKINVEST.ES and the information, materials and enquiry tools made available through it (the Website). By accessing or using the Website, you confirm that you have read and understood these terms. If you do not agree with them, please do not use the Website.",
      "These terms apply to website use only. A separate written agreement will govern any property, development, brokerage, investment or other transaction that may later be agreed with the Company.",
    ],
  },
  {
    title: "2. Company details",
    paragraphs: [
      "The Website is operated under the BRICKINVEST name by Unicom Innovaciones S.L., with Spanish tax identification number (CIF) B-05385919 and address at Calle Nuestra Señora de Gracia, 26, bajo, Marbella (Málaga), 29602, Spain.",
      "The Company may provide further legal or contact information where required by applicable law or when a particular service is requested.",
    ],
  },
  {
    title: "3. Informational content",
    paragraphs: [
      "The Website is intended to provide general information about the Company, property-related projects and potential opportunities. Content may describe projects that are proposed, under review, in development or subject to change. It may not be complete, current or suitable for your particular circumstances.",
      "You should make your own enquiries and obtain independent professional advice before relying on information on the Website or taking any financial, property, contractual or other decision. The Company does not promise that every statement, figure, availability indication, image, projection or description will remain accurate or unchanged.",
    ],
  },
  {
    title: "4. No advice or regulated service",
    paragraphs: [
      "Nothing on the Website constitutes financial, investment, legal, tax, accounting, mortgage or other professional advice. The Website is not a substitute for advice from an appropriately qualified and independent adviser.",
      "Nothing in the Website or these terms states or implies that the Company is licensed, authorised or regulated to provide investment services. The Company makes no representation that any activity described on the Website is suitable, available or lawful for every person or in every jurisdiction.",
    ],
  },
  {
    title: "5. No offer, solicitation or guarantee",
    paragraphs: [
      "Website content, project descriptions and communications initiated through the Website are provided for information and preliminary enquiry purposes only. They do not constitute an offer, invitation to invest, solicitation, recommendation, commitment or promise of availability, completion, income, appreciation or return.",
      "Past performance, examples, estimates and projections are not guarantees of future results. Any investment or property opportunity involves risks, including the possible loss of capital, and will be subject to its own due diligence, availability, terms and documentation.",
    ],
  },
  {
    title: "6. Enquiries and forms",
    paragraphs: [
      "Submitting a form, requesting information or asking for a consultation does not create a contract, reservation, agency relationship, investment commitment or other binding obligation for you or the Company. The Company may contact you to clarify your enquiry, subject to applicable data protection requirements.",
      "No transaction or service is binding unless and until the relevant parties enter into a separate written agreement that identifies its terms. The Company may decline, pause or discontinue an enquiry or opportunity without creating liability, subject to mandatory legal rights.",
    ],
  },
  {
    title: "7. Your responsibilities",
    paragraphs: [
      "You must use the Website lawfully and in good faith. You must not misuse the Website, interfere with its operation, introduce malicious code, attempt unauthorised access, impersonate another person, submit unlawful or misleading information, or use Website content to breach another person's rights.",
      "Where you submit information, you are responsible for ensuring that it is accurate, up to date and lawfully provided. You must not use the Website to send unsolicited marketing, collect information about others without permission or pursue any activity that violates applicable law.",
    ],
  },
  {
    title: "8. Intellectual property",
    paragraphs: [
      "Unless stated otherwise, the Website and its text, design, branding, graphics, photographs, software and other materials are owned by or licensed to the Company. They are protected by applicable intellectual property laws.",
      "You may view the Website and make a reasonable temporary copy for personal, non-commercial use. You may not reproduce, adapt, distribute, publish, commercially exploit or create derivative works from Website content without prior written permission, except where mandatory law permits it.",
    ],
  },
  {
    title: "9. Third-party websites and services",
    paragraphs: [
      "The Website may contain links to third-party websites, platforms or services. Those resources are provided for convenience and are operated independently from the Company. The Company does not control or endorse their content, availability, security, terms or privacy practices.",
      "You should review the applicable third-party terms and privacy information before using an external resource. The Company is not responsible for third-party content or services except to the extent liability cannot lawfully be excluded.",
    ],
  },
  {
    title: "10. Availability and changes",
    paragraphs: [
      "The Company aims to keep the Website available and useful but does not guarantee uninterrupted, secure or error-free access. Access may be suspended, restricted or changed for maintenance, security, technical, operational or legal reasons.",
      "The Company may update, remove or correct Website content and may change these terms as described below. A website update does not create an obligation to update every related document or communication.",
    ],
  },
  {
    title: "11. Liability",
    paragraphs: [
      "To the maximum extent permitted by applicable law, the Company is not liable for indirect, incidental, special or consequential loss, loss of opportunity, loss of profits or reliance on information that is incomplete, outdated or not suitable for your circumstances arising from use of the Website.",
      "Nothing in these terms excludes or limits liability that cannot be excluded or limited under applicable law, including liability for fraud, wilful misconduct, or mandatory consumer rights. Any limitation applies only to the extent legally permitted and does not affect rights that the law requires to remain available.",
    ],
  },
  {
    title: "12. Privacy and cookies",
    paragraphs: [
      "The processing of personal data is described in the BRICKINVEST Privacy Policy. The use of cookies and similar technologies is described in the Cookies Policy. These documents form part of the information provided with the Website and should be read alongside these terms.",
      "The Website is intended to be used consistently with the General Data Protection Regulation (EU) 2016/679 (GDPR), applicable Spanish data protection rules and Ley 34/2002 de Servicios de la Sociedad de la Información y del Comercio Electrónico (LSSI-CE), as applicable.",
    ],
  },
  {
    title: "13. Amendments",
    paragraphs: [
      "The Company may amend these terms to reflect changes to the Website, its services, applicable law or operational requirements. The current version will be identified by its effective date. Your continued use of the Website after an updated version is published constitutes acceptance of the updated terms, to the extent permitted by law.",
    ],
  },
  {
    title: "14. Governing law and jurisdiction",
    paragraphs: [
      "These terms are governed by the laws of Spain. Any dispute will be submitted to the competent courts under Spanish law, subject to any mandatory consumer protection rules and any mandatory right of a consumer to bring proceedings before the courts of their place of residence.",
      "If any provision is held invalid or unenforceable, the remaining provisions will continue to apply to the extent permitted by law.",
    ],
  },
  {
    title: "15. Contact and legal notices",
    paragraphs: [
      "For legal notices or questions about these terms, please contact Unicom Innovaciones S.L. at Calle Nuestra Señora de Gracia, 26, bajo, Marbella (Málaga), 29602, Spain. The public contact email address has not been confirmed in the current website content and must be added before publication: [PUBLIC CONTACT EMAIL TO BE CONFIRMED].",
      "Effective date: 17 September 2026. This document is a website-terms draft and is not a substitute for review by a Spanish-qualified lawyer, particularly before relying on it for a regulated activity, consumer-facing transaction or specific property offering.",
    ],
  },
];

export const TermsAndConditionsPage = () => (
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
          description="Website terms for BRICKINVEST.ES. Please read this draft together with the Privacy Policy and Cookies Policy before using the Website."
          title="Terms & Conditions"
        />
      </div>

      <aside className="mt-14 flex flex-col gap-5 rounded-[2rem] bg-secondary p-7 text-secondary-foreground sm:flex-row sm:items-center sm:justify-between sm:p-9">
        <div className="max-w-3xl">
          <p className="text-[15px] font-semibold">Website terms draft</p>
          <p className="mt-2 text-[15px] leading-6 opacity-70">
            Effective date: 17 September 2026. This document should be checked
            by a Spanish-qualified lawyer before publication or use for a
            specific transaction.
          </p>
        </div>
      </aside>

      <article className="mx-auto mt-10 max-w-7xl rounded-[2rem] border border-border/50 bg-surface px-6 shadow-sm shadow-foreground/5 sm:px-10">
        {termsSections.map(({ title, paragraphs }, index) => (
          <section
            className="grid gap-5 border-t border-border/60 py-10 first:border-t-0 sm:grid-cols-[4rem_1fr] sm:gap-8 sm:py-12"
            key={title}
          >
            <p className="font-mono text-[11px] text-primary">
              {String(index + 1).padStart(2, "0")}
            </p>
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
          to="/privacy-policy"
        >
          Privacy Policy
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
