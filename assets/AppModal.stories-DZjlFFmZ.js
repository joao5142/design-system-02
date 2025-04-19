import{b as a}from"./AppDrawer-D5j1lqi4.js";import{r as l,w as s}from"./vue.esm-bundler-DCSqlbet.js";import"./AppDefaultProvider-HeLJrBaJ.js";import"./AppPost-DjynnUlv.js";import"./AppUserCard-BvQACAv6.js";import"./AppStep-BOGj2aSx.js";import"./AppAvatar-T-B5oTRR.js";import"./AppBox-BfW11f5D.js";import{A as i}from"./AppButton-Q5n8dZZu.js";import"./AppCard-BI39GtBo.js";import"./AppCheckbox-BueptZ0D.js";import"./AppInput-NIWMZI9T.js";import"./AppSelect-Hb-gAuaM.js";import"./AppLoading-BmvxepRi.js";import"./AppText-xPVAkT3D.js";import"./AppDivider-CscRZl4o.js";import"./AppCodeInput-CeKkGbso.js";import"./theme-C3RwJRXJ.js";import"./getCurrentInstance-0HMiDkHL.js";import"./VNavigationDrawer-BiCb1Ug2.js";import"./dimensions-BWArFbR3.js";import"./VImg-B566SN8e.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";const q={title:"General/Modal",component:a,tags:["autodocs"],args:{},argTypes:{modelValue:{control:"boolean"}}},t={args:{},render:(o,{argTypes:d})=>({components:{AppModal:a,AppButton:i},setup(){const e=l(o.modelValue);return s(()=>o.modelValue,m=>{e.value=m}),{args:o,model:e}},template:`
      <AppButton @click="model = true">Abrir</AppButton>

      <AppModal v-bind="args" v-model="model">      
        <div style="display: flex; align-items:flex-start; gap: 8px;"> 
          teste
        </div> 
      </AppModal>
    `})};var r,p,n;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
  args: {},
  render: (args, {
    argTypes
  }) => ({
    components: {
      AppModal,
      AppButton
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
      <AppButton @click="model = true">Abrir</AppButton>

      <AppModal v-bind="args" v-model="model">      
        <div style="display: flex; align-items:flex-start; gap: 8px;"> 
          teste
        </div> 
      </AppModal>
    \`
  })
}`,...(n=(p=t.parameters)==null?void 0:p.docs)==null?void 0:n.source}}};const z=["Default"];export{t as Default,z as __namedExportsOrder,q as default};
