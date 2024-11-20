import{d as i,c as m,o as f,e as c,f as b,n as y}from"./vue.esm-bundler-CUTHD45Y.js";import{_ as g}from"./_plugin-vue_export-helper-DlAUqK2U.js";const u=i({__name:"AppButton",props:{disabled:{type:Boolean},outlined:{type:Boolean},full:{type:Boolean},fab:{type:Boolean},rounded:{type:Boolean},borderColor:{default:"primary"},color:{default:"white-900"},background:{default:"primary"},size:{default:"md"},transparent:{type:Boolean},glow:{type:Boolean,default:!1}},setup(n){const e=n,p=m(()=>({"button--full":e.full!==void 0&&e.full,"button--disabled":e.disabled!==void 0&&e.disabled,[`text-${e.color}`]:e.color!==void 0,"text-black-900":e.color!==void 0&&e.outlined,[`bg-${e.background}`]:e.background!==void 0&&!e.outlined,"button--outlined":e.outlined!==void 0&&e.outlined,[`button--border border-${e.borderColor}`]:e.outlined&&e.borderColor!==void 0&&e.borderColor,[`button--size-${e.size}`]:e.size,"button--fab":e.fab!==void 0&&e.fab,"button--transparent":e.transparent!==void 0&&e.transparent,"button--rounded":e.rounded!==void 0&&e.rounded,"button--glow":e.glow!==void 0&&e.glow}));return(a,t)=>(f(),c("button",{class:y(["button",p.value]),onClick:t[0]||(t[0]=v=>a.disabled?"":a.$emit("click"))},[b(a.$slots,"default",{},void 0,!0)],2))}}),d=g(u,[["__scopeId","data-v-8dc3d965"]]);u.__docgenInfo={exportName:"default",displayName:"AppButton",description:"",tags:{},props:[{name:"disabled",required:!1,type:{name:"boolean"}},{name:"outlined",required:!1,type:{name:"boolean"}},{name:"full",required:!1,type:{name:"boolean"}},{name:"fab",required:!1,type:{name:"boolean"}},{name:"rounded",required:!1,type:{name:"boolean"}},{name:"borderColor",required:!1,type:{name:"ColorTypes"},defaultValue:{func:!1,value:'"primary"'}},{name:"color",required:!1,type:{name:"ColorTypes"},defaultValue:{func:!1,value:'"white-900"'}},{name:"background",required:!1,type:{name:"ColorTypes"},defaultValue:{func:!1,value:'"primary"'}},{name:"size",required:!1,type:{name:"union",elements:[{name:'"xl"'},{name:'"lg"'},{name:'"md"'},{name:'"sm"'}]},defaultValue:{func:!1,value:'"md"'}},{name:"transparent",required:!1,type:{name:"boolean"}},{name:"glow",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}}],events:[{name:"click"}],slots:[{name:"default"}],sourceFiles:["/home/runner/work/design-system-02/design-system-02/packages/vue/src/components/ui/button/AppButton.vue"]};const q={title:"General/Button",component:d,tags:["autodocs"],argTypes:{size:{control:"select",options:["sm","md","lg","xl"]}},args:{}},o={args:{},render:n=>({components:{AppButton:d},setup(){return{args:n}},template:`
      <AppButton  v-bind="args" >      
         Botão
      </AppButton>
    `})};var r,l,s;o.parameters={...o.parameters,docs:{...(r=o.parameters)==null?void 0:r.docs,source:{originalSource:`{
  args: {},
  render: args => ({
    components: {
      AppButton
    },
    setup() {
      return {
        args
      };
    },
    template: \`
      <AppButton  v-bind="args" >      
         Botão
      </AppButton>
    \`
  })
}`,...(s=(l=o.parameters)==null?void 0:l.docs)==null?void 0:s.source}}};const C=["Default"];export{o as Default,C as __namedExportsOrder,q as default};
