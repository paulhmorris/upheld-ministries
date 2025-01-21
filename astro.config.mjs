// @ts-check
import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";
import icon from "astro-icon";
import { defineConfig } from "astro/config";
import { viteStaticCopy } from "vite-plugin-static-copy";

const iconsPath = "node_modules/@shoelace-style/shoelace/dist/assets/icons";

// https://astro.build/config
export default defineConfig({
  vite: {
    resolve: {
      alias: [
        {
          find: /\/assets\/icons\/(.+)/,
          replacement: `${iconsPath}/$1`,
        },
      ],
    },
    plugins: [
      viteStaticCopy({
        targets: [
          {
            src: iconsPath,
            dest: "assets",
          },
        ],
      }),
    ],
  },
  integrations: [tailwind({ applyBaseStyles: false }), sitemap(), icon()],
});
