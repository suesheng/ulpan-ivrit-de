import { defineConfig } from "astro/config";
import vercel from "@astrojs/vercel";

export default defineConfig({
  site: "https://www.ulpan-ivrit.de",
  output: "static",
  adapter: vercel(),
  redirects: {
    "/impressum": "https://www.bifode.org/impressum",
    "/datenschutz": "https://www.bifode.org/datenschutz",
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
