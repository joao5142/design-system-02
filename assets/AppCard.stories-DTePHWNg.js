import{d as m,y as f,c as t,o as C,e as b,f as g,n as v}from"./vue.esm-bundler-CUTHD45Y.js";import{u as _}from"./theme-CFK1jaIt.js";import{_ as y}from"./_plugin-vue_export-helper-DlAUqK2U.js";import"./colorUtils-BXtfXuor.js";const l=m({__name:"AppCard",props:{background:{default:"white-50"},borderColor:{default:"white-100"},detailColor:{},disabled:{type:Boolean},detailPosition:{default:"left"}},setup(r){f(o=>({"5115b906":c.value}));const p=_(),e=r,u=t(()=>({[`bg-${e.background}`]:e.background!==void 0,[`border-${e.borderColor}`]:e.borderColor!==void 0,"card--disabled":e.disabled!==void 0&&e.disabled,"card--detail":e.detailColor!==void 0&&e.detailColor,"card--detail-right":e.detailPosition==="right","card--detail-top":e.detailPosition==="top","card--detail-bottom":e.detailPosition==="bottom"})),c=t(()=>e.detailColor?p.current.value.colors[e.detailColor]:"white");return(o,h)=>(C(),b("div",{"aria-label":"card",class:v(["card",u.value])},[g(o.$slots,"default",{},void 0,!0)],2))}}),i=y(l,[["__scopeId","data-v-cd153504"]]);l.__docgenInfo={exportName:"default",displayName:"AppCard",description:"",tags:{},props:[{name:"background",required:!1,type:{name:"ColorTypes"},defaultValue:{func:!1,value:'"white-50"'}},{name:"borderColor",required:!1,type:{name:"ColorTypes"},defaultValue:{func:!1,value:'"white-100"'}},{name:"detailColor",required:!1,type:{name:"ColorTypes"}},{name:"disabled",required:!1,type:{name:"boolean"}},{name:"detailPosition",required:!1,type:{name:"union",elements:[{name:'"left"'},{name:'"right"'},{name:'"top"'},{name:'"bottom"'}]},defaultValue:{func:!1,value:'"left"'}}],slots:[{name:"default"}],sourceFiles:["/home/runner/work/design-system-02/design-system-02/packages/vue/src/components/ui/card/AppCard.vue"]};const x={title:"General/Card",component:i,tags:["autodocs"],args:{}},a={args:{},render:r=>({components:{AppCard:i},setup(){return{args:r}},template:`
      <AppCard  v-bind="args" >      
         Card teste
      </AppCard>
    `})};var s,d,n;a.parameters={...a.parameters,docs:{...(s=a.parameters)==null?void 0:s.docs,source:{originalSource:`{
  args: {},
  render: args => ({
    components: {
      AppCard
    },
    setup() {
      return {
        args
      };
    },
    template: \`
      <AppCard  v-bind="args" >      
         Card teste
      </AppCard>
    \`
  })
}`,...(n=(d=a.parameters)==null?void 0:d.docs)==null?void 0:n.source}}};const P=["Default"];export{a as Default,P as __namedExportsOrder,x as default};
