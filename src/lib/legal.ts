import type { UiLocale } from "./i18n";
import { LINKS } from "./links";

export type LegalKey = "impressum" | "datenschutz" | "cookies";

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
};

const docs: Record<UiLocale, Record<LegalKey, LegalDoc>> = { de, ru, en };

export function getLegal(locale: UiLocale, key: LegalKey): LegalDoc {
  return docs[locale][key];
}
