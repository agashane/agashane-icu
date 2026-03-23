// @ts-check
import { defineConfig, fontProviders } from "astro/config";
import cloudflare from "@astrojs/cloudflare";
import { remarkReadingTime } from "./src/lib/reading-time";

// https://astro.build/config
export default defineConfig({
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
});
