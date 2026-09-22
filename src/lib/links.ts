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

/** Typical Präsenz session: two full hours, weekly, with a break. */
export const SESSION = {
  hours: 2,
  frequencyDe: "einmal wöchentlich",
  focusDe: "gesprochenes Hebräisch",
} as const;

/** Course fees (membership itself is free). */
export const MEMBERSHIP = {
  memberHour: 8,
  nonMemberHour: 16,
  hoursPerYear: 60,
  memberYear: 480,
  nonMemberYear: 960,
  memberMonth: 40,
  nonMemberMonth: 80,
} as const;
