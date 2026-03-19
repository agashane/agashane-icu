import { defineConfig } from "@pandacss/dev";

export default defineConfig({
  // Whether to use css reset
  preflight: true,

  // Where to look for your css declarations
  include: ["./src/**/*.{js,ts,astro}"],

  // Files to exclude
  exclude: [],

  // Useful for theme customization
  theme: {
    extend: {
      tokens: {
        fonts: {
          inclusiveSans: { value: "var(--font-inclusive-sans), sans-serif" },
        },
      },
      semanticTokens: {
        colors: {
          fg: {
            DEFAULT: { value: "{colors.slate.800}" },
            muted: { value: "{colors.slate.600}" },
          },
        },
      },
    },
  },

  globalCss: {
    html: {
      "--global-font-body": "var(--font-inclusive-sans), sans-serif",
    },
  },

  // The output directory for your css system
  outdir: "styled-system",
});
