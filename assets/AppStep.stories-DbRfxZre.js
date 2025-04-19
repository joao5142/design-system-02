import{A as s}from"./AppStep-BOGj2aSx.js";import"./vue.esm-bundler-DCSqlbet.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";const i={title:"General/Step",component:s,tags:["autodocs"],args:{}},e={args:{current:0},render:a=>({components:{AppStep:s},setup(){return{args:a,steps:[{name:"Email"},{name:"Codigo"},{name:"Senha"}]}},template:`
      <AppStep v-bind="args" :steps="steps">
          <template #item.1> teste 1 </template>

          <template #item.2> teste 2</template>

          <template #item.3> teste 3</template>
      </AppStep>
      `})};var t,n,p;e.parameters={...e.parameters,docs:{...(t=e.parameters)==null?void 0:t.docs,source:{originalSource:`{
  args: {
    current: 0
  },
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
      return {
        args,
        steps
      };
    },
    template: \`
      <AppStep v-bind="args" :steps="steps">
          <template #item.1> teste 1 </template>

          <template #item.2> teste 2</template>

          <template #item.3> teste 3</template>
      </AppStep>
      \`
  })
}`,...(p=(n=e.parameters)==null?void 0:n.docs)==null?void 0:p.source}}};const c=["Default"];export{e as Default,c as __namedExportsOrder,i as default};
