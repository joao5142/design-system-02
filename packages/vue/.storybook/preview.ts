import "../dist/style.css";
import { vuetifyConfig } from "../src/plugins/vuetify";

import type { Preview } from "@storybook/vue3";

import { setup } from "@storybook/vue3";
import AppDefaultProvider from '../src/components/providers/defaultProvider/AppDefaultProvider.vue';

setup((app) => {
  app.use(vuetifyConfig);
});

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  decorators: [
    (_, data) => {
      return {
        components: {AppDefaultProvider},

        computed: {},
        template: '<AppDefaultProvider><story/></AppDefaultProvider>',
      };
    },
  ],
};

export default preview;
