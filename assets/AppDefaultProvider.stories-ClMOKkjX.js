import{A as l}from"./AppDefaultProvider-B8RgfZuW.js";import{r as p,w as d}from"./vue.esm-bundler-BKJyKm6Y.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./dimensions-EDViMRT6.js";import"./getCurrentInstance-nZJizLIO.js";import"./tag-CTXKRa89.js";import"./theme-DFCExzcr.js";const x={title:"General/DefaultProvider",component:l,tags:["autodocs"],args:{},argTypes:{modelValue:{control:"boolean"}}},e={args:{},render:(r,{argTypes:m})=>({components:{AppDefaultProvider:l},setup(){const t=p(r.modelValue);return d(()=>r.modelValue,s=>{t.value=s}),{args:r,model:t}},template:`
      <AppDefaultProvider v-bind="args" v-model="model">      
        <div style="display: flex; align-items:flex-start; gap: 8px;"> 
          teste
        </div> 
      </AppDefaultProvider>
    `})};var a,o,n;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
          teste
        </div> 
      </AppDefaultProvider>
    \`
  })
}`,...(n=(o=e.parameters)==null?void 0:o.docs)==null?void 0:n.source}}};const y=["Default"];export{e as Default,y as __namedExportsOrder,x as default};
