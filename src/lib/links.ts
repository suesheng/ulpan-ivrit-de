/** Off-site http(s) links: keep this vitrine open. */
export const EXT = {
  target: "_blank",
  rel: "noopener noreferrer",
} as const;

export const LINKS = {
  site: "https://www.ulpan-ivrit.de",
  vereinHome: "https://www.bifode.org",
  ulpanProject: "https://www.bifode.org/projekte/ulpan-next",
  membership: "https://form.jotform.com/261742322871052",
  jotformUlpan: "https://form.jotform.com/261742322871052",
  moodle: "https://ulpan.bifode.org",
  contactEmail: "info@bifode.org",
  impressum: "https://www.bifode.org/impressum",
  datenschutz: "https://www.bifode.org/datenschutz",
  meinverein: "https://www.meinverein.de/",
  wzo: "https://www.wzo.org.il/",
  ofekIsraeli: "https://www.ofekisraeli.org/",
  sochnut: "https://www.jewishagency.org/",
  kerenHayesod: "https://www.kh-uia.org.il/",
  huji: "https://en.huji.ac.il/",
} as const;

/** Social share preview (WhatsApp, Facebook, Telegram, X). */
export const OG = {
  imagePath: "/og/ulpan-anmeldung.jpg",
  imageType: "image/jpeg",
  imageWidth: 1024,
  imageHeight: 576,
} as const;

export const PARTNERS = [
  {
    id: "bifode",
    name: "BiFoDe e.V.",
    role: "Trägerschaft",
    href: LINKS.vereinHome,
    logo: "/brand/partners/bifode.png",
    width: 550,
    height: 140,
    blurb:
      "Träger von Ulpan Ivrit in Deutschland und organisatorischer Rahmen der Mitgliedschaft.",
  },
  {
    id: "wzo",
    name: "Zionistische Weltorganisation",
    role: "Partner",
    href: LINKS.wzo,
    logo: "/brand/partners/wzo.png",
    width: 427,
    height: 155,
    blurb: "Abteilung zur Förderung der Aliyah. Partner von Ulpan Ivrit.",
  },
  {
    id: "keren-hayesod",
    name: "Keren Hayesod – United Israel Appeal",
    role: "Partner",
    href: LINKS.kerenHayesod,
    logo: "/brand/partners/keren-hayesod.png",
    width: 402,
    height: 301,
    blurb: "Keren Hayesod ist Partner von Ulpan Ivrit.",
  },
  {
    id: "ofek",
    name: "Ofek Israeli",
    role: "Partner",
    href: LINKS.ofekIsraeli,
    logo: "/brand/partners/ofek-israeli.png",
    width: 416,
    height: 183,
    blurb: "Ofek Israeli ist Partner von Ulpan Ivrit.",
  },
  {
    id: "sochnut",
    name: "The Jewish Agency for Israel",
    role: "Partner",
    href: LINKS.sochnut,
    logo: "/brand/partners/jewish-agency.png",
    width: 444,
    height: 106,
    blurb: "Die Jewish Agency – Sochnut – ist Partner von Ulpan Ivrit.",
  },
] as const;

export const METHODIK = {
  name: "Hebrew University of Jerusalem",
  nameDe: "Hebräische Universität Jerusalem",
  href: LINKS.huji,
} as const;

/** Typical Präsenz session: two lessons of 45 min with a break. */
export const SESSION = {
  lessonMinutes: 45,
  lessonsPerSession: 2,
  frequencyDe: "mittwochs",
  focusDe: "gesprochenes Hebräisch",
} as const;

/** Course fees (membership itself is free). Düsseldorf A1 2026/27. */
export const MEMBERSHIP = {
  memberLesson: 8,
  nonMemberLesson: 16,
  totalLessons: 60,
  memberMonth: 60,
  nonMemberMonth: 120,
  memberTotal: 480,
  nonMemberTotal: 960,
  installments: 8,
} as const;
