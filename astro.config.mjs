/** @format */

// @ts-check
import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import starlight from "@astrojs/starlight";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
	site: "https://tajsmods.github.io",
	base: "/",
	// Ensure consistent trailing slashes for all URLs
	trailingSlash: "always",
	// Build options for GitHub Pages compatibility
	build: {
		format: "directory",
	},
	// Enable prefetching for faster navigation (limited to viewport to save memory)
	prefetch: {
		defaultStrategy: "viewport", // Only prefetch links visible in viewport
	},
	// Enable content intellisense for Markdown/MDX files
	experimental: {
		contentIntellisense: true,
	},
	vite: {
		plugins: [tailwindcss()],
	},
	integrations: [
		// Sitemap for SEO
		sitemap(),
		starlight({
			title: "Taj's Mods",
			// Serve Starlight docs under /docs prefix
			// Note: Starlight content is in src/content/docs/
			social: [
				{
					icon: "github",
					label: "GitHub",
					href: "https://github.com/tajsmods",
				},
			],
			// Disable default Starlight homepage since we have custom index
			disable404Route: true,
			customCss: ["./src/styles/starlight-custom.css"],
			// Enable table of contents for documentation
			tableOfContents: { minHeadingLevel: 2, maxHeadingLevel: 4 },
			// Enable last updated timestamps
			lastUpdated: true,
		}),
	],
});
