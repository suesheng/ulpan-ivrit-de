import { uiLocale, type UiLocale } from "./i18n";

export type Messages = {
  meta: {
    descDefault: string;
    ogImageAlt: string;
    skip: string;
    navAria: string;
    footerAria: string;
    legalAria: string;
    langAria: string;
    partnersAria: string;
  };
  form: {
    sent: string;
    error: string;
    sending: string;
    privacyBefore: string;
    privacyLink: string;
    privacyAfter: string;
    privacyNote: string;
  };
  nav: {
    menu: string;
    lernen: string;
    anmelden: string;
    online: string;
    onlineSoon: string;
    vorOrt: string;
    lehrkraefte: string;
    methodik: string;
    stellen: string;
    verein: string;
    aboutVerein: string;
    partner: string;
    faq: string;
    kontakt: string;
    member: string;
    start: string;
    interest: string;
    preise: string;
  };
  quote: {
    translation: string;
    source: string;
    open: string;
    close: string;
    pause: string;
    play: string;
  };
  home: {
    title: string;
    description: string;
    h1: string;
    lead: string;
    nextEyebrow: string;
    nextCourses: {
      status: string;
      level: string;
      place: string;
      venue: string;
      start: string;
      schedule: string;
      format: string;
    }[];
    courseDetails: string;
    registerNow: string;
    activeCitiesTitle: string;
    plannedCitiesTitle: string;
    showMoreCities: string;
    hideCities: string;
    f1: string;
    f3: string;
    ctaPitch: string;
    ctaQuestions: string;
    ctaContact: string;
    onlineTitle: string;
    onlineBadge: string;
    onlineText: string;
    onlineCta: string;
    localTitle: string;
    localText: string;
    localLink: string;
    firstH2: string;
    firstText: string;
    firstStartBadge: string;
    firstPlannedBadge: string;
    firstCities: { name: string; start?: string }[];
    firstWaitlistCta: string;
    firstWaitlistNote: string;
    firstGroupCta: string;
    firstGroupNote: string;
    firstBoxTitle: string;
    firstBoxText: string;
    firstBoxCta: string;
    cityRegisterCta: string;
  };
  soGehts: {
    title: string;
    desc: string;
    h1: string;
    intro: string;
    step1: string;
    step1Text: string;
    step2: string;
    step2Text: string;
    step3: string;
    step3Text: string;
    tariffTitle: string;
    tariffRecommended: string;
    tariffMemberTitle: string;
    tariffMemberPrice: string;
    tariffMemberHint: string;
    tariffNonTitle: string;
    tariffNonPrice: string;
    tariffNonHint: string;
    preiseLink: string;
    legalIntro: string;
    formTitle: string;
    formFallback: string;
    formFallbackLink: string;
    noCourse: string;
    noCourseLink: string;
    cityFaqQ: string;
    cityFaqA: string;
    membershipAuto: string;
  };
  preise: {
    title: string;
    desc: string;
    h1: string;
    h1Short: string;
    scopeH2: string;
    sessions: string;
    units: string;
    period: string;
    recommended: string;
    memberTitle: string;
    memberAmount: string;
    memberPeriod: string;
    memberMeta: string;
    nonMemberTitle: string;
    nonMemberAmount: string;
    nonMemberPeriod: string;
    nonMemberMeta: string;
    membershipNote: string;
    membershipLink: string;
  };
  kurse: {
    title: string;
    desc: string;
    h1: string;
    notice: string;
    intro: string;
    localLink: string;
    entry: string;
    back: string;
    moodle: string;
    moodleNote: string;
    interestCta: string;
  };
  vorOrt: {
    title: string;
    desc: string;
    h1: string;
    currentTitle: string;
    currentMeta: string;
    currentCta: string;
    preiseLink: string;
    p1: string;
    p2: string;
    p3: string;
    p3Link: string;
    p4: string;
    p4Link: string;
    formTitle: string;
    formLead: string;
    formMail: string;
    sizePlaceholder: string;
    orgType: string;
    gemeinde: string;
    verein: string;
    community: string;
    other: string;
    orgName: string;
    place: string;
    person: string;
    email: string;
    phone: string;
    size: string;
    message: string;
    submit: string;
    subject: string;
  };
  lehrer: {
    title: string;
    desc: string;
    h1: string;
    p1: string;
    hishtalmut: string;
    hishtalmutText: string;
    method: string;
    methodText: string;
    jobs: string;
    local: string;
  };
  stellen: {
    title: string;
    desc: string;
    h1: string;
    intro: string;
    empty: string;
    methodLink: string;
    back: string;
    closed: string;
    apply: string;
    applySubject: string;
  };
  faq: {
    title: string;
    desc: string;
    h1: string;
    q1: string;
    a1: string;
    a1Link: string;
    q2: string;
    a2: string;
    a2Link: string;
    q3: string;
    a3: string;
    q3Link: string;
    q4: string;
    a4: string;
    a4Link: string;
    q5: string;
    a5: string;
    q6: string;
    a6: string;
    q7: string;
    a7: string;
    q8: string;
    a8: string;
    q9: string;
    a9: string;
    a9Link: string;
    q10: string;
    a10: string;
    q11: string;
    a11: string;
  };
  kontakt: {
    title: string;
    desc: string;
    h1: string;
    intro: string;
    mail: string;
    learnersTitle: string;
    learners: string;
    learnersLink: string;
    orgsTitle: string;
    orgs: string;
    orgsLink: string;
    teachersTitle: string;
    teachers: string;
    teachersLink: string;
  };
  verein: {
    title: string;
    desc: string;
    h1: string;
    p1: string;
    fees: string;
    talks: string;
    partner: string;
    project: string;
  };
  partner: {
    title: string;
    h1: string;
    intro: string;
    methodRole: string;
    methodName: string;
    methodText: string;
    roles: Record<string, string>;
    names: Record<string, string>;
    blurbs: Record<string, string>;
  };
  legal: {
    impressum: string;
    datenschutz: string;
    cookies: string;
    teilnahmebedingungen: string;
    widerruf: string;
    noCookies: string;
    vereinImpressum: string;
    vereinDatenschutz: string;
  };
  session: {
    weekly: string;
    spoken: string;
  };
  courses: Record<
    string,
    { title: string; level: string; format: string; entry: string; body: string }
  >;
  jobs: Record<
    string,
    { title: string; location: string; format: string; level: string; body: string }
  >;
};

export const messages: Record<UiLocale, Messages> = {
  de: {
    meta: {
      descDefault:
        "Anmeldung zum Ulpan: Hebräisch A1 für Anfänger. Schwerpunkt gesprochenes Hebräisch.",
      ogImageAlt:
        "Anmeldung zum Ulpan – Hebräisch A1 für Anfänger, Schwerpunkt gesprochenes Hebräisch",
      skip: "Zum Inhalt",
      navAria: "Hauptnavigation",
      footerAria: "Fußzeile",
      legalAria: "Rechtliches",
      langAria: "Sprache",
      partnersAria: "Partner",
    },
    form: {
      sent: "Gesendet. Wir lesen die Nachricht und antworten per E-Mail.",
      error: "Senden hat nicht geklappt. Schreiben Sie uns direkt an die Adresse oben.",
      sending: "Wird gesendet…",
      privacyBefore: "Ich habe die",
      privacyLink: "Datenschutzerklärung",
      privacyAfter: " gelesen. Die Angaben dienen nur der Bearbeitung dieser Anfrage.",
      privacyNote:
        "Verantwortlich ist BiFoDe e.V. Keine Werbung. Einzelheiten stehen in der Datenschutzerklärung.",
    },
    nav: {
      menu: "Menü",
      lernen: "Lernen",
      anmelden: "Anmeldung",
      online: "Online",
      onlineSoon: "Online (bald)",
      vorOrt: "Vor Ort",
      lehrkraefte: "Lehrkräfte",
      methodik: "Methodik & Fortbildung",
      stellen: "Stellen",
      verein: "Verein",
      aboutVerein: "Über den Verein",
      partner: "Partner",
      faq: "FAQ",
      kontakt: "Kontakt",
      member: "Jetzt anmelden",
      start: "Anmeldung",
      interest: "Interesse melden",
      preise: "Kursdetails & Preise",
    },
    quote: {
      translation:
        "Nur in der hebräischen Sprache wird Israel in seinem Land leben.",
      source: "Eliezer Ben-Jehuda",
      open: "„",
      close: "“",
      pause: "Animation anhalten",
      play: "Animation abspielen",
    },
    home: {
      title: "Hebräisch lernen in Düsseldorf – Ulpan Ivrit A1 ab 18.11.2026",
      description:
        "Hebräischkurs A1 in der Jüdischen Gemeinde Düsseldorf, mittwochs 18:30 Uhr.",
      h1: "<strong>Hebräisch</strong> lernen ist ganz <strong>einfach</strong>!",
      lead:
        "Präsenz- und Onlineunterricht – Methodik der Hebräischen Universität Jerusalem, gesprochenes Hebräisch, Materialien in Moodle.",
      nextEyebrow: "Nächster Kurs",
      nextCourses: [
        {
          status: "Anmeldung geöffnet",
          level: "Hebräisch A1",
          place: "Düsseldorf",
          venue: "Jüdische Gemeinde Düsseldorf, Paul-Spiegel-Platz 1",
          start: "Start: 18. November 2026",
          schedule: "Mittwochs · 18:30–20:30",
          format: "Präsenzkurs",
        },
        {
          status: "Anmeldung geöffnet",
          level: "Hebräisch A1",
          place: "Berlin-Prenzlauer Berg",
          venue: "Kunstschule Berlin, Immanuelkirchstraße 4, 10405 Berlin",
          start: "Start: 15. November 2026",
          schedule: "Sonntags · am Vormittag",
          format: "Präsenzkurs",
        },
      ],
      courseDetails: "Kursdetails",
      registerNow: "Jetzt anmelden",
      activeCitiesTitle: "Aktive Kurse",
      plannedCitiesTitle: "Weitere Standorte in Planung",
      showMoreCities: "Weitere Standorte anzeigen",
      hideCities: "Standorte ausblenden",
      f1: "Präsenz- und Onlineunterricht",
      f3: "In Zusammenarbeit mit der Hebräischen Universität Jerusalem",
      ctaPitch: "Anmeldung in wenigen Minuten.",
      ctaQuestions: "Fragen?",
      ctaContact: "Schreiben Sie uns.",
      onlineTitle: "Online",
      onlineBadge: "Bald verfügbar",
      onlineText: "Online-Gruppen sind in Vorbereitung.",
      onlineCta: "Interesse melden",
      localTitle: "Vor Ort",
      localText:
        "2 × 45 Min. mit Pause, Schwerpunkt Sprechen, Unterlagen in Moodle. Weitere Standorte: Warteliste.",
      localLink: "Anmeldung",
      firstH2: "Unser erster Ulpan startet – weitere folgen",
      firstText:
        "Unser erster Ulpan Ivrit startet in einer jüdischen Gemeinde. Weitere Ulpanim planen wir in den größten jüdischen Gemeinden Deutschlands:",
      firstStartBadge: "Start 18.11.2026",
      firstPlannedBadge: "In Planung",
      firstCities: [
        { name: "Düsseldorf", start: "Start 18.11.2026" },
        { name: "Aachen" },
        { name: "Berlin", start: "Start 15.11.2026" },
        { name: "Bielefeld" },
        { name: "Bochum" },
        { name: "Bonn" },
        { name: "Dortmund" },
        { name: "Dresden" },
        { name: "Duisburg" },
        { name: "Essen" },
        { name: "Frankfurt am Main" },
        { name: "Gelsenkirchen" },
        { name: "Hamburg" },
        { name: "Hannover" },
        { name: "Köln" },
        { name: "Leipzig" },
        { name: "München" },
        { name: "Nürnberg" },
        { name: "Stuttgart" },
        { name: "Wuppertal" },
      ],
      firstWaitlistCta: "Auf die Warteliste",
      firstWaitlistNote:
        "Kostenlos und unverbindlich – wir informieren Sie, sobald Ihre Stadt startet.",
      firstGroupCta: "Gruppe anmelden",
      firstGroupNote:
        "Sie haben eine Gruppe mit mindestens 15 Interessierten? Dann kann der Ulpan schon bald bei Ihnen starten – sprechen Sie uns an.",
      firstBoxTitle: "Ab 15 Personen richten wir eine neue Gruppe ein.",
      firstBoxText:
        "Gemeinde, Verein oder Freundeskreis – melden Sie sich mit Ihrer Gruppe, und wir planen gemeinsam Lehrkraft, Termine und Ort.",
      firstBoxCta: "Kontakt",
      cityRegisterCta: "Stadt vormerken",
    },
    soGehts: {
      title: "Anmeldung – Ulpan Ivrit",
      desc: "Hebräisch A1 in 3 Schritten anmelden.",
      h1: "Anmeldung in 3 Schritten",
      intro:
        "Hebräisch A1 für Anfänger. Wählen Sie Kurs und Preisoption im Formular – inklusive SEPA-Lastschriftmandat.",
      step1: "Kurs & Preis wählen",
      step1Text: "Im Formular wählen Sie Kursort und Preisoption.",
      step2: "Formular absenden",
      step2Text: "Angaben und SEPA-Lastschrift in einem Schritt.",
      step3: "Bestätigung",
      step3Text: "Sie erhalten Kursdaten, Mandatsreferenz und Moodle-Zugang per E-Mail.",
      tariffTitle: "Preisoptionen",
      tariffRecommended: "Empfohlen",
      tariffMemberTitle: "Mit kostenloser Mitgliedschaft",
      tariffMemberPrice: "60 € pro Monat",
      tariffMemberHint: "Mitgliedschaft entsteht mit der Anmeldung (siehe Formular).",
      tariffNonTitle: "Ohne Mitgliedschaft",
      tariffNonPrice: "120 € pro Monat",
      tariffNonHint: "Falls im Formular als Option verfügbar – ohne BiFoDe-Mitgliedschaft.",
      preiseLink: "Kursdetails & Preise",
      legalIntro: "Mit der Anmeldung gelten unsere",
      formTitle: "Anmeldung",
      formFallback: "Formular lädt nicht?",
      formFallbackLink: "Direkt bei Jotform öffnen",
      noCourse: "Kein Kurs in Ihrer Stadt?",
      noCourseLink: "Schreiben Sie uns",
      cityFaqQ: "Wann startet ein Ulpan in meiner Stadt?",
      cityFaqA:
        "Sobald sich mindestens 15 Interessierte gemeldet haben – über die Warteliste oder als Gruppe über Ihre Gemeinde oder Organisation.",
      membershipAuto:
        "Mit der Anmeldung zum Ulpan werden Sie automatisch und kostenlos Mitglied bei BiFoDe e.V. Ein gesonderter Antrag auf bifode.org ist nicht nötig. Die Preisoption wählen Sie im Formular.",
    },
    preise: {
      title: "Kursdetails & Preise — Ulpan Ivrit",
      desc: "Umfang, Zeitraum und Preisoptionen der Hebräischkurse von Ulpan Ivrit.",
      h1: "Kursdetails & Preise",
      h1Short: "Kurs & Preise",
      scopeH2: "Kursumfang",
      sessions: "30 Termine mit jeweils 90 Minuten",
      units: "60 Unterrichtseinheiten à 45 Minuten",
      period: "Kurszeitraum: 18. November 2026 bis 7. Juli 2027 (je nach Stadt und Kurs)",
      recommended: "Empfohlen",
      memberTitle: "Mit kostenloser Mitgliedschaft",
      memberAmount: "60 €",
      memberPeriod: "pro Monat",
      memberMeta: "8 Monatsraten · 480 € insgesamt",
      nonMemberTitle: "Ohne Mitgliedschaft",
      nonMemberAmount: "120 €",
      nonMemberPeriod: "pro Monat",
      nonMemberMeta: "8 Monatsraten · 960 € insgesamt",
      membershipNote:
        "Die Mitgliedschaft bei Bildungsforum für Demokratie und Vielfalt NRW e.V. (BiFoDe e.V.) ist kostenlos. Nach aktueller Anmeldelogik entsteht sie automatisch mit der Ulpan-Anmeldung; ein gesonderter Antrag ist nicht nötig. Die Preisoption wählen Sie im Anmeldeformular.",
      membershipLink: "Informationen zur Mitgliedschaft bei BiFoDe e.V.",
    },
    kurse: {
      title: "Online – Ulpan Ivrit",
      desc: "Online-Kurse von Ulpan Ivrit sind in Vorbereitung. Level 0 und Level 1 – Materialien wie im Präsenzunterricht.",
      h1: "Online – individuell über Moodle",
      notice:
        "Online-Kurse sind in Vorbereitung. Teilnehmende des Präsenzkurses erhalten Zugang zu Moodle.",
      intro:
        "Der Fernunterricht läuft auf Moodle. Die Materialien sind dieselben wie im Präsenzunterricht – der Stoff der Gruppe wird in Moodle gespiegelt. Methodik der Hebräischen Universität Jerusalem, Schwerpunkt gesprochenes Hebräisch.",
      localLink: "Präsenzkurs: Vor Ort",
      entry: "Einstieg",
      back: "← Kurse",
      moodle: "Zum Moodle",
      moodleNote: " – Zugang für Teilnehmende des Präsenzkurses.",
      interestCta: "Interesse melden",
    },
    vorOrt: {
      title: "Vor Ort – Ulpan Ivrit",
      desc: "Hebräisch A1 als Präsenzkurs an jüdischen Gemeinden. Träger können neue Gruppen anfragen.",
      h1: "Ulpan vor Ort",
      currentTitle: "Präsenzunterricht",
      currentMeta:
        "Hebräisch A1, Schwerpunkt gesprochenes Hebräisch. Den aktuellen Kurs mit Ort und Terminen finden Sie auf der Startseite und im Anmeldeformular.",
      currentCta: "Jetzt anmelden",
      preiseLink: "Kursdetails & Preise",
      p1: "Der Präsenzunterricht läuft über jüdische Organisationen. Weitere Standorte sind in Planung; Interessierte können sich auf die Warteliste setzen lassen.",
      p2: "Typischer Termin: 2 × 45 Min. mit Pause. Schwerpunkt: gesprochenes Hebräisch. Materialien liegen auch in Moodle.",
      p3: "Im Community-Projekt suchen wir nach Möglichkeit die Lehrkraft und beteiligen uns an der Finanzierung, stellen Materialien und Fortbildung (Hishtalmut). Mehr dazu:",
      p3Link: "Lehrkräfte",
      p4: "Teilnehmende melden sich über das Anmeldeformular an. Mit der Anmeldung werden sie automatisch und kostenlos Mitglied bei BiFoDe e.V.",
      p4Link: "Anmeldung",
      formTitle: "Träger: Gruppe aufbauen",
      formLead: "Neue Gruppen starten ab 15 Teilnehmenden.",
      formMail: "Für Vorstände und Ansprechpersonen. Die Nachricht geht an",
      orgType: "Art der Organisation",
      gemeinde: "Gemeinde",
      verein: "Verein",
      community: "Community",
      other: "Sonstige",
      orgName: "Name der Organisation",
      place: "Ort",
      person: "Ansprechperson",
      email: "E-Mail",
      phone: "Telefon",
      size: "Geschätzte Gruppengröße",
      sizePlaceholder: "mind. 15",
      message: "Nachricht",
      submit: "Anfrage senden",
      subject: "Ulpan vor Ort – Gruppenanfrage",
    },
    lehrer: {
      title: "Lehrkräfte – Ulpan Ivrit",
      desc: "Fortbildung (Hishtalmut), Materialien und Methodik der Hebräischen Universität Jerusalem.",
      h1: "Lehrkräfte",
      p1: "In Projekten mit Gemeinden, Vereinen und Communities suchen wir nach Möglichkeit Lehrkräfte und beteiligen uns an der Finanzierung. Den Unterrichtenden stellen wir Materialien und Fortbildung zur Verfügung.",
      hishtalmut: "Hishtalmut – Fortbildung",
      hishtalmutText:
        "Hishtalmut (hebr. השתלמות) ist die berufliche Fortbildung der Lehrkräfte. Sie wird von aktiven Dozentinnen und Dozenten sowie Lehrkräften der Hebräischen Universität Jerusalem durchgeführt.",
      method: "Methodik und Materialien",
      methodText:
        "Der Unterricht folgt der Methodik der Hebräischen Universität Jerusalem. Schwerpunkt ist gesprochenes Hebräisch. Die Lehrwerke und Übungen werden den Gruppen gestellt und parallel in Moodle gespiegelt – Präsenz- und Onlineunterricht arbeiten mit demselben Stoff.",
      jobs: "Offene Stellen",
      local: "Gruppe vor Ort",
    },
    stellen: {
      title: "Stellen – Ulpan Ivrit",
      desc: "Offene Positionen für Lehrkräfte Ivrit in Gemeinden und Communities.",
      h1: "Stellen",
      intro:
        "Offene Einsätze für Lehrkräfte in Community-Projekten. Materialien, Moodle und Fortbildung (Hishtalmut) stellt das Projekt. Finanzierung der Lehrkraft prüfen wir je Standort.",
      empty: "Gerade keine offene Stelle. Initiativ an",
      methodLink: "Lehrkräfte und Methodik",
      back: "← Stellen",
      closed: "geschlossen",
      apply: "Bewerbung senden",
      applySubject: "Bewerbung",
    },
    faq: {
      title: "FAQ – Ulpan Ivrit",
      desc: "Mitgliedschaft, Zahlung, Termine, Standorte, Online und Hishtalmut.",
      h1: "Fragen",
      q1: "Werde ich mit der Anmeldung Mitglied?",
      a1: "Ein gesonderter Antrag ist nicht nötig. Mit der Anmeldung zum Ulpan werden Sie automatisch und kostenlos Mitglied bei BiFoDe e.V. Umfang und Preisoptionen stehen unter",
      a1Link: "Kursdetails & Preise",
      q2: "Wie wird bezahlt?",
      a2: "Per SEPA-Lastschrift. Die monatlichen Beträge und die Zahl der Raten stehen unter",
      a2Link: "Kursdetails & Preise",
      q3: "Wie läuft ein Termin?",
      a3: "2 × 45 Min. mit Pause, Schwerpunkt Sprechen, Materialien in Moodle.",
      q3Link: "Anmeldung",
      q4: "Gibt es weitere Standorte?",
      a4: "Weitere Standorte sind in Planung. Über das Formular kommen Sie kostenlos auf die Warteliste.",
      a4Link: "Anmeldeformular",
      q5: "Gibt es Online-Kurse?",
      a5: "In Vorbereitung. Schreiben Sie uns über das Kontaktformular.",
      q6: "Was, wenn ich einen Termin verpasse?",
      a6: "Die Inhalte stehen in Moodle bereit.",
      q7: "Was ist Hishtalmut?",
      a7: "Die Fortbildung der Lehrkräfte. Sie führen aktive Dozentinnen und Lehrkräfte der Hebräischen Universität Jerusalem durch. Materialien und Methodik kommen aus derselben Schule.",
      q8: "Wann startet ein Ulpan in meiner Stadt?",
      a8: "Sobald sich mindestens 15 Interessierte gemeldet haben – über die Warteliste oder als Gruppe über Ihre Gemeinde oder Organisation.",
      q9: "Kann ich meine Anmeldung widerrufen?",
      a9: "Ja. Als Verbraucher:in können Sie binnen 14 Tagen ab Vertragsschluss ohne Angabe von Gründen widerrufen. Einzelheiten und das Muster-Formular stehen in der",
      a9Link: "Widerrufsbelehrung",
      q10: "Was passiert, wenn der Kurs nicht zustande kommt?",
      a10: "Kommt die Mindestteilnehmerzahl (in der Regel 15 Personen) nicht zustande, können wir den Kurs absagen oder verschieben. Bereits gezahlte Beiträge für nicht erbrachte Leistungen werden erstattet.",
      q11: "Wie funktioniert die SEPA-Lastschrift?",
      a11: "Der Beitrag wird in 8 Monatsraten (Dez 2026–Jul 2027) per SEPA-Basislastschrift eingezogen (Gläubiger-Identifikationsnummer DE86ZZZ00002929761). Über den Einzug informieren wir Sie vorab, spätestens 14 Tage vor Fälligkeit.",
    },
    kontakt: {
      title: "Kontakt – Ulpan Ivrit",
      desc: "Drei Wege: Lernende, Träger, Lehrkräfte – oder direkt an info@bifode.org.",
      h1: "Kontakt",
      intro: "Wählen Sie, wer Sie sind. Allgemeine Fragen gehen an",
      mail: "E-Mail",
      learnersTitle: "Lernende",
      learners: "Melden Sie sich über das Anmeldeformular an. Mit der Anmeldung werden Sie automatisch und kostenlos Mitglied bei BiFoDe e.V.",
      learnersLink: "Anmeldung",
      orgsTitle: "Gemeinde oder Verein",
      orgs: "Sie wollen eine Präsenzgruppe tragen. Materialien, Moodle und oft auch die Lehrkraft kommen vom Projekt.",
      orgsLink: "Gruppe aufbauen",
      teachersTitle: "Lehrkräfte",
      teachers: "Offene Einsätze in Community-Projekten. Hishtalmut und Materialien stellt das Projekt.",
      teachersLink: "Offene Stellen",
    },
    verein: {
      title: "Verein – Ulpan Ivrit",
      desc: "Bildungsforum für Demokratie und Vielfalt NRW e.V. (BiFoDe e.V.) führt Ulpan Ivrit in Deutschland durch.",
      h1: "Durchführung durch BiFoDe e.V.",
      p1: "Das Programm kommt von der Zionistischen Weltorganisation, Ofek Israeli, der Sochnut und Keren Hayesod. Träger in Deutschland ist Bildungsforum für Demokratie und Vielfalt NRW e.V. (BiFoDe e.V.). Mit der Ulpan-Anmeldung werden Teilnehmende automatisch und kostenlos Mitglied.",
      fees: "Kursumfang und Preisoptionen:",
      talks: "Mitglieder erhalten Vorträge und Ankündigungen – online und vor Ort, je nach Programm.",
      partner: "Partner",
      project: "Projektseite",
    },
    partner: {
      title: "Partner – Ulpan Ivrit",
      h1: "Partner",
      intro:
        "Ulpan Ivrit ist ein Projekt der Zionistischen Weltorganisation, von Ofek Israeli, der Jewish Agency (Sochnut) und Keren Hayesod. Die Durchführung in Deutschland liegt bei BiFoDe e.V.",
      methodRole: "Methodik",
      methodName: "Hebräische Universität Jerusalem",
      methodText:
        "Methodik des Unterrichts. Hishtalmut (Fortbildung) der Lehrkräfte durch aktive Dozentinnen und Lehrkräfte der Universität.",
      roles: {
        bifode: "Trägerschaft",
        wzo: "Partner",
        "keren-hayesod": "Partner",
        ofek: "Partner",
        sochnut: "Partner",
      },
      names: {
        bifode: "BiFoDe e.V.",
        wzo: "Zionistische Weltorganisation",
        "keren-hayesod": "Keren Hayesod – United Israel Appeal",
        ofek: "Ofek Israeli",
        sochnut: "The Jewish Agency for Israel",
      },
      blurbs: {
        bifode:
          "Träger von Ulpan Ivrit in Deutschland und organisatorischer Rahmen der Mitgliedschaft.",
        wzo: "Abteilung zur Förderung der Aliyah. Partner von Ulpan Ivrit.",
        "keren-hayesod": "Keren Hayesod ist Partner von Ulpan Ivrit.",
        ofek: "Ofek Israeli ist Partner von Ulpan Ivrit.",
        sochnut: "Die Jewish Agency – Sochnut – ist Partner von Ulpan Ivrit.",
      },
    },
    legal: {
      impressum: "Impressum",
      datenschutz: "Datenschutz",
      cookies: "Cookies",
      teilnahmebedingungen: "Teilnahmebedingungen",
      widerruf: "Widerrufsbelehrung",
      noCookies: "Keine Tracking-Cookies",
      vereinImpressum: "Impressum des Vereins auf bifode.org",
      vereinDatenschutz: "Datenschutz des Vereins auf bifode.org",
    },
    session: { weekly: "einmal wöchentlich", spoken: "gesprochenes Hebräisch" },
    courses: {
      "hebrew-level-0": {
        title: "Hebrew Level 0",
        level: "Pre-A1 / Absolute Beginners",
        format: "Online – Lektionen, Hören, Lesen, Quizzes, H5P, Aufgaben",
        entry: "Keine Vorkenntnisse nötig",
        body: "<p>Hebrew-A0 ist der Einstiegskurs für Lernende ohne Hebräischkenntnisse. Er bereitet auf Hebrew Level 1 vor: Alphabet, Aussprache, Grundwortschatz und Unterrichtskommunikation.</p><p>Am Ende des Kurses können Teilnehmende Kernbuchstaben erkennen und aussprechen, kurze Anfängerwörter lesen, sich einfach vorstellen und in Level 1 weitermachen.</p>",
      },
      "hebrew-level-1": {
        title: "Hebrew Level 1",
        level: "A1",
        format: "Online – Lektionen, Hören, Lesen, Quizzes, Aufgaben",
        entry: "Alphabet, Grundaussprache und Einstiegsvokabular – oder Abschluss Level 0",
        body: "<p>Hebrew Level 1 ist der Anfängerkurs für Lernende, die das Alphabet und grundlegendes Pre-Ulpan-Vokabular bereits kennen oder Level 0 abgeschlossen haben.</p><p>Der Kurs baut alltagsnahes Hebräisch auf: Lesen, Hören, Sprechen, Schreiben, Grammatik und geführte Moodle-Aktivitäten.</p>",
      },
    },
    jobs: {
      "ivrit-duesseldorf-anfaenger": {
        title: "Lehrkraft für Hebräisch – Raum Düsseldorf",
        location: "Raum Düsseldorf",
        format: "Präsenz bevorzugt, Online möglich",
        level: "Anfänger",
        body: "<p>Wir suchen eine Lehrkraft für modernes Hebräisch (Ivrit) im Raum Düsseldorf. Die Gruppe startet auf Anfängerniveau. Unterricht vor Ort ist erwünscht; Online-Stunden kommen infrage, wenn Präsenz nicht möglich ist.</p><p>Typische Sitzung: zwei volle Stunden, einmal wöchentlich, mit Pause. Schwerpunkt: gesprochenes Hebräisch. Methodik der Hebräischen Universität Jerusalem. Materialien und Moodle-Spiegel stellt das Projekt; Hishtalmut (Fortbildung) durch Dozentinnen und Lehrkräfte der Universität.</p><p>Bewerbung mit Kurzprofil und Hinweis auf Präsenz- oder Online-Verfügbarkeit an die untenstehende Adresse.</p>",
      },
    },
  },
  ru: {
    meta: {
      descDefault:
        "Запись в ульпан: иврит A1 для начинающих. Упор на разговорный иврит.",
      ogImageAlt:
        "Запись в ульпан — иврит A1 для начинающих, упор на разговорный иврит",
      skip: "К содержанию",
      navAria: "Главная навигация",
      footerAria: "Подвал сайта",
      legalAria: "Правовая информация",
      langAria: "Язык",
      partnersAria: "Партнёры",
    },
    form: {
      sent: "Отправлено. Прочитаем и ответим по почте.",
      error: "Не отправилось. Напишите напрямую на адрес выше.",
      sending: "Отправляем…",
      privacyBefore: "Я прочитал(а)",
      privacyLink: "политику конфиденциальности",
      privacyAfter: ". Данные используются только для ответа на этот запрос.",
      privacyNote:
        "Ответственный — BiFoDe e.V. Рекламы нет. Подробности — в политике конфиденциальности.",
    },
    nav: {
      menu: "Меню",
      lernen: "Обучение",
      anmelden: "Запись",
      online: "Онлайн",
      onlineSoon: "Онлайн (скоро)",
      vorOrt: "Очно",
      lehrkraefte: "Преподаватели",
      methodik: "Повышение квалификации",
      stellen: "Вакансии",
      verein: "НКО",
      aboutVerein: "О нас",
      partner: "Партнёры",
      faq: "FAQ",
      kontakt: "Контакты",
      member: "Записаться",
      start: "Запись",
      interest: "Оставить заявку",
      preise: "Программа и стоимость",
    },
    quote: {
      translation:
        "Только благодаря ивриту Израиль будет жить на своей земле.",
      source: "Элиэзер Бен-Йехуда",
      open: "«",
      close: "»",
      pause: "Остановить анимацию",
      play: "Включить анимацию",
    },
    home: {
      title: "Учить иврит в Дюссельдорфе – Ulpan Ivrit A1 с 18.11.2026",
      description:
        "Курс иврита A1 в Еврейской общине Дюссельдорфа, по средам в 18:30.",
      h1: "Учить <strong>иврит</strong> совсем <strong>просто</strong>!",
      lead:
        "Очно и онлайн — методика Еврейского университета в Иерусалиме, разговорный иврит, материалы в Moodle.",
      nextEyebrow: "Ближайший курс",
      nextCourses: [
        {
          status: "Идёт запись",
          level: "Иврит A1",
          place: "Дюссельдорф",
          venue: "Еврейская община Дюссельдорфа, Paul-Spiegel-Platz 1",
          start: "Старт: 18 ноября 2026",
          schedule: "По средам · 18:30–20:30",
          format: "Очный курс",
        },
        {
          status: "Идёт запись",
          level: "Иврит A1",
          place: "Берлин-Пренцлауэр-Берг",
          venue: "Kunstschule Berlin, Immanuelkirchstraße 4, 10405 Berlin",
          start: "Старт: 15 ноября 2026",
          schedule: "По воскресеньям · утром",
          format: "Очный курс",
        },
      ],
      courseDetails: "Подробнее",
      registerNow: "Записаться",
      activeCitiesTitle: "Активные курсы",
      plannedCitiesTitle: "Города в планах",
      showMoreCities: "Показать другие города",
      hideCities: "Скрыть",
      f1: "Очно и онлайн",
      f3: "В сотрудничестве с Еврейским университетом в Иерусалиме",
      ctaPitch: "Запись займёт несколько минут.",
      ctaQuestions: "Вопросы?",
      ctaContact: "Напишите нам.",
      onlineTitle: "Онлайн",
      onlineBadge: "Скоро",
      onlineText: "Мы готовим запуск онлайн-групп.",
      onlineCta: "Оставить заявку",
      localTitle: "Очно",
      localText:
        "2 × 45 мин. с перерывом, упор на разговорный иврит, материалы в Moodle. Другие площадки: список ожидания.",
      localLink: "Запись",
      firstH2: "Наш первый ульпан уже стартует, скоро будут и другие",
      firstText:
        "Наш первый Ulpan Ivrit открывается в еврейской общине. Следующие ульпаны мы планируем в крупнейших еврейских общинах Германии:",
      firstStartBadge: "старт 18.11.2026",
      firstPlannedBadge: "Планируется",
      firstCities: [
        { name: "Дюссельдорф", start: "старт 18.11.2026" },
        { name: "Ахен" },
        { name: "Берлин", start: "старт 15.11.2026" },
        { name: "Билефельд" },
        { name: "Бохум" },
        { name: "Бонн" },
        { name: "Дортмунд" },
        { name: "Дрезден" },
        { name: "Дуйсбург" },
        { name: "Эссен" },
        { name: "Франкфурт-на-Майне" },
        { name: "Гельзенкирхен" },
        { name: "Гамбург" },
        { name: "Ганновер" },
        { name: "Кёльн" },
        { name: "Лейпциг" },
        { name: "Мюнхен" },
        { name: "Нюрнберг" },
        { name: "Штутгарт" },
        { name: "Вупперталь" },
      ],
      firstWaitlistCta: "В список ожидания",
      firstWaitlistNote:
        "Бесплатно и без обязательств: мы сообщим, когда начнётся курс в вашем городе.",
      firstGroupCta: "Записать группу",
      firstGroupNote:
        "У вас есть группа от 15 желающих? Тогда ульпан может скоро открыться и у вас – свяжитесь с нами.",
      firstBoxTitle: "От 15 человек мы открываем новую группу.",
      firstBoxText:
        "Община, союз или круг друзей – напишите нам, и вместе подберём преподавателя, время и место.",
      firstBoxCta: "Контакты",
      cityRegisterCta: "Выбрать свой город",
    },
    soGehts: {
      title: "Запись — Ulpan Ivrit",
      desc: "Иврит A1: запись в 3 шага.",
      h1: "Запись в 3 шага",
      intro:
        "Иврит A1 для начинающих. Курс и вариант оплаты выбираете в форме — вместе с мандатом SEPA.",
      step1: "Курс и тариф",
      step1Text: "В форме выберите город и вариант оплаты.",
      step2: "Отправить форму",
      step2Text: "Данные и списание по SEPA в одном шаге.",
      step3: "Подтверждение",
      step3Text: "На e-mail придут данные курса, номер мандата и доступ в Moodle.",
      tariffTitle: "Варианты оплаты",
      tariffRecommended: "Рекомендуем",
      tariffMemberTitle: "С бесплатным членством",
      tariffMemberPrice: "60 € в месяц",
      tariffMemberHint: "Членство оформляется при записи (см. форму).",
      tariffNonTitle: "Без членства",
      tariffNonPrice: "120 € в месяц",
      tariffNonHint: "Если в форме доступен этот вариант — без членства в BiFoDe.",
      preiseLink: "Программа и стоимость",
      legalIntro: "При записи действуют наши",
      formTitle: "Запись",
      formFallback: "Форма не загружается?",
      formFallbackLink: "Открыть напрямую в Jotform",
      noCourse: "Нет курса в вашем городе?",
      noCourseLink: "Напишите нам",
      cityFaqQ: "Когда ульпан откроется в моём городе?",
      cityFaqA:
        "Как только наберётся не меньше 15 желающих – через список ожидания или как группа через вашу общину или организацию.",
      membershipAuto:
        "Заполняя форму записи в ульпан, вы автоматически и бесплатно становитесь членом BiFoDe e.V. Отдельная заявка на bifode.org не нужна. Вариант оплаты выбираете в форме.",
    },
    preise: {
      title: "Программа и стоимость — Ulpan Ivrit",
      desc: "Объём, сроки и варианты оплаты курсов иврита Ulpan Ivrit.",
      h1: "Программа и стоимость",
      h1Short: "Курс и стоимость",
      scopeH2: "Объём курса",
      sessions: "30 занятий продолжительностью 90 минут",
      units: "60 академических часов по 45 минут",
      period: "Период обучения: с 18 ноября 2026 года по 7 июля 2027 года (зависит от города и курса)",
      recommended: "Рекомендуем",
      memberTitle: "С бесплатным членством",
      memberAmount: "60 €",
      memberPeriod: "в месяц",
      memberMeta: "8 ежемесячных платежей · всего 480 €",
      nonMemberTitle: "Без членства",
      nonMemberAmount: "120 €",
      nonMemberPeriod: "в месяц",
      nonMemberMeta: "8 ежемесячных платежей · всего 960 €",
      membershipNote:
        "Членство в Bildungsforum für Demokratie und Vielfalt NRW e.V. (BiFoDe e.V.) бесплатное. По текущей логике записи оно оформляется автоматически при заявке в ульпан; отдельная заявка не нужна. Вариант оплаты выбираете в форме записи.",
      membershipLink: "Подробнее о членстве в BiFoDe e.V.",
    },
    kurse: {
      title: "Онлайн — Ulpan Ivrit",
      desc:         "Онлайн-курсы Ulpan Ivrit в подготовке. Уровни 0 и 1 — те же материалы, что на очных занятиях.",
      h1: "Онлайн — индивидуально в Moodle",
      notice:
        "Онлайн-курсы в подготовке. Участники очного курса получают доступ в Moodle.",
      intro:
        "Дистанционное обучение идёт в Moodle. Материалы те же, что на очных занятиях — программа группы дублируется в Moodle. Методика Еврейского университета в Иерусалиме, акцент на разговорный иврит.",
      localLink: "Очный курс: очно",
      entry: "Уровень входа",
      back: "← Курсы",
      moodle: "В Moodle",
      moodleNote: " — доступ для участников очного курса.",
      interestCta: "Оставить заявку",
    },
    vorOrt: {
      title: "Очно — Ulpan Ivrit",
      desc: "Иврит A1 как очный курс при еврейских общинах. Организаторы могут запросить новую группу.",
      h1: "Ульпан очно",
      currentTitle: "Очные занятия",
      currentMeta:
        "Иврит A1, упор на разговорный иврит. Актуальный курс с местом и датами — на главной странице и в форме записи.",
      currentCta: "Записаться",
      preiseLink: "Программа и стоимость",
      p1: "Очные занятия идут через еврейские организации. Другие площадки в планах; желающие могут записаться в список ожидания.",
      p2: "Типичное занятие: два академических часа по 45 минут с перерывом. Акцент: разговорный иврит. Материалы также в Moodle.",
      p3: "В проекте для еврейских общин мы по возможности ищем преподавателя и участвуем в финансировании, даём материалы и иштальмут (ивр. השתלמות, повышение квалификации). Подробнее:",
      p3Link: "Преподаватели",
      p4: "Участники записываются через форму. С записью они автоматически и бесплатно становятся членами BiFoDe e.V.",
      p4Link: "Запись",
      formTitle: "Организаторам: собрать группу",
      formLead: "Новые группы стартуют от 15 участников.",
      formMail: "Для правления и контактных лиц. Сообщение уйдёт на",
      orgType: "Тип организации",
      gemeinde: "Община",
      verein: "Союз",
      community: "Инициативная группа",
      other: "Другое",
      orgName: "Название организации",
      place: "Город",
      person: "Контактное лицо",
      email: "Эл. почта",
      phone: "Телефон",
      size: "Ориентировочный размер группы",
      sizePlaceholder: "мин. 15",
      message: "Сообщение",
      submit: "Отправить запрос",
      subject: "Ulpan очно — запрос группы",
    },
    lehrer: {
      title: "Преподаватели — Ulpan Ivrit",
      desc: "Повышение квалификации (Hishtalmut), материалы и методика Еврейского университета в Иерусалиме.",
      h1: "Преподаватели",
      p1: "В проектах с общинами, союзами и инициативными группами мы по возможности ищем преподавателей и участвуем в финансировании. Преподающим даём материалы и иштальмут.",
      hishtalmut: "Hishtalmut — иштальмут",
      hishtalmutText:
        "Hishtalmut, иштальмут (ивр. השתלמות, повышение квалификации) — профессиональная программа повышения квалификации преподавателей. Её ведут действующие преподаватели Еврейского университета в Иерусалиме.",
      method: "Методика и материалы",
      methodText:
        "Занятия идут по методике Еврейского университета в Иерусалиме. Акцент — разговорный иврит. Учебники и упражнения выдаются группам и параллельно дублируются в Moodle — очно и онлайн один и тот же материал.",
      jobs: "Открытые вакансии",
      local: "Очная группа",
    },
    stellen: {
      title: "Вакансии — Ulpan Ivrit",
      desc: "Открытые вакансии для преподавателей иврита в общинах и проектах для еврейских общин.",
      h1: "Вакансии",
      intro:
        "Открытые вакансии для преподавателей в проектах для еврейских общин. Материалы, Moodle и иштальмут даёт проект. Возможность финансирования преподавателя рассматривается отдельно для каждой площадки.",
      empty: "Сейчас открытых вакансий нет. Инициативно на",
      methodLink: "Преподаватели и методика",
      back: "← Вакансии",
      closed: "закрыто",
      apply: "Отправить отклик",
      applySubject: "Отклик",
    },
    faq: {
      title: "FAQ — Ulpan Ivrit",
      desc: "Членство, оплата, занятия, площадки, онлайн и Hishtalmut.",
      h1: "Вопросы",
      q1: "Становлюсь ли я членом союза при записи?",
      a1: "Отдельная заявка не нужна. Заполняя форму записи в ульпан, вы автоматически и бесплатно становитесь членом BiFoDe e.V. Объём курса и варианты оплаты — в разделе",
      a1Link: "Программа и стоимость",
      q2: "Как оплачивать?",
      a2: "Списанием по SEPA. Суммы и число платежей указаны в разделе",
      a2Link: "Программа и стоимость",
      q3: "Как проходит занятие?",
      a3: "Два академических часа по 45 минут с перерывом, упор на разговорный иврит, материалы в Moodle.",
      q3Link: "Запись",
      q4: "Есть ли другие площадки?",
      a4: "Другие площадки в планах. Через форму вы бесплатно попадёте в список ожидания.",
      a4Link: "форму записи",
      q5: "Есть ли онлайн-курсы?",
      a5: "В подготовке. Напишите нам через контактную форму.",
      q6: "Что, если я пропущу занятие?",
      a6: "Материалы доступны в Moodle.",
      q7: "Что такое Hishtalmut?",
      a7: "Иштальмут (Hishtalmut) — повышение квалификации преподавателей. Его ведут действующие преподаватели Еврейского университета в Иерусалиме. Материалы и методика — из той же школы.",
      q8: "Когда ульпан откроется в моём городе?",
      a8: "Как только наберётся не меньше 15 желающих – через список ожидания или как группа через вашу общину или организацию.",
      q9: "Могу ли я отозвать (отменить) запись?",
      a9: "Да. Как потребитель вы можете в течение 14 дней со дня заключения договора отказаться без объяснения причин. Подробности и образец формы — в",
      a9Link: "разъяснении о праве на отказ",
      q10: "Что будет, если курс не состоится?",
      a10: "Если не наберётся минимальное число участников (как правило, 15 человек), мы можем отменить или перенести курс. Уже уплаченные взносы за неоказанные услуги возвращаются.",
      q11: "Как работает списание по SEPA?",
      a11: "Взнос списывается 8 ежемесячными платежами (дек 2026–июль 2027) по базовому прямому дебетованию SEPA (идентификатор кредитора DE86ZZZ00002929761). О списании мы уведомляем заранее, не позднее чем за 14 дней до срока.",
    },
    kontakt: {
      title: "Контакты — Ulpan Ivrit",
      desc: "Три пути: учащиеся, организаторы, преподаватели — или сразу на info@bifode.org.",
      h1: "Контакты",
      intro: "Выберите, кто вы. Общие вопросы — на",
      mail: "Эл. почта",
      learnersTitle: "Учащиеся",
      learners: "Запишитесь через форму. С записью вы автоматически и бесплатно становитесь членом BiFoDe e.V.",
      learnersLink: "Запись",
      orgsTitle: "Община или союз",
      orgs: "Хотите вести очную группу. Материалы, Moodle и часто преподавателя даёт проект.",
      orgsLink: "Собрать группу",
      teachersTitle: "Преподаватели",
      teachers: "Открытые вакансии в проектах для еврейских общин. Иштальмут и материалы — от проекта.",
      teachersLink: "Открытые вакансии",
    },
    verein: {
      title: "Союз — Ulpan Ivrit",
      desc: "Bildungsforum für Demokratie und Vielfalt NRW e.V. (BiFoDe e.V.) ведёт Ulpan Ivrit в Германии.",
      h1: "Реализация — BiFoDe e.V.",
      p1: "Программа идёт от Всемирной сионистской организации, Ofek Israeli, Сохнута и Керен ха-Йесод. Оператор в Германии — Bildungsforum für Demokratie und Vielfalt NRW e.V. (BiFoDe e.V.). При записи в ульпан участники автоматически и бесплатно становятся членами союза.",
      fees: "Объём курса и варианты оплаты:",
      talks: "Члены союза получают лекции и анонсы — онлайн и очно, по программе.",
      partner: "Партнёры",
      project: "Страница проекта",
    },
    partner: {
      title: "Партнёры — Ulpan Ivrit",
      h1: "Партнёры",
      intro:
        "Ulpan Ivrit — проект Всемирной сионистской организации, Ofek Israeli, Еврейского агентства (Сохнут) и Керен ха-Йесод. Реализация в Германии — у BiFoDe e.V.",
      methodRole: "Методика",
      methodName: "Еврейский университет в Иерусалиме",
      methodText:
        "Методика занятий. Иштальмут (Hishtalmut) преподавателей ведут действующие преподаватели университета.",
      roles: {
        bifode: "Оператор",
        wzo: "Партнёр",
        "keren-hayesod": "Партнёр",
        ofek: "Партнёр",
        sochnut: "Партнёр",
      },
      names: {
        bifode: "BiFoDe e.V.",
        wzo: "Всемирная сионистская организация",
        "keren-hayesod": "Keren Hayesod – United Israel Appeal",
        ofek: "Ofek Israeli",
        sochnut: "The Jewish Agency for Israel",
      },
      blurbs: {
        bifode: "Оператор Ulpan Ivrit в Германии и организационная основа членства.",
        wzo: "Отдел поощрения алии. Партнёр Ulpan Ivrit.",
        "keren-hayesod": "Керен ха-Йесод — партнёр Ulpan Ivrit.",
        ofek: "Ofek Israeli — партнёр Ulpan Ivrit.",
        sochnut: "Еврейское агентство — Сохнут — партнёр Ulpan Ivrit.",
      },
    },
    legal: {
      impressum: "Выходные данные",
      datenschutz: "Защита данных",
      cookies: "Cookies",
      teilnahmebedingungen: "Условия участия",
      widerruf: "Право на отказ",
      noCookies: "Нет cookies для учёта",
      vereinImpressum: "Импрессум союза на bifode.org (на немецком)",
      vereinDatenschutz: "Защита данных союза на bifode.org (на немецком)",
    },
    session: { weekly: "раз в неделю", spoken: "разговорный иврит" },
    courses: {
      "hebrew-level-0": {
        title: "Иврит, уровень 0",
        level: "Pre-A1 / с нуля",
        format: "Онлайн — уроки, аудирование, чтение, тесты, H5P, задания",
        entry: "Предварительные знания не нужны",
        body: "<p>Hebrew-A0 — вступительный курс для тех, кто не знает иврита. Он готовит к уровню 1: алфавит, произношение, базовый словарный запас и язык аудитории.</p><p>К концу курса участники узнают и произносят основные буквы, читают короткие слова для начинающих, могут просто представиться и перейти на уровень 1.</p>",
      },
      "hebrew-level-1": {
        title: "Иврит, уровень 1",
        level: "A1",
        format: "Онлайн — уроки, аудирование, чтение, тесты, задания",
        entry: "Алфавит, базовая фонетика и базовый словарный запас — или завершённый уровень 0",
        body: "<p>Уровень 1 — курс для начинающих, которые уже знают алфавит и базовый словарный запас допрограммного уровня или закончили уровень 0.</p><p>Курс формирует бытовой иврит: чтение, аудирование, речь, письмо, грамматика и задания в Moodle.</p>",
      },
    },
    jobs: {
      "ivrit-duesseldorf-anfaenger": {
        title: "Преподаватель иврита — район Дюссельдорфа",
        location: "Район Дюссельдорфа",
        format: "Предпочтительно очно, онлайн возможен",
        level: "Начинающие",
        body: "<p>Ищем преподавателя современного иврита в районе Дюссельдорфа. Группа стартует с нуля. Очные занятия предпочтительны; онлайн возможен, если очно нельзя.</p><p>Типичное занятие: два академических часа, раз в неделю, с перерывом. Акцент: разговорный иврит. Методика Еврейского университета в Иерусалиме. Материалы и их копию в Moodle предоставляет проект; иштальмут (Hishtalmut) ведут преподаватели университета.</p><p>Отклик с кратким профилем и указанием очной или онлайн-доступности — на адрес ниже.</p>",
      },
    },
  },
  en: {
    meta: {
      descDefault:
        "Register for Ulpan: Hebrew A1 for beginners. Focus on spoken Hebrew.",
      ogImageAlt:
        "Ulpan registration — Hebrew A1 for beginners, focus on spoken Hebrew",
      skip: "Skip to content",
      navAria: "Main navigation",
      footerAria: "Footer",
      legalAria: "Legal",
      langAria: "Language",
      partnersAria: "Partners",
    },
    form: {
      sent: "Sent. We will read it and reply by email.",
      error: "Sending failed. Write to us directly at the address above.",
      sending: "Sending…",
      privacyBefore: "I have read the",
      privacyLink: "privacy notice",
      privacyAfter: ". The details are used only to handle this request.",
      privacyNote:
        "The controller is BiFoDe e.V. No advertising. Details are in the privacy notice.",
    },
    nav: {
      menu: "Menu",
      lernen: "Learn",
      anmelden: "Registration",
      online: "Online",
      onlineSoon: "Online (soon)",
      vorOrt: "In person",
      lehrkraefte: "Teachers",
      methodik: "Method & training",
      stellen: "Jobs",
      verein: "Association",
      aboutVerein: "About the association",
      partner: "Partners",
      faq: "FAQ",
      kontakt: "Contact",
      member: "Register now",
      start: "Registration",
      interest: "Register interest",
      preise: "Course details & pricing",
    },
    quote: {
      translation:
        "Only in the Hebrew language will Israel live in its land.",
      source: "Eliezer Ben-Yehuda",
      open: "“",
      close: "”",
      pause: "Pause animation",
      play: "Play animation",
    },
    home: {
      title: "Learn Hebrew in Düsseldorf – Ulpan Ivrit A1 from 18 Nov 2026",
      description:
        "Hebrew A1 at the Jewish Community of Düsseldorf, Wednesdays 18:30.",
      h1: "Learning <strong>Hebrew</strong> is quite <strong>simple</strong>!",
      lead:
        "In person and online — Hebrew University of Jerusalem method, spoken Hebrew, materials in Moodle.",
      nextEyebrow: "Next course",
      nextCourses: [
        {
          status: "Registration open",
          level: "Hebrew A1",
          place: "Düsseldorf",
          venue: "Jewish Community of Düsseldorf, Paul-Spiegel-Platz 1",
          start: "Start: 18 November 2026",
          schedule: "Wednesdays · 18:30–20:30",
          format: "In-person course",
        },
        {
          status: "Registration open",
          level: "Hebrew A1",
          place: "Berlin-Prenzlauer Berg",
          venue: "Kunstschule Berlin, Immanuelkirchstraße 4, 10405 Berlin",
          start: "Start: 15 November 2026",
          schedule: "Sundays · mornings",
          format: "In-person course",
        },
      ],
      courseDetails: "Course details",
      registerNow: "Register now",
      activeCitiesTitle: "Active courses",
      plannedCitiesTitle: "Locations in planning",
      showMoreCities: "Show more locations",
      hideCities: "Hide locations",
      f1: "In person & online",
      f3: "In cooperation with the Hebrew University of Jerusalem",
      ctaPitch: "Registration takes a few minutes.",
      ctaQuestions: "Questions?",
      ctaContact: "write to us",
      onlineTitle: "Online",
      onlineBadge: "Coming soon",
      onlineText: "Online groups are in preparation.",
      onlineCta: "Register interest",
      localTitle: "In person",
      localText:
        "2 × 45 min with a break, focus on speaking, materials in Moodle. Further locations: waiting list.",
      localLink: "Registration",
      firstH2: "Our first Ulpan is starting – more are coming",
      firstText:
        "Our first Ulpan Ivrit opens at a Jewish community. We are planning further Ulpanim in Germany's largest Jewish communities:",
      firstStartBadge: "starts 18.11.2026",
      firstPlannedBadge: "Planned",
      firstCities: [
        { name: "Düsseldorf", start: "starts 18.11.2026" },
        { name: "Aachen" },
        { name: "Berlin", start: "starts 15.11.2026" },
        { name: "Bielefeld" },
        { name: "Bochum" },
        { name: "Bonn" },
        { name: "Dortmund" },
        { name: "Dresden" },
        { name: "Duisburg" },
        { name: "Essen" },
        { name: "Frankfurt" },
        { name: "Gelsenkirchen" },
        { name: "Hamburg" },
        { name: "Hanover" },
        { name: "Cologne" },
        { name: "Leipzig" },
        { name: "Munich" },
        { name: "Nuremberg" },
        { name: "Stuttgart" },
        { name: "Wuppertal" },
      ],
      firstWaitlistCta: "Join the waiting list",
      firstWaitlistNote:
        "Free and non-binding – we'll let you know when your city starts.",
      firstGroupCta: "Register a group",
      firstGroupNote:
        "Do you have a group of 15 or more? Then the Ulpan could start near you soon – get in touch.",
      firstBoxTitle: "From 15 people we start a new group.",
      firstBoxText:
        "Community, association or group of friends – contact us and we'll plan teacher, schedule and venue together.",
      firstBoxCta: "Contact",
      cityRegisterCta: "Register your city",
    },
    soGehts: {
      title: "Registration — Ulpan Ivrit",
      desc: "Hebrew A1: register in 3 steps.",
      h1: "Registration in 3 steps",
      intro:
        "Hebrew A1 for beginners. Choose course and price option in the form — including SEPA direct debit.",
      step1: "Course & price",
      step1Text: "In the form, choose location and price option.",
      step2: "Submit the form",
      step2Text: "Your details and SEPA mandate in one step.",
      step3: "Confirmation",
      step3Text: "You receive course details, mandate reference and Moodle access by email.",
      tariffTitle: "Price options",
      tariffRecommended: "Recommended",
      tariffMemberTitle: "With free membership",
      tariffMemberPrice: "€60 per month",
      tariffMemberHint: "Membership is created with registration (see form).",
      tariffNonTitle: "Without membership",
      tariffNonPrice: "€120 per month",
      tariffNonHint: "If available in the form — without BiFoDe membership.",
      preiseLink: "Course details & pricing",
      legalIntro: "By registering you agree to our",
      formTitle: "Registration",
      formFallback: "Form not loading?",
      formFallbackLink: "Open directly on Jotform",
      noCourse: "No course in your city?",
      noCourseLink: "Write to us",
      cityFaqQ: "When does an Ulpan start in my city?",
      cityFaqA:
        "As soon as at least 15 interested people have signed up – via the waiting list or as a group through your community or organisation.",
      membershipAuto:
        "By filling in the Ulpan registration form you automatically become a member of BiFoDe e.V. at no charge. A separate application on bifode.org is not required. You choose the price option in the form.",
    },
    preise: {
      title: "Course details & pricing — Ulpan Ivrit",
      desc: "Scope, dates and course fees for Ulpan Ivrit Hebrew courses.",
      h1: "Course details & pricing",
      h1Short: "Course & pricing",
      scopeH2: "Course scope",
      sessions: "30 sessions of 90 minutes each",
      units: "60 teaching units of 45 minutes",
      period: "Course period: 18 November 2026 to 7 July 2027 (depends on city and course)",
      recommended: "Recommended",
      memberTitle: "With free membership",
      memberAmount: "€60",
      memberPeriod: "per month",
      memberMeta: "8 monthly instalments · €480 in total",
      nonMemberTitle: "Without membership",
      nonMemberAmount: "€120",
      nonMemberPeriod: "per month",
      nonMemberMeta: "8 monthly instalments · €960 in total",
      membershipNote:
        "Membership of Bildungsforum für Demokratie und Vielfalt NRW e.V. (BiFoDe e.V.) is free. Under the current registration logic it is created automatically with Ulpan enrolment; a separate application is not required. You choose the price option in the registration form.",
      membershipLink: "More information about membership of BiFoDe e.V.",
    },
    kurse: {
      title: "Online — Ulpan Ivrit",
      desc: "Online courses from Ulpan Ivrit are in preparation. Level 0 and Level 1 — same materials as in person.",
      h1: "Online — individually on Moodle",
      notice:
        "Online courses are in preparation. In-person participants receive Moodle access.",
      intro:
        "Distance learning runs on Moodle. The materials are the same as in the classroom — the group syllabus is mirrored in Moodle. Hebrew University of Jerusalem method, focus on spoken Hebrew.",
      localLink: "In-person course: locally",
      entry: "Entry",
      back: "← Courses",
      moodle: "Go to Moodle",
      moodleNote: " — access for in-person participants.",
      interestCta: "Register interest",
    },
    vorOrt: {
      title: "In person — Ulpan Ivrit",
      desc: "Hebrew A1 as an in-person course at Jewish communities. Hosts can request a new group.",
      h1: "Ulpan in person",
      currentTitle: "In-person teaching",
      currentMeta:
        "Hebrew A1, focus on spoken Hebrew. The current course with venue and dates is on the homepage and in the enrolment form.",
      currentCta: "Register now",
      preiseLink: "Course details & pricing",
      p1: "In-person teaching runs through Jewish organisations. Further locations are planned; interested people can join the waiting list.",
      p2: "A typical session: 2 × 45 min with a break. Focus: spoken Hebrew. Materials are also in Moodle.",
      p3: "In the community project we look for a teacher where possible and help with funding, materials and training (Hishtalmut). More:",
      p3Link: "Teachers",
      p4: "Participants register via the enrolment form. With the registration they automatically become members of BiFoDe e.V. at no charge.",
      p4Link: "Registration",
      formTitle: "Hosts: start a group",
      formLead: "New groups start from 15 participants.",
      formMail: "For boards and contact persons. The message goes to",
      orgType: "Type of organisation",
      gemeinde: "Congregation",
      verein: "Association",
      community: "Community",
      other: "Other",
      orgName: "Name of the organisation",
      place: "Place",
      person: "Contact person",
      email: "Email",
      phone: "Phone",
      size: "Estimated group size",
      sizePlaceholder: "min. 15",
      message: "Message",
      submit: "Send enquiry",
      subject: "Ulpan in person — group enquiry",
    },
    lehrer: {
      title: "Teachers — Ulpan Ivrit",
      desc: "Training (Hishtalmut), materials and the Hebrew University of Jerusalem method.",
      h1: "Teachers",
      p1: "In projects with congregations, associations and communities we look for teachers where possible and help with funding. We provide materials and training.",
      hishtalmut: "Hishtalmut — training",
      hishtalmutText:
        "Hishtalmut (Heb. השתלמות) is professional teacher training. It is run by active lecturers and teachers of the Hebrew University of Jerusalem.",
      method: "Method and materials",
      methodText:
        "Teaching follows the Hebrew University of Jerusalem method. Focus: spoken Hebrew. Textbooks and exercises are provided to groups and mirrored in Moodle — in person and online use the same syllabus.",
      jobs: "Open positions",
      local: "Local group",
    },
    stellen: {
      title: "Jobs — Ulpan Ivrit",
      desc: "Open Hebrew teaching positions in congregations and communities.",
      h1: "Jobs",
      intro:
        "Open teaching assignments in community projects. The project provides materials, Moodle and training (Hishtalmut). Teacher funding is reviewed per location.",
      empty: "No opening right now. Speculative applications to",
      methodLink: "Teachers and method",
      back: "← Jobs",
      closed: "closed",
      apply: "Send application",
      applySubject: "Application",
    },
    faq: {
      title: "FAQ — Ulpan Ivrit",
      desc: "Membership, payment, sessions, locations, online and Hishtalmut.",
      h1: "Questions",
      q1: "Do I become a member when I register?",
      a1: "A separate application is not needed. By registering for the Ulpan you automatically become a member of BiFoDe e.V. at no charge. Course scope and price options are under",
      a1Link: "Course details & pricing",
      q2: "How do I pay?",
      a2: "By SEPA direct debit. The monthly amounts and number of instalments are under",
      a2Link: "Course details & pricing",
      q3: "What does a session look like?",
      a3: "2 × 45 min with a break, focus on speaking, materials in Moodle.",
      q3Link: "Registration",
      q4: "Are there other locations?",
      a4: "Further locations are in planning. Via the form you join the waiting list for free.",
      a4Link: "registration form",
      q5: "Are there online courses?",
      a5: "In preparation. Write to us via the contact form.",
      q6: "What if I miss a session?",
      a6: "The materials are available in Moodle.",
      q7: "What is Hishtalmut?",
      a7: "Teacher training. It is run by active lecturers and teachers of the Hebrew University of Jerusalem. Materials and method come from the same school.",
      q8: "When does an Ulpan start in my city?",
      a8: "As soon as at least 15 interested people have signed up – via the waiting list or as a group through your community or organisation.",
      q9: "Can I withdraw my registration?",
      a9: "Yes. As a consumer you may withdraw within 14 days of concluding the contract without giving reasons. Details and the model form are in the",
      a9Link: "withdrawal instructions",
      q10: "What happens if the course does not take place?",
      a10: "If the minimum number of participants (usually 15 people) is not reached, we may cancel or postpone the course. Fees already paid for services not provided are refunded.",
      q11: "How does the SEPA direct debit work?",
      a11: "The fee is collected in 8 monthly instalments (Dec 2026–Jul 2027) by SEPA core direct debit (creditor identifier DE86ZZZ00002929761). We notify you of the debit in advance, at least 14 days before the due date.",
    },
    kontakt: {
      title: "Contact — Ulpan Ivrit",
      desc: "Three paths: learners, hosts, teachers — or write to info@bifode.org.",
      h1: "Contact",
      intro: "Choose who you are. General questions go to",
      mail: "Email",
      learnersTitle: "Learners",
      learners: "Register via the enrolment form. With the registration you automatically become a member of BiFoDe e.V. at no charge.",
      learnersLink: "Registration",
      orgsTitle: "Congregation or association",
      orgs: "You want to host an in-person group. The project provides materials, Moodle and often the teacher.",
      orgsLink: "Start a group",
      teachersTitle: "Teachers",
      teachers: "Open assignments in community projects. Hishtalmut and materials come from the project.",
      teachersLink: "Open positions",
    },
    verein: {
      title: "Association — Ulpan Ivrit",
      desc: "Bildungsforum für Demokratie und Vielfalt NRW e.V. (BiFoDe e.V.) delivers Ulpan Ivrit in Germany.",
      h1: "Delivered by BiFoDe e.V.",
      p1: "The programme comes from the World Zionist Organization, Ofek Israeli, the Jewish Agency and Keren Hayesod. The host in Germany is Bildungsforum für Demokratie und Vielfalt NRW e.V. (BiFoDe e.V.). With the Ulpan registration, participants automatically become members at no charge.",
      fees: "Course scope and price options:",
      talks: "Members receive talks and announcements — online and in person, depending on the programme.",
      partner: "Partners",
      project: "Project page",
    },
    partner: {
      title: "Partners — Ulpan Ivrit",
      h1: "Partners",
      intro:
        "Ulpan Ivrit is a project of the World Zionist Organization, Ofek Israeli, the Jewish Agency (Sochnut) and Keren Hayesod. Delivery in Germany is by BiFoDe e.V.",
      methodRole: "Method",
      methodName: "Hebrew University of Jerusalem",
      methodText:
        "Teaching method. Hishtalmut (teacher training) is run by active lecturers and teachers of the university.",
      roles: {
        bifode: "Host",
        wzo: "Partner",
        "keren-hayesod": "Partner",
        ofek: "Partner",
        sochnut: "Partner",
      },
      names: {
        bifode: "BiFoDe e.V.",
        wzo: "World Zionist Organization",
        "keren-hayesod": "Keren Hayesod – United Israel Appeal",
        ofek: "Ofek Israeli",
        sochnut: "The Jewish Agency for Israel",
      },
      blurbs: {
        bifode: "Host of Ulpan Ivrit in Germany and the organisational frame for membership.",
        wzo: "Department for the Promotion of Aliyah. Partner of Ulpan Ivrit.",
        "keren-hayesod": "Keren Hayesod is a partner of Ulpan Ivrit.",
        ofek: "Ofek Israeli is a partner of Ulpan Ivrit.",
        sochnut: "The Jewish Agency – Sochnut – is a partner of Ulpan Ivrit.",
      },
    },
    legal: {
      impressum: "Imprint",
      datenschutz: "Privacy",
      cookies: "Cookies",
      teilnahmebedingungen: "Terms of participation",
      widerruf: "Right of withdrawal",
      noCookies: "No tracking cookies",
      vereinImpressum: "Association imprint on bifode.org",
      vereinDatenschutz: "Association privacy notice on bifode.org",
    },
    session: { weekly: "once a week", spoken: "spoken Hebrew" },
    courses: {
      "hebrew-level-0": {
        title: "Hebrew Level 0",
        level: "Pre-A1 / Absolute Beginners",
        format: "Online — lessons, listening, reading, quizzes, H5P, assignments",
        entry: "No prior knowledge required",
        body: "<p>Hebrew-A0 is the entry course for learners with no Hebrew. It prepares for Hebrew Level 1: alphabet, pronunciation, core vocabulary and classroom communication.</p><p>By the end, participants can recognise and pronounce key letters, read short beginner words, introduce themselves simply and continue into Level 1.</p>",
      },
      "hebrew-level-1": {
        title: "Hebrew Level 1",
        level: "A1",
        format: "Online — lessons, listening, reading, quizzes, assignments",
        entry: "Alphabet, basic pronunciation and starter vocabulary — or completion of Level 0",
        body: "<p>Hebrew Level 1 is the beginner course for learners who already know the alphabet and basic pre-ulpan vocabulary, or who have finished Level 0.</p><p>The course builds everyday Hebrew: reading, listening, speaking, writing, grammar and guided Moodle activities.</p>",
      },
    },
    jobs: {
      "ivrit-duesseldorf-anfaenger": {
        title: "Ivrit teacher — Düsseldorf area",
        location: "Düsseldorf area",
        format: "In person preferred, online possible",
        level: "Beginner",
        body: "<p>We are looking for a teacher of modern Hebrew (Ivrit) in the Düsseldorf area. The group starts at beginner level. In-person teaching is preferred; online hours are possible if in-person teaching is not.</p><p>A typical session: two full hours, once a week, with a break. Focus: spoken Hebrew. Hebrew University of Jerusalem method. The project provides materials and a Moodle mirror; Hishtalmut (training) is run by university lecturers and teachers.</p><p>Please apply with a short profile and a note on in-person or online availability to the address below.</p>",
      },
    },
  },
};

export function t(locale: string | undefined): Messages {
  return messages[uiLocale(locale)];
}
