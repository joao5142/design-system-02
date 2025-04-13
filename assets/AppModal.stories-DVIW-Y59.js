import{A as l}from"./AppModal-Dj4DW9Wk.js";import{r as p,w as d}from"./vue.esm-bundler-BKJyKm6Y.js";import"./VDialog-D1_3ZOLx.js";import"./dimensions-EDViMRT6.js";import"./getCurrentInstance-nZJizLIO.js";import"./tag-CTXKRa89.js";import"./VImg-DG-yODh1.js";import"./theme-DFCExzcr.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";const M={title:"General/Modal",component:l,tags:["autodocs"],args:{},argTypes:{modelValue:{control:"boolean"}}},e={args:{},render:(a,{argTypes:m})=>({components:{AppModal:l},setup(){const o=p(a.modelValue);return d(()=>a.modelValue,s=>{o.value=s}),{args:a,model:o}},template:`
      <AppModal v-bind="args" v-model="model">      
        <div style="display: flex; align-items:flex-start; gap: 8px;"> 
          teste
        </div> 
      </AppModal>
    `})};var t,n,r;e.parameters={...e.parameters,docs:{...(t=e.parameters)==null?void 0:t.docs,source:{originalSource:`{
  args: {},
  render: (args, {
    argTypes
  }) => ({
    components: {
      AppModal
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
      <AppModal v-bind="args" v-model="model">      
        <div style="display: flex; align-items:flex-start; gap: 8px;"> 
          teste
        </div> 
      </AppModal>
    \`
  })
}`,...(r=(n=e.parameters)==null?void 0:n.docs)==null?void 0:r.source}}};const V=["Default"];export{e as Default,V as __namedExportsOrder,M as default};
