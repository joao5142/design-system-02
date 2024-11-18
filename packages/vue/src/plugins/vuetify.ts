import { createVuetify, ThemeDefinition } from "vuetify";
import { fontSizes, fontWeights, colors } from "@can-i-helpu-ds/tokens";

export const vuetifyFontSizesVariables = {
  "theme-font-size-xs": fontSizes.xs,
  "theme-font-size-sm": fontSizes.sm,
  "theme-font-size-md": fontSizes.md,
  "theme-font-size-lg": fontSizes.lg,
  "theme-font-size-xl": fontSizes.xl,
  "theme-font-size-2xl": fontSizes["2xl"],
  "theme-font-size-3xl": fontSizes["3xl"],
  "theme-font-size-4xl": fontSizes["4xl"],
  "theme-font-size-5xl": fontSizes["5xl"],
  "theme-font-size-6xl": fontSizes["6xl"],
  "theme-font-size-7xl": fontSizes["7xl"],
} as const;

export const vuetifyFontWeightVariables = {
  "theme-font-weight-regular": fontWeights.regular,
  "theme-font-weight-medium": fontWeights.medium,
  "theme-font-weight-semibold": fontWeights.semibold,
  "theme-font-weight-bold": fontWeights.bold,
} as const;

const variablesTheme = {
  ...vuetifyFontSizesVariables,
  ...vuetifyFontWeightVariables,
};

const lightTheme: ThemeDefinition = {
  dark: false,
  colors: { ...colors.light },
  variables: variablesTheme,
};
const darkTheme: ThemeDefinition = {
  dark: true,
  colors: { ...colors.dark },
  variables: variablesTheme,
};

export const vuetifyConfig = createVuetify({
  ssr: true,
  theme: {
    defaultTheme: "light",
    themes: {
      light: lightTheme,
      dark: darkTheme,
    },
  },

  defaults: {},
});
