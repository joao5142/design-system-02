import { fileURLToPath, URL } from "node:url";
import vuetify, { transformAssetUrls } from "vite-plugin-vuetify";

import { resolve } from "path";
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import vueDevTools from "vite-plugin-vue-devtools";

import dts from "vite-plugin-dts";

// https://vitejs.dev/config/

//@ts-ignore
export default defineConfig({
  plugins: [
    vue({
      template: { transformAssetUrls },
    }),
    vueDevTools(),
    dts(),
    vuetify({ autoImport: true }),
  ],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },

  build: {
    lib: {
      entry: resolve(__dirname, "./index.ts"),
      name: "Can I HelpU - Design System",
      fileName: "bundle",
    },

    rollupOptions: {
      external: ["vue"],

      output: {
        globals: {
          vue: "Vue",
        },
      },
    },
    emptyOutDir: false,
  },
});
