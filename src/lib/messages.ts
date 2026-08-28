import { uiLocale, type UiLocale } from "./i18n";

export type Messages = {
  meta: {
    descDefault: string;
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
    noUlpan: string;
    onlineTitle: string;
    onlineText: string;
    onlineLink: string;
    localTitle: string;
    localText: string;
    localLink: string;
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
    step2: string;
    onlineTitle: string;
    onlineText: string;
    onlineLink: string;
    localTitle: string;
    localText: string;
    citiesTitle: string;
    cities: string[];
    localMail: string;
    wishTitle: string;
    wishText: string;
    step3: string;
    step3Text: string;
    step3Link: string;
    formTitle: string;
    formLead: string;
    formMail: string;
    name: string;
    email: string;
    org: string;
    orgPh: string;
    city: string;
    cityPh: string;
    level: string;
    levelBeginner: string;
    levelSome: string;
    levelUnknown: string;
    onlineUntil: string;
    onlineYes: string;
    onlineNo: string;
    message: string;
    messagePh: string;
    submit: string;
    subject: string;
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
        "Hebräisch lernen vor Ort und online — Ulpan Ivrit, BiFoDe e.V.",
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
      f5: "Mitgliedschaft 180 € / Jahr, ermäßigt 144 € — kein Einzelkauf eines Kurses",
      ctaRegister: "Anmelden",
      howItWorks: "So nehmen Sie teil",
      noUlpan: "Kein Ulpan in Ihrer Stadt? Wenn in der Gemeinde Interesse besteht — schreiben Sie uns.",
      onlineTitle: "Online — individuell",
      onlineText: "Moodle, aus jedem Ort. Stoff der Gruppe liegt parallel dort.",
      onlineLink: "Zu den Online-Kursen",
      localTitle: "Vor Ort — in der Community",
      localText: "Gruppen an Gemeinde, Verein oder Community. Zwei Stunden pro Woche.",
      localLink: "Anmeldung — und Interesse in der Gemeinde",
    },
    soGehts: {
      title: "Anmeldung — Ulpan Ivrit",
      desc: "Teilnahme über Mitgliedschaft bei BiFoDe e.V.: Moodle, Präsenz wo eine Gruppe besteht, Vorträge. Interesse in der Gemeinde? Schreiben Sie uns.",
      h1: "Anmeldung",
      intro:
        "Die Teilnahme am Ulpan läuft über die Mitgliedschaft bei BiFoDe e.V. Einen einzelnen Kurs kaufen Sie nicht. Nach Prüfung und Aufnahme nutzen Sie die Angebote des Vereins: Online, Präsenz wo eine Gruppe besteht, Vorträge und Termine.",
      step1: "Mitglied werden",
      step1Text:
        "Den Antrag stellen Sie auf bifode.org. Der Verein prüft die Aufnahme. Danach erhalten Sie den Zugang — nicht als Käufer eines Kurses, sondern als Mitglied.",
      step1BenefitsTitle: "Mitglieder erhalten:",
      step1Benefits: [
        "Zugang zu Moodle (ulpan.bifode.org) — dieselben Materialien wie im Unterricht",
        "Präsenzunterricht, wo bereits eine Gruppe läuft",
        "Vorträge und Termine, online und vor Ort, je nach Programm",
        "Ankündigungen zum Kursbetrieb",
      ],
      step1Fee: "Beitrag: 180 € / Jahr, Studierende und Ermäßigte 144 € / Jahr.",
      step2: "Format nach der Aufnahme",
      onlineTitle: "Online — überall",
      onlineText:
        "Moodle individuell, dieselben Materialien wie im Unterricht. Passt, wenn Sie nicht vor Ort lernen können oder wollen.",
      onlineLink: "Online-Kurse",
      localTitle: "Vor Ort — wenn es eine Gruppe gibt",
      localText:
        "2 volle Stunden, einmal wöchentlich, mit Pause. Schwerpunkt: gesprochenes Hebräisch. Stoff liegt parallel in Moodle.",
      citiesTitle: "Städte mit einer Präsenzgruppe:",
      cities: ["Düsseldorf", "Berlin"],
      localMail: "Noch keine Gruppe in Ihrer Gemeinde? Schreiben Sie uns im nächsten Schritt.",
      wishTitle: "Interesse in der Gemeinde",
      wishText:
        "Wenn in Ihrer Gemeinde, Ihrem Verein oder Ihrer Community Interesse an einer Ulpan-Gruppe besteht, schreiben Sie uns. Das gilt für Lernende und für Träger, die eine Gruppe vor Ort aufbauen wollen.",
      step3: "Interesse in der Gemeinde?",
      step3Text: "Ausführliches Formular für Träger, die selbst eine Gruppe tragen wollen:",
      step3Link: "Seite Vor Ort",
      formTitle: "Anfrage per E-Mail",
      formLead: "Das Formular öffnet eine E-Mail an uns. Es ersetzt nicht den Mitgliedsantrag.",
      formMail: "Die Nachricht geht an",
      name: "Name",
      email: "E-Mail",
      org: "Gemeinde / Organisation",
      orgPh: "optional",
      city: "Stadt / Gemeinde",
      cityPh: "z. B. Essen…",
      level: "Niveau",
      levelBeginner: "Anfänger",
      levelSome: "mit Vorkenntnissen",
      levelUnknown: "weiß ich noch nicht",
      onlineUntil: "Bis eine Gruppe da ist: Online möglich?",
      onlineYes: "Ja, ich starte online",
      onlineNo: "Nein, nur vor Ort",
      message: "Nachricht",
      messagePh: "Wer hat Interesse, ungefähre Zahl der Teilnehmenden, Wochentag, sonstiges…",
      submit: "Anfrage per E-Mail senden",
      subject: "Ulpan — Interesse in der Gemeinde",
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
      a1: "Nein. Zugang zu Präsenz, Moodle, Vorträgen und Ankündigungen folgt aus der Mitgliedschaft bei BiFoDe e.V.",
      q2: "Wie lerne ich online?",
      a2: "Individuell über Moodle (ulpan.bifode.org), nach der Aufnahme in den Verein.",
      q3: "Was, wenn es in meiner Stadt keinen Ulpan gibt?",
      a3: "So sehen wir, wo eine Präsenzgruppe gebraucht wird. Bis eine Gruppe entsteht, können Sie nach der Aufnahme online über Moodle starten.",
      q3Link: "Interesse in der Gemeinde",
      q4: "Wie entsteht eine Gruppe vor Ort?",
      a4: "Über jüdische Organisationen — Gemeinde, Verein oder Community. Die Organisation schreibt uns über das",
      a4Link: "Kontaktformular",
      q5: "Wie läuft eine Stunde vor Ort?",
      a5: "Zwei volle Stunden, einmal wöchentlich, mit Pause. Schwerpunkt: gesprochenes Hebräisch. Materialien gibt es parallel in Moodle.",
      q6: "Was ist Hishtalmut?",
      a6: "Die Fortbildung der Lehrkräfte. Sie führen aktive Dozentinnen und Lehrkräfte der Hebräischen Universität Jerusalem durch. Materialien und Methodik kommen aus derselben Schule.",
      q7: "Gibt es Ermäßigung?",
      a7: "Ja: Studierende / ermäßigt 144 € / Jahr statt 180 €.",
    },
    kontakt: {
      title: "Kontakt — Ulpan Ivrit",
      desc: "Drei Wege: Lernende, Träger, Lehrkräfte — oder direkt an info@bifode.org.",
      h1: "Kontakt",
      intro: "Wählen Sie, wer Sie sind. Allgemeine Fragen gehen an",
      mail: "E-Mail",
      learnersTitle: "Lernende",
      learners: "Mitglied werden, dann Online oder Vor Ort. Wenn in Ihrer Gemeinde Interesse an einer Gruppe besteht — schreiben Sie uns.",
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
      desc: "BiFoDe e.V. führt Ulpan Ivrit in Deutschland durch. Mitgliedschaft 180 € / 144 €.",
      h1: "Durchführung durch BiFoDe e.V.",
      p1: "Das Programm kommt von der Zionistischen Weltorganisation, Ofek Israeli, der Sochnut und Keren Hayesod. Träger in Deutschland ist Bildungsforum für Demokratie und Vielfalt NRW e.V. Die Mitgliedschaft ist der Vereinsbeitrag, kein Kauf eines Einzelkurses.",
      fees: "Standard 180 € / Jahr, Studierende / ermäßigt 144 € / Jahr.",
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
      descDefault: "Иврит очно и онлайн — Ulpan Ivrit, BiFoDe e.V.",
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
      f5: "Членский взнос 180 € / год, льготный 144 € — курс отдельно не продаётся",
      ctaRegister: "Записаться",
      howItWorks: "Как участвовать",
      noUlpan: "Нет ульпана в вашем городе? Если в общине есть интерес — напишите нам.",
      onlineTitle: "Онлайн — индивидуально",
      onlineText: "Moodle из любой точки. Тот же материал, что у группы.",
      onlineLink: "К онлайн-курсам",
      localTitle: "Очно — в общине",
      localText: "Группы при общине, союзе или community. Два часа в неделю.",
      localLink: "Запись — и интерес в общине",
    },
    soGehts: {
      title: "Запись — Ulpan Ivrit",
      desc: "Запись через членство в BiFoDe e.V.: Moodle, очные занятия где есть группа, лекции. Интерес в общине? Напишите нам.",
      h1: "Запись",
      intro:
        "Запись на ульпан идёт через членство в BiFoDe e.V. Отдельный курс купить нельзя. После рассмотрения и приёма вы пользуетесь предложениями союза: онлайн, очные занятия где есть группа, лекции и даты.",
      step1: "Стать членом",
      step1Text:
        "Заявку подаёте на bifode.org. Союз рассматривает приём. После этого вы получаете доступ — не как покупатель курса, а как член союза.",
      step1BenefitsTitle: "Члены союза получают:",
      step1Benefits: [
        "Доступ в Moodle (ulpan.bifode.org) — те же материалы, что на занятиях",
        "Очные занятия, где уже есть группа",
        "Лекции и даты — онлайн и очно, по программе",
        "Анонсы по учёбе",
      ],
      step1Fee: "Взнос: 180 € / год, студенты и льгота 144 € / год.",
      step2: "Формат после приёма",
      onlineTitle: "Онлайн — из любого места",
      onlineText:
        "Moodle индивидуально, те же материалы, что на занятиях. Подходит, если вы не можете или не хотите учиться очно.",
      onlineLink: "Онлайн-курсы",
      localTitle: "Очно — если есть группа",
      localText:
        "2 полных часа, раз в неделю, с перерывом. Акцент: разговорный иврит. Материал параллельно в Moodle.",
      citiesTitle: "Города, где уже есть очная группа:",
      cities: ["Дюссельдорф", "Берлин"],
      localMail: "В общине ещё нет группы? Напишите нам в следующем шаге.",
      wishTitle: "Интерес в общине",
      wishText:
        "Если в вашей общине, союзе или community есть интерес к группе ульпана — напишите нам. Это и для учащихся, и для тех, кто готов вести группу на месте.",
      step3: "Интерес в общине?",
      step3Text: "Подробная форма для организаторов, которые сами хотят вести группу:",
      step3Link: "Страница «Очно»",
      formTitle: "Запрос по электронной почте",
      formLead: "Форма откроет письмо на нашу почту. Это не замена заявки в союз.",
      formMail: "Сообщение уйдёт на",
      name: "Имя",
      email: "Эл. почта",
      org: "Община / организация",
      orgPh: "необязательно",
      city: "Город / община",
      cityPh: "например, Essen…",
      level: "Уровень",
      levelBeginner: "Начинающий",
      levelSome: "есть база",
      levelUnknown: "пока не знаю",
      onlineUntil: "Пока нет группы: готовы начать онлайн?",
      onlineYes: "Да, начну онлайн",
      onlineNo: "Нет, только очно",
      message: "Сообщение",
      messagePh: "Кто заинтересован, примерное число участников, день недели, другое…",
      submit: "Отправить на почту",
      subject: "Ulpan — интерес в общине",
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
      a1: "Нет. Доступ к очным занятиям, Moodle, лекциям и анонсам следует из членства в BiFoDe e.V.",
      q2: "Как учиться онлайн?",
      a2: "Индивидуально в Moodle (ulpan.bifode.org) после приёма в союз.",
      q3: "Что, если в моём городе нет ульпана?",
      a3: "Так мы видим, где нужна очная группа. Пока группа не собралась, после приёма можно начать онлайн в Moodle.",
      q3Link: "интерес в общине",
      q4: "Как появляется очная группа?",
      a4: "Через еврейские организации — общину, союз или community. Организация пишет нам через",
      a4Link: "форму",
      q5: "Как проходит очное занятие?",
      a5: "Два полных часа, раз в неделю, с перерывом. Акцент: разговорный иврит. Материалы параллельно в Moodle.",
      q6: "Что такое Hishtalmut?",
      a6: "Повышение квалификации преподавателей. Его ведут действующие преподаватели Еврейского университета в Иерусалиме. Материалы и методика — из той же школы.",
      q7: "Есть льгота?",
      a7: "Да: студенты / льгота 144 € / год вместо 180 €.",
    },
    kontakt: {
      title: "Контакты — Ulpan Ivrit",
      desc: "Три пути: учащиеся, организаторы, преподаватели — или сразу на info@bifode.org.",
      h1: "Контакты",
      intro: "Выберите, кто вы. Общие вопросы — на",
      mail: "Эл. почта",
      learnersTitle: "Учащиеся",
      learners: "Сначала членство, затем онлайн или очно. Если в общине есть интерес к группе — напишите нам.",
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
      desc: "BiFoDe e.V. ведёт Ulpan Ivrit в Германии. Взнос 180 € / 144 €.",
      h1: "Реализация — BiFoDe e.V.",
      p1: "Программа идёт от Всемирной сионистской организации, Ofek Israeli, Сохнута и Керен ха-Йесод. Оператор в Германии — Bildungsforum für Demokratie und Vielfalt NRW e.V. Членский взнос — это членский взнос в некоммерческую организацию BiFoDe e.V.",
      fees: "Обычный взнос 180 € / год, студенты / льгота 144 € / год.",
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
      descDefault: "Learn Hebrew in person and online — Ulpan Ivrit, BiFoDe e.V.",
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
      f5: "Membership 180 € / year, reduced 144 € — courses are not sold separately",
      ctaRegister: "Register",
      howItWorks: "How to take part",
      noUlpan: "No ulpan in your city? If there is interest in the community — write to us.",
      onlineTitle: "Online — individual",
      onlineText: "Moodle from anywhere. The group’s material is mirrored there.",
      onlineLink: "Online courses",
      localTitle: "In person — in the community",
      localText: "Groups at a congregation, association or community. Two hours a week.",
      localLink: "Registration — and community interest",
    },
    soGehts: {
      title: "Registration — Ulpan Ivrit",
      desc: "Join through membership of BiFoDe e.V.: Moodle, in-person classes where a group exists, talks. Interest in your community? Write to us.",
      h1: "Registration",
      intro:
        "You join the ulpan through membership of BiFoDe e.V. Courses are not sold one by one. After review and admission you use the association’s offer: online study, in-person classes where a group exists, talks and dates.",
      step1: "Become a member",
      step1Text:
        "You apply on bifode.org. The association reviews admission. After that you receive access — not as a course buyer, but as a member.",
      step1BenefitsTitle: "Members receive:",
      step1Benefits: [
        "Access to Moodle (ulpan.bifode.org) — the same materials as in class",
        "In-person teaching where a group already runs",
        "Talks and dates, online and in person, depending on the programme",
        "Course announcements",
      ],
      step1Fee: "Fee: 180 € / year, students and reduced rate 144 € / year.",
      step2: "Format after admission",
      onlineTitle: "Online — from anywhere",
      onlineText:
        "Moodle individually, the same materials as in class. Fits if you cannot or do not want to study in person.",
      onlineLink: "Online courses",
      localTitle: "In person — when a group exists",
      localText:
        "2 full hours, once a week, with a break. Focus: spoken Hebrew. The material is also in Moodle.",
      citiesTitle: "Cities with an in-person group:",
      cities: ["Düsseldorf", "Berlin"],
      localMail: "No group in your community yet? Write to us in the next step.",
      wishTitle: "Interest in the community",
      wishText:
        "If there is interest in an ulpan group in your congregation, association or community, write to us. That applies to learners and to hosts who want to start a local group.",
      step3: "Interest in your community?",
      step3Text: "A longer form for hosts who want to run a group themselves:",
      step3Link: "In-person page",
      formTitle: "Request by email",
      formLead: "The form opens an email to us. It does not replace the membership application.",
      formMail: "The message goes to",
      name: "Name",
      email: "Email",
      org: "Congregation / organisation",
      orgPh: "optional",
      city: "City / community",
      cityPh: "e.g. Essen…",
      level: "Level",
      levelBeginner: "Beginner",
      levelSome: "some prior knowledge",
      levelUnknown: "I don’t know yet",
      onlineUntil: "Until a group exists: can you start online?",
      onlineYes: "Yes, I will start online",
      onlineNo: "No, in person only",
      message: "Message",
      messagePh: "Who is interested, approximate number of participants, weekday, anything else…",
      submit: "Send by email",
      subject: "Ulpan — community interest",
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
      a1: "No. Access to in-person classes, Moodle, talks and announcements comes with membership of BiFoDe e.V.",
      q2: "How do I learn online?",
      a2: "Individually on Moodle (ulpan.bifode.org), after admission to the association.",
      q3: "What if there is no ulpan in my city?",
      a3: "That shows us where an in-person group is needed. Until a group exists, you can start online on Moodle after admission.",
      q3Link: "community interest",
      q4: "How does an in-person group start?",
      a4: "Through Jewish organisations — a congregation, association or community. The organisation writes to us via the",
      a4Link: "form",
      q5: "What does an in-person session look like?",
      a5: "Two full hours, once a week, with a break. Focus: spoken Hebrew. Materials are also in Moodle.",
      q6: "What is Hishtalmut?",
      a6: "Teacher training. It is run by active lecturers and teachers of the Hebrew University of Jerusalem. Materials and method come from the same school.",
      q7: "Is there a reduced fee?",
      a7: "Yes: students / reduced 144 € / year instead of 180 €.",
    },
    kontakt: {
      title: "Contact — Ulpan Ivrit",
      desc: "Three paths: learners, hosts, teachers — or write to info@bifode.org.",
      h1: "Contact",
      intro: "Choose who you are. General questions go to",
      mail: "Email",
      learnersTitle: "Learners",
      learners: "Become a member, then study online or in person. If there is interest in a group in your community — write to us.",
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
      desc: "BiFoDe e.V. delivers Ulpan Ivrit in Germany. Membership 180 € / 144 €.",
      h1: "Delivered by BiFoDe e.V.",
      p1: "The programme comes from the World Zionist Organization, Ofek Israeli, the Jewish Agency and Keren Hayesod. The host in Germany is Bildungsforum für Demokratie und Vielfalt NRW e.V. Membership is the association fee, not the purchase of a single course.",
      fees: "Standard 180 € / year, students / reduced 144 € / year.",
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
