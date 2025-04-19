import{b as p}from"./AppDrawer-CltQ_JF2.js";import{r as s,w as i}from"./vue.esm-bundler-DCSqlbet.js";import"./AppDefaultProvider-HeLJrBaJ.js";import"./AppPost-DjynnUlv.js";import"./AppUserCard-BvQACAv6.js";import"./AppStep-BOGj2aSx.js";import"./AppAvatar-T-B5oTRR.js";import"./AppBox-BfW11f5D.js";import{A as l}from"./AppButton-Q5n8dZZu.js";import"./AppCard-BI39GtBo.js";import"./AppCheckbox-BueptZ0D.js";import"./AppInput-NIWMZI9T.js";import"./AppSelect-Hb-gAuaM.js";import"./AppLoading-BmvxepRi.js";import"./AppText-xPVAkT3D.js";import"./AppDivider-CscRZl4o.js";import"./AppCodeInput-CeKkGbso.js";import"./theme-C3RwJRXJ.js";import"./getCurrentInstance-0HMiDkHL.js";import"./VNavigationDrawer-BiCb1Ug2.js";import"./dimensions-BWArFbR3.js";import"./VImg-B566SN8e.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";const q={title:"General/DragFile",component:p,tags:["autodocs"],args:{},argTypes:{modelValue:{control:"boolean"}}},r={args:{},render:(o,{argTypes:g})=>({components:{AppDragFile:p,AppButton:l},setup(){const e=s(o.modelValue);return i(()=>o.modelValue,m=>{e.value=m}),{args:o,model:e}},template:`

      <AppDragFile class="storybook-drag-height" />
    `})};var t,a,n;r.parameters={...r.parameters,docs:{...(t=r.parameters)==null?void 0:t.docs,source:{originalSource:`{
  args: {},
  render: (args, {
    argTypes
  }) => ({
    components: {
      AppDragFile,
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

      <AppDragFile class="storybook-drag-height" />
    \`
  })
}`,...(n=(a=r.parameters)==null?void 0:a.docs)==null?void 0:n.source}}};const z=["Default"];export{r as Default,z as __namedExportsOrder,q as default};
