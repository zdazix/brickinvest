import { Link } from "@tanstack/react-router";
import { useEffect } from "react";

import { PageIntro } from "@/components/ui/PageIntro";
import { czechTermsSections } from "@/lib/czech-legal";
import { useLocale } from "@/lib/i18n";

type TermsSection = {
  readonly title: string;
  readonly paragraphs: readonly string[];
};

const termsSections: readonly TermsSection[] = [
  {
    title: "Scope and acceptance",
    paragraphs: [
      "These Website Terms & Conditions govern your access to and use of BRICKINVEST.ES and the information, materials and enquiry tools made available through it (the Website). By accessing or using the Website, you confirm that you have read and understood these terms. If you do not agree with them, please do not use the Website.",
      "These terms apply to website use only. A separate written agreement will govern any property, development, brokerage, investment or other transaction that may later be agreed with the Company.",
    ],
  },
  {
    title: "Company details",
    paragraphs: [
      "The Website is operated under the BRICKINVEST name by Unicom Innovaciones S.L., with Spanish tax identification number (CIF) B-05385919 and address at Calle Nuestra Señora de Gracia, 26, bajo, Marbella (Málaga), 29602, Spain.",
      "The Company may provide further legal or contact information where required by applicable law or when a particular service is requested.",
    ],
  },
  {
    title: "Informational content",
    paragraphs: [
      "The Website is intended to provide general information about the Company, property-related projects and potential opportunities. Content may describe projects that are proposed, under review, in development or subject to change. It may not be complete, current or suitable for your particular circumstances.",
      "You should make your own enquiries and obtain independent professional advice before relying on information on the Website or taking any financial, property, contractual or other decision. The Company does not promise that every statement, figure, availability indication, image, projection or description will remain accurate or unchanged.",
    ],
  },
  {
    title: "No advice or regulated service",
    paragraphs: [
      "Nothing on the Website constitutes financial, investment, legal, tax, accounting, mortgage or other professional advice. The Website is not a substitute for advice from an appropriately qualified and independent adviser.",
      "Nothing in the Website or these terms states or implies that the Company is licensed, authorised or regulated to provide investment services. The Company makes no representation that any activity described on the Website is suitable, available or lawful for every person or in every jurisdiction.",
    ],
  },
  {
    title: "No offer, solicitation or guarantee",
    paragraphs: [
      "Website content, project descriptions and communications initiated through the Website are provided for information and preliminary enquiry purposes only. They do not constitute an offer, invitation to invest, solicitation, recommendation, commitment or promise of availability, completion, income, appreciation or return.",
      "Past performance, examples, estimates and projections are not guarantees of future results. Any investment or property opportunity involves risks, including the possible loss of capital, and will be subject to its own due diligence, availability, terms and documentation.",
    ],
  },
  {
    title: "Enquiries and forms",
    paragraphs: [
      "Submitting a form, requesting information or asking for a consultation does not create a contract, reservation, agency relationship, investment commitment or other binding obligation for you or the Company. The Company may contact you to clarify your enquiry, subject to applicable data protection requirements.",
      "No transaction or service is binding unless and until the relevant parties enter into a separate written agreement that identifies its terms. The Company may decline, pause or discontinue an enquiry or opportunity without creating liability, subject to mandatory legal rights.",
    ],
  },
  {
    title: "Your responsibilities",
    paragraphs: [
      "You must use the Website lawfully and in good faith. You must not misuse the Website, interfere with its operation, introduce malicious code, attempt unauthorised access, impersonate another person, submit unlawful or misleading information, or use Website content to breach another person's rights.",
      "Where you submit information, you are responsible for ensuring that it is accurate, up to date and lawfully provided. You must not use the Website to send unsolicited marketing, collect information about others without permission or pursue any activity that violates applicable law.",
    ],
  },
  {
    title: "Intellectual property",
    paragraphs: [
      "Unless stated otherwise, the Website and its text, design, branding, graphics, photographs, software and other materials are owned by or licensed to the Company. They are protected by applicable intellectual property laws.",
      "You may view the Website and make a reasonable temporary copy for personal, non-commercial use. You may not reproduce, adapt, distribute, publish, commercially exploit or create derivative works from Website content without prior written permission, except where mandatory law permits it.",
    ],
  },
  {
    title: "Third-party websites and services",
    paragraphs: [
      "The Website may contain links to third-party websites, platforms or services. Those resources are provided for convenience and are operated independently from the Company. The Company does not control or endorse their content, availability, security, terms or privacy practices.",
      "You should review the applicable third-party terms and privacy information before using an external resource. The Company is not responsible for third-party content or services except to the extent liability cannot lawfully be excluded.",
    ],
  },
  {
    title: "Availability and changes",
    paragraphs: [
      "The Company aims to keep the Website available and useful but does not guarantee uninterrupted, secure or error-free access. Access may be suspended, restricted or changed for maintenance, security, technical, operational or legal reasons.",
      "The Company may update, remove or correct Website content and may change these terms as described below. A website update does not create an obligation to update every related document or communication.",
    ],
  },
  {
    title: "Liability",
    paragraphs: [
      "To the maximum extent permitted by applicable law, the Company is not liable for indirect, incidental, special or consequential loss, loss of opportunity, loss of profits or reliance on information that is incomplete, outdated or not suitable for your circumstances arising from use of the Website.",
      "Nothing in these terms excludes or limits liability that cannot be excluded or limited under applicable law, including liability for fraud, wilful misconduct, or mandatory consumer rights. Any limitation applies only to the extent legally permitted and does not affect rights that the law requires to remain available.",
    ],
  },
  {
    title: "Privacy and cookies",
    paragraphs: [
      "The processing of personal data is described in the BRICKINVEST Privacy Policy. The use of cookies and similar technologies is described in the Cookies Policy. These documents form part of the information provided with the Website and should be read alongside these terms.",
      "The Website is intended to be used consistently with the General Data Protection Regulation (EU) 2016/679 (GDPR), applicable Spanish data protection rules and Ley 34/2002 de Servicios de la Sociedad de la Información y del Comercio Electrónico (LSSI-CE), as applicable.",
    ],
  },
  {
    title: "Amendments",
    paragraphs: [
      "The Company may amend these terms to reflect changes to the Website, its services, applicable law or operational requirements. The current version will be identified by its effective date. Your continued use of the Website after an updated version is published constitutes acceptance of the updated terms, to the extent permitted by law.",
    ],
  },
  {
    title: "Governing law and jurisdiction",
    paragraphs: [
      "These terms are governed by the laws of Spain. Any dispute will be submitted to the competent courts under Spanish law, subject to any mandatory consumer protection rules and any mandatory right of a consumer to bring proceedings before the courts of their place of residence.",
      "If any provision is held invalid or unenforceable, the remaining provisions will continue to apply to the extent permitted by law.",
    ],
  },
  {
    title: "Contact and legal notices",
    paragraphs: [
      "For legal notices or questions about these terms, please contact Unicom Innovaciones S.L. at Calle Nuestra Señora de Gracia, 26, bajo, Marbella (Málaga), 29602, Spain. The public contact email address has not been confirmed in the current website content and must be added before publication: [PUBLIC CONTACT EMAIL TO BE CONFIRMED].",
      "Effective date: 17 September 2026. This document is a website-terms draft and is not a substitute for review by a Spanish-qualified lawyer, particularly before relying on it for a regulated activity, consumer-facing transaction or specific property offering.",
    ],
  },
];

const spanishTermsSections: readonly TermsSection[] = [
  {
    title: "Ámbito y aceptación",
    paragraphs: [
      "Estos Términos y condiciones regulan el acceso y uso de BRICKINVEST.ES y de sus materiales y formularios de consulta. Al utilizar el sitio confirmas que has leído y entendido estos términos; si no estás de acuerdo, no debes utilizarlo.",
      "Estos términos se aplican únicamente al uso del sitio web. Cualquier operación inmobiliaria, de desarrollo, intermediación, inversión u otro servicio requerirá un acuerdo escrito independiente.",
    ],
  },
  {
    title: "Datos de la empresa",
    paragraphs: [
      "El sitio es operado bajo la marca BRICKINVEST por Unicom Innovaciones S.L., con CIF B-05385919 y domicilio en Calle Nuestra Señora de Gracia, 26, bajo, Marbella (Málaga), 29602, España.",
      "La empresa podrá facilitar información legal o de contacto adicional cuando lo exija la ley o cuando se solicite un servicio concreto.",
    ],
  },
  {
    title: "Carácter informativo del contenido",
    paragraphs: [
      "El sitio ofrece información general sobre la empresa, proyectos inmobiliarios y posibles oportunidades. Los proyectos pueden estar propuestos, en revisión o en desarrollo, y la información puede cambiar o no ser completa ni adecuada para tus circunstancias.",
      "Debes realizar tus propias comprobaciones y obtener asesoramiento profesional independiente antes de tomar decisiones financieras, inmobiliarias o contractuales. La empresa no garantiza que las cifras, imágenes, proyecciones, disponibilidades o descripciones permanezcan exactas o sin cambios.",
    ],
  },
  {
    title: "Sin asesoramiento ni servicio regulado",
    paragraphs: [
      "Nada del sitio constituye asesoramiento financiero, de inversión, jurídico, fiscal, contable, hipotecario u otro asesoramiento profesional. El sitio no sustituye el consejo de un profesional cualificado e independiente.",
      "El sitio y estos términos no afirman ni sugieren que la empresa esté autorizada o regulada para prestar servicios de inversión. No se declara que una actividad sea adecuada, disponible o lícita para todas las personas o jurisdicciones.",
    ],
  },
  {
    title: "Sin oferta, solicitud ni garantía",
    paragraphs: [
      "El contenido, las descripciones y las comunicaciones iniciadas mediante el sitio tienen finalidad informativa y de consulta preliminar. No constituyen una oferta, invitación a invertir, solicitud, recomendación, compromiso ni promesa de disponibilidad, finalización, ingresos, revalorización o rentabilidad.",
      "Los ejemplos, estimaciones y proyecciones no garantizan resultados futuros. Toda oportunidad inmobiliaria o de inversión implica riesgos, incluida la posible pérdida de capital, y estará sujeta a su propia diligencia, disponibilidad, condiciones y documentación.",
    ],
  },
  {
    title: "Consultas y formularios",
    paragraphs: [
      "Enviar un formulario, solicitar información o pedir una consulta no crea un contrato, reserva, relación de agencia, compromiso de inversión ni otra obligación vinculante. La empresa podrá contactar contigo para aclarar tu consulta conforme a la normativa de protección de datos.",
      "Ninguna operación será vinculante hasta que las partes firmen un acuerdo escrito independiente. La empresa podrá rechazar, pausar o cancelar una consulta u oportunidad, sin perjuicio de los derechos obligatorios.",
    ],
  },
  {
    title: "Responsabilidades del usuario",
    paragraphs: [
      "Debes utilizar el sitio de forma lícita y de buena fe. No debes interferir en su funcionamiento, introducir código malicioso, intentar acceder sin autorización, suplantar a otra persona, enviar información ilícita o engañosa ni vulnerar derechos de terceros.",
      "Si envías información, eres responsable de que sea exacta, actualizada y facilitada lícitamente. No debes enviar marketing no solicitado, recopilar datos de terceros sin permiso ni realizar actividades contrarias a la ley.",
    ],
  },
  {
    title: "Propiedad intelectual",
    paragraphs: [
      "Salvo indicación contraria, el sitio y sus textos, diseño, marca, gráficos, fotografías, software y demás materiales pertenecen a la empresa o se utilizan bajo licencia y están protegidos por las leyes de propiedad intelectual.",
      "Puedes consultar el sitio y realizar una copia temporal razonable para uso personal no comercial. No puedes reproducir, adaptar, distribuir, publicar, explotar comercialmente ni crear obras derivadas sin permiso escrito, salvo cuando la ley lo permita.",
    ],
  },
  {
    title: "Sitios y servicios de terceros",
    paragraphs: [
      "El sitio puede incluir enlaces a sitios, plataformas o servicios de terceros. Se ofrecen por comodidad y son independientes de la empresa, que no controla ni respalda su contenido, disponibilidad, seguridad, términos o privacidad.",
      "Debes revisar los términos y la información de privacidad de cada tercero. La empresa no responde por contenidos o servicios de terceros salvo cuando la responsabilidad no pueda excluirse legalmente.",
    ],
  },
  {
    title: "Disponibilidad y cambios",
    paragraphs: [
      "La empresa procura mantener el sitio disponible y útil, pero no garantiza un acceso ininterrumpido, seguro o sin errores. El acceso puede suspenderse o modificarse por motivos técnicos, operativos, de seguridad, mantenimiento o legales.",
      "La empresa puede actualizar, retirar o corregir contenido y modificar estos términos. La actualización del sitio no obliga a actualizar todos los documentos o comunicaciones relacionados.",
    ],
  },
  {
    title: "Responsabilidad",
    paragraphs: [
      "En la máxima medida permitida por la ley, la empresa no responde por pérdidas indirectas, incidentales, especiales o consecuentes, pérdida de oportunidades o beneficios, ni por la confianza depositada en información incompleta, desactualizada o inadecuada.",
      "Nada excluye o limita responsabilidades que no puedan excluirse legalmente, incluida la responsabilidad por fraude, dolo o derechos obligatorios de consumidores. Toda limitación se aplica solo en la medida permitida por la ley.",
    ],
  },
  {
    title: "Privacidad y cookies",
    paragraphs: [
      "El tratamiento de datos personales se explica en la Política de privacidad de BRICKINVEST. El uso de cookies y tecnologías similares se explica en la Política de cookies. Estos documentos deben leerse junto con estos términos.",
      "El sitio está concebido para funcionar conforme al RGPD, la normativa española de protección de datos y la Ley 34/2002 de Servicios de la Sociedad de la Información y del Comercio Electrónico, cuando resulte aplicable.",
    ],
  },
  {
    title: "Modificaciones",
    paragraphs: [
      "La empresa puede modificar estos términos para reflejar cambios en el sitio, sus servicios, la ley o sus operaciones. La versión vigente se identificará por su fecha de entrada en vigor. El uso continuado del sitio después de una actualización implica aceptación en la medida permitida por la ley.",
    ],
  },
  {
    title: "Ley aplicable y jurisdicción",
    paragraphs: [
      "Estos términos se rigen por las leyes de España. Las controversias se someterán a los tribunales competentes conforme a la ley española, respetando las normas imperativas de protección de consumidores y el derecho del consumidor a acudir a los tribunales de su domicilio cuando corresponda.",
      "Si alguna disposición fuese inválida o inaplicable, las demás continuarán vigentes en la medida permitida por la ley.",
    ],
  },
  {
    title: "Contacto y avisos legales",
    paragraphs: [
      "Para avisos legales o preguntas sobre estos términos, contacta con Unicom Innovaciones S.L. en Calle Nuestra Señora de Gracia, 26, bajo, Marbella (Málaga), 29602, España. El email público no ha sido confirmado y debe añadirse antes de publicar: [PUBLIC CONTACT EMAIL TO BE CONFIRMED].",
      "Fecha de entrada en vigor: 17 de septiembre de 2026. Este documento es un borrador de términos web y no sustituye la revisión de un abogado cualificado en España.",
    ],
  },
];

const swedishTermsSections: readonly TermsSection[] = [
  {
    title: "Omfattning och godkännande",
    paragraphs: [
      "Dessa webbplatsvillkor reglerar din åtkomst till och användning av BRICKINVEST.ES, dess information och förfrågningsverktyg. Genom att använda webbplatsen bekräftar du att du har läst och förstått villkoren. Om du inte godkänner dem ska du inte använda webbplatsen.",
      "Villkoren gäller endast webbplatsanvändning. Varje senare fastighets-, utvecklings-, förmedlings- eller investeringstransaktion kräver ett separat skriftligt avtal.",
    ],
  },
  {
    title: "Företagsuppgifter",
    paragraphs: [
      "Webbplatsen drivs under namnet BRICKINVEST av Unicom Innovaciones S.L., med spanskt skattenummer CIF B-05385919 och adress Calle Nuestra Señora de Gracia, 26, bajo, Marbella (Málaga), 29602, Spanien.",
      "Företaget kan lämna ytterligare juridisk information när det krävs enligt lag eller när en särskild tjänst efterfrågas.",
    ],
  },
  {
    title: "Informationens karaktär",
    paragraphs: [
      "Webbplatsen ger allmän information om företaget, fastighetsprojekt och möjliga möjligheter. Projekt kan vara föreslagna, under granskning eller under utveckling, och informationen kan vara ofullständig eller ändras.",
      "Gör egna kontroller och inhämta oberoende professionell rådgivning innan du fattar ekonomiska, fastighetsrelaterade eller avtalsmässiga beslut. Företaget garanterar inte att siffror, bilder, prognoser eller tillgänglighetsuppgifter förblir oförändrade.",
    ],
  },
  {
    title: "Ingen rådgivning eller reglerad tjänst",
    paragraphs: [
      "Inget på webbplatsen utgör finansiell, investeringsrelaterad, juridisk, skatterelaterad, redovisningsmässig, hypoteksrelaterad eller annan professionell rådgivning.",
      "Varken webbplatsen eller dessa villkor anger eller antyder att företaget är licensierat, auktoriserat eller reglerat för att tillhandahålla investeringstjänster.",
    ],
  },
  {
    title: "Inget erbjudande, ingen uppmaning och ingen garanti",
    paragraphs: [
      "Webbplatsens innehåll, projektbeskrivningar och meddelanden är endast avsedda som information och preliminär förfrågan. De utgör inte ett erbjudande, en investeringsinbjudan, rekommendation, utfästelse eller garanti om tillgänglighet, resultat eller avkastning.",
      "Tidigare resultat, exempel, uppskattningar och prognoser garanterar inte framtida resultat. Alla investeringar innebär risk, inklusive risk för kapitalförlust.",
    ],
  },
  {
    title: "Förfrågningar och formulär",
    paragraphs: [
      "Att skicka ett formulär, begära information eller boka en konsultation skapar inte ett avtal, en reservation, ett agentförhållande eller ett investeringsåtagande för dig eller företaget.",
      "Ingen transaktion eller tjänst blir bindande förrän parterna har ingått ett separat skriftligt avtal. Företaget kan avböja, pausa eller avsluta en förfrågan med förbehåll för tvingande lagstadgade rättigheter.",
    ],
  },
  {
    title: "Ditt ansvar",
    paragraphs: [
      "Du ska använda webbplatsen lagligt och i god tro. Du får inte störa driften, införa skadlig kod, försöka få obehörig åtkomst, utge dig för någon annan eller lämna olaglig eller vilseledande information.",
      "När du skickar information ansvarar du för att den är korrekt, aktuell och lagligen tillhandahållen. Du får inte använda webbplatsen för oönskad marknadsföring eller för att kränka andras rättigheter.",
    ],
  },
  {
    title: "Immateriella rättigheter",
    paragraphs: [
      "Om inget annat anges ägs webbplatsen och dess text, design, varumärke, grafik, fotografier, programvara och övriga material av företaget eller används med licens och skyddas av tillämplig lag.",
      "Du får använda webbplatsen och göra en rimlig tillfällig kopia för privat, icke-kommersiellt bruk. Du får inte reproducera, distribuera eller kommersiellt utnyttja materialet utan skriftligt tillstånd, utom när tvingande lag tillåter det.",
    ],
  },
  {
    title: "Tredjepartswebbplatser och tjänster",
    paragraphs: [
      "Webbplatsen kan innehålla länkar till tredjepartswebbplatser, plattformar eller tjänster. De tillhandahålls av bekvämlighetsskäl och drivs självständigt från företaget.",
      "Läs respektive tredjeparts villkor och integritetsinformation innan du använder en extern resurs. Företaget ansvarar inte för tredjepartsinnehåll eller tjänster utöver vad lagen kräver.",
    ],
  },
  {
    title: "Tillgänglighet och ändringar",
    paragraphs: [
      "Företaget strävar efter att hålla webbplatsen tillgänglig och användbar men garanterar inte oavbruten, säker eller felfri åtkomst. Åtkomst kan ändras eller avbrytas av tekniska, säkerhetsmässiga, operativa eller juridiska skäl.",
      "Företaget kan uppdatera, ta bort eller rätta innehåll och ändra dessa villkor enligt avsnittet nedan.",
    ],
  },
  {
    title: "Ansvarsbegränsning",
    paragraphs: [
      "I den utsträckning lagen tillåter ansvarar företaget inte för indirekta eller följdrelaterade förluster, förlorade möjligheter, vinster eller förluster som beror på ofullständig eller inaktuell information.",
      "Inget i villkoren utesluter ansvar som inte får uteslutas enligt lag, inklusive bedrägeri, uppsåtligt agerande eller tvingande konsumenträttigheter.",
    ],
  },
  {
    title: "Integritet och cookies",
    paragraphs: [
      "Behandlingen av personuppgifter beskrivs i BRICKINVESTs integritetspolicy. Användningen av cookies och liknande teknik beskrivs i cookiepolicyn. Dokumenten ska läsas tillsammans med dessa villkor.",
      "Webbplatsen är avsedd att användas i enlighet med GDPR, tillämpliga spanska dataskyddsregler och LSSI-CE när det är relevant.",
    ],
  },
  {
    title: "Ändringar",
    paragraphs: [
      "Företaget kan ändra villkoren för att återspegla ändringar på webbplatsen, i tjänsterna, lagen eller verksamheten. Den aktuella versionen anges med ikraftträdandedatum. Fortsatt användning efter publicering innebär godkännande i den utsträckning lagen tillåter.",
    ],
  },
  {
    title: "Tillämplig lag och domstol",
    paragraphs: [
      "Villkoren regleras av Spaniens lagar. Tvister ska hanteras av behöriga spanska domstolar med förbehåll för tvingande konsumentskydd och konsumentens rätt att väcka talan på hemorten när det följer av lag.",
      "Om någon bestämmelse är ogiltig eller inte kan verkställas fortsätter övriga bestämmelser att gälla i den utsträckning lagen tillåter.",
    ],
  },
  {
    title: "Kontakt och juridisk information",
    paragraphs: [
      "För juridiska meddelanden eller frågor om villkoren, kontakta Unicom Innovaciones S.L. på Calle Nuestra Señora de Gracia, 26, bajo, Marbella (Málaga), 29602, Spanien. Den offentliga e-postadressen är inte bekräftad och måste läggas till före publicering: [PUBLIC CONTACT EMAIL TO BE CONFIRMED].",
      "Ikraftträdande: 17 september 2026. Detta är ett utkast till webbplatsvillkor och ersätter inte granskning av en jurist med behörighet i Spanien.",
    ],
  },
];

const ukrainianTermsSections: readonly TermsSection[] = [
  {
    title: "Сфера дії та прийняття умов",
    paragraphs: [
      "Ці умови регулюють доступ до BRICKINVEST.ES і використання його матеріалів та форм запитів. Користуючись сайтом, ви підтверджуєте, що прочитали й зрозуміли ці умови. Якщо ви з ними не погоджуєтеся, не використовуйте сайт.",
      "Ці умови стосуються лише використання вебсайту. Будь-яка подальша операція з нерухомістю, девелопментом, посередництвом або інвестиціями потребує окремої письмової угоди.",
    ],
  },
  {
    title: "Дані компанії",
    paragraphs: [
      "Сайт працює під брендом BRICKINVEST, яким керує Unicom Innovaciones S.L., CIF B-05385919, адреса: Calle Nuestra Señora de Gracia, 26, bajo, Marbella (Málaga), 29602, Іспанія.",
      "Компанія може надати додаткову юридичну або контактну інформацію, якщо цього вимагає закон або якщо вона потрібна для конкретної послуги.",
    ],
  },
  {
    title: "Інформаційний характер матеріалів",
    paragraphs: [
      "Сайт містить загальну інформацію про компанію, проєкти нерухомості та можливі інвестиційні можливості. Проєкти можуть перебувати на етапі пропозиції, перевірки або реалізації, а інформація може змінюватися, бути неповною чи не відповідати вашим обставинам.",
      "Перед фінансовими, майновими або договірними рішеннями проведіть власну перевірку та отримайте незалежну професійну консультацію. Компанія не гарантує незмінність цифр, зображень, прогнозів, доступності чи описів.",
    ],
  },
  {
    title: "Відсутність консультаційних і регульованих послуг",
    paragraphs: [
      "Жоден матеріал на сайті не є фінансовою, інвестиційною, юридичною, податковою, бухгалтерською, іпотечною чи іншою професійною консультацією. Сайт не замінює поради незалежного кваліфікованого фахівця.",
      "Сайт і ці умови не стверджують і не припускають, що компанія має ліцензію, дозвіл або регулювання для надання інвестиційних послуг. Компанія не заявляє, що будь-яка діяльність є придатною, доступною або законною для кожної особи чи юрисдикції.",
    ],
  },
  {
    title: "Відсутність оферти, заклику до інвестування чи гарантії",
    paragraphs: [
      "Матеріали, описи та повідомлення, отримані через сайт, мають інформаційний характер і призначені для попереднього запиту. Вони не є офертою, запрошенням до інвестування, рекомендацією, зобов’язанням або гарантією доступності, завершення, доходу, зростання вартості чи прибутковості.",
      "Приклади, оцінки та прогнози не гарантують майбутніх результатів. Будь-яка майнова чи інвестиційна можливість пов’язана з ризиками, включно з можливою втратою капіталу, і залежить від окремої перевірки, доступності, умов та документації.",
    ],
  },
  {
    title: "Запити та форми",
    paragraphs: [
      "Надсилання форми, запит інформації або консультації не створює договору, резервування, агентських відносин, інвестиційного зобов’язання чи іншого обов’язку для вас або компанії. Компанія може зв’язатися з вами для уточнення запиту відповідно до вимог захисту даних.",
      "Жодна операція не є обов’язковою, доки сторони не підпишуть окрему письмову угоду. Компанія може відхилити, призупинити або скасувати запит чи можливість з урахуванням обов’язкових прав, передбачених законом.",
    ],
  },
  {
    title: "Обов’язки користувача",
    paragraphs: [
      "Ви повинні користуватися сайтом законно та добросовісно. Заборонено перешкоджати його роботі, впроваджувати шкідливий код, намагатися отримати несанкціонований доступ, видавати себе за іншу особу, надсилати незаконну або оманливу інформацію чи порушувати права третіх осіб.",
      "Надсилаючи інформацію, ви відповідаєте за її точність, актуальність і законність передачі. Не використовуйте сайт для небажаного маркетингу, незаконного збору даних третіх осіб або іншої діяльності, що суперечить закону.",
    ],
  },
  {
    title: "Інтелектуальна власність",
    paragraphs: [
      "Якщо не зазначено інше, сайт, його тексти, дизайн, бренд, графіка, фотографії, програмне забезпечення та інші матеріали належать компанії або використовуються за ліцензією та захищені законодавством про інтелектуальну власність.",
      "Ви можете переглядати сайт і робити розумну тимчасову копію для особистого некомерційного використання. Заборонено відтворювати, адаптувати, поширювати, публікувати, комерційно використовувати матеріали або створювати похідні роботи без письмового дозволу, крім випадків, дозволених законом.",
    ],
  },
  {
    title: "Сайти та послуги третіх осіб",
    paragraphs: [
      "Сайт може містити посилання на сайти, платформи або послуги третіх осіб. Вони надаються для зручності та працюють незалежно від компанії, яка не контролює і не схвалює їхній зміст, доступність, безпеку, умови чи політику конфіденційності.",
      "Перед використанням зовнішнього ресурсу ознайомтеся з умовами та інформацією про конфіденційність відповідної третьої сторони. Компанія не відповідає за сторонній контент чи послуги, крім випадків, коли відповідальність не може бути виключена законом.",
    ],
  },
  {
    title: "Доступність і зміни",
    paragraphs: [
      "Компанія прагне підтримувати сайт доступним і корисним, але не гарантує безперервний, безпечний або безпомилковий доступ. Доступ може бути призупинено чи змінено з технічних, операційних, безпекових, ремонтних або юридичних причин.",
      "Компанія може оновлювати, видаляти або виправляти матеріали та змінювати ці умови. Оновлення сайту не означає автоматичного оновлення всіх пов’язаних документів або повідомлень.",
    ],
  },
  {
    title: "Обмеження відповідальності",
    paragraphs: [
      "У максимально дозволеному законом обсязі компанія не відповідає за непрямі, випадкові, спеціальні або побічні збитки, втрату можливостей чи прибутку, а також за довіру до неповної, застарілої або непридатної для ваших обставин інформації.",
      "Ніщо в цих умовах не виключає і не обмежує відповідальність, яку не можна виключити або обмежити законом, зокрема відповідальність за шахрайство, умисні дії чи обов’язкові права споживачів.",
    ],
  },
  {
    title: "Конфіденційність і файли cookie",
    paragraphs: [
      "Обробка персональних даних описана в Політиці конфіденційності BRICKINVEST. Використання файлів cookie та подібних технологій описане в Політиці cookie. Ці документи є частиною інформації про сайт і мають читатися разом із цими умовами.",
      "Сайт призначений для використання відповідно до Загального регламенту захисту даних ЄС 2016/679 (GDPR), застосовних іспанських правил захисту даних і Закону 34/2002 (LSSI-CE), якщо вони застосовуються.",
    ],
  },
  {
    title: "Зміни до умов",
    paragraphs: [
      "Компанія може змінювати ці умови, щоб відображати зміни на сайті, у послугах, законодавстві або операційних вимогах. Чинна версія визначається датою набуття чинності. Подальше використання сайту після публікації оновленої версії означає прийняття змін у межах, дозволених законом.",
    ],
  },
  {
    title: "Застосовне право та юрисдикція",
    paragraphs: [
      "Ці умови регулюються законодавством Іспанії. Будь-який спір передається до компетентних судів відповідно до іспанського права з урахуванням обов’язкових правил захисту споживачів і права споживача звертатися до суду за місцем проживання, якщо це передбачено законом.",
      "Якщо будь-яке положення буде визнано недійсним або таким, що не підлягає виконанню, решта положень продовжують діяти в межах, дозволених законом.",
    ],
  },
  {
    title: "Контакти та юридичні повідомлення",
    paragraphs: [
      "З юридичних питань або щодо цих умов звертайтеся до Unicom Innovaciones S.L. за адресою Calle Nuestra Señora de Gracia, 26, bajo, Marbella (Málaga), 29602, Spain. Публічну електронну адресу ще не підтверджено, її потрібно додати до публікації: [PUBLIC CONTACT EMAIL TO BE CONFIRMED].",
      "Дата набуття чинності: 17 вересня 2026 року. Цей документ є проєктом умов вебсайту і не замінює перевірку юристом із відповідною кваліфікацією в Іспанії, особливо перед використанням у регульованій діяльності, споживчій операції або конкретній пропозиції нерухомості.",
    ],
  },
];

void [
  termsSections,
  spanishTermsSections,
  swedishTermsSections,
  ukrainianTermsSections,
];

export const TermsAndConditionsPage = () => {
  const { t } = useLocale();
  useEffect(() => {
    document.title = "Obchodní podmínky | BRICKINVEST";
  }, []);
  const sections = czechTermsSections;
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
            description={t("legalTermsDescription")}
            title={t("termsAndConditions")}
          />
        </div>

        <aside className="mt-14 flex flex-col gap-5 rounded-[2rem] bg-secondary p-7 text-secondary-foreground sm:flex-row sm:items-center sm:justify-between sm:p-9">
          <div className="max-w-3xl">
            <p className="text-[15px] font-semibold">{t("termsDraft")}</p>
            <p className="mt-2 text-[15px] leading-6 opacity-70">
              {t("termsDraftNotice")}
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
            to="/privacy-policy"
          >
            {t("privacyPolicy")}
          </Link>
          <Link
            className="transition-colors hover:text-foreground focus-visible:text-foreground"
            to="/cookies-policy"
          >
            {t("cookiesPolicy")}
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
