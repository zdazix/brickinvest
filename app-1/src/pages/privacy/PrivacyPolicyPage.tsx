import { Link } from "@tanstack/react-router";
import { useEffect } from "react";

import { PageIntro } from "@/components/ui/PageIntro";
import { czechPrivacySections } from "@/lib/czech-legal";
import { estonianPrivacySections } from "@/lib/estonian-legal";
import { germanPrivacySections } from "@/lib/german-legal";
import { polishPrivacySections } from "@/lib/polish-legal";
import { russianPrivacySections } from "@/lib/russian-legal";
import { type LocaleKey } from "@/lib/locales";
import { useLocale } from "@/lib/i18n";

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

const spanishPrivacySections: readonly PrivacySection[] = [
  {
    title: "Identidad del responsable",
    paragraphs: [
      "El responsable del tratamiento descrito en esta política es Unicom Innovaciones S.L., que opera bajo la marca BRICKINVEST, con CIF B-05385919 y domicilio en Calle Nuestra Señora de Gracia, 26, bajo, Marbella (Málaga), 29602, España.",
      "Esta política explica cómo pueden tratarse los datos cuando visitas BRICKINVEST.ES, contactas con el equipo o envías una consulta sobre proyectos y oportunidades inmobiliarias.",
    ],
  },
  {
    title: "Datos personales que recopilamos",
    paragraphs: [
      "Según utilices el sitio, podemos recopilar la información que facilites en formularios de contacto, consulta, propuesta de inversión u otras solicitudes, como nombre, email, teléfono, empresa o ubicación, asunto, mensaje e información del proyecto solicitado.",
      "También podemos recibir datos técnicos y de uso, como dirección IP, navegador, dispositivo, ubicación aproximada derivada de datos técnicos, páginas visitadas, referencia e interacciones. Las cookies se explican en la Política de cookies.",
      "No envíes datos especialmente protegidos ni información de otra persona salvo que sea necesario, lícito y tengas permiso para hacerlo.",
    ],
  },
  {
    title: "Cómo utilizamos los datos",
    paragraphs: [
      "Podemos utilizar los datos para responder preguntas y solicitudes, organizar consultas, preparar propuestas de inversión o información de proyectos, comunicarnos contigo y valorar cómo podemos ayudarte.",
      "También podemos operar, proteger y mejorar el sitio, mantener registros, detectar usos indebidos, cumplir obligaciones legales, ejercer o defender reclamaciones y gestionar la actividad de la empresa y sus proveedores.",
      "No utilizaremos datos de consultas para marketing no relacionado sin una base legal adecuada y, cuando sea necesario, consentimiento. Puedes oponerte al marketing directo en cualquier momento.",
    ],
  },
  {
    title: "Bases legales del RGPD",
    paragraphs: [
      "Tratamos los datos conforme a una o varias bases del RGPD: adoptar medidas previas a tu solicitud, ejecutar un contrato, cumplir una obligación legal, perseguir intereses legítimos que no prevalezcan sobre tus derechos u obtener consentimiento cuando sea necesario.",
      "Puedes retirar el consentimiento en cualquier momento; la retirada no afecta al tratamiento anterior. Si no facilitas datos necesarios para responder, quizá no podamos atender la consulta.",
    ],
  },
  {
    title: "Destinatarios y proveedores",
    paragraphs: [
      "Podemos compartir datos con proveedores que los tratan en nuestro nombre, como servicios de alojamiento, infraestructura, formularios, comunicaciones, seguridad, analítica o soporte profesional, bajo instrucciones y garantías adecuadas.",
      "También podemos comunicar información cuando lo exija la ley, un tribunal o autoridad competente, o para proteger derechos y seguridad. No vendemos datos ni los cedemos para marketing propio de terceros sin base legal adecuada.",
    ],
  },
  {
    title: "Transferencias internacionales",
    paragraphs: [
      "Algunos proveedores podrían tratar datos fuera del Espacio Económico Europeo. Cuando ocurra, utilizaremos un mecanismo legal y garantías adecuadas, como una decisión de adecuación o cláusulas contractuales tipo aprobadas, junto con medidas adicionales cuando corresponda.",
      "Puedes contactar con nosotros para solicitar información adicional sobre las garantías aplicables, salvo restricciones legales.",
    ],
  },
  {
    title: "Conservación",
    paragraphs: [
      "Conservamos los datos solo durante el tiempo razonablemente necesario para responder, mantener registros, gestionar una relación u operación, cumplir obligaciones legales y contables, resolver conflictos y hacer cumplir acuerdos.",
      "Cuando ya no sean necesarios, los eliminaremos o anonimizaremos cuando sea razonablemente posible, salvo que la ley exija o permita conservarlos más tiempo.",
    ],
  },
  {
    title: "Tus derechos de protección de datos",
    paragraphs: [
      "Con los límites de la ley, puedes solicitar acceso, rectificación, supresión, limitación, oposición y portabilidad, y retirar el consentimiento cuando esa sea la base del tratamiento.",
      "Puedes ejercer estos derechos contactando con la empresa; podremos verificar tu identidad. También puedes reclamar ante la Agencia Española de Protección de Datos (AEPD) u otra autoridad de control competente.",
    ],
  },
  {
    title: "Cookies y datos técnicos",
    paragraphs: [
      "El sitio puede utilizar tecnologías técnicas estrictamente necesarias y, cuando corresponda, otras cookies o tecnologías similares. Sus categorías, finalidades, proveedores, conservación y consentimiento se describen en la Política de cookies.",
      "Las cookies no esenciales no deben activarse antes de registrar una elección válida de consentimiento, salvo excepciones legales. Puedes gestionar las opciones disponibles o utilizar los controles del navegador.",
    ],
  },
  {
    title: "Seguridad",
    paragraphs: [
      "Aplicamos medidas técnicas y organizativas razonables para proteger los datos frente a destrucción, pérdida, alteración, divulgación o acceso no autorizados. Ningún sistema puede garantizar seguridad absoluta.",
      "Debes actuar con cuidado al enviar información y avisarnos si crees que una consulta o cuenta ha sido utilizada sin autorización.",
    ],
  },
  {
    title: "Menores",
    paragraphs: [
      "El sitio y sus formularios no están dirigidos a menores. No solicitamos conscientemente datos de menores. Si crees que un menor ha facilitado datos, contacta con nosotros para que podamos revisarlo y eliminarlos cuando proceda.",
    ],
  },
  {
    title: "Cambios de esta política",
    paragraphs: [
      "Podemos actualizar esta política cuando cambien el sitio, los tratamientos, los proveedores, la ley o nuestras prácticas. La versión vigente se identificará por su fecha y, cuando sea necesario, informaremos de forma adicional o solicitaremos un nuevo consentimiento.",
      "Esta política pretende proporcionar la información aplicable de los artículos 13 a 22 del RGPD y debe leerse junto con los Términos y la Política de cookies.",
    ],
  },
  {
    title: "Contacto y aviso legal",
    paragraphs: [
      "Para preguntas de privacidad o solicitudes sobre tus datos, contacta con Unicom Innovaciones S.L. en Calle Nuestra Señora de Gracia, 26, bajo, Marbella (Málaga), 29602, España. El email público no ha sido confirmado y debe añadirse antes de publicar: [PUBLIC CONTACT EMAIL TO BE CONFIRMED].",
      "Este borrador debe leerse junto con el RGPD, la Ley Orgánica 3/2018 y los requisitos de consentimiento de cookies de la LSSI. No se indica ningún DPO porque no ha sido confirmado. Fecha de entrada en vigor: 17 de septiembre de 2026.",
    ],
  },
];

const swedishPrivacySections: readonly PrivacySection[] = [
  {
    title: "Ansvarig organisation",
    paragraphs: [
      "Personuppgiftsansvarig för behandlingen som beskrivs i denna policy är Unicom Innovaciones S.L., som verkar under varumärket BRICKINVEST, med CIF B-05385919 och adress Calle Nuestra Señora de Gracia, 26, bajo, Marbella (Málaga), 29602, Spanien.",
      "Policyn förklarar hur personuppgifter kan behandlas när du besöker BRICKINVEST.ES, kontaktar teamet eller skickar en förfrågan om fastighetsprojekt och möjligheter.",
    ],
  },
  {
    title: "Personuppgifter vi samlar in",
    paragraphs: [
      "Beroende på hur du använder webbplatsen kan vi samla in uppgifter som du lämnar i kontakt-, konsultations-, investerings- och andra förfrågningsformulär, till exempel namn, e-post, telefonnummer, företag, plats, ämne, meddelande och projektinformation.",
      "Vi kan också få tekniska uppgifter och användningsinformation som IP-adress, webbläsare, enhet, ungefärlig plats, besökta sidor, hänvisningsinformation och interaktioner. Cookies och liknande teknik beskrivs i cookiepolicyn.",
      "Skicka inte känsliga personuppgifter eller uppgifter om någon annan om det inte är nödvändigt, lagligt och du har tillstånd.",
    ],
  },
  {
    title: "Så använder vi personuppgifter",
    paragraphs: [
      "Vi kan använda personuppgifter för att svara på frågor, ordna konsultationer, förbereda investeringsförslag eller projektinformation, följa upp en förfrågan och bedöma hur vi kan hjälpa dig.",
      "Vi kan också driva, säkra, felsöka och förbättra webbplatsen, föra kommunikationsregister, upptäcka missbruk, följa lagkrav, hantera rättsliga anspråk och administrera företaget och dess leverantörer.",
      "Förfrågningsuppgifter används inte för orelaterad marknadsföring utan lämplig rättslig grund och, när det krävs, ditt samtycke. Du kan när som helst invända mot direktmarknadsföring.",
    ],
  },
  {
    title: "Rättsliga grunder enligt GDPR",
    paragraphs: [
      "Vi behandlar personuppgifter med en eller flera rättsliga grunder enligt GDPR: åtgärder på din begäran före avtal, fullgörande av avtal, rättslig skyldighet, berättigat intresse som att besvara frågor och säkra webbplatsen, eller samtycke när det krävs.",
      "När behandlingen bygger på samtycke kan du återkalla det när som helst. Återkallelsen påverkar inte lagligheten av tidigare behandling. Om du inte lämnar nödvändiga uppgifter kan vi kanske inte besvara förfrågan.",
    ],
  },
  {
    title: "Mottagare och tjänsteleverantörer",
    paragraphs: [
      "Vi kan dela personuppgifter med leverantörer som behandlar dem för vår räkning, exempelvis för hosting, webbplatsinfrastruktur, formulär, kommunikation, säkerhet, analys eller professionellt stöd. De ska följa våra instruktioner och lämpliga skyddsåtgärder.",
      "Vi kan också lämna ut uppgifter när det krävs enligt lag eller av domstol eller myndighet, eller för att skydda rättigheter och säkerhet. Vi säljer inte personuppgifter och lämnar inte ut dem för tredje parts orelaterade marknadsföring utan rättslig grund.",
    ],
  },
  {
    title: "Internationella överföringar",
    paragraphs: [
      "Vissa leverantörer kan behandla personuppgifter utanför Europeiska ekonomiska samarbetsområdet. Vid en sådan överföring använder vi en laglig överföringsmekanism och lämpliga skydd, exempelvis adekvansbeslut eller standardavtalsklausuler.",
      "Du kan kontakta oss enligt avsnittet Kontakt och juridisk information för mer information om relevanta skydd, med förbehåll för lagliga begränsningar.",
    ],
  },
  {
    title: "Lagringstid",
    paragraphs: [
      "Vi sparar personuppgifter endast så länge det är rimligt nödvändigt för ändamålen i denna policy, för att besvara en förfrågan, hantera en relation eller transaktion, följa juridiska krav, lösa tvister och verkställa avtal.",
      "När uppgifterna inte längre behövs raderar eller anonymiserar vi dem när det är praktiskt möjligt, om inte en längre lagringstid krävs eller tillåts enligt lag.",
    ],
  },
  {
    title: "Dina dataskyddsrättigheter",
    paragraphs: [
      "Med förbehåll för lagens villkor kan du begära tillgång till dina personuppgifter, rättelse, radering, begränsning, invända mot behandling inklusive direktmarknadsföring och få dataportabilitet när rätten gäller. Du kan också återkalla samtycke när behandlingen bygger på samtycke.",
      "Kontakta företaget för att utöva dina rättigheter. Vi kan behöva kontrollera din identitet. Du har även rätt att lämna klagomål till Agencia Española de Protección de Datos (AEPD) eller annan behörig tillsynsmyndighet.",
    ],
  },
  {
    title: "Cookies och tekniska uppgifter",
    paragraphs: [
      "Webbplatsen kan använda strikt nödvändiga tekniska cookies och, när det är aktuellt, andra cookies eller liknande teknik. Kategorier, ändamål, leverantörer, lagring och samtycke beskrivs i cookiepolicyn.",
      "Icke nödvändiga cookies ska inte aktiveras innan ett giltigt samtycke har registrerats när samtycke krävs. Du kan hantera val via webbplatsens kontroller eller webbläsarens inställningar, men avstängning av nödvändig teknik kan påverka funktionaliteten.",
    ],
  },
  {
    title: "Säkerhet",
    paragraphs: [
      "Vi använder rimliga tekniska och organisatoriska åtgärder för att skydda personuppgifter mot oavsiktlig eller olaglig förstörelse, förlust, ändring, obehörigt utlämnande och obehörig åtkomst. Inget system kan dock garanteras vara helt säkert.",
      "Var försiktig när du skickar information och kontakta oss omedelbart om du tror att en förfrågan eller ett konto har använts utan behörighet.",
    ],
  },
  {
    title: "Barn",
    paragraphs: [
      "Webbplatsen och formulären riktar sig inte till barn. Vi ber inte medvetet om eller samlar in barns personuppgifter. Kontakta oss om du tror att ett barn har lämnat uppgifter så bedömer vi om de ska tas bort.",
    ],
  },
  {
    title: "Ändringar av policyn",
    paragraphs: [
      "Vi kan uppdatera integritetspolicyn när webbplatsen, behandlingarna, leverantörerna, lagen eller arbetssätten ändras. Den aktuella versionen anges med ikraftträdandedatum. Vid behov lämnar vi ytterligare information eller ber om samtycke till en väsentlig ändring.",
      "Policyn är avsedd att ge information enligt GDPR artiklarna 13–22 och ska läsas tillsammans med webbplatsvillkoren och cookiepolicyn.",
    ],
  },
  {
    title: "Kontakt och juridisk information",
    paragraphs: [
      "För integritetsfrågor eller begäran om dina personuppgifter, kontakta Unicom Innovaciones S.L. på Calle Nuestra Señora de Gracia, 26, bajo, Marbella (Málaga), 29602, Spanien. Den offentliga e-postadressen är inte bekräftad och måste läggas till före publicering: [PUBLIC CONTACT EMAIL TO BE CONFIRMED].",
      "Utkastet ska läsas tillsammans med GDPR, spanska Organic Law 3/2018 och tillämpliga LSSI-krav för cookies. Det ersätter inte granskning av en spansk dataskyddsjurist. Ingen DPO anges eftersom det inte har bekräftats att en sådan finns.",
      "Ikraftträdande: 17 september 2026.",
    ],
  },
];

const ukrainianPrivacySections: readonly PrivacySection[] = [
  {
    title: "Відомості про відповідальну особу",
    paragraphs: [
      "Відповідальною особою за обробку, описану в цій політиці, є Unicom Innovaciones S.L., що працює під брендом BRICKINVEST, CIF B-05385919, адреса: Calle Nuestra Señora de Gracia, 26, bajo, Marbella (Málaga), 29602, Іспанія.",
      "Ця політика пояснює, як можуть оброблятися дані, коли ви відвідуєте BRICKINVEST.ES, звертаєтеся до команди або надсилаєте запит щодо проєктів і можливостей у сфері нерухомості.",
    ],
  },
  {
    title: "Які персональні дані ми збираємо",
    paragraphs: [
      "Залежно від використання сайту ми можемо отримувати дані, які ви надаєте у формах контакту, консультації, інвестиційної пропозиції та інших запитів: ім’я, електронну пошту, номер телефону, компанію або місцезнаходження, тему, повідомлення та інформацію про потрібний проєкт.",
      "Ми також можемо отримувати технічні дані та інформацію про використання, зокрема IP-адресу, браузер, пристрій, приблизне місцезнаходження, відвідані сторінки, джерело переходу та взаємодії. Файли cookie описані в окремій Політиці cookie.",
      "Не надсилайте особливі категорії персональних даних або дані іншої особи, якщо це не є необхідним, законним і ви не маєте відповідного дозволу.",
    ],
  },
  {
    title: "Як ми використовуємо дані",
    paragraphs: [
      "Ми можемо використовувати дані, щоб відповідати на запитання, організовувати консультації, готувати інвестиційні пропозиції або інформацію про проєкти, спілкуватися з вами та оцінювати, як можемо вам допомогти.",
      "Ми також можемо підтримувати, захищати й покращувати сайт, вести записи комунікацій, виявляти зловживання, виконувати юридичні обов’язки, розглядати претензії та адмініструвати діяльність компанії й постачальників.",
      "Дані запитів не використовуються для непов’язаного маркетингу без належної правової підстави та, коли потрібно, вашої згоди. Ви можете будь-коли заперечити проти прямого маркетингу.",
    ],
  },
  {
    title: "Правові підстави за GDPR",
    paragraphs: [
      "Ми обробляємо дані на одній або кількох підставах GDPR: вжиття заходів на ваш запит до укладення договору, виконання договору, дотримання юридичного обов’язку, реалізація законного інтересу, який не переважає ваші права, або згода, коли вона потрібна.",
      "Ви можете відкликати згоду будь-коли; відкликання не впливає на законність попередньої обробки. Якщо ви не надасте необхідні дані, ми можемо не змогти відповісти на запит.",
    ],
  },
  {
    title: "Отримувачі та постачальники",
    paragraphs: [
      "Ми можемо передавати дані постачальникам, які обробляють їх від нашого імені, зокрема сервісам хостингу, інфраструктури, форм, комунікацій, безпеки, аналітики та професійної підтримки, відповідно до інструкцій і належних гарантій.",
      "Ми також можемо розкривати інформацію, якщо цього вимагає закон, суд або компетентний орган, або якщо це потрібно для захисту прав і безпеки. Ми не продаємо дані й не передаємо їх третім особам для власного маркетингу без належної правової підстави.",
    ],
  },
  {
    title: "Міжнародні передачі",
    paragraphs: [
      "Деякі постачальники можуть обробляти дані за межами Європейської економічної зони. У такому разі ми використовуємо законний механізм передачі та належні гарантії, наприклад рішення про адекватність або стандартні договірні положення, а за потреби — додаткові заходи.",
      "Ви можете звернутися до нас, щоб отримати додаткову інформацію про відповідні гарантії, з урахуванням законних обмежень.",
    ],
  },
  {
    title: "Строк зберігання",
    paragraphs: [
      "Ми зберігаємо дані лише протягом розумно необхідного строку для відповіді, ведення записів, управління відносинами чи операцією, виконання юридичних і бухгалтерських обов’язків, вирішення спорів та виконання угод.",
      "Коли дані більше не потрібні, ми видаляємо або знеособлюємо їх, якщо це практично можливо, крім випадків, коли закон вимагає або дозволяє довше зберігання.",
    ],
  },
  {
    title: "Ваші права щодо захисту даних",
    paragraphs: [
      "У межах, передбачених законом, ви можете вимагати доступу, виправлення, видалення, обмеження обробки, заперечувати проти обробки та вимагати перенесення даних, а також відкликати згоду, якщо вона є підставою обробки.",
      "Для реалізації прав зверніться до компанії; ми можемо попросити підтвердити особу. Ви також маєте право подати скаргу до Іспанського агентства із захисту даних (AEPD) або іншого компетентного наглядового органу.",
    ],
  },
  {
    title: "Файли cookie та технічні дані",
    paragraphs: [
      "Сайт може використовувати суворо необхідні технічні cookie та, за потреби, інші cookie або подібні технології. Їхні категорії, цілі, постачальники, строки зберігання та вибір згоди описані в Політиці cookie.",
      "Необов’язкові cookie не повинні активуватися до отримання чинної згоди, крім передбачених законом винятків для суворо необхідних технологій. Керувати вибором можна через елементи керування сайту або налаштування браузера, хоча вимкнення необхідних технологій може вплинути на роботу сайту.",
    ],
  },
  {
    title: "Безпека",
    paragraphs: [
      "Ми застосовуємо розумні технічні та організаційні заходи для захисту персональних даних від випадкового або незаконного знищення, втрати, зміни, несанкціонованого розкриття та доступу. Водночас жодна система передачі чи зберігання не може бути повністю безпечною.",
      "Будьте обережні під час надсилання інформації та негайно повідомте нас, якщо вважаєте, що запит або обліковий запис було використано без дозволу.",
    ],
  },
  {
    title: "Діти",
    paragraphs: [
      "Сайт і його форми запитів не призначені для дітей. Ми свідомо не запитуємо та не збираємо через сайт персональні дані дітей. Якщо ви вважаєте, що дитина надала дані, зв’яжіться з нами, щоб ми могли перевірити ситуацію та видалити їх, якщо це доречно.",
    ],
  },
  {
    title: "Зміни до цієї політики",
    paragraphs: [
      "Ми можемо оновлювати цю Політику конфіденційності у зв’язку зі змінами сайту, процесів обробки, постачальників, законодавства або операційних практик. Чинна версія визначається датою набуття чинності. Коли потрібно, ми надамо додаткове повідомлення або попросимо згоду на істотну зміну.",
      "Ця політика має надавати інформацію, передбачену статтями 13–22 GDPR, якщо вони застосовуються до відповідної обробки. Її слід читати разом з Умовами вебсайту та Політикою cookie.",
    ],
  },
  {
    title: "Контакти та юридичне повідомлення",
    paragraphs: [
      "З питань конфіденційності або щодо запитів про ваші персональні дані звертайтеся до Unicom Innovaciones S.L. за адресою Calle Nuestra Señora de Gracia, 26, bajo, Marbella (Málaga), 29602, Spain. Публічну електронну адресу ще не підтверджено, її потрібно додати до публікації: [PUBLIC CONTACT EMAIL TO BE CONFIRMED].",
      "Цей проєкт слід читати разом із GDPR, іспанським Органічним законом 3/2018 про захист персональних даних і гарантію цифрових прав та застосовними вимогами LSSI щодо згоди на cookie. Він не замінює перевірку іспанським юристом із конфіденційності або фахівцем із захисту даних. Уповноваженого із захисту даних не зазначено, оскільки його наявність не підтверджена.",
      "Дата набуття чинності: 17 вересня 2026 року.",
    ],
  },
];

const localizedPrivacySections: Record<LocaleKey, readonly PrivacySection[]> = {
  en: privacySections,
  es: spanishPrivacySections,
  sv: swedishPrivacySections,
  uk: ukrainianPrivacySections,
  ru: russianPrivacySections,
  de: germanPrivacySections,
  et: estonianPrivacySections,
  pl: polishPrivacySections,
  cs: czechPrivacySections,
};

export const PrivacyPolicyPage = () => {
  const { locale, t, localizePath } = useLocale();
  useEffect(() => {
    document.title = `${t("privacyPolicy")} | BRICKINVEST`;
  }, [t]);
  const sections = localizedPrivacySections[locale];
  return (
    <main
      className="grain-surface min-h-dvh bg-background px-5 pt-24 pb-16 sm:px-8 lg:px-12 lg:pt-28 lg:pb-24"
      id="main-content"
    >
      <div className="mx-auto max-w-7xl">
        <Link
          className="inline-flex text-[12px] tracking-[0.12em] text-muted-foreground uppercase transition-colors hover:text-foreground focus-visible:text-foreground"
          to={localizePath("/") as never}
        >
          {t("backHome")}
        </Link>

        <div className="mt-8">
          <PageIntro
            description={t("legalPrivacyDescription")}
            title={t("privacyPolicy")}
          />
        </div>

        <aside className="mt-14 flex flex-col gap-5 rounded-[2rem] bg-secondary p-7 text-secondary-foreground sm:flex-row sm:items-center sm:justify-between sm:p-9">
          <div className="max-w-3xl">
            <p className="text-[15px] font-semibold">{t("privacyDraft")}</p>
            <p className="mt-2 text-[15px] leading-6 opacity-70">
              {t("privacyDraftNotice")}
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
            to={localizePath("/terms-and-conditions") as never}
          >
            {t("termsAndConditions")}
          </Link>
          <Link
            className="transition-colors hover:text-foreground focus-visible:text-foreground"
            to={localizePath("/cookies-policy") as never}
          >
            {t("cookiesPolicy")}
          </Link>
          <Link
            className="transition-colors hover:text-foreground focus-visible:text-foreground"
            to={localizePath("/") as never}
          >
            {t("home")}
          </Link>
        </div>
      </div>
    </main>
  );
};
