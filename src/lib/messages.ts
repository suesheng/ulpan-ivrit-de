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
    nextTitle: string;
    nextWhen: string;
    nextWhere: string;
    nextMeta: string;
    nextPrice: string;
    nextCta: string;
    f1: string;
    f3: string;
    f5: string;
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
    firstCities: string[];
    firstWaitlistCta: string;
    firstWaitlistNote: string;
    firstGroupCta: string;
    firstGroupNote: string;
    firstBoxTitle: string;
    firstBoxText: string;
    firstBoxCta: string;
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
    tariffMemberItems: string[];
    tariffNonTitle: string;
    tariffNonItems: string[];
    tariffNote: string;
    datesTitle: string;
    datesSummary: string;
    datesFreeLabel: string;
    formTitle: string;
    noCourse: string;
    noCourseLink: string;
    cityFaqQ: string;
    cityFaqA: string;
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
    currentPrice: string;
    currentCta: string;
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
    q2: string;
    a2: string;
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
        "Hebräischkurs A1 in der Jüdischen Gemeinde Düsseldorf, mittwochs 18:30 Uhr. Mit kostenloser Mitgliedschaft 60 €/Monat.",
      ogImageAlt:
        "Anmeldung zum Ulpan — Hebräisch A1 Anfänger, 60 Unterrichtsstunden, 60 €/Monat mit kostenloser BiFoDe-Mitgliedschaft",
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
        "Hebräischkurs A1 in der Jüdischen Gemeinde Düsseldorf, mittwochs 18:30 Uhr. Mit kostenloser Mitgliedschaft 60 €/Monat.",
      h1: "<strong>Hebräisch</strong> lernen ist ganz <strong>einfach</strong>!",
      lead:
        "Präsenz und Online — Methodik der Hebräischen Universität Jerusalem, gesprochenes Hebräisch, Materialien in Moodle.",
      nextEyebrow: "Nächster Kurs",
      nextTitle: "Hebräisch (A1) Anfänger",
      nextWhen: "Ab Mittwoch, 18.11.2026 · mittwochs 18:30–20:30 Uhr",
      nextWhere: "Jüdische Gemeinde Düsseldorf, Paul-Spiegel-Platz 1",
      nextMeta: "30 Termine · 60 Unterrichtsstunden · bis Juli 2027",
      nextPrice:
        "Mit kostenloser Mitgliedschaft: <strong>60&nbsp;€/Monat</strong> statt <strong>120&nbsp;€</strong>",
      nextCta: "Jetzt anmelden",
      f1: "Präsenz & Online",
      f3: "In Zusammenarbeit mit der Hebräischen Universität Jerusalem",
      f5: "Kostenlose Mitgliedschaft – 50&nbsp;% Rabatt: <strong>60&nbsp;€</strong> statt <strong>120&nbsp;€</strong> im Monat",
      ctaPitch:
        "Sichern Sie sich jetzt Ihre <span class=\"home-perk\">kostenlose Mitgliedschaft + 50&nbsp;% Rabatt</span>.<br />Anmeldung in wenigen Minuten.",
      ctaQuestions: "Fragen?",
      ctaContact: "schreiben Sie uns",
      onlineTitle: "Online",
      onlineBadge: "Bald verfügbar",
      onlineText: "Online-Gruppen sind in Vorbereitung.",
      onlineCta: "Interesse melden",
      localTitle: "Vor Ort – in Düsseldorf",
      localText:
        "Mittwochs 2 × 45 Min., Schwerpunkt Sprechen, Unterlagen in Moodle. Berlin: Warteliste.",
      localLink: "Anmeldung",
      firstH2: "Düsseldorf ist der erste Ulpan – weitere folgen",
      firstText:
        "Mit Düsseldorf startet am 18. November 2026 der erste Ulpan Ivrit. Weitere Ulpanim planen wir in den größten jüdischen Gemeinden Deutschlands:",
      firstStartBadge: "Start 18.11.2026",
      firstPlannedBadge: "in Planung",
      firstCities: [
        "Düsseldorf",
        "Aachen",
        "Berlin",
        "Bielefeld",
        "Bochum",
        "Bonn",
        "Dortmund",
        "Dresden",
        "Duisburg",
        "Essen",
        "Frankfurt am Main",
        "Gelsenkirchen",
        "Hamburg",
        "Hannover",
        "Köln",
        "Leipzig",
        "München",
        "Nürnberg",
        "Stuttgart",
        "Wuppertal",
      ],
      firstWaitlistCta: "Auf die Warteliste",
      firstWaitlistNote:
        "Kostenlos und unverbindlich – wir informieren Sie, sobald Ihre Stadt startet.",
      firstGroupCta: "Gruppe melden",
      firstGroupNote:
        "Sie haben eine Gruppe ab 15 Interessierten? Dann kann der Ulpan schon bald bei Ihnen starten – sprechen Sie uns an.",
      firstBoxTitle: "Ab 15 Personen gründen wir eine neue Gruppe.",
      firstBoxText:
        "Gemeinde, Verein oder Freundeskreis – melden Sie sich mit Ihrer Gruppe, und wir planen gemeinsam Lehrkraft, Termine und Ort.",
      firstBoxCta: "Kontakt aufnehmen",
    },
    soGehts: {
      title: "Anmeldung — Ulpan Ivrit",
      desc: "Hebräisch A1 in Düsseldorf ab 18.11.2026: in 3 Schritten anmelden. Mit kostenloser Mitgliedschaft 60 €/Monat.",
      h1: "Anmeldung in 3 Schritten",
      intro:
        "Hebräisch A1 in der Jüdischen Gemeinde Düsseldorf. Füllen Sie das Formular aus — Kurs, Tarif und SEPA in einem Schritt.",
      step1: "Formular ausfüllen",
      step1Text:
        "Kurs, Tarif und SEPA-Lastschrift in einem Formular. Die Mitgliedschaft bei BiFoDe e.V. ist kostenlos und optional.",
      step2: "Bestätigung per E-Mail",
      step2Text:
        "Sie erhalten eine Bestätigung mit Kursdaten, Mandatsreferenz und Zugang zu Moodle (ulpan.bifode.org).",
      step3: "Erster Termin",
      step3Text: "Mittwoch, 18.11.2026, 18:30 Uhr — Jüdische Gemeinde Düsseldorf, Paul-Spiegel-Platz 1.",
      tariffTitle: "Tarife",
      tariffRecommended: "Empfohlen",
      tariffMemberTitle: "Mit kostenloser Mitgliedschaft",
      tariffMemberItems: [
        "8 € / Unterrichtsstunde (45 Min.)",
        "60 € / Monat",
        "gesamt 480 €",
      ],
      tariffNonTitle: "Ohne Mitgliedschaft",
      tariffNonItems: [
        "16 € / Unterrichtsstunde (45 Min.)",
        "120 € / Monat",
        "gesamt 960 €",
      ],
      tariffNote: "45 Min. · 8 Raten Dez 2026–Jul 2027 · SEPA-Lastschrift",
      datesTitle: "Kurstermine",
      datesSummary:
        "30 Termine à 90 Min. (2 × 45 Min.) = 60 Unterrichtsstunden · mittwochs 18:30–20:30 Uhr · bis 07.07.2027",
      datesFreeLabel: "Unterrichtsfrei",
      formTitle: "Anmeldung",
      noCourse: "Kein Kurs in Ihrer Stadt?",
      noCourseLink: "Schreiben Sie uns",
      cityFaqQ: "Wann startet ein Ulpan in meiner Stadt?",
      cityFaqA:
        "Sobald sich mindestens 15 Interessierte gemeldet haben – über die Warteliste oder als Gruppe über Ihre Gemeinde oder Organisation.",
    },
    kurse: {
      title: "Online — Ulpan Ivrit",
      desc: "Online-Kurse von Ulpan Ivrit sind in Vorbereitung. Level 0 und Level 1 — Materialien wie im Präsenzunterricht.",
      h1: "Online — individuell über Moodle",
      notice:
        "Online-Kurse sind in Vorbereitung. Teilnehmende des Präsenzkurses erhalten Zugang zu Moodle.",
      intro:
        "Der Fernunterricht läuft auf Moodle. Die Materialien sind dieselben wie im Präsenzunterricht — der Stoff der Gruppe wird in Moodle gespiegelt. Methodik der Hebräischen Universität Jerusalem, Schwerpunkt gesprochenes Hebräisch.",
      localLink: "Präsenzkurs: Vor Ort",
      entry: "Einstieg",
      back: "← Kurse",
      moodle: "Zum Moodle",
      moodleNote: " — Zugang für Teilnehmende des Präsenzkurses.",
      interestCta: "Interesse melden",
    },
    vorOrt: {
      title: "Vor Ort — Ulpan Ivrit",
      desc: "Hebräisch A1 in Düsseldorf ab 18.11.2026. Berlin: Warteliste. Träger können neue Gruppen anfragen.",
      h1: "Ulpan vor Ort",
      currentTitle: "Aktueller Kurs: Düsseldorf",
      currentMeta:
        "Hebräisch A1 · ab 18.11.2026 · mittwochs 18:30–20:30 Uhr · Jüdische Gemeinde Düsseldorf, Paul-Spiegel-Platz 1 · 30 Termine · 60 Unterrichtsstunden · bis 07.07.2027",
      currentPrice:
        "Mit kostenloser Mitgliedschaft: <strong>60&nbsp;€/Monat</strong> (gesamt 480&nbsp;€) · ohne: <strong>120&nbsp;€/Monat</strong> (gesamt 960&nbsp;€)",
      currentCta: "Jetzt anmelden",
      p1: "Der Präsenzunterricht läuft über jüdische Organisationen. Aktuell starten wir in Düsseldorf; Berlin ist in Planung (Warteliste).",
      p2: "Typischer Termin: mittwochs 18:30–20:30 Uhr, 2 × 45 Min. mit Pause. Schwerpunkt: gesprochenes Hebräisch. Materialien liegen auch in Moodle.",
      p3: "Im Community-Projekt suchen wir nach Möglichkeit die Lehrkraft und beteiligen uns an der Finanzierung, stellen Materialien und Fortbildung (Hishtalmut). Mehr dazu:",
      p3Link: "Lehrkräfte",
      p4: "Teilnehmende melden sich über das Anmeldeformular an; die Mitgliedschaft ist kostenlos und optional.",
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
      subject: "Ulpan vor Ort — Gruppenanfrage",
    },
    lehrer: {
      title: "Lehrkräfte — Ulpan Ivrit",
      desc: "Fortbildung (Hishtalmut), Materialien und Methodik der Hebräischen Universität Jerusalem.",
      h1: "Lehrkräfte",
      p1: "In Projekten mit Gemeinden, Vereinen und Communities suchen wir nach Möglichkeit Lehrkräfte und beteiligen uns an der Finanzierung. Den Unterrichtenden stellen wir Materialien und Fortbildung zur Verfügung.",
      hishtalmut: "Hishtalmut — Fortbildung",
      hishtalmutText:
        "Hishtalmut (hebr. השתלמות) ist die berufliche Fortbildung der Lehrkräfte. Sie wird von aktiven Dozentinnen und Dozenten sowie Lehrkräften der Hebräischen Universität Jerusalem durchgeführt.",
      method: "Methodik und Materialien",
      methodText:
        "Der Unterricht folgt der Methodik der Hebräischen Universität Jerusalem. Schwerpunkt ist gesprochenes Hebräisch. Die Lehrwerke und Übungen werden den Gruppen gestellt und parallel in Moodle gespiegelt — Präsenz und Online arbeiten mit demselben Stoff.",
      jobs: "Offene Stellen",
      local: "Gruppe vor Ort",
    },
    stellen: {
      title: "Stellen — Ulpan Ivrit",
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
      title: "FAQ — Ulpan Ivrit",
      desc: "Mitgliedschaft, Zahlung, Termine, Berlin, Online und Hishtalmut.",
      h1: "Fragen",
      q1: "Muss ich Mitglied werden?",
      a1: "Nein. Die Mitgliedschaft ist kostenlos und freiwillig. Mitglieder zahlen 60 € statt 120 € im Monat.",
      q2: "Wie wird bezahlt?",
      a2: "Per SEPA-Lastschrift in 8 Monatsraten (Dez 2026–Jul 2027): 60 € bzw. 120 €. Gesamt 480 € bzw. 960 €.",
      q3: "Wie läuft ein Termin?",
      a3: "Mittwochs 18:30–20:30 Uhr, 2 × 45 Min. mit Pause, Schwerpunkt Sprechen, Materialien in Moodle.",
      q3Link: "Anmeldung",
      q4: "Gibt es einen Kurs in Berlin?",
      a4: "In Planung. Über das Formular kommen Sie kostenlos auf die Warteliste.",
      a4Link: "Anmeldeformular",
      q5: "Gibt es Online-Kurse?",
      a5: "In Vorbereitung. Schreiben Sie uns über das Kontaktformular.",
      q6: "Was, wenn ich einen Termin verpasse?",
      a6: "Die Inhalte stehen in Moodle bereit.",
      q7: "Was ist Hishtalmut?",
      a7: "Die Fortbildung der Lehrkräfte. Sie führen aktive Dozentinnen und Lehrkräfte der Hebräischen Universität Jerusalem durch. Materialien und Methodik kommen aus derselben Schule.",
      q8: "Wann startet ein Ulpan in meiner Stadt?",
      a8: "Sobald sich mindestens 15 Interessierte gemeldet haben – über die Warteliste oder als Gruppe über Ihre Gemeinde oder Organisation.",
    },
    kontakt: {
      title: "Kontakt — Ulpan Ivrit",
      desc: "Drei Wege: Lernende, Träger, Lehrkräfte — oder direkt an info@bifode.org.",
      h1: "Kontakt",
      intro: "Wählen Sie, wer Sie sind. Allgemeine Fragen gehen an",
      mail: "E-Mail",
      learnersTitle: "Lernende",
      learners: "Melden Sie sich über das Anmeldeformular an. Die Mitgliedschaft ist kostenlos und optional.",
      learnersLink: "Anmeldung",
      orgsTitle: "Gemeinde oder Verein",
      orgs: "Sie wollen eine Präsenzgruppe tragen. Materialien, Moodle und oft auch die Lehrkraft kommen vom Projekt.",
      orgsLink: "Gruppe aufbauen",
      teachersTitle: "Lehrkräfte",
      teachers: "Offene Einsätze in Community-Projekten. Hishtalmut und Materialien stellt das Projekt.",
      teachersLink: "Offene Stellen",
    },
    verein: {
      title: "Verein — Ulpan Ivrit",
      desc: "BiFoDe e.V. führt Ulpan Ivrit in Deutschland durch. Mitgliedschaft kostenlos; Kurs 60 € / 120 € pro Monat.",
      h1: "Durchführung durch BiFoDe e.V.",
      p1: "Das Programm kommt von der Zionistischen Weltorganisation, Ofek Israeli, der Sochnut und Keren Hayesod. Träger in Deutschland ist Bildungsforum für Demokratie und Vielfalt NRW e.V. Die Mitgliedschaft ist kostenlos und optional.",
      fees: "Mitgliedschaft kostenlos. Kurs: 60 €/Monat für Mitglieder, 120 €/Monat ohne Mitgliedschaft (SEPA, 8 Raten, gesamt 480 € bzw. 960 €).",
      talks: "Mitglieder erhalten Vorträge und Ankündigungen — online und vor Ort, je nach Programm.",
      partner: "Partner",
      project: "Projektseite",
    },
    partner: {
      title: "Partner — Ulpan Ivrit",
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
      noCookies: "Keine Tracking-Cookies",
      vereinImpressum: "Impressum des Vereins auf bifode.org",
      vereinDatenschutz: "Datenschutz des Vereins auf bifode.org",
    },
    session: { weekly: "einmal wöchentlich", spoken: "gesprochenes Hebräisch" },
    courses: {
      "hebrew-level-0": {
        title: "Hebrew Level 0",
        level: "Pre-A1 / Absolute Beginners",
        format: "Online — Lektionen, Hören, Lesen, Quizzes, H5P, Aufgaben",
        entry: "Keine Vorkenntnisse nötig",
        body: "<p>Hebrew-A0 ist der Einstiegskurs für Lernende ohne Hebräischkenntnisse. Er bereitet auf Hebrew Level 1 vor: Alphabet, Aussprache, Grundwortschatz und Unterrichtskommunikation.</p><p>Am Ende des Kurses können Teilnehmende Kernbuchstaben erkennen und aussprechen, kurze Anfängerwörter lesen, sich einfach vorstellen und in Level 1 weitermachen.</p>",
      },
      "hebrew-level-1": {
        title: "Hebrew Level 1",
        level: "A1",
        format: "Online — Lektionen, Hören, Lesen, Quizzes, Aufgaben",
        entry: "Alphabet, Grundaussprache und Einstiegsvokabular — oder Abschluss Level 0",
        body: "<p>Hebrew Level 1 ist der Anfängerkurs für Lernende, die das Alphabet und grundlegendes Pre-Ulpan-Vokabular bereits kennen oder Level 0 abgeschlossen haben.</p><p>Der Kurs baut alltagsnahes Hebräisch auf: Lesen, Hören, Sprechen, Schreiben, Grammatik und geführte Moodle-Aktivitäten.</p>",
      },
    },
    jobs: {
      "ivrit-duesseldorf-anfaenger": {
        title: "Lehrkraft Ivrit — Raum Düsseldorf",
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
        "Запись в ульпан: иврит A1 для начинающих. 60 академических часов, упор на разговорный иврит. С бесплатным членством BiFoDe — 60 €/месяц.",
      ogImageAlt:
        "Запись в ульпан — иврит A1 для начинающих, 60 часов, 60 €/месяц с бесплатным членством BiFoDe",
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
      privacyBefore: "Я ознакомился/ознакомилась с",
      privacyLink: "политикой конфиденциальности",
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
      interest: "Сообщить об интересе",
    },
    quote: {
      translation:
        "Только на иврите Израиль будет жить в своей стране.",
      source: "Элиэзер Бен-Йехуда",
      open: "«",
      close: "»",
      pause: "Остановить анимацию",
      play: "Включить анимацию",
    },
    home: {
      title: "Учить иврит в Дюссельдорфе – Ulpan Ivrit A1 с 18.11.2026",
      description:
        "Курс иврита A1 в Еврейской общине Дюссельдорфа, по средам в 18:30. С бесплатным членством — 60 €/месяц.",
      h1: "Учить <strong>иврит</strong> совсем <strong>просто</strong>!",
      lead:
        "Очно и онлайн — методика Еврейского университета в Иерусалиме, разговорный иврит, материалы в Moodle.",
      nextEyebrow: "Ближайший курс",
      nextTitle: "Иврит (A1) для начинающих",
      nextWhen: "С среды, 18.11.2026 · по средам 18:30–20:30",
      nextWhere: "Еврейская община Дюссельдорфа, Paul-Spiegel-Platz 1",
      nextMeta: "30 занятий · 60 уроков · до июля 2027",
      nextPrice:
        "С бесплатным членством: <strong>60&nbsp;€/месяц</strong> вместо <strong>120&nbsp;€</strong>",
      nextCta: "Записаться",
      f1: "Очно и онлайн",
      f3: "В сотрудничестве с Еврейским университетом в Иерусалиме",
      f5: "Бесплатное членство – скидка 50&nbsp;%: <strong>60&nbsp;€</strong> вместо <strong>120&nbsp;€</strong> в месяц",
      ctaPitch:
        "Оформите сейчас <span class=\"home-perk\">бесплатное членство + скидку 50&nbsp;%</span>.<br />Запись займёт несколько минут.",
      ctaQuestions: "Вопросы?",
      ctaContact: "напишите нам",
      onlineTitle: "Онлайн",
      onlineBadge: "Скоро",
      onlineText: "Онлайн-группы в подготовке.",
      onlineCta: "Сообщить об интересе",
      localTitle: "Очно – в Дюссельдорфе",
      localText:
        "По средам 2 × 45 мин., упор на речь, материалы в Moodle. Берлин: лист ожидания.",
      localLink: "Запись",
      firstH2: "Дюссельдорф — первый ульпан, скоро будут и другие",
      firstText:
        "18 ноября 2026 года в Дюссельдорфе открывается первый Ульпан Иврит. Следующие ульпаны мы планируем в крупнейших еврейских общинах Германии:",
      firstStartBadge: "старт 18.11.2026",
      firstPlannedBadge: "в планах",
      firstCities: [
        "Дюссельдорф",
        "Ахен",
        "Берлин",
        "Билефельд",
        "Бохум",
        "Бонн",
        "Дортмунд",
        "Дрезден",
        "Дуйсбург",
        "Эссен",
        "Франкфурт-на-Майне",
        "Гельзенкирхен",
        "Гамбург",
        "Ганновер",
        "Кёльн",
        "Лейпциг",
        "Мюнхен",
        "Нюрнберг",
        "Штутгарт",
        "Вупперталь",
      ],
      firstWaitlistCta: "В лист ожидания",
      firstWaitlistNote:
        "Бесплатно и без обязательств: мы сообщим, когда начнётся курс в вашем городе.",
      firstGroupCta: "Сообщить о группе",
      firstGroupNote:
        "У вас есть группа от 15 желающих? Тогда ульпан может скоро открыться и у вас – свяжитесь с нами.",
      firstBoxTitle: "От 15 человек мы открываем новую группу.",
      firstBoxText:
        "Община, союз или круг друзей – напишите нам, и вместе подберём преподавателя, время и место.",
      firstBoxCta: "Связаться",
    },
    soGehts: {
      title: "Запись — Ulpan Ivrit",
      desc: "Иврит A1 в Дюссельдорфе с 18.11.2026: запись в 3 шага. С бесплатным членством — 60 €/месяц.",
      h1: "Запись в 3 шага",
      intro:
        "Иврит A1 в Еврейской общине Дюссельдорфа. Заполните форму — курс, тариф и SEPA в одном шаге.",
      step1: "Заполнить форму",
      step1Text:
        "Курс, тариф и SEPA-списание в одной форме. Членство в BiFoDe e.V. бесплатное и необязательное.",
      step2: "Подтверждение по e-mail",
      step2Text:
        "Вы получите подтверждение с данными курса, референсом мандата и доступом в Moodle (ulpan.bifode.org).",
      step3: "Первое занятие",
      step3Text: "Среда, 18.11.2026, 18:30 — Еврейская община Дюссельдорфа, Paul-Spiegel-Platz 1.",
      tariffTitle: "Тарифы",
      tariffRecommended: "Рекомендуем",
      tariffMemberTitle: "С бесплатным членством",
      tariffMemberItems: [
        "8 € / урок (45 мин.)",
        "60 € / месяц",
        "всего 480 €",
      ],
      tariffNonTitle: "Без членства",
      tariffNonItems: [
        "16 € / урок (45 мин.)",
        "120 € / месяц",
        "всего 960 €",
      ],
      tariffNote: "45 мин. · 8 платежей дек 2026–июль 2027 · SEPA-списание",
      datesTitle: "Даты занятий",
      datesSummary:
        "30 занятий по 90 мин. (2 × 45 мин.) = 60 уроков · по средам 18:30–20:30 · до 07.07.2027",
      datesFreeLabel: "Без занятий",
      formTitle: "Запись",
      noCourse: "Нет курса в вашем городе?",
      noCourseLink: "Напишите нам",
      cityFaqQ: "Когда ульпан откроется в моём городе?",
      cityFaqA:
        "Как только наберётся не меньше 15 желающих – через лист ожидания или как группа через вашу общину или организацию.",
    },
    kurse: {
      title: "Онлайн — Ulpan Ivrit",
      desc: "Онлайн-курсы Ulpan Ivrit в подготовке. Уровни 0 и 1 — те же материалы, что на очных занятиях.",
      h1: "Онлайн — индивидуально в Moodle",
      notice:
        "Онлайн-курсы в подготовке. Участники очного курса получают доступ в Moodle.",
      intro:
        "Дистанционное обучение идёт в Moodle. Материалы те же, что на очных занятиях — программа группы зеркалится в Moodle. Методика Еврейского университета в Иерусалиме, акцент на разговорный иврит.",
      localLink: "Очный курс: на месте",
      entry: "Вход",
      back: "← Курсы",
      moodle: "В Moodle",
      moodleNote: " — доступ для участников очного курса.",
      interestCta: "Сообщить об интересе",
    },
    vorOrt: {
      title: "Очно — Ulpan Ivrit",
      desc: "Иврит A1 в Дюссельдорфе с 18.11.2026. Берлин: лист ожидания. Организаторы могут запросить новую группу.",
      h1: "Ульпан очно",
      currentTitle: "Текущий курс: Дюссельдорф",
      currentMeta:
        "Иврит A1 · с 18.11.2026 · по средам 18:30–20:30 · Еврейская община Дюссельдорфа, Paul-Spiegel-Platz 1 · 30 занятий · 60 уроков · до 07.07.2027",
      currentPrice:
        "С бесплатным членством: <strong>60&nbsp;€/месяц</strong> (всего 480&nbsp;€) · без: <strong>120&nbsp;€/месяц</strong> (всего 960&nbsp;€)",
      currentCta: "Записаться",
      p1: "Очные занятия идут через еврейские организации. Сейчас стартуем в Дюссельдорфе; Берлин в планах (лист ожидания).",
      p2: "Типичное занятие: по средам 18:30–20:30, 2 × 45 мин. с перерывом. Акцент: разговорный иврит. Материалы также в Moodle.",
      p3: "В community-проекте мы по возможности ищем преподавателя и участвуем в финансировании, даём материалы и повышение квалификации (Hishtalmut). Подробнее:",
      p3Link: "Преподаватели",
      p4: "Участники записываются через форму; членство бесплатное и необязательное.",
      p4Link: "Запись",
      formTitle: "Организаторам: собрать группу",
      formLead: "Новые группы стартуют от 15 участников.",
      formMail: "Для правления и контактных лиц. Сообщение уйдёт на",
      orgType: "Тип организации",
      gemeinde: "Община",
      verein: "Союз",
      community: "Community",
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
      p1: "В проектах с общинами, союзами и community мы по возможности ищем преподавателей и участвуем в финансировании. Преподающим даём материалы и повышение квалификации.",
      hishtalmut: "Hishtalmut — повышение квалификации",
      hishtalmutText:
        "Hishtalmut (ивр. השתלמות) — профессиональное повышение квалификации преподавателей. Его ведут действующие преподаватели Еврейского университета в Иерусалиме.",
      method: "Методика и материалы",
      methodText:
        "Занятия идут по методике Еврейского университета в Иерусалиме. Акцент — разговорный иврит. Учебники и упражнения выдаются группам и параллельно зеркалятся в Moodle — очно и онлайн один и тот же материал.",
      jobs: "Открытые вакансии",
      local: "Группа на месте",
    },
    stellen: {
      title: "Вакансии — Ulpan Ivrit",
      desc: "Открытые позиции преподавателей иврита в общинах и community.",
      h1: "Вакансии",
      intro:
        "Открытые задания для преподавателей в community-проектах. Материалы, Moodle и повышение квалификации (Hishtalmut) даёт проект. Финансирование преподавателя смотрим по площадке.",
      empty: "Сейчас открытых вакансий нет. Инициативно на",
      methodLink: "Преподаватели и методика",
      back: "← Вакансии",
      closed: "закрыто",
      apply: "Отправить отклик",
      applySubject: "Отклик",
    },
    faq: {
      title: "FAQ — Ulpan Ivrit",
      desc: "Членство, оплата, занятия, Берлин, онлайн и Hishtalmut.",
      h1: "Вопросы",
      q1: "Обязательно ли становиться членом?",
      a1: "Нет. Членство бесплатное и добровольное. Члены платят 60 € вместо 120 € в месяц.",
      q2: "Как оплачивать?",
      a2: "SEPA-списанием в 8 ежемесячных платежей (дек 2026–июль 2027): 60 € или 120 €. Всего 480 € или 960 €.",
      q3: "Как проходит занятие?",
      a3: "По средам 18:30–20:30, 2 × 45 мин. с перерывом, упор на речь, материалы в Moodle.",
      q3Link: "Запись",
      q4: "Есть ли курс в Берлине?",
      a4: "В планах. Через форму вы бесплатно попадёте в лист ожидания.",
      a4Link: "форму записи",
      q5: "Есть ли онлайн-курсы?",
      a5: "В подготовке. Напишите нам через контактную форму.",
      q6: "Что, если я пропущу занятие?",
      a6: "Материалы доступны в Moodle.",
      q7: "Что такое Hishtalmut?",
      a7: "Повышение квалификации преподавателей. Его ведут действующие преподаватели Еврейского университета в Иерусалиме. Материалы и методика — из той же школы.",
      q8: "Когда ульпан откроется в моём городе?",
      a8: "Как только наберётся не меньше 15 желающих – через лист ожидания или как группа через вашу общину или организацию.",
    },
    kontakt: {
      title: "Контакты — Ulpan Ivrit",
      desc: "Три пути: учащиеся, организаторы, преподаватели — или сразу на info@bifode.org.",
      h1: "Контакты",
      intro: "Выберите, кто вы. Общие вопросы — на",
      mail: "Эл. почта",
      learnersTitle: "Учащиеся",
      learners: "Запишитесь через форму. Членство бесплатное и необязательное.",
      learnersLink: "Запись",
      orgsTitle: "Община или союз",
      orgs: "Хотите вести очную группу. Материалы, Moodle и часто преподавателя даёт проект.",
      orgsLink: "Собрать группу",
      teachersTitle: "Преподаватели",
      teachers: "Открытые задания в community-проектах. Hishtalmut и материалы — от проекта.",
      teachersLink: "Открытые вакансии",
    },
    verein: {
      title: "Союз — Ulpan Ivrit",
      desc: "BiFoDe e.V. ведёт Ulpan Ivrit в Германии. Членство бесплатно; курс 60 € / 120 € в месяц.",
      h1: "Реализация — BiFoDe e.V.",
      p1: "Программа идёт от Всемирной сионистской организации, Ofek Israeli, Сохнута и Керен ха-Йесод. Оператор в Германии — Bildungsforum für Demokratie und Vielfalt NRW e.V. Членство бесплатное и необязательное.",
      fees: "Членство бесплатно. Курс: 60 €/месяц для членов, 120 €/месяц без членства (SEPA, 8 платежей, всего 480 € или 960 €).",
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
        "Методика занятий. Hishtalmut (повышение квалификации) преподавателей ведут действующие преподаватели университета.",
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
      noCookies: "Нет cookies для учёта",
      vereinImpressum: "Импрессум союза на bifode.org",
      vereinDatenschutz: "Защита данных союза на bifode.org",
    },
    session: { weekly: "раз в неделю", spoken: "разговорный иврит" },
    courses: {
      "hebrew-level-0": {
        title: "Иврит, уровень 0",
        level: "Pre-A1 / с нуля",
        format: "Онлайн — уроки, аудирование, чтение, тесты, H5P, задания",
        entry: "Предварительные знания не нужны",
        body: "<p>Hebrew-A0 — вступительный курс для тех, кто не знает иврита. Он готовит к уровню 1: алфавит, произношение, базовый словарь и язык аудитории.</p><p>К концу курса участники узнают и произносят основные буквы, читают короткие слова для начинающих, могут просто представиться и перейти на уровень 1.</p>",
      },
      "hebrew-level-1": {
        title: "Иврит, уровень 1",
        level: "A1",
        format: "Онлайн — уроки, аудирование, чтение, тесты, задания",
        entry: "Алфавит, базовая фонетика и входной словарь — или завершённый уровень 0",
        body: "<p>Уровень 1 — курс для начинающих, которые уже знают алфавит и базовый словарь допрограммного уровня или закончили уровень 0.</p><p>Курс формирует бытовой иврит: чтение, аудирование, речь, письмо, грамматика и задания в Moodle.</p>",
      },
    },
    jobs: {
      "ivrit-duesseldorf-anfaenger": {
        title: "Преподаватель иврита — район Дюссельдорфа",
        location: "Район Дюссельдорфа",
        format: "Предпочтительно очно, онлайн возможен",
        level: "Начинающие",
        body: "<p>Ищем преподавателя современного иврита в районе Дюссельдорфа. Группа стартует с нуля. Очные занятия предпочтительны; онлайн возможен, если очно нельзя.</p><p>Типичное занятие: два полных часа, раз в неделю, с перерывом. Акцент: разговорный иврит. Методика Еврейского университета в Иерусалиме. Материалы и их копию в Moodle предоставляет проект; Hishtalmut (повышение квалификации) ведут преподаватели университета.</p><p>Отклик с кратким профилем и указанием очной или онлайн-доступности — на адрес ниже.</p>",
      },
    },
  },
  en: {
    meta: {
      descDefault:
        "Register for Ulpan: Hebrew A1 for beginners. 60 lessons, focus on spoken Hebrew. With free BiFoDe membership: 60 €/month.",
      ogImageAlt:
        "Ulpan registration — Hebrew A1 beginners, 60 lessons, 60 €/month with free BiFoDe membership",
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
        "Hebrew A1 at the Jewish Community of Düsseldorf, Wednesdays 18:30. With free membership: 60 €/month.",
      h1: "Learning <strong>Hebrew</strong> is quite <strong>simple</strong>!",
      lead:
        "In person and online — Hebrew University of Jerusalem method, spoken Hebrew, materials in Moodle.",
      nextEyebrow: "Next course",
      nextTitle: "Hebrew (A1) beginners",
      nextWhen: "From Wednesday, 18 Nov 2026 · Wednesdays 18:30–20:30",
      nextWhere: "Jewish Community of Düsseldorf, Paul-Spiegel-Platz 1",
      nextMeta: "30 sessions · 60 lessons · until July 2027",
      nextPrice:
        "With free membership: <strong>60&nbsp;€/month</strong> instead of <strong>120&nbsp;€</strong>",
      nextCta: "Register now",
      f1: "In person & online",
      f3: "In cooperation with the Hebrew University of Jerusalem",
      f5: "Free membership – 50&nbsp;% off: <strong>60&nbsp;€</strong> instead of <strong>120&nbsp;€</strong> per month",
      ctaPitch:
        "Get your <span class=\"home-perk\">free membership + 50&nbsp;% discount</span> now.<br />Registration takes a few minutes.",
      ctaQuestions: "Questions?",
      ctaContact: "write to us",
      onlineTitle: "Online",
      onlineBadge: "Coming soon",
      onlineText: "Online groups are in preparation.",
      onlineCta: "Register interest",
      localTitle: "In person – in Düsseldorf",
      localText:
        "Wednesdays 2 × 45 min, focus on speaking, materials in Moodle. Berlin: waiting list.",
      localLink: "Registration",
      firstH2: "Düsseldorf is the first Ulpan – more are coming",
      firstText:
        "Our first Ulpan Ivrit opens in Düsseldorf on 18 November 2026. We are planning further Ulpanim in Germany's largest Jewish communities:",
      firstStartBadge: "starts 18.11.2026",
      firstPlannedBadge: "planned",
      firstCities: [
        "Düsseldorf",
        "Aachen",
        "Berlin",
        "Bielefeld",
        "Bochum",
        "Bonn",
        "Dortmund",
        "Dresden",
        "Duisburg",
        "Essen",
        "Frankfurt",
        "Gelsenkirchen",
        "Hamburg",
        "Hanover",
        "Cologne",
        "Leipzig",
        "Munich",
        "Nuremberg",
        "Stuttgart",
        "Wuppertal",
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
      firstBoxCta: "Get in touch",
    },
    soGehts: {
      title: "Registration — Ulpan Ivrit",
      desc: "Hebrew A1 in Düsseldorf from 18 Nov 2026: register in 3 steps. With free membership 60 €/month.",
      h1: "Registration in 3 steps",
      intro:
        "Hebrew A1 at the Jewish Community of Düsseldorf. Fill in the form — course, tariff and SEPA in one step.",
      step1: "Fill in the form",
      step1Text:
        "Course, tariff and SEPA direct debit in one form. Membership of BiFoDe e.V. is free and optional.",
      step2: "Confirmation by email",
      step2Text:
        "You receive confirmation with course details, mandate reference and Moodle access (ulpan.bifode.org).",
      step3: "First session",
      step3Text: "Wednesday, 18 Nov 2026, 18:30 — Jewish Community of Düsseldorf, Paul-Spiegel-Platz 1.",
      tariffTitle: "Tariffs",
      tariffRecommended: "Recommended",
      tariffMemberTitle: "With free membership",
      tariffMemberItems: [
        "8 € / lesson (45 min)",
        "60 € / month",
        "total 480 €",
      ],
      tariffNonTitle: "Without membership",
      tariffNonItems: [
        "16 € / lesson (45 min)",
        "120 € / month",
        "total 960 €",
      ],
      tariffNote: "45 min · 8 instalments Dec 2026–Jul 2027 · SEPA direct debit",
      datesTitle: "Course dates",
      datesSummary:
        "30 sessions of 90 min (2 × 45 min) = 60 lessons · Wednesdays 18:30–20:30 · until 7 Jul 2027",
      datesFreeLabel: "No class",
      formTitle: "Registration",
      noCourse: "No course in your city?",
      noCourseLink: "Write to us",
      cityFaqQ: "When does an Ulpan start in my city?",
      cityFaqA:
        "As soon as at least 15 interested people have signed up – via the waiting list or as a group through your community or organisation.",
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
      desc: "Hebrew A1 in Düsseldorf from 18 Nov 2026. Berlin: waiting list. Hosts can request a new group.",
      h1: "Ulpan in person",
      currentTitle: "Current course: Düsseldorf",
      currentMeta:
        "Hebrew A1 · from 18 Nov 2026 · Wednesdays 18:30–20:30 · Jewish Community of Düsseldorf, Paul-Spiegel-Platz 1 · 30 sessions · 60 lessons · until 7 Jul 2027",
      currentPrice:
        "With free membership: <strong>60&nbsp;€/month</strong> (total 480&nbsp;€) · without: <strong>120&nbsp;€/month</strong> (total 960&nbsp;€)",
      currentCta: "Register now",
      p1: "In-person teaching runs through Jewish organisations. We are starting in Düsseldorf; Berlin is planned (waiting list).",
      p2: "A typical session: Wednesdays 18:30–20:30, 2 × 45 min with a break. Focus: spoken Hebrew. Materials are also in Moodle.",
      p3: "In the community project we look for a teacher where possible and help with funding, materials and training (Hishtalmut). More:",
      p3Link: "Teachers",
      p4: "Participants register via the enrolment form; membership is free and optional.",
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
      desc: "Membership, payment, sessions, Berlin, online and Hishtalmut.",
      h1: "Questions",
      q1: "Do I have to become a member?",
      a1: "No. Membership is free and voluntary. Members pay 60 € instead of 120 € per month.",
      q2: "How do I pay?",
      a2: "By SEPA direct debit in 8 monthly instalments (Dec 2026–Jul 2027): 60 € or 120 €. Total 480 € or 960 €.",
      q3: "What does a session look like?",
      a3: "Wednesdays 18:30–20:30, 2 × 45 min with a break, focus on speaking, materials in Moodle.",
      q3Link: "Registration",
      q4: "Is there a course in Berlin?",
      a4: "In planning. Via the form you join the waiting list for free.",
      a4Link: "registration form",
      q5: "Are there online courses?",
      a5: "In preparation. Write to us via the contact form.",
      q6: "What if I miss a session?",
      a6: "The materials are available in Moodle.",
      q7: "What is Hishtalmut?",
      a7: "Teacher training. It is run by active lecturers and teachers of the Hebrew University of Jerusalem. Materials and method come from the same school.",
      q8: "When does an Ulpan start in my city?",
      a8: "As soon as at least 15 interested people have signed up – via the waiting list or as a group through your community or organisation.",
    },
    kontakt: {
      title: "Contact — Ulpan Ivrit",
      desc: "Three paths: learners, hosts, teachers — or write to info@bifode.org.",
      h1: "Contact",
      intro: "Choose who you are. General questions go to",
      mail: "Email",
      learnersTitle: "Learners",
      learners: "Register via the enrolment form. Membership is free and optional.",
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
      desc: "BiFoDe e.V. delivers Ulpan Ivrit in Germany. Membership free; course 60 € / 120 € per month.",
      h1: "Delivered by BiFoDe e.V.",
      p1: "The programme comes from the World Zionist Organization, Ofek Israeli, the Jewish Agency and Keren Hayesod. The host in Germany is Bildungsforum für Demokratie und Vielfalt NRW e.V. Membership is free and optional.",
      fees: "Membership free. Course: 60 €/month for members, 120 €/month without membership (SEPA, 8 instalments, total 480 € or 960 €).",
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
