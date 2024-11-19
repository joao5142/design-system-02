import { vuetifyConfig } from "@/plugins/vuetify";

import * as components from "../../components";

export const registerComponents = (vueApp: any) => {
  let prop: keyof typeof components;

  for (prop in components) {
    const component = components[prop];
    vueApp.component(component.name, component);
  }

  vueApp.use(vuetifyConfig);
};
