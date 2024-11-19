import { vuetifyConfig } from "@/plugins/vuetify";

import * as components from "../../components";

export const registerComponents = (vueApp: any) => {
  let prop: keyof typeof components;

  for (prop in components) {
    const component = components[prop];
    console.log(component, component.__name);
    vueApp.component(component.__name, component);
  }

  vueApp.use(vuetifyConfig);
};
