import{c as b,J as R,q as l,K as Y,B as E,T as Z,L as p,M as ee,E as C,r as te,w as x,N as ne,y as re,O as ae,P as $,Q as se,F as le,R as oe}from"./vue.esm-bundler-BKJyKm6Y.js";import{m as W,a as ie,g as M,u as ue,b as q}from"./dimensions-EDViMRT6.js";import{j as ce,k as F,n as de,a as ve,b as ge,p as I,o as fe,S as D,g as me,h as be}from"./getCurrentInstance-nZJizLIO.js";function A(e){return ce(()=>{const r=[],n={};if(e.value.background)if(F(e.value.background)){if(n.backgroundColor=e.value.background,!e.value.text&&de(e.value.background)){const t=ve(e.value.background);if(t.a==null||t.a===1){const i=ge(t);n.color=i,n.caretColor=i}}}else r.push(`bg-${e.value.background}`);return e.value.text&&(F(e.value.text)?(n.color=e.value.text,n.caretColor=e.value.text):r.push(`text-${e.value.text}`)),{colorClasses:r,colorStyles:n}})}function Te(e,r){const n=b(()=>({text:R(e)?e.value:r?e[r]:null})),{colorClasses:t,colorStyles:i}=A(n);return{textColorClasses:t,textColorStyles:i}}function Se(e,r){const n=b(()=>({background:R(e)?e.value:r?e[r]:null})),{colorClasses:t,colorStyles:i}=A(n);return{backgroundColorClasses:t,backgroundColorStyles:i}}function ye(e){return{aspectStyles:b(()=>{const r=Number(e.aspectRatio);return r?{paddingBottom:String(1/r*100)+"%"}:void 0})}}const H=I({aspectRatio:[String,Number],contentClass:null,inline:Boolean,...W(),...ie()},"VResponsive"),U=M()({name:"VResponsive",props:H(),setup(e,r){let{slots:n}=r;const{aspectStyles:t}=ye(e),{dimensionStyles:i}=ue(e);return q(()=>{var c;return l("div",{class:["v-responsive",{"v-responsive--inline":e.inline},e.class],style:[i.value,e.style]},[l("div",{class:"v-responsive__sizer",style:t.value},null),(c=n.additional)==null?void 0:c.call(n),n.default&&l("div",{class:["v-responsive__content",e.contentClass]},[n.default()])])}),{}}}),_e=I({rounded:{type:[Boolean,Number,String],default:void 0},tile:Boolean},"rounded");function he(e){let r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:fe();return{roundedClasses:b(()=>{const t=R(e)?e.value:e.rounded,i=R(e)?e.value:e.tile,c=[];if(t===!0||t==="")c.push(`${r}--rounded`);else if(typeof t=="string"||t===0)for(const f of String(t).split(" "))c.push(`rounded-${f}`);else(i||t===!1)&&c.push("rounded-0");return c})}}const Ce=I({transition:{type:[Boolean,String,Object],default:"fade-transition",validator:e=>e!==!0}},"transition"),k=(e,r)=>{let{slots:n}=r;const{transition:t,disabled:i,group:c,...f}=e,{component:g=c?Z:p,...S}=typeof t=="object"?t:{};return Y(g,E(typeof t=="string"?{name:i?"":t}:S,typeof t=="string"?{}:Object.fromEntries(Object.entries({disabled:i,group:c}).filter(s=>{let[o,v]=s;return v!==void 0})),f),n)};function ke(e,r){if(!D)return;const n=r.modifiers||{},t=r.value,{handler:i,options:c}=typeof t=="object"?t:{handler:t,options:{}},f=new IntersectionObserver(function(){var v;let g=arguments.length>0&&arguments[0]!==void 0?arguments[0]:[],S=arguments.length>1?arguments[1]:void 0;const s=(v=e._observe)==null?void 0:v[r.instance.$.uid];if(!s)return;const o=g.some(y=>y.isIntersecting);i&&(!n.quiet||s.init)&&(!n.once||o||s.init)&&i(o,g,S),o&&n.once?L(e,r):s.init=!0},c);e._observe=Object(e._observe),e._observe[r.instance.$.uid]={init:!1,observer:f},f.observe(e)}function L(e,r){var t;const n=(t=e._observe)==null?void 0:t[r.instance.$.uid];n&&(n.observer.unobserve(e),delete e._observe[r.instance.$.uid])}const Re={mounted:ke,unmounted:L},Ie=I({absolute:Boolean,alt:String,cover:Boolean,color:String,draggable:{type:[Boolean,String],default:void 0},eager:Boolean,gradient:String,lazySrc:String,options:{type:Object,default:()=>({root:void 0,rootMargin:void 0,threshold:void 0})},sizes:String,src:{type:[String,Object],default:""},crossorigin:String,referrerpolicy:String,srcset:String,position:String,...H(),...W(),..._e(),...Ce()},"VImg"),Be=M()({name:"VImg",directives:{intersect:Re},props:Ie(),emits:{loadstart:e=>!0,load:e=>!0,error:e=>!0},setup(e,r){let{emit:n,slots:t}=r;const{backgroundColorClasses:i,backgroundColorStyles:c}=Se(ee(e,"color")),{roundedClasses:f}=he(e),g=me("VImg"),S=C(""),s=te(),o=C(e.eager?"loading":"idle"),v=C(),y=C(),d=b(()=>e.src&&typeof e.src=="object"?{src:e.src.src,srcset:e.srcset||e.src.srcset,lazySrc:e.lazySrc||e.src.lazySrc,aspect:Number(e.aspectRatio||e.src.aspect||0)}:{src:e.src,srcset:e.srcset,lazySrc:e.lazySrc,aspect:Number(e.aspectRatio||0)}),_=b(()=>d.value.aspect||v.value/y.value||0);x(()=>e.src,()=>{z(o.value!=="idle")}),x(_,(a,u)=>{!a&&u&&s.value&&h(s.value)}),ne(()=>z());function z(a){if(!(e.eager&&a)&&!(D&&!a&&!e.eager)){if(o.value="loading",d.value.lazySrc){const u=new Image;u.src=d.value.lazySrc,h(u,null)}d.value.src&&re(()=>{var u;n("loadstart",((u=s.value)==null?void 0:u.currentSrc)||d.value.src),setTimeout(()=>{var m;if(!g.isUnmounted)if((m=s.value)!=null&&m.complete){if(s.value.naturalWidth||B(),o.value==="error")return;_.value||h(s.value,null),o.value==="loading"&&T()}else _.value||h(s.value),j()})})}}function T(){var a;g.isUnmounted||(j(),h(s.value),o.value="loaded",n("load",((a=s.value)==null?void 0:a.currentSrc)||d.value.src))}function B(){var a;g.isUnmounted||(o.value="error",n("error",((a=s.value)==null?void 0:a.currentSrc)||d.value.src))}function j(){const a=s.value;a&&(S.value=a.currentSrc||a.src)}let P=-1;ae(()=>{clearTimeout(P)});function h(a){let u=arguments.length>1&&arguments[1]!==void 0?arguments[1]:100;const m=()=>{if(clearTimeout(P),g.isUnmounted)return;const{naturalHeight:N,naturalWidth:O}=a;N||O?(v.value=O,y.value=N):!a.complete&&o.value==="loading"&&u!=null?P=window.setTimeout(m,u):(a.currentSrc.endsWith(".svg")||a.currentSrc.startsWith("data:image/svg+xml"))&&(v.value=1,y.value=1)};m()}const w=b(()=>({"v-img__img--cover":e.cover,"v-img__img--contain":!e.cover})),G=()=>{var m;if(!d.value.src||o.value==="idle")return null;const a=l("img",{class:["v-img__img",w.value],style:{objectPosition:e.position},src:d.value.src,srcset:d.value.srcset,alt:e.alt,crossorigin:e.crossorigin,referrerpolicy:e.referrerpolicy,draggable:e.draggable,sizes:e.sizes,ref:s,onLoad:T,onError:B},null),u=(m=t.sources)==null?void 0:m.call(t);return l(k,{transition:e.transition,appear:!0},{default:()=>[$(u?l("picture",{class:"v-img__picture"},[u,a]):a,[[oe,o.value==="loaded"]])]})},J=()=>l(k,{transition:e.transition},{default:()=>[d.value.lazySrc&&o.value!=="loaded"&&l("img",{class:["v-img__img","v-img__img--preload",w.value],style:{objectPosition:e.position},src:d.value.lazySrc,alt:e.alt,crossorigin:e.crossorigin,referrerpolicy:e.referrerpolicy,draggable:e.draggable},null)]}),K=()=>t.placeholder?l(k,{transition:e.transition,appear:!0},{default:()=>[(o.value==="loading"||o.value==="error"&&!t.error)&&l("div",{class:"v-img__placeholder"},[t.placeholder()])]}):null,Q=()=>t.error?l(k,{transition:e.transition,appear:!0},{default:()=>[o.value==="error"&&l("div",{class:"v-img__error"},[t.error()])]}):null,X=()=>e.gradient?l("div",{class:"v-img__gradient",style:{backgroundImage:`linear-gradient(${e.gradient})`}},null):null,V=C(!1);{const a=x(_,u=>{u&&(requestAnimationFrame(()=>{requestAnimationFrame(()=>{V.value=!0})}),a())})}return q(()=>{const a=U.filterProps(e);return $(l(U,E({class:["v-img",{"v-img--absolute":e.absolute,"v-img--booting":!V.value},i.value,f.value,e.class],style:[{width:be(e.width==="auto"?v.value:e.width)},c.value,e.style]},a,{aspectRatio:_.value,"aria-label":e.alt,role:e.alt?"img":void 0}),{additional:()=>l(le,null,[l(G,null,null),l(J,null,null),l(X,null,null),l(K,null,null),l(Q,null,null)]),default:t.default}),[[se("intersect"),{handler:z,options:e.options},null,{once:!0}]])}),{currentSrc:S,image:s,state:o,naturalWidth:v,naturalHeight:y}}});export{Re as I,k as M,Be as V,Ce as a,Se as b,Te as c,A as d,Ie as e,U as f,_e as m,he as u};
