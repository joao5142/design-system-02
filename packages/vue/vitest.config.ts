import { fileURLToPath } from "node:url";
import { mergeConfig, defineConfig, configDefaults } from "vitest/config";
import viteConfig from "./vite.config";
import path from "node:path";

export default mergeConfig(
  viteConfig,
  defineConfig({
    test: {
      globals: true,
      environment: "jsdom",
      coverage: {
        reportsDirectory: "./coverage",
      },
      server: {
        deps: {
          inline: ["vuetify"],
        },
      },
      setupFiles: path.resolve(__dirname, "./src/tests/utils/vuetify.ts"),
    },
  })
);
