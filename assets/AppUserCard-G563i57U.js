import{d as m,k as d,o,l as u,m as a,q as r,s as t,t as n,e as i,h as _}from"./vue.esm-bundler-BKJyKm6Y.js";import{U as f,A as g}from"./AppAvatar-BlHr1m_Q.js";import{A as p}from"./AppText-B96Ge-DO.js";import{_ as y}from"./_plugin-vue_export-helper-DlAUqK2U.js";const k={key:0,href:"",class:"card__link"},l=m({__name:"AppUserCard",props:{isMe:{type:Boolean},imFollowing:{type:Boolean},user:{default:()=>({avatar:f,name:"João Paulo",year:"2023"})}},setup(v){return(e,A)=>{const c=d("app-box");return o(),u(c,{class:"pa-4 card","hover-effect":"",background:"dark-300"},{default:a(()=>{var s;return[r(g,{class:"card__avatar",size:50,src:(s=e.user)==null?void 0:s.avatar},null,8,["src"]),r(p,{class:"d-block mt-7 card__name",as:"strong",color:"text-900"},{default:a(()=>[t(n(e.user.name),1)]),_:1}),r(p,{as:"span",color:"text-700",size:"xs"},{default:a(()=>[t(" Desde "+n(e.user.year),1)]),_:1}),e.isMe?_("",!0):(o(),i("a",k,"Deixar de seguir"))]}),_:1})}}}),h=y(l,[["__scopeId","data-v-c80d5b1c"]]);l.__docgenInfo={exportName:"default",displayName:"AppUserCard",description:"",tags:{},props:[{name:"isMe",required:!0,type:{name:"boolean"}},{name:"imFollowing",required:!1,type:{name:"boolean"}},{name:"user",required:!0,type:{name:"IUser"},defaultValue:{func:!1,value:`() => ({
  avatar: UserDefaultImage,
  name: "João Paulo",
  year: "2023",
})`}}],sourceFiles:["/home/runner/work/design-system-02/design-system-02/packages/vue/src/components/partials/userCard/AppUserCard.vue"]};export{h as A};
