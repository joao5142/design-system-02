import{A as a}from"./AppDrawer-D5j1lqi4.js";import{r as s,w as i}from"./vue.esm-bundler-DCSqlbet.js";import"./AppDefaultProvider-HeLJrBaJ.js";import"./AppPost-DjynnUlv.js";import"./AppUserCard-BvQACAv6.js";import"./AppStep-BOGj2aSx.js";import"./AppAvatar-T-B5oTRR.js";import"./AppBox-BfW11f5D.js";import{A as l}from"./AppButton-Q5n8dZZu.js";import"./AppCard-BI39GtBo.js";import"./AppCheckbox-BueptZ0D.js";import"./AppInput-NIWMZI9T.js";import"./AppSelect-Hb-gAuaM.js";import"./AppLoading-BmvxepRi.js";import"./AppText-xPVAkT3D.js";import"./AppDivider-CscRZl4o.js";import"./AppCodeInput-CeKkGbso.js";import"./theme-C3RwJRXJ.js";import"./getCurrentInstance-0HMiDkHL.js";import"./VNavigationDrawer-BiCb1Ug2.js";import"./dimensions-BWArFbR3.js";import"./VImg-B566SN8e.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";const q={title:"General/DragFile",component:a,tags:["autodocs"],args:{},argTypes:{modelValue:{control:"boolean"}}},r={args:{},render:(e,{argTypes:u})=>({components:{AppDragFile:a,AppButton:l},setup(){const t=s(e.modelValue);return i(()=>e.modelValue,m=>{t.value=m}),{args:e,model:t}},template:`

      <AppDragFile style="height:400px" />
    `})};var o,p,n;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
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

      <AppDragFile style="height:400px" />
    \`
  })
}`,...(n=(p=r.parameters)==null?void 0:p.docs)==null?void 0:n.source}}};const z=["Default"];export{r as Default,z as __namedExportsOrder,q as default};
