(()=>{var e={};e.id=931,e.ids=[931],e.modules={7849:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external")},2934:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external.js")},5403:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external")},4580:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external.js")},4749:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external")},5869:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external.js")},399:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},9491:e=>{"use strict";e.exports=require("assert")},2361:e=>{"use strict";e.exports=require("events")},7147:e=>{"use strict";e.exports=require("fs")},3685:e=>{"use strict";e.exports=require("http")},5687:e=>{"use strict";e.exports=require("https")},2037:e=>{"use strict";e.exports=require("os")},1017:e=>{"use strict";e.exports=require("path")},2781:e=>{"use strict";e.exports=require("stream")},6224:e=>{"use strict";e.exports=require("tty")},7310:e=>{"use strict";e.exports=require("url")},3837:e=>{"use strict";e.exports=require("util")},9796:e=>{"use strict";e.exports=require("zlib")},3562:(e,t,r)=>{"use strict";r.r(t),r.d(t,{GlobalError:()=>a.a,__next_app__:()=>p,originalPathname:()=>c,pages:()=>d,routeModule:()=>m,tree:()=>u});var s=r(482),o=r(9108),i=r(2563),a=r.n(i),n=r(8300),l={};for(let e in n)0>["default","tree","pages","GlobalError","originalPathname","__next_app__","routeModule"].indexOf(e)&&(l[e]=()=>n[e]);r.d(t,l);let u=["",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(r.bind(r,5745)),"/home/danielbor/Documentos/PWG/Dev/App-Facturacion/to-do-list-fronted/src/app/page.jsx"]}]},{layout:[()=>Promise.resolve().then(r.bind(r,1965)),"/home/danielbor/Documentos/PWG/Dev/App-Facturacion/to-do-list-fronted/src/app/layout.js"],"not-found":[()=>Promise.resolve().then(r.t.bind(r,9361,23)),"next/dist/client/components/not-found-error"]}],d=["/home/danielbor/Documentos/PWG/Dev/App-Facturacion/to-do-list-fronted/src/app/page.jsx"],c="/page",p={require:r,loadChunk:()=>Promise.resolve()},m=new s.AppPageRouteModule({definition:{kind:o.x.APP_PAGE,page:"/page",pathname:"/",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:u}})},1240:(e,t,r)=>{Promise.resolve().then(r.t.bind(r,2583,23)),Promise.resolve().then(r.t.bind(r,6840,23)),Promise.resolve().then(r.t.bind(r,8771,23)),Promise.resolve().then(r.t.bind(r,3225,23)),Promise.resolve().then(r.t.bind(r,9295,23)),Promise.resolve().then(r.t.bind(r,3982,23))},4563:(e,t,r)=>{Promise.resolve().then(r.bind(r,1208))},6562:(e,t,r)=>{Promise.resolve().then(r.bind(r,6847))},6847:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>u});var s=r(2295),o=r(3729),i=r(2254),a=r(3608),n=r(1356),l=r(1208);let u=function(){let[e,t]=(0,o.useState)(""),[r,u]=(0,o.useState)(""),[d,c]=(0,o.useState)(!1),[p,m]=(0,o.useState)(!1),x=(0,i.useRouter)(),h=async t=>{t.preventDefault();try{m(!0);let t={email:e.trim(),password:r.trim()};if(""===t.email||""===t.password){m(!1),l.toast.error("Todos los campos son obligatorios");return}let s=await a.Z.post("https://webdevgt.com/pwg/public/api/login",t);m(!1);let o=s.data.token;(0,n.setCookie)("_token",o,{maxAge:86400,path:"/"});let{role:i}=s.data.usuario;(0,n.setCookie)("usuario",JSON.stringify(s.data.usuario),{path:"/"}),"administrador"===i?x.push("/admin"):x.push("/mis-tareas")}catch(e){m(!1),e.response&&l.toast.error("Usuario o contrase\xf1a incorrecta")}};return(0,s.jsxs)("form",{method:"post",onSubmit:h,children:[(0,s.jsxs)("div",{className:"mb-6",children:[s.jsx("label",{className:"block text-sm text-gray-700 font-bold mb-2",htmlFor:"email",children:"Correo Electr\xf3nico"}),s.jsx("input",{className:"w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500 text-sm",type:"email",name:"email",id:"email",value:e,onChange:e=>t(e.target.value),placeholder:"correo@correo.com"})]}),(0,s.jsxs)("div",{className:"mb-6",children:[s.jsx("label",{className:"block text-sm text-gray-700 font-bold mb-2",htmlFor:"password",children:"Contrase\xf1a"}),s.jsx("input",{className:"w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500 text-sm",type:"password",name:"password",id:"password",value:r,onChange:e=>u(e.target.value),placeholder:"*********"})]}),s.jsx("input",{className:"bg-indigo-600 mt-3 text-white p-3 w-full rounded-md hover:bg-indigo-700",type:"submit",value:p?"Iniciando sesi\xf3n, por favor espera...":"Iniciar Sesi\xf3n",disabled:p})]})}},1965:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>l,metadata:()=>n});var s=r(5036),o=r(1541),i=r.n(o);r(5023),r(7001);var a=r(3222);let n={title:"To Do List",description:"To Do List"};function l({children:e}){return s.jsx("html",{lang:"en",children:(0,s.jsxs)("body",{className:i().className,children:[s.jsx(a.Ix,{}),e]})})}},5745:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>l});var s=r(5036);let o=(0,r(6843).createProxy)(String.raw`/home/danielbor/Documentos/PWG/Dev/App-Facturacion/to-do-list-fronted/src/components/formLogin.jsx`),{__esModule:i,$$typeof:a}=o,n=o.default,l=function(){return s.jsx("div",{className:"px-10 xl:px-0 flex justify-center items-center h-screen",children:(0,s.jsxs)("div",{className:"bg-white p-6 rounded-xl shadow-md w-full max-w-sm",children:[s.jsx("h1",{className:"text-4xl mb-10 font-extrabold text-center text-indigo-700",children:"Login PWG"}),s.jsx(n,{})]})})}},5023:()=>{}};var t=require("../webpack-runtime.js");t.C(e);var r=e=>t(t.s=e),s=t.X(0,[504,518],()=>r(3562));module.exports=s})();