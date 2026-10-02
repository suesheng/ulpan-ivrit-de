import type { UiLocale } from "./i18n";
import { LINKS } from "./links";

export type LegalKey =
  | "impressum"
  | "datenschutz"
  | "cookies"
  | "teilnahmebedingungen"
  | "widerruf";

export type LegalBlock =
  | { type: "p"; text: string }
  | { type: "ul"; items: string[] }
  | { type: "table"; headers: string[]; rows: string[][]; empty?: string };

export type LegalSection = {
  h2: string;
  blocks: LegalBlock[];
};

export type LegalDoc = {
  title: string;
  desc: string;
  h1: string;
  lead: string;
  binding?: string;
  sections: LegalSection[];
  updated: string;
};

const UPDATED = {
  de: "Stand: 27. August 2026",
  ru: "Актуально на 27 августа 2026",
  en: "As of 27 August 2026",
};

const de: Record<LegalKey, LegalDoc> = {
  impressum: {
    title: "Impressum — Ulpan Ivrit",
    desc: "Angaben gemäß § 5 DDG für www.ulpan-ivrit.de, Träger BiFoDe e.V.",
    h1: "Impressum",
    lead: "www.ulpan-ivrit.de ist das öffentliche Angebot von Ulpan Ivrit in Deutschland. Diensteanbieter und Träger ist BiFoDe e.V.",
    sections: [
      {
        h2: "Angaben gemäß § 5 DDG",
        blocks: [
          {
            type: "p",
            text: "Bildungsforum für Demokratie und Vielfalt NRW e.V. (BiFoDe e.V.)",
          },
          {
            type: "ul",
            items: [
              "Vertreten durch: Denis Vilensky, Vorstand",
              `E-Mail: ${LINKS.contactEmail}`,
              "Anschrift: Nordrhein-Westfalen",
            ],
          },
        ],
      },
      {
        h2: "Registereintrag",
        blocks: [
          {
            type: "p",
            text: "Eingetragen im Vereinsregister. Registergericht: Amtsgericht Wuppertal. Registernummer: VR 31702.",
          },
        ],
      },
      {
        h2: "Verantwortlich für den Inhalt",
        blocks: [
          {
            type: "p",
            text: `Denis Vilensky, ${LINKS.contactEmail}`,
          },
        ],
      },
      {
        h2: "Haftung für Inhalte und Links",
        blocks: [
          {
            type: "p",
            text: "Die Inhalte dieser Website wurden mit Sorgfalt erstellt. Für Richtigkeit, Vollständigkeit und Aktualität übernehmen wir keine Gewähr. Als Diensteanbieter sind wir nach § 7 Abs. 1 DDG für eigene Inhalte verantwortlich.",
          },
          {
            type: "p",
            text: "Externe Links (Partner, Moodle) führen zu Inhalten Dritter. Auf diese Inhalte haben wir keinen Einfluss und distanzieren uns von rechtswidrigen Inhalten.",
          },
        ],
      },
      {
        h2: "Urheberrecht",
        blocks: [
          {
            type: "p",
            text: "Die Inhalte dieser Website unterliegen dem deutschen Urheberrecht. Vervielfältigung oder Verwertung außerhalb der gesetzlichen Schranken bedarf der Zustimmung des Rechteinhabers.",
          },
        ],
      },
      {
        h2: "Streitbeilegung",
        blocks: [
          {
            type: "p",
            text: "Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung bereit: https://ec.europa.eu/consumers/odr/",
          },
          {
            type: "p",
            text: "Wir sind nicht verpflichtet und nicht bereit, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.",
          },
        ],
      },
    ],
    updated: UPDATED.de,
  },
  datenschutz: {
    title: "Datenschutz — Ulpan Ivrit",
    desc: "Datenschutzerklärung für www.ulpan-ivrit.de nach DSGVO und TDDDG.",
    h1: "Datenschutzerklärung",
    lead: "Diese Erklärung gilt nur für www.ulpan-ivrit.de. Mitgliedschaft, MeinVerein und Moodle liegen auf anderen Angeboten von BiFoDe e.V. und haben dort eigene Hinweise.",
    sections: [
      {
        h2: "1. Verantwortlicher",
        blocks: [
          {
            type: "p",
            text: "Verantwortlich für die Verarbeitung personenbezogener Daten auf dieser Website:",
          },
          {
            type: "ul",
            items: [
              "Bildungsforum für Demokratie und Vielfalt NRW e.V. (BiFoDe e.V.)",
              "Vertreten durch: Denis Vilensky, Vorstand",
              `E-Mail: ${LINKS.contactEmail}`,
              "Anschrift: Nordrhein-Westfalen",
            ],
          },
        ],
      },
      {
        h2: "2. Hosting und Server-Logfiles",
        blocks: [
          {
            type: "p",
            text: "Die Website wird bei Vercel Inc., 440 N Barranca Ave #4133, Covina, CA 91723, USA, gehostet. Beim Abruf entstehen technisch notwendige Protokolldaten: IP-Adresse, Zeitpunkt, aufgerufene URL, Referrer, Browsertyp und Betriebssystem.",
          },
          {
            type: "p",
            text: "Zweck: Auslieferung, Stabilität und Abwehr von Missbrauch. Rechtsgrundlage: Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse am sicheren Betrieb). Die Daten werden nicht mit anderen Quellen zusammengeführt und nach den Fristen des Hosters gelöscht bzw. gekürzt.",
          },
          {
            type: "p",
            text: "Vercel handelt als Auftragsverarbeiter. Es können Server in der EU oder in den USA zum Einsatz kommen. Für Übermittlungen in die USA stützt sich Vercel auf Standardvertragsklauseln. Datenschutzerklärung von Vercel: https://vercel.com/legal/privacy-policy",
          },
        ],
      },
      {
        h2: "3. Formulare und E-Mail",
        blocks: [
          {
            type: "p",
            text: "Standortwunsch und Trägeranfrage sind freiwillig. Verarbeitet werden die von Ihnen eingegebenen Felder (z. B. Name, E-Mail, Ort, Nachricht).",
          },
          {
            type: "p",
            text: "Zweck: Bearbeitung der Anfrage und, soweit nötig, Rückfrage. Rechtsgrundlage: Art. 6 Abs. 1 lit. b DSGVO (vorvertragliche Schritte / Mitgliedschaft und Gruppenaufbau) sowie Art. 6 Abs. 1 lit. f DSGVO (Organisation des Ulpan-Angebots).",
          },
          {
            type: "p",
            text: "Ist ein Versanddienst konfiguriert (Brevo / Sendinblue, EU), geht die Nachricht über diesen Auftragsverarbeiter an info@bifode.org. Datenschutzerklärung: https://www.brevo.com/legal/privacypolicy/. Fehlt die Konfiguration, öffnet sich Ihr E-Mail-Programm; die Daten verlassen unser System erst, wenn Sie die Nachricht selbst senden.",
          },
          {
            type: "p",
            text: "Speicherdauer: für die Bearbeitung und gesetzliche Aufbewahrung, danach Löschung, sofern keine Pflicht zur weiteren Speicherung besteht.",
          },
        ],
      },
      {
        h2: "4. Mitgliedschaft, Moodle, Partner",
        blocks: [
          {
            type: "p",
            text: "Die Anmeldung läuft über ein eingebettetes Formular (Jotform, USA) auf dieser Website. Für die dort eingegebenen Daten gilt die Datenschutzerklärung von BiFoDe bzw. des Formularanbieters, soweit einschlägig.",
          },
          {
            type: "p",
            text: "Moodle (ulpan.bifode.org) ist ein eigenes System mit Zugang nach Aufnahme. Partnerlogos verlinken auf Websites Dritter. Beim Klick gelten deren Erklärungen.",
          },
        ],
      },
      {
        h2: "5. Cookies und Endgerätezugriff (TDDDG)",
        blocks: [
          {
            type: "p",
            text: "Diese Website setzt keine Cookies und speichert nichts in localStorage oder sessionStorage. Schriftarten liegen auf unserem Host. Es gibt kein Analyse- oder Marketing-Tracking und keinen Cookie-Banner, weil keine Einwilligung nach § 25 TDDDG einzuholen ist.",
          },
          {
            type: "p",
            text: "Einzelheiten und die Tabelle der Verarbeitungen stehen im Cookie-Konzept.",
          },
        ],
      },
      {
        h2: "6. Ihre Rechte",
        blocks: [
          {
            type: "p",
            text: "Sie haben das Recht auf Auskunft, Berichtigung, Löschung, Einschränkung der Verarbeitung, Datenübertragbarkeit und Widerspruch gegen Verarbeitungen auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO. Formlos an info@bifode.org.",
          },
          {
            type: "p",
            text: "Beschwerde: Landesbeauftragte für Datenschutz und Informationsfreiheit Nordrhein-Westfalen (LDI NRW), https://www.ldi.nrw.de/",
          },
        ],
      },
      {
        h2: "7. Pflicht zur Angabe",
        blocks: [
          {
            type: "p",
            text: "Sie müssen uns keine Daten übermitteln, um die öffentlichen Seiten zu lesen. Pflichtfelder in Formularen sind nur nötig, wenn Sie uns schreiben wollen.",
          },
        ],
      },
      {
        h2: "8. Anmeldung und Zahlungsabwicklung",
        blocks: [
          {
            type: "p",
            text: "Die Anmeldung zu den Kursen erfolgt über ein auf dieser Website eingebettetes Formular von Jotform (Jotform Inc., USA). Dabei verarbeiten wir die von Ihnen eingegebenen Daten, insbesondere Name, Kontaktdaten, Anschrift sowie die für den SEPA-Lastschrifteinzug erforderlichen Zahlungsdaten (z. B. Kontoinhaber, IBAN).",
          },
          {
            type: "p",
            text: "Zweck ist die Begründung und Durchführung des Teilnahmevertrags einschließlich der Zahlungsabwicklung. Rechtsgrundlage ist Art. 6 Abs. 1 lit. b DSGVO (Vertrag) sowie Art. 6 Abs. 1 lit. c DSGVO (steuer- und handelsrechtliche Aufbewahrungspflichten).",
          },
          {
            type: "p",
            text: "Der Beitragseinzug erfolgt per SEPA-Basislastschrift (Gläubiger-Identifikationsnummer DE86ZZZ00002929761). Zahlungs- und Mitgliedsdaten werden hierfür in der Vereinsverwaltungssoftware MeinVerein verarbeitet; mit dem Anbieter besteht ein Auftragsverarbeitungsvertrag nach Art. 28 DSGVO.",
          },
          {
            type: "p",
            text: "Das Anmeldeformular wird über Jotform mit EU-Hosting bereitgestellt; die Daten werden innerhalb der Europäischen Union verarbeitet. Mit Jotform besteht ein Auftragsverarbeitungsvertrag nach Art. 28 DSGVO.",
          },
          {
            type: "p",
            text: "Vertrags- und Zahlungsdaten werden für die Dauer des Vertragsverhältnisses und anschließend im Rahmen der gesetzlichen Aufbewahrungsfristen (insbesondere § 147 AO, § 257 HGB) gespeichert und danach gelöscht.",
          },
        ],
      },
    ],
    updated: UPDATED.de,
  },
  cookies: {
    title: "Cookie-Konzept — Ulpan Ivrit",
    desc: "Cookie-Konzept nach TDDDG und DSGVO für www.ulpan-ivrit.de: keine Tracking-Cookies.",
    h1: "Cookie-Konzept",
    lead: "Dieses Konzept beschreibt, ob und wie www.ulpan-ivrit.de Informationen auf Ihrem Gerät speichert (§ 25 TDDDG) und personenbezogene Daten dabei verarbeitet (DSGVO).",
    sections: [
      {
        h2: "Grundsatz",
        blocks: [
          {
            type: "p",
            text: "Wir verwenden keine Tracking-, Analyse- oder Marketing-Cookies. Es gibt keinen Consent-Banner, weil keine nicht erforderlichen Zugriffe auf das Endgerät stattfinden. Technisch notwendige Speicherung im Sinne von § 25 Abs. 2 TDDDG setzen wir derzeit nicht ein.",
          },
        ],
      },
      {
        h2: "Inventar",
        blocks: [
          {
            type: "table",
            headers: [
              "Name",
              "Anbieter",
              "Zweck",
              "Speicherdauer",
              "Rechtsgrundlage",
              "Typ",
            ],
            rows: [],
            empty:
              "Keine Cookies, kein localStorage, kein sessionStorage. Die Tabelle ist absichtlich leer.",
          },
        ],
      },
      {
        h2: "Keine Cookies, aber Datenverarbeitung",
        blocks: [
          {
            type: "p",
            text: "Ohne Cookie können dennoch Daten anfallen. Sie stehen hier, damit das Konzept vollständig ist — es handelt sich nicht um Endgeräte-Speicherung nach § 25 TDDDG.",
          },
          {
            type: "ul",
            items: [
              "Server-Logfiles beim Hosting (Vercel): IP, Zeitpunkt, URL — Art. 6 Abs. 1 lit. f DSGVO, Betrieb und Sicherheit.",
              "Formular- oder E-Mail-Inhalt, den Sie absenden — Art. 6 Abs. 1 lit. b / f DSGVO, Bearbeitung der Anfrage.",
            ],
          },
        ],
      },
      {
        h2: "Kategorien für später",
        blocks: [
          {
            type: "p",
            text: "Falls Analyse oder Marketing ergänzt wird, gilt: erst Einwilligung (Art. 6 Abs. 1 lit. a DSGVO und § 25 Abs. 1 TDDDG), dann Setzen. Ablehnen muss ebenso leicht sein wie Zustimmen. Technisch notwendige Mittel bleiben ohne Einwilligung zulässig (§ 25 Abs. 2 TDDDG).",
          },
        ],
      },
      {
        h2: "Kontrolle im Browser",
        blocks: [
          {
            type: "p",
            text: "Cookies und Speicher können Sie in den Browsereinstellungen einsehen und löschen. Auf dieser Domain sollte derzeit nichts von uns liegen.",
          },
        ],
      },
    ],
    updated: UPDATED.de,
  },
  teilnahmebedingungen: {
    title: "Teilnahmebedingungen — Ulpan Ivrit",
    desc: "Teilnahmebedingungen für die Hebräischkurse von Ulpan Ivrit, Anbieter BiFoDe e.V.",
    h1: "Teilnahmebedingungen",
    lead: "Diese Teilnahmebedingungen gelten für die Teilnahme an den Hebräischkursen von Ulpan Ivrit. Anbieter und Vertragspartner ist BiFoDe e.V., Allgäustr. 45, 42651 Solingen. Anmeldung und Zahlung laufen über das Anmeldeformular; diese Website ist nur die öffentliche Darstellung des Angebots.",
    sections: [
      {
        h2: "1. Geltungsbereich und Anbieter",
        blocks: [
          {
            type: "p",
            text: "Diese Teilnahmebedingungen regeln das Vertragsverhältnis zwischen dem Bildungsforum für Demokratie und Vielfalt NRW e.V. (BiFoDe e.V.), Allgäustr. 45, 42651 Solingen, und den Teilnehmenden der Hebräischkurse von Ulpan Ivrit. Sie gelten für Präsenz- und Online-Kurse gleichermaßen.",
          },
          {
            type: "p",
            text: "Vertragssprache ist Deutsch. Abweichende Bedingungen der Teilnehmenden werden nicht Vertragsbestandteil, es sei denn, BiFoDe e.V. stimmt ihnen ausdrücklich in Textform zu.",
          },
        ],
      },
      {
        h2: "2. Leistungen",
        blocks: [
          {
            type: "p",
            text: "Ulpan Ivrit bietet Hebräischkurse nach der Methodik der Hebräischen Universität Jerusalem mit Schwerpunkt auf gesprochenem Hebräisch. Der Unterricht findet in Präsenzgruppen (in Räumen jüdischer Gemeinden oder weiterer Träger) und/oder online über die Lernplattform Moodle (ulpan.bifode.org) statt.",
          },
          {
            type: "p",
            text: "Ein Termin umfasst 90 Minuten (zwei Unterrichtseinheiten à 45 Minuten). Ein A1-Kurs umfasst in der Regel 30 Termine à 90 Minuten, insgesamt 60 Unterrichtseinheiten (UE). Ort, Wochentag, Uhrzeit und Kurszeitraum des jeweiligen Kurses ergeben sich aus der Kursbeschreibung und dem Anmeldeformular.",
          },
          {
            type: "p",
            text: "Umfang, Niveau, Termine, Ort und Preis des jeweiligen Kurses ergeben sich aus der Kursbeschreibung und dem Anmeldeformular. Maßgeblich sind die dort genannten Angaben zum konkreten Kurs.",
          },
        ],
      },
      {
        h2: "3. Anmeldung und Vertragsschluss",
        blocks: [
          {
            type: "p",
            text: "Die Anmeldung erfolgt über das auf dieser Website eingebettete Anmeldeformular (Jotform). Mit dem Absenden geben die Teilnehmenden ein verbindliches Angebot zum Abschluss eines Teilnahmevertrags ab.",
          },
          {
            type: "p",
            text: "Der Vertrag kommt zustande, wenn BiFoDe e.V. die Anmeldung bestätigt — in der Regel durch eine Bestätigung per E-Mail mit Kursdaten und Zugang zu Moodle.",
          },
          {
            type: "p",
            text: "Die Teilnahme setzt freie Plätze voraus. Bei ausgebuchten Kursen kann ein Platz auf einer Warteliste angeboten werden.",
          },
        ],
      },
      {
        h2: "4. Mitgliedschaft (optional)",
        blocks: [
          {
            type: "p",
            text: "Die Mitgliedschaft bei BiFoDe e.V. ist kostenlos und freiwillig. Sie ist keine Voraussetzung für die Teilnahme, verringert jedoch den Kursbeitrag (ermäßigter Tarif für Mitglieder).",
          },
          {
            type: "p",
            text: "Für die Mitgliedschaft gelten die Satzung und die Beitragsordnung von BiFoDe e.V. Sie wird getrennt vom Teilnahmevertrag begründet und beendet.",
          },
        ],
      },
      {
        h2: "5. Preise und Zahlung",
        blocks: [
          {
            type: "p",
            text: "Für einen A1-Kurs beträgt der Beitrag 60 € pro Monat mit kostenloser Mitgliedschaft bei BiFoDe e.V. (insgesamt 480 €) bzw. 120 € pro Monat ohne Mitgliedschaft (insgesamt 960 €). Der Beitrag wird in 8 Monatsraten per SEPA-Basislastschrift eingezogen. Maßgeblich sind die im Anmeldeformular angegebenen Preise.",
          },
          {
            type: "p",
            text: "Mit Erteilung des SEPA-Lastschriftmandats ermächtigen die Teilnehmenden BiFoDe e.V., die fälligen Beträge mittels SEPA-Basislastschrift von ihrem Konto einzuziehen. Gläubiger-Identifikationsnummer: DE86ZZZ00002929761. Die Mandatsreferenz wird gesondert mitgeteilt. Über den Einzug informieren wir Sie vorab (Vorabinformation/Pre-Notification) spätestens 14 Tage vor Fälligkeit; bei wiederkehrenden Lastschriften genügt eine einmalige Vorabinformation mit den Fälligkeitsterminen.",
          },
          {
            type: "p",
            text: "Kommt eine Lastschrift mangels Deckung oder aus von den Teilnehmenden zu vertretenden Gründen nicht zustande, tragen die Teilnehmenden die dadurch entstehenden Rücklastschriftgebühren.",
          },
        ],
      },
      {
        h2: "6. Widerrufsrecht für Verbraucher",
        blocks: [
          {
            type: "p",
            text: "Verbraucherinnen und Verbraucher haben bei einem im Fernabsatz geschlossenen Vertrag ein gesetzliches Widerrufsrecht von vierzehn Tagen ab dem Tag des Vertragsschlusses.",
          },
          {
            type: "p",
            text: "Die vollständige Widerrufsbelehrung und das Muster-Widerrufsformular finden Sie unter https://www.ulpan-ivrit.de/widerruf.",
          },
          {
            type: "p",
            text: "Haben Sie ausdrücklich verlangt, dass die Dienstleistung bereits während der Widerrufsfrist beginnt, und widerrufen Sie anschließend, so schulden Sie einen angemessenen Betrag für die bis zum Widerruf bereits erbrachten Leistungen (§§ 356 Abs. 4, 357a BGB).",
          },
        ],
      },
      {
        h2: "7. Rücktritt und Kündigung durch Teilnehmende",
        blocks: [
          {
            type: "p",
            text: "Nach Ablauf der Widerrufsfrist ist der Teilnahmevertrag für die gesamte Kursdauer (acht Monate) verbindlich; ein ordentliches Kündigungsrecht besteht nicht. Unabhängig davon kann der Teilnahmevertrag aus wichtigem Grund außerordentlich gekündigt werden.",
          },
          {
            type: "p",
            text: "Die Kündigung bedarf der Textform (z. B. E-Mail an info@bifode.org). Bereits entstandene Beiträge für in Anspruch genommene Leistungen bleiben unberührt.",
          },
        ],
      },
      {
        h2: "8. Absage und Änderungen durch den Anbieter",
        blocks: [
          {
            type: "p",
            text: "Kommt die für einen Kurs erforderliche Mindestteilnehmerzahl (in der Regel 15 Personen) nicht zustande oder liegt ein sonstiger wichtiger Grund vor, kann BiFoDe e.V. einen Kurs absagen oder verschieben. Bereits gezahlte Beiträge für nicht erbrachte Leistungen werden in diesem Fall erstattet.",
          },
          {
            type: "p",
            text: "Aus organisatorischen Gründen (z. B. Ausfall einer Lehrkraft) können einzelne Termine verlegt oder durch gleichwertige Online-Termine ersetzt werden. Die Teilnehmenden werden rechtzeitig informiert.",
          },
          {
            type: "p",
            text: "Versäumt der Teilnehmende einzelne Termine, besteht kein Anspruch auf Erstattung oder Minderung der Kursgebühr. Die Kursgebühr sichert den Kursplatz unabhängig von der tatsächlichen Teilnahme.",
          },
        ],
      },
      {
        h2: "9. Pflichten der Teilnehmenden und Moodle-Zugang",
        blocks: [
          {
            type: "p",
            text: "Die Teilnehmenden machen bei der Anmeldung wahrheitsgemäße Angaben und halten ihre Kontaktdaten aktuell.",
          },
          {
            type: "p",
            text: "Der Zugang zur Lernplattform Moodle ist persönlich und nicht übertragbar. Zugangsdaten sind vertraulich zu behandeln.",
          },
          {
            type: "p",
            text: "Ein respektvoller Umgang im Unterricht und auf der Lernplattform wird vorausgesetzt. Bei schwerwiegenden oder wiederholten Verstößen kann BiFoDe e.V. von der weiteren Teilnahme ausschließen.",
          },
        ],
      },
      {
        h2: "10. Urheberrecht an Lehrmaterialien",
        blocks: [
          {
            type: "p",
            text: "Die im Kurs und in Moodle bereitgestellten Materialien sind urheberrechtlich geschützt und dürfen ausschließlich zu eigenen Lernzwecken genutzt werden. Eine Vervielfältigung, Weitergabe oder Veröffentlichung — auch auszugsweise — ist ohne vorherige Zustimmung nicht gestattet.",
          },
        ],
      },
      {
        h2: "11. Haftung",
        blocks: [
          {
            type: "p",
            text: "BiFoDe e.V. haftet unbeschränkt für Schäden aus der Verletzung des Lebens, des Körpers oder der Gesundheit sowie für Vorsatz und grobe Fahrlässigkeit.",
          },
          {
            type: "p",
            text: "Für leicht fahrlässige Verletzungen wesentlicher Vertragspflichten (Kardinalpflichten) ist die Haftung auf den vertragstypischen, vorhersehbaren Schaden begrenzt. Im Übrigen ist die Haftung ausgeschlossen. Zwingende gesetzliche Regelungen bleiben unberührt.",
          },
        ],
      },
      {
        h2: "12. Datenschutz",
        blocks: [
          {
            type: "p",
            text: "Personenbezogene Daten werden ausschließlich zur Durchführung des Vertrags und im gesetzlich zulässigen Rahmen verarbeitet. Einzelheiten stehen in der Datenschutzerklärung.",
          },
        ],
      },
      {
        h2: "13. Schlussbestimmungen",
        blocks: [
          {
            type: "p",
            text: "Es gilt das Recht der Bundesrepublik Deutschland unter Ausschluss des UN-Kaufrechts. Zwingende Verbraucherschutzvorschriften des Staates des gewöhnlichen Aufenthalts der Verbraucher bleiben unberührt.",
          },
          {
            type: "p",
            text: "Änderungen und Ergänzungen dieser AGB bedürfen der Textform. Sollte eine Bestimmung unwirksam sein, bleibt die Wirksamkeit der übrigen Bestimmungen unberührt.",
          },
          {
            type: "p",
            text: "BiFoDe e.V. beschäftigt nicht mehr als zehn Personen; eine Hinweispflicht nach § 36 VSBG besteht daher nicht. Der Verein ist nicht bereit und nicht verpflichtet, an einem Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen. Im Übrigen gelten die Hinweise im Impressum.",
          },
        ],
      },
    ],
    updated: UPDATED.de,
  },
  // WICHTIG: Der Wortlaut der Widerrufsbelehrung und des Muster-Widerrufsformulars
  // folgt den amtlichen Mustern (Anlage 1 und Anlage 2 zu Art. 246a EGBGB). Vor
  // Veröffentlichung mit der aktuellen Fassung auf gesetze-im-internet.de abgleichen.
  widerruf: {
    title: "Widerrufsbelehrung — Ulpan Ivrit",
    desc: "Widerrufsbelehrung und Muster-Widerrufsformular für die Hebräischkurse von Ulpan Ivrit.",
    h1: "Widerrufsbelehrung",
    lead: "Diese Widerrufsbelehrung gilt für Verbraucherinnen und Verbraucher, die einen Teilnahmevertrag im Fernabsatz mit BiFoDe e.V. abschließen.",
    sections: [
      {
        h2: "Widerrufsrecht",
        blocks: [
          {
            type: "p",
            text: "Sie haben das Recht, binnen vierzehn Tagen ohne Angabe von Gründen diesen Vertrag zu widerrufen.",
          },
          {
            type: "p",
            text: "Die Widerrufsfrist beträgt vierzehn Tage ab dem Tag des Vertragsabschlusses.",
          },
          {
            type: "p",
            text: "Um Ihr Widerrufsrecht auszuüben, müssen Sie uns (BiFoDe e.V., Allgäustr. 45, 42651 Solingen, info@bifode.org) mittels einer eindeutigen Erklärung (z. B. ein mit der Post versandter Brief oder eine E-Mail) über Ihren Entschluss, diesen Vertrag zu widerrufen, informieren. Sie können dafür das beigefügte Muster-Widerrufsformular verwenden, das jedoch nicht vorgeschrieben ist.",
          },
          {
            type: "p",
            text: "Zur Wahrung der Widerrufsfrist reicht es aus, dass Sie die Mitteilung über die Ausübung des Widerrufsrechts vor Ablauf der Widerrufsfrist absenden.",
          },
        ],
      },
      {
        h2: "Folgen des Widerrufs",
        blocks: [
          {
            type: "p",
            text: "Wenn Sie diesen Vertrag widerrufen, haben wir Ihnen alle Zahlungen, die wir von Ihnen erhalten haben, einschließlich der Lieferkosten (mit Ausnahme der zusätzlichen Kosten, die sich daraus ergeben, dass Sie eine andere Art der Lieferung als die von uns angebotene, günstigste Standardlieferung gewählt haben), unverzüglich und spätestens binnen vierzehn Tagen ab dem Tag zurückzuzahlen, an dem die Mitteilung über Ihren Widerruf dieses Vertrags bei uns eingegangen ist. Für diese Rückzahlung verwenden wir dasselbe Zahlungsmittel, das Sie bei der ursprünglichen Transaktion eingesetzt haben, es sei denn, mit Ihnen wurde ausdrücklich etwas anderes vereinbart; in keinem Fall werden Ihnen wegen dieser Rückzahlung Entgelte berechnet.",
          },
          {
            type: "p",
            text: "Haben Sie verlangt, dass die Dienstleistungen während der Widerrufsfrist beginnen sollen, so haben Sie uns einen angemessenen Betrag zu zahlen, der dem Anteil der bis zu dem Zeitpunkt, zu dem Sie uns von der Ausübung des Widerrufsrechts hinsichtlich dieses Vertrags unterrichten, bereits erbrachten Dienstleistungen im Vergleich zum Gesamtumfang der im Vertrag vorgesehenen Dienstleistungen entspricht (§§ 356 Abs. 4, 357a BGB).",
          },
        ],
      },
      {
        h2: "Muster-Widerrufsformular",
        blocks: [
          {
            type: "p",
            text: "(Wenn Sie den Vertrag widerrufen wollen, dann füllen Sie bitte dieses Formular aus und senden Sie es zurück.)",
          },
          {
            type: "ul",
            items: [
              "An BiFoDe e.V., Allgäustr. 45, 42651 Solingen, info@bifode.org:",
              "Hiermit widerrufe(n) ich/wir (*) den von mir/uns (*) abgeschlossenen Vertrag über die Erbringung der folgenden Dienstleistung (*):",
              "Bestellt am (*)/erhalten am (*):",
              "Name des/der Verbraucher(s):",
              "Anschrift des/der Verbraucher(s):",
              "Unterschrift des/der Verbraucher(s) (nur bei Mitteilung auf Papier):",
              "Datum:",
              "(*) Unzutreffendes streichen.",
            ],
          },
        ],
      },
    ],
    updated: UPDATED.de,
  },
};

const ru: Record<LegalKey, LegalDoc> = {
  impressum: {
    title: "Выходные данные — Ulpan Ivrit",
    desc: "Импрессум www.ulpan-ivrit.de по § 5 DDG, оператор BiFoDe e.V.",
    h1: "Выходные данные",
    binding: "Юридически обязательна немецкая версия.",
    lead: "www.ulpan-ivrit.de — публичная витрина Ulpan Ivrit в Германии. Оператор и носитель — BiFoDe e.V.",
    sections: [
      {
        h2: "Сведения по § 5 DDG",
        blocks: [
          {
            type: "p",
            text: "Bildungsforum für Demokratie und Vielfalt NRW e.V. (BiFoDe e.V.)",
          },
          {
            type: "ul",
            items: [
              "Представляет: Denis Vilensky, правление",
              `Эл. почта: ${LINKS.contactEmail}`,
              "Адрес: Северный Рейн — Вестфалия",
            ],
          },
        ],
      },
      {
        h2: "Реестр",
        blocks: [
          {
            type: "p",
            text: "Запись в реестре союзов. Суд: Amtsgericht Wuppertal. Номер: VR 31702.",
          },
        ],
      },
      {
        h2: "Ответственный за содержание",
        blocks: [
          { type: "p", text: `Denis Vilensky, ${LINKS.contactEmail}` },
        ],
      },
      {
        h2: "Ответственность за тексты и ссылки",
        blocks: [
          {
            type: "p",
            text: "Тексты подготовлены добросовестно. За полноту и актуальность мы не ручаемся. По § 7 Abs. 1 DDG мы отвечаем за собственное содержание.",
          },
          {
            type: "p",
            text: "Внешние ссылки (партнёры, Moodle) ведут на чужие сайты. На их содержание мы не влияем.",
          },
        ],
      },
      {
        h2: "Авторское право",
        blocks: [
          {
            type: "p",
            text: "Содержание сайта охраняется немецким авторским правом.",
          },
        ],
      },
      {
        h2: "Споры",
        blocks: [
          {
            type: "p",
            text: "Платформа ODR Еврокомиссии: https://ec.europa.eu/consumers/odr/",
          },
          {
            type: "p",
            text: "Мы не обязаны и не готовы участвовать в процедуре при потребительском арбитраже.",
          },
        ],
      },
    ],
    updated: UPDATED.ru,
  },
  datenschutz: {
    title: "Защита данных — Ulpan Ivrit",
    desc: "Политика конфиденциальности www.ulpan-ivrit.de (DSGVO, TDDDG).",
    h1: "Защита данных",
    binding: "Юридически обязательна немецкая версия.",
    lead: "Эта страница относится только к www.ulpan-ivrit.de. Членство, MeinVerein и Moodle — отдельные сервисы BiFoDe.",
    sections: [
      {
        h2: "1. Ответственный",
        blocks: [
          {
            type: "p",
            text: "Ответственный за обработку данных на этом сайте:",
          },
          {
            type: "ul",
            items: [
              "Bildungsforum für Demokratie und Vielfalt NRW e.V. (BiFoDe e.V.)",
              "Представляет: Denis Vilensky, правление",
              `Эл. почта: ${LINKS.contactEmail}`,
              "Адрес: Северный Рейн — Вестфалия",
            ],
          },
        ],
      },
      {
        h2: "2. Хостинг и журналы сервера",
        blocks: [
          {
            type: "p",
            text: "Сайт размещён у Vercel Inc. (США). При запросе возникают технические журналы: IP, время, URL, referrer, браузер и система.",
          },
          {
            type: "p",
            text: "Цель: выдача страниц, устойчивость, защита от злоупотреблений. Основание: ст. 6 (1)(f) DSGVO. Данные не склеиваются с другими источниками и хранятся по срокам хостера.",
          },
          {
            type: "p",
            text: "Vercel — обработчик по поручению. Возможны серверы в ЕС или США (стандартные договорные клаузулы). Политика Vercel: https://vercel.com/legal/privacy-policy",
          },
        ],
      },
      {
        h2: "3. Формы и почта",
        blocks: [
          {
            type: "p",
            text: "Пожелание площадки и заявка организатора добровольны. Обрабатываются введённые поля (имя, почта, город, текст и т. д.).",
          },
          {
            type: "p",
            text: "Цель: ответ на запрос. Основание: ст. 6 (1)(b) и (f) DSGVO.",
          },
          {
            type: "p",
            text: "Если настроен Brevo (ЕС), письмо уходит через него на info@bifode.org. Иначе открывается ваша почтовая программа.",
          },
        ],
      },
      {
        h2: "4. Членство, Moodle, партнёры",
        blocks: [
          {
            type: "p",
            text: "Запись идёт через встроенную форму (Jotform) на этом сайте. Для данных в форме действует политика BiFoDe и/или провайдера формы.",
          },
          {
            type: "p",
            text: "Moodle (ulpan.bifode.org) — отдельная система. Логотипы партнёров ведут на чужие сайты.",
          },
        ],
      },
      {
        h2: "5. Cookies (TDDDG)",
        blocks: [
          {
            type: "p",
            text: "Сайт не ставит cookies и ничего не пишет в localStorage / sessionStorage. Шрифты со своего хоста. Аналитики нет, баннера согласия нет: по § 25 TDDDG спрашивать нечего.",
          },
        ],
      },
      {
        h2: "6. Ваши права",
        blocks: [
          {
            type: "p",
            text: "Доступ, исправление, удаление, ограничение, переносимость, возражение против ст. 6 (1)(f). Письмо на info@bifode.org. Жалоба: LDI NRW, https://www.ldi.nrw.de/",
          },
        ],
      },
      {
        h2: "7. Обязанность сообщать данные",
        blocks: [
          {
            type: "p",
            text: "Читать сайт можно без передачи данных. Поля форм обязательны только если вы хотите нам написать.",
          },
        ],
      },
      {
        h2: "8. Запись и оплата",
        blocks: [
          {
            type: "p",
            text: "Запись на курсы идёт через встроенную на этом сайте форму Jotform (Jotform Inc., США). При этом мы обрабатываем введённые вами данные, в частности имя, контактные данные, адрес, а также платёжные данные, необходимые для списания по SEPA (например, владелец счёта, IBAN).",
          },
          {
            type: "p",
            text: "Цель — заключение и исполнение договора об участии, включая расчёты. Основание: ст. 6 (1)(b) DSGVO (договор), а также ст. 6 (1)(c) DSGVO (налоговые и торгово-правовые сроки хранения).",
          },
          {
            type: "p",
            text: "Взнос списывается по SEPA-Basislastschrift (идентификатор кредитора DE86ZZZ00002929761). Для этого платёжные и членские данные обрабатываются в программе управления союзом MeinVerein; с поставщиком заключён договор об обработке данных по поручению согласно ст. 28 GDPR.",
          },
          {
            type: "p",
            text: "Форма записи предоставляется через Jotform с хостингом в ЕС; данные обрабатываются в пределах Европейского союза. С Jotform заключён договор об обработке данных по поручению согласно ст. 28 GDPR.",
          },
          {
            type: "p",
            text: "Договорные и платёжные данные хранятся в течение срока действия договора и далее в рамках установленных законом сроков хранения (в частности § 147 AO, § 257 HGB), после чего удаляются.",
          },
        ],
      },
    ],
    updated: UPDATED.ru,
  },
  cookies: {
    title: "Концепция cookies — Ulpan Ivrit",
    desc: "Концепция cookies по TDDDG и DSGVO для www.ulpan-ivrit.de.",
    h1: "Концепция cookies",
    binding: "Юридически обязательна немецкая версия.",
    lead: "Описывает, сохраняет ли www.ulpan-ivrit.de данные на вашем устройстве (§ 25 TDDDG) и как обрабатываются персональные данные.",
    sections: [
      {
        h2: "Принцип",
        blocks: [
          {
            type: "p",
            text: "Нет cookies для учёта, аналитики или рекламы. Нет баннера согласия: необязательного доступа к устройству нет. Технически необходимое хранение по § 25 Abs. 2 TDDDG сейчас не используется.",
          },
        ],
      },
      {
        h2: "Реестр",
        blocks: [
          {
            type: "table",
            headers: ["Имя", "Поставщик", "Цель", "Срок", "Основание", "Тип"],
            rows: [],
            empty: "Нет cookies, нет localStorage, нет sessionStorage. Таблица пустая намеренно.",
          },
        ],
      },
      {
        h2: "Без cookies, но с обработкой",
        blocks: [
          {
            type: "ul",
            items: [
              "Журналы хостинга (Vercel): IP, время, URL — ст. 6 (1)(f) DSGVO.",
              "Текст формы или письма, который вы сами отправляете — ст. 6 (1)(b)/(f) DSGVO.",
            ],
          },
        ],
      },
      {
        h2: "Если позже появится аналитика",
        blocks: [
          {
            type: "p",
            text: "Сначала согласие (ст. 6 (1)(a) DSGVO и § 25 Abs. 1 TDDDG), потом cookie. Отказ не должен быть сложнее согласия.",
          },
        ],
      },
    ],
    updated: UPDATED.ru,
  },
  teilnahmebedingungen: {
    title: "Условия участия — Ulpan Ivrit",
    desc: "Условия участия в курсах иврита Ulpan Ivrit, оператор BiFoDe e.V.",
    h1: "Условия участия",
    binding: "Юридически обязательна немецкая версия.",
    lead: "Эти условия участия регулируют участие в курсах иврита Ulpan Ivrit. Оператор и сторона договора — BiFoDe e.V., Allgäustr. 45, 42651 Solingen. Запись и оплата идут через форму записи; этот сайт — только публичная витрина предложения.",
    sections: [
      {
        h2: "1. Сфера действия и оператор",
        blocks: [
          {
            type: "p",
            text: "Эти условия регулируют отношения между Bildungsforum für Demokratie und Vielfalt NRW e.V. (BiFoDe e.V.), Allgäustr. 45, 42651 Solingen, и участниками курсов иврита Ulpan Ivrit. Они одинаково действуют для очных и онлайн-курсов.",
          },
          {
            type: "p",
            text: "Язык договора — немецкий. Иные условия участников не становятся частью договора, если BiFoDe e.V. прямо не согласится с ними в текстовой форме.",
          },
        ],
      },
      {
        h2: "2. Услуги",
        blocks: [
          {
            type: "p",
            text: "Ulpan Ivrit проводит курсы иврита по методике Еврейского университета в Иерусалиме с упором на разговорный иврит. Занятия проходят в очных группах (в помещениях еврейских общин или иных организаторов) и/или онлайн на платформе Moodle (ulpan.bifode.org).",
          },
          {
            type: "p",
            text: "Одно занятие (Termin) длится 90 минут (две учебные единицы, Unterrichtseinheit, по 45 минут). Курс уровня A1, как правило, включает 30 занятий по 90 минут, всего 60 учебных единиц (UE). Место проведения, день недели, время и период курса указаны в описании курса и форме записи.",
          },
          {
            type: "p",
            text: "Объём, уровень, даты, место и цена конкретного курса указаны в описании курса и в форме записи. Решающими являются указанные там сведения о конкретном курсе.",
          },
        ],
      },
      {
        h2: "3. Запись и заключение договора",
        blocks: [
          {
            type: "p",
            text: "Запись производится через встроенную на этом сайте форму записи (Jotform). Отправляя форму, участник делает обязывающее предложение заключить договор об участии.",
          },
          {
            type: "p",
            text: "Договор считается заключённым, когда BiFoDe e.V. подтверждает запись — как правило, письмом по электронной почте с данными курса и доступом в Moodle.",
          },
          {
            type: "p",
            text: "Участие возможно при наличии свободных мест. При заполненных группах может быть предложено место в листе ожидания.",
          },
        ],
      },
      {
        h2: "4. Членство (по желанию)",
        blocks: [
          {
            type: "p",
            text: "Членство в BiFoDe e.V. бесплатное и добровольное. Оно не является условием участия, но снижает стоимость курса (льготный тариф для членов).",
          },
          {
            type: "p",
            text: "К членству применяются устав и положение о взносах BiFoDe e.V. Оно оформляется и прекращается отдельно от договора об участии.",
          },
        ],
      },
      {
        h2: "5. Цены и оплата",
        blocks: [
          {
            type: "p",
            text: "Для курса A1 взнос составляет 60 € в месяц при бесплатном членстве в BiFoDe e.V. (всего 480 €) либо 120 € в месяц без членства (всего 960 €). Взнос списывается 8 ежемесячными платежами по SEPA-Basislastschrift. Решающими являются цены, указанные в форме записи.",
          },
          {
            type: "p",
            text: "Выдавая мандат SEPA, участник уполномочивает BiFoDe e.V. списывать причитающиеся суммы со своего счёта в порядке SEPA-Basislastschrift. Идентификатор кредитора (Gläubiger-Identifikationsnummer): DE86ZZZ00002929761. Референс мандата сообщается отдельно. О списании мы уведомляем вас заранее (предварительное уведомление/pre-notification) не позднее чем за 14 дней до срока; при повторяющихся списаниях достаточно однократного уведомления с указанием сроков.",
          },
          {
            type: "p",
            text: "Если списание не проходит из-за недостатка средств или по причинам на стороне участника, участник несёт связанные с этим комиссии за возврат платежа.",
          },
        ],
      },
      {
        h2: "6. Право на отказ для потребителей",
        blocks: [
          {
            type: "p",
            text: "При договоре, заключённом дистанционно, потребители имеют установленное законом право на отказ в течение четырнадцати дней со дня заключения договора.",
          },
          {
            type: "p",
            text: "Полный текст разъяснения о праве на отказ и образец формы отказа вы найдёте на странице https://www.ulpan-ivrit.de/widerruf.",
          },
          {
            type: "p",
            text: "Если вы прямо попросили начать оказание услуги уже в течение срока на отказ и затем отказались, вы обязаны оплатить соразмерную сумму за уже оказанные до отказа услуги (§§ 356 Abs. 4, 357a BGB).",
          },
        ],
      },
      {
        h2: "7. Расторжение участником",
        blocks: [
          {
            type: "p",
            text: "После истечения срока на отказ договор об участии является обязательным на весь срок курса (восемь месяцев); право на обычное расторжение не предусмотрено. Независимо от этого договор может быть расторгнут в чрезвычайном порядке по важной причине.",
          },
          {
            type: "p",
            text: "Расторжение оформляется в текстовой форме (например, письмом на info@bifode.org). Уже возникшие взносы за использованные услуги остаются в силе.",
          },
        ],
      },
      {
        h2: "8. Отмена и изменения со стороны оператора",
        blocks: [
          {
            type: "p",
            text: "Если не набирается необходимое минимальное число участников (как правило, 15 человек) или есть иная важная причина, BiFoDe e.V. может отменить или перенести курс. Уже уплаченные взносы за неоказанные услуги в этом случае возвращаются.",
          },
          {
            type: "p",
            text: "По организационным причинам (например, отсутствие преподавателя) отдельные занятия могут быть перенесены или заменены равноценными онлайн-занятиями. Участников своевременно информируют.",
          },
          {
            type: "p",
            text: "Если участник пропускает отдельные занятия, право на возврат или снижение платы за курс не возникает. Плата за курс обеспечивает место на курсе независимо от фактического посещения.",
          },
        ],
      },
      {
        h2: "9. Обязанности участников и доступ в Moodle",
        blocks: [
          {
            type: "p",
            text: "При записи участники указывают достоверные данные и поддерживают свои контактные данные в актуальном состоянии.",
          },
          {
            type: "p",
            text: "Доступ к платформе Moodle персональный и не передаётся. Данные для входа следует хранить конфиденциально.",
          },
          {
            type: "p",
            text: "Предполагается уважительное поведение на занятиях и на платформе. При серьёзных или повторных нарушениях BiFoDe e.V. может отстранить от дальнейшего участия.",
          },
        ],
      },
      {
        h2: "10. Авторские права на учебные материалы",
        blocks: [
          {
            type: "p",
            text: "Материалы, предоставляемые на курсе и в Moodle, охраняются авторским правом и могут использоваться только для собственного обучения. Копирование, передача или публикация — в том числе частичная — без предварительного согласия не допускаются.",
          },
        ],
      },
      {
        h2: "11. Ответственность",
        blocks: [
          {
            type: "p",
            text: "BiFoDe e.V. несёт неограниченную ответственность за вред жизни, телу и здоровью, а также за умысел и грубую неосторожность.",
          },
          {
            type: "p",
            text: "За лёгкую неосторожность при нарушении существенных договорных обязанностей ответственность ограничена типичным и предвидимым ущербом. В остальном ответственность исключается. Обязательные нормы закона остаются в силе.",
          },
        ],
      },
      {
        h2: "12. Защита данных",
        blocks: [
          {
            type: "p",
            text: "Персональные данные обрабатываются только для исполнения договора и в пределах, допустимых законом. Подробности — в политике конфиденциальности.",
          },
        ],
      },
      {
        h2: "13. Заключительные положения",
        blocks: [
          {
            type: "p",
            text: "Применяется право Федеративной Республики Германия с исключением Венской конвенции о договорах купли-продажи. Обязательные нормы защиты потребителей страны их обычного проживания остаются в силе.",
          },
          {
            type: "p",
            text: "Изменения и дополнения этих условий оформляются в текстовой форме. Если отдельное положение недействительно, действительность остальных положений сохраняется.",
          },
          {
            type: "p",
            text: "BiFoDe e.V. занимает не более десяти человек, поэтому обязанность указания согласно § 36 VSBG отсутствует. Союз не готов и не обязан участвовать в процедуре урегулирования споров в арбитражной комиссии по делам потребителей. В остальном действуют указания в выходных данных (Impressum).",
          },
        ],
      },
    ],
    updated: UPDATED.ru,
  },
  widerruf: {
    title: "Право на отказ — Ulpan Ivrit",
    desc: "Разъяснение о праве на отказ и образец формы отказа для курсов иврита Ulpan Ivrit.",
    h1: "Право на отказ (Widerrufsbelehrung)",
    binding: "Юридически обязательна немецкая версия.",
    lead: "Это разъяснение о праве на отказ действует для потребителей, заключающих договор об участии с BiFoDe e.V. дистанционно.",
    sections: [
      {
        h2: "Право на отказ",
        blocks: [
          {
            type: "p",
            text: "Вы вправе в течение четырнадцати дней без объяснения причин отказаться от этого договора.",
          },
          {
            type: "p",
            text: "Срок на отказ составляет четырнадцать дней со дня заключения договора.",
          },
          {
            type: "p",
            text: "Чтобы воспользоваться правом на отказ, вы должны уведомить нас (BiFoDe e.V., Allgäustr. 45, 42651 Solingen, info@bifode.org) о своём решении отказаться от договора однозначным заявлением (например, письмом по почте или по электронной почте). Вы можете воспользоваться прилагаемым образцом формы отказа, но это не обязательно.",
          },
          {
            type: "p",
            text: "Для соблюдения срока на отказ достаточно отправить сообщение об использовании права на отказ до истечения срока.",
          },
        ],
      },
      {
        h2: "Последствия отказа",
        blocks: [
          {
            type: "p",
            text: "Если вы отказываетесь от этого договора, мы обязаны вернуть вам все полученные от вас платежи, включая расходы на доставку (за исключением дополнительных расходов, возникших из-за выбранного вами способа доставки, отличного от предложенного нами самого дешёвого стандартного способа), незамедлительно и не позднее чем в течение четырнадцати дней со дня получения нами уведомления о вашем отказе от договора. Для возврата мы используем то же платёжное средство, которое вы использовали при первоначальной операции, если с вами прямо не согласовано иное; ни в коем случае вам не начисляются сборы за этот возврат.",
          },
          {
            type: "p",
            text: "Если вы потребовали, чтобы оказание услуг началось в течение срока на отказ, вы обязаны уплатить нам соразмерную сумму, соответствующую доле уже оказанных до момента уведомления об отказе услуг по сравнению с общим объёмом услуг, предусмотренных договором (§§ 356 Abs. 4, 357a BGB).",
          },
        ],
      },
      {
        h2: "Образец формы отказа",
        blocks: [
          {
            type: "p",
            text: "(Если вы хотите отказаться от договора, заполните, пожалуйста, эту форму и отправьте её обратно.)",
          },
          {
            type: "ul",
            items: [
              "Кому: BiFoDe e.V., Allgäustr. 45, 42651 Solingen, info@bifode.org:",
              "Настоящим я/мы (*) отказываюсь/отказываемся (*) от заключённого мной/нами (*) договора об оказании следующей услуги (*):",
              "Заказано (*)/получено (*):",
              "Имя потребителя(ей):",
              "Адрес потребителя(ей):",
              "Подпись потребителя(ей) (только при уведомлении на бумаге):",
              "Дата:",
              "(*) Ненужное зачеркнуть.",
            ],
          },
        ],
      },
    ],
    updated: UPDATED.ru,
  },
};

const en: Record<LegalKey, LegalDoc> = {
  impressum: {
    title: "Imprint — Ulpan Ivrit",
    desc: "Legal notice under § 5 DDG for www.ulpan-ivrit.de, host BiFoDe e.V.",
    h1: "Imprint",
    binding: "The German text is legally binding.",
    lead: "www.ulpan-ivrit.de is the public Ulpan Ivrit site in Germany. The service provider is BiFoDe e.V.",
    sections: [
      {
        h2: "Information under § 5 DDG",
        blocks: [
          {
            type: "p",
            text: "Bildungsforum für Demokratie und Vielfalt NRW e.V. (BiFoDe e.V.)",
          },
          {
            type: "ul",
            items: [
              "Represented by: Denis Vilensky, board",
              `Email: ${LINKS.contactEmail}`,
              "Address: North Rhine-Westphalia",
            ],
          },
        ],
      },
      {
        h2: "Register",
        blocks: [
          {
            type: "p",
            text: "Registered association. Court: Amtsgericht Wuppertal. Number: VR 31702.",
          },
        ],
      },
      {
        h2: "Responsible for content",
        blocks: [
          { type: "p", text: `Denis Vilensky, ${LINKS.contactEmail}` },
        ],
      },
      {
        h2: "Liability for content and links",
        blocks: [
          {
            type: "p",
            text: "Content is prepared with care. We do not guarantee completeness. Under § 7 (1) DDG we are responsible for our own content.",
          },
          {
            type: "p",
            text: "External links (partners, Moodle) lead to third-party sites. We have no control over those pages.",
          },
        ],
      },
      {
        h2: "Copyright",
        blocks: [
          {
            type: "p",
            text: "Site content is protected by German copyright law.",
          },
        ],
      },
      {
        h2: "Dispute resolution",
        blocks: [
          {
            type: "p",
            text: "EU ODR platform: https://ec.europa.eu/consumers/odr/",
          },
          {
            type: "p",
            text: "We are neither obliged nor willing to take part in consumer arbitration.",
          },
        ],
      },
    ],
    updated: UPDATED.en,
  },
  datenschutz: {
    title: "Privacy — Ulpan Ivrit",
    desc: "Privacy notice for www.ulpan-ivrit.de under GDPR and TDDDG.",
    h1: "Privacy",
    binding: "The German text is legally binding.",
    lead: "This notice covers www.ulpan-ivrit.de only. Membership, MeinVerein and Moodle are other BiFoDe services.",
    sections: [
      {
        h2: "1. Controller",
        blocks: [
          { type: "p", text: "Controller for personal data on this website:" },
          {
            type: "ul",
            items: [
              "Bildungsforum für Demokratie und Vielfalt NRW e.V. (BiFoDe e.V.)",
              "Represented by: Denis Vilensky, board",
              `Email: ${LINKS.contactEmail}`,
              "Address: North Rhine-Westphalia",
            ],
          },
        ],
      },
      {
        h2: "2. Hosting and server logs",
        blocks: [
          {
            type: "p",
            text: "The site is hosted by Vercel Inc. (USA). Requests produce technical logs: IP, time, URL, referrer, browser and OS.",
          },
          {
            type: "p",
            text: "Purpose: delivery, stability, abuse prevention. Legal basis: Art. 6 (1)(f) GDPR. Logs are not merged with other sources and are stored per the host’s retention.",
          },
          {
            type: "p",
            text: "Vercel is a processor. Servers may be in the EU or the US (standard contractual clauses). Vercel privacy: https://vercel.com/legal/privacy-policy",
          },
        ],
      },
      {
        h2: "3. Forms and email",
        blocks: [
          {
            type: "p",
            text: "Location requests and host enquiries are voluntary. We process the fields you enter.",
          },
          {
            type: "p",
            text: "Purpose: handling the request. Legal basis: Art. 6 (1)(b) and (f) GDPR.",
          },
          {
            type: "p",
            text: "If Brevo is configured (EU), the message is sent via that processor to info@bifode.org. Otherwise your mail app opens.",
          },
        ],
      },
      {
        h2: "4. Membership, Moodle, partners",
        blocks: [
          {
            type: "p",
            text: "Registration uses an embedded form (Jotform, USA) on this site. For data entered there, BiFoDe’s and/or the form provider’s privacy notice applies as relevant.",
          },
          {
            type: "p",
            text: "Moodle (ulpan.bifode.org) is a separate system. Partner logos link to third-party sites.",
          },
        ],
      },
      {
        h2: "5. Cookies (TDDDG)",
        blocks: [
          {
            type: "p",
            text: "This site sets no cookies and does not write localStorage or sessionStorage. Fonts are self-hosted. There is no analytics and no consent banner: § 25 TDDDG does not require consent here.",
          },
        ],
      },
      {
        h2: "6. Your rights",
        blocks: [
          {
            type: "p",
            text: "Access, rectification, erasure, restriction, portability, and objection to Art. 6 (1)(f) processing. Email info@bifode.org. Complaint: LDI NRW, https://www.ldi.nrw.de/",
          },
        ],
      },
      {
        h2: "7. Obligation to provide data",
        blocks: [
          {
            type: "p",
            text: "You can read the public pages without sending data. Form fields are required only if you choose to write to us.",
          },
        ],
      },
      {
        h2: "8. Registration and payment processing",
        blocks: [
          {
            type: "p",
            text: "Registration for the courses runs through a form embedded on this website by Jotform (Jotform Inc., USA). We process the data you enter, in particular name, contact details, address and the payment data required for SEPA direct debit (e.g. account holder, IBAN).",
          },
          {
            type: "p",
            text: "The purpose is the conclusion and performance of the participation contract, including payment processing. Legal basis: Art. 6 (1)(b) GDPR (contract) and Art. 6 (1)(c) GDPR (tax and commercial retention obligations).",
          },
          {
            type: "p",
            text: "The fee is collected by SEPA core direct debit (creditor identifier DE86ZZZ00002929761). Payment and membership data are processed for this purpose in the MeinVerein association management software; a data processing agreement pursuant to Art. 28 GDPR is in place with the provider.",
          },
          {
            type: "p",
            text: "The registration form is provided via Jotform with EU hosting; the data is processed within the European Union. A data processing agreement pursuant to Art. 28 GDPR is in place with Jotform.",
          },
          {
            type: "p",
            text: "Contract and payment data are stored for the duration of the contractual relationship and thereafter within the statutory retention periods (in particular § 147 AO, § 257 HGB), and then deleted.",
          },
        ],
      },
    ],
    updated: UPDATED.en,
  },
  cookies: {
    title: "Cookie concept — Ulpan Ivrit",
    desc: "Cookie concept under TDDDG and GDPR for www.ulpan-ivrit.de.",
    h1: "Cookie concept",
    binding: "The German text is legally binding.",
    lead: "This concept states whether www.ulpan-ivrit.de stores information on your device (§ 25 TDDDG) and how personal data is processed.",
    sections: [
      {
        h2: "Principle",
        blocks: [
          {
            type: "p",
            text: "No tracking, analytics or marketing cookies. No consent banner, because there is no non-essential device access. We currently do not use storage that is strictly necessary under § 25 (2) TDDDG either.",
          },
        ],
      },
      {
        h2: "Inventory",
        blocks: [
          {
            type: "table",
            headers: ["Name", "Provider", "Purpose", "Retention", "Legal basis", "Type"],
            rows: [],
            empty: "No cookies, no localStorage, no sessionStorage. The table is empty on purpose.",
          },
        ],
      },
      {
        h2: "No cookies, still processing",
        blocks: [
          {
            type: "ul",
            items: [
              "Hosting logs (Vercel): IP, time, URL — Art. 6 (1)(f) GDPR.",
              "Form or email content you send — Art. 6 (1)(b)/(f) GDPR.",
            ],
          },
        ],
      },
      {
        h2: "If analytics is added later",
        blocks: [
          {
            type: "p",
            text: "Consent first (Art. 6 (1)(a) GDPR and § 25 (1) TDDDG), then the cookie. Refusing must be as easy as accepting.",
          },
        ],
      },
    ],
    updated: UPDATED.en,
  },
  teilnahmebedingungen: {
    title: "Terms of participation — Ulpan Ivrit",
    desc: "Terms of participation for the Hebrew courses of Ulpan Ivrit, provider BiFoDe e.V.",
    h1: "Terms of participation",
    binding: "The German text is legally binding.",
    lead: "These terms of participation govern participation in the Hebrew courses of Ulpan Ivrit. The provider and contracting party is BiFoDe e.V., Allgäustr. 45, 42651 Solingen. Registration and payment run through the enrolment form; this website is only the public presentation of the offer.",
    sections: [
      {
        h2: "1. Scope and provider",
        blocks: [
          {
            type: "p",
            text: "These terms govern the relationship between Bildungsforum für Demokratie und Vielfalt NRW e.V. (BiFoDe e.V.), Allgäustr. 45, 42651 Solingen, and participants in the Hebrew courses of Ulpan Ivrit. They apply equally to in-person and online courses.",
          },
          {
            type: "p",
            text: "The contract language is German. Differing terms of participants do not become part of the contract unless BiFoDe e.V. expressly agrees to them in text form.",
          },
        ],
      },
      {
        h2: "2. Services",
        blocks: [
          {
            type: "p",
            text: "Ulpan Ivrit offers Hebrew courses following the Hebrew University of Jerusalem method, with a focus on spoken Hebrew. Teaching takes place in in-person groups (in the premises of Jewish communities or other hosts) and/or online via the Moodle learning platform (ulpan.bifode.org).",
          },
          {
            type: "p",
            text: "One session (Termin) lasts 90 minutes (two teaching units, Unterrichtseinheit, of 45 minutes each). An A1 course usually comprises 30 sessions of 90 minutes, 60 teaching units (UE) in total. The location, weekday, time and course period of each course are stated in the course description and the enrolment form.",
          },
          {
            type: "p",
            text: "The scope, level, dates, location and price of each course follow from the course description and the enrolment form. The details given there for the specific course are decisive.",
          },
        ],
      },
      {
        h2: "3. Registration and conclusion of contract",
        blocks: [
          {
            type: "p",
            text: "Registration is made via the enrolment form embedded on this website (Jotform). By submitting it, participants make a binding offer to conclude a participation contract.",
          },
          {
            type: "p",
            text: "The contract is concluded when BiFoDe e.V. confirms the registration — usually by email with course details and Moodle access.",
          },
          {
            type: "p",
            text: "Participation requires available places. For fully booked courses, a place on a waiting list may be offered.",
          },
        ],
      },
      {
        h2: "4. Membership (optional)",
        blocks: [
          {
            type: "p",
            text: "Membership of BiFoDe e.V. is free and voluntary. It is not a condition of participation, but it reduces the course fee (discounted member tariff).",
          },
          {
            type: "p",
            text: "Membership is governed by the statutes and the fee schedule of BiFoDe e.V. It is created and ended separately from the participation contract.",
          },
        ],
      },
      {
        h2: "5. Prices and payment",
        blocks: [
          {
            type: "p",
            text: "For an A1 course the fee is 60 € per month with free BiFoDe e.V. membership (480 € in total) or 120 € per month without membership (960 € in total). The fee is collected in 8 monthly instalments by SEPA core direct debit (SEPA-Basislastschrift). The prices stated in the enrolment form are decisive.",
          },
          {
            type: "p",
            text: "By granting the SEPA direct debit mandate, participants authorise BiFoDe e.V. to collect the amounts due from their account by SEPA core direct debit. Creditor identifier (Gläubiger-Identifikationsnummer): DE86ZZZ00002929761. The mandate reference is communicated separately. We notify you of the debit in advance (pre-notification) at least 14 days before the due date; for recurring debits a single pre-notification stating the due dates is sufficient.",
          },
          {
            type: "p",
            text: "If a direct debit fails for lack of funds or for reasons attributable to the participant, the participant bears the resulting return-debit fees.",
          },
        ],
      },
      {
        h2: "6. Right of withdrawal for consumers",
        blocks: [
          {
            type: "p",
            text: "For a contract concluded at a distance, consumers have a statutory right of withdrawal of fourteen days from the day the contract is concluded.",
          },
          {
            type: "p",
            text: "You will find the full withdrawal instructions and the model withdrawal form at https://www.ulpan-ivrit.de/widerruf.",
          },
          {
            type: "p",
            text: "If you expressly requested that the service begin during the withdrawal period and you then withdraw, you owe a reasonable amount for the services already provided up to the withdrawal (§§ 356 (4), 357a BGB).",
          },
        ],
      },
      {
        h2: "7. Cancellation by participants",
        blocks: [
          {
            type: "p",
            text: "After the withdrawal period, the participation contract is binding for the entire course duration (eight months); there is no ordinary right of termination. Irrespective of this, the contract may be terminated extraordinarily for good cause.",
          },
          {
            type: "p",
            text: "Termination must be in text form (e.g. email to info@bifode.org). Fees already incurred for services used remain unaffected.",
          },
        ],
      },
      {
        h2: "8. Cancellation and changes by the provider",
        blocks: [
          {
            type: "p",
            text: "If the minimum number of participants required for a course (usually 15 people) is not reached, or for another important reason, BiFoDe e.V. may cancel or postpone a course. Fees already paid for services not provided are refunded in that case.",
          },
          {
            type: "p",
            text: "For organisational reasons (e.g. a teacher's absence), individual sessions may be rescheduled or replaced by equivalent online sessions. Participants are informed in good time.",
          },
          {
            type: "p",
            text: "If the participant misses individual sessions, there is no claim to a refund or reduction of the course fee. The course fee secures the course place regardless of actual attendance.",
          },
        ],
      },
      {
        h2: "9. Participant obligations and Moodle access",
        blocks: [
          {
            type: "p",
            text: "Participants provide truthful information at registration and keep their contact details up to date.",
          },
          {
            type: "p",
            text: "Access to the Moodle learning platform is personal and non-transferable. Login credentials must be kept confidential.",
          },
          {
            type: "p",
            text: "Respectful conduct in class and on the platform is expected. In the event of serious or repeated breaches, BiFoDe e.V. may exclude a participant from further participation.",
          },
        ],
      },
      {
        h2: "10. Copyright of teaching materials",
        blocks: [
          {
            type: "p",
            text: "Materials provided in the course and in Moodle are protected by copyright and may be used only for your own learning. Reproduction, sharing or publication — even in part — is not permitted without prior consent.",
          },
        ],
      },
      {
        h2: "11. Liability",
        blocks: [
          {
            type: "p",
            text: "BiFoDe e.V. is liable without limitation for damage arising from injury to life, body or health, and for intent and gross negligence.",
          },
          {
            type: "p",
            text: "For slightly negligent breaches of essential contractual obligations (cardinal duties), liability is limited to the foreseeable damage typical for the contract. Otherwise liability is excluded. Mandatory statutory provisions remain unaffected.",
          },
        ],
      },
      {
        h2: "12. Data protection",
        blocks: [
          {
            type: "p",
            text: "Personal data is processed only to perform the contract and within the limits permitted by law. Details are in the privacy notice.",
          },
        ],
      },
      {
        h2: "13. Final provisions",
        blocks: [
          {
            type: "p",
            text: "German law applies, excluding the UN Convention on Contracts for the International Sale of Goods. Mandatory consumer protection rules of the consumer's country of habitual residence remain unaffected.",
          },
          {
            type: "p",
            text: "Amendments and additions to these terms require text form. Should any provision be invalid, the validity of the remaining provisions is unaffected.",
          },
          {
            type: "p",
            text: "BiFoDe e.V. employs no more than ten people; there is therefore no information obligation under § 36 VSBG. The association is not willing and not obliged to participate in dispute resolution proceedings before a consumer arbitration board. Otherwise, the notices in the Impressum apply.",
          },
        ],
      },
    ],
    updated: UPDATED.en,
  },
  widerruf: {
    title: "Right of withdrawal — Ulpan Ivrit",
    desc: "Withdrawal instructions and model withdrawal form for the Hebrew courses of Ulpan Ivrit.",
    h1: "Right of withdrawal (Widerrufsbelehrung)",
    binding: "The German text is legally binding.",
    lead: "These withdrawal instructions apply to consumers who conclude a participation contract with BiFoDe e.V. at a distance.",
    sections: [
      {
        h2: "Right of withdrawal",
        blocks: [
          {
            type: "p",
            text: "You have the right to withdraw from this contract within fourteen days without giving any reason.",
          },
          {
            type: "p",
            text: "The withdrawal period is fourteen days from the day the contract is concluded.",
          },
          {
            type: "p",
            text: "To exercise your right of withdrawal, you must inform us (BiFoDe e.V., Allgäustr. 45, 42651 Solingen, info@bifode.org) of your decision to withdraw from this contract by a clear statement (e.g. a letter sent by post or an email). You may use the attached model withdrawal form, but this is not mandatory.",
          },
          {
            type: "p",
            text: "To meet the withdrawal deadline, it is sufficient that you send your communication concerning the exercise of the right of withdrawal before the withdrawal period expires.",
          },
        ],
      },
      {
        h2: "Effects of withdrawal",
        blocks: [
          {
            type: "p",
            text: "If you withdraw from this contract, we shall reimburse to you all payments received from you, including the costs of delivery (with the exception of the supplementary costs resulting from your choice of a type of delivery other than the least expensive type of standard delivery offered by us), without undue delay and in any event not later than fourteen days from the day on which we are informed about your decision to withdraw from this contract. We will carry out such reimbursement using the same means of payment as you used for the initial transaction, unless you have expressly agreed otherwise; in any event, you will not incur any fees as a result of such reimbursement.",
          },
          {
            type: "p",
            text: "If you requested that the services begin during the withdrawal period, you shall pay us an amount which is in proportion to what has been provided until the time you have informed us of the exercise of the right of withdrawal from this contract, in comparison with the full coverage of the contract (§§ 356 (4), 357a BGB).",
          },
        ],
      },
      {
        h2: "Model withdrawal form",
        blocks: [
          {
            type: "p",
            text: "(Complete and return this form only if you wish to withdraw from the contract.)",
          },
          {
            type: "ul",
            items: [
              "To BiFoDe e.V., Allgäustr. 45, 42651 Solingen, info@bifode.org:",
              "I/We (*) hereby give notice that I/We (*) withdraw from my/our (*) contract for the provision of the following service (*):",
              "Ordered on (*)/received on (*):",
              "Name of consumer(s):",
              "Address of consumer(s):",
              "Signature of consumer(s) (only if this form is notified on paper):",
              "Date:",
              "(*) Delete as appropriate.",
            ],
          },
        ],
      },
    ],
    updated: UPDATED.en,
  },
};

const docs: Record<UiLocale, Record<LegalKey, LegalDoc>> = { de, ru, en };

export function getLegal(locale: UiLocale, key: LegalKey): LegalDoc {
  return docs[locale][key];
}
