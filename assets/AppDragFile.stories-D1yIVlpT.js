import{A as a}from"./AppDrawer-BdBC2Sdf.js";import{r as i,w as s}from"./vue.esm-bundler-BKJyKm6Y.js";import"./AppModal-Dj4DW9Wk.js";import"./AppDefaultProvider-B8RgfZuW.js";import"./AppPost-tJ9zX38f.js";import"./AppUserCard-G563i57U.js";import"./AppStep-D9kqQ6ew.js";import"./AppAvatar-BlHr1m_Q.js";import"./AppBox-0sIoPnVn.js";import{A as l}from"./AppButton-CcZjYpRc.js";import"./AppCard-DibDZXo5.js";import"./AppCheckbox-BikmMXtv.js";import"./AppInput-BYm8fXjd.js";import"./AppSelect-3Hbm-rAt.js";import"./AppLoading-i3Td1Vrp.js";import"./AppText-B96Ge-DO.js";import"./AppDivider-CkDYsHxb.js";import"./AppCodeInput-BU2HleT4.js";import"./theme-DFCExzcr.js";import"./getCurrentInstance-nZJizLIO.js";import"./VNavigationDrawer-B6Mdu3BA.js";import"./dimensions-EDViMRT6.js";import"./tag-CTXKRa89.js";import"./VDialog-D1_3ZOLx.js";import"./VImg-DG-yODh1.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";const H={title:"General/DragFile",component:a,tags:["autodocs"],args:{},argTypes:{modelValue:{control:"boolean"}}},r={args:{},render:(o,{argTypes:u})=>({components:{AppDragFile:a,AppButton:l},setup(){const e=i(o.modelValue);return s(()=>o.modelValue,m=>{e.value=m}),{args:o,model:e}},template:`

      <AppDragFile />
    `})};var t,p,n;r.parameters={...r.parameters,docs:{...(t=r.parameters)==null?void 0:t.docs,source:{originalSource:`{
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

      <AppDragFile />
    \`
  })
}`,...(n=(p=r.parameters)==null?void 0:p.docs)==null?void 0:n.source}}};const I=["Default"];export{r as Default,I as __namedExportsOrder,H as default};
