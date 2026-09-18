import type { AxiosResponse } from "axios";

import { waitFor } from "@/lib/api/delay";
import { createMockResponse } from "@/lib/api/mock-response";

export type PrivacySection = {
  readonly title: string;
  readonly body: string;
};

const privacySections: readonly PrivacySection[] = [
  {
    title: "Controller identity",
    body: "This privacy policy applies to BRICKINVEST and its website. The responsible legal entity is [INSERT BRICKINVEST LEGAL ENTITY]. Registered address: [INSERT REGISTERED ADDRESS]. Registration or tax identifier: [INSERT REGISTRATION / TAX IDENTIFIER]. Privacy contact: [INSERT PRIVACY EMAIL]. Telephone: [INSERT PRIVACY PHONE].",
  },
  {
    title: "Consent and this policy",
    body: "By using this website or submitting information, you acknowledge this policy. Where consent is required, BRICKINVEST will request it before the relevant processing. Marketing communications, cookies, analytics, and other consent-based activities will follow the choices recorded through [INSERT CONSENT MECHANISM]. Consent may be withdrawn at any time using [INSERT WITHDRAWAL PROCEDURE].",
  },
  {
    title: "Information required and collected",
    body: "Depending on how you interact with BRICKINVEST, information may include contact details, inquiry content, investment preferences, website usage information, device and log data, and consent records. The exact fields and collection points are: [INSERT CONFIRMED DATA CATEGORIES AND SOURCES]. Do not provide information that is not needed for your request.",
  },
  {
    title: "Purposes of processing",
    body: "BRICKINVEST may process information to respond to inquiries, assess and present relevant property or investment opportunities, provide requested services, operate and secure the website, manage records, comply with legal obligations, and measure website performance where permitted. Additional processing activities: [INSERT CONFIRMED PROCESSING ACTIVITIES].",
  },
  {
    title: "Legal basis",
    body: "The legal basis for each activity may be consent, steps taken at your request, performance of a contract, compliance with a legal obligation, or a legitimate interest that does not override your rights. BRICKINVEST must complete this mapping before publication: [INSERT PROCESSING ACTIVITY AND LEGAL-BASIS TABLE].",
  },
  {
    title: "Retention",
    body: "Information will be retained only for as long as necessary for the relevant purpose and any applicable legal, accounting, dispute, or limitation period. Specific periods or criteria for each category are: [INSERT CONFIRMED RETENTION PERIODS].",
  },
  {
    title: "Recipients and international transfers",
    body: "Information may be shared with service providers acting on BRICKINVEST’s instructions and with authorities or professional advisers where required or permitted. Processor and cloud-provider categories are: [INSERT CONFIRMED PROCESSORS / CLOUD PROVIDERS]. International transfers and their safeguards are: [INSERT CONFIRMED TRANSFER LOCATIONS AND SAFEGUARDS].",
  },
  {
    title: "Your rights",
    body: "Subject to applicable law, you may request access, correction, deletion, restriction, portability, or objection to processing, and may withdraw consent. Requests should be sent using [INSERT RIGHTS-REQUEST EMAIL OR METHOD]. BRICKINVEST may require [INSERT IDENTITY-VERIFICATION REQUIREMENT] to protect personal information. Response times and any applicable limits will follow applicable law.",
  },
  {
    title: "Security, cookies, and analytics",
    body: "BRICKINVEST will apply appropriate organizational and technical measures to protect information. The confirmed safeguards are: [INSERT SECURITY MEASURES]. Cookie categories, analytics tools, consent settings, and retention are described in [INSERT COOKIE POLICY / CONSENT DETAILS]. Current analytics and tag configuration: [INSERT CONFIRMED PRACTICES].",
  },
  {
    title: "Complaints, updates, and contact",
    body: "Questions or requests may be directed to [INSERT PRIVACY EMAIL]. You may also contact the competent supervisory authority: [INSERT SUPERVISORY AUTHORITY AND CONTACT DETAILS]. Effective date: [INSERT EFFECTIVE DATE]. Last updated: [INSERT UPDATE DATE]. This draft requires legal and operational review before publication, including confirmation of all bracketed details.",
  },
];

export const getPrivacySections = async (
  signal: AbortSignal,
): Promise<AxiosResponse<readonly PrivacySection[]>> => {
  await waitFor(500, signal);
  return createMockResponse(privacySections);
};
