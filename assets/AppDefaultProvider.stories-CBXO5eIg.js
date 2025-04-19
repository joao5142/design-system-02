import{A as l}from"./AppDefaultProvider-HeLJrBaJ.js";import{r as p,w as d}from"./vue.esm-bundler-DCSqlbet.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./dimensions-BWArFbR3.js";import"./getCurrentInstance-0HMiDkHL.js";import"./theme-C3RwJRXJ.js";const y={title:"General/DefaultProvider",component:l,tags:["autodocs"],args:{},argTypes:{modelValue:{control:"boolean"}}},e={args:{},render:(r,{argTypes:i})=>({components:{AppDefaultProvider:l},setup(){const a=p(r.modelValue);return d(()=>r.modelValue,s=>{a.value=s}),{args:r,model:a}},template:`
      <AppDefaultProvider v-bind="args" v-model="model">      
        <div style="display: flex; align-items:flex-start; gap: 8px;"> 
           Vuetify Provider Slot
        </div> 
      </AppDefaultProvider>
    `})};var o,t,n;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
  args: {},
  render: (args, {
    argTypes
  }) => ({
    components: {
      AppDefaultProvider
    },
    setup() {
      // @ts-ignore
      const model = ref(args.modelValue);
      watch(
      // @ts-ignore
      () => args.modelValue, val => {
        model.value = val;
      });
      return {
        args,
        model
      };
    },
    template: \`
      <AppDefaultProvider v-bind="args" v-model="model">      
        <div style="display: flex; align-items:flex-start; gap: 8px;"> 
           Vuetify Provider Slot
        </div> 
      </AppDefaultProvider>
    \`
  })
}`,...(n=(t=e.parameters)==null?void 0:t.docs)==null?void 0:n.source}}};const D=["Default"];export{e as Default,D as __namedExportsOrder,y as default};
