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
    gemeinde: string;
    online: string;
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
    h1: string;
    lead: string;
    f1: string;
    f2: string;
    f3: string;
    f4: string;
    f5: string;
    ctaRegister: string;
    howItWorks: string;
    ctaPitch: string;
    ctaQuestions: string;
    ctaContact: string;
    onlineTitle: string;
    onlineText: string;
    onlinePrice: string;
    onlineLink: string;
    localTitle: string;
    localText: string;
    localPrice: string;
    localLink: string;
    localGemeindeQ: string;
    localContact: string;
  };
  soGehts: {
    title: string;
    desc: string;
    h1: string;
    intro: string;
    step1: string;
    step1Text: string;
    step1BenefitsTitle: string;
    step1Benefits: string[];
    step1Fee: string;
    step1Cta: string;
    step2: string;
    step2Text: string;
    formatTitle: string;
    formatText: string;
    locationsTitle: string;
    locationsText: string;
    citiesTitle: string;
    cities: string[];
    step2Fee: string;
    step2Cta: string;
    step3: string;
    step3Intro: string;
    step3Items: string[];
    paymentTitle: string;
    paymentItems: string[];
    step3Note: string;
    formTitle: string;
  };
  kurse: {
    title: string;
    desc: string;
    h1: string;
    intro: string;
    localLink: string;
    entry: string;
    back: string;
    moodle: string;
    moodleNote: string;
  };
  vorOrt: {
    title: string;
    desc: string;
    h1: string;
    p1: string;
    p2: string;
    p3: string;
    p3Link: string;
    p4: string;
    p4Link: string;
    formTitle: string;
    formMail: string;
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
        "Anmeldung zum Ulpan: Hebräisch A1 für Anfänger. 60 Unterrichtsstunden, Fokus auf gesprochenes Hebräisch. Mit kostenloser BiFoDe-Mitgliedschaft 60 €/Monat.",
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
      gemeinde: "Gemeinde",
      online: "Online",
      vorOrt: "Vor Ort",
      lehrkraefte: "Lehrkräfte",
      methodik: "Methodik & Fortbildung",
      stellen: "Stellen",
      verein: "Verein",
      aboutVerein: "Über den Verein",
      partner: "Partner",
      faq: "FAQ",
      kontakt: "Kontakt",
      member: "Mitglied werden",
      start: "Anmeldung",
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
      title: "Ulpan Ivrit — Hebräisch lernen ist ganz einfach",
      h1: "<strong>Hebräisch</strong> lernen ist ganz <strong>einfach</strong>!",
      lead:
        "Präsenz und Online — Methodik der Hebräischen Universität Jerusalem, gesprochenes Hebräisch, Materialien in Moodle.",
      f1: "Präsenz & Online",
      f2: "Über 400 Ulpanim weltweit",
      f3: "In Zusammenarbeit mit der Hebräischen Universität Jerusalem",
      f4: "Typische Sitzung vor Ort: 2 volle Stunden, einmal wöchentlich, mit Pause",
      f5: "Kostenlose Mitgliedschaft – 50% Rabatt auf Kurse (<strong>8&nbsp;€/Std</strong> statt <strong>16&nbsp;€/Std</strong>)",
      ctaRegister: "Anmelden",
      howItWorks: "So nehmen Sie teil",
      ctaPitch:
        "Hol dir jetzt deine <span class=\"home-perk\">kostenlose Mitgliedschaft + 50% Rabatt</span>!<br />In 3 Minuten registriert.",
      ctaQuestions: "Fragen?",
      ctaContact: "schreiben Sie uns",
      onlineTitle: "Online — individuell",
      onlineText:
        "Moodle-Unterricht mit deiner Gruppe. Flexibel, nach deinem Hebräisch-Niveau und Zeitplan.",
      onlinePrice:
        "Preis: <strong>8&nbsp;€/Std</strong> (mit Mitgliedschaft) oder <strong>16&nbsp;€/Std</strong> (ohne)",
      onlineLink: "Zu den Online-Kursen",
      localTitle: "Vor Ort — in der Community",
      localText:
        "Präsenzkurse in Düsseldorf und Berlin. 1× pro Woche, 2 Stunden (60 Stunden pro Jahr).",
      localPrice:
        "Preis: <strong>8&nbsp;€/Std</strong> (mit Mitgliedschaft) oder <strong>16&nbsp;€/Std</strong> (ohne)",
      localLink: "Anmeldung",
      localGemeindeQ: "Fragen zur Gemeinde?",
      localContact: "schreiben Sie uns",
    },
    soGehts: {
      title: "So funktioniert Ulpan Ivrit — Ulpan Ivrit",
      desc: "Kostenlose Mitgliedschaft bei BiFoDe e.V., Kurs buchen und per SEPA zahlen. 8 €/Std. für Mitglieder, 16 €/Std. für Nichtmitglieder.",
      h1: "So funktioniert Ulpan Ivrit — 3 einfache Schritte",
      intro:
        "Ulpan Ivrit ist einfach: Kostenlose Mitgliedschaft bei BiFoDe e.V., dann Kurs buchen und bezahlen. Wir teilen Sie in Gruppen nach Hebräisch-Niveau und Wohnort ein. Online oder Präsenzunterricht je nach Standort.",
      step1: "Kostenlos Mitglied werden",
      step1Text:
        "Registrieren Sie sich als Mitglied von BiFoDe e.V. Die Mitgliedschaft ist kostenlos und Sie erhalten automatisch 50 % Rabatt auf alle unsere Hebräischkurse.",
      step1BenefitsTitle: "Mitglieder erhalten:",
      step1Benefits: [
        "Zugang zu Moodle (ulpan.bifode.org)",
        "Hebräische Materialien im Unterricht",
        "Vorträge, Veranstaltungen und Termine",
        "50 % Rabatt: nur 8 € pro Stunde (statt 16 €)",
      ],
      step1Fee: "Mitgliedschaft: kostenlos. Kurs mit Rabatt: 8 €/Stunde (60 Std./Jahr = 480 €).",
      step1Cta: "Mitglied werden & Anmelden",
      step2: "Gruppe wählen und Kurs buchen",
      step2Text:
        "Nach Ihrer Anmeldung teilen wir Sie je nach Hebräisch-Niveau und Wohnort in eine Gruppe ein. Der Unterricht findet 1× wöchentlich statt — 2 Stunden pro Woche für 60 Stunden im Jahr.",
      formatTitle: "Online oder Präsenz",
      formatText:
        "Je nach Gruppe: Moodle-Unterricht, Zoom oder Präsenz mit pauschaler Gebühr.",
      locationsTitle: "Standorte",
      locationsText: "Präsenzgruppen in Düsseldorf und Berlin. Online-Gruppen bundesweit.",
      citiesTitle: "Präsenz:",
      cities: ["Düsseldorf", "Berlin"],
      step2Fee: "Mitglieder: 8 €/Stunde (480 €/Jahr). Nichtmitglieder: 16 €/Stunde (960 €/Jahr).",
      step2Cta: "Jetzt anmelden",
      step3: "Zahlung per SEPA-Lastschrift",
      step3Intro: "Nach Ihrer Anmeldung erhalten Sie:",
      step3Items: [
        "SEPA-Lastschrift-Mandat (unterschreiben)",
        "Rechnung mit Zahlungsdetails",
        "Zahlungsanleitung",
      ],
      paymentTitle: "Zahlungsweise:",
      paymentItems: [
        "Automatische Abbuchung am 1. eines jeden Monats",
        "Mitglieder: 40 €/Monat (8 € × 5 Stunden)",
        "Nichtmitglieder: 80 €/Monat (16 € × 5 Stunden)",
        "Dauer: 12 Monate (Vollkurs)",
      ],
      step3Note:
        "Wichtig: Der Kurs kann nur vollständig gebucht werden (mindestens 12 Monate). Kündigungen nur am Ende des Jahres.",
      formTitle: "Anmeldung",
    },
    kurse: {
      title: "Online — Ulpan Ivrit",
      desc: "Online-Kurse über Moodle: Level 0 und Level 1, nach Aufnahme als Mitglied.",
      h1: "Online — individuell über Moodle",
      intro:
        "Der Fernunterricht läuft auf Moodle. Nach der Aufnahme in den Verein lernen Teilnehmende einzeln. Die Materialien sind dieselben wie im Präsenzunterricht — der Stoff der Gruppe wird in Moodle gespiegelt. Methodik der Hebräischen Universität Jerusalem, Schwerpunkt gesprochenes Hebräisch.",
      localLink: "Präsenzgruppen: Vor Ort",
      entry: "Einstieg",
      back: "← Kurse",
      moodle: "Zum Moodle",
      moodleNote: " — Zugang nach Aufnahme als Mitglied.",
    },
    vorOrt: {
      title: "Vor Ort — Ulpan Ivrit",
      desc: "Präsenzgruppen von Ulpan Ivrit an Gemeinde, Verein oder Community.",
      h1: "Ulpan vor Ort",
      p1: "Der Präsenzunterricht läuft über jüdische Organisationen. Auf Basis einer Gemeinde, eines Vereins oder einer Community entsteht eine lokale Gruppe.",
      p2: "Typische Sitzung: 2 volle Stunden, einmal wöchentlich, mit Pause. Schwerpunkt: gesprochenes Hebräisch. Materialien liegen auch in Moodle, derselbe Stoff wie im Raum.",
      p3: "Im Community-Projekt suchen wir nach Möglichkeit die Lehrkraft und beteiligen uns an der Finanzierung, stellen Materialien und Fortbildung (Hishtalmut). Mehr dazu:",
      p3Link: "Lehrkräfte",
      p4: "Teilnehmende treten in BiFoDe e.V. ein. Wie die Anmeldung läuft und was gilt, wenn es in Ihrer Stadt noch keinen Ulpan gibt:",
      p4Link: "Anmeldung",
      formTitle: "Träger: Gruppe aufbauen",
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
      desc: "Mitgliedschaft, Online, Vor Ort, Gemeinde, Hishtalmut und Beitrag.",
      h1: "Fragen",
      q1: "Kann ich nur einen Kurs kaufen?",
      a1: "Nein. Die Mitgliedschaft bei BiFoDe e.V. ist kostenlos. Danach buchen Sie den Kurs: 8 €/Std. als Mitglied, 16 €/Std. ohne Mitgliedschaft (SEPA).",
      q2: "Wie lerne ich online?",
      a2: "Individuell über Moodle (ulpan.bifode.org), nach der Aufnahme in den Verein.",
      q3: "Was, wenn es in meiner Stadt keinen Ulpan gibt?",
      a3: "Prüfen Sie Online-Gruppen oder schreiben Sie uns — neue Standorte entstehen mit Interesse vor Ort.",
      q3Link: "Vor Ort",
      q4: "Wie entsteht eine Gruppe vor Ort?",
      a4: "Über jüdische Organisationen — Gemeinde, Verein oder Community. Die Organisation schreibt uns über das",
      a4Link: "Kontaktformular",
      q5: "Wie läuft eine Stunde vor Ort?",
      a5: "Zwei volle Stunden, einmal wöchentlich, mit Pause. Schwerpunkt: gesprochenes Hebräisch. Materialien gibt es parallel in Moodle.",
      q6: "Was ist Hishtalmut?",
      a6: "Die Fortbildung der Lehrkräfte. Sie führen aktive Dozentinnen und Lehrkräfte der Hebräischen Universität Jerusalem durch. Materialien und Methodik kommen aus derselben Schule.",
      q7: "Wie wird bezahlt?",
      a7: "Per SEPA-Lastschrift monatlich: Mitglieder 40 €, Nichtmitglieder 80 €. Vollkurs 12 Monate (60 Std./Jahr).",
    },
    kontakt: {
      title: "Kontakt — Ulpan Ivrit",
      desc: "Drei Wege: Lernende, Träger, Lehrkräfte — oder direkt an info@bifode.org.",
      h1: "Kontakt",
      intro: "Wählen Sie, wer Sie sind. Allgemeine Fragen gehen an",
      mail: "E-Mail",
      learnersTitle: "Lernende",
      learners: "Kostenlos Mitglied werden, dann Kurs buchen (Online oder Vor Ort). Fragen? Schreiben Sie uns.",
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
      desc: "BiFoDe e.V. führt Ulpan Ivrit in Deutschland durch. Mitgliedschaft kostenlos; Kurs 8 € / 16 € pro Stunde.",
      h1: "Durchführung durch BiFoDe e.V.",
      p1: "Das Programm kommt von der Zionistischen Weltorganisation, Ofek Israeli, der Sochnut und Keren Hayesod. Träger in Deutschland ist Bildungsforum für Demokratie und Vielfalt NRW e.V. Die Mitgliedschaft ist kostenlos und öffnet den Zugang zum Kursangebot.",
      fees: "Mitgliedschaft kostenlos. Kurs: 8 €/Std. für Mitglieder, 16 €/Std. für Nichtmitglieder (SEPA, 60 Std./Jahr).",
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
      anmelden: "Запись на занятия",
      gemeinde: "Община",
      online: "Онлайн обучение",
      vorOrt: "Очные занятия",
      lehrkraefte: "Преподаватели",
      methodik: "Повышение квалификации",
      stellen: "Вакансии",
      verein: "НКО",
      aboutVerein: "О нас",
      partner: "Партнёры",
      faq: "FAQ",
      kontakt: "Контакты",
      member: "Стать членом",
      start: "Запись",
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
      title: "Ulpan Ivrit — учить иврит просто",
      h1: "Учить <strong>иврит</strong> совсем <strong>просто</strong>!",
      lead:
        "Очно и онлайн — методика Еврейского университета в Иерусалиме, разговорный иврит, материалы в Moodle.",
      f1: "Очно и онлайн",
      f2: "Более 400 ульпанов по миру",
      f3: "В сотрудничестве с Еврейским университетом в Иерусалиме",
      f4: "Типичное занятие очно: 2 полных часа, раз в неделю, с перерывом",
      f5: "Бесплатное членство – скидка 50% на курсы (<strong>8&nbsp;€/час</strong> вместо <strong>16&nbsp;€/час</strong>)",
      ctaRegister: "Записаться",
      howItWorks: "Как участвовать",
      ctaPitch:
        "Оформите сейчас <span class=\"home-perk\">бесплатное членство + скидку 50%</span>!<br />Регистрация за 3 минуты.",
      ctaQuestions: "Вопросы?",
      ctaContact: "напишите нам",
      onlineTitle: "Онлайн — индивидуально",
      onlineText:
        "Занятия в Moodle с вашей группой. Гибко — по уровню иврита и вашему расписанию.",
      onlinePrice:
        "Цена: <strong>8&nbsp;€/час</strong> (с членством) или <strong>16&nbsp;€/час</strong> (без)",
      onlineLink: "К онлайн-курсам",
      localTitle: "Очно — в общине",
      localText:
        "Очные курсы в Дюссельдорфе и Берлине. 1× в неделю, 2 часа (60 часов в год).",
      localPrice:
        "Цена: <strong>8&nbsp;€/час</strong> (с членством) или <strong>16&nbsp;€/час</strong> (без)",
      localLink: "Запись",
      localGemeindeQ: "Вопросы по общине?",
      localContact: "напишите нам",
    },
    soGehts: {
      title: "Как устроен Ulpan Ivrit — Ulpan Ivrit",
      desc: "Бесплатное членство в BiFoDe e.V., запись на курс и оплата SEPA. 8 €/час для членов, 16 €/час для нечленов.",
      h1: "Как устроен Ulpan Ivrit — 3 простых шага",
      intro:
        "Ulpan Ivrit просто: бесплатное членство в BiFoDe e.V., затем запись на курс и оплата. Мы распределяем вас по группам по уровню иврита и месту жительства. Онлайн или очно — в зависимости от площадки.",
      step1: "Бесплатно стать членом",
      step1Text:
        "Зарегистрируйтесь как член BiFoDe e.V. Членство бесплатное, и вы автоматически получаете скидку 50 % на все наши курсы иврита.",
      step1BenefitsTitle: "Члены союза получают:",
      step1Benefits: [
        "Доступ в Moodle (ulpan.bifode.org)",
        "Материалы по ивриту на занятиях",
        "Лекции, мероприятия и даты",
        "Скидка 50 %: только 8 € в час (вместо 16 €)",
      ],
      step1Fee: "Членство: бесплатно. Курс со скидкой: 8 €/час (60 ч./год = 480 €).",
      step1Cta: "Стать членом и записаться",
      step2: "Выбрать группу и записаться на курс",
      step2Text:
        "После заявки мы распределяем вас по группе по уровню иврита и месту жительства. Занятия 1× в неделю — 2 часа в неделю, 60 часов в год.",
      formatTitle: "Онлайн или очно",
      formatText:
        "В зависимости от группы: Moodle, Zoom или очные занятия с фиксированной платой.",
      locationsTitle: "Площадки",
      locationsText: "Очные группы в Дюссельдорфе и Берлине. Онлайн-группы по всей Германии.",
      citiesTitle: "Очно:",
      cities: ["Дюссельдорф", "Берлин"],
      step2Fee: "Члены: 8 €/час (480 €/год). Нечлены: 16 €/час (960 €/год).",
      step2Cta: "Записаться сейчас",
      step3: "Оплата через SEPA-прямое дебетование",
      step3Intro: "После заявки вы получите:",
      step3Items: [
        "Мандат SEPA Lastschrift (подписать)",
        "Счёт с реквизитами",
        "Инструкцию по оплате",
      ],
      paymentTitle: "Как платить:",
      paymentItems: [
        "Автоматическое списание 1-го числа каждого месяца",
        "Члены: 40 €/месяц (8 € × 5 часов)",
        "Нечлены: 80 €/месяц (16 € × 5 часов)",
        "Срок: 12 месяцев (полный курс)",
      ],
      step3Note:
        "Важно: курс можно взять только целиком (не менее 12 месяцев). Отмена только в конце года.",
      formTitle: "Запись",
    },
    kurse: {
      title: "Онлайн — Ulpan Ivrit",
      desc: "Онлайн-курсы в Moodle: уровень 0 и уровень 1, после приёма в члены союза.",
      h1: "Онлайн — индивидуально в Moodle",
      intro:
        "Дистанционное обучение идёт в Moodle. После приёма в союз участники занимаются индивидуально. Материалы те же, что на очных занятиях — программа группы зеркалится в Moodle. Методика Еврейского университета в Иерусалиме, акцент на разговорный иврит.",
      localLink: "Очные группы: на месте",
      entry: "Вход",
      back: "← Курсы",
      moodle: "В Moodle",
      moodleNote: " — доступ после приёма в члены союза.",
    },
    vorOrt: {
      title: "Очно — Ulpan Ivrit",
      desc: "Очные группы Ulpan Ivrit при общине, союзе или community.",
      h1: "Ульпан очно",
      p1: "Очные занятия идут через еврейские организации. На базе общины, союза или community появляется местная группа.",
      p2: "Типичное занятие: 2 полных часа, раз в неделю, с перерывом. Акцент: разговорный иврит. Материалы также в Moodle — тот же материал, что в аудитории.",
      p3: "В community-проекте мы по возможности ищем преподавателя и участвуем в финансировании, даём материалы и повышение квалификации (Hishtalmut). Подробнее:",
      p3Link: "Преподаватели",
      p4: "Участники вступают в BiFoDe e.V. Как проходит запись и что делать, если в городе ульпана ещё нет:",
      p4Link: "Запись",
      formTitle: "Организаторам: собрать группу",
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
      desc: "Членство, онлайн, очно, община, Hishtalmut и взнос.",
      h1: "Вопросы",
      q1: "Можно купить только курс?",
      a1: "Нет. Членство в BiFoDe e.V. бесплатное. Затем вы записываетесь на курс: 8 €/час для членов, 16 €/час без членства (SEPA).",
      q2: "Как учиться онлайн?",
      a2: "Индивидуально в Moodle (ulpan.bifode.org) после приёма в союз.",
      q3: "Что, если в моём городе нет ульпана?",
      a3: "Смотрите онлайн-группы или напишите нам — новые площадки появляются там, где есть интерес.",
      q3Link: "Очно",
      q4: "Как появляется очная группа?",
      a4: "Через еврейские организации — общину, союз или community. Организация пишет нам через",
      a4Link: "форму",
      q5: "Как проходит очное занятие?",
      a5: "Два полных часа, раз в неделю, с перерывом. Акцент: разговорный иврит. Материалы параллельно в Moodle.",
      q6: "Что такое Hishtalmut?",
      a6: "Повышение квалификации преподавателей. Его ведут действующие преподаватели Еврейского университета в Иерусалиме. Материалы и методика — из той же школы.",
      q7: "Как оплачивать?",
      a7: "SEPA-списание раз в месяц: члены 40 €, нечлены 80 €. Полный курс 12 месяцев (60 ч./год).",
    },
    kontakt: {
      title: "Контакты — Ulpan Ivrit",
      desc: "Три пути: учащиеся, организаторы, преподаватели — или сразу на info@bifode.org.",
      h1: "Контакты",
      intro: "Выберите, кто вы. Общие вопросы — на",
      mail: "Эл. почта",
      learnersTitle: "Учащиеся",
      learners: "Бесплатно стать членом, затем записаться на курс (онлайн или очно). Вопросы? Напишите нам.",
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
      desc: "BiFoDe e.V. ведёт Ulpan Ivrit в Германии. Членство бесплатно; курс 8 € / 16 € в час.",
      h1: "Реализация — BiFoDe e.V.",
      p1: "Программа идёт от Всемирной сионистской организации, Ofek Israeli, Сохнута и Керен ха-Йесод. Оператор в Германии — Bildungsforum für Demokratie und Vielfalt NRW e.V. Членство бесплатное и открывает доступ к курсам.",
      fees: "Членство бесплатно. Курс: 8 €/час для членов, 16 €/час для нечленов (SEPA, 60 ч./год).",
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
      gemeinde: "Community",
      online: "Online",
      vorOrt: "In person",
      lehrkraefte: "Teachers",
      methodik: "Method & training",
      stellen: "Jobs",
      verein: "Association",
      aboutVerein: "About the association",
      partner: "Partners",
      faq: "FAQ",
      kontakt: "Contact",
      member: "Become a member",
      start: "Registration",
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
      title: "Ulpan Ivrit — Learning Hebrew is quite simple",
      h1: "Learning <strong>Hebrew</strong> is quite <strong>simple</strong>!",
      lead:
        "In person and online — Hebrew University of Jerusalem method, spoken Hebrew, materials in Moodle.",
      f1: "In person & online",
      f2: "Over 400 ulpanim worldwide",
      f3: "In cooperation with the Hebrew University of Jerusalem",
      f4: "A typical in-person session: 2 full hours, once a week, with a break",
      f5: "Free membership – 50% off courses (<strong>8&nbsp;€/h</strong> instead of <strong>16&nbsp;€/h</strong>)",
      ctaRegister: "Register",
      howItWorks: "How to take part",
      ctaPitch:
        "Get your <span class=\"home-perk\">free membership + 50% discount</span> now!<br />Registered in 3 minutes.",
      ctaQuestions: "Questions?",
      ctaContact: "write to us",
      onlineTitle: "Online — individual",
      onlineText:
        "Moodle classes with your group. Flexible, by your Hebrew level and schedule.",
      onlinePrice:
        "Price: <strong>8&nbsp;€/h</strong> (with membership) or <strong>16&nbsp;€/h</strong> (without)",
      onlineLink: "Online courses",
      localTitle: "In person — in the community",
      localText:
        "In-person courses in Düsseldorf and Berlin. Once a week, 2 hours (60 hours per year).",
      localPrice:
        "Price: <strong>8&nbsp;€/h</strong> (with membership) or <strong>16&nbsp;€/h</strong> (without)",
      localLink: "Registration",
      localGemeindeQ: "Questions about a congregation?",
      localContact: "write to us",
    },
    soGehts: {
      title: "How Ulpan Ivrit works — Ulpan Ivrit",
      desc: "Free membership of BiFoDe e.V., book a course and pay by SEPA. 8 €/h for members, 16 €/h for non-members.",
      h1: "How Ulpan Ivrit works — 3 simple steps",
      intro:
        "Ulpan Ivrit is simple: free membership of BiFoDe e.V., then book and pay for a course. We place you in groups by Hebrew level and place of residence. Online or in person depending on the location.",
      step1: "Become a member for free",
      step1Text:
        "Register as a member of BiFoDe e.V. Membership is free and you automatically receive 50% off all our Hebrew courses.",
      step1BenefitsTitle: "Members receive:",
      step1Benefits: [
        "Access to Moodle (ulpan.bifode.org)",
        "Hebrew materials in class",
        "Talks, events and dates",
        "50% discount: only 8 € per hour (instead of 16 €)",
      ],
      step1Fee: "Membership: free. Course with discount: 8 €/hour (60 h/year = 480 €).",
      step1Cta: "Become a member & register",
      step2: "Choose a group and book a course",
      step2Text:
        "After you register, we place you in a group by Hebrew level and place of residence. Classes are once a week — 2 hours per week for 60 hours a year.",
      formatTitle: "Online or in person",
      formatText:
        "Depending on the group: Moodle, Zoom or in-person teaching with a flat fee.",
      locationsTitle: "Locations",
      locationsText: "In-person groups in Düsseldorf and Berlin. Online groups nationwide.",
      citiesTitle: "In person:",
      cities: ["Düsseldorf", "Berlin"],
      step2Fee: "Members: 8 €/hour (480 €/year). Non-members: 16 €/hour (960 €/year).",
      step2Cta: "Register now",
      step3: "Payment by SEPA direct debit",
      step3Intro: "After you register you receive:",
      step3Items: [
        "SEPA direct-debit mandate (to sign)",
        "Invoice with payment details",
        "Payment instructions",
      ],
      paymentTitle: "How payment works:",
      paymentItems: [
        "Automatic debit on the 1st of each month",
        "Members: 40 €/month (8 € × 5 hours)",
        "Non-members: 80 €/month (16 € × 5 hours)",
        "Duration: 12 months (full course)",
      ],
      step3Note:
        "Important: the course can only be booked in full (at least 12 months). Cancellation only at the end of the year.",
      formTitle: "Registration",
    },
    kurse: {
      title: "Online — Ulpan Ivrit",
      desc: "Online courses on Moodle: Level 0 and Level 1, after admission as a member.",
      h1: "Online — individually on Moodle",
      intro:
        "Distance learning runs on Moodle. After admission to the association, participants study individually. The materials are the same as in the classroom — the group syllabus is mirrored in Moodle. Hebrew University of Jerusalem method, focus on spoken Hebrew.",
      localLink: "In-person groups: locally",
      entry: "Entry",
      back: "← Courses",
      moodle: "Go to Moodle",
      moodleNote: " — access after admission as a member.",
    },
    vorOrt: {
      title: "In person — Ulpan Ivrit",
      desc: "Ulpan Ivrit in-person groups at a congregation, association or community.",
      h1: "Ulpan in person",
      p1: "In-person teaching runs through Jewish organisations. A local group forms around a congregation, association or community.",
      p2: "A typical session: 2 full hours, once a week, with a break. Focus: spoken Hebrew. Materials are also in Moodle — the same syllabus as in the room.",
      p3: "In the community project we look for a teacher where possible and help with funding, materials and training (Hishtalmut). More:",
      p3Link: "Teachers",
      p4: "Participants join BiFoDe e.V. How registration works, and what applies if there is no ulpan in your city yet:",
      p4Link: "Registration",
      formTitle: "Hosts: start a group",
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
        "Hishtalmut (Heb. השתלמות) is the professional training of teachers. It is run by active lecturers and teachers of the Hebrew University of Jerusalem.",
      method: "Method and materials",
      methodText:
        "Teaching follows the Hebrew University of Jerusalem method. The focus is spoken Hebrew. Textbooks and exercises are provided to groups and mirrored in Moodle — in person and online use the same syllabus.",
      jobs: "Open positions",
      local: "Local group",
    },
    stellen: {
      title: "Jobs — Ulpan Ivrit",
      desc: "Open Ivrit teaching roles in congregations and communities.",
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
      desc: "Membership, online, in person, community, Hishtalmut and fees.",
      h1: "Questions",
      q1: "Can I buy a single course?",
      a1: "No. Membership of BiFoDe e.V. is free. Then you book the course: 8 €/h as a member, 16 €/h without membership (SEPA).",
      q2: "How do I learn online?",
      a2: "Individually on Moodle (ulpan.bifode.org), after admission to the association.",
      q3: "What if there is no ulpan in my city?",
      a3: "Check online groups or write to us — new locations grow where there is local interest.",
      q3Link: "In person",
      q4: "How does an in-person group start?",
      a4: "Through Jewish organisations — a congregation, association or community. The organisation writes to us via the",
      a4Link: "form",
      q5: "What does an in-person session look like?",
      a5: "Two full hours, once a week, with a break. Focus: spoken Hebrew. Materials are also in Moodle.",
      q6: "What is Hishtalmut?",
      a6: "Teacher training. It is run by active lecturers and teachers of the Hebrew University of Jerusalem. Materials and method come from the same school.",
      q7: "How do I pay?",
      a7: "By monthly SEPA direct debit: members 40 €, non-members 80 €. Full course 12 months (60 h/year).",
    },
    kontakt: {
      title: "Contact — Ulpan Ivrit",
      desc: "Three paths: learners, hosts, teachers — or write to info@bifode.org.",
      h1: "Contact",
      intro: "Choose who you are. General questions go to",
      mail: "Email",
      learnersTitle: "Learners",
      learners: "Become a member for free, then book a course (online or in person). Questions? Write to us.",
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
      desc: "BiFoDe e.V. delivers Ulpan Ivrit in Germany. Membership free; course 8 € / 16 € per hour.",
      h1: "Delivered by BiFoDe e.V.",
      p1: "The programme comes from the World Zionist Organization, Ofek Israeli, the Jewish Agency and Keren Hayesod. The host in Germany is Bildungsforum für Demokratie und Vielfalt NRW e.V. Membership is free and opens access to the course offer.",
      fees: "Membership free. Course: 8 €/h for members, 16 €/h for non-members (SEPA, 60 h/year).",
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
