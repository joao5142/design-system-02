import{r as k,c as p,w as $,a as A,b as T,p as S}from"./vue.esm-bundler-BKJyKm6Y.js";import{p as x,m as C,I as y,g as j,c as H,R as N,a as b,b as R,d as I,l as L,e as V}from"./getCurrentInstance-nZJizLIO.js";const g=Symbol.for("vuetify:theme"),_=x({theme:String},"theme");function E(){return{defaultTheme:"light",variations:{colors:[],lighten:0,darken:0},themes:{light:{dark:!1,colors:{background:"#FFFFFF",surface:"#FFFFFF","surface-bright":"#FFFFFF","surface-light":"#EEEEEE","surface-variant":"#424242","on-surface-variant":"#EEEEEE",primary:"#1867C0","primary-darken-1":"#1F5592",secondary:"#48A9A6","secondary-darken-1":"#018786",error:"#B00020",info:"#2196F3",success:"#4CAF50",warning:"#FB8C00"},variables:{"border-color":"#000000","border-opacity":.12,"high-emphasis-opacity":.87,"medium-emphasis-opacity":.6,"disabled-opacity":.38,"idle-opacity":.04,"hover-opacity":.04,"focus-opacity":.12,"selected-opacity":.08,"activated-opacity":.12,"pressed-opacity":.12,"dragged-opacity":.08,"theme-kbd":"#212529","theme-on-kbd":"#FFFFFF","theme-code":"#F5F5F5","theme-on-code":"#000000"}},dark:{dark:!0,colors:{background:"#121212",surface:"#212121","surface-bright":"#ccbfd6","surface-light":"#424242","surface-variant":"#a3a3a3","on-surface-variant":"#424242",primary:"#2196F3","primary-darken-1":"#277CC1",secondary:"#54B6B2","secondary-darken-1":"#48A9A6",error:"#CF6679",info:"#2196F3",success:"#4CAF50",warning:"#FB8C00"},variables:{"border-color":"#FFFFFF","border-opacity":.12,"high-emphasis-opacity":1,"medium-emphasis-opacity":.7,"disabled-opacity":.5,"idle-opacity":.1,"hover-opacity":.04,"focus-opacity":.12,"selected-opacity":.08,"activated-opacity":.12,"pressed-opacity":.16,"dragged-opacity":.08,"theme-kbd":"#212529","theme-on-kbd":"#FFFFFF","theme-code":"#343434","theme-on-code":"#CCCCCC"}}}}}function M(){var l,n;let r=arguments.length>0&&arguments[0]!==void 0?arguments[0]:E();const e=E();if(!r)return{...e,isDisabled:!0};const a={};for(const[o,s]of Object.entries(r.themes??{})){const f=s.dark||o==="dark"?(l=e.themes)==null?void 0:l.dark:(n=e.themes)==null?void 0:n.light;a[o]=C(f,s)}return C(e,{...r,themes:a})}function G(r){const e=M(r),a=k(e.defaultTheme),l=k(e.themes),n=p(()=>{const m={};for(const[d,c]of Object.entries(l.value)){const u=m[d]={...c,colors:{...c.colors}};if(e.variations)for(const i of e.variations.colors){const t=u.colors[i];if(t)for(const h of["lighten","darken"]){const B=h==="lighten"?L:V;for(const F of H(e.variations[h],1))u.colors[`${i}-${h}-${F}`]=N(B(b(t),F))}}for(const i of Object.keys(u.colors)){if(/^on-[a-z]/.test(i)||u.colors[`on-${i}`])continue;const t=`on-${i}`,h=b(u.colors[i]);u.colors[t]=R(h)}}return m}),o=p(()=>n.value[a.value]),s=p(()=>{var i;const m=[];(i=o.value)!=null&&i.dark&&v(m,":root",["color-scheme: dark"]),v(m,":root",O(o.value));for(const[t,h]of Object.entries(n.value))v(m,`.v-theme--${t}`,[`color-scheme: ${h.dark?"dark":"normal"}`,...O(h)]);const d=[],c=[],u=new Set(Object.values(n.value).flatMap(t=>Object.keys(t.colors)));for(const t of u)/^on-[a-z]/.test(t)?v(c,`.${t}`,[`color: rgb(var(--v-theme-${t})) !important`]):(v(d,`.bg-${t}`,[`--v-theme-overlay-multiplier: var(--v-theme-${t}-overlay-multiplier)`,`background-color: rgb(var(--v-theme-${t})) !important`,`color: rgb(var(--v-theme-on-${t})) !important`]),v(c,`.text-${t}`,[`color: rgb(var(--v-theme-${t})) !important`]),v(c,`.border-${t}`,[`--v-border-color: var(--v-theme-${t})`]));return m.push(...d,...c),m.map((t,h)=>h===0?t:`    ${t}`).join("")});function f(){return{style:[{children:s.value,id:"vuetify-theme-stylesheet",nonce:e.cspNonce||!1}]}}function w(m){if(e.isDisabled)return;const d=m._context.provides.usehead;if(d)if(d.push){const c=d.push(f);y&&$(s,()=>{c.patch(f)})}else y?(d.addHeadObjs(p(f)),A(()=>d.updateDOM())):d.addHeadObjs(f());else{let u=function(){if(typeof document<"u"&&!c){const i=document.createElement("style");i.type="text/css",i.id="vuetify-theme-stylesheet",e.cspNonce&&i.setAttribute("nonce",e.cspNonce),c=i,document.head.appendChild(c)}c&&(c.innerHTML=s.value)},c=y?document.getElementById("vuetify-theme-stylesheet"):null;y?$(s,u,{immediate:!0}):u()}}const D=p(()=>e.isDisabled?void 0:`v-theme--${a.value}`);return{install:w,isDisabled:e.isDisabled,name:a,themes:l,current:o,computedThemes:n,themeClasses:D,styles:s,global:{name:a,current:o}}}function P(r){j("provideTheme");const e=T(g,null);if(!e)throw new Error("Could not find Vuetify theme injection");const a=p(()=>r.theme??e.name.value),l=p(()=>e.themes.value[a.value]),n=p(()=>e.isDisabled?void 0:`v-theme--${a.value}`),o={...e,name:a,current:l,themeClasses:n};return S(g,o),o}function q(){j("useTheme");const r=T(g,null);if(!r)throw new Error("Could not find Vuetify theme injection");return r}function v(r,e,a){r.push(`${e} {
`,...a.map(l=>`  ${l};
`),`}
`)}function O(r){const e=r.dark?2:1,a=r.dark?1:2,l=[];for(const[n,o]of Object.entries(r.colors)){const s=b(o);l.push(`--v-theme-${n}: ${s.r},${s.g},${s.b}`),n.startsWith("on-")||l.push(`--v-theme-${n}-overlay-multiplier: ${I(o)>.18?e:a}`)}for(const[n,o]of Object.entries(r.variables)){const s=typeof o=="string"&&o.startsWith("#")?b(o):void 0,f=s?`${s.r}, ${s.g}, ${s.b}`:void 0;l.push(`--v-${n}: ${f??o}`)}return l}export{g as T,G as c,_ as m,P as p,q as u};
