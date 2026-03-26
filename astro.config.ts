// @ts-check
import { defineConfig, fontProviders } from "astro/config";
import cloudflare from "@astrojs/cloudflare";
import sitemap from "@astrojs/sitemap";
import { remarkReadingTime } from "./src/lib/reading-time";

const isDev = import.meta.env.MODE === "development";

// https://astro.build/config
export default defineConfig({
  site: isDev ? "http://localhost:4321" : "https://agashane.icu",
  adapter: cloudflare(),
  fonts: [
    {
      provider: fontProviders.fontsource(),
      name: "Inclusive Sans",
      cssVariable: "--font-inclusive-sans",
      weights: ["100 700"],
    },
  ],
  i18n: {
    locales: ["en", "fr"],
    defaultLocale: "en",
    routing: {
      prefixDefaultLocale: true,
      redirectToDefaultLocale: true,
    },
  },
  redirects: {
    "/": "/en",
  },
  markdown: {
    remarkPlugins: [remarkReadingTime],
  },
  integrations: [
    sitemap({
      i18n: {
        defaultLocale: "en",
        locales: {
          en: "en-GB",
          fr: "fr-FR",
        },
      },
    }),
  ],
  devToolbar: {
    enabled: isDev,
  },
});
