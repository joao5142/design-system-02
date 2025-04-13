import{A as r}from"./AppStep-D9kqQ6ew.js";import{r as o}from"./vue.esm-bundler-BKJyKm6Y.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";const i={title:"General/Step",component:r,tags:["autodocs"],args:{}},e={args:{},render:s=>({components:{AppStep:r},setup(){const a=[{name:"Email"},{name:"Codigo"},{name:"Senha"}],m=o(0);return{args:s,steps:a,currentStep:m}},template:`
      <AppStep v-bind="args" :steps="steps" :currentStep="currentStep">
          <template #item.1> teste 1 </template>

          <template #item.3> teste 2</template>

          <template #item.3> teste 3</template>
      </AppStep>
      `})};var t,n,p;e.parameters={...e.parameters,docs:{...(t=e.parameters)==null?void 0:t.docs,source:{originalSource:`{
  args: {},
  render: args => ({
    components: {
      AppStep
    },
    setup() {
      const steps = [{
        name: "Email"
      }, {
        name: "Codigo"
      }, {
        name: "Senha"
      }];
      const currentStep = ref<number>(0);
      return {
        args,
        steps,
        currentStep
      };
    },
    template: \`
      <AppStep v-bind="args" :steps="steps" :currentStep="currentStep">
          <template #item.1> teste 1 </template>

          <template #item.3> teste 2</template>

          <template #item.3> teste 3</template>
      </AppStep>
      \`
  })
}`,...(p=(n=e.parameters)==null?void 0:n.docs)==null?void 0:p.source}}};const S=["Default"];export{e as Default,S as __namedExportsOrder,i as default};
