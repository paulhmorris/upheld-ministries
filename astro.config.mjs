// @ts-check
import { defineConfig } from "astro/config";

import tailwind from "@astrojs/tailwind";

import partytown from "@astrojs/partytown";

import sitemap from "@astrojs/sitemap";

import icon from "astro-icon";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), partytown(), sitemap(), icon()],
});
