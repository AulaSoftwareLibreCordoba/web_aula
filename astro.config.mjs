import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import react from "@astrojs/react";

import auth from "auth-astro";

import netlify from "@astrojs/netlify";

export default defineConfig({
  integrations: [tailwind(), react(), auth()],

  buildOptions: {
    tsconfig: './tsconfig.json',
  },

  output: "server",
  adapter: netlify({
    edgeMiddleware: true
  }
  ),
});