import "../dist/style.css";
import "./styles.scss";
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

      const providerProps = data.parameters.providerProps || {};
      const fullHeight = providerProps.fullHeight || false;

      return {
        components: {AppDefaultProvider},

        setup() {
          return {
            providerProps,
            containerClass: fullHeight ? 'storybook-max-h-full' : 'storybook-max-h-300',
          };
        },

        computed: {},
        template: '<AppDefaultProvider :class="containerClass" class="storybook-overflow-auto"><story/></AppDefaultProvider>',
      };
    },
  ],
};

export default preview;
