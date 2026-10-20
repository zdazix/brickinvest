export type GermanLegalSection = {
  readonly title: string;
  readonly paragraphs: readonly string[];
};

const companyDetails =
  "Die Website wird unter der Marke BRICKINVEST von Unicom Innovaciones S.L. betrieben, spanische Steuernummer CIF B-05385919, Calle Nuestra Señora de Gracia, 26, bajo, Marbella (Málaga), 29602, Spanien.";

export const germanPrivacySections: readonly GermanLegalSection[] = [
  {
    title: "Verantwortliche Stelle",
    paragraphs: [
      companyDetails,
      "Diese Datenschutzerklärung erläutert, wie personenbezogene Daten verarbeitet werden können, wenn Sie BRICKINVEST.ES besuchen, das Team kontaktieren oder eine Anfrage zu Immobilien- und Entwicklungsprojekten senden.",
    ],
  },
  {
    title: "Welche personenbezogenen Daten wir erheben",
    paragraphs: [
      "Je nach Nutzung der Website können wir Angaben erhalten, die Sie über Kontakt-, Beratungs-, Investment- und Anfrageformulare übermitteln. Dazu gehören Name, E-Mail-Adresse, Telefonnummer, Unternehmen oder Standort, Betreff, Nachricht und angeforderte Projektinformationen.",
      "Außerdem können technische und Nutzungsdaten verarbeitet werden, etwa IP-Adresse, Browser- und Geräteinformationen, ungefähre technische Standortdaten, aufgerufene Seiten, Verweisquelle und Interaktionen. Cookies und ähnliche Technologien werden in der Cookie-Richtlinie beschrieben.",
    ],
  },
  {
    title: "Wie wir personenbezogene Daten verwenden",
    paragraphs: [
      "Wir verwenden personenbezogene Daten, um Fragen und Anfragen zu beantworten, Beratungen zu organisieren, Investmentangebote oder Projektinformationen vorzubereiten, die Kommunikation zu einer Anfrage zu führen und zu prüfen, wie wir Sie unterstützen können.",
      "Wir können Daten außerdem verwenden, um die Website zu betreiben, zu schützen, Fehler zu beheben und zu verbessern, Kommunikationsnachweise zu führen, Missbrauch zu erkennen, gesetzliche Pflichten zu erfüllen und die Rechte des Unternehmens zu schützen.",
      "Anfragedaten werden nicht ohne geeignete Rechtsgrundlage und, soweit erforderlich, ohne Ihre Einwilligung für unabhängiges Marketing verwendet. Sie können Direktwerbung jederzeit widersprechen.",
    ],
  },
  {
    title: "Rechtsgrundlagen nach der DSGVO",
    paragraphs: [
      "Die Verarbeitung beruht je nach Situation auf der Durchführung vorvertraglicher Maßnahmen auf Ihre Anfrage, der Erfüllung eines Vertrags, einer rechtlichen Verpflichtung, berechtigten Interessen wie der Beantwortung von Anfragen und der Sicherheit der Website oder Ihrer Einwilligung.",
      "Wenn die Verarbeitung auf einer Einwilligung beruht, können Sie diese jederzeit widerrufen. Der Widerruf berührt nicht die Rechtmäßigkeit der Verarbeitung bis zum Widerruf. Ohne notwendige Angaben können wir eine Anfrage möglicherweise nicht bearbeiten.",
    ],
  },
  {
    title: "Weitergabe und Aufbewahrung",
    paragraphs: [
      "Wir können Dienstleister für Hosting, Sicherheit, Kommunikation, Analysen oder die Bearbeitung von Anfragen einsetzen. Sie erhalten nur die für ihre Aufgabe erforderlichen Daten und müssen vertragliche sowie gesetzliche Anforderungen einhalten.",
      "Die Aufbewahrungsdauer richtet sich nach dem Zweck der Verarbeitung, gesetzlichen Pflichten und der Notwendigkeit, Ansprüche zu begründen, auszuüben oder zu verteidigen. Wir verkaufen keine personenbezogenen Daten.",
    ],
  },
  {
    title: "Ihre Rechte",
    paragraphs: [
      "Sie können Auskunft, Berichtigung, Löschung, Einschränkung der Verarbeitung und Datenübertragbarkeit verlangen, der Verarbeitung widersprechen oder eine Einwilligung widerrufen. Zur Bearbeitung können wir Ihre Identität prüfen.",
      "Sie können sich außerdem an die Agencia Española de Protección de Datos (AEPD) oder eine andere zuständige Aufsichtsbehörde wenden. Die öffentliche Kontakt-E-Mail ist derzeit noch nicht bestätigt und muss vor der Veröffentlichung ergänzt werden: [PUBLIC CONTACT EMAIL TO BE CONFIRMED].",
    ],
  },
  {
    title: "Änderungen und Gültigkeitsdatum",
    paragraphs: [
      "Wir können diese Datenschutzerklärung ändern, wenn sich Website, Verarbeitung, Dienstleister, gesetzliche Anforderungen oder betriebliche Abläufe ändern. Gültig ab: 17. September 2026. Dieses Dokument sollte vor der Veröffentlichung von einem Datenschutzexperten in Spanien geprüft werden.",
    ],
  },
];

export const germanTermsSections: readonly GermanLegalSection[] = [
  {
    title: "Geltungsbereich und Zustimmung",
    paragraphs: [
      "Diese Nutzungsbedingungen regeln Ihren Zugriff auf BRICKINVEST.ES und die Nutzung der dort bereitgestellten Informationen, Materialien und Anfragefunktionen. Mit der Nutzung bestätigen Sie, dass Sie diese Bedingungen gelesen und verstanden haben. Wenn Sie nicht zustimmen, nutzen Sie die Website bitte nicht.",
      "Die Bedingungen gelten ausschließlich für die Nutzung der Website. Für Immobilien-, Entwicklungs-, Vermittlungs-, Investment- oder sonstige Transaktionen ist eine separate schriftliche Vereinbarung erforderlich.",
    ],
  },
  {
    title: "Angaben zum Unternehmen",
    paragraphs: [companyDetails],
  },
  {
    title: "Informationscharakter der Inhalte",
    paragraphs: [
      "Die Website enthält allgemeine Informationen über das Unternehmen, immobilienbezogene Projekte und mögliche Chancen. Projekte können vorgeschlagen, in Prüfung oder in Entwicklung sein; Angaben können sich ändern, unvollständig sein oder nicht zu Ihren persönlichen Umständen passen.",
      "Vor einer finanziellen, immobilienbezogenen oder vertraglichen Entscheidung sollten Sie eigene Prüfungen durchführen und unabhängigen professionellen Rat einholen.",
    ],
  },
  {
    title: "Keine Beratung, kein Angebot und keine Garantie",
    paragraphs: [
      "Nichts auf der Website stellt eine Finanz-, Investment-, Rechts-, Steuer-, Buchhaltungs-, Hypotheken- oder sonstige professionelle Beratung dar. Die Inhalte sind kein Angebot, keine Aufforderung zur Investition, keine Empfehlung und keine Garantie für Verfügbarkeit, Ertrag, Wertsteigerung oder Rendite.",
      "Jede Immobilien- oder Investmentmöglichkeit ist mit Risiken verbunden, einschließlich des möglichen Verlusts von Kapital, und unterliegt einer eigenen Prüfung, Verfügbarkeit, Bedingungen und Dokumentation.",
    ],
  },
  {
    title: "Anfragen und Formulare",
    paragraphs: [
      "Das Absenden eines Formulars, die Anforderung von Informationen oder eine Beratung begründen keinen Vertrag, keine Reservierung, kein Agenturverhältnis und keine Investitionsverpflichtung. Das Unternehmen kann Sie zur Klärung Ihrer Anfrage kontaktieren, soweit dies datenschutzrechtlich zulässig ist.",
      "Eine Transaktion oder Leistung wird erst durch eine separate schriftliche Vereinbarung verbindlich. Das Unternehmen kann eine Anfrage oder Möglichkeit im gesetzlich zulässigen Rahmen ablehnen, pausieren oder beenden.",
    ],
  },
  {
    title: "Verantwortung der Nutzer und geistiges Eigentum",
    paragraphs: [
      "Sie müssen die Website rechtmäßig und nach Treu und Glauben nutzen. Sie dürfen den Betrieb nicht stören, keinen Schadcode einführen, keinen unbefugten Zugriff versuchen, sich nicht als eine andere Person ausgeben und keine rechtswidrigen oder irreführenden Angaben übermitteln.",
      "Texte, Design, Marken, Fotos, Software und sonstige Materialien gehören dem Unternehmen oder werden von ihm lizenziert. Eine Vervielfältigung, Verbreitung, Veröffentlichung oder kommerzielle Nutzung ohne vorherige schriftliche Erlaubnis ist nicht gestattet, soweit das zwingende Recht nichts anderes vorsieht.",
    ],
  },
  {
    title: "Verfügbarkeit, Drittanbieter und Änderungen",
    paragraphs: [
      "Das Unternehmen bemüht sich um eine verfügbare und nützliche Website, garantiert jedoch keinen ununterbrochenen, sicheren oder fehlerfreien Zugriff. Der Zugriff kann aus technischen, betrieblichen, sicherheitsbezogenen oder rechtlichen Gründen geändert oder eingeschränkt werden.",
      "Links zu Websites, Plattformen oder Diensten Dritter dienen der Bequemlichkeit. Das Unternehmen kontrolliert deren Inhalte, Verfügbarkeit, Sicherheit, Bedingungen oder Datenschutzpraktiken nicht.",
    ],
  },
  {
    title: "Anwendbares Recht und Kontakt",
    paragraphs: [
      "Diese Bedingungen unterliegen dem Recht Spaniens. Zwingende Verbraucherschutzrechte bleiben unberührt. Sollte eine Bestimmung unwirksam oder nicht durchsetzbar sein, gelten die übrigen Bestimmungen im gesetzlich zulässigen Umfang weiter.",
      "Gültig ab: 17. September 2026. Für rechtliche Hinweise wenden Sie sich an Unicom Innovaciones S.L.; die öffentliche Kontakt-E-Mail ist noch nicht bestätigt: [PUBLIC CONTACT EMAIL TO BE CONFIRMED]. Vor der Veröffentlichung sollte dieses Dokument von einem in Spanien zugelassenen Rechtsanwalt geprüft werden.",
    ],
  },
];

export const germanCookiesSections: readonly GermanLegalSection[] = [
  {
    title: "Was Cookies sind",
    paragraphs: [
      "Cookies sind kleine Textdateien oder ähnliche Technologien, die eine Website auf Ihrem Gerät speichern oder aus Ihrem Browser auslesen kann. Sie können Einstellungen merken, Funktionen bereitstellen und dabei helfen zu verstehen, wie die Website genutzt wird.",
      "Diese Cookie-Richtlinie sollte zusammen mit der Datenschutzerklärung und den Nutzungsbedingungen gelesen werden.",
    ],
  },
  {
    title: "Derzeit identifizierte Technologien",
    paragraphs: [
      `${companyDetails} Die Prüfung des aktuellen Codes hat kein von der Anwendung gesetztes Cookie und keinen eingebetteten Marketinganbieter bestätigt. Die Sprache wird durch den Sprachcode in der Seitenadresse bestimmt und nicht im localStorage oder in einem Cookie gespeichert.`,
      "Die Anwendung enthält eine einwilligungsabhängige Analyseschicht, die Google Tag Manager oder Google Analytics 4 nur bei konfigurierten Mess-IDs und erteilter Einwilligung laden kann. In der geprüften Arbeitsumgebung sind solche IDs nicht bestätigt.",
    ],
  },
  {
    title: "Notwendige und technische Technologien",
    paragraphs: [
      "Streng notwendige Technologien können ohne Einwilligung eingesetzt werden, wenn sie für eine ausdrücklich angeforderte Funktion, Kommunikation oder Sicherheit erforderlich sind. Sie dürfen nicht für unabhängige Analyse- oder Marketingzwecke genutzt werden.",
      "Der geprüfte Anwendungscode weist derzeit kein benanntes notwendiges Cookie aus. Infrastruktur- oder Sicherheits-Cookies des Hostings müssen vor der Veröffentlichung durch den verantwortlichen Betreiber dokumentiert werden.",
    ],
  },
  {
    title: "Spracheinstellungen und Analyse",
    paragraphs: [
      "Die Sprachauswahl öffnet die Seite mit dem entsprechenden Sprachcode in der Adresse. Die Website speichert die Sprachauswahl nicht im lokalen Browserspeicher.",
      "Optionale Analysen müssen bis zu einer gesonderten, informierten Einwilligung deaktiviert bleiben. Eine Einwilligung darf nicht aus dem weiteren Besuch oder Scrollen der Website abgeleitet werden.",
    ],
  },
  {
    title: "Marketing und Drittanbieter",
    paragraphs: [
      "Im geprüften Code wurden kein Marketing-Tag, kein Werbenetzwerk und kein Drittanbieter-Marketing-Cookie festgestellt. Werden solche Dienste ergänzt, müssen sie, soweit erforderlich, bis zu einer gültigen vorherigen Einwilligung blockiert werden.",
      "Vor der Aktivierung sind Anbieter, Zweck, Technologien, Speicherdauer, Empfänger und Garantien für internationale Übermittlungen offenzulegen.",
    ],
  },
  {
    title: "Kontrollen, Rechte und Datum",
    paragraphs: [
      "Die geprüfte Anwendung enthält derzeit kein sichtbares Banner, Einstellungszentrum oder Bedienelement zum Annehmen, Ablehnen, Konfigurieren oder Widerrufen einer Cookie-Einwilligung. Dies ist eine offene Umsetzungseinschränkung und keine Aussage darüber, dass eine Einwilligung eingeholt wurde.",
      "Für Fragen zu Cookies wenden Sie sich an Unicom Innovaciones S.L. Die öffentliche Kontakt-E-Mail ist noch nicht bestätigt: [PUBLIC CONTACT EMAIL TO BE CONFIRMED]. Gültig ab: 18. September 2026. Vor der Veröffentlichung sollte dieses Dokument von einem Datenschutzexperten in Spanien geprüft werden.",
    ],
  },
];
