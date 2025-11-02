import { defineConfig } from "@pandacss/dev";

export default defineConfig({
	jsxFramework: "qwik",

	// Whether to use css reset
	preflight: true,

	// Where to look for your css declarations
	include: ["./src/**/*.{js,jsx,ts,tsx}"],

	// Files to exclude
	exclude: [],

	// Useful for theme customization
	theme: {
		extend: {},
	},

	globalVars: {
		"--font-hanken-grotesk": "Hanken Grotesk Variable, sans-serif",
	},

	globalCss: {
		html: {
			"--global-font-body": "Hanken Grotesk Variable, sans-serif",
		},
	},

	// The output directory for your css system
	outdir: "src/styled-system",
});
