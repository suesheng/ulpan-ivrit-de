import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import vercel from "@astrojs/vercel";

export default defineConfig({
  site: "https://www.ulpan-ivrit.de",
  output: "static",
  adapter: vercel(),
  integrations: [
    sitemap({
      i18n: {
        defaultLocale: "de",
        locales: {
          de: "de-DE",
          ru: "ru",
          en: "en",
        },
      },
      filter: (page) => !page.includes("/community"),
    }),
  ],
  redirects: {
    "/impressum": "https://www.bifode.org/impressum",
    "/datenschutz": "https://www.bifode.org/datenschutz",
    "/community": "/verein",
    "/ru/community": "/ru/verein",
    "/en/community": "/en/verein",
  },
  i18n: {
    defaultLocale: "de",
    locales: ["de", "ru", "en", "he"],
    routing: {
      prefixDefaultLocale: false,
    },
    fallback: {
      he: "de",
    },
  },
});
